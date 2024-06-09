import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PanierWhereUniqueInput } from "../panier/PanierWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type AnnulationWhereInput = {
  dateAnnulation?: DateTimeNullableFilter;
  id?: StringFilter;
  panier?: PanierWhereUniqueInput;
  raison?: StringNullableFilter;
};
