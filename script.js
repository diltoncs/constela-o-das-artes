// Exemplo de JavaScript simples para interagir com o formulário
document.getElementById('form-contato').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário para demonstração

    // Captura os valores dos campos
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;

    // Exibe uma mensagem no console (simulando o envio)
    console.log("Nome: " + nome + ", Email: " + email);

    // Limpa os campos do formulário
    document.getElementById('form-contato').reset();
    alert("Mensagem enviada com sucesso!");
});
