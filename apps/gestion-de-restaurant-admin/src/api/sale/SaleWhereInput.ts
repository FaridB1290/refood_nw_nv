import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PanierWhereUniqueInput } from "../panier/PanierWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type SaleWhereInput = {
  co2Evite?: FloatNullableFilter;
  dateVente?: DateTimeNullableFilter;
  id?: StringFilter;
  methodePaiement?: StringNullableFilter;
  panier?: PanierWhereUniqueInput;
  quantiteVendue?: IntNullableFilter;
};
