document.addEventListener('DOMContentLoaded', function() {
    const toggleMode = document.querySelector('.toggle-mode');
    const toggleLabel = document.querySelector('.toggle-label');

    toggleMode.addEventListener('change', function() {
        if (toggleMode.checked) {
            document.body.classList.add('light-mode');
            toggleLabel.textContent = 'Modo Claro'; // Cambia el texto del label al modo claro
        } else {
            document.body.classList.remove('light-mode');
            toggleLabel.textContent = 'Modo Oscuro'; // Vuelve a cambiar el texto del label al modo oscuro
        }
    });
});