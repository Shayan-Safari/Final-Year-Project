$(document).ready(function() {
    // Initialize each flexslider individually
    $('.flexslider').each(function() {
        $(this).flexslider({
            animation: "slide",
            controlNav: true,
            directionNav: true,
            slideshow: true,
            slideshowSpeed: 7000,
            animationSpeed: 2500,
        });
    });

    const elements = document.querySelectorAll('.animate-on-scroll');
    const header = document.getElementById('main-header');

    function checkPosition() {
        const windowHeight = window.innerHeight;
        elements.forEach(element => {
            const positionFromTop = element.getBoundingClientRect().top;

            if (positionFromTop - windowHeight <= 0) {
                element.classList.add('animate');
            }
        });
    }

    function handleScroll() {
        if (window.scrollY > 50) {
            header.classList.add('shrink');
        } else {
            header.classList.remove('shrink');
        }
    }

    window.addEventListener('scroll', () => {
        checkPosition();
        handleScroll();
    });

    checkPosition(); // Initial check
    handleScroll(); // Initial check for header
});


document.addEventListener('DOMContentLoaded', function() {
    
    const accessibilityButton = document.getElementById('accessibility-button');
        accessibilityButton.addEventListener('click', function() {
        document.body.classList.toggle('accessibility-mode');
    });
});

document.getElementById("back-to-top").addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
});