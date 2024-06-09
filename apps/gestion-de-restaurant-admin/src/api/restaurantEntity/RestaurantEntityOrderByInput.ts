import { SortOrder } from "../../util/SortOrder";

export type RestaurantEntityOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  localisationLat?: SortOrder;
  localisationLon?: SortOrder;
  nom?: SortOrder;
  numeroTelephone?: SortOrder;
  typeCommerce?: SortOrder;
  updatedAt?: SortOrder;
  utilisateurId?: SortOrder;
};
