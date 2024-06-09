import { UtilisateurWhereUniqueInput } from "../utilisateur/UtilisateurWhereUniqueInput";

export type RestaurantEntityCreateInput = {
  localisationLat?: number | null;
  localisationLon?: number | null;
  nom?: string | null;
  numeroTelephone?: string | null;
  typeCommerce?: string | null;
  utilisateur?: UtilisateurWhereUniqueInput | null;
};
