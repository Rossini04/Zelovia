function verPromocao(produto) {
    // Faz scroll suave até a seção da promoção correspondente
    const secao = document.getElementById('promo-' + produto);
    if (secao) {
        secao.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

function adicionarCarrinho(event, produto) {
    event.preventDefault();
    const form = event.target;
    const cep = form.querySelector('input[type="text"]').value;
    alert(`Produto "${produto}" adicionado ao carrinho para o CEP: ${cep}`);
}

function comprarDireto(produto) {
    alert(`Compra direta de "${produto}" iniciada!`);
}

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
