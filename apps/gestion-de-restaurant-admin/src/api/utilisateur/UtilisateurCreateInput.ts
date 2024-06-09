import { RestaurantEntityCreateNestedManyWithoutUtilisateursInput } from "./RestaurantEntityCreateNestedManyWithoutUtilisateursInput";
import { RestaurantCreateNestedManyWithoutUtilisateursInput } from "./RestaurantCreateNestedManyWithoutUtilisateursInput";

export type UtilisateurCreateInput = {
  email?: string | null;
  localisationLat?: number | null;
  localisationLon?: number | null;
  motDePasse?: string | null;
  nom?: string | null;
  nomEntiteJuridique?: string | null;
  numeroTelephone?: string | null;
  numeroTva?: string | null;
  restaurantEntities?: RestaurantEntityCreateNestedManyWithoutUtilisateursInput;
  restaurants?: RestaurantCreateNestedManyWithoutUtilisateursInput;
  typeCommerce?: string | null;
};
