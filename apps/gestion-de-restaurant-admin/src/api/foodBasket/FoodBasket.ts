import { JsonValue } from "type-fest";
import { Restaurant } from "../restaurant/Restaurant";

export type FoodBasket = {
  co2Evite: number | null;
  createdAt: Date;
  description: string | null;
  id: string;
  listeRepas: JsonValue;
  nom: string | null;
  nombreRestants: number | null;
  nombreVendus: number | null;
  prix: number | null;
  restaurant?: Restaurant | null;
  updatedAt: Date;
};
