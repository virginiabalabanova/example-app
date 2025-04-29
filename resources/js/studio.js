import createStudioEditor from '@grapesjs/studio-sdk';
import { 
  accordionComponent, 
  flexComponent, 
  rteTinyMce, 
  canvasFullSize, 
  layoutSidebarButtons, 
  youtubeAssetProvider, 
  iconifyComponent, 
  swiperComponent, 
  lightGalleryComponent, 
  listPagesComponent, 
  tableComponent 
} from '@grapesjs/studio-sdk-plugins';
import '@grapesjs/studio-sdk/style';

// Debug message to confirm script execution
console.log('GrapeJS Studio SDK loaded');

// Generate a random unique ID to use for testing
const generateUniqueId = () => {
  return 'id_' + Math.random().toString(36).substring(2, 15);
};

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM loaded, looking for GrapeJS container');
  const studioEditor = document.getElementById('studio-editor');
  
  if (!studioEditor) {
    console.error('GrapeJS container #studio-editor not found in the DOM');
    return;
  }
  
  console.log('GrapeJS container found, initializing editor');
  
  // Initialize GrapeJS Studio SDK
  createStudioEditor({
    root: '#studio-editor',
    licenseKey: '88d6bb88d8564817bec298587dc7b047875786903c284d8588531be105216c40',
    project: {
      type: 'web',
      id: generateUniqueId() // Generate a unique ID for testing
    },
    identity: {
      id: generateUniqueId() // Generate a unique ID for testing
    },
    assets: {
      storageType: 'local' // Use local storage instead of cloud
    },
    storage: {
      type: 'local', // Use local storage instead of cloud
      autosave: true,
      autosaveChanges: 100,
      autosaveIntervalMs: 10000
    },
    plugins: [
      accordionComponent.init({}),
      flexComponent.init({}),
      rteTinyMce.init({}),
      canvasFullSize.init({}),
      layoutSidebarButtons.init({}),
      youtubeAssetProvider.init({}),
      iconifyComponent.init({}),
      swiperComponent.init({}),
      lightGalleryComponent.init({}),
      listPagesComponent.init({}),
      tableComponent.init({})
    ]
  });

  console.log('GrapeJS Studio SDK editor initialized');
});