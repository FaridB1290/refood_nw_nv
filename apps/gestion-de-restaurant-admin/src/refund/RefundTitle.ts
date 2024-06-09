import { Refund as TRefund } from "../api/refund/Refund";

export const REFUND_TITLE_FIELD = "id";

export const RefundTitle = (record: TRefund): string => {
  return record.id?.toString() || String(record.id);
};
