import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const ReservationShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="customerId" source="customerId" />
        <TextField label="date" source="date" />
        <TextField label="ID" source="id" />
        <TextField label="numberOfPeople" source="numberOfPeople" />
        <TextField label="restaurantId" source="restaurantId" />
        <TextField label="time" source="time" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
