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

// === Definindo a força do usuário=== //
let forcaTotal = heroi.ataque + heroi.nivel * 2;
console.log(`Força total do herói: ${forcaTotal}`);

// === Definindo dano ao usuário por armadilha e/ou ataque === //
let dano = 15;
heroi.vida = heroi.vida - dano;
console.log(`Armadilha! O herói perdeu ${dano} de vida.`);
console.log(`Vida atual: ${heroi.vida}`);
heroi.vida -= 10;   
console.log(`Levou outro golpe. Vida atual em: ${heroi.vida}`);

// === Definindo a cura dos status de vida do usuário === //
heroi.vida += 30;
console.log(`Depois de descansar, vida: ${heroi.vida}`);
let percentual = (heroi.vida / heroi.vidaMaxima) * 100;
console.log(`Vida: ${percentual}% do total`);

// === Definindo o poder do heroi === //
let poder = heroi.ataque * 2 + heroi.defesa + heroi.nivel * 5;
console.log(`Poder de combate: ${poder}`);

console.log('\n===Ficha de atributos do inimigo:===')
console.log(`O nome do inimigo é: ${inimigo.nome}`)
console.log(`A vida do inimigo é: ${inimigo.vida}`)
console.log(`A defesa do inimigo é: ${inimigo.defesa}`)
console.log(`O ataque do inimigo é: ${inimigo.ataque}`)
console.log(`O xp ganho do inimigo é: ${inimigo.xp_ganho}`)
console.log(`O ouro ganho do inimigo é: ${inimigo.ouro_ganho}\n`)