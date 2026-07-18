function criarHeroi(nome, classe) {
    return {
        nome: nome,
        classe: classe,
        vida: 1000,
        vidaMaxima: 1000,
        defesa: 10,
        ataque: 20,
        xp: 0,
        ouro: 0,
        estaVivo() {
            return this.vida > 0;
        },
        xpMaximo: 1000,
        inventário: [],
        nivel: 1,
    }
}

function criarInimigo(nome, classe, vida, vidaMaxima, defesa, ataque, ouro, xpMaximo) {
    return {
        nome: nome, 
        classe: classe,
        vida: vida,
        vidaMaxima: vidaMaxima,
        defesa:defesa,
        ataque: ataque,
        estaVivo(){
            return this.vida > 0;
        },
        ouro: ouro,
        xpMaximo: xpMaximo,
    }
}

function mostrarficha(mob){
    console.log('\n===Ficha de atributos do ' + mob.nome + ':===')
    console.log('O nome do jogador é: ' + mob.nome)
    console.log('A vida do jogador é: ' + mob.vida)
    console.log('A vida máxima do jogador é: ' + mob.vidaMaxima)
    console.log('A defesa do jogador é: ' + mob.defesa)
    console.log('O ataque do jogador é: ' + mob.ataque)
    console.log('O xp do jogador é: ' + mob.xpMaximo)
    console.log('O ouro do jogador é: ' + mob.ouro)
    console.log('O jogador está vivo? ' + mob.estaVivo())
    console.log('A classe do jogador é: ' + mob.classe)
    console.log('O xp máximo do jogador é: ' + mob.xpMaximo)
}

function descansar(jogador) {
    if(jogador.vida === jogador.vidaMaxima){
        console.log('O heroi insite que pode continuar a lutar, sem descansar')
    }
    else{
        let vida_inicial = jogador.vida;
        jogador.vida += 30;
            if (jogador.vida > jogador.vidaMaxima) {
                jogador.vida = jogador.vidaMaxima;
            }
            let vida_recuperada = jogador.vida - vida_inicial;
            console.log('O heroi reculperou suas energias e recuperou ' + vida_recuperada + ' de vida')
        }
}

function poder_total(jogador){ 
    forcaTotal = jogador.ataque + jogador.defesa + jogador.nivel * 2;
    console.log('A força total do heroi é: ' + forcaTotal)
}

const jogador = criarHeroi("Alexandre", "Mago")
const inimigo = criarInimigo("Goblin", "Monstro", 20, 20, 5, 10, 1, 10)

mostrarficha(inimigo)
mostrarficha(jogador)
descansar(jogador)
poder_total(jogador)

// === Definindo dano ao usuário por armadilha e/ou ataque === 
//let dano = 15;
//jogador.vida -= dano;
//console.log(`Armadilha! O herói perdeu ${dano} de vida.`);
//console.log(`Vida atual: ${heroi.vida}`);
//heroi.vida -= 10;   
//console.log(`Levou outro golpe. Vida atual em: ${heroi.vida}`);

//Aqui os comandos,em sequência, para enviar o código para o GitHub:
// git add .
// git commit -m ""
// git push origin main(o main é por conta do branch que está sendo utilizado)

//Para execultar um arquivo JavaScript no terminal, utilize o comando: node nome_do_arquivo.js
//Lembrando que tem que estar no diretório do arquivo para executar o comando acima.