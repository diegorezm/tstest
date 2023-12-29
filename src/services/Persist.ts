import { PersistencyProtocol } from "../interfaces/protocols/persistency-protocol";

export class Persist implements PersistencyProtocol{
  saveOrder() {
    console.log("Order stored.");
  }
}
