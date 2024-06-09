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
import { VENTE_TITLE_FIELD } from "../vente/VenteTitle";

export const RefundList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Refunds"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="date_remboursement" source="dateRemboursement" />
        <TextField label="ID" source="id" />
        <TextField label="montant" source="montant" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="vente_" source="vente.id" reference="Vente">
          <TextField source={VENTE_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
