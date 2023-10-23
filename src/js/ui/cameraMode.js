import { resetScreen } from "../helpers/resetscreen.js"

export function cameraMode() {
    const uploadBtn = document.querySelector("#upload")
    const selectCameraBtn = document.querySelector("#camera")
    const actionBtn = document.querySelector("#action")

    uploadBtn.style.backgroundImage = "url('./assets/icons/up-loading_green.png')"
    selectCameraBtn.style.backgroundImage = "url('./assets/icons/photo-camera_yellow.png')"
    actionBtn.style.backgroundImage = "url('./assets/icons/target_green.png')"  
    actionBtn.style.width = "91px"  
    document.querySelector("#webcam").style.display = "block"
    resetScreen()
}