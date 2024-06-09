import { Panier } from "../panier/Panier";

export type Cancellation = {
  createdAt: Date;
  dateAnnulation: Date | null;
  id: string;
  panier?: Panier | null;
  raison: string | null;
  updatedAt: Date;
};
