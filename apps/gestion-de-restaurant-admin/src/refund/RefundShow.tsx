import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { VENTE_TITLE_FIELD } from "../vente/VenteTitle";

export const RefundShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="date_remboursement" source="dateRemboursement" />
        <TextField label="ID" source="id" />
        <TextField label="montant" source="montant" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="vente_" source="vente.id" reference="Vente">
          <TextField source={VENTE_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
