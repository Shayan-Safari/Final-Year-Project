document.addEventListener('DOMContentLoaded', function() {
    const apiKey = '4cdcf8f3198d8b89b574be6e6a2eec79';
    
    const cities = {
        'London': { lat: 51.5074, lon: -0.1278 },
        'Berlin': { lat: 52.5200, lon: 13.4050 },
        'Paris': { lat: 48.8566, lon: 2.3522 },
        'Canberra': { lat: -35.2809, lon: 149.1300 },
        'Madrid': { lat: 40.416775, lon: -3.703790 },
        'Rome': { lat: 41.9028, lon: 12.4964 },
        'Tehran': { lat: 35.6892, lon: 51.3890 },
        'Istanbul': { lat: 41.0082, lon: 28.9784 },
        'Moscow': { lat: 55.7558, lon: 37.6173 },
        'Washington DC': { lat: 38.9072, lon: -77.0369 },
        'Vienna': { lat: 48.2082, lon: 16.3738 },
        'Stockholm': { lat: 59.3293, lon: 18.0686 },
        'Bruxelles': { lat: 50.8503, lon: 4.3517 },
        'Edinburgh': { lat: 55.9533, lon: -3.1883 },
        'Belfast': { lat: 54.5973, lon: -5.9301 },
        'Warsaw': { lat: 52.2298, lon: 21.0122 },
        'Minsk': { lat: 53.9006, lon: 27.5590 },
        'Kyiv': { lat: 50.4501, lon: 30.5234 },
        'Athens': { lat: 37.9838, lon: 23.7275 },
        'Bucharest': { lat: 44.4268, lon: 26.1025 },
        'Tunis': { lat: 36.8065, lon: 10.1815 },
        'Lisbon': { lat: 38.7169, lon: -9.1399 },
        'Tel Aviv': { lat: 32.0853, lon: 34.7818 },
        'Baghdad': { lat: 33.3152, lon: 44.3661 },
        'Riyadh': { lat: 24.7136, lon: 46.6753 },
        'Dubai': { lat: 25.276987, lon: 55.296249 },
        'Bangui': { lat: 4.3664, lon: 18.5582 },
        'Kinshasa': { lat: -4.4419, lon: 15.2663 },
        'Addis Ababa': { lat: 9.145, lon: 40.4897 },
        'Aden': { lat: 12.7855, lon: 45.0187 },
        'Khartoum': { lat: 15.5007, lon: 32.5599 },
        'Port Sudan': { lat: 19.6167, lon: 37.2167 },
        'Baku': { lat: 40.4093, lon: 49.8671 },
        'Fortaleza': { lat: -3.7172, lon: -38.5433 },
        'Recife': { lat: -8.0476, lon: -34.8770 },
        'Manaus': { lat: -3.1190, lon: -60.0217 },
        'La Paz': { lat: -16.5000, lon: -68.1500 },
        'Rio de Janeiro': { lat: -22.9068, lon: -43.1729 },
        'Santiago': { lat: -33.4489, lon: -70.6693 },
        'Asunción': { lat: -25.2637, lon: -57.5759 },
        'Lima': { lat: -12.0464, lon: -77.0428 },
        'Paramaribo': { lat: 5.8520, lon: -55.2038 },
        'Bogotá': { lat: 4.7110, lon: -74.0721 },
        'Caracas': { lat: 10.4806, lon: -66.9036 },
        'San José': { lat: 9.9281, lon: -84.0907 },
        'Guatemala City': { lat: 14.6349, lon: -90.5069 },
        'Mexico City': { lat: 19.4326, lon: -99.1332 },
        'Miami (FL)': { lat: 25.7617, lon: -80.1918 },
        'New Orleans': { lat: 29.9511, lon: -90.0715 },
        'Nashville': { lat: 36.1627, lon: -86.7816 },
        'Chicago': { lat: 41.8781, lon: -87.6298 },
        'New York': { lat: 40.7128, lon: -74.0060 },
        'Denver': { lat: 39.7392, lon: -104.9903 },
        'San Diego': { lat: 32.7157, lon: -117.1611 },
        'San Francisco': { lat: 37.7749, lon: -122.4194 },
        'Los Angeles': { lat: 34.0522, lon: -118.2437 },
        'Vancouver': { lat: 49.2827, lon: -123.1207 },
        'Ottawa': { lat: 45.4215, lon: -75.6993 },
        'Beijing': { lat: 39.9042, lon: 116.4074 },
        'Sydney': { lat: -33.8688, lon: 151.2093 },
        'Brisbane': { lat: -27.4698, lon: 153.0251 },
        'Melbourne': { lat: -37.8136, lon: 144.9631 },
        'Singapore': { lat: 1.3521, lon: 103.8198 },
        'Lagos': { lat: 6.5244, lon: 3.3792 },
        'Dakar': { lat: 14.6928, lon: -17.4467 },
        'Marrakesh': { lat: 31.6295, lon: -7.9811 },
        'Casablanca': { lat: 33.5731, lon: -7.5898 },
        'Tripoli': { lat: 32.8872, lon: 13.1913 },
        'Bangui': { lat: 4.3947, lon: 18.5582 },
        'Kinshasa': { lat: -4.4419, lon: 15.2663 },
        'Addis Ababa': { lat: 9.145, lon: 40.4897 },
        'Aden': { lat: 12.7855, lon: 45.0187 },
        'Khartoum': { lat: 15.5007, lon: 32.5599 },
        'Port Sudan': { lat: 19.6167, lon: 37.2167 },
        'Baku': { lat: 40.4093, lon: 49.8671 },
        'Ashgabat': { lat: 37.9601, lon: 58.3261 },
        'Tashkent': { lat: 41.2995, lon: 69.2401 },
        'Astana': { lat: 51.1694, lon: 71.4491 },
        'Yangon': { lat: 16.8409, lon: 96.1735 },
        'Hanoi': { lat: 21.0285, lon: 105.8542 },
        'Ho Chi Minh City': { lat: 10.7769, lon: 106.7009 },
        'Manila': { lat: 14.5995, lon: 120.9842 },
        'Darwin': { lat: -12.4634, lon: 130.8456 },
        'Perth': { lat: -31.9505, lon: 115.8605 },
        'Sapporo': { lat: 43.0664, lon: 141.3508 },
        'Ulaanbaatar': { lat: 47.9212, lon: 106.9186 },
        'Tbilisi': { lat: 41.6938, lon: 44.8015 },
        'Riga': { lat: 56.9496, lon: 24.1052 },
        'St Petersburg': { lat: 59.9343, lon: 30.3351 },
        'Oslo': { lat: 59.9139, lon: 10.7522 },
        'Manchester': { lat: 53.483, lon: -2.244 },
        'Nice': { lat: 43.7102, lon: 7.262 },
        'Bern': { lat: 46.9481, lon: 7.4474 },
        'Cardiff': { lat: 51.4816, lon: -3.1791 },
        'Dublin': { lat: 53.3498, lon: -6.2603 },
        'Bristol': { lat: 51.4545, lon: -2.5879 },
        'Brighton': { lat: 50.8225, lon: -0.1372 }
    };

    // Initialize the map
    const map = L.map('map').setView([51.5074, -0.1278], 3);

    // Add OpenStreetMap tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    // Function to fetch weather data
    function fetchWeather(city, lat, lon, marker) {
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                const weatherDescription = data.weather[0].description;
                const temperature = data.main.temp;
                const humidity = data.main.humidity;
                const windSpeed = data.wind.speed;

                marker.bindPopup(
                    `<b>${city}</b><br>
                    Description: ${weatherDescription}<br>
                    Temperature: ${temperature}°C<br>
                    Humidity: ${humidity}%<br>
                    Wind Speed: ${windSpeed} m/s`
                ).openPopup();
            })
            .catch(error => console.error(`Error fetching weather for ${city}:`, error));
    }

    
    // Add city markers with names
    Object.keys(cities).forEach(city => {
        const { lat, lon } = cities[city];
    
        const marker = L.marker([lat, lon]).addTo(map)
            .bindPopup(`<b>${city}</b><br>Click for weather.`)
            .on('click', () => fetchWeather(city, lat, lon, marker));

    // Add a tooltip with the city name (always visible)
        marker.bindTooltip(city, { permanent: true, direction: "right", className: "city-label" });
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
        animationSpeed: 1000,
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


document.addEventListener('DOMContentLoaded', function() {
    
    const accessibilityButton = document.getElementById('accessibility-button');
    accessibilityButton.addEventListener('click', function() {
        document.body.classList.toggle('accessibility-mode');
    });
});
