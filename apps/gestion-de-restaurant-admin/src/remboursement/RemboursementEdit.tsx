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

export const RemboursementEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="date_remboursement" source="dateRemboursement" />
        <NumberInput label="montant" source="montant" />
        <ReferenceInput source="vente.id" reference="Vente" label="vente">
          <SelectInput optionText={VenteTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
