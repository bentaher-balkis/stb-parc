import { TPEStatus } from "./tpe-status";
import { Transaction } from "./transaction";
import { User } from "./user";

export interface TPE {
  id: string;

  serialNumber: string;
  model: string;

  status: TPEStatus;

  assignedToId?: string;
  assignedTo?: User;

  transactions?: Transaction[];
}
