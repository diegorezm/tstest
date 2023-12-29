import { message } from "../interfaces/message";
import { MessagingProtocol } from "../interfaces/protocols/messaging-protocol";
export class Messaging implements MessagingProtocol {
  sendMessage(message: string, status: number = 200): message {
    return {
      status,
      message
    };
  }
}
