import { Module } from "@nestjs/common";
import { UtilisateursService } from "./utilisateurs.service";
import { UtilisateursController } from "./utilisateurs.controller";
import { UtilisateursResolver } from "./utilisateurs.resolver";

@Module({
  controllers: [UtilisateursController],
  providers: [UtilisateursService, UtilisateursResolver],
  exports: [UtilisateursService],
})
export class UtilisateursModule {}
