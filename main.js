

async function fetchReviews() {
    const response = await fetch('/static/data/reviews.json'); // Path to your JSON file
    return response.json(); // Parse and return JSON data
}

// Function to spawn reviews from JSON data
function spawnReviews(reviews) {
    const reviewsContainer = document.getElementById('reviews');

    // Loop through each review item in the JSON data
    reviews.forEach(review => {
        // Create the main review container
        const reviewDiv = document.createElement('div');
        reviewDiv.className = 'review';

        // Star rating
        const rating = document.createElement('h3');
        rating.textContent = review.rating;

        // Review text
        const reviewText = document.createElement('h4');
        reviewText.className = 'roboto-thin';
        reviewText.textContent = review.text;

        // Person container
        const personDiv = document.createElement('div');
        personDiv.className = 'person';

        // Image for person
        const personImg = document.createElement('img');
        personImg.src = review.person.image; // Set image source from JSON
        personImg.alt = `${review.person.name}'s picture`;

        // Person's name
        const personName = document.createElement('h3');
        personName.textContent = review.person.name;

        // Append elements to build the structure
        personDiv.appendChild(personImg);
        personDiv.appendChild(personName);
        reviewDiv.appendChild(rating);
        reviewDiv.appendChild(reviewText);
        reviewDiv.appendChild(personDiv);
        reviewsContainer.appendChild(reviewDiv);
    });

}

// Fetch reviews and spawn them on the page
fetchReviews().then(spawnReviews).catch(error => console.error("Error loading reviews:", error));


