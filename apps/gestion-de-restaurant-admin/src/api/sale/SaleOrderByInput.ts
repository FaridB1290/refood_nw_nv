import { SortOrder } from "../../util/SortOrder";

export type SaleOrderByInput = {
  co2Evite?: SortOrder;
  createdAt?: SortOrder;
  dateVente?: SortOrder;
  id?: SortOrder;
  methodePaiement?: SortOrder;
  panierId?: SortOrder;
  quantiteVendue?: SortOrder;
  updatedAt?: SortOrder;
};
