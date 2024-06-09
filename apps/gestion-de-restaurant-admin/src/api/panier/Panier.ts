import { Annulation } from "../annulation/Annulation";
import { Cancellation } from "../cancellation/Cancellation";
import { JsonValue } from "type-fest";
import { Restaurant } from "../restaurant/Restaurant";
import { Sale } from "../sale/Sale";
import { Vente } from "../vente/Vente";

export type Panier = {
  annulations?: Array<Annulation>;
  cancellations?: Array<Cancellation>;
  co2Evite: number | null;
  createdAt: Date;
  description: string | null;
  id: string;
  listeRepas: JsonValue;
  nom: string | null;
  nombreRestants: number | null;
  nombreVendus: number | null;
  prix: number | null;
  restaurant?: Restaurant | null;
  sales?: Array<Sale>;
  updatedAt: Date;
  ventes?: Array<Vente>;
};
