import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  // name = 'John Doe';
  addToCart: number = 0;
  product = {
    name: 'iPhone',
    price: 1000,
    color: 'red',
    discount: 8.5,
    inStock: 5,
    pImage: '../assets/iphone.png',
  };
  getDiscountedPrice() {
    return (
      this.product.price - (this.product.price * this.product.discount) / 100
    );
  }
  onNameChange(event: any) {
    // this.name = event.target.value;
  }
  add() {
    if (this.addToCart < this.product.inStock) this.addToCart++;
  }
  subtract() {
    if (this.addToCart > 0) this.addToCart--;
  }
}
