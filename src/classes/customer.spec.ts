import {
  CustomerProtocol,
  EnterpriseProtocol
} from './Customers';

describe('Customer', () => {
  afterEach(() => jest.clearAllMocks());
  it("Should have all keys", () => {
    const sut = new CustomerProtocol("diego", "rezende", "123123123123");
    expect(sut).toHaveProperty('firstName');
  });
});

describe('Enterprise', () => {
  afterEach(() => jest.clearAllMocks());
  it("Should have all keys", () => {
    const sut = new EnterpriseProtocol("macodonaldos", "222");
    expect(sut).toHaveProperty("cnpj");
  });
});
