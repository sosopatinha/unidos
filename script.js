document.addEventListener('DOMContentLoaded', function() {
    var links = document.querySelectorAll('nav ul li a');
    links.forEach(function(link) {
        link.addEventListener('click', function() {
            // Remove a classe 'active' de todos os links
            links.forEach(function(l) {
                l.classList.remove('active');
            });
            // Adiciona a classe 'active' ao link clicado
            this.classList.add('active');
        });
    });
});