class UserDevSchool {

    constructor(public id:string, public name:string){
    }

    getToUpperCaseName(){
        return this.name.toUpperCase();
    }
}

interface TemMateria {
    materias: string[];
}

class Professor extends UserDevSchool implements TemMateria {
    materias: string[];

    constructor(id:string, name:string, materias:string[]){
        super(id, name);
        this.materias = materias;
    }
}

const professor = new Professor("123", "Alan", ['Java','Angular']);

function test(user: Professor){
    
}