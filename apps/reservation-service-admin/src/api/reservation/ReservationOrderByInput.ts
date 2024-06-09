import { SortOrder } from "../../util/SortOrder";

export type ReservationOrderByInput = {
  createdAt?: SortOrder;
  customerId?: SortOrder;
  date?: SortOrder;
  id?: SortOrder;
  numberOfPeople?: SortOrder;
  restaurantId?: SortOrder;
  time?: SortOrder;
  updatedAt?: SortOrder;
};
