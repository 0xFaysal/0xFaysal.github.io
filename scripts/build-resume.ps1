$ErrorActionPreference = 'Stop'
$projectRoot = Split-Path -Parent $PSScriptRoot
$engine = Join-Path $projectRoot 'bin\tectonic.exe'
$source = Join-Path $projectRoot 'resume.tex'
$buildDir = Join-Path $projectRoot 'tmp\pdfs'
$previousFontConfig = $env:FONTCONFIG_FILE

if (-not (Test-Path -LiteralPath $engine)) {
    throw 'Tectonic is missing. Place tectonic.exe in the project bin folder.'
}

try {
    if (-not $env:FONTCONFIG_FILE) {
        $env:FONTCONFIG_FILE = Join-Path $PSScriptRoot 'fonts.conf'
    }
    New-Item -ItemType Directory -Force -Path $buildDir | Out-Null
    & $engine --keep-logs --outdir $buildDir $source
    if ($LASTEXITCODE -ne 0) { throw "Tectonic failed (exit $LASTEXITCODE)." }

    $buildLog = Get-Content -Raw -LiteralPath (Join-Path $buildDir 'resume.log')
    if ($buildLog -notmatch 'Output written on .*\(1 page,') {
        throw 'Resume must be exactly one page. Review tmp/pdfs/resume.log.'
    }
    if ($buildLog -match 'Overfull \\[hv]box|Underfull \\[hv]box|Missing character:|LaTeX Font Warning:') {
        throw 'Layout or font warnings found. Review tmp/pdfs/resume.log.'
    }

    Copy-Item -LiteralPath (Join-Path $buildDir 'resume.pdf') -Destination (Join-Path $projectRoot 'resume.pdf') -Force
    $publicDir = Join-Path $projectRoot 'public'
    New-Item -ItemType Directory -Force -Path $publicDir | Out-Null
    Copy-Item -LiteralPath (Join-Path $projectRoot 'resume.pdf') -Destination (Join-Path $publicDir 'resume.pdf') -Force
    Write-Host 'Built a single-page resume.pdf and updated public/resume.pdf.'
}
finally {
    $env:FONTCONFIG_FILE = $previousFontConfig
}
