import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-routeteste',
  templateUrl: './routeteste.component.html',
  styleUrls: ['./routeteste.component.scss']
})
export class RoutetesteComponent implements OnInit {
  productPrice: number = 500;
  produtos = ["Fancy Product", "Special Product", "Best Product", "Sale Item", "Last Product", "Popular Product"];
  produtosArray: { name: string; preco: number; }[] | undefined;


  constructor() { }

  ngOnInit(): void {
    this.produtosArray = new Array<{ name:string, preco:number }>();
    this.produtosArray.push({name: "Fancy Product", preco: 500});
    this.produtosArray.push({ name: "Special Product", preco: 600 });
    this.produtosArray.push({ name: "Best Product", preco: 700 });
    this.produtosArray.push({ name: "Sale Item", preco: 800 });
    this.produtosArray.push({ name: "Last Product", preco: 900 });
    this.produtosArray.push({ name: "Popular Product", preco: 1000 });
  }

  getProductPrice(): number {
     return this.productPrice;
  }
}
