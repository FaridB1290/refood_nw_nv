import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { RestaurantTitle } from "../restaurant/RestaurantTitle";

export const FoodBasketCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="co2_evite" source="co2Evite" />
        <TextInput label="description" multiline source="description" />
        <div />
        <TextInput label="nom" source="nom" />
        <NumberInput step={1} label="nombre_restants" source="nombreRestants" />
        <NumberInput step={1} label="nombre_vendus" source="nombreVendus" />
        <NumberInput label="prix" source="prix" />
        <ReferenceInput
          source="restaurant.id"
          reference="Restaurant"
          label="restaurant_"
        >
          <SelectInput optionText={RestaurantTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
