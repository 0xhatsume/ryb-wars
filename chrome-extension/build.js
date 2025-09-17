import { build } from 'vite';
import { copyFileSync, mkdirSync, existsSync, readFileSync, writeFileSync, readdirSync } from 'fs';
import { resolve } from 'path';

async function buildExtension() {
  console.log('🚀 Building Test321 Chrome Extension...');
  
  try {
    // Build with Vite
    await build();
    
    // Ensure dist directory exists
    if (!existsSync('dist')) {
      mkdirSync('dist', { recursive: true });
    }

    // Copy manifest.json to dist
    const manifestSrc = resolve('manifest.json');
    const manifestDest = resolve('dist/manifest.json');
    copyFileSync(manifestSrc, manifestDest);
    console.log('📋 Copied manifest.json to dist/');

    // Copy and update popup.html
    const popupHtmlSrc = resolve('src/popup/popup.html');
    const popupHtmlDest = resolve('dist/popup.html');
    let popupHtml = readFileSync(popupHtmlSrc, 'utf8');
    // Update script reference to built file
    popupHtml = popupHtml.replace('./popup.ts', 'popup.js');
    writeFileSync(popupHtmlDest, popupHtml);
    console.log('📄 Copied and updated popup.html to dist/');
    
    // Copy icons and static files
    const iconsSrc = resolve('static/icons');
    const iconsDest = resolve('dist/icons');

    if (existsSync(iconsSrc)) {
      if (!existsSync(iconsDest)) {
        mkdirSync(iconsDest, { recursive: true });
      }

      // Copy all icon files
      const iconFiles = readdirSync(iconsSrc);
      iconFiles.forEach(file => {
        copyFileSync(resolve(iconsSrc, file), resolve(iconsDest, file));
      });
      console.log('📁 Copied icons to dist/icons/');
    }

    // Copy content.css if it exists
    const contentCssSrc = resolve('src/content/content.css');
    const contentCssDest = resolve('dist/content.css');
    if (existsSync(contentCssSrc)) {
      copyFileSync(contentCssSrc, contentCssDest);
      console.log('🎨 Copied content.css to dist/');
    }
    
    console.log('✅ Extension built successfully!');
    console.log('📦 Load the extension from the "dist" folder in Chrome');
    console.log('🔧 Go to chrome://extensions/, enable Developer mode, and click "Load unpacked"');
    
  } catch (error) {
    console.error('❌ Build failed:', error);
    process.exit(1);
  }
}

buildExtension();
