// Exemplo de validação simples de senha
document.addEventListener('DOMContentLoaded', function () {
    // Botão para abrir o seletor de arquivos
    const fotoInput = document.getElementById('foto');
    const btnFoto = document.getElementById('btn-foto');
    const preview = document.getElementById('login-photo-preview');
    if (btnFoto && fotoInput && preview) {
        btnFoto.addEventListener('click', function () {
            fotoInput.click();
        });
        fotoInput.addEventListener('change', function () {
            if (this.files && this.files[0]) {
                const reader = new FileReader();
                reader.onload = function (e) {
                    preview.innerHTML = `<img src="${e.target.result}" alt="Foto de perfil">`;
                };
                reader.readAsDataURL(this.files[0]);
            } else {
                preview.innerHTML = `<span class="login-photo-placeholder">+</span>`;
            }
        });
    }

    // Validação de senha igual
    const form = document.getElementById('newacc-form');
    if (form) {
        form.addEventListener('submit', function (e) {
            const senha = document.getElementById('senha').value;
            const confirmar = document.getElementById('confirmar-senha').value;
            if (senha !== confirmar) {
                alert('As senhas não coincidem!');
                e.preventDefault();
            } else {
                e.preventDefault();
                alert('Conta criada com sucesso!');
                window.location.href = '../index.html';
            }
        });
    }
});