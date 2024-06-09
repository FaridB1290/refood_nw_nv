import { Notification as TNotification } from "../api/notification/Notification";

export const NOTIFICATION_TITLE_FIELD = "recipient";

export const NotificationTitle = (record: TNotification): string => {
  return record.recipient?.toString() || String(record.id);
};
