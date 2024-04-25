//DECLARANDO AS VARIAVEIS
let p1=prompt("Digite seu nome");
let p2=prompt("Digite seu poder");
let p3=prompt("Digite o nome de um vilão");
let p4=prompt("Digite um LUGAR");
let msg =document.getElementById('msg');

msg.innerHTML= `olá ${p1}, o seu poder é ${p2} e você vai enfrentar o(a) ${p3} no/em ${p4}`