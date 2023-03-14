"use strict";
let str = "abc";
let num = 10;
let bool = true;
let nul;
let unde;
let sym;
let bigint;
//Especiais
let any; //Usada para desabilitar a checkagem de tipos
let unknown; //Deixa atribuir qualquer tipo a variavel, mas força o desenvolvedor a verificar o tipo antes de usar
if (unknown === true) {
    unknown;
}
let never; //Geralmente indica algum erro, uma situação que não deveria acontecer
let object; //Representa qualquer valor que não é primitivo
function noReturn() {
}
