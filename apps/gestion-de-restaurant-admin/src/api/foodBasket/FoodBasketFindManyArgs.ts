import { FoodBasketWhereInput } from "./FoodBasketWhereInput";
import { FoodBasketOrderByInput } from "./FoodBasketOrderByInput";

export type FoodBasketFindManyArgs = {
  where?: FoodBasketWhereInput;
  orderBy?: Array<FoodBasketOrderByInput>;
  skip?: number;
  take?: number;
};
