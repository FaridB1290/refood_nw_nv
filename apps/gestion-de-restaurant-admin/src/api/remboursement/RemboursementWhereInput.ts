import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { VenteWhereUniqueInput } from "../vente/VenteWhereUniqueInput";

export type RemboursementWhereInput = {
  dateRemboursement?: DateTimeNullableFilter;
  id?: StringFilter;
  montant?: FloatNullableFilter;
  vente?: VenteWhereUniqueInput;
};
