import grapesjs from 'grapesjs';
import 'grapesjs/dist/css/grapes.min.css';

// Debug message to confirm script execution
console.log('GrapeJS Studio script loaded - simplified version');

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM loaded, looking for GrapeJS container');
  const gjsContainer = document.getElementById('gjs');
  
  if (!gjsContainer) {
    console.error('GrapeJS container #gjs not found in the DOM');
    return;
  }
  
  console.log('GrapeJS container found, initializing editor');
  
  // Initialize GrapeJS with minimal configuration
  try {
    const editor = grapesjs.init({
      // Main configuration
      container: '#gjs',
      height: '100%',
      width: 'auto',
      
      // Panels
      panels: { defaults: [] },
      
      // Storage manager configuration
      storageManager: {
        type: 'local',
        autosave: true,
        autoload: true,
      },
    });

    console.log('GrapeJS editor initialized successfully');

    // Add simple demo content
    editor.setComponents(`
      <div style="padding: 20px; text-align: center;">
        <h1 style="margin-bottom: 20px;">Welcome to GrapeJS</h1>
        <p>This is a simple example of the GrapeJS editor.</p>
        <button style="padding: 10px 20px; background-color: #0275d8; color: white; border: none; border-radius: 4px; cursor: pointer;">Click me!</button>
      </div>
    `);
    
    console.log('Demo content added to the editor');
  } catch (error) {
    console.error('Error initializing GrapeJS editor:', error);
  }
});