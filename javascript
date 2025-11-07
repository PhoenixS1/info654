document.getElementById("clickButton").addEventListener("click", function() {
    alert("Hello! Thanks for clicking the button.");
});

// Simple form handling
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Your message has been sent!");
});
