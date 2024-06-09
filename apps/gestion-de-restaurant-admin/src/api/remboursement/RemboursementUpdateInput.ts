import { VenteWhereUniqueInput } from "../vente/VenteWhereUniqueInput";

export type RemboursementUpdateInput = {
  dateRemboursement?: Date | null;
  montant?: number | null;
  vente?: VenteWhereUniqueInput | null;
};
