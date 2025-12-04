 document.querySelectorAll('.skill-card').forEach(card => {
      card.addEventListener('click', () => {
        document.querySelectorAll('.skill-card').forEach(otherCard => {
          if (otherCard !== card) {
            otherCard.classList.remove('expanded');
          }
        });
        
        card.classList.toggle('expanded');
      });
    });

    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });

    const mobileToggle = document.getElementById('mobileToggle');
    const navLinks = document.getElementById('navLinks');
    
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
      });
    });

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(el => {
      observer.observe(el);
    });

    const langObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const fills = entry.target.querySelectorAll('.lang-fill');
          fills.forEach(fill => {
            const width = fill.getAttribute('data-width');
            setTimeout(() => {
              fill.style.width = width + '%';
            }, 200);
          });
        }
      });
    }, { threshold: 0.5 });

    const langSection = document.querySelector('.lang-bars');
    if (langSection) langObserver.observe(langSection);

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });