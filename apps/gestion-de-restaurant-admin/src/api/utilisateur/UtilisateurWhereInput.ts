import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { RestaurantEntityListRelationFilter } from "../restaurantEntity/RestaurantEntityListRelationFilter";
import { RestaurantListRelationFilter } from "../restaurant/RestaurantListRelationFilter";

export type UtilisateurWhereInput = {
  email?: StringNullableFilter;
  id?: StringFilter;
  localisationLat?: FloatNullableFilter;
  localisationLon?: FloatNullableFilter;
  motDePasse?: StringNullableFilter;
  nom?: StringNullableFilter;
  nomEntiteJuridique?: StringNullableFilter;
  numeroTelephone?: StringNullableFilter;
  numeroTva?: StringNullableFilter;
  restaurantEntities?: RestaurantEntityListRelationFilter;
  restaurants?: RestaurantListRelationFilter;
  typeCommerce?: StringNullableFilter;
};
