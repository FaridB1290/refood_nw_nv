import { Annulation as TAnnulation } from "../api/annulation/Annulation";

export const ANNULATION_TITLE_FIELD = "raison";

export const AnnulationTitle = (record: TAnnulation): string => {
  return record.raison?.toString() || String(record.id);
};
