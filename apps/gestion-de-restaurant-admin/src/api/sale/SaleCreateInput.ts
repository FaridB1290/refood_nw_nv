import { PanierWhereUniqueInput } from "../panier/PanierWhereUniqueInput";

export type SaleCreateInput = {
  co2Evite?: number | null;
  dateVente?: Date | null;
  methodePaiement?: string | null;
  panier?: PanierWhereUniqueInput | null;
  quantiteVendue?: number | null;
};
