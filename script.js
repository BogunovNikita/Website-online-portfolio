 // Intersection Observer для анимаций (оригинальный функционал)
        const observerOptions = {
            threshold: 0.2 
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('appear');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.project').forEach(project => {
            observer.observe(project);
        });

        const gallerySection = document.querySelector('.gallery');
        if (gallerySection) {
            observer.observe(gallerySection);
        }

        // Бургер-меню для мобильных (добавлен без изменения структуры)
        const burger = document.getElementById('burger');
        const navLinks = document.getElementById('nav-links');
        
        if (burger && navLinks) {
            burger.addEventListener('click', () => {
                burger.classList.toggle('active');
                navLinks.classList.toggle('active');
            });
            
            // Закрываем меню при клике на ссылку
            const links = navLinks.querySelectorAll('a');
            links.forEach(link => {
                link.addEventListener('click', () => {
                    burger.classList.remove('active');
                    navLinks.classList.remove('active');
                });
            });
            
            // Закрываем при клике вне меню
            document.addEventListener('click', (event) => {
                if (!navLinks.contains(event.target) && !burger.contains(event.target) && navLinks.classList.contains('active')) {
                    burger.classList.remove('active');
                    navLinks.classList.remove('active');
                }
            });
        }