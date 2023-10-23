import { cameraMode } from "../helpers/camerMode.js"
import { router } from "../route.js"

export function cameraModeListener() {
    document.querySelector("#camera").addEventListener("click", () => {
        cameraMode(true)
        router()
    })
}