import { Sale as TSale } from "../api/sale/Sale";

export const SALE_TITLE_FIELD = "methodePaiement";

export const SaleTitle = (record: TSale): string => {
  return record.methodePaiement?.toString() || String(record.id);
};
