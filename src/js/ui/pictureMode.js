import { converteListener } from "../eventlisteners.js/converteListener.js"

export function pictureMode(src) {
    document.querySelector("#dropBox").style.display = "none"
    document.querySelector("#deleteButton").style.display = "block"
    document.querySelector("#clipArea").style.display = "block"
    
    const canvas = document.createElement("canvas")
    const ctx = canvas.getContext("2d")

    const img = new Image();
    img.src = `./imgInn/${src}`
    img.onload = function() {
        const scaleFactorWidth = 750 / img.width;
        const scaleFactorHeight = 750 / img.height;
        
        // Bruk det minste forholdet for å sikre at verken bredde eller høyde overstiger 900px
        const scaleFactor = Math.min(scaleFactorWidth, scaleFactorHeight);
    
        // Få de nye proporsjonale dimensjonene
        const newWidth = img.width * scaleFactor;
        const newHeight = img.height * scaleFactor;
    
        // Sett canvas-størrelsen til de nye dimensjonene
        canvas.width = newWidth;
        canvas.height = newHeight;
    
        // Tegne bildet med de nye dimensjonene
        ctx.drawImage(img, 0, 0, newWidth, newHeight);
    }

    const canvasContainer = document.querySelector("#canvasContainer")
    canvasContainer.style.display = "block"
    canvasContainer.append(canvas)

    converteListener()
}