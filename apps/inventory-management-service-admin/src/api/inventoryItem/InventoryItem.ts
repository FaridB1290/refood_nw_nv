export type InventoryItem = {
  createdAt: Date;
  id: string;
  name: string | null;
  price: number | null;
  quantity: number | null;
  restockDate: Date | null;
  supplier: string | null;
  updatedAt: Date;
};
