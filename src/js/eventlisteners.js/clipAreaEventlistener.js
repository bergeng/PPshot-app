
export function dragClipArea() {
    const clipArea = document.querySelector('.clip-area');

    let isDragging = false;
    let offsetX, offsetY;

    clipArea.addEventListener('mousedown', (e) => {
        isDragging = true;
        offsetX = e.clientX - clipArea.getBoundingClientRect().left;
        offsetY = e.clientY - clipArea.getBoundingClientRect().top;
        clipArea.style.cursor = 'grabbing';
    });

    document.addEventListener('mousemove', (e) => {
        if (isDragging) {
            const x = e.clientX - offsetX;
            const y = e.clientY - offsetY;

            clipArea.style.left = x + 'px';
            

            if(clipArea.getBoundingClientRect().top > 90) {
                clipArea.style.top = y + 'px';
               
            }else if(y + 96 > clipArea.getBoundingClientRect().top) {
                clipArea.style.top = y + 'px';
            }
            
            
            
        }
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
        clipArea.style.cursor = 'grab';
    });
}




