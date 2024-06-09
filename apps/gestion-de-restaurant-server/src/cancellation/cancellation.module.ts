import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CancellationModuleBase } from "./base/cancellation.module.base";
import { CancellationService } from "./cancellation.service";
import { CancellationController } from "./cancellation.controller";
import { CancellationResolver } from "./cancellation.resolver";

@Module({
  imports: [CancellationModuleBase, forwardRef(() => AuthModule)],
  controllers: [CancellationController],
  providers: [CancellationService, CancellationResolver],
  exports: [CancellationService],
})
export class CancellationModule {}
