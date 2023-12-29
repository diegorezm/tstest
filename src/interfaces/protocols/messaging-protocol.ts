import { message } from "../message";
export interface MessagingProtocol{
  sendMessage(message: string, status?: number): message
}
