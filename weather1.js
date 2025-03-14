document.addEventListener('DOMContentLoaded', function() {
    const apiKey = '4cdcf8f3198d8b89b574be6e6a2eec79'; // Replace with your actual API key
    const cities = ['London', 'Manchester', 'Edinburgh', 'Cardiff', 'Birmingham', 'Liverpool', 'Glasgow', 'Belfast', 'Dublin', 
                    'Vienna', 'Warsaw', 'Oslo', 'Bern', 'Minsk', 'Moscow', 'Instanbul', 'Lisbon', 'Athens',
                    'Chicago', 'Seattle', 'Miami', 'Atlanta', 'Detroit', 'Dallas', 'Toronto', 'Boston', 'Montgomery'
                    ];

    const cityIds = {
        'London': 'london',
        'Manchester': 'manchester',
        'Edinburgh': 'edinburgh', 
        'Cardiff': 'cardiff',
        'Birmingham': 'birmingham',
        'Liverpool': 'liverpool',
        'Glasgow': 'glasgow',
        'Belfast': 'belfast',
        'Dublin': 'dublin',
        'Vienna': 'vienna',
        'Warsaw': 'warsaw',
        'Oslo': 'oslo',
        'Bern': 'bern',
        'Minsk': 'minsk',
        'Moscow': 'moscow',
        'Istanbul': 'istanbul',
        'Lisbon': 'lisbon',
        'Athens': 'athens',
        'Chicago': 'chicago',
        'Seattle': 'seattle',
        'Miami': 'miami',
        'Atlanta': 'atlanta',
        'Detroit': 'detroit',
        'Dallas': 'dallas',
        'Toronto': 'toronto',
        'Boston': 'boston',
        'Montgomery': 'montgomery',
    };

    const weatherBackgrounds = {
        'clear': 'images/sunny.jpg',
        'clouds': 'images/cloudy.jpg',
        'rain': 'images/rainy.jpg',
        'snow': 'images/snowy.jpg',
        'thunderstorm': 'images/thunderstorm.jpg',
        'drizzle': 'images/drizzle.jpg',
        'mist': 'images/mist.jpg',
        'dust': 'images/dust.jpg'
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
            animationSpeed: 2000,
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