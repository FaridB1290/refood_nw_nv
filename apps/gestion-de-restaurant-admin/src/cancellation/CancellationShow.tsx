import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { PANIER_TITLE_FIELD } from "../panier/PanierTitle";

export const CancellationShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="date_annulation" source="dateAnnulation" />
        <TextField label="ID" source="id" />
        <ReferenceField label="panier_" source="panier.id" reference="Panier">
          <TextField source={PANIER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="raison" source="raison" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
