import { resetScreen } from "../helpers/resetscreen.js";

export function deleteButtonListener() {
    const btn = document.querySelector("#deleteButton");
    btn.addEventListener("click", ()=> {

        

        resetScreen()
    })
}