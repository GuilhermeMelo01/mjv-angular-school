export interface Professor{
    name: string,
    age: string
}

type ProfessorPropreties = keyof Professor;

const professorPropreties: ProfessorPropreties = 'name';
