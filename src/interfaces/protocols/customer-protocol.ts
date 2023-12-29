export interface CustomerOrder{
  getName(): string,
  getIDN(): string
}

export interface IndividualCustomer {
  firstName: string,
  lastName: string,
  cpf: string
}
export interface EnterpriseCustomer {
  name: string,
  cnpj: string
}
