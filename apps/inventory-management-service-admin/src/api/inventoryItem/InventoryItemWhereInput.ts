import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type InventoryItemWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  price?: FloatNullableFilter;
  quantity?: IntNullableFilter;
  restockDate?: DateTimeNullableFilter;
  supplier?: StringNullableFilter;
};
