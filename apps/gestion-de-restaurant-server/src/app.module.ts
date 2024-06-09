import { Module } from "@nestjs/common";
import { UtilisateurModule } from "./utilisateur/utilisateur.module";
import { RestaurantModule } from "./restaurant/restaurant.module";
import { RemboursementModule } from "./remboursement/remboursement.module";
import { PanierModule } from "./panier/panier.module";
import { VenteModule } from "./vente/vente.module";
import { AnnulationModule } from "./annulation/annulation.module";
import { UserModule } from "./user/user.module";
import { FoodBasketModule } from "./foodBasket/foodBasket.module";
import { RestaurantEntityModule } from "./restaurantEntity/restaurantEntity.module";
import { SaleModule } from "./sale/sale.module";
import { CancellationModule } from "./cancellation/cancellation.module";
import { RefundModule } from "./refund/refund.module";
import { AnnulationsModule } from "./Annulations/annulations.module";
import { AuthentificationModule } from "./Authentification/authentification.module";
import { PaniersModule } from "./Paniers/paniers.module";
import { RemboursementsModule } from "./Remboursements/remboursements.module";
import { RestaurantsModule } from "./Restaurants/restaurants.module";
import { UtilisateursModule } from "./Utilisateurs/utilisateurs.module";
import { VentesModule } from "./Ventes/ventes.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

import { ACLModule } from "./auth/acl.module";
import { AuthModule } from "./auth/auth.module";

@Module({
  controllers: [],
  imports: [
    ACLModule,
    AuthModule,
    UtilisateurModule,
    RestaurantModule,
    RemboursementModule,
    PanierModule,
    VenteModule,
    AnnulationModule,
    UserModule,
    FoodBasketModule,
    RestaurantEntityModule,
    SaleModule,
    CancellationModule,
    RefundModule,
    AnnulationsModule,
    AuthentificationModule,
    PaniersModule,
    RemboursementsModule,
    RestaurantsModule,
    UtilisateursModule,
    VentesModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
