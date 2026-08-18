const { exit } = require('process');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function criarHeroi(nome, classe, vida, vidaMaxima, defesa, ataque, velocidade, nivel, xp, ouro, xpMaximo) { 
    return { 
        nome: nome, 
        classe: classe, 
        vida: vida, 
        vidaMaxima: vidaMaxima, 
        defesa: defesa, 
        ataque: ataque, 
        velocidade: velocidade, 
        nivel: nivel,         
        xp: xp, 
        ouro: ouro, 
        xpMaximo: xpMaximo, 
        inventario: [], 

        estaVivo() { 
            return this.vida > 0; 
        }, 
 
        curar(quantidade){ 
            this.vida += quantidade; 

            if(this.vida > this.vidaMaxima){ 
                this.vida = this.vidaMaxima; 
            } 

            console.log(`${this.nome} recuperou ${quantidade} de pontos de vida`);
        }, 
 
        mostrarficha_resumida(){ 
            console.log(`=== ${this.nome} (Nv. ${this.nivel})`);
            console.log(`Vida: ${this.vida} | Ataque: ${this.ataque} | Defesa: ${this.defesa}`); 
        },

        descansar(){ 
            if(this.vida === this.vidaMaxima){ 
                console.log('O herói insiste que pode continuar a lutar, sem descansar.'); 

            } else if(this.vida < 10){ 
                console.log('O herói está gravemente debilitado e não consegue descansar.'); 

            } else { 
                let vida_inicial = this.vida; 

                this.vida += 30; 

                if(this.vida > this.vidaMaxima){ 
                    this.vida = this.vidaMaxima; 
                } 
 
                let vida_recuperada = this.vida - vida_inicial; 

                console.log(`${this.nome} recuperou ${vida_recuperada} de vida.`); 
            } 
        }
    } 
}

function criarInimigo(nome, classe, vida, vidaMaxima, defesa, ataque, velocidade, nivel, xp, ouro, xpMaximo) {
    return {
        nome: nome, 
        classe: classe,
        vida: vida,
        vidaMaxima: vidaMaxima,
        defesa:defesa,
        ataque: ataque,
        velocidade: velocidade,
        nivel: nivel,
        xp: xp,
        ouro: ouro,
        xpMaximo: xpMaximo,
        estaVivo(){
            return this.vida > 0;
        },

        mostrarficha_resumida(){
            console.log(`=== ${this.nome} (Nv. ${this.nivel})`);
            console.log(`Vida: ${this.vida} | Ataque: ${this.ataque} | Defesa: ${this.defesa}`);
        }
    }
}

function mostrarFicha(mob){
    console.log('\n===Ficha de atributos do ' + mob.nome + ':===')
    console.log('O nome do ' + mob.classe + ' é: ' + mob.nome)
    console.log('A vida do ' + mob.classe + ' é: ' + mob.vida)
    console.log('A vida máxima do ' + mob.classe + ' é: ' + mob.vidaMaxima)
    console.log('A defesa do ' + mob.classe + ' é: ' + mob.defesa)
    console.log('O ataque do ' + mob.classe + ' é: ' + mob.ataque)
    console.log('A velocidade do ' + mob.nome + ' é: ' + mob.velocidade)
    console.log('A Força total do ' + mob.classe + ' é: ' + força_total(mob))
    console.log('O nível do ' + mob.classe + ' é: ' + mob.nivel)
    console.log('O xp do ' + mob.classe + ' é: ' + mob.xp)
    console.log('O ouro do ' + mob.classe + ' é: ' + mob.ouro)
    console.log('O ' + mob.classe + ' está vivo? ' + mob.estaVivo())
    console.log('O xp máximo do ' + mob.classe + ' é: ' + mob.xpMaximo)
}

// === Dinâmica de combate === //

function atacar(atacante, defensor) {
    let dano = atacante.ataque - defensor.defesa;
    if (dano < 1) {
        dano = 1;
    }
    defensor.vida -= dano;
    if (defensor.vida < 0) {
        defensor.vida = 0;
    }
    console.log(`${atacante.nome} atacou ${defensor.nome} e causou ${dano} pontos de dano.`);
    console.log(`${defensor.nome} agora possui ${defensor.vida} pontos de vida.`);
}

function atacar_verificar(atacante, defensor, jogador){
    atacar(atacante, defensor)
    if(!defensor.estaVivo()){
        console.log(`${defensor.nome} foi abatido em combate\n`)
        if(defensor === jogador){
            penalidade_morte(jogador)
        }else{
            ganhar_espolios(jogador, defensor)
        }
    }
}

function penalidade_morte(jogador) {
    jogador.vida = 0;
    jogador.ouro = 0;
    jogador.xp = 0;
    console.log(`Sobre seus últimos esforços, você cai sobre o chão frio da caverna, e sente a vida se esvair do seu corpo.`);
    console.log(`${jogador.nome} consegue ouvir a voz de alguém dizendo:`);
    console.log(`Pequeno guerreiro, você pereceu, porém, se ainda houver vida em teu peito e força na tua alma, erga-se novamente.`);
    console.log(`Você se depara com a entrada da caverna, mas sente algo diferente, seu corpo está dolorido e fraco.`);
    console.log(`Você perdeu todo seu ouro e experiência, porém, sua integridade mental permanece.`);
}

function ganhar_espolios(jogador, defensor) {
    jogador.ouro += defensor.ouro;
    jogador.xp += defensor.xp;

    console.log(`${jogador.nome} derrotou ${defensor.nome} e ganhou ${defensor.ouro} de ouro e ${defensor.xp} de experiência.`);
}

// === Loop de combate === //
function perguntar(pergunta) {
    return new Promise((resolve) => {
        rl.question(pergunta, (resposta) => {
            resolve(resposta);
        });
    });
}
async function batalhar(atacante, defensor, jogador) {
    console.log(`A batalha entre ${atacante.nome} e ${defensor.nome} começou!`);

    let turno = 1;
    while (atacante.estaVivo() && defensor.estaVivo()) {
        console.log(`\n=== Turno ${turno} ===`);
        atacar_verificar(atacante, defensor, jogador);
        if (!defensor.estaVivo()) {
            break;
        }
        atacar_verificar(defensor, atacante, jogador);
        turno++;
    }
    if (jogador.estaVivo()) {
        console.log(`\n${jogador.nome} terminou a batalha com ${jogador.vida} pontos de vida restantes.`);
        console.log(`O ouro atual de ${jogador.nome} é: ${jogador.ouro}`);
        console.log(`A experiência atual de ${jogador.nome} é: ${jogador.xp}`);
        console.log(`Falta apenas ${jogador.xpMaximo - jogador.xp} de experiência para evoluir de nível.`);

        const resposta = await perguntar(
            `Você deseja que ${jogador.nome} descanse? (sim/não): `
        );
        if (resposta.toLowerCase() === 'sim') {
            jogador.descansar()
        } else if (
            resposta.toLowerCase() === 'não' || resposta.toLowerCase() === 'nao') {
            console.log(`${jogador.nome} decidiu continuar sua jornada.`);
        } else {
            console.log(
                'O herói não entendeu o seu desejo, você quer que ele descanse? sim ou não.'
            );
        }
    }
}


function força_total(mob){ 
    let forcaTotal = mob.ataque + mob.defesa + mob.velocidade + mob.nivel * 2;
    return forcaTotal;
}

// === Definindo a progressão do jogador === //
function definir_nivel(jogador) {
    let forca = força_total(jogador);
    if (forca > 200) {
        console.log(`${jogador.nome} é um guerreiro formidável, porém a jornada dele está longe de acabar.`)
    }else if(forca > 100) {
        console.log(`${jogador.nome} é um peregrino comum, que está começando a sua jornada.`)
    } else {
    console.log(`${jogador.nome} é um heroi em formação.`)
}
}

// === Comparando a força dos mobs === //
function compararforça(mob1, mob2) {
    let forçaTotal1 = força_total(mob1);
    let forçaTotal2 = força_total(mob2);
    if (forçaTotal1 > forçaTotal2) {
        console.log(`${mob1.nome} é mais forte que ${mob2.nome}.`)
    } else if (forçaTotal1 < forçaTotal2) {
        console.log(`${mob2.nome} é mais forte que ${mob1.nome}.`)
    } else {
        console.log(`${mob1.nome} e ${mob2.nome} possuem a mesma força.`)
    }
}

async function iniciarMasmorra() {

    for (let i = 0; i < masmorra.length; i++) {

        if (!jogador.estaVivo()) {
            break;
        }

        console.log(`\n=== Andar ${i + 1} ===`);
        console.log(`Um ${masmorra[i].nome} apareceu!`);
        await batalhar(jogador, masmorra[i], jogador);
    }
    rl.close();
}
// === inventário do jogador === ///
const itens = ["Poção de Vida", "Espada Velha", "Escudo de Madeira"]; 

// As ordens de cada atributo são: nome, classe, vida, vidaMaxima, defesa, ataque, velocidade, nivel, xp, ouro, xpMaximo
const jogador = criarHeroi("Alexandre", "Mago", 100, 100, 10, 20, 5, 1, 0, 0, 1000)

// === Invetário do jogador === //

jogador.inventario.push(itens[2]);
console.log(`Itens no inventário: ${jogador.inventario}`);

// ===Definindo os inimigos que vão aparecer em cada andar === //
const masmorra = [
    criarInimigo("Goblin", "Monstro", 20, 20, 5, 10, 6, 1, 10, 10, 0),
    criarInimigo("Orc", "Monstro", 50, 50, 15, 25, 2, 2, 20, 20, 0),
    criarInimigo("Morto vivo", "Monstro", 80, 80, 20, 30, 3, 3, 15, 17, 0),
    criarInimigo("Vasto Lorde das Ruinas", "Monstro", 10000, 10000, 400, 500, 100, 100, 5000, 50000, 0),
];


iniciarMasmorra()

// === Lista de comandos criada === //
//mostrarficha(inimigo)
//mostrarficha(inimigo2)
//mostrarficha(inimigo3)
//mostrarficha(jogador)
//descansar(jogador)
//compararforça(jogador, inimigo)
//compararforça(jogador, inimigo2)
//compararforça(jogador, inimigo3)
//definir_nivel(jogador)
//batalhar(jogador, inimigo1, jogador)

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
//Fix, add, delete, update, refatorar,