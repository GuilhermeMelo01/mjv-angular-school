//for
for(let i=0; i < 5; i++){
    console.log(`For: ${i}`); 
}

//while
let j = 0;
while(j < 5){
    console.log(`While: ${j}`);
    j++;
}

//Do...While
let k = 0;
do{
    console.log(`Do..While: ${k}`);
    k++;
}while(k < 5);  


//Interaçao em um array
const listaParasIterar = [1,2,3];

for(let valorDaLista of listaParasIterar){
    console.log(`Item da Lista: ${valorDaLista}`);
}


//Interação em uma propriedade de objeto
const objetoParaIterar = {
    propriedade1: 1,
    propriedade2: 2,
    propriedade3: 3,
}

for(let prop in objetoParaIterar){
    console.log(`Valor da propriedade: ${prop}`)
    //acessar o valor do objeto
    const valorPropriedade = objetoParaIterar[prop];
}