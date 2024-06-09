import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const FeedbackEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="comment" multiline source="comment" />
        <TextInput label="customerId" source="customerId" />
        <DateTimeInput label="date" source="date" />
        <NumberInput step={1} label="rating" source="rating" />
      </SimpleForm>
    </Edit>
  );
};
