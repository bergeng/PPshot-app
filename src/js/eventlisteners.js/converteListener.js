import { graScale } from '../helpers/grayScale.js';

const fs = require('fs');
const path = require('path');

export function converteListener() {
    const btn = document.querySelector("#action")
    btn.addEventListener("click", () => {
        console.log("hey")
        const canvas = document.querySelector("canvas")
        //const ctx = canvas.getContext("2d")

        const clipWidth = 300; // For eksempel
        const clipHeight = 400  
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

        graScale(clippedCanvas);
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