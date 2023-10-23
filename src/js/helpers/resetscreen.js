import { router } from "../route.js"
import { dropFileListener } from "../eventlisteners.js/dropBox.js"
export function resetScreen() {
    document.querySelector("#dropBox").style.display = "flex"
    document.querySelector("#clipArea").style.display = "none"
    document.querySelector("#deleteButton").style.display = "none"
    const canvasContainer = document.querySelector("#canvasContainer")
    console.log(canvasContainer)
    canvasContainer.innerHTML = ""
    canvasContainer.style.display = "none"
    
    //location.reload()
    dropFileListener()
    router()
}