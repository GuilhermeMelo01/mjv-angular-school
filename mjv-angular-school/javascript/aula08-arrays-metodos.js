const numeros = [1, 2, 3, 4];

//Alterar valores do array
const dobro = numeros.map((x) => x * 2);
console.log(dobro);

//Filtro array
const itensPares = numeros.filter((x) => x % 2 === 0);
console.log(itensPares)

//buscar o primeiro item
const primeiroEcontrado = numeros.find((x) => x === 3);
console.log(primeiroEcontrado)

//Busca o primeiro item e retornar o index
const primeiroEcontradoIndex = numeros.findIndex((x) => x === 3);
console.log(primeiroEcontradoIndex)


//Verificar se todos os itens conferem com determinada condição.
const todosPares = numeros.every((x) => x % 2 === 0);
console.log(todosPares)

const todosPositivos = numeros.every((x) => x >= 0);
console.log(todosPositivos)


//Verificar se pelo menos um item do array confere com a condição
const peloMenosUmItemImpar = numeros.some((x) => x % 2 != 0);
console.log(peloMenosUmItemImpar)

//Se precisamos passar uma determinada logica para cada item do array utilizamos forEach
numeros.forEach((x) => console.log(x))

//Reduce - metodo mais generico para nós customizar nossa logica 
const somaValores = numeros.reduce((acumulador, item) => acumulador + item, 0)
console.log(somaValores)