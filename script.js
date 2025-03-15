document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.getElementById("languageToggle");
    const elements = document.querySelectorAll("[data-es]");

    function cambiarIdioma(idioma) {
        elements.forEach(el => {
            el.textContent = el.getAttribute(`data-${idioma}`);
        });
        localStorage.setItem("idioma", idioma); 
    }

    const idiomaGuardado = localStorage.getItem("idioma") || "es";
    cambiarIdioma(idiomaGuardado);

    toggleBtn.addEventListener("click", () => {
        const nuevoIdioma = localStorage.getItem("idioma") === "es" ? "en" : "es";
        cambiarIdioma(nuevoIdioma);
    });
});

document.querySelectorAll('.ventaja-header').forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;
        const isActive = content.style.display === 'block';
        
        document.querySelectorAll('.ventaja-content').forEach(item => {
            item.style.display = 'none';
        });
        
        if (!isActive) {
            content.style.display = 'block';
        }
    });
});