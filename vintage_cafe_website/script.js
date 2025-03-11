// JavaScript for Smooth Scrolling on Menu Click
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Interactive Order Alert
document.querySelectorAll('.order-btn').forEach(button => {
    button.addEventListener('click', function () {
        alert('Thank you for ordering! Our team will contact you soon.');
    });
});
