import { InventoryItem as TInventoryItem } from "../api/inventoryItem/InventoryItem";

export const INVENTORYITEM_TITLE_FIELD = "name";

export const InventoryItemTitle = (record: TInventoryItem): string => {
  return record.name?.toString() || String(record.id);
};
