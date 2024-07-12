document.addEventListener('DOMContentLoaded', function () {
    const toggleMode = document.getElementById('toggle-mode');
    const body = document.body;

    // Cambia la clase del cuerpo al hacer clic en el interruptor
    toggleMode.addEventListener('change', function () {
        body.classList.toggle('light-mode');
        body.classList.toggle('dark-mode');

        // Actualiza la etiqueta del interruptor
        const toggleLabel = document.querySelector('.toggle-label');
        toggleLabel.textContent = body.classList.contains('dark-mode') ? 'Modo Oscuro' : 'Modo Claro';
    });
});
