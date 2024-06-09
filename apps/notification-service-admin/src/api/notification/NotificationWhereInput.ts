import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type NotificationWhereInput = {
  content?: StringNullableFilter;
  id?: StringFilter;
  recipient?: StringNullableFilter;
  sentAt?: DateTimeNullableFilter;
  status?: StringNullableFilter;
  typeField?: StringNullableFilter;
};
