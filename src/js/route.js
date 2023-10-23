import { getCameraMode } from "./helpers/camerMode.js"
import { cameraMode } from "./ui/cameraMode.js"
import { uploadMode } from "./ui/uploadMode.js"
import { dragClipArea } from "./eventlisteners.js/clipAreaEventlistener.js"

export function router() {
    if(getCameraMode()) {
        cameraMode()  
    }else {
        uploadMode()
        dragClipArea()
    }

}



