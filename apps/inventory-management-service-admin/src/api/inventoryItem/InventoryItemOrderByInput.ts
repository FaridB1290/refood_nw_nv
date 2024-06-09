import { SortOrder } from "../../util/SortOrder";

export type InventoryItemOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  price?: SortOrder;
  quantity?: SortOrder;
  restockDate?: SortOrder;
  supplier?: SortOrder;
  updatedAt?: SortOrder;
};
