import { Vente as TVente } from "../api/vente/Vente";

export const VENTE_TITLE_FIELD = "methodePaiement";

export const VenteTitle = (record: TVente): string => {
  return record.methodePaiement?.toString() || String(record.id);
};
