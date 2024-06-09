import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { UTILISATEUR_TITLE_FIELD } from "../utilisateur/UtilisateurTitle";

export const RestaurantEntityList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"RestaurantEntities"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
