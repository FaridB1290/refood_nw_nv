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

import { UtilisateurTitle } from "../utilisateur/UtilisateurTitle";

export const RestaurantEntityCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="localisation_lat" source="localisationLat" />
        <NumberInput label="localisation_lon" source="localisationLon" />
        <TextInput label="nom" source="nom" />
        <TextInput label="numero_telephone" source="numeroTelephone" />
        <TextInput label="type_commerce" source="typeCommerce" />
        <ReferenceInput
          source="utilisateur.id"
          reference="Utilisateur"
          label="utilisateur_"
        >
          <SelectInput optionText={UtilisateurTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
