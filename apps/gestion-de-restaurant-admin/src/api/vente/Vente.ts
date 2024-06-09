import { Panier } from "../panier/Panier";
import { Refund } from "../refund/Refund";
import { Remboursement } from "../remboursement/Remboursement";

export type Vente = {
  co2Evite: number | null;
  createdAt: Date;
  dateVente: Date | null;
  id: string;
  methodePaiement: string | null;
  panier?: Panier | null;
  quantiteVendue: number | null;
  refunds?: Array<Refund>;
  remboursements?: Array<Remboursement>;
  updatedAt: Date;
};
