import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UtilisateurWhereUniqueInput } from "../utilisateur/UtilisateurWhereUniqueInput";

export type RestaurantEntityWhereInput = {
  id?: StringFilter;
  localisationLat?: FloatNullableFilter;
  localisationLon?: FloatNullableFilter;
  nom?: StringNullableFilter;
  numeroTelephone?: StringNullableFilter;
  typeCommerce?: StringNullableFilter;
  utilisateur?: UtilisateurWhereUniqueInput;
};
