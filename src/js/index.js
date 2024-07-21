document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm');
    const authorizationCheckbox = document.getElementById('authorization');
    const submitButton = document.getElementById('submitButton');

    authorizationCheckbox.addEventListener('change', () => {
        submitButton.disabled = !authorizationCheckbox.checked;
    });

    form.addEventListener('submit', (event) => {
        const inputs = form.querySelectorAll('input[required], select[required]');
        let allValid = true;

        inputs.forEach(input => {
            if (!input.checkValidity()) {
                allValid = false;
                input.classList.add('invalid');
            } else {
                input.classList.remove('invalid');
            }
        });

        if (!allValid) {
            event.preventDefault();
        }
    });
});


/* O formulario ira ser carregado coma bordas vermelhas  pois até no momento o ususario não informou 
nenhum dado em algun campo algun apos ser preenchidos e aceitar o termo o botao ira ficar habilitado para envio
*/









