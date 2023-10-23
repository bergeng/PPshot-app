export async function getWebCam() {
    const videoElement = document.getElementById('webcam');
    navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
        videoElement.srcObject = stream;
    })
    .catch(error => {
        console.error('Error accessing webcam:', error);
    });

} 



