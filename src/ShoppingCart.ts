import { Discount } from './classes/Discount';
import { CartItem } from './interfaces/cart-item';
import { ShoppingCartProtocol } from './interfaces/protocols/shoppingcart-protocol';

export class ShoppingCart  implements ShoppingCartProtocol{
  private readonly _items: CartItem[] = [];
  constructor(private readonly discount: Discount){}

  addItem(item: CartItem) {
    this._items.push(item);
  }

  removeItem(index: number) {
    this._items.splice(index, 1);
  }

  total(): number {
    return +this._items.reduce((sum, item) => sum + item.price, 0).toFixed(2);
  }

  totalWithDiscount(discount: number){
    return this.discount.calculate(this.total(),discount);
  }
  
  get items(){
    return this._items;
  }

  clear() {
    this._items.length = 0;
  }

  isEmpty(): boolean {
    return this._items.length  === 0;
  }

  toString(){
    this._items.forEach((item) => {
      console.log(item);
    });
  }

}
