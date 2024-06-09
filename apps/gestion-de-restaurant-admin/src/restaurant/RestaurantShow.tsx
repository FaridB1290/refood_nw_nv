import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { RESTAURANT_TITLE_FIELD } from "./RestaurantTitle";
import { UTILISATEUR_TITLE_FIELD } from "../utilisateur/UtilisateurTitle";

export const RestaurantShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField
          reference="FoodBasket"
          target="restaurantId"
          label="FoodBaskets"
        >
          <Datagrid rowClick="show">
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
              label="restaurant_"
              source="restaurant.id"
              reference="Restaurant"
            >
              <TextField source={RESTAURANT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Panier"
          target="restaurantId"
          label="Paniers"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
