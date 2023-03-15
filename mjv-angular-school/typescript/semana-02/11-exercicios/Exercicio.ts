// Exercicio 1:
class Myself {
    constructor(public nome:string, public profissao:string, public idade:number, public interesses:string[]){
    }
}

//Exercicio 2:
const guilherme = new Myself("Guilherme", "Desenvolvedor Java", 21, ["Programação", "CS:GO", "Animes"]);

//Exercicio 3 e 4:
function getInteresses(user:Myself): string[]{
    return user.interesses;
}

//Exercicio 5:
enum Materias {
    angular = "Angular",
    typescript = "Typescript",
    git = "Git"
}

//Exercicio 6:
class Professor{    
    constructor(public nome:string, public materias:Materias[]){
    }
}

//Exercicio 7:
const nathan = new Professor("Nathan", [Materias.angular, Materias.git])
const alan = new Professor("Alan", [Materias.angular, Materias.typescript, Materias.git]);

//Exercicio 8:
const professores: Array<Professor> = [nathan, alan];

//Exercicio 9:
function getNomeProfessores(profs:Professor[]): string[]{
    let tempProfsNome: string[] = [];

    if(profs !== null){        
        profs.map(prof => prof.nome);
    }
    return tempProfsNome;
}
console.log(getNomeProfessores([nathan, alan]));

//Exercicio 10:
function getMateriasProfessores(profs: Professor[]): Materias[]{
    let materias: Materias[] = [];
    
    if(profs !== null){
        materias = profs.flatMap(prof => prof.materias);   
    }

    return materias;
}
console.log(getMateriasProfessores([nathan, alan]));


//Exercicio 11:
function getProfessorTypescript(profs:Professor[]): Professor{

    return profs.filter(prof => prof.materias.includes(Materias.typescript)).find(p => p.nome)!
}
console.log(getProfessorTypescript([nathan, alan]));
