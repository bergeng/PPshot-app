export function cameraMode(mode){
    localStorage.setItem("cameraMode", JSON.stringify(mode))
}

export function getCameraMode() {
    return JSON.parse(localStorage.getItem("cameraMode"))
}