const form = document.querySelector('.form-subscribe')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let nome = document.getElementById('nomeAddressBelow').value;
    let email = document.getElementById('emailAddressBelow').value;
    let senha = document.getElementById('senhaAddressBelow').value;
    let cidade = document.getElementById('cidadeAddressBelow').value;
    let endereco = document.getElementById('enderecoAddressBelow').value;
    let produto = document.getElementById('produtoAddressBelow').value;
    let cep = document.getElementById('cepAddressBelow').value;
    let data = {
        nome,
        email,
        senha,
        cidade,
        endereco,
        cep,
        produto
    }
    let convertData = JSON.stringify(data);

    localStorage.setItem(email, convertData)

    alert("Email enviado!")

})