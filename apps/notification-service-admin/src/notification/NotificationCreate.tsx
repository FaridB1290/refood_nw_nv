import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const NotificationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="content" multiline source="content" />
        <TextInput label="recipient" source="recipient" />
        <DateTimeInput label="sentAt" source="sentAt" />
        <TextInput label="status" source="status" />
        <TextInput label="type" source="typeField" />
      </SimpleForm>
    </Create>
  );
};
