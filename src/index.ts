import { CustomerProtocol } from "./classes/Customers";
import { Discount } from "./classes/Discount";
import { Order } from "./classes/Order";
import { Product } from "./classes/Product";
import { Messaging } from "./services/Messaging";
import { Persist } from "./services/Persist";
import { ShoppingCart } from "./ShoppingCart";

const discount = new Discount();
const cart = new ShoppingCart(discount);
const messaging = new Messaging();
const persist = new Persist();
const customer = new CustomerProtocol("diego","rezende","111.111.111");
const order = new Order(cart, messaging, persist, customer);

console.log(order.getOrderStatus());
cart.addItem(new Product("pencil",10.99));
cart.addItem(new Product("car",6000));
cart.addItem(new Product("bicycle",99));
cart.addItem(new Product("pen",0.99));
console.log("ocp");
console.log(cart.totalWithDiscount(0.5));
cart.toString();
order.checkout();
console.log(order.getOrderStatus());
