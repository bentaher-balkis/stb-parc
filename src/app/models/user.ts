import { Role } from "./role";
import { TPE } from "./tpe";

export interface User {
  id: string;

  username: string;
  email: string;
  passwordHash: string;

  roleId: string;
  role?: Role;

  assignedTPEs?: TPE[];
}
