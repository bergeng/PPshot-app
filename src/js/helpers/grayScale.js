export function graScale(canvas) {
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