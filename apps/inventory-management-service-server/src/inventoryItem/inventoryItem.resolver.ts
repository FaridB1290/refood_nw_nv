import * as graphql from "@nestjs/graphql";
import { InventoryItemResolverBase } from "./base/inventoryItem.resolver.base";
import { InventoryItem } from "./base/InventoryItem";
import { InventoryItemService } from "./inventoryItem.service";

@graphql.Resolver(() => InventoryItem)
export class InventoryItemResolver extends InventoryItemResolverBase {
  constructor(protected readonly service: InventoryItemService) {
    super(service);
  }
}
