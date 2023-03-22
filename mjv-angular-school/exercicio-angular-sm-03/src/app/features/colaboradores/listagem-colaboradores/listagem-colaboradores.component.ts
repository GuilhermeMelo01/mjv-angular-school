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

  colaboradores = [
    {
      id: 1,
      nome: "Guilherme",
      salario: 4500.00,
      cargo: "Desenvolvedor"
    },
    {
      id: 2,
      nome: "Maria",
      salario: 3000.00,
      cargo: "Design"
    },
    {
      id: 3,
      nome: "Angelo",
      salario: 10000.00,
      cargo: "Arquiteto"
    },
    {
      id: 4,
      nome: "Carla",
      salario: 2000.00,
      cargo: "Psicologa"
    },
    {
      id: 5,
      nome: "Gaules",
      salario: 12000.00,
      cargo: "Streamer"
    }
  ]

  ngOnInit(): void {
  }

}
