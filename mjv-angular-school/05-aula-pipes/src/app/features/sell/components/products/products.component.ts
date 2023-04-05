import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  titulo = "Tela de produtos!";

  telefone = "11991085421";

  dataHoje = new Date();

  produto = {
    descricao: "Playstation 5",
    preco: 4500,
    quantidade: 1,
    img: "https://gmedia.playstation.com/is/image/SIEPDC/ps5-product-thumbnail-01-en-14sep21"
  }

  constructor() { }

  ngOnInit(): void {
  }


  precoComDesconto(preco: number): number {
    return preco * 0.90;
  }

  obterPrecoDesconto(){
    this.produto.preco = this.produto.preco * 0.90;
  }

  comprar(){
    alert("Produto comprado com sucesso!")
  }

  clicouTag(){
    alert("Você clicou em uma tag!")
  }

  PassouMouse(){
    alert("Você o mouse em cima de uma tag!")
  }

  pressionouTecla(event: any){
      console.log(event.target.value);
  }

}
