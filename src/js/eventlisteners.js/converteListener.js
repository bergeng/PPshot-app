const fs = require('fs');
const path = require('path');

export function converteListener() {
    const btn = document.querySelector("#action")
    btn.addEventListener("click", () => {
        console.log("hey")
        const canvas = document.querySelector("canvas")
        //const ctx = canvas.getContext("2d")

        const clipWidth = 300; // For eksempel
        const c  
        const divElement = document.querySelector('#clipArea'); // Erstatt '#yourDivId' med din faktiske divs selector
        const rect = divElement.getBoundingClientRect();
        const startX = rect.left;
        const startY = rect.top; 
        console.log(startX)
        console.log(startY)

        const clippedCanvas = document.createElement('canvas');
        clippedCanvas.height = 400
        clippedCanvas.width = 300
        const clippedCtx = clippedCanvas.getContext('2d');
        console.log(clippedCanvas)
        


        clippedCtx.drawImage(canvas, startX - 20, startY - 220, clipWidth, clipHeight, 0, 0, clipWidth, clipHeight);

        convertToGrayscale(clippedCanvas);
        const imageUrl = clippedCanvas.toDataURL('image/png');
        const base64Data = imageUrl.replace(/^data:image\/\w+;base64,/, '');
        const dataBuffer = Buffer.from(base64Data, 'base64');

        const outputPath = path.join(__dirname, 'imgOut', 'clipped_image.png');

        fs.writeFile(outputPath, dataBuffer, function(err) {
            if (err) {
                console.error('Feil under skriving av bildefil:', err);
            } else {
                console.log('Bilde ble lagret til', outputPath);
            }
        });
    })
}

function convertToGrayscale(canvas) {
    const ctx = canvas.getContext('2d');
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;

    for (let i = 0; i < data.length; i += 4) {
        const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
        data[i] = avg;     // r
        data[i + 1] = avg; // g
        data[i + 2] = avg; // b
    }

    ctx.putImageData(imageData, 0, 0);
}