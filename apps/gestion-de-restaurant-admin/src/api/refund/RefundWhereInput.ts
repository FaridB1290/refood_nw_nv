import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { VenteWhereUniqueInput } from "../vente/VenteWhereUniqueInput";

export type RefundWhereInput = {
  dateRemboursement?: DateTimeNullableFilter;
  id?: StringFilter;
  montant?: FloatNullableFilter;
  vente?: VenteWhereUniqueInput;
};
