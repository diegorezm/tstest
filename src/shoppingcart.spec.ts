import { ShoppingCart } from "./ShoppingCart";
import { Discount } from "./classes/Discount";
import { CartItem } from "./interfaces/cart-item";

const createSut = () => {
  class DiscountMock extends Discount { }
  const discoutMock = new DiscountMock();
  const sut = new ShoppingCart(discoutMock);
  return { sut, discoutMock };
};


const createSutWithItems = () => {
    const { sut , discoutMock} = createSut();
    const item1 = createCartItem("tshirt", 40);
    const item2 = createCartItem("pen", 2);
    sut.addItem(item1);
    sut.addItem(item2);
    return { sut , discoutMock};
};

const createCartItem = (name: string, price: number) => {
  class CartMock implements CartItem {
    constructor(public name: string, public price: number){}
  }
  return new CartMock(name, price);
};


describe("ShoppingCart", () => {
  it("Should be empty cart when no product added", () => {
    const { sut } = createSut();
    expect(sut.isEmpty()).toBeTruthy();
  });

  it("should have 2 cart items.", () => {
    const { sut } = createSutWithItems();
    expect(sut.items.length).toBe(2);
  });

  it("should test total.", () => {
    const { sut } = createSutWithItems();
    expect(sut.total()).toBe(42);
    expect(sut.totalWithDiscount(0.5)).toBe(21);
  });

  it("should test clear function.", () => {
    const { sut } = createSutWithItems();
    sut.clear();
    expect(sut.items.length).toBe(0);
    expect(sut.isEmpty()).toBeTruthy();
  });

  it("should test remove item.", () => {
    const { sut } = createSutWithItems();
    sut.removeItem(0);
    expect(sut.items.length).toBe(1);
    expect(sut.isEmpty()).toBeFalsy();
  });
});
