import { PanierWhereUniqueInput } from "../panier/PanierWhereUniqueInput";
import { RefundCreateNestedManyWithoutVentesInput } from "./RefundCreateNestedManyWithoutVentesInput";
import { RemboursementCreateNestedManyWithoutVentesInput } from "./RemboursementCreateNestedManyWithoutVentesInput";

export type VenteCreateInput = {
  co2Evite?: number | null;
  dateVente?: Date | null;
  methodePaiement?: string | null;
  panier?: PanierWhereUniqueInput | null;
  quantiteVendue?: number | null;
  refunds?: RefundCreateNestedManyWithoutVentesInput;
  remboursements?: RemboursementCreateNestedManyWithoutVentesInput;
};
