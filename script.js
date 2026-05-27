function changeTheme(mode) {
    if (mode === "dark") {
        document.body.classList.add("dark-mode");
    } else {
        document.body.classList.remove("dark-mode");
    }
}

function changeFontSize(size) {
    const content = document.querySelector(".main-content");

    if (size === "small") {
        content.style.fontSize = "14px";
    }
    else if (size === "medium") {
        content.style.fontSize = "18px";
    }
    else {
        content.style.fontSize = "22px";
    }
}
const accordionBtns = document.querySelectorAll(".accordion-btn");

accordionBtns.forEach(button => {
    button.addEventListener("click", () => {
        const content = button.nextElementSibling;

        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
});
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href'))
            .scrollIntoView({ behavior: 'smooth' });
    });
});



