/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  RestaurantEntity as PrismaRestaurantEntity,
  Utilisateur as PrismaUtilisateur,
} from "@prisma/client";

export class RestaurantEntityServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.RestaurantEntityCountArgs, "select">
  ): Promise<number> {
    return this.prisma.restaurantEntity.count(args);
  }

  async restaurantEntities<T extends Prisma.RestaurantEntityFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.RestaurantEntityFindManyArgs>
  ): Promise<PrismaRestaurantEntity[]> {
    return this.prisma.restaurantEntity.findMany<Prisma.RestaurantEntityFindManyArgs>(
      args
    );
  }
  async restaurantEntity<T extends Prisma.RestaurantEntityFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.RestaurantEntityFindUniqueArgs>
  ): Promise<PrismaRestaurantEntity | null> {
    return this.prisma.restaurantEntity.findUnique(args);
  }
  async createRestaurantEntity<T extends Prisma.RestaurantEntityCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.RestaurantEntityCreateArgs>
  ): Promise<PrismaRestaurantEntity> {
    return this.prisma.restaurantEntity.create<T>(args);
  }
  async updateRestaurantEntity<T extends Prisma.RestaurantEntityUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.RestaurantEntityUpdateArgs>
  ): Promise<PrismaRestaurantEntity> {
    return this.prisma.restaurantEntity.update<T>(args);
  }
  async deleteRestaurantEntity<T extends Prisma.RestaurantEntityDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.RestaurantEntityDeleteArgs>
  ): Promise<PrismaRestaurantEntity> {
    return this.prisma.restaurantEntity.delete(args);
  }

  async getUtilisateur(parentId: string): Promise<PrismaUtilisateur | null> {
    return this.prisma.restaurantEntity
      .findUnique({
        where: { id: parentId },
      })
      .utilisateur();
  }
}