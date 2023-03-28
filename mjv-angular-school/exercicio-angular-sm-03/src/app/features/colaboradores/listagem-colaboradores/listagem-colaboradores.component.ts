import { Component, OnInit } from '@angular/core';
import { Colaborador } from '../models/colaborador-model';

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

  colaboradores: Array<Colaborador> = [
    {
      id: 1,
      nome: "Guilherme",
      salario: 4500.00,
      cargo: "Desenvolvedor",
      ativo: false
    },
    {
      id: 2,
      nome: "Maria",
      salario: 3000.00,
      cargo: "Design",
      ativo: true
    },
    {
      id: 3,
      nome: "Angelo",
      salario: 10000.00,
      cargo: "Arquiteto",
      ativo: false
    },
    {
      id: 4,
      nome: "Carla",
      salario: 2000.00,
      cargo: "Psicologa",
      ativo: true
    },
    {
      id: 5,
      nome: "Gaules",
      salario: 12000.00,
      cargo: "Streamer",
      ativo: true
    },
    {
      id: 6,
      nome: "Natalia",
      salario: 6000.00,
      cargo: "QA",
      ativo: false
    },
    {
      id: 7,
      nome: "Matheus",
      salario: 2000.00,
      cargo: "Garçom",
      ativo: true
    },
    {
      id: 8,
      nome: "Nathan",
      salario: 12000.00,
      cargo: "Desenvolvedor Angular",
      ativo: true
    },
  ]

  ngOnInit(): void {
  }

  getColaboradorSalarioComDesconto(salario:number): number{
    if(salario >= 4000){
      let desconto = salario * 0.15;
      return salario - desconto;
    }else{
      let aumento = salario * 0.10;
      return salario + aumento;
    }
  }
}
