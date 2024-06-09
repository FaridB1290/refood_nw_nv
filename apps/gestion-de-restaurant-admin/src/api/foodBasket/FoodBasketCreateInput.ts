import { InputJsonValue } from "../../types";
import { RestaurantWhereUniqueInput } from "../restaurant/RestaurantWhereUniqueInput";

export type FoodBasketCreateInput = {
  co2Evite?: number | null;
  description?: string | null;
  listeRepas?: InputJsonValue;
  nom?: string | null;
  nombreRestants?: number | null;
  nombreVendus?: number | null;
  prix?: number | null;
  restaurant?: RestaurantWhereUniqueInput | null;
};
