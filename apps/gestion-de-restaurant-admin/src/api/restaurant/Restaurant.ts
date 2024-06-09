import { FoodBasket } from "../foodBasket/FoodBasket";
import { Panier } from "../panier/Panier";
import { Utilisateur } from "../utilisateur/Utilisateur";

export type Restaurant = {
  createdAt: Date;
  foodBaskets?: Array<FoodBasket>;
  id: string;
  localisationLat: number | null;
  localisationLon: number | null;
  nom: string | null;
  numeroTelephone: string | null;
  paniers?: Array<Panier>;
  typeCommerce: string | null;
  updatedAt: Date;
  utilisateur?: Utilisateur | null;
};
