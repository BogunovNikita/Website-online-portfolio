 
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