import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { VenteModuleBase } from "./base/vente.module.base";
import { VenteService } from "./vente.service";
import { VenteController } from "./vente.controller";
import { VenteResolver } from "./vente.resolver";

@Module({
  imports: [VenteModuleBase, forwardRef(() => AuthModule)],
  controllers: [VenteController],
  providers: [VenteService, VenteResolver],
  exports: [VenteService],
})
export class VenteModule {}
