import { PanierWhereUniqueInput } from "../panier/PanierWhereUniqueInput";

export type SaleUpdateInput = {
  co2Evite?: number | null;
  dateVente?: Date | null;
  methodePaiement?: string | null;
  panier?: PanierWhereUniqueInput | null;
  quantiteVendue?: number | null;
};
