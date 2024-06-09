import { SortOrder } from "../../util/SortOrder";

export type UtilisateurOrderByInput = {
  createdAt?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  localisationLat?: SortOrder;
  localisationLon?: SortOrder;
  motDePasse?: SortOrder;
  nom?: SortOrder;
  nomEntiteJuridique?: SortOrder;
  numeroTelephone?: SortOrder;
  numeroTva?: SortOrder;
  typeCommerce?: SortOrder;
  updatedAt?: SortOrder;
};
