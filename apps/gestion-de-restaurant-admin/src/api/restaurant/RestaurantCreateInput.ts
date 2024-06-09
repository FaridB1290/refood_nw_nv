import { FoodBasketCreateNestedManyWithoutRestaurantsInput } from "./FoodBasketCreateNestedManyWithoutRestaurantsInput";
import { PanierCreateNestedManyWithoutRestaurantsInput } from "./PanierCreateNestedManyWithoutRestaurantsInput";
import { UtilisateurWhereUniqueInput } from "../utilisateur/UtilisateurWhereUniqueInput";

export type RestaurantCreateInput = {
  foodBaskets?: FoodBasketCreateNestedManyWithoutRestaurantsInput;
  localisationLat?: number | null;
  localisationLon?: number | null;
  nom?: string | null;
  numeroTelephone?: string | null;
  paniers?: PanierCreateNestedManyWithoutRestaurantsInput;
  typeCommerce?: string | null;
  utilisateur?: UtilisateurWhereUniqueInput | null;
};
