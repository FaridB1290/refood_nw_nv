import { Remboursement as TRemboursement } from "../api/remboursement/Remboursement";

export const REMBOURSEMENT_TITLE_FIELD = "id";

export const RemboursementTitle = (record: TRemboursement): string => {
  return record.id?.toString() || String(record.id);
};
