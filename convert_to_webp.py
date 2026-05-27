from pathlib import Path
from PIL import Image
import sys
root = Path(r'C:\toopilates\new\toopilates')
public_dir = root / 'public'
if not public_dir.exists():
    raise SystemExit('public directory missing')
image_exts = {'.png', '.jpg', '.jpeg', '.JPG', '.JPEG', '.PNG'}
converted = []
for path in public_dir.rglob('*'):
    if path.suffix in image_exts:
        webp_path = path.with_suffix('.webp')
        if webp_path.exists():
            continue
        try:
            img = Image.open(path)
            webp_path.parent.mkdir(parents=True, exist_ok=True)
            save_kwargs = {'format': 'WEBP', 'quality': 100, 'method': 6}
            if path.suffix.lower() == '.png':
                save_kwargs['lossless'] = True
            img.save(webp_path, **save_kwargs)
            converted.append((path, webp_path))
        except Exception as e:
            print('ERROR', path, e, file=sys.stderr)
print(f'Converted {len(converted)} images to WebP')
for orig, webp in converted:
    print(orig.relative_to(root).as_posix(), '->', webp.relative_to(root).as_posix())
source_exts = {'.ts', '.tsx', '.js', '.jsx', '.css', '.html', '.json'}
excluded_dirs = {'node_modules', '.next', '.git'}
files = [p for p in root.rglob('*') if p.suffix in source_exts and not any(part in excluded_dirs for part in p.parts)]
replacements = 0
for p in files:
    try:
        text = p.read_text(encoding='utf-8', errors='ignore')
    except (PermissionError, OSError):
        print('SKIP (unreadable):', p)
        continue
    new_text = text
    for orig, webp in converted:
        rel = orig.relative_to(public_dir).as_posix()
        webp_rel = webp.relative_to(public_dir).as_posix()
        olds = { '/' + rel, rel, rel.replace(' ', '%20') }
        new_abs = '/' + webp_rel
        for old in olds:
            if old in new_text:
                new_text = new_text.replace(old, new_abs)
                replacements += text.count(old)
    if new_text != text:
        try:
            p.write_text(new_text, encoding='utf-8')
        except (PermissionError, OSError):
            print('SKIP (unwritable):', p)
print(f'Updated {replacements} reference replacements in code')
