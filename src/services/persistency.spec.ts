import { Persist } from './Persist';

describe('Persistency', () => {
  afterEach(() => jest.clearAllMocks());
  it("Should return void", () => {
    const sut = new Persist();
    expect(sut.saveOrder()).toBeUndefined();
  });

  it('Should call console.log once', () => {
    const sut = new Persist();
    const consoleSpy = jest.spyOn(console, "log");
    sut.saveOrder();
    expect(consoleSpy).toHaveBeenCalledTimes(1);

  });
});
