import { IndividualCustomer, EnterpriseCustomer, CustomerOrder } from "../interfaces/protocols/customer-protocol";

export class CustomerProtocol implements IndividualCustomer, CustomerOrder{
  constructor(
    public firstName: string,
    public lastName: string,
    public cpf: string,
  ) {}
  getName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
  getIDN(): string {
    return `${this.cpf}`;
    
  }
}

export class EnterpriseProtocol implements EnterpriseCustomer , CustomerOrder{
  constructor(
    public name: string,
    public cnpj: string
  ) {}

  getName(): string {
    return this.name;
  }

  getIDN(): string {
    return this.cnpj;
  }

}
