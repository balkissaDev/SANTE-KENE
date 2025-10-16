feather.replace();
        
// Scroll effect for navbar
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('nav');
    if (window.scrollY > 50) {
        navbar.classList.add('shadow-md');
        navbar.classList.remove('shadow-sm');
    } else {
        navbar.classList.remove('shadow-md');
        navbar.classList.add('shadow-sm');
    }
});

// Mobile menu toggle
document.getElementById('mobile-menu-button').addEventListener('click', function() {
    // Implement mobile menu functionality here
    alert('Mobile menu will be implemented in the full version!');
});

// Dropdown functionality
const dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach(dropdown => {
    const button = dropdown.querySelector('button');
    const menu = dropdown.querySelector('.dropdown-menu');
    
    button.addEventListener('click', () => {
        menu.classList.toggle('hidden');
    });
    
    // Close when clicking outside
    document.addEventListener('click', (e) => {
        if (!dropdown.contains(e.target)) {
            menu.classList.add('hidden');
        }
    });
});

// Fade-in animation for sections
const fadeElements = document.querySelectorAll('section');

const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeIn');
        }
    });
}, { threshold: 0.1 });

fadeElements.forEach(element => {
    element.classList.add('opacity-0', 'transition-opacity', 'duration-500');
    fadeInObserver.observe(element);
});
document.querySelectorAll('.dropdown').forEach(dropdown => {
    const button = dropdown.querySelector('button');
    const menu = dropdown.querySelector('.dropdown-menu');
  
    button.addEventListener('mouseenter', () => {
      menu.classList.remove('hidden');
    });
  
    dropdown.addEventListener('mouseleave', () => {
      menu.classList.add('hidden');
    });
  });
  const buttons = document.querySelectorAll(".feature-btn");
  const contents = document.querySelectorAll(".feature-text");
  
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Enlever les classes actives
      buttons.forEach((b) => b.classList.remove("active"));
      contents.forEach((c) => c.classList.remove("active"));
  
      // Activer le bouton et son contenu correspondant
      btn.classList.add("active");
      document.getElementById(btn.dataset.target).classList.add("active");
    });
  });
  document.addEventListener("DOMContentLoaded", () => {
    const featureData = {
      chatbot: {
        title: "Chatbot Vocal Multilingue",
        desc: "Notre assistant vocal utilise l’intelligence artificielle pour comprendre plusieurs langues, y compris le bambara, le français et l’anglais. Il aide les patients à exprimer leurs symptômes et à obtenir une assistance rapide.",
      },
      blockchain: {
        title: "Sécurité Blockchain",
        desc: "Toutes les données de santé sont enregistrées sur Hedera Hashgraph, assurant une traçabilité et une sécurité immuables sans risque de falsification.",
      },
      points: {
        title: "KÈNÈPOINTS Santé",
        desc: "Chaque action positive — suivi, don de sang, exercice — vous rapporte des points santé convertibles en avantages médicaux.",
      },
      dashboard: {
        title: "Tableau de Bord Agent",
        desc: "Les professionnels accèdent à des tableaux interactifs leur permettant de visualiser les statistiques de santé en temps réel.",
      },
      gdpr: {
        title: "Conformité RGPD",
        desc: "Santé Kènè respecte les plus hauts standards de confidentialité, avec un chiffrement de bout en bout et une gestion transparente des données.",
      },
      mobile: {
        title: "Mobile First",
        desc: "Notre interface est pensée pour les smartphones : légère, fluide, et optimisée même dans les zones à faible connectivité.",
      },
    };
  
    const modal = document.getElementById("featureModal");
    const modalTitle = document.getElementById("modalTitle");
    const modalDesc = document.getElementById("modalDescription");
    const closeModal = document.getElementById("closeModal");
  
    document.querySelectorAll(".feature-card .btn-learn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const feature = e.target.closest(".feature-card").dataset.feature;
        modalTitle.textContent = featureData[feature].title;
        modalDesc.textContent = featureData[feature].desc;
        modal.classList.remove("hidden");
      });
    });
  
    closeModal.addEventListener("click", () => {
      modal.classList.add("hidden");
    });
  
    modal.addEventListener("click", (e) => {
      if (e.target === modal) modal.classList.add("hidden");
    });
  });
      