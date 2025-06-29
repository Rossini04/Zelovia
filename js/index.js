//pesquisa
document.addEventListener('DOMContentLoaded', function () {
    const searchBar = document.getElementById('search-bar');

    if (searchBar) {
        searchBar.addEventListener('keydown', function (event) {
            if (event.key === 'Enter') {
                const query = searchBar.value.trim();
                window.location.href = "Html/search.html?q=" + encodeURIComponent(query);
            }
        });
    }

    // Efeito nav transparente/branco fixo
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 0) {
            nav.classList.add('nav-scrolled');
        } else {
            nav.classList.remove('nav-scrolled');
        }
    });

    // Vídeo só toca quando aparece no centro da tela
    const video = document.getElementById('meu-video');
    if (video) {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        video.play();
                    } else {
                        video.pause();
                    }
                });
            },
            {
                threshold: 0.1 // 10% do vídeo visível já toca
            }
        );
        observer.observe(video);
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('newsletter-form');
    const msg = document.getElementById('newsletter-msg');

    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            const email = document.getElementById('newsletter-email').value;
            msg.textContent = `Obrigado por se inscrever, ${email}!`;
            msg.style.opacity = 1;
            setTimeout(() => {
                msg.style.opacity = 0;
                form.reset();
            }, 3000);
        });
    }
});



