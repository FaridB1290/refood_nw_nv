import { RestaurantEntity as TRestaurantEntity } from "../api/restaurantEntity/RestaurantEntity";

export const RESTAURANTENTITY_TITLE_FIELD = "nom";

export const RestaurantEntityTitle = (record: TRestaurantEntity): string => {
  return record.nom?.toString() || String(record.id);
};
