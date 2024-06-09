import { AnnulationCreateNestedManyWithoutPaniersInput } from "./AnnulationCreateNestedManyWithoutPaniersInput";
import { CancellationCreateNestedManyWithoutPaniersInput } from "./CancellationCreateNestedManyWithoutPaniersInput";
import { InputJsonValue } from "../../types";
import { RestaurantWhereUniqueInput } from "../restaurant/RestaurantWhereUniqueInput";
import { SaleCreateNestedManyWithoutPaniersInput } from "./SaleCreateNestedManyWithoutPaniersInput";
import { VenteCreateNestedManyWithoutPaniersInput } from "./VenteCreateNestedManyWithoutPaniersInput";

export type PanierCreateInput = {
  annulations?: AnnulationCreateNestedManyWithoutPaniersInput;
  cancellations?: CancellationCreateNestedManyWithoutPaniersInput;
  co2Evite?: number | null;
  description?: string | null;
  listeRepas?: InputJsonValue;
  nom?: string | null;
  nombreRestants?: number | null;
  nombreVendus?: number | null;
  prix?: number | null;
  restaurant?: RestaurantWhereUniqueInput | null;
  sales?: SaleCreateNestedManyWithoutPaniersInput;
  ventes?: VenteCreateNestedManyWithoutPaniersInput;
};
