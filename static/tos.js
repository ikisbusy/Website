async function tos() {
    const response = await fetch('./static/data/tos.txt'); // Path to your text file
    const text = await response.text(); // Get the text from the response
    const tostext = document.getElementById("tos"); // Get the element by ID
    
    // Clear any existing content
    tostext.innerHTML = '';

    // Append the initial <h1> as a child element
    const header = document.createElement('h1');
    header.textContent = 'BlockChain Bazaar Terms of Service';
    tostext.appendChild(header);

    // Split text into paragraphs and handle different heading levels
    text.split('\n').forEach(paragraph => {
        paragraph = paragraph.trim();
        if (!paragraph) return; // Skip empty paragraphs

        let element;

        if (paragraph.startsWith('###')) {
            element = document.createElement('h3');
            element.className = 'mediumText';
            element.textContent = paragraph.substring(3).trim();
        } else if (paragraph.startsWith('##')) {
            element = document.createElement('h1');
            element.className = 'lightText';
            element.textContent = paragraph.substring(2).trim();
        } else if (paragraph.startsWith('#')) {
            element = document.createElement('h2');
            element.className = 'lightText';
            element.textContent = paragraph.substring(1).trim();
        } else {
            element = document.createElement('p');
            element.className = 'dullText';
            element.textContent = paragraph;
        }
        
        tostext.appendChild(element);
    });
}

tos();
