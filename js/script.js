// Function to open the image in the Lightbox
function openLightbox(element) {
    const imgSrc = element.querySelector('img').src;
    document.getElementById('lightbox-img').src = imgSrc;
    document.getElementById('lightbox').style.display = 'flex';
}

// Function to close the Lightbox
function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}

// Function to handle the contact form submission (Demo)
function submitForm(event) {
    event.preventDefault(); // Prevents the page from refreshing
    alert('Thank you! Your message has been sent. (Note: This is a demo form. Please connect it to a backend service to receive actual emails.)');
    event.target.reset(); // Clears the form fields
}