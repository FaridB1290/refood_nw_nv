export type Reservation = {
  createdAt: Date;
  customerId: string | null;
  date: Date | null;
  id: string;
  numberOfPeople: number | null;
  restaurantId: string | null;
  time: string | null;
  updatedAt: Date;
};
