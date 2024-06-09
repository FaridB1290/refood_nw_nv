import { SortOrder } from "../../util/SortOrder";

export type RefundOrderByInput = {
  createdAt?: SortOrder;
  dateRemboursement?: SortOrder;
  id?: SortOrder;
  montant?: SortOrder;
  updatedAt?: SortOrder;
  venteId?: SortOrder;
};
