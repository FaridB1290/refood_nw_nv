import { FoodBasket as TFoodBasket } from "../api/foodBasket/FoodBasket";

export const FOODBASKET_TITLE_FIELD = "nom";

export const FoodBasketTitle = (record: TFoodBasket): string => {
  return record.nom?.toString() || String(record.id);
};
