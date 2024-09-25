document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting
    // Display success message
    document.getElementById("successMessage").style.display = "block";
    // Optionally clear the form fields
    this.reset();
});
