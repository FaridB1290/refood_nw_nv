import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { AnnulationTitle } from "../annulation/AnnulationTitle";
import { CancellationTitle } from "../cancellation/CancellationTitle";
import { RestaurantTitle } from "../restaurant/RestaurantTitle";
import { SaleTitle } from "../sale/SaleTitle";
import { VenteTitle } from "../vente/VenteTitle";

export const PanierCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="annulations"
          reference="Annulation"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AnnulationTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="cancellations"
          reference="Cancellation"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CancellationTitle} />
        </ReferenceArrayInput>
        <NumberInput label="co2_evite" source="co2Evite" />
        <TextInput label="description" source="description" />
        <div />
        <TextInput label="nom" source="nom" />
        <NumberInput step={1} label="nombre_restants" source="nombreRestants" />
        <NumberInput step={1} label="nombre_vendus" source="nombreVendus" />
        <NumberInput label="prix" source="prix" />
        <ReferenceInput
          source="restaurant.id"
          reference="Restaurant"
          label="restaurant"
        >
          <SelectInput optionText={RestaurantTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="sales"
          reference="Sale"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SaleTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="ventes"
          reference="Vente"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={VenteTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
