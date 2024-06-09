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
  Remboursement as PrismaRemboursement,
  Vente as PrismaVente,
} from "@prisma/client";

export class RemboursementServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.RemboursementCountArgs, "select">
  ): Promise<number> {
    return this.prisma.remboursement.count(args);
  }

  async remboursements<T extends Prisma.RemboursementFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.RemboursementFindManyArgs>
  ): Promise<PrismaRemboursement[]> {
    return this.prisma.remboursement.findMany<Prisma.RemboursementFindManyArgs>(
      args
    );
  }
  async remboursement<T extends Prisma.RemboursementFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.RemboursementFindUniqueArgs>
  ): Promise<PrismaRemboursement | null> {
    return this.prisma.remboursement.findUnique(args);
  }
  async createRemboursement<T extends Prisma.RemboursementCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.RemboursementCreateArgs>
  ): Promise<PrismaRemboursement> {
    return this.prisma.remboursement.create<T>(args);
  }
  async updateRemboursement<T extends Prisma.RemboursementUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.RemboursementUpdateArgs>
  ): Promise<PrismaRemboursement> {
    return this.prisma.remboursement.update<T>(args);
  }
  async deleteRemboursement<T extends Prisma.RemboursementDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.RemboursementDeleteArgs>
  ): Promise<PrismaRemboursement> {
    return this.prisma.remboursement.delete(args);
  }

  async getVente(parentId: string): Promise<PrismaVente | null> {
    return this.prisma.remboursement
      .findUnique({
        where: { id: parentId },
      })
      .vente();
  }
}