import { TPE } from "./tpe";

export interface Transaction {
  id: string;

  tpeId: string;
  tpe?: TPE;

  amount: number;

  date: Date;
}
