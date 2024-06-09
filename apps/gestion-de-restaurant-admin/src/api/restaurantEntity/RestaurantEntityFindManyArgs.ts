import { RestaurantEntityWhereInput } from "./RestaurantEntityWhereInput";
import { RestaurantEntityOrderByInput } from "./RestaurantEntityOrderByInput";

export type RestaurantEntityFindManyArgs = {
  where?: RestaurantEntityWhereInput;
  orderBy?: Array<RestaurantEntityOrderByInput>;
  skip?: number;
  take?: number;
};
