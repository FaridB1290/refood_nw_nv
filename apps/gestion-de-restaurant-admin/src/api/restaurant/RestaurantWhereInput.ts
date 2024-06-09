import { FoodBasketListRelationFilter } from "../foodBasket/FoodBasketListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PanierListRelationFilter } from "../panier/PanierListRelationFilter";
import { UtilisateurWhereUniqueInput } from "../utilisateur/UtilisateurWhereUniqueInput";

export type RestaurantWhereInput = {
  foodBaskets?: FoodBasketListRelationFilter;
  id?: StringFilter;
  localisationLat?: FloatNullableFilter;
  localisationLon?: FloatNullableFilter;
  nom?: StringNullableFilter;
  numeroTelephone?: StringNullableFilter;
  paniers?: PanierListRelationFilter;
  typeCommerce?: StringNullableFilter;
  utilisateur?: UtilisateurWhereUniqueInput;
};
