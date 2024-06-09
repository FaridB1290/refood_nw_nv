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

export const RefundCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="date_remboursement" source="dateRemboursement" />
        <NumberInput label="montant" source="montant" />
        <ReferenceInput source="vente.id" reference="Vente" label="vente_">
          <SelectInput optionText={VenteTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
