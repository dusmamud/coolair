#!/usr/bin/env python3
"""Generate responsive WebP variants for CoolAir photos (static/images/).

For each photo original WebP in static/images/, emit resized WebP (q80,
Lanczos) variants at the widths the templates actually display — never
upscaled. Naming: static/images/opt/<stem>-<w>.webp
Widths: hero 400/800/1200/1600 (original 1600w); all others 400/800/1200
(original 1200w). The full-size original WebP (static/images/<stem>.webp)
stays the largest srcset entry and the <img> src.

Re-run safely: existing variants are overwritten, originals untouched.
(The first run (2026-11-19) used the photo JPG originals as source; those
11 JPGs were unreferenced dead weight and were deleted — only the 6 OG
JPGs in static/images/og/ are served.)
"""
import os
from PIL import Image

HERE = os.path.dirname(os.path.abspath(__file__))
IMG_DIR = os.path.join(HERE, "..", "static", "images")
OUT_DIR = os.path.join(IMG_DIR, "opt")

PLAN = {
    "hero.webp": [400, 800, 1200, 1600],
    "about-workshop.webp": [400, 800, 1200],
    "after-clean.webp": [400, 800, 1200],
    "before-dirty.webp": [400, 800, 1200],
    "commercial.webp": [400, 800, 1200],
    "service-cleaning.webp": [400, 800, 1200],
    "service-gas.webp": [400, 800, 1200],
    "service-installation.webp": [400, 800, 1200],
    "service-maintenance.webp": [400, 800, 1200],
    "service-repair.webp": [400, 800, 1200],
    "team.webp": [400, 800, 1200],
}


def main():
    os.makedirs(OUT_DIR, exist_ok=True)
    total_in = total_out = 0
    for name, widths in sorted(PLAN.items()):
        src = os.path.join(IMG_DIR, name)
        if not os.path.exists(src):
            print(f"SKIP (missing source): {name}")
            continue
        stem = os.path.splitext(name)[0]
        with Image.open(src) as im:
            im = im.convert("RGB")
            w0, h0 = im.size
            total_in += os.path.getsize(src)
            for w in widths:
                if w > w0:
                    continue
                h = round(h0 * w / w0)
                out = os.path.join(OUT_DIR, f"{stem}-{w}.webp")
                im.resize((w, h), Image.LANCZOS).save(out, "WEBP", quality=80, method=6)
                total_out += os.path.getsize(out)
                print(f"{stem}-{w}.webp  {w}x{h}  {os.path.getsize(out)} B")
    print(f"total source JPGs: {total_in} B; total variants: {total_out} B")


if __name__ == "__main__":
    main()
