import { OrderStatus } from '../interfaces/order-status';
import { CustomerOrder } from '../interfaces/protocols/customer-protocol';
import { ShoppingCartProtocol } from '../interfaces/protocols/shoppingcart-protocol';
import { MessagingProtocol } from '../interfaces/protocols/messaging-protocol';
import { PersistencyProtocol } from '../interfaces/protocols/persistency-protocol';

export class Order {
  private ordersStatus: OrderStatus = "open";
  constructor(
    private readonly cart: ShoppingCartProtocol,
    private readonly message: MessagingProtocol,
    private readonly persist: PersistencyProtocol,
    private readonly customer: CustomerOrder
  ) { }

  getOrderStatus(): OrderStatus {
    return this.ordersStatus;
  }

  checkout() {
    if (!this.cart.isEmpty) {
      console.log("Your shopping cart is empty!");
      return;
    }
    this.ordersStatus = "closed";
    console.log(this.message.sendMessage("Your order has been placed!"));
    this.persist.saveOrder();
    this.cart.clear();
    console.log(`Customer: \n name ${this.customer.getName()} \n id: ${this.customer.getIDN()}`);
  }

}
