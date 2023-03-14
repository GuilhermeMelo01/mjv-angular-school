var TipoPessoa;
(function (TipoPessoa) {
    TipoPessoa["Aluno"] = "Aluno";
    TipoPessoa["Professor"] = "Professor";
})(TipoPessoa || (TipoPessoa = {}));
var tipoAluno = TipoPessoa.Aluno;
var tipoProfessor = TipoPessoa.Professor;
var pessoaDevSchool = {
    tipo: TipoPessoa.Professor
};
console.log(pessoaDevSchool.tipo);
