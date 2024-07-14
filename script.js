const toggleMode = document.querySelector('.toggle-mode');

toggleMode.addEventListener('change', function() {
    document.body.classList.toggle('light-mode');
});
