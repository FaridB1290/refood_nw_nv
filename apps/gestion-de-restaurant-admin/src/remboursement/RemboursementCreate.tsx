import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { VenteTitle } from "../vente/VenteTitle";

export const RemboursementCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="date_remboursement" source="dateRemboursement" />
        <NumberInput label="montant" source="montant" />
        <ReferenceInput source="vente.id" reference="Vente" label="vente">
          <SelectInput optionText={VenteTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
