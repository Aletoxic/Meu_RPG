const jogador = {
    nome: "Alexandre",
    Vida: 100,
    Vida_maxima: 1000,
    Defesa: 10,
    Ataque: 20,
    Xp: 0,
    Ouro: 0,
    Esta_vivo: true,
    classe: "Paladino",
    Xp_maximo: 1000,
    Arma: "Espada reta",
};

console.log('\n===Ficha de atributos do jogador 1:===')
console.log(`O nome do jogador 1 é: ${jogador.nome}`)
console.log(`A vida do jogador 1 é: ${jogador.Vida}`)
console.log(`A vida máxima do jogador 1 é: ${jogador.Vida_maxima}`)
console.log(`A defesa do jogador 1 é: ${jogador.Defesa}`)
console.log(`O ataque do jogador 1 é: ${jogador.Ataque}`)
console.log(`O xp do jogador 1 é: ${jogador.Xp}`)
console.log(`O ouro do jogador 1 é: ${jogador.Ouro}`)
console.log(`O jogador 1 está vivo? ${jogador.Esta_vivo}`)
console.log(`A classe do jogador 1 é: ${jogador.classe}`)
console.log(`O xp máximo do jogador 1 é: ${jogador.Xp_maximo}\n`)
console.log(`A arma do jogador 1 é: ${jogador.Arma}\n`)


const inimigo = {
    nome: "Morto-vivo",
    vida: 20,
    defesa: 5,
    ataque: 15,
    xp_ganho: 50,
    ouro_ganho: 1,
};

console.log('\n===Ficha de atributos do inimigo:===')
console.log(`O nome do inimigo é: ${inimigo.nome}`)
console.log(`A vida do inimigo é: ${inimigo.vida}`)
console.log(`A defesa do inimigo é: ${inimigo.defesa}`)
console.log(`O ataque do inimigo é: ${inimigo.ataque}`)
console.log(`O xp ganho do inimigo é: ${inimigo.xp_ganho}`)
