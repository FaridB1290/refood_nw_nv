import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const ReservationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="customerId" source="customerId" />
        <DateTimeInput label="date" source="date" />
        <NumberInput step={1} label="numberOfPeople" source="numberOfPeople" />
        <TextInput label="restaurantId" source="restaurantId" />
        <TextInput label="time" source="time" />
      </SimpleForm>
    </Create>
  );
};
