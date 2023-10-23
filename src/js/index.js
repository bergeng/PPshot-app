import { getWebCam } from "./webcam/webcam.js";
import { router } from "./route.js";
import { cameraMode } from "./helpers/camerMode.js";
import { getCameraMode } from "./helpers/camerMode.js";
import { uploadFileListener } from "./eventlisteners.js/uplodeFileButton.js"
import { cameraModeListener } from "./eventlisteners.js/cameraModeButton.js"
import { dropFileListener } from "./eventlisteners.js/dropBox.js";
import { deleteButtonListener } from "./eventlisteners.js/deleteButtonListener.js";
//getWebCam()

cameraMode(false)
router()
cameraModeListener()
uploadFileListener()
dropFileListener()
deleteButtonListener()