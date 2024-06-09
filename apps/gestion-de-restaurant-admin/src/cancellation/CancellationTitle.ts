import { Cancellation as TCancellation } from "../api/cancellation/Cancellation";

export const CANCELLATION_TITLE_FIELD = "raison";

export const CancellationTitle = (record: TCancellation): string => {
  return record.raison?.toString() || String(record.id);
};
