export function uploadMode() {
    const uploadBtn = document.querySelector("#upload")
    const selectCameraBtn = document.querySelector("#camera")
    const actionBtn = document.querySelector("#action")

    uploadBtn.style.backgroundImage = "url('./assets/icons/up-loading_yellow.png')"
    selectCameraBtn.style.backgroundImage = "url('./assets/icons/photo-camera_green.png')"
    actionBtn.style.backgroundImage = "url('./assets/icons/convert_green.png')"
    actionBtn.style.width = "64px"  
    
    document.querySelector("#webcam").style.display = "none"
    console.log("hey")
    document.querySelector("#dropBox").style.display = "flex"
}