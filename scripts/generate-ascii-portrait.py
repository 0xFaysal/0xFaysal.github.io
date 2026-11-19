"""Render the portfolio photo as ASCII glyphs. Requires Pillow."""

from html import escape
from itertools import groupby
from pathlib import Path

from PIL import Image, ImageFilter, ImageOps


ROOT = Path(__file__).resolve().parents[1]
PHOTO = ROOT / "public/me/IMG_4246.JPG.jpeg"
PORTRAIT = ROOT / "public/ascii-portrait-closeup.svg"
GLYPHS = " .,:-+ox%#@"
INK_OPACITY = (0.14, 0.32, 0.58, 0.82, 1)
COLUMNS, ROWS = 64, 48
CELL_WIDTH, CELL_HEIGHT = 7, 10
WIDTH, HEIGHT = COLUMNS * CELL_WIDTH, ROWS * CELL_HEIGHT


def main() -> None:
    with Image.open(PHOTO) as source:
        photo = ImageOps.exif_transpose(source)
        width, height = photo.size
        # Frame the face tightly and give skin more contrast against the sky.
        photo = photo.crop(
            (round(width * 0.305), round(height * 0.06),
             round(width * 0.865), round(height * 0.50))
        )
        gray = photo.convert("RGB").convert("L", (0.59, 0.33, 0.08, 0))
        gray = ImageOps.autocontrast(gray, cutoff=2)
        grid = gray.resize((COLUMNS, ROWS), Image.Resampling.LANCZOS)
        grid = grid.filter(ImageFilter.UnsharpMask(radius=1, percent=95, threshold=3))

    lines = []
    for y in range(ROWS):
        tones = []
        for x in range(COLUMNS):
            distance_from_center = abs((x + 0.5) / COLUMNS - 0.5) * 2
            edge_fade = 1 - 0.58 * distance_from_center ** 3
            tones.append(grid.getpixel((x, y)) / 255 * edge_fade)
        cells = [
            (min(int(tone * len(INK_OPACITY)), len(INK_OPACITY) - 1),
             GLYPHS[round(tone ** 0.72 * (len(GLYPHS) - 1))])
            for tone in tones
        ]
        runs = []
        for tone, group in groupby(cells, key=lambda cell: cell[0]):
            glyphs = escape("".join(glyph for _, glyph in group))
            runs.append(f'<tspan fill-opacity="{INK_OPACITY[tone]}">{glyphs}</tspan>')
        lines.append(
            f'<text x="0" y="{y * CELL_HEIGHT + 9}" textLength="{WIDTH}" '
            f'lengthAdjust="spacingAndGlyphs">{"".join(runs)}</text>'
        )

    svg = [
        f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {WIDTH} {HEIGHT}" '
        f'width="{WIDTH}" height="{HEIGHT}">',
        '<rect width="100%" height="100%" fill="#191b17"/>',
        '<g fill="#f3edcd" font-family="Consolas, Courier New, monospace" '
        'font-size="11.5" font-weight="700" xml:space="preserve">',
        *lines,
        "</g>",
        "</svg>",
    ]
    PORTRAIT.write_text("\n".join(svg) + "\n", encoding="ascii")


if __name__ == "__main__":
    main()
