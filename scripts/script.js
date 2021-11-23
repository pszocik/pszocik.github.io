import appData from "./apps.js";

const appCardButtons = document.querySelectorAll(".card");

appCardButtons.forEach((el, i) => {
    if(typeof appData[i] === 'undefined') return;
    el.innerHTML = appData[i].name;
    el.addEventListener("click", () => {
        window.location = appData[i].url;
    })
})
