import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  titulo = "Tela de produtos!"

  exibirProduto = true;

  produto = {
    descricao: "Playstation 5",
    preco: 4500,
    quantidade: 1,
    image: "https://gmedia.playstation.com/is/image/SIEPDC/ps5-product-thumbnail-01-en-14sep21"
  }

  produtos: Array<Product> = [
    {
      descricao: "Playstation 5",
      preco: 4500,
      quantidade: 1,
      image: "https://gmedia.playstation.com/is/image/SIEPDC/ps5-product-thumbnail-01-en-14sep21",
      disponivel: true
    },
    {
      descricao: "Playstation 4",
      preco: 2900,
      quantidade: 2,
      image: "https://i.zst.com.br/thumbs/12/3c/14/57389943.jpg",
      disponivel: true
    },
    {
      descricao: "Playstation 5 1TB",
      preco: 4800,
      quantidade: 0,
      image: "https://gmedia.playstation.com/is/image/SIEPDC/ps5-product-thumbnail-01-en-14sep21",
      disponivel: false
    },
    {
      descricao: "Playstation 5 1TB",
      preco: 3100,
      quantidade: 1,
      image: "https://gmedia.playstation.com/is/image/SIEPDC/ps5-product-thumbnail-01-en-14sep21",
      disponivel: true
    },
  ]

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

  exibirProdutoSimNao(){
    this.exibirProduto = !this.exibirProduto;
  }

}
