function cadastrarUsuario(nome, email) {
    if(nome === "" || email === "") {
        return "Erro: campos obrigatórios.";
    }

    return "Usuário cadastrado com sucesso!";
}

console.log(cadastrarUsuario("Giovanna", "gio@email.com"));
console.log(cadastrarUsuario("", "teste@email.com"));