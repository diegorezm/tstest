import { Discount } from "./Discount";

describe('Discount', () => {
  afterEach(() => jest.clearAllMocks());
  it("Should return number discount", () => {
    const sut = new Discount();
    expect(sut.calculate(10,0.5)).toBe(5);
  });
});
