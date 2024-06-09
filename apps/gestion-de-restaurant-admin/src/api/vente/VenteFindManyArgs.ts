import { VenteWhereInput } from "./VenteWhereInput";
import { VenteOrderByInput } from "./VenteOrderByInput";

export type VenteFindManyArgs = {
  where?: VenteWhereInput;
  orderBy?: Array<VenteOrderByInput>;
  skip?: number;
  take?: number;
};
