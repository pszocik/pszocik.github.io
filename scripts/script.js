const appCardButtons = document.querySelectorAll(".card");

appCardButtons.forEach(el => {
    el.addEventListener("click", () => {
        el.classList.toggle('is-flipped');
    })
})

