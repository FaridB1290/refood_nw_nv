import { Module } from "@nestjs/common";
import { RemboursementsService } from "./remboursements.service";
import { RemboursementsController } from "./remboursements.controller";
import { RemboursementsResolver } from "./remboursements.resolver";

@Module({
  controllers: [RemboursementsController],
  providers: [RemboursementsService, RemboursementsResolver],
  exports: [RemboursementsService],
})
export class RemboursementsModule {}
