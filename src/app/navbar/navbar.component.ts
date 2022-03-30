import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  permitionButton = false;
  text = "Cart";
  email = "";
  cartMaintenance = false;
  constructor() {

  }

  ngOnInit(): void {
    setTimeout(() => {
          this.permitionButton = true;
        }, 2000);

  }

  onButtonEvent(cart?: boolean) {
    this.text = "Carrinho";
    cart = this.cartMaintenance;
    //this.cartMaintenance = true;
    if (cart == false) {
      this.cartMaintenance = true;
    } else {
      this.cartMaintenance = false;
    }

    }


  onInputEmail(event: Event) {
    this.email = (<HTMLInputElement>event.target).value;
    console.log(event);
  }

  getColor() {
    return this.cartMaintenance ? 'green' : 'red';
  }

  }



