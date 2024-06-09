import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { FoodBasketTitle } from "../foodBasket/FoodBasketTitle";
import { PanierTitle } from "../panier/PanierTitle";
import { UtilisateurTitle } from "../utilisateur/UtilisateurTitle";

export const RestaurantEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="foodBaskets"
          reference="FoodBasket"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={FoodBasketTitle} />
        </ReferenceArrayInput>
        <NumberInput label="localisation_lat" source="localisationLat" />
        <NumberInput label="localisation_lon" source="localisationLon" />
        <TextInput label="nom" source="nom" />
        <TextInput label="numero_telephone" source="numeroTelephone" />
        <ReferenceArrayInput
          source="paniers"
          reference="Panier"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PanierTitle} />
        </ReferenceArrayInput>
        <TextInput label="type_commerce" source="typeCommerce" />
        <ReferenceInput
          source="utilisateur.id"
          reference="Utilisateur"
          label="utilisateur"
        >
          <SelectInput optionText={UtilisateurTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
