document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm');
    const authorizationCheckbox = document.getElementById('authorization');
    const submitButton = document.getElementById('submitButton');
    const errorMessages = document.querySelectorAll('.error-message');

    // Inicialmente, esconda todas as mensagens de erro
    errorMessages.forEach(msg => msg.style.display = 'none');

    // Ativar o botão de enviar apenas se o termo de autorização for aceito
    authorizationCheckbox.addEventListener('change', () => {
        submitButton.disabled = !authorizationCheckbox.checked;
    });

    form.addEventListener('submit', (event) => {
        const inputs = form.querySelectorAll('input[required], select[required]');
        let allValid = true;

        inputs.forEach(input => {
            const errorMessage = input.nextElementSibling;
            if (!input.checkValidity()) {
                allValid = false;
                input.classList.add('invalid');
                errorMessage.style.display = 'block';  // Mostrar mensagem de erro
            } else {
                input.classList.remove('invalid');
                errorMessage.style.display = 'none';  // Esconder mensagem de erro
            }
        });

        if (!allValid) {
            event.preventDefault();  // Impedir o envio se houver erros
        } else {
            event.preventDefault();  // Prevenir o comportamento padrão do formulário

            // Criar objeto de filme
            const movie = {
                nameBrazil: form.nameBrazil.value,
                nameOriginal: form.nameOriginal.value,
                director: form.director.value,
                releaseDate: form.releaseDate.value,
                rating: form.rating.value,
                genre: form.genre.value,
                audioLanguages: Array.from(form.audioLanguages).filter(checkbox => checkbox.checked).map(checkbox => checkbox.value),
                authorization: form.authorization.checked
            };

            // Salvar no localStorage
            let movies = JSON.parse(localStorage.getItem('movies')) || [];
            movies.push(movie);
            localStorage.setItem('movies', JSON.stringify(movies));

            // Redirecionar para a página de filmes cadastrados
            window.location.href = 'filmes.html';
        }
    });
});










