import { PanierWhereUniqueInput } from "../panier/PanierWhereUniqueInput";

export type CancellationUpdateInput = {
  dateAnnulation?: Date | null;
  panier?: PanierWhereUniqueInput | null;
  raison?: string | null;
};
