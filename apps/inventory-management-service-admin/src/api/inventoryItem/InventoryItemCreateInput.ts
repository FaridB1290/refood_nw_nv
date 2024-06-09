export type InventoryItemCreateInput = {
  name?: string | null;
  price?: number | null;
  quantity?: number | null;
  restockDate?: Date | null;
  supplier?: string | null;
};
