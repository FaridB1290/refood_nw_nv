import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type FeedbackWhereInput = {
  comment?: StringNullableFilter;
  customerId?: StringNullableFilter;
  date?: DateTimeNullableFilter;
  id?: StringFilter;
  rating?: IntNullableFilter;
};
