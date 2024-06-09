import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { RestaurantEntityTitle } from "../restaurantEntity/RestaurantEntityTitle";
import { RestaurantTitle } from "../restaurant/RestaurantTitle";

export const UtilisateurCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="email" source="email" type="email" />
        <NumberInput label="localisation_lat" source="localisationLat" />
        <NumberInput label="localisation_lon" source="localisationLon" />
        <TextInput label="mot_de_passe" source="motDePasse" />
        <TextInput label="nom" source="nom" />
        <TextInput label="nom_entite_juridique" source="nomEntiteJuridique" />
        <TextInput label="numero_telephone" source="numeroTelephone" />
        <TextInput label="numero_tva" source="numeroTva" />
        <ReferenceArrayInput
          source="restaurantEntities"
          reference="RestaurantEntity"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={RestaurantEntityTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="restaurants"
          reference="Restaurant"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={RestaurantTitle} />
        </ReferenceArrayInput>
        <TextInput label="type_commerce" source="typeCommerce" />
      </SimpleForm>
    </Create>
  );
};
