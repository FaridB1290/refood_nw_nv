import { Panier } from "../panier/Panier";

export type Annulation = {
  createdAt: Date;
  dateAnnulation: Date | null;
  id: string;
  panier?: Panier | null;
  raison: string | null;
  updatedAt: Date;
};
