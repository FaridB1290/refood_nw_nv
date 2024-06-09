import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";

import { PanierTitle } from "../panier/PanierTitle";

export const AnnulationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="date_annulation" source="dateAnnulation" />
        <ReferenceInput source="panier.id" reference="Panier" label="panier">
          <SelectInput optionText={PanierTitle} />
        </ReferenceInput>
        <TextInput label="raison" source="raison" />
      </SimpleForm>
    </Create>
  );
};
