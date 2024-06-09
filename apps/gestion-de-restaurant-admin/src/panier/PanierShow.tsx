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

import { PANIER_TITLE_FIELD } from "./PanierTitle";
import { RESTAURANT_TITLE_FIELD } from "../restaurant/RestaurantTitle";

export const PanierShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="co2_evite" source="co2Evite" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="liste_repas" source="listeRepas" />
        <TextField label="nom" source="nom" />
        <TextField label="nombre_restants" source="nombreRestants" />
        <TextField label="nombre_vendus" source="nombreVendus" />
        <TextField label="prix" source="prix" />
        <ReferenceField
          label="restaurant"
          source="restaurant.id"
          reference="Restaurant"
        >
          <TextField source={RESTAURANT_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Annulation"
          target="panierId"
          label="Annulations"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="date_annulation" source="dateAnnulation" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="panier"
              source="panier.id"
              reference="Panier"
            >
              <TextField source={PANIER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="raison" source="raison" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Cancellation"
          target="panierId"
          label="Cancellations"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="date_annulation" source="dateAnnulation" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="panier_"
              source="panier.id"
              reference="Panier"
            >
              <TextField source={PANIER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="raison" source="raison" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Sale" target="panierId" label="Sales">
          <Datagrid rowClick="show">
            <TextField label="co2_evite" source="co2Evite" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="date_vente" source="dateVente" />
            <TextField label="ID" source="id" />
            <TextField label="methode_paiement" source="methodePaiement" />
            <ReferenceField
              label="panier_"
              source="panier.id"
              reference="Panier"
            >
              <TextField source={PANIER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="quantite_vendue" source="quantiteVendue" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Vente" target="panierId" label="Ventes">
          <Datagrid rowClick="show">
            <TextField label="co2_evite" source="co2Evite" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="date_vente" source="dateVente" />
            <TextField label="ID" source="id" />
            <TextField label="methode_paiement" source="methodePaiement" />
            <ReferenceField
              label="panier"
              source="panier.id"
              reference="Panier"
            >
              <TextField source={PANIER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="quantite_vendue" source="quantiteVendue" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
