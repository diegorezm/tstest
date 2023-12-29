import { CartItem } from "../cart-item";
export interface ShoppingCartProtocol{
  addItem(item: CartItem): void,

  removeItem(index: number):void,

  total(): number,

  totalWithDiscount(discount: number):number,

  clear():void,

  isEmpty(): boolean,

  toString(): void
}
