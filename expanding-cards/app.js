const panels = document.querySelectorAll(".panel");

panels.forEach((p) => {
    p.addEventListener("click", () => {
        panels.forEach((p) => {
            p.classList.remove("active");
        })
        p.classList.add("active");
    })
})