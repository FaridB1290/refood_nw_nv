export type Notification = {
  content: string | null;
  createdAt: Date;
  id: string;
  recipient: string | null;
  sentAt: Date | null;
  status: string | null;
  typeField: string | null;
  updatedAt: Date;
};
