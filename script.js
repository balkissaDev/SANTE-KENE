document.addEventListener("DOMContentLoaded", function () {
    // Feather Icons
    feather.replace();
  
    // Navbar scroll effect
    const navbar = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('shadow-md');
            navbar.classList.remove('shadow-sm');
        } else {
            navbar.classList.remove('shadow-md');
            navbar.classList.add('shadow-sm');
        }
    });
  
    // Mobile menu toggle
    const menuBtn = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        const icon = menuBtn.querySelector('i');
        icon.setAttribute('data-feather', mobileMenu.classList.contains('hidden') ? 'menu' : 'x');
        feather.replace();
    });
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            menuBtn.querySelector('i').setAttribute('data-feather', 'menu');
            feather.replace();
        });
    });
  
    // Formulaire contact
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        if(!name || !email || !subject || !message){
          alert('Veuillez remplir tous les champs.');
          return;
        }
        alert(`Merci ${name}, votre message a été envoyé !`);
        this.reset();
    });
  
    // Toggle Vision / Partenaires
    const headers = document.querySelectorAll("#vision-section h2");
    headers.forEach(header => {
      const targetId = header.dataset.target;
      const content = document.getElementById(targetId);
      const arrow = header.querySelector(".arrow");
  
      // Initialisation
      content.style.maxHeight = "0px";
      content.style.opacity = 0;
  
      header.addEventListener("click", () => {
        const isOpen = content.style.maxHeight !== "0px";
  
        if (isOpen) {
          content.style.maxHeight = "0px";
          content.style.opacity = 0;
          arrow.style.transform = "rotate(0deg)";
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
          content.style.opacity = 1;
          arrow.style.transform = "rotate(180deg)";
        }
      });
    });
  });
  // Navbar scroll effect et changement de couleur
const navbar = document.querySelector('nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Gestion de l'active link
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    });
});

// Si vous avez des sections avec scroll, vous pouvez activer automatiquement le link actif
window.addEventListener('scroll', () => {
    let fromTop = window.scrollY + 100; // ajustez le décalage selon la navbar
    navLinks.forEach(link => {
        const section = document.querySelector(link.getAttribute('href'));
        if(section && section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});
// Header scroll effect
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if(window.scrollY > 50){
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

  // Animation d’écriture automatique sur "Bienvenue sur Santé Kènè"
const textElement = document.getElementById("typing-text");
const text = "🌿 Bienvenue sur Santé Kènè";
textElement.innerHTML = ""; 
let index = 0;

function typeEffect() {
  if (index < text.length) {
    textElement.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, 80);
  }
}
window.addEventListener("load", typeEffect);
