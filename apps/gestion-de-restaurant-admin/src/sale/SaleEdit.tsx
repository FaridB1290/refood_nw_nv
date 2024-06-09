import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  DateTimeInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { PanierTitle } from "../panier/PanierTitle";

export const SaleEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="co2_evite" source="co2Evite" />
        <DateTimeInput label="date_vente" source="dateVente" />
        <TextInput label="methode_paiement" source="methodePaiement" />
        <ReferenceInput source="panier.id" reference="Panier" label="panier_">
          <SelectInput optionText={PanierTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="quantite_vendue" source="quantiteVendue" />
      </SimpleForm>
    </Edit>
  );
};
