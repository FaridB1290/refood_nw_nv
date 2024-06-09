import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const NotificationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="content" multiline source="content" />
        <TextInput label="recipient" source="recipient" />
        <DateTimeInput label="sentAt" source="sentAt" />
        <TextInput label="status" source="status" />
        <TextInput label="type" source="typeField" />
      </SimpleForm>
    </Edit>
  );
};
