// Simple script to create placeholder icons for the extension
import { createCanvas } from 'canvas';
import { writeFileSync, mkdirSync, existsSync } from 'fs';
import { resolve } from 'path';

function createIcon(size, text, filename) {
  const canvas = createCanvas(size, size);
  const ctx = canvas.getContext('2d');
  
  // Background gradient
  const gradient = ctx.createLinearGradient(0, 0, size, size);
  gradient.addColorStop(0, '#4f46e5');
  gradient.addColorStop(1, '#7c3aed');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, size, size);
  
  // Border
  ctx.strokeStyle = '#1e1b4b';
  ctx.lineWidth = 2;
  ctx.strokeRect(1, 1, size - 2, size - 2);
  
  // Text
  ctx.fillStyle = 'white';
  ctx.font = `bold ${Math.floor(size * 0.4)}px Arial`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, size / 2, size / 2);
  
  // Save
  const buffer = canvas.toBuffer('image/png');
  writeFileSync(filename, buffer);
}

// Create icons directory
const iconsDir = resolve('static/icons');
if (!existsSync(iconsDir)) {
  mkdirSync(iconsDir, { recursive: true });
}

// Create different sized icons
createIcon(16, 'T', resolve(iconsDir, 'icon16.png'));
createIcon(32, 'T3', resolve(iconsDir, 'icon32.png'));
createIcon(48, 'T32', resolve(iconsDir, 'icon48.png'));
createIcon(128, 'T321', resolve(iconsDir, 'icon128.png'));

console.log('✅ Icons created successfully!');
