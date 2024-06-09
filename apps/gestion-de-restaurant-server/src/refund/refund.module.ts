import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { RefundModuleBase } from "./base/refund.module.base";
import { RefundService } from "./refund.service";
import { RefundController } from "./refund.controller";
import { RefundResolver } from "./refund.resolver";

@Module({
  imports: [RefundModuleBase, forwardRef(() => AuthModule)],
  controllers: [RefundController],
  providers: [RefundService, RefundResolver],
  exports: [RefundService],
})
export class RefundModule {}
