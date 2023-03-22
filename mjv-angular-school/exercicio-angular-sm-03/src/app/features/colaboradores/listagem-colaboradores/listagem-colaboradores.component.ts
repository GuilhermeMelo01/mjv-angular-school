import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listagem-colaboradores',
  templateUrl: './listagem-colaboradores.component.html',
  styleUrls: ['./listagem-colaboradores.component.scss']
})
export class ListagemColaboradoresComponent implements OnInit{

  titulo:string = "COLABORADORES";

  colaborador = {
    id: 1,
    nome: "Guilherme",
    salario: 4500.00,
    cargo: "Desenvolvedor"
  }

  ngOnInit(): void {
  }

}
