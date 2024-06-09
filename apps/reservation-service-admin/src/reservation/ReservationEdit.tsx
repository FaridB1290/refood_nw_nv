import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const ReservationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="customerId" source="customerId" />
        <DateTimeInput label="date" source="date" />
        <NumberInput step={1} label="numberOfPeople" source="numberOfPeople" />
        <TextInput label="restaurantId" source="restaurantId" />
        <TextInput label="time" source="time" />
      </SimpleForm>
    </Edit>
  );
};
