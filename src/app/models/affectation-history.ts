import { TPE } from "./tpe";
import { User } from "./user";

export interface AffectationHistory {
  id: string;

  tpeId: string;
  tpe?: TPE;  

  userId: string;
  user?: User; 

  startDate: Date;
  endDate?: Date | null;
}