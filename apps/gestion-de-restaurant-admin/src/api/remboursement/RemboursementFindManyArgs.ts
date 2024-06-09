import { RemboursementWhereInput } from "./RemboursementWhereInput";
import { RemboursementOrderByInput } from "./RemboursementOrderByInput";

export type RemboursementFindManyArgs = {
  where?: RemboursementWhereInput;
  orderBy?: Array<RemboursementOrderByInput>;
  skip?: number;
  take?: number;
};
