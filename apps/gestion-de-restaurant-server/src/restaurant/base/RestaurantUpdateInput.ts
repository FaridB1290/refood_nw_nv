/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { FoodBasketUpdateManyWithoutRestaurantsInput } from "./FoodBasketUpdateManyWithoutRestaurantsInput";
import {
  ValidateNested,
  IsOptional,
  IsNumber,
  IsString,
} from "class-validator";
import { Type } from "class-transformer";
import { PanierUpdateManyWithoutRestaurantsInput } from "./PanierUpdateManyWithoutRestaurantsInput";
import { UtilisateurWhereUniqueInput } from "../../utilisateur/base/UtilisateurWhereUniqueInput";

@InputType()
class RestaurantUpdateInput {
  @ApiProperty({
    required: false,
    type: () => FoodBasketUpdateManyWithoutRestaurantsInput,
  })
  @ValidateNested()
  @Type(() => FoodBasketUpdateManyWithoutRestaurantsInput)
  @IsOptional()
  @Field(() => FoodBasketUpdateManyWithoutRestaurantsInput, {
    nullable: true,
  })
  foodBaskets?: FoodBasketUpdateManyWithoutRestaurantsInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  localisationLat?: number | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  localisationLon?: number | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  nom?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  numeroTelephone?: string | null;

  @ApiProperty({
    required: false,
    type: () => PanierUpdateManyWithoutRestaurantsInput,
  })
  @ValidateNested()
  @Type(() => PanierUpdateManyWithoutRestaurantsInput)
  @IsOptional()
  @Field(() => PanierUpdateManyWithoutRestaurantsInput, {
    nullable: true,
  })
  paniers?: PanierUpdateManyWithoutRestaurantsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  typeCommerce?: string | null;

  @ApiProperty({
    required: false,
    type: () => UtilisateurWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UtilisateurWhereUniqueInput)
  @IsOptional()
  @Field(() => UtilisateurWhereUniqueInput, {
    nullable: true,
  })
  utilisateur?: UtilisateurWhereUniqueInput | null;
}

export { RestaurantUpdateInput as RestaurantUpdateInput };
