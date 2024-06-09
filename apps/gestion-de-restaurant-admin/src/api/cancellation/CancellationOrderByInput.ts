import { SortOrder } from "../../util/SortOrder";

export type CancellationOrderByInput = {
  createdAt?: SortOrder;
  dateAnnulation?: SortOrder;
  id?: SortOrder;
  panierId?: SortOrder;
  raison?: SortOrder;
  updatedAt?: SortOrder;
};
