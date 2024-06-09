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
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { PanierTitle } from "../panier/PanierTitle";
import { RefundTitle } from "../refund/RefundTitle";
import { RemboursementTitle } from "../remboursement/RemboursementTitle";

export const VenteEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="co2_evite" source="co2Evite" />
        <DateTimeInput label="date_vente" source="dateVente" />
        <TextInput label="methode_paiement" source="methodePaiement" />
        <ReferenceInput source="panier.id" reference="Panier" label="panier">
          <SelectInput optionText={PanierTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="quantite_vendue" source="quantiteVendue" />
        <ReferenceArrayInput
          source="refunds"
          reference="Refund"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={RefundTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="remboursements"
          reference="Remboursement"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={RemboursementTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
