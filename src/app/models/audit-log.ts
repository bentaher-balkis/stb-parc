export interface AuditLog {
  id: string;

  action: string;
  entity: string;

  userId: string;

  date: Date;
}