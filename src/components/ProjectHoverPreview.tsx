"use client";

import { useEffect, useRef } from "react";

const OFFSET = 22;
const GUTTER = 12;

export function ProjectHoverPreview() {
  const previewRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const preview = previewRef.current;
    const image = imageRef.current;
    const section = preview?.closest("section");
    if (!preview || !image || !section) return;

    const hover = window.matchMedia("(any-hover: hover)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let activeRow: HTMLElement | null = null;
    let request = 0;
    let frame = 0;
    let lastFrame = 0;
    let side: "left" | "right" | undefined;
    const target = { x: 0, y: 0 };
    const current = { x: 0, y: 0 };

    function paint() {
      preview!.style.transform = `translate3d(${current.x}px, ${current.y}px, 0)`;
    }

    function animate(time: number) {
      frame = 0;
      const progress = 1 - Math.exp(-Math.min(time - lastFrame, 40) / 46);
      lastFrame = time;
      current.x += (target.x - current.x) * progress;
      current.y += (target.y - current.y) * progress;
      if (Math.hypot(target.x - current.x, target.y - current.y) > 0.4) {
        frame = requestAnimationFrame(animate);
      } else {
        Object.assign(current, target);
      }
      paint();
    }

    function hide() {
      activeRow = null;
      request++;
      side = undefined;
      cancelAnimationFrame(frame);
      frame = 0;
      preview!.removeAttribute("data-visible");
    }

    function position(event: PointerEvent, row: HTMLElement, snap: boolean) {
      const width = preview!.offsetWidth;
      const height = preview!.offsetHeight;
      const still = reducedMotion.matches;
      const bounds = still ? row.getBoundingClientRect() : null;
      const x = bounds ? bounds.right : event.clientX;
      const y = bounds ? bounds.top + bounds.height / 2 : event.clientY;
      const right = x + OFFSET + width <= window.innerWidth - GUTTER;
      const left = x - OFFSET - width >= GUTTER;
      const nextSide = side
        ? side === "right" && !right && left ? "left"
          : side === "left" && !left && right ? "right" : side
        : right || !left ? "right" : "left";
      target.x = Math.max(GUTTER, Math.min(
        window.innerWidth - width - GUTTER,
        nextSide === "right" ? x + OFFSET : x - width - OFFSET,
      ));
      target.y = Math.max(GUTTER, Math.min(window.innerHeight - height - GUTTER, y - height / 2));

      if (snap || still || nextSide !== side) {
        cancelAnimationFrame(frame);
        frame = 0;
        Object.assign(current, target);
        paint();
      } else if (!frame) {
        lastFrame = performance.now();
        frame = requestAnimationFrame(animate);
      }
      side = nextSide;
    }

    function onPointerMove(event: PointerEvent) {
      if (event.pointerType !== "mouse" || !hover.matches || !(event.target instanceof Element)) {
        if (activeRow) hide();
        return;
      }
      const row = event.target.closest<HTMLElement>("[data-project-preview]");
      const source = row?.dataset.projectPreview;
      if (!row || !source) {
        if (activeRow) hide();
        return;
      }

      const changed = row !== activeRow;
      position(event, row, changed);
      if (!changed) return;
      activeRow = row;
      preview!.removeAttribute("data-visible");

      const pending = ++request;
      image!.src = source;
      image!.decode().then(() => {
        if (pending === request) preview!.setAttribute("data-visible", "");
      }).catch(() => {
        if (pending === request) hide();
      });
    }

    function onKeyDown(event: KeyboardEvent) {
      if (activeRow && (event.key === "Escape" || event.key === "Tab")) hide();
    }

    section.addEventListener("pointermove", onPointerMove, { passive: true });
    section.addEventListener("pointerleave", hide);
    window.addEventListener("resize", hide);
    window.addEventListener("scroll", hide, { passive: true });
    window.addEventListener("keydown", onKeyDown);
    reducedMotion.addEventListener("change", hide);
    return () => {
      hide();
      section.removeEventListener("pointermove", onPointerMove);
      section.removeEventListener("pointerleave", hide);
      window.removeEventListener("resize", hide);
      window.removeEventListener("scroll", hide);
      window.removeEventListener("keydown", onKeyDown);
      reducedMotion.removeEventListener("change", hide);
    };
  }, []);

  return (
    <div ref={previewRef} className="project-hover-preview" aria-hidden="true">
      {/* The decorative image has no source until the corresponding row is hovered. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img ref={imageRef} alt="" width={960} height={600} />
    </div>
  );
}
