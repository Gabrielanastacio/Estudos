// Atribui as img da lampada acessa e apagada a suas variaveis
var lampadaAcessa =  'https://www.w3schools.com/js/pic_bulbon.gif';
var lampadaApagada = 'https://www.w3schools.com/js/pic_bulboff.gif';
// Cria a tag img já com o evento de click para ligar e desligar a lampada e define o src com template string 
div.innerHTML = `<img id="img" onclick="ligaDesliga(this.id)" src="${lampadaApagada}">`
//função para ligar e desligar a lampada
function ligaDesliga(id) {    
    // define a tag img para a variavel img
    var img = document.getElementById('img');
    // valida o atribuito src da img na hora do click
    if(img.src == lampadaApagada){
        // Se for verdade ela acende
        img.src = `${lampadaAcessa}`;
    }else{
        // se for falso ela apaga
        img.src = `${lampadaApagada}`;
    }
}