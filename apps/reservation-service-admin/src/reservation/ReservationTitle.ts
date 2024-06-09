import { Reservation as TReservation } from "../api/reservation/Reservation";

export const RESERVATION_TITLE_FIELD = "customerId";

export const ReservationTitle = (record: TReservation): string => {
  return record.customerId?.toString() || String(record.id);
};
