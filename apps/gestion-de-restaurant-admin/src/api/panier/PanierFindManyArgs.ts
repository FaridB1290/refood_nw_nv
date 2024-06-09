import { PanierWhereInput } from "./PanierWhereInput";
import { PanierOrderByInput } from "./PanierOrderByInput";

export type PanierFindManyArgs = {
  where?: PanierWhereInput;
  orderBy?: Array<PanierOrderByInput>;
  skip?: number;
  take?: number;
};
