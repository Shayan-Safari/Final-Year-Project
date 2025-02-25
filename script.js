// filepath: /C:/Users/shaya/OneDrive - University of Hertfordshire/Documents/University-of-Hertfordshire/8-Project-(11-April)/Project/Final-Year-Project/script.js
document.addEventListener('DOMContentLoaded', function() {
    const apiKey = '4cdcf8f3198d8b89b574be6e6a2eec79'; // Replace with your actual API key
    const cities = ['London', 'Berlin', 'Paris', 'Canberra'];
    const cityIds = {
        'London': 'london',
        'Berlin': 'berlin',
        'Paris': 'paris',
        'Canberra': 'canberra'
    };

    const weatherBackgrounds = {
        'clear': 'images/sunny.jpg',
        'clouds': 'images/cloudy.jpg',
        'rain': 'images/rainy.jpg',
        'snow': 'images/snowy.jpg',
        'thunderstorm': 'images/thunderstorm.jpg',
        'drizzle': 'images/drizzle.jpg',
        'mist': 'images/mist.jpg'
    };

    cities.forEach(city => {
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                const cityId = cityIds[city];
                const weatherDescription = data.weather[0].description;
                const weatherMain = data.weather[0].main.toLowerCase();
                const temperature = data.main.temp;
                const humidity = data.main.humidity;
                const windSpeed = data.wind.speed;

                document.getElementById(`weather-description-${cityId}`).textContent = `Description: ${weatherDescription}`;
                document.getElementById(`temperature-${cityId}`).textContent = `Temperature: ${temperature}°C`;
                document.getElementById(`humidity-${cityId}`).textContent = `Humidity: ${humidity}%`;
                document.getElementById(`wind-speed-${cityId}`).textContent = `Wind Speed: ${windSpeed} m/s`;

                const weatherWidget = document.getElementById(`weather-${cityId}`);
                const backgroundImage = weatherBackgrounds[weatherMain] || 'images/default-weather.jpg';
                weatherWidget.style.backgroundImage = `url(${backgroundImage})`;
            })
            .catch(error => {
                console.error(`Error fetching weather data for ${city}:`, error);
            });
    });

    // Existing FlexSlider initialization
    $(document).ready(function() {
        $('.flexslider').flexslider({
            animation: "slide",
            controlNav: true,
            directionNav: true,
            slideshow: true,
            slideshowSpeed: 5000,
            animationSpeed: 600,
        });

        // Existing scroll animation code
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
});


document.addEventListener('DOMContentLoaded', function() {
    
    const accessibilityButton = document.getElementById('accessibility-button');
    accessibilityButton.addEventListener('click', function() {
        document.body.classList.toggle('accessibility-mode');
    });
});
