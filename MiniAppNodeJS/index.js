function saudacao(nome) {
    return `Olá, ${nome}! Bem-vindo(a) 😄`;
}

function horaAtual() {
    const agora = new Date();
    return agora.toLocaleTimeString("pt-BR");
}

module.exports = { saudacao, horaAtual };
