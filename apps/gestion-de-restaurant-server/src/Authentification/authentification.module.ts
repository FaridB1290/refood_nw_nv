import { Module } from "@nestjs/common";
import { AuthentificationService } from "./authentification.service";
import { AuthentificationController } from "./authentification.controller";
import { AuthentificationResolver } from "./authentification.resolver";

@Module({
  controllers: [AuthentificationController],
  providers: [AuthentificationService, AuthentificationResolver],
  exports: [AuthentificationService],
})
export class AuthentificationModule {}
