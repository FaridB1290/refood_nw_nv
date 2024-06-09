import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PanierWhereUniqueInput } from "../panier/PanierWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type CancellationWhereInput = {
  dateAnnulation?: DateTimeNullableFilter;
  id?: StringFilter;
  panier?: PanierWhereUniqueInput;
  raison?: StringNullableFilter;
};
