import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UtilisateurList } from "./utilisateur/UtilisateurList";
import { UtilisateurCreate } from "./utilisateur/UtilisateurCreate";
import { UtilisateurEdit } from "./utilisateur/UtilisateurEdit";
import { UtilisateurShow } from "./utilisateur/UtilisateurShow";
import { RestaurantList } from "./restaurant/RestaurantList";
import { RestaurantCreate } from "./restaurant/RestaurantCreate";
import { RestaurantEdit } from "./restaurant/RestaurantEdit";
import { RestaurantShow } from "./restaurant/RestaurantShow";
import { RemboursementList } from "./remboursement/RemboursementList";
import { RemboursementCreate } from "./remboursement/RemboursementCreate";
import { RemboursementEdit } from "./remboursement/RemboursementEdit";
import { RemboursementShow } from "./remboursement/RemboursementShow";
import { PanierList } from "./panier/PanierList";
import { PanierCreate } from "./panier/PanierCreate";
import { PanierEdit } from "./panier/PanierEdit";
import { PanierShow } from "./panier/PanierShow";
import { VenteList } from "./vente/VenteList";
import { VenteCreate } from "./vente/VenteCreate";
import { VenteEdit } from "./vente/VenteEdit";
import { VenteShow } from "./vente/VenteShow";
import { AnnulationList } from "./annulation/AnnulationList";
import { AnnulationCreate } from "./annulation/AnnulationCreate";
import { AnnulationEdit } from "./annulation/AnnulationEdit";
import { AnnulationShow } from "./annulation/AnnulationShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { FoodBasketList } from "./foodBasket/FoodBasketList";
import { FoodBasketCreate } from "./foodBasket/FoodBasketCreate";
import { FoodBasketEdit } from "./foodBasket/FoodBasketEdit";
import { FoodBasketShow } from "./foodBasket/FoodBasketShow";
import { RestaurantEntityList } from "./restaurantEntity/RestaurantEntityList";
import { RestaurantEntityCreate } from "./restaurantEntity/RestaurantEntityCreate";
import { RestaurantEntityEdit } from "./restaurantEntity/RestaurantEntityEdit";
import { RestaurantEntityShow } from "./restaurantEntity/RestaurantEntityShow";
import { SaleList } from "./sale/SaleList";
import { SaleCreate } from "./sale/SaleCreate";
import { SaleEdit } from "./sale/SaleEdit";
import { SaleShow } from "./sale/SaleShow";
import { CancellationList } from "./cancellation/CancellationList";
import { CancellationCreate } from "./cancellation/CancellationCreate";
import { CancellationEdit } from "./cancellation/CancellationEdit";
import { CancellationShow } from "./cancellation/CancellationShow";
import { RefundList } from "./refund/RefundList";
import { RefundCreate } from "./refund/RefundCreate";
import { RefundEdit } from "./refund/RefundEdit";
import { RefundShow } from "./refund/RefundShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Gestion de Restaurant"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Utilisateur"
          list={UtilisateurList}
          edit={UtilisateurEdit}
          create={UtilisateurCreate}
          show={UtilisateurShow}
        />
        <Resource
          name="Restaurant"
          list={RestaurantList}
          edit={RestaurantEdit}
          create={RestaurantCreate}
          show={RestaurantShow}
        />
        <Resource
          name="Remboursement"
          list={RemboursementList}
          edit={RemboursementEdit}
          create={RemboursementCreate}
          show={RemboursementShow}
        />
        <Resource
          name="Panier"
          list={PanierList}
          edit={PanierEdit}
          create={PanierCreate}
          show={PanierShow}
        />
        <Resource
          name="Vente"
          list={VenteList}
          edit={VenteEdit}
          create={VenteCreate}
          show={VenteShow}
        />
        <Resource
          name="Annulation"
          list={AnnulationList}
          edit={AnnulationEdit}
          create={AnnulationCreate}
          show={AnnulationShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="FoodBasket"
          list={FoodBasketList}
          edit={FoodBasketEdit}
          create={FoodBasketCreate}
          show={FoodBasketShow}
        />
        <Resource
          name="RestaurantEntity"
          list={RestaurantEntityList}
          edit={RestaurantEntityEdit}
          create={RestaurantEntityCreate}
          show={RestaurantEntityShow}
        />
        <Resource
          name="Sale"
          list={SaleList}
          edit={SaleEdit}
          create={SaleCreate}
          show={SaleShow}
        />
        <Resource
          name="Cancellation"
          list={CancellationList}
          edit={CancellationEdit}
          create={CancellationCreate}
          show={CancellationShow}
        />
        <Resource
          name="Refund"
          list={RefundList}
          edit={RefundEdit}
          create={RefundCreate}
          show={RefundShow}
        />
      </Admin>
    </div>
  );
};

export default App;
