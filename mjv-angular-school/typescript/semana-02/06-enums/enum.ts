enum TipoPessoa {
    Aluno = "Aluno", 
    Professor = "Professor",
}

const tipoAluno = TipoPessoa.Aluno;

const tipoProfessor = TipoPessoa.Professor;

interface PessoaDevSchool {
    tipo: TipoPessoa;
}

const pessoaDevSchool: PessoaDevSchool = {
    tipo: TipoPessoa.Professor
}

console.log(pessoaDevSchool.tipo);
