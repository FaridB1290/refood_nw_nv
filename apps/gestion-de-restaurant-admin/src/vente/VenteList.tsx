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
import { PANIER_TITLE_FIELD } from "../panier/PanierTitle";

export const VenteList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Ventes"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="co2_evite" source="co2Evite" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="date_vente" source="dateVente" />
        <TextField label="ID" source="id" />
        <TextField label="methode_paiement" source="methodePaiement" />
        <ReferenceField label="panier" source="panier.id" reference="Panier">
          <TextField source={PANIER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="quantite_vendue" source="quantiteVendue" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
