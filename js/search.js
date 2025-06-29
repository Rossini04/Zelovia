//pesquisa
document.addEventListener('DOMContentLoaded', function () {
    const searchBar = document.getElementById('search-bar');

    searchBar.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            const query = searchBar.value.trim();
            window.location.href = "search.html?q=" + encodeURIComponent(query);
        }
    });

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

document.addEventListener('DOMContentLoaded', function () {
    const loading = document.querySelector('.catalogo-loading');
    if (!loading) return;

    loading.style.opacity = 0;
    loading.style.transition = 'opacity 0.5s';

    let timer = null;

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    timer = setTimeout(() => {
                        loading.style.opacity = 1;
                    }, 1000); // 1 segundo
                } else {
                    clearTimeout(timer);
                    loading.style.opacity = 0;
                }
            });
        },
        {
            threshold: 0.2
        }
    );
    observer.observe(loading);
});

document.addEventListener('DOMContentLoaded', function () {
    // Efeito de rotação seguindo o mouse nos itens do catálogo
    document.querySelectorAll('.catalogo-item').forEach(item => {
        item.addEventListener('mousemove', function (e) {
            const rect = item.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            // Mais responsivo: aumenta o range de rotação e reduz o delay visual
            const rotateY = ((x - centerX) / centerX) * 15; // -15deg a 15deg
            const rotateX = -((y - centerY) / centerY) * 15; // -15deg a 15deg
            item.style.transform = `scale(1.10) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            item.classList.add('hover-effect');
        });
        item.addEventListener('mouseleave', function () {
            item.style.transform = '';
            item.classList.remove('hover-effect');
        });
        item.addEventListener('mouseenter', function () {
            item.classList.add('hover-effect');
        });
    });
});



