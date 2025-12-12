import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectRoot = path.join(__dirname, '..');
const tempDir = path.join(projectRoot, 'temp-unused-images');

// Create temp directory
if (!fs.existsSync(tempDir)) {
  fs.mkdirSync(tempDir, { recursive: true });
}

// List of unused images to move
const unusedImages = [
  // Duplicate/Old Files
  'public/assets/',
  'src/app/(frontend)/og.svg',
  'src/app/(frontend)/website-template-OG.webp', 
  'src/app/(frontend)/website-thirdbracket-OG.webp',
  'src/og.svg',
  'src/website-thirdbracket-OG.webp',
  'src/graphics/',
  
  // Unused Public Images
  'public/1.svg',
  'public/2.svg', 
  'public/4.svg',
  'public/5.svg',
  'public/9.svg',
  'public/accenture.svg',
  'public/clutch.svg',
  'public/designrush.svg',
  'public/astheticold.svg',
  'public/costold.svg',
  'public/deliveryold.svg',
  'public/webspeedold.svg',
  'public/bracketuiblack.svg',
  'public/bracketui-cover.svg',
  'public/bracketuicover.svg',
  'public/bracketuigray.svg',
  'public/bracketuiicon.svg',
  'public/bracketuii.svg',
  'public/bracketui.svg',
  'public/cccoil.svg',
  'public/flower.svg',
  'public/nnn.svg',
  'public/spd.svg',
  'public/testog.svg',
  'public/contact-og.png',
  'public/contact-og.webp',
  'public/og-image.png',
  'public/og-temp.svg',
  'public/ogmain.svg',
  'public/performance.svg',
  'public/speed.svg',
  'public/webdev.svg',
  'public/sample.svg',
  'public/sample.svg.2025_10_14_02_36_15.0.svg',
  'public/post-1.svg',
  'public/post-2.svg',
  'public/post-3.svg',
  'public/Project Stages-amico.svg',
  'public/Megamenu.svg',
  'public/the-art-of-nextjs-routing-system.svg',
  'public/elementorgray.svg',
  'public/elementoricon.svg',
  'public/elementorlogo.svg',
  'public/Elementor-Logo-Symbol-Red.svg',
  'public/popup-form-icon-outline.svg',
  'public/speed.svg.2025_11_04_18_43_39.0.svg',
  'public/webdev.svg.2025_04_29_22_30_31.0.svg',
  
  // Entire folders
  'public/media/',
  'public/bb/',
  'src/endpoints/seed/'
];

function moveFileOrFolder(sourcePath, destPath) {
  try {
    const fullSourcePath = path.join(projectRoot, sourcePath);
    
    if (!fs.existsSync(fullSourcePath)) {
      console.log(`⚠️  Skipped (not found): ${sourcePath}`);
      return;
    }
    
    const relativePath = sourcePath.replace(/^(public|src)\//, '');
    const fullDestPath = path.join(tempDir, relativePath);
    
    // Create destination directory
    const destDir = path.dirname(fullDestPath);
    if (!fs.existsSync(destDir)) {
      fs.mkdirSync(destDir, { recursive: true });
    }
    
    // Move file or folder
    fs.renameSync(fullSourcePath, fullDestPath);
    console.log(`✓ Moved: ${sourcePath} → temp-unused-images/${relativePath}`);
    
  } catch (error) {
    console.error(`❌ Error moving ${sourcePath}:`, error.message);
  }
}

console.log('🧹 Starting image cleanup...\n');
console.log(`📁 Temporary folder: ${tempDir}\n`);

// Move all unused images
unusedImages.forEach(imagePath => {
  moveFileOrFolder(imagePath, tempDir);
});

console.log('\n✅ Image cleanup completed!');
console.log('\n📋 Next steps:');
console.log('1. Test your website to ensure everything works');
console.log('2. If everything is fine, you can delete the temp-unused-images folder');
console.log('3. If something breaks, move files back from temp-unused-images folder');
console.log('\n🔄 To restore all files:');
console.log('   cp -r temp-unused-images/* ./');