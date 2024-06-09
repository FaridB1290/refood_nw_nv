import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AnnulationModuleBase } from "./base/annulation.module.base";
import { AnnulationService } from "./annulation.service";
import { AnnulationController } from "./annulation.controller";
import { AnnulationResolver } from "./annulation.resolver";

@Module({
  imports: [AnnulationModuleBase, forwardRef(() => AuthModule)],
  controllers: [AnnulationController],
  providers: [AnnulationService, AnnulationResolver],
  exports: [AnnulationService],
})
export class AnnulationModule {}
