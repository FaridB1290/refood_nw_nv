import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { RemboursementModuleBase } from "./base/remboursement.module.base";
import { RemboursementService } from "./remboursement.service";
import { RemboursementController } from "./remboursement.controller";
import { RemboursementResolver } from "./remboursement.resolver";

@Module({
  imports: [RemboursementModuleBase, forwardRef(() => AuthModule)],
  controllers: [RemboursementController],
  providers: [RemboursementService, RemboursementResolver],
  exports: [RemboursementService],
})
export class RemboursementModule {}
