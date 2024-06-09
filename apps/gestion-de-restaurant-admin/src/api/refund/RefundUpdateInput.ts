import { VenteWhereUniqueInput } from "../vente/VenteWhereUniqueInput";

export type RefundUpdateInput = {
  dateRemboursement?: Date | null;
  montant?: number | null;
  vente?: VenteWhereUniqueInput | null;
};
