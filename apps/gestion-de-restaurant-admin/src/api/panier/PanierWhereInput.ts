import { AnnulationListRelationFilter } from "../annulation/AnnulationListRelationFilter";
import { CancellationListRelationFilter } from "../cancellation/CancellationListRelationFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { RestaurantWhereUniqueInput } from "../restaurant/RestaurantWhereUniqueInput";
import { SaleListRelationFilter } from "../sale/SaleListRelationFilter";
import { VenteListRelationFilter } from "../vente/VenteListRelationFilter";

export type PanierWhereInput = {
  annulations?: AnnulationListRelationFilter;
  cancellations?: CancellationListRelationFilter;
  co2Evite?: FloatNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  listeRepas?: JsonFilter;
  nom?: StringNullableFilter;
  nombreRestants?: IntNullableFilter;
  nombreVendus?: IntNullableFilter;
  prix?: FloatNullableFilter;
  restaurant?: RestaurantWhereUniqueInput;
  sales?: SaleListRelationFilter;
  ventes?: VenteListRelationFilter;
};
