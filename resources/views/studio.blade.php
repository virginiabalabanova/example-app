<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Grape.js Studio</title>
    @vite('resources/js/studio.js')
    <style>
        body, html {
            margin: 0;
            padding: 0;
            height: 100%;
            background: blue;
        }
        #gjs {
            height: 100%;
            width: 100%;
        }
    </style>
</head>
<body>
    <div id="gjs">
        <h1>Welcome to Grape.js</h1>
        <p>Drag and drop components here to build your page.</p>
    </div>
</body>
</html>