import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create SVG content for different sizes
function createFaviconSVG(size, isDark = false) {
  const fill = isDark ? '#000' : '#fff';
  return `<svg version="1.1" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
    <path d="m${size/2} 0a${size/2} ${size/2} 0 0 0-${size/2} ${size/2} ${size/2} ${size/2} 0 0 0 ${size/2} ${size/2} ${size/2} ${size/2} 0 0 0 ${size*0.259}-${size*0.073}l-${size*0.377}-${size*0.116}-${size*0.002}-${size*0.603} ${size*0.387}-${size*0.131}a${size/2} ${size/2} 0 0 0-${size*0.266}-${size*0.077}zm${size*0.374} ${size*0.168}-${size*0.346} ${size*0.117}-${size*0.005} ${size*0.427} ${size*0.355} ${size*0.115}a${size/2} ${size/2} 0 0 0 ${size*0.122}-${size*0.327} ${size/2} ${size/2} 0 0 0-${size*0.126}-${size*0.332}z" fill="${fill}" stroke-width="0"/>
  </svg>`;
}

async function generateFavicons() {
  const publicDir = path.join(__dirname, '../public');
  
  console.log('Generating new favicons...');
  
  try {
    // Create temporary SVG files
    const lightSvg = createFaviconSVG(16, false);
    const darkSvg = createFaviconSVG(16, true);
    
    const tempLightPath = path.join(publicDir, 'temp-light.svg');
    const tempDarkPath = path.join(publicDir, 'temp-dark.svg');
    
    fs.writeFileSync(tempLightPath, lightSvg);
    fs.writeFileSync(tempDarkPath, darkSvg);
    
    // Generate PNG favicons from light version (for general use)
    await sharp(tempLightPath)
      .resize(16, 16)
      .png()
      .toFile(path.join(publicDir, 'favicon-16x16.png'));
    console.log('✓ Generated favicon-16x16.png');
    
    await sharp(tempLightPath)
      .resize(32, 32)
      .png()
      .toFile(path.join(publicDir, 'favicon-32x32.png'));
    console.log('✓ Generated favicon-32x32.png');
    
    // Generate ICO file (32x32)
    await sharp(tempLightPath)
      .resize(32, 32)
      .png()
      .toFile(path.join(publicDir, 'favicon.ico'));
    console.log('✓ Generated favicon.ico');
    
    // Generate PWA sizes
    await sharp(tempLightPath)
      .resize(144, 144)
      .png()
      .toFile(path.join(publicDir, 'web-app-manifest-144x144.png'));
    console.log('✓ Generated web-app-manifest-144x144.png');
    
    await sharp(tempLightPath)
      .resize(192, 192)
      .png()
      .toFile(path.join(publicDir, 'web-app-manifest-192x192.png'));
    console.log('✓ Updated web-app-manifest-192x192.png');
    
    await sharp(tempLightPath)
      .resize(512, 512)
      .png()
      .toFile(path.join(publicDir, 'web-app-manifest-512x512.png'));
    console.log('✓ Updated web-app-manifest-512x512.png');
    
    // Generate Apple touch icon
    await sharp(tempLightPath)
      .resize(180, 180)
      .png()
      .toFile(path.join(publicDir, 'apple-touch-icon.png'));
    console.log('✓ Updated apple-touch-icon.png');
    
    // Clean up temporary files
    fs.unlinkSync(tempLightPath);
    fs.unlinkSync(tempDarkPath);
    
    console.log('All favicons generated successfully!');
  } catch (error) {
    console.error('Error generating favicons:', error);
  }
}

generateFavicons();