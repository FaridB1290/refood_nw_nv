import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { VENTE_TITLE_FIELD } from "./VenteTitle";
import { PANIER_TITLE_FIELD } from "../panier/PanierTitle";

export const VenteShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="co2_evite" source="co2Evite" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="date_vente" source="dateVente" />
        <TextField label="ID" source="id" />
        <TextField label="methode_paiement" source="methodePaiement" />
        <ReferenceField label="panier" source="panier.id" reference="Panier">
          <TextField source={PANIER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="quantite_vendue" source="quantiteVendue" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField reference="Refund" target="venteId" label="Refunds">
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="date_remboursement" source="dateRemboursement" />
            <TextField label="ID" source="id" />
            <TextField label="montant" source="montant" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="vente_" source="vente.id" reference="Vente">
              <TextField source={VENTE_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Remboursement"
          target="venteId"
          label="Remboursements"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="date_remboursement" source="dateRemboursement" />
            <TextField label="ID" source="id" />
            <TextField label="montant" source="montant" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="vente" source="vente.id" reference="Vente">
              <TextField source={VENTE_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
