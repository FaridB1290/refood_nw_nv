import { Vente } from "../vente/Vente";

export type Refund = {
  createdAt: Date;
  dateRemboursement: Date | null;
  id: string;
  montant: number | null;
  updatedAt: Date;
  vente?: Vente | null;
};
