import { PanierWhereUniqueInput } from "../panier/PanierWhereUniqueInput";

export type AnnulationUpdateInput = {
  dateAnnulation?: Date | null;
  panier?: PanierWhereUniqueInput | null;
  raison?: string | null;
};
