/* Vamos gerar o nosso primeiro Hello world com js */

/* Optei por usar uma variavel, por já se ter uma noção da linguagem*/
var descricao = 'Hello World, este é meu primeiro JavaScript'
/* 
 * Comando abaixo recupera a div com o id='description-initial'  
 * e alterar o valor dentro da div para o texto da variavel descricao 
 */
document.getElementById('description-initial').textContent = descricao;
