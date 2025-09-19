const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
mobileMenuButton.addEventListener('click', () => mobileMenu.classList.toggle('show'));
const mobileMenuLinks = mobileMenu.querySelectorAll('a');
mobileMenuLinks.forEach(link => link.addEventListener('click', () => mobileMenu.classList.remove('show')));

const contactForm = document.getElementById('contact-form');
const messageModal = document.getElementById('message-modal');
const closeModalButton = document.getElementById('close-modal-button');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(contactForm);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message')
    };

    try {
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            messageModal.classList.remove('hidden');
            contactForm.reset();
        } else {
            alert('Failed to send message. Please try again.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
    }
});

closeModalButton.addEventListener('click', () => {
    messageModal.classList.add('hidden');
});

messageModal.addEventListener('click', (e) => {
    if (e.target === messageModal) {
        messageModal.classList.add('hidden');
    }
});

const titles = [
    "Software Engineer",
    "Technical Innovator",
    "Java Full Stack Developer",
    "Android Full Stack Developer",
    "Mern Stack Developer"
];
let titleIndex = 0;
const dynamicTitleElement = document.getElementById('dynamic-title');

function changeTitle() {
    dynamicTitleElement.style.opacity = 0;
    setTimeout(() => {
        titleIndex = (titleIndex + 1) % titles.length;
        dynamicTitleElement.textContent = titles[titleIndex];
        dynamicTitleElement.style.opacity = 1;
    }, 500);
}

setInterval(changeTitle, 3000);