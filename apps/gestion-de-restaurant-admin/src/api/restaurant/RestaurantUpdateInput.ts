import { FoodBasketUpdateManyWithoutRestaurantsInput } from "./FoodBasketUpdateManyWithoutRestaurantsInput";
import { PanierUpdateManyWithoutRestaurantsInput } from "./PanierUpdateManyWithoutRestaurantsInput";
import { UtilisateurWhereUniqueInput } from "../utilisateur/UtilisateurWhereUniqueInput";

export type RestaurantUpdateInput = {
  foodBaskets?: FoodBasketUpdateManyWithoutRestaurantsInput;
  localisationLat?: number | null;
  localisationLon?: number | null;
  nom?: string | null;
  numeroTelephone?: string | null;
  paniers?: PanierUpdateManyWithoutRestaurantsInput;
  typeCommerce?: string | null;
  utilisateur?: UtilisateurWhereUniqueInput | null;
};
