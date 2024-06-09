import { PanierWhereUniqueInput } from "../panier/PanierWhereUniqueInput";

export type AnnulationCreateInput = {
  dateAnnulation?: Date | null;
  panier?: PanierWhereUniqueInput | null;
  raison?: string | null;
};
