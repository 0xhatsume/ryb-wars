// Create simple base64 PNG icons for the extension
import { writeFileSync, mkdirSync, existsSync } from 'fs';
import { resolve } from 'path';

// Simple 1x1 pixel PNG data in different colors (base64 encoded)
const createSimpleIcon = (size, color) => {
  // This is a minimal PNG file structure for a solid color square
  // For simplicity, we'll create a basic colored square using data URLs
  const canvas = `<svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#4f46e5;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#7c3aed;stop-opacity:1" />
      </linearGradient>
    </defs>
    <rect width="${size}" height="${size}" rx="${Math.floor(size/8)}" fill="url(#grad)" stroke="#1e1b4b" stroke-width="2"/>
    <text x="${size/2}" y="${size/2 + size/8}" font-family="Arial, sans-serif" font-size="${Math.floor(size/3)}" font-weight="bold" text-anchor="middle" fill="white">T</text>
  </svg>`;
  
  return canvas;
};

// Create icons directory
const iconsDir = resolve('static/icons');
if (!existsSync(iconsDir)) {
  mkdirSync(iconsDir, { recursive: true });
}

// Create SVG icons for different sizes
const sizes = [16, 32, 48, 128];
sizes.forEach(size => {
  const svgContent = createSimpleIcon(size, '#4f46e5');
  writeFileSync(resolve(iconsDir, `icon${size}.svg`), svgContent);
});

console.log('✅ SVG Icons created successfully!');
console.log('📝 Note: Chrome extensions work with SVG icons in manifest v3');

// Also create a simple HTML file to test the icons
const testHtml = `<!DOCTYPE html>
<html>
<head>
  <title>Icon Test</title>
  <style>
    body { font-family: Arial, sans-serif; padding: 20px; }
    .icon { margin: 10px; display: inline-block; }
    img { border: 1px solid #ccc; margin: 5px; }
  </style>
</head>
<body>
  <h1>Test321 Extension Icons</h1>
  ${sizes.map(size => `
    <div class="icon">
      <h3>${size}x${size}</h3>
      <img src="icons/icon${size}.svg" width="${size}" height="${size}" alt="Icon ${size}">
    </div>
  `).join('')}
</body>
</html>`;

writeFileSync(resolve('static/icon-test.html'), testHtml);
console.log('🔍 Created icon test page at static/icon-test.html');
