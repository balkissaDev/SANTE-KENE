document.addEventListener("DOMContentLoaded", function () {
    // Feather Icons - initialize immediately and after a short delay
    feather.replace();
    
    // Re-initialize icons to ensure they're visible
    setTimeout(() => {
        feather.replace();
        
        // Ensure icons in fonctionnalites are white
        document.querySelectorAll('section#fonctionnalites [data-feather]').forEach(icon => {
            const svg = icon.closest('div')?.querySelector('svg');
            if (svg) {
                svg.setAttribute('stroke', 'white');
                svg.setAttribute('fill', 'none');
                svg.style.color = 'white';
            }
        });
    }, 100);
  
    // Navbar scroll effect with modern styling
    const navbar = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled', 'shadow-md');
            navbar.classList.remove('shadow-sm');
        } else {
            navbar.classList.remove('scrolled', 'shadow-md');
            navbar.classList.add('shadow-sm');
        }
    });
  
    // Mobile menu toggle
    const menuBtn = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            const icon = menuBtn.querySelector('i');
            if (icon) {
                icon.setAttribute('data-feather', mobileMenu.classList.contains('hidden') ? 'menu' : 'x');
                feather.replace();
            }
        });
        
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                const icon = menuBtn.querySelector('i');
                if (icon) {
                    icon.setAttribute('data-feather', 'menu');
                    feather.replace();
                }
            });
        });
    }
  
    // Contact form with modern validation
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            if(!name || !email || !subject || !message){
                showNotification('Veuillez remplir tous les champs.', 'error');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showNotification('Veuillez entrer une adresse email valide.', 'error');
                return;
            }
            
            showNotification(`Merci ${name}, votre message a été envoyé !`, 'success');
            this.reset();
        });
    }
  
    // Toggle Vision / Partenaires - ouverts par défaut
    const headers = document.querySelectorAll("#vision-section h2, #partners h2");
    headers.forEach(header => {
        const targetId = header.dataset.target;
        if (!targetId) return;
        
        const content = document.getElementById(targetId);
        if (!content) return;
        
        const arrow = header.querySelector(".arrow");
        
        // Fonction pour ouvrir le contenu
        const openContent = () => {
            content.style.maxHeight = content.scrollHeight + "px";
            content.style.opacity = 1;
            content.style.overflow = "visible";
            if (arrow) arrow.style.transform = "rotate(180deg)";
        };
        
        // Fonction pour fermer le contenu
        const closeContent = () => {
            content.style.maxHeight = "0px";
            content.style.opacity = 0;
            content.style.overflow = "hidden";
            if (arrow) arrow.style.transform = "rotate(0deg)";
        };
        
        // Initialisation - contenu ouvert par défaut
        // Attendre un peu pour que le contenu soit rendu
        setTimeout(() => {
            openContent();
        }, 50);
        
        header.addEventListener("click", () => {
            const isOpen = content.style.maxHeight !== "0px" && 
                          content.style.maxHeight !== "" && 
                          content.style.opacity !== "0";
            
            if (isOpen) {
                closeContent();
            } else {
                openContent();
            }
        });
    });

    // Active link management with smooth scroll
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
            
            // Update active state
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });

    // Scroll-based active link highlighting
    window.addEventListener('scroll', () => {
        let fromTop = window.scrollY + 150;
        navLinks.forEach(link => {
            const sectionId = link.getAttribute('href');
            if (!sectionId || sectionId === '#') return;
            
            const section = document.querySelector(sectionId);
            if (section) {
                if (section.offsetTop <= fromTop && 
                    section.offsetTop + section.offsetHeight > fromTop) {
                    navLinks.forEach(l => l.classList.remove('active'));
                    link.classList.add('active');
                }
            }
        });
    });

    // Typing effect with modern animation
    const textElement = document.getElementById("typing-text");
    if (textElement) {
        const text = "🌿 La santé accessible à tous, partout, à tout moment.";
        textElement.innerHTML = "";
        let index = 0;
        
        function typeEffect() {
            if (index < text.length) {
                textElement.innerHTML += text.charAt(index);
                index++;
                setTimeout(typeEffect, 80);
            } else {
                // Add blinking cursor
                textElement.innerHTML += '<span class="animate-pulse">|</span>';
            }
        }
        
        // Wait for page load
        if (document.readyState === 'loading') {
            window.addEventListener('load', typeEffect);
        } else {
            setTimeout(typeEffect, 500);
        }
    }

    // Simplified scroll reveal - less aggressive
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe only important elements
    document.querySelectorAll('section#fonctionnalites .bg-white, #team .bg-white').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(el);
    });

    // Parallax effect removed for stability
    // Ripple effect removed for stability
});

// Notification system
function showNotification(message, type = 'success') {
    // Remove existing notification
    const existing = document.querySelector('.notification');
    if (existing) existing.remove();
    
    const notification = document.createElement('div');
    notification.className = `notification fixed top-24 right-6 z-50 px-6 py-4 rounded-lg shadow-xl transform transition-all duration-300 translate-x-full`;
    notification.style.background = type === 'success' 
        ? 'linear-gradient(135deg, #10b981, #059669)' 
        : 'linear-gradient(135deg, #ef4444, #dc2626)';
    notification.style.color = 'white';
    notification.style.maxWidth = '400px';
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 10);
    
    // Animate out and remove
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Ripple CSS removed for stability
