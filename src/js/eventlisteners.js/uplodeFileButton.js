import { cameraMode } from "../helpers/camerMode.js"
import { router } from "../route.js"

export function uploadFileListener() {
    document.querySelector("#upload").addEventListener("click", () => {
        cameraMode(false)
        router()
    })
}