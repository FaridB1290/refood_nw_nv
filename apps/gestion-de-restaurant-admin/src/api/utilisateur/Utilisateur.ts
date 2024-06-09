import { RestaurantEntity } from "../restaurantEntity/RestaurantEntity";
import { Restaurant } from "../restaurant/Restaurant";

export type Utilisateur = {
  createdAt: Date;
  email: string | null;
  id: string;
  localisationLat: number | null;
  localisationLon: number | null;
  motDePasse: string | null;
  nom: string | null;
  nomEntiteJuridique: string | null;
  numeroTelephone: string | null;
  numeroTva: string | null;
  restaurantEntities?: Array<RestaurantEntity>;
  restaurants?: Array<Restaurant>;
  typeCommerce: string | null;
  updatedAt: Date;
};
