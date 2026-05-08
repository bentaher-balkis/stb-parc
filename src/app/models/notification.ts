import { User } from "./user";
export interface Notification {
  id: string;      
  message: string;
  userId: string;
  user?: User;       
  isRead: boolean;
  createdAt: Date;
}
