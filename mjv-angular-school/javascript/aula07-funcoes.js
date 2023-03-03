function dobro(a){
    return a * 2;
}

const soma = function(a, b){
    return a + b; 
}

const metade = (c) => {
    return c / 2;
}

function recFun(a){
    return a();
}

function retornaFun(){
    return () => 10;
}

console.log(recFun(retornaFun()));