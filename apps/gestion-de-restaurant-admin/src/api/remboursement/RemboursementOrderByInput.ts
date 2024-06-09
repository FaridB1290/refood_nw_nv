import { SortOrder } from "../../util/SortOrder";

export type RemboursementOrderByInput = {
  createdAt?: SortOrder;
  dateRemboursement?: SortOrder;
  id?: SortOrder;
  montant?: SortOrder;
  updatedAt?: SortOrder;
  venteId?: SortOrder;
};
