document.addEventListener('DOMContentLoaded', function() {
    
    const accessibilityButton = document.getElementById('accessibility-button');
    accessibilityButton.addEventListener('click', function() {
        document.body.classList.toggle('accessibility-mode');
    });
});


document.getElementById("back-to-top").addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
});