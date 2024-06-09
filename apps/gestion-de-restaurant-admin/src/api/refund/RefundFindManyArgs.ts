import { RefundWhereInput } from "./RefundWhereInput";
import { RefundOrderByInput } from "./RefundOrderByInput";

export type RefundFindManyArgs = {
  where?: RefundWhereInput;
  orderBy?: Array<RefundOrderByInput>;
  skip?: number;
  take?: number;
};
