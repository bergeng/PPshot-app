import { pictureMode } from '../ui/pictureMode.js';

let start = true
const fs = require('fs');
const path = require('path');

export function dropFileListener() {

    // Prevent default behavior when files are dragged over or dropped


    function handleDrop(event) {
        event.preventDefault();

        // Sjekker om det er noen filer
        if (event.dataTransfer.items) {
            for (let i = 0; i < event.dataTransfer.items.length; i++) {
                // Hvis dropped item er en fil, les den
                if (event.dataTransfer.items[i].kind === 'file') {
                    const file = event.dataTransfer.items[i].getAsFile();
    
                    const reader = new FileReader();
                    reader.onload = (readEvent) => {
                        const imgInnPath = path.join(__dirname, 'imgInn', file.name);
                        fs.writeFileSync(imgInnPath, Buffer.from(new Uint8Array(readEvent.target.result)));
                    };
    
                    reader.readAsArrayBuffer(file);

                    setTimeout(() => {
                        pictureMode(file.name);
                    }, 200);
                }
            }
        }
    }
    
    if(start) {
        const dropZone = document.querySelector('#dropBox');
        dropZone.addEventListener('drop', handleDrop);
        dropZone.addEventListener('dragover', e => e.preventDefault()); 
        start = false
    }

}