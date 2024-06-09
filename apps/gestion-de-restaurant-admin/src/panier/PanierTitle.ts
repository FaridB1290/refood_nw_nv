import { Panier as TPanier } from "../api/panier/Panier";

export const PANIER_TITLE_FIELD = "description";

export const PanierTitle = (record: TPanier): string => {
  return record.description?.toString() || String(record.id);
};
