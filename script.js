document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const name = document.getElementById('userName').value;
        alert(Hello ${name}, your message has been sent successfully!);
        
        form.reset(); Clears the form
    });
});