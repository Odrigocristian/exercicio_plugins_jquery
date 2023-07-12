$(document).ready(function() {
    $('#telefone').mask('(00) 0000-0000');
    $('#cpf').mask('000.000.000-00');
    $('#cep').mask('00000-000');

    $('#cadastroForm').validate({
        rules: {
            nomeCompleto: 'required',
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true,
                minlength: 14
            },
            cpf: {
                required: true,
                minlength: 14
            },
            endereco: 'required',
            cep: {
                required: true,
                minlength: 9
            }
        },
        messages: {
            nomeCompleto: 'Por favor, digite o nome completo.',
            email: {
                required: 'Por favor, digite o e-mail.',
                email: 'Por favor, digite um e-mail válido.'
            },
            telefone: {
                required: 'Por favor, digite o telefone.',
                minlength: 'Por favor, digite um telefone válido.'
            },
            cpf: {
                required: 'Por favor, digite o CPF.',
                minlength: 'Por favor, digite um CPF válido.'
            },
            endereco: 'Por favor, digite o endereço completo.',
            cep: {
                required: 'Por favor, digite o CEP.',
                minlength: 'Por favor, digite um CEP válido.'
            }
        },
        submitHandler: function(form) {
            form.submit();
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`);
            }
        }
    });
});
