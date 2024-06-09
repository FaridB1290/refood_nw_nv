import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { VenteTitle } from "../vente/VenteTitle";

export const RefundEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="date_remboursement" source="dateRemboursement" />
        <NumberInput label="montant" source="montant" />
        <ReferenceInput source="vente.id" reference="Vente" label="vente_">
          <SelectInput optionText={VenteTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
