const menu = document.querySelector(".fa-bars");
const nav = document.querySelector("nav");

menu.addEventListener("click", () => {
    if (menu.classList.contains("fa-bars")) {
        nav.classList.add('open-nav');
        menu.classList.replace("fa-bars", "fa-xmark");
    } else {
        nav.classList.remove('open-nav')
        menu.classList.replace("fa-xmark", "fa-bars");
    }
});