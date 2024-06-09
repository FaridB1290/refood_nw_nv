import { Restaurant as TRestaurant } from "../api/restaurant/Restaurant";

export const RESTAURANT_TITLE_FIELD = "nom";

export const RestaurantTitle = (record: TRestaurant): string => {
  return record.nom?.toString() || String(record.id);
};
