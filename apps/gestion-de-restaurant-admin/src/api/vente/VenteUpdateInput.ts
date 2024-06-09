import { PanierWhereUniqueInput } from "../panier/PanierWhereUniqueInput";
import { RefundUpdateManyWithoutVentesInput } from "./RefundUpdateManyWithoutVentesInput";
import { RemboursementUpdateManyWithoutVentesInput } from "./RemboursementUpdateManyWithoutVentesInput";

export type VenteUpdateInput = {
  co2Evite?: number | null;
  dateVente?: Date | null;
  methodePaiement?: string | null;
  panier?: PanierWhereUniqueInput | null;
  quantiteVendue?: number | null;
  refunds?: RefundUpdateManyWithoutVentesInput;
  remboursements?: RemboursementUpdateManyWithoutVentesInput;
};
