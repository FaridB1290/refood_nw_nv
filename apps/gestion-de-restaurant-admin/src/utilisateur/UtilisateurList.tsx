import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const UtilisateurList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Utilisateurs"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="email" source="email" />
        <TextField label="ID" source="id" />
        <TextField label="localisation_lat" source="localisationLat" />
        <TextField label="localisation_lon" source="localisationLon" />
        <TextField label="mot_de_passe" source="motDePasse" />
        <TextField label="nom" source="nom" />
        <TextField label="nom_entite_juridique" source="nomEntiteJuridique" />
        <TextField label="numero_telephone" source="numeroTelephone" />
        <TextField label="numero_tva" source="numeroTva" />
        <TextField label="type_commerce" source="typeCommerce" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
