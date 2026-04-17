console.log("Página sobre el Pacto de Varsovia cargada");

// Scroll suave
document.querySelectorAll('a').forEach(enlace => {
    enlace.addEventListener('click', function(e) {
        e.preventDefault();
        const seccion = document.querySelector(this.getAttribute('href'));
        seccion.scrollIntoView({ behavior: 'smooth' });
    });
});
