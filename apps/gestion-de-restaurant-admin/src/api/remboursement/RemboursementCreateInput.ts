import { VenteWhereUniqueInput } from "../vente/VenteWhereUniqueInput";

export type RemboursementCreateInput = {
  dateRemboursement?: Date | null;
  montant?: number | null;
  vente?: VenteWhereUniqueInput | null;
};
