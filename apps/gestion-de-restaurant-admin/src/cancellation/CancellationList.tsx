import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { PANIER_TITLE_FIELD } from "../panier/PanierTitle";

export const CancellationList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Cancellations"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="date_annulation" source="dateAnnulation" />
        <TextField label="ID" source="id" />
        <ReferenceField label="panier_" source="panier.id" reference="Panier">
          <TextField source={PANIER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="raison" source="raison" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
