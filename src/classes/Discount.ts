export class Discount {
  calculate(value: number,discount: number): number {
    return value - (value * discount);
  }
}
