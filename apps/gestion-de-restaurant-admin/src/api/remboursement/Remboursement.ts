import { Vente } from "../vente/Vente";

export type Remboursement = {
  createdAt: Date;
  dateRemboursement: Date | null;
  id: string;
  montant: number | null;
  updatedAt: Date;
  vente?: Vente | null;
};
