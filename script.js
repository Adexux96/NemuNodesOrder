const toggleModeCheckbox = document.getElementById('toggle-mode');

toggleModeCheckbox.addEventListener('change', function() {
    document.body.classList.toggle('light-mode');
    document.body.classList.toggle('dark-mode');
});
