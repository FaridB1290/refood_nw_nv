import { Utilisateur } from "../utilisateur/Utilisateur";

export type RestaurantEntity = {
  createdAt: Date;
  id: string;
  localisationLat: number | null;
  localisationLon: number | null;
  nom: string | null;
  numeroTelephone: string | null;
  typeCommerce: string | null;
  updatedAt: Date;
  utilisateur?: Utilisateur | null;
};
