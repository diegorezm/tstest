import { ShoppingCart } from "../ShoppingCart";
import { Messaging } from "../services/Messaging";
import { Persist } from "../services/Persist";
import { Discount } from "./Discount";
import { Order } from "./Order";

class CustomerMock{
  getName() {
    return '';
  }
  getIDN() {
    return '';
  }
}
const createSut = () => {
  const shoppingCart = new ShoppingCart(new Discount());
  const messaging = new Messaging();
  const persist = new Persist();
  const customer = new CustomerMock();
  const sut = new Order(shoppingCart,messaging,persist,customer);
  return {
    shoppingCart,
    messaging,
    customer,
    persist,
    sut
  };
};

describe("Order", () => {
  it("Should checkout if cart is not empty" ,() => {
    const {sut, shoppingCart}   = createSut();
    const shopSpy = jest.spyOn(shoppingCart, "isEmpty").mockReturnValueOnce(false);
    sut.checkout();
    expect(shopSpy).toHaveBeenCalledTimes(1);
    expect(sut.getOrderStatus()).toBe('closed');
  });

  it("Should not checkout if card is empty" ,() => {
    const {sut, shoppingCart}   = createSut();
    const shopSpy = jest.spyOn(shoppingCart, "isEmpty")
     .mockReturnValueOnce(true);
    sut.checkout();
    expect(shopSpy).toHaveBeenCalledTimes(1);
    expect(sut.getOrderStatus()).toBe('open');
  });


  it("Checking if message was sent if shoppingCart is empty" ,() => {
    const {sut, messaging}  = createSut();
    const msgSpy = jest.spyOn(messaging, "sendMessage");
    sut.checkout();
    expect(msgSpy).toHaveBeenCalledTimes(0);
  });

  it("Checking if message was sent if shoppingCart is not empty" ,() => {
    const {sut, messaging, shoppingCart}  = createSut();
    shoppingCart.addItem({name: "tshirt", price: 40});
    const msgSpy = jest.spyOn(messaging, "sendMessage");
    sut.checkout();
    expect(msgSpy).toHaveBeenCalledTimes(1);
  });


  it("Checking if saveOrder was called if cart is empty." ,() => {
    const {sut, persist}  = createSut();
    const persistSpy = jest.spyOn(persist, "saveOrder");
    sut.checkout();
    expect(persistSpy).toHaveBeenCalledTimes(0);
  });


  it("Checking if saveOrder was called if cart is not empty." ,() => {
    const {sut, persist, shoppingCart}  = createSut();
    shoppingCart.addItem({name: "tshirt", price: 40});
    const persistSpy = jest.spyOn(persist, "saveOrder");
    sut.checkout();
    expect(persistSpy).toHaveBeenCalledTimes(1);
  });

});
