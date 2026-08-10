function criarHeroi(nome, classe, vida, vidaMaxima, defesa, ataque, nivel, xp, ouro, xpMaximo) {
    return {
        nome: nome,
        classe: classe,
        vida: vida,
        vidaMaxima: vidaMaxima,
        defesa: defesa,
        ataque: ataque,
        nivel: nivel,        
        xp: xp,
        ouro: ouro,
        xpMaximo: xpMaximo,
        inventário: [],
        estaVivo() {
            return this.vida > 0;
        }
    }
}

function criarInimigo(nome, classe, vida, vidaMaxima, defesa, ataque, nivel, xp, ouro, xpMaximo) {
    return {
        nome: nome, 
        classe: classe,
        vida: vida,
        vidaMaxima: vidaMaxima,
        defesa:defesa,
        ataque: ataque,
        nivel: nivel,
        xp: xp,
        ouro: ouro,
        xpMaximo: xpMaximo,
        estaVivo(){
            return this.vida > 0;
        }
    }
}

function mostrarficha(mob){
    console.log('\n===Ficha de atributos do ' + mob.nome + ':===')
    console.log('O nome do ' + mob.classe + ' é: ' + mob.nome)
    console.log('A vida do ' + mob.classe + ' é: ' + mob.vida)
    console.log('A vida máxima do ' + mob.classe + ' é: ' + mob.vidaMaxima)
    console.log('A defesa do ' + mob.classe + ' é: ' + mob.defesa)
    console.log('O ataque do ' + mob.classe + ' é: ' + mob.ataque)
    console.log('A Força total do ' + mob.classe + ' é: ' + força_total(mob))
    console.log('O nível do ' + mob.classe + ' é: ' + mob.nivel)
    console.log('O xp do ' + mob.classe + ' é: ' + mob.xp)
    console.log('O ouro do ' + mob.classe + ' é: ' + mob.ouro)
    console.log('O ' + mob.classe + ' está vivo? ' + mob.estaVivo())
    console.log('O xp máximo do ' + mob.classe + ' é: ' + mob.xpMaximo)
}

function descansar(jogador) {
    if(jogador.vida === jogador.vidaMaxima){
        console.log('O heroi insite que pode continuar a lutar, sem descansar.')
    }else if(jogador.vida < 10){
        console.log('O heroi está gravimente debilitado e não consegue descansar, dado o seu estado, ele não consegue se reculperar.')
    }else{
        let vida_inicial = jogador.vida;
        jogador.vida += 30;
            if (jogador.vida > jogador.vidaMaxima) {
                jogador.vida = jogador.vidaMaxima;
            }
            let vida_recuperada = jogador.vida - vida_inicial;
            console.log('O heroi reculperou suas energias e recuperou ' + vida_recuperada + ' de vida.')
        }
}

function força_total(mob){ 
    let forcaTotal = mob.ataque + mob.defesa + mob.nivel * 2;
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
}// As ordens de cada atributo são: nome, classe, vida, vidaMaxima, defesa, ataque, nivel, xp, ouro, xpMaximo
const jogador = criarHeroi("Alexandre", "Mago", 100, 100, 10, 20, 1, 0, 0, 1000)
const inimigo = criarInimigo("Goblin", "Monstro", 20, 20, 5, 10, 1, 10, 100, 1000)

mostrarficha(inimigo)
mostrarficha(jogador)
descansar(jogador)
compararforça(jogador, inimigo)
definir_nivel(jogador)

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