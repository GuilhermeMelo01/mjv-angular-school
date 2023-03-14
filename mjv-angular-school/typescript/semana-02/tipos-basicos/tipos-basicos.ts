let str: string = "abc";

let num: number = 10;

let bool: boolean = true;

let nul: null;

let unde: undefined;

let sym: symbol;

let bigint: bigint;

//Especiais
let any: any; //Usada para desabilitar a checkagem de tipos

let unknown: unknown; //Deixa atribuir qualquer tipo a variavel, mas força o desenvolvedor a verificar o tipo antes de usar

if(unknown === true){
    unknown
}

let never: never; //Geralmente indica algum erro, uma situação que não deveria acontecer

let object: object; //Representa qualquer valor que não é primitivo

function noReturn(): void { //void -> ausensia de um valor 

}