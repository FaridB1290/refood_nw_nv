import { RestaurantEntityUpdateManyWithoutUtilisateursInput } from "./RestaurantEntityUpdateManyWithoutUtilisateursInput";
import { RestaurantUpdateManyWithoutUtilisateursInput } from "./RestaurantUpdateManyWithoutUtilisateursInput";

export type UtilisateurUpdateInput = {
  email?: string | null;
  localisationLat?: number | null;
  localisationLon?: number | null;
  motDePasse?: string | null;
  nom?: string | null;
  nomEntiteJuridique?: string | null;
  numeroTelephone?: string | null;
  numeroTva?: string | null;
  restaurantEntities?: RestaurantEntityUpdateManyWithoutUtilisateursInput;
  restaurants?: RestaurantUpdateManyWithoutUtilisateursInput;
  typeCommerce?: string | null;
};
