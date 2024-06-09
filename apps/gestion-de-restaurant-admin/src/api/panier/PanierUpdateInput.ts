import { AnnulationUpdateManyWithoutPaniersInput } from "./AnnulationUpdateManyWithoutPaniersInput";
import { CancellationUpdateManyWithoutPaniersInput } from "./CancellationUpdateManyWithoutPaniersInput";
import { InputJsonValue } from "../../types";
import { RestaurantWhereUniqueInput } from "../restaurant/RestaurantWhereUniqueInput";
import { SaleUpdateManyWithoutPaniersInput } from "./SaleUpdateManyWithoutPaniersInput";
import { VenteUpdateManyWithoutPaniersInput } from "./VenteUpdateManyWithoutPaniersInput";

export type PanierUpdateInput = {
  annulations?: AnnulationUpdateManyWithoutPaniersInput;
  cancellations?: CancellationUpdateManyWithoutPaniersInput;
  co2Evite?: number | null;
  description?: string | null;
  listeRepas?: InputJsonValue;
  nom?: string | null;
  nombreRestants?: number | null;
  nombreVendus?: number | null;
  prix?: number | null;
  restaurant?: RestaurantWhereUniqueInput | null;
  sales?: SaleUpdateManyWithoutPaniersInput;
  ventes?: VenteUpdateManyWithoutPaniersInput;
};
