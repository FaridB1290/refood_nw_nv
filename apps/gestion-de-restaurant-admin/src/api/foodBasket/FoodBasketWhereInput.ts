import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { RestaurantWhereUniqueInput } from "../restaurant/RestaurantWhereUniqueInput";

export type FoodBasketWhereInput = {
  co2Evite?: FloatNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  listeRepas?: JsonFilter;
  nom?: StringNullableFilter;
  nombreRestants?: IntNullableFilter;
  nombreVendus?: IntNullableFilter;
  prix?: FloatNullableFilter;
  restaurant?: RestaurantWhereUniqueInput;
};
