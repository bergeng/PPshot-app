export function showDropBox(bool) {
    const dropBox = document.querySelector("#dropBox")
    if(bool) {
        dropBox.style.display = "none"
    }else {
        dropBox.style.display = "flex"
    }
}