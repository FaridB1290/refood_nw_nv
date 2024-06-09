import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { RESTAURANT_TITLE_FIELD } from "../restaurant/RestaurantTitle";

export const FoodBasketShow = (props: ShowProps): React.ReactElement => {
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
          label="restaurant_"
          source="restaurant.id"
          reference="Restaurant"
        >
          <TextField source={RESTAURANT_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
