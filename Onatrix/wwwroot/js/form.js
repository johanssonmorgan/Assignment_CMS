document.addEventListener("submit", function (e) {
    if (e.target.matches("form")) {
        sessionStorage.setItem("scrollY", window.scrollY);
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const scrollY = sessionStorage.getItem("scrollY");
    if (scrollY) {
        window.scrollTo({ top: parseInt(scrollY, 10), behavior: "instant" });
        sessionStorage.removeItem("scrollY");
    }
});

document.addEventListener("keydown", function (e) {
    if (e.key !== "Enter") return;
    
    const input = e.target;
    if (!input.closest) return;
    if (input.tagName === "TEXTAREA") return;
    if (input.tagName === "BUTTON" || input.type === "submit") return;
    
    const form = input.closest("form");
    if (!form) return;
    
    e.preventDefault();
    (form.requestSubmit?.() ?? form.submit());
});