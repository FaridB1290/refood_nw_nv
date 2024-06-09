import { SortOrder } from "../../util/SortOrder";

export type NotificationOrderByInput = {
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  recipient?: SortOrder;
  sentAt?: SortOrder;
  status?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
};
