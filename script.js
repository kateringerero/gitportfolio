// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// Toggle Navigation for Small Screens
document.getElementById('nav-toggle').addEventListener('click', function() {
    var navMenu = document.getElementById('nav-menu');
    if (navMenu.style.display === "block") {
        navMenu.style.display = "none";
    } else {
        navMenu.style.display = "block";
    }
});

// Typing Effect
const introText = "Hi, I'm ";
const nameText = "Katherine Guerrero.";
const typingSpeed = 150;
let index = 0;
const h2Element = document.querySelector('#about h2');
const nameSpan = document.createElement('span');
nameSpan.style.color = '#ece1e1'; 

function typeWriter() {
    if (index < introText.length) {
        h2Element.textContent += introText.charAt(index);
    } else if (index - introText.length < nameText.length) {
        if (index === introText.length) {
            h2Element.appendChild(nameSpan); 
        }
        nameSpan.textContent += nameText.charAt(index - introText.length);
    } else {
        return; 
    }
    index++;
    setTimeout(typeWriter, typingSpeed);
}

typeWriter(); 

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // carousel
    function showToast(message) {
        const toast = document.getElementById('toast');
        toast.textContent = message;
        toast.style.display = 'block';
        
        setTimeout(() => {
            toast.style.display = 'none';
        }, 5000); 
    }

    // Stars effect
    function createStars(numberOfStars) {
        // Select sections by their IDs
        const sections = document.querySelectorAll('section#contact, section#about, section#projects');
    
        sections.forEach(section => {
            for (let i = 0; i < numberOfStars; i++) {
                const star = document.createElement('div');
                star.className = 'star';
                star.style.left = `${Math.random() * section.offsetWidth}px`;
                star.style.top = `${Math.random() * section.offsetHeight}px`;
    
                const animationDelay = Math.random() * 5; 
                star.style.animationDelay = `${animationDelay}s`;
    
                section.appendChild(star);
            }
        });
    }
    
    createStars(300);
    
    
    

    