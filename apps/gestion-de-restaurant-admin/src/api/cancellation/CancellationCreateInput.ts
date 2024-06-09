import { PanierWhereUniqueInput } from "../panier/PanierWhereUniqueInput";

export type CancellationCreateInput = {
  dateAnnulation?: Date | null;
  panier?: PanierWhereUniqueInput | null;
  raison?: string | null;
};
