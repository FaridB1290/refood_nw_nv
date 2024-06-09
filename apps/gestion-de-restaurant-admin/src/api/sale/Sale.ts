import { Panier } from "../panier/Panier";

export type Sale = {
  co2Evite: number | null;
  createdAt: Date;
  dateVente: Date | null;
  id: string;
  methodePaiement: string | null;
  panier?: Panier | null;
  quantiteVendue: number | null;
  updatedAt: Date;
};
