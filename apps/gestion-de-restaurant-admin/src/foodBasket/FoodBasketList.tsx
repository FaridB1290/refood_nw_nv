import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { RESTAURANT_TITLE_FIELD } from "../restaurant/RestaurantTitle";

export const FoodBasketList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"FoodBaskets"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
