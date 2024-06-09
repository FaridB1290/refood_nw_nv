import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PanierModuleBase } from "./base/panier.module.base";
import { PanierService } from "./panier.service";
import { PanierController } from "./panier.controller";
import { PanierResolver } from "./panier.resolver";

@Module({
  imports: [PanierModuleBase, forwardRef(() => AuthModule)],
  controllers: [PanierController],
  providers: [PanierService, PanierResolver],
  exports: [PanierService],
})
export class PanierModule {}
