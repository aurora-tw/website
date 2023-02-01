let css = document.querySelector("h3")
let color1 = document.querySelector(".color1")
let color2 = document.querySelector(".color2")
let bodyTag = document.getElementById("gradient")
let currentBackgroundInput = document.getElementById("resultInput")
let copyButton = document.getElementById("select")
let successCopyText = document.getElementById("copySuccess")

function changeCopiedHiddenAttribute (hide=true){
    if(hide) {
        successCopyText.setAttribute("hidden",true)

    }
    else{
        successCopyText.removeAttribute("hidden")
    }

}

copyButton.addEventListener("click",function (){
    currentBackgroundInput.select()
    navigator.clipboard.writeText(currentBackgroundInput.value)
    changeCopiedHiddenAttribute(false)
    setTimeout(changeCopiedHiddenAttribute,2000)

})


function changeBackgroundColor() {

    bodyTag.style.background =
        "linear-gradient(to right, "
        + color1.value
        + ", "
        + color2.value
        + ")";
    let currentBackground = " background: " + bodyTag.style.background
    currentBackgroundInput.setAttribute("value",currentBackground)

}

color1.addEventListener("input", changeBackgroundColor)

color2.addEventListener("input", changeBackgroundColor)
