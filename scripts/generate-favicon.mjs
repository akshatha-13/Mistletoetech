import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';
import pngToIco from 'png-to-ico';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const iconSvg = path.join(root, 'public', 'icon.svg');

async function main() {
  const svg = fs.readFileSync(iconSvg);

  const sizes = [16, 32, 48];
  const pngBuffers = await Promise.all(
    sizes.map((s) =>
      sharp(svg)
        .resize(s, s)
        .png({ compressionLevel: 9, adaptiveFiltering: true })
        .toBuffer()
    )
  );

  const icoBuffer = await pngToIco(pngBuffers);
  fs.writeFileSync(path.join(root, 'public', 'favicon.ico'), icoBuffer);

  const out = (name, px) =>
    sharp(svg)
      .resize(px, px)
      .png({ compressionLevel: 9 })
      .toFile(path.join(root, 'public', name));

  await out('logo.png', 512);
  await out('pwa-192.png', 192);
  await out('pwa-512.png', 512);

  console.log(
    'Wrote favicon.ico (%d bytes), logo.png, pwa-192.png, pwa-512.png from icon.svg',
    icoBuffer.length
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
