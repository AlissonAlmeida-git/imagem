/**
 * ----------- VARIÁVEIS GLOBAIS DO JOGO -----------
 */
/**
 * Sprites (personagens) que usaremos em cenas específicas
 */
// Itens do inventário. Começam como "falso".
function terceiraEscolha () {
    story.showPlayerChoices("Virar devagar e com calma.", "Ignorar a sombra.")
    if (story.getLastAnswer() == "Virar devagar e com calma.") {
        story.printText("Você se vira lentamente. Diante de você está um ser alto, completamente preto, sem rosto ou mãos.", 80, 140, 1, 15)
        story.printText("Você desvia o olhar e vê a casa de onde saiu. É sua única chance de fuga!", 80, 140, 1, 15)
        cenaFuga()
    } else {
        gameOver("A criatura não gosta de ser ignorada. Foi o seu último erro.")
    }
}
function segundaEscolha () {
    scene.setBackgroundImage(img`
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888188888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888881888888888888888888888888888888888888881888888188888888888888888888888888888888888888888888888888888
        88888888818888888888888888888888888888888888888888888888888888888888888888888888888888188888888888888888888eeeeeeee44eeee8e8888888888888888888888888888881888888
        8888888888888888888888888888818888888888881888888888888888888888888888888888888888888888888888888888888eee444444444444444eeeee8888888818888888888888888888888888
        881888888888888888888888888888888888888888888888888888888888888888888888888888818888888888888818888888e444eeee88888eeeeee444ee8888888888888888888888888888888888
        8888888888888188888888888888888888888888888888888888888888888888888888888888888888888888888888888888e44ee8888888888888eeeeeeeee888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888eeeeeeee88888888888888888888888888eee48888888888888888888888eeee88888888888888888818888888881888
        8888888888888888888888888888888888888888888888888888e44444ee4eeeeeee444eee88888888888888888888888eee48888888888888888888888888eee8888888888888888888888888888888
        8888888888888888888888888888888888888888888888888444444eee444eeeeeeeeee444448888888888188888888eee44e88888188888888888888888888eee488888888888888888888818888888
        888888888888888888888888188888888888888888888884444eeeeeeeeeeeeee44e4eeeeeee444888888818888888ee44eee8888eee888888888888888888888e4e8888888188888888888888888888
        888888888888888888888888888888888888888888888eeeeeee888888888eeeeee444eeeeeeee488888888888888eee4eeeeeeee8eee88888881888888888888884e888888888888888888888888888
        8888888888888888888888888188888888888888888888888888e8e888888e8eeeeee44eeeeeeee4888888888888eee4eeeee44448eeee8888888888188888888888e888888888888888888888888888
        888888888888888888888888888888888888888888888888888888888888eeeeeeeeee444eeeeee488888888888eeeeee4444eee844eeee888888888888888888888e888888888888888888888888888
        88888888888888888888888888888888888888888888888888888888888eeeeee4ee4ee444eeeeee4eeeee88888eee4eeeeeeeeeeee4eeee888888888888888888888488888188888888888888888188
        888888888888888888888888888888888881888888888888888888888888eeeeee4e44eee44eeeee4eeeee8888eeee4eeeeee888888844eeee8888888888888888888e88888888888888888888888888
        88888888888888888888888888888888888888888888888888888888888eeeeeee4ee4eeeee4eeeee4eeee888eeee4eeeeee888818888844eee888888888888888888e88888888888888888888888888
        8888888888888888888888888888888888888888888888888881888888eeeeeeeee4ee4eeeeeeeeeeeeeeeeeeeeee4eeeee888888888888844eee8888888888888888818888888888888888888888888
        8888888818888888888888888888888888888888888888888888888888eee4eeeeee4e4eeeeeeeeeeeeeeeeeeeee4e4e4ee88888888888888e4eee8888888888888888e8888888881888888888888888
        8888888888888888188888888888888888888888888888888888e8888eee4eeeeeeee4e4eeeeeeeee4eeeeeeeeee44ee4ee888888888888888e44ee88888888888888888888888888888888881888888
        88888888888888888888888888888888888888888888888888888888eeee4eeeeeeeee44eeee4eeeeee4eeeeeee44ee4ee88888888888888888e44eee888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888eeee4eeeeee88eee44eee4eeeeee4eeeeee4e4ee4ee88888888888818888884eeee88888188888888888888888888888888888888
        8888888888888888888888888888888888888888818888888888888ee44eeee888888eeee4eeeeee4ee4eeeeee4eee4eee88188888888888888888eeee88888888888888888888888888888888888888
        888818888888888888888888888881888888888888888888888888e444eeee88881888eee4eeeeee4e4eeeeee4eeee4eee88888888888888888888e8e8e8888888888888888888888888888888888888
        88888888888888888888888888888888888888888888888888888e4ee4eee888888888eee44eeeee4e4eee4ee4ee8eeeeee8888888818888888888e8e8e8888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888ee4e4eee8888818888eee4eeeeee4e4eeeee4ee4eee4eee88888888888888888888e8e8e888888888888888888888888888888888888
        888888888888888888888888888888888888888888888888888ee4e4eee88888888888eeee4eeeeee4eee4ee4ee4eeee4eee88888888888888888888ee4e888888888881888888888888888888888888
        88888888888888888818888888888888888888888888888888eee44eee888888818888eeee4eeeeee4eeeee4eee4eeeee4eee8888888888818888888884ee88888888888888888888818888888888888
        888888888888888888888888888888888888888888888888eeee444ee88888888888888eee4eeeeee4eeeeeeee4eeeee8e44ee88188888888888888888e4e88888888888888888888888888888888188
        8888888888888888888888888888888888888888888888888ee4e4ee888888888888888eee4eeeeee4e4eeeeee4eee8eeeee4ee8888888888888888888e4ee8888888888888888888888888188888888
        8888888888888888888888888888881888888888888888888ee44ee8888188888888888e8ee4eeeee44eeeeee4eeeee8ee8ee4ee8888888888888888888e4e4888888888888888888888888888888888
        888888881888888888888888888888888888888888888888ee4eee88888888888888dddeeee4eeeee44eeeeee4eeeee84e88e44ee8888888888888888888e44488888888888881888888888888888888
        888888888888888888888888888888888888888888888888ee4e8e88888ddddddddddddeeee4eeeee44eeeee4eeeeee84e888eeeee888188888888888888844e44888888888888888888888888888888
        888888888888888888888888888888888888888818888888ee48e8888ddddddddddddddeeeee4ee4e44eeeee4eeeeee44e8888ee4ee888888888888888888848ee4ee888888888818888888888888888
        888888888888888888888888888888888888888888888888ee48e8dddddddddddddddddeeeee4ee4e4e4eee4e4e4edddddddd88eeeeddd8ddddd888888888888888eee88888888888888888888888888
        888888888888888888888888888888888888888888888888ee48eddddddddddddddddddeeeeee4ee44eeeee4eee4eddddddddddddeedddddddddd8888888888888888888888888888888888888888888
        888888888888888888888888888888881888888888888888ee4edddddddddddddddddddeeeeeeeeee44eeee4eee4edddddddddddddeeedddddddddd88888888888888888888188888888888888888888
        888888888888888888888888888888888888888888888888ee4ddddddddddddddddddddeeeeeeeeeee4eeee4eee4eddddddddddddde4eddddddddddd8888888888888888888888888888888888888888
        888888888888888888888888888888888888888888888888e44ddddddddddddddddddddeee4eeeeeee4eeeeeeee4edddddddddddddddeedddddddddddd88888888188888888888888888888888888888
        888888888888888888888888888888888888888888888888ee4ddddddddddddddddddddee44eeeeeeee4eeeeee44edddddddddddddddeeddddddddddddd8888888881888888888888888888888881888
        888888888888888888888888888888888888888888888888ee4ddddddddddddddddddddee44eeeeeeeeeeeeeee44eddddddddddddddddeedddddddddddddd88888888888888888888888888888888888
        888888888888888188188888888888888888188888888ddddeee4ddddddddddddddddddeee4eeeeeeeeeeeeeee44edddddddddddddddddeeddddddddddddddd888888888888818888888888881888888
        8888888888888888888888888888888888888888888dddddddee4edddddddddddddddddeee4eeeeeeeeeeeeee4e4eddddddddddddddddd4edddddddddddddddd88888888888888888888888888818888
        888888888888888888888888888888888888888888ddddddddeee4eddddddddddddddddeee4eeeeeeeeee4eeeee4edddddddddddddddddd4ddddddddddddddddd8888888888888888888888888888888
        88888888888888888888888888888888888888888dddddddddddee4edddddddddddddddee44eeeeeeeeeeeeeeee4edddddddddddddddddde4ddddddddddddddddd888888888888888888888888888888
        8888888888888888888888888888888888888888dddddddddddddd4eeddddddddddddddeee4eeeeeeeeeeeeeeee4edddddddddddddddddddedddddddddddddddddd88888888888888888888888888888
        888188888888888888888888888888888888888dddddddddddddddd4eddddddddddddddeee4eeeeeeeeeeeeeeee4edddddddddddddddddddeddddddddddddddddddd8888888888888888888888888888
        88888888888888888888888888888888888888dddddddddddddddddd4ddddddddddddddeee4eeeeeeeeeeeeeeee4eddddddddddddddddddddddddd111dddddddddddd888888188888888818888888888
        8888888888888888888888888888888888888ddddddddddddddddddd4eddddddddddddddee4ee4eeeeeeeeeeeee4eddddddddddddddddddddddddd1111ddddddddddd888888888888888888888888888
        88888888888888888888888888888888888ddddddddddddddddddddd4eddddddddddddddee4eeeeeeeeee4eeeee4edddddddddddddddddddddddd11111dddddddddddd88818888888888888888888888
        8888888888888888888888888888888888dddddddddddddddddddddd4eddddddddddddddde4eeeeeeeceeeeeeee4eeddddddddddddddddddddddd1111111111dddddddd8888888888888888888888888
        888888888888888888888888888888888ddddddddddddddddddddddd4eddddddddddddddde4eeeeeecceeeeeeee4eeddddddddddddddddddddddd11111111111dddddddd888888888888888888888888
        88818888888888888888888818888888dddddddddddddddddddddddd4eddddddddddddddd44eeedddccdddddeee4eedddddddddddddddddddddddd11111111111dddddddd88881888888888888881888
        8888888888888888888888888888888dddddddddddddddddddddddddedddddddddddddddde4eeedddddddddeee4eeeddddddddddddddddddddddddd1111111111ddddddddd8888888888888888888888
        888888888888888888888888888888ddddddddddddddddddddddddddedddddddddddddddd4eeeeddffffdddeeeeeeeddddddddddddddddddddddddddd111111111ddddddddd888888888888818888888
        888888888888888888888888888888ddddddddddddddddddddddddddddddddddddddddddde4eeddddddddddeeeeeeedddddddddddddddddddddddddddd111111111dddddddd888888888888888888888
        88888888888888188888888888888ddddddddddddddddddddddddddddddddddddddddddddeeeeddddddddddeeeee44dddddddddddddddddddddddddddd1111111111dddddddd88888888888888888888
        8888888888888888888888888888dddddddddddddddddddddddddddddddddddddddddddddeeedddddfffddeeeeeee4edddddddddddddddddddddddddddd1111111111dddddddd8888888888881888888
        8888888888888881888888888888dddddddddddddddddddddddddddddddddddddddddddddeeeddddddddddeeeeeee4eddddddddddddddddddddddddddddd111111111ddddddddd888888888881888888
        888888888888888888888888888dddddddddddddddddddddddddddddddddddddddddddddeee4ddddffffddeeeeeee44dddddddddddddddddddddddddddddd111111111dddddddd888888888888888888
        88888888888888888888888888ddddddddddddddddddddddddddddddddddddddddddddddeee4ddddddddddeeeeeee44edddddddddddddddddddddddddddddd11111111dddddddd888888888888888888
        8888888888888888888888888dddddddddddddddddddddddddddddddddddddddddddddddeee4dfffffffdeeeeeeeee44ddddddddddddddddddddddddddddddd11111111ddddddd888888888888888888
        888888188888888888888888ddddddddddddddddddddddddddddddddddddddddddddddddeee4dddddddddeeeeeeeee44dddddddddddddddddddddddddddddddd11111111dddddd888888888888888888
        888888888888888888888888ddddddddddddddddddddddddddddddddddddddddddddddddeee4ddfddddddeeeeeeeee444dddddddddddddddddddddddddddddddd1111111ddddddd88888888888888888
        88888888888888888888888dddddddddddddddddddddddddddddddddddddddddddddddddeee4dddffffdddeeeeeeee444ddddddddddddddddddddddddddddddddd1111111dddddd88888888888888888
        88888888888888888888888dddddddddddddddddddddddddddddddddddddddddddddddddee4edddddddddddeeeeeee44edddddddddddddddddddddddddddddddddd111111dddddd88888888888888888
        8888888888888888888888ddddddddddddddddddddddddddddddddddddddddddddddddddee4e4eeeeeeeeeeeeeeeeee44dddddddddddddddddddddddddddddddddd1111111dddddd8888888888888188
        888888888888888888888dddddddddddddddddddddddddddddddddddddddddddddddddddee4e4eeeeeeeeeeeeeeeeeee4ddddddddddddddddddddddddddddddddddd111111dddddd8888818888888888
        888888888888888888888ddddddddddddddddddddddddddddddddddddddddddddddddddde44e4eeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddd1111111dddddd888888888888888
        88888888888888888888dddddddddddddddddddddddddddddddddddddddddddddddddddde44e4eeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddd1111111ddddd888888881888888
        88888888888888888888dddddddddddddddddddddddddddddddddddddddddddddddddddee44e4ee4eeeeeeeeeeeeeeeeeeedddddddddddddddddddddddddddddddddd1111111dddddd88888888888888
        888888888881888888ddddddddddddddddddddddddddddddddddddddddddddddddddddde44ee4ee4eeeeeeeeeeeee44eeeeedddddddddddddddddddddddddddddddddd1111111ddddd88888888888888
        88888888888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddee44ee4ee4eeeeeeeeeeeeee44eeeeddddddddddddddddddddddddddddddddddd111111dddddd8888888888888
        88888888888888888ddddddddddddddddddddddddddddddddddddddddddddddddddddde444ee4eee4eeeeeeeeeeeee4e4eeeeddddddddddddddddddddddddddddddddddd111111dddddd888888888888
        8888888888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddde4e4ee4e4e4eeeeeeeeeeeeee4e4eeee4dddddddddddddddddddddddddddddddddd11111ddddddd81888888888
        8888888888888888ddddddddddddddddddddddddddddddddddddddddddddddddddddde44e4ee4e4ee4eeeeeeeeeeeeee4e4eee4dddddddddddddddddddddddddddddddddd111111dddddd88818888888
        8888888888888888dddddddddddddddddddddddddddddddddddddddddddddddddddde44ee4ee4e4ee4eeeee4eeeeeeeee4eeeeeddddddddddddddddddddddddddddddddddd11111dddddd88888888888
        8888888888888888dddddddddddddddddddddddddddddddddddddddddddddddddddee44e4eee4e4ee4eeeeee4ee4eeeeeeeeeee4eddddddddddddddddddddddddddddddddddd111dddddd88888888888
        8888888888888888ddddddddddddddddddddddddddddddddddddddddddddddddddde44eeeeee4e4eee4eeeeee4ee44eeeeebbbeeeeeddddbbbbbbbbbdddddddddddddddddddddddddddddd8888888888
        8888888888888888dddddddddddddddddddddddddddbbbbbbbbbbbdddddddddddde44eeeeee4ee4eeeeeeeeeee44ee44eeeebbbbeeeeeebbbbbbbbbbbbbbbbbbdddddddddddddddddddddd8888881888
        8888818888888888ddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbee4eeeeeeee4e4eebeebbbbeeee4eee44eeebbbbbbeebebbbbbbbbbbbbbbbbbbffffffddddddddddddddd8888818888
        8888888888888888dddddddddddddddddffffbbbbbbbbbbbbbbbbbbbbbbbbbbe4e4eeeeeeeeee44eeebbbbbbbbbbb4eeeeeeeeebbbebbbbbbbbbbbbbbbbbbbbbbffffffffffffffddddddd8888888888
        8888888f888888ffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbeeee4eeeeeeee4eee44eeeebbbbbbbbbbbbeee44eeeeebeeebbbbbbbbbbbbbbbbbbfffffffffffffffffdddddfff8888888
        8888ffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbee4eeeebbeebbbee4ee4e4eeeeebbbbbbbbbebeeee444eeeeeebeeebbbbbbbbbbbbbfffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbeee4eeebbbbbbbbbe4e444ee44eeebbbbebbbbbebbeeee44eeeeeeeebebbbbbbbbbbbffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbeeeeebbbbbbbbbbbbbeee44eee4eeeeeebbbbbbbbbbbbeebbeebbbeeeeeebbbbbbbbfffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbeeeebbbbbbbbbbbbbebbeee4eee44ee4eeebbbbbbbbbbbbbbbbeebbbbbbebbbbbbbffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbeeeebbbbbbbbbbbbbbbbbbbbbeeebeeeeeebeebbbbbbbbbbbbbbbbbbbbbbebbbbbbfffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbebbbbbbbbe4eeeeeeebbbbbbbbbbbbbbbbbbbbeebbbfffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeebbeebbbbbbbbbbbbbbbbbbbeebfffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeebbbbbbbbbbbbbbbbbbbeffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeebbbbbbbbbbbbbbffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbebbbbbbffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        `)
    story.showPlayerChoices("Pegar o papel.", "Continuar andando sem rumo.")
    if (story.getLastAnswer() == "Pegar o papel.") {
        story.printText("Você pega o papel. Ele contém apenas rabiscos ilegíveis.", 80, 140, 1, 15)
        story.printText("De repente, uma sombra alta se projeta na sua frente... Tem alguém atrás de você!", 80, 140, 1, 15)
        terceiraEscolha()
    } else {
        gameOver("Você ignorou a única pista e continuou correndo para a escuridão. Sem um guia, você se perde para sempre.")
    }
}
function cenaFloresta () {
    story.printText("Você caminha pela floresta e sente um calafrio, como se estivesse sendo observada.", 80, 140, 1, 15)
    story.printText("Quanto mais você anda, mais forte é a presença. Você ouve passos atrás de você!", 80, 140, 1, 15)
    story.printText("À sua frente, você vê uma árvore velha com um papel pendurado nela.", 80, 140, 1, 15)
    segundaEscolha()
}
// Controla o estado da cena de fuga
function cenaExploracaoCasa () {
    // Verifica se todos os itens foram coletados
    if (temChaveAzul && temCorrente && temBolsaVermelha) {
        story.printText("Você encontrou todos os itens: a chave azul, a corrente e a bolsa vermelha.", 80, 140, 1, 15)
        story.printText("Você sabe que a criatura ainda está lá fora. A porta da frente não é uma opção.", 80, 140, 1, 15)
        story.printText("Você vai para a garagem nos fundos da casa para tentar uma fuga.", 80, 140, 1, 15)
        cenaFinal()
        // Sai da função para não mostrar as escolhas de novo
        return
    }
    story.printText("Onde você quer procurar?", 80, 25, 1, 15)
    story.showPlayerChoices("Sala de Estar", "Garagem", "Quarto (onde acordou)")
    if (story.getLastAnswer() == "Sala de Estar") {
        if (!(temChaveAzul)) {
            temChaveAzul = true
            story.printText("Você procura debaixo do sofá e... encontra uma chave azul! Você a guarda.", 80, 140, 1, 15)
        } else {
            story.printText("Você já procurou aqui. Não há mais nada na sala.", 80, 140, 1, 15)
        }
    } else if (story.getLastAnswer() == "Garagem") {
        if (!(temCorrente)) {
            temCorrente = true
            story.printText("Você vai até a garagem e encontra uma corrente grossa no chão. Você a pega.", 80, 140, 1, 15)
        } else {
            story.printText("Não há mais nada de útil na garagem.", 80, 140, 1, 15)
        }
    } else if (story.getLastAnswer() == "Quarto (onde acordou)") {
        if (!(temBolsaVermelha)) {
            temBolsaVermelha = true
            story.printText("Você volta ao quarto e acha uma pequena bolsa vermelha ao lado da cama. Você a pega.", 80, 140, 1, 15)
        } else {
            story.printText("Você não encontra mais nada no quarto.", 80, 140, 1, 15)
        }
    }
    // Chama a função novamente para continuar a exploração
    cenaExploracaoCasa()
}
// Evento: O que acontece quando o contador da fuga acaba
info.onCountdownEnd(function () {
    if (emFuga) {
        emFuga = false
        // Limpa os personagens da fuga
        sprites.destroyAllSpritesOfKind(SpriteKind.Player)
        sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
        sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
        story.printText("UFA! Você conseguiu despistá-lo e entrou na casa, trancando a porta!", 80, 140, 1, 15)
        cenaExploracaoCasa()
    }
})
function primeiraEscolha () {
    mySprite = sprites.create(img`
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffff3ffffffff3333fffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffff33333333333333333333333333333333333333333333333ffffffffffffffffff
        fffffffffffffffffffffffff33333333333333333333333333333333333333333333333333333333333ffffffffffffffff
        ffffffffffffffffffffffff333333333333333333333333333333333333333333333333333333333333ffffffffffffffff
        fffffffffffffffffffffff33333333333333333333333333333333333333333333333333333333333333fffffffffffffff
        ffffffffffffffffffffff333333333333333333333333333333333333333333333333333333333333333fffffffffffffff
        ffffffffffffffffffffff333333333333333333333333333333333333333333333333333333333333333fffffffffffffff
        ffffffffffffffffffffff333333333333333333333333333333333333333333333333333333333333333fffffffffffffff
        ffffffffffffffffffffff3333333333333333333333333333333333333333333333333333333333333333ffffffffffffff
        fffffffffffffffffffff33333333333333333333333333333333333333333333333333333333333333333ffffffffffffff
        fffffffffffffffffffff33333333333333333333333333333333333333333333333333333333333333333ffffffffffffff
        fffffffffffffffffffff33333333333333333333333333333333333333333333333333333333333333333ffffffffffffff
        fffffffffffffffffffff33333333333333333333333333333333333333333333333333333333333333333ffffffffffffff
        fffffffffffffffffffff33333333333333333333333333333333333333333333333333333333333333333ffffffffffffff
        fffffffffffffffffffff333333333333bb33333bbbb3333333333333333333333333333333333333333333fffffffffffff
        ffffffffffffffffffff333333333333bbbbbbbb3bbbb33333333333333333333333bbbbb33333333333333fffffffffffff
        ffffffffffffffffffff333333333333b333b333b3333bbb33333333333333333bbb33bbbbb333333333333fffffffffffff
        fffffffffffffffffffd333333333333b33333333333333b3333333333333bbbbbbbbbbbbbb333333333333fffffffffffff
        ffffffffffffffffffddd33333333333b33333333333333b3333333333333bb333bb3333333333333333333fffffffffffff
        ffffffffffffffffffddd333333333b3b33333333333333bbb33333333333bb333333333333333333333333fffffffffffff
        ffffffffffffffffffddd333333333b3b33333333333333bbb3333333333bbb333333333333333333333333fffffffffffff
        fffffffffffffffffdddd333333333bb3333333333333333bb3333333333b3b333333333333333333333333fffffffffffff
        fffffffffffffffffdddd333333333bb3333333333333333bb3333333333b3b333333333333333333333333fffffffffffff
        fffffffffffffffffdddd333333333bb3333333333333333bb3333333333bbb333333333333333333333333fffffffffffff
        fffffffffffffffffdddd333333333bb3333333333333333bb3333333333bbb333333333333333333333333fffffffffffff
        fffffffffffffffffdddd333333333bb3333333333333333bb3333333333bbb333333333333bb3333333333fffffffffffff
        ffffffffffffffffffddd333333333bb3333333333333333bb3333333333bbb333333333333b33333333333fffffffffffff
        ffffffffffffffffffddd333333333bb333333333333333bbb3333333333bbb333333333333b33333333333fffffffffffff
        ffffffffffffffffffddd333333333bb333333333333333bbb3333333333bbb333333333333bb3333333333fffffffffffff
        ffffffffffffffffffdd3333333333bb333333333333333bbb3333333333bb3333333333333bb3333333333fffffffffffff
        ffffffffffffffffffdd3333333333bb333333333333333bb33333cc3333bb3333333333333bb3333333333fffffffffffff
        ffffffffffffffffffff33333333333b333333333333333bb333cccc3333bb3333333333333bb3333333333fffffffffffff
        ffffffffffffffffffff3333333333bb333333333333333bb333c1ddc333bb3333333333333bb3333333333fffffffffffff
        ffffffffffffffffffff3333333333bb333333333333333bb333c11dc333bb3333333333333bb3333333333fffffffffffff
        ffffffffffffffffffff333333333333333333333333333bb333cdddc333bb3333333333333bb3333333333fffffffffffff
        ffffffffffffffffffff333333333333333333333333333bb333cc1dc333bb3333333333333b33333333333fffffffffffff
        fffffffffffffffffff3333333333333333333333333333bb3333ccc3333bb3333333333333b33333333333fffffffffffff
        fffffffffffffffffff33333333333333333333333333333b33333333333bb3333333333333b33333333333fffffffffffff
        fffffffffffffffffff33333333333333333333333333333b33333333333bb3333333333333b33333333333fffffffffffff
        fffffffffffffffffff33333333333333333333333333333b33333333333bb3333333333333b33333333333fffffffffffff
        fffffffffffffffffff3333333333333333333333333333bb33333333333bb3333333333333b33333333333fffffffffffff
        fffffffffffffffffff33333333333b3333333333333333bb33333333333bb3333333333333b33333333333fffffffffffff
        fffffffffffffffffff33333333333b3333333333333333bb33333333333bb3333333333333b33333333333fffffffffffff
        fffffffffffffffffff33333333333bb333333333333333b333333333333b33333333333333b33333333333fffffffffffff
        ffffffffffffffffff3f3333333333bb333333333333333b333333333333b33333333333333b33333333333fffffffffffff
        ffffffffffffffffff3f3333333333b3333333333333333bb33333333333b33333333333333b33333333333fffffffffffff
        ffffffffffffffffff3f3333333333bb333333333333333bb3333333333bb33333333333333b33333333333fffffffffffff
        fffffffffffffffff3333333333333bb333333333333333bb3333333333bb3333333333333b333333333333fffffffffffff
        fffffffffffffffff3333333333333bb333333333333333bb3333333333bb33333333333333333333333333fffffffffffff
        ffffffffffffffffff33333333333bbb333333333333333bb3333333333bb3333333333333b333333333333fffffffffffff
        ffffffffffffffffff33333333333bbb3333333333333333b3333333333bb3333333333333b333333333333fffffffffffff
        ffffffffffffffffff33333333333bbb3333333333333333b3333333333bb33333333333333333333333333fffffffffffff
        ffffffffffffffffff33333333333b3b3333333333333333b333333333bb333333333333333333333333333fffffffffffff
        ffffffffffffffffff33333333333bbb3333333333333333b333333333bb333333333333333333333333333fffffffffffff
        fffffffffffffffffff3333333333bbbb333333333333333b333333333bb33333333333333b333333333333fffffffffffff
        fffffffffffffffffff33333333333bbbbb3bb33333333333333333333bb3333333333333bb333333333333fffffffffffff
        fffffffffffffffffff33333333333bbbbbbbbb3333333333333333333b33333333333bbb33333333333333fffffffffffff
        fffffffffffffffffff3333333333333bbbbbbbb33333333333333333333333bbbbbbbbbbbb3333dddd3333fffffffffffff
        fffffffffffffffffff33333333333333333333333333333333333333333333bbbbbb3333333dd111dd3333fffffffffffff
        fffffffffffffffffff333333333333333333333333333333333333333333333333333333333d11ddddd333fffffffffffff
        fffffffffffffffffff333333333333333333333333333333333333333333333333333333333d1dddddd333fffffffffffff
        fffffffffffffffffff333333333333333333333333333333333333333333333333333333333dddddddd333fffffffffffff
        fffffffffffffffffff3333333333333333333333333333333333333333333333333333333333ddd111d333fffffffffffff
        fffffffffffffffffff33333333333333333333333333333333333333333333333333333333333dd11d3333fffffffffffff
        fffffffffffffffffff333333333333333333333333333333333333333333333333333333333333ddd33333fffffffffffff
        ffffffffffffffffff333333333333333333333333bbbb3333333333333333333333bbbb333333333333333fffffffffffff
        ffffffffffffffffff33333333333333bbbbbbbbbbbbbbbb3333333333333333333bbbbbbbb33333333333ffffffffffffff
        fffffffffffffffffd3333333333333bbbbbbb3333333b333333333333333333333333333bbbb333333333ffffffffffffff
        fffffffffffffffffdd33333333333333333333333333b333333333333b333333333333333b33b33333333ffffffffffffff
        fffffffffffffffffdd33333333333333333333333333b333333333333b333333333333333bb3333333333ffffffffffffff
        fffffffffffffffffdd3333333333333333333333333bbb33333333333b333333333333333bb3333333333ffffffffffffff
        ffffffffffffffffddd3333333333333333333333333bbb33333333333b333333333333333bb3333333333ffffffffffffff
        ffffffffffffffffdddd333333333333333333333333bbb3333333333bb333333333333333bb3333333333ffffffffffffff
        ffffffffffffffffdddd3333333333333333333333333bb3333333333bb333333333333333bb3333333333ffffffffffffff
        ffffffffffffffffdddd3333333333b33333333333333bb3333333333bb333333333333333bb3333333333ffffffffffffff
        ffffffffffffffffdddd3333333333b33333333333333bb3333333333bb333333333333333bb3333333333ffffffffffffff
        ffffffffffffffffdddd3333333333b33333333333333bb3333333333bb333333333333333bb3333333333ffffffffffffff
        fffffffffffffffffdd33333333333b33333333333333b33333333333bb333333333333333bb3333333333ffffffffffffff
        fffffffffffffffffdd33333333333b33333333333333b33333333333bb333333333333333b33333333333ffffffffffffff
        `, SpriteKind.Player)
    story.showPlayerChoices("Ficar na casa e explorar.", "Ir para a floresta.")
    if (story.getLastAnswer() == "Ir para a floresta.") {
        story.printText("Você respira fundo e decide se aventurar na floresta sombria.", 80, 140, 1, 15)
        mySprite2 = sprites.create(assets.image`myImage0`, SpriteKind.Player)
        cenaFloresta()
    } else {
        // Caminho alternativo: Ficar na casa
        story.printText("Você decide que é mais seguro investigar a casa primeiro.", 80, 140, 1, 15)
        mySprite3 = sprites.create(assets.image`myImage`, SpriteKind.Player)
        cenaExploracaoCasa()
    }
}
// Evento: O que acontece quando Lili (Player) toca um obstáculo
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    if (emFuga) {
        // Perde uma vida
        info.changeLifeBy(-1)
        // Destrói o obstáculo
        otherSprite.destroy(effects.fire, 100)
        // Treme a tela
        scene.cameraShake(4, 200)
    }
})
// Função para terminar o jogo
function gameOver (motivo: string) {
    story.clearAllText()
    game.over(false, effects.dissolve)
    game.splash("GAME OVER", motivo)
}
// ----------- FUNÇÕES DE JOGABILIDADE E SISTEMA -----------
function cenaFuga () {
    emFuga = true
    // Limpa a caixa de diálogo da história
    story.clearAllText()
    // Configura a cena
    // Cor de fundo escura
    scene.setBackgroundColor(3)
    // Carrega o mapa da floresta
    tiles.setTilemap(tilemap`level1`)
    // Define 3 vidas para a cena de fuga
    info.setLife(3)
    // Cria a personagem Lili
    lili = sprites.create(assets.image`Lili`, SpriteKind.Player)
    lili.setPosition(16, 80)
    lili.setStayInScreen(true)
    // Permite que o jogador controle a Lili
    controller.moveSprite(lili, 100, 100)
    scene.cameraFollowSprite(lili)
    // Cria a criatura que persegue
    criatura = sprites.create(assets.image`Criatura`, SpriteKind.Enemy)
    criatura.setPosition(0, 80)
    // Persegue Lili com velocidade 40
    criatura.follow(lili, 40)
    // Começa um contador de 15 segundos para a fuga
    info.startCountdown(15)
}
// ----------- FUNÇÕES DE CENA E HISTÓRIA -----------
function cenaQuarto () {
    lili = sprites.create(assets.image`LiLi1`, SpriteKind.Player)
    story.printText("Você é Lili. Você acorda em uma cama, em um quarto estranho. Árvores pressionam a casa por todos os lados.", 80, 140, 1, 15, story.TextSpeed.VerySlow)
    story.printText("Você se levanta, vai até a janela e vê uma floresta escura e sombria.", 80, 140, 1, 15)
    story.printText("Lili: 'Onde que eu to!?'", 80, 140, 1, 15)
    story.printText("Confusa, você vai até a porta do quarto e a abre, revelando um corredor. Você desce as escadas e encontra uma porta rosa que leva para fora.", 80, 140, 1, 15)
    primeiraEscolha()
}
function cenaFinal () {
    story.printText("Na garagem, você encontra uma pequena porta de serviço.", 80, 140, 1, 15)
    story.printText("Você a abre e, em vez da floresta, vê um campo aberto e tranquilo.", 80, 140, 1, 15)
    story.printText("Você atravessa a porta e caminha até um vilarejo silencioso à distância.", 80, 140, 1, 15)
    story.printText("Lili: 'OLÁ? TEM ALGUÉM AQUI?!'", 80, 140, 1, 15)
    story.printText("Seu grito ecoa sem resposta. Sua jornada pela sobrevivência neste mundo estranho apenas começou...", 80, 140, 1, 15)
    game.over(true, effects.confetti)
}
// Evento: O que acontece quando Lili (Player) e a Criatura (Enemy) se tocam
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (emFuga) {
        emFuga = false
        gameOver("A criatura te alcançou...")
    }
})
let obstaculo: Sprite = null
let criatura: Sprite = null
let lili: Sprite = null
let mySprite3: Sprite = null
let mySprite2: Sprite = null
let mySprite: Sprite = null
let emFuga = false
let temBolsaVermelha = false
let temCorrente = false
let temChaveAzul = false
let mySprite4 = sprites.create(assets.image`Quarto`, SpriteKind.Player)
// ----------- CÓDIGO QUE RODA NO INÍCIO -----------
// Esta é a linha corrigida. O jogo começa chamando a primeira cena diretamente.
cenaQuarto()
// Evento: A cada meio segundo, cria um novo obstáculo na cena de fuga
game.onUpdateInterval(500, function () {
    if (emFuga) {
        obstaculo = sprites.createProjectileFromSide(assets.image`Obstaculo`, -70, 0)
        // Aparece em uma altura aleatória
        obstaculo.y = randint(10, 110)
        obstaculo.setKind(SpriteKind.Projectile)
    }
})
