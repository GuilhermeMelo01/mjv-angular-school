// Exercicio 1: Crie um tipo para representar um objeto que contenha as suas informações de nome, profissão, idade e uma lista de assuntos de seu interesse.
class Myself {
    constructor(public nome:string, public profissao:string, public idade:number, public interesses:string[]){
    }
}

//Exercicio 2: Crie um objeto utilizando o tipo criado no exercicio 1 e o popule de acordo com suas informações.
const guilherme = new Myself("Guilherme", "Desenvolvedor Java", 21, ["Programação", "CS:GO", "Animes"]);

//Exercicio 3: Faça um função que receba como argumento um objeto do tipo do exercicio 1, e retorne somente a lista de assuntos do objeto.
//Exercicio 4: Coloque tipagem tanto no argumento da função do exercicio 3 quanto o tipo de retorno dela.
function getInteresses(user:Myself): string[]{
    return user.interesses;
}

//Exercicio 5: Crie um enum para representar as Matérias do curso (Angular, Typescript, Git)
enum Materias {
    angular = "Angular",
    typescript = "Typescript",
    git = "Git"
}

//Exercicio 6: Crie mais um tipo para respresentar os professores, contendo nome e uma lista das materias de cada um.
class Professor{    
    constructor(public nome:string, public materias:Materias[]){
    }
}

//Exercicio 7: Crie os objetos Alan e Nathan utilizando os tipos dos exercicicios 5 e 6.
const nathan = new Professor("Nathan", [Materias.angular, Materias.git])
const alan = new Professor("Alan", [Materias.angular, Materias.typescript, Materias.git]);

//Exercicio 8: Declare e popule um array com os objetos do exercicio 7.
const professores: Array<Professor> = [nathan, alan];

//Exercicio 9: Faça uma função que receba um argumento de array de Professor e retorne um novo array de strings contendo somente os nomes dos professores.
function getNomeProfessores(profs:Professor[]): string[]{
    let tempProfsNome: string[] = [];

    if(profs !== null){        
        profs.map(prof => prof.nome);
    }
    return tempProfsNome;
}
console.log(getNomeProfessores([nathan, alan]));

//Exercicio 10: Faça uma função que receba um argumento de array de Professores e retorne um array de matérias.
function getMateriasProfessores(profs: Professor[]): Materias[]{
    let materias: Materias[] = [];
    
    if(profs !== null){
        materias = profs.flatMap(prof => prof.materias);   
    }

    return materias;
}
console.log(getMateriasProfessores([nathan, alan]));


//Exercicio 11: Faça uma função que receba um argumento de array de Professores e retorne o primeiro Professor encotrado que dê aula de Typesrcipt
function getProfessorTypescript(profs:Professor[]): Professor{
    return profs.find(prof => prof.materias.includes(Materias.typescript))!;
}
console.log(getProfessorTypescript([nathan, alan]));
