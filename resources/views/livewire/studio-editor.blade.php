@vite(['resources/js/studio.js'])

<style>
    #gjs {
        height: 100vh;
        width: 100%;
        overflow: hidden;
        border: 1px solid #ddd;
    }
    /* Additional required styles */
    .gjs-cv-canvas {
        top: 0;
        width: 100%;
        height: 100%;
    }
</style>

<div id="gjs" class="w-full h-screen"></div>