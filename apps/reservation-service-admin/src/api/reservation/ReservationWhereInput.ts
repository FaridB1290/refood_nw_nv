import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type ReservationWhereInput = {
  customerId?: StringNullableFilter;
  date?: DateTimeNullableFilter;
  id?: StringFilter;
  numberOfPeople?: IntNullableFilter;
  restaurantId?: StringNullableFilter;
  time?: StringNullableFilter;
};
