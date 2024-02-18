console.log( 'test this' );

// async/await function to fetch APOD data
async function getData() {
    // NASA API key
    const apiKey = 'KzlXuuUnsYrJVHzkueLJoJYWS7evfbGwlxAsZlsl';
    // Get the date input value from the user
    const date = document.getElementById('date-input').value;
    // Construct the API URL with the API key and date
    const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date}`;

    try {
        // Fetch data from the API
        const response = await fetch(apiUrl);
        // Parse response as JSON
        const data = await response.json();

        // Update HTML elements with APOD data
        document.getElementById('apod-container').innerHTML = `
            <img id="apod-image" src="${data.url}" alt="${data.title}">
            <h2>${data.title}</h2>
            <p>${data.explanation}</p>
        `;
    } catch (error) {
        // Log error to console if fetch fails
        console.error('Error fetching APOD data:', error);
    }
}

// Call the getData function when the page loads
getData();
