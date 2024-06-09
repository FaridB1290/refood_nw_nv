import { VenteWhereUniqueInput } from "../vente/VenteWhereUniqueInput";

export type RefundCreateInput = {
  dateRemboursement?: Date | null;
  montant?: number | null;
  vente?: VenteWhereUniqueInput | null;
};
