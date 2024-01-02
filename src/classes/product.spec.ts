import { Product } from "./Product";

const createSut = (name: string, price: number): Product => {
  return new Product(name, price);
};
describe('Product', () => {
  afterEach(() => jest.clearAllMocks());
  it("Should have property name", () => {
    const sut = createSut("tshirt", 40);
    expect(sut).toHaveProperty('name');
    expect(sut).toHaveProperty('price');
  });
});
