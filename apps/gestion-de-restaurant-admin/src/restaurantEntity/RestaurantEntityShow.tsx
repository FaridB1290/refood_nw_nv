import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { UTILISATEUR_TITLE_FIELD } from "../utilisateur/UtilisateurTitle";

export const RestaurantEntityShow = (props: ShowProps): React.ReactElement => {
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
          label="utilisateur_"
          source="utilisateur.id"
          reference="Utilisateur"
        >
          <TextField source={UTILISATEUR_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
