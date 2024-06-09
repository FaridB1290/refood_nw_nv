import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";

import { PanierTitle } from "../panier/PanierTitle";

export const CancellationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="date_annulation" source="dateAnnulation" />
        <ReferenceInput source="panier.id" reference="Panier" label="panier_">
          <SelectInput optionText={PanierTitle} />
        </ReferenceInput>
        <TextInput label="raison" source="raison" />
      </SimpleForm>
    </Edit>
  );
};
