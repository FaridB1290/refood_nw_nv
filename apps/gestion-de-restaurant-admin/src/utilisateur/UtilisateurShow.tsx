import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { UTILISATEUR_TITLE_FIELD } from "./UtilisateurTitle";

export const UtilisateurShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="email" source="email" />
        <TextField label="ID" source="id" />
        <TextField label="localisation_lat" source="localisationLat" />
        <TextField label="localisation_lon" source="localisationLon" />
        <TextField label="mot_de_passe" source="motDePasse" />
        <TextField label="nom" source="nom" />
        <TextField label="nom_entite_juridique" source="nomEntiteJuridique" />
        <TextField label="numero_telephone" source="numeroTelephone" />
        <TextField label="numero_tva" source="numeroTva" />
        <TextField label="type_commerce" source="typeCommerce" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="RestaurantEntity"
          target="utilisateurId"
          label="RestaurantEntities"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="localisation_lat" source="localisationLat" />
            <TextField label="localisation_lon" source="localisationLon" />
            <TextField label="nom" source="nom" />
            <TextField label="numero_telephone" source="numeroTelephone" />
            <TextField label="type_commerce" source="typeCommerce" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField
              label="utilisateur_"
              source="utilisateur.id"
              reference="Utilisateur"
            >
              <TextField source={UTILISATEUR_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Restaurant"
          target="utilisateurId"
          label="Restaurants"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="localisation_lat" source="localisationLat" />
            <TextField label="localisation_lon" source="localisationLon" />
            <TextField label="nom" source="nom" />
            <TextField label="numero_telephone" source="numeroTelephone" />
            <TextField label="type_commerce" source="typeCommerce" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField
              label="utilisateur"
              source="utilisateur.id"
              reference="Utilisateur"
            >
              <TextField source={UTILISATEUR_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
