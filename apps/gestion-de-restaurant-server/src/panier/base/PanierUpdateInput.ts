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
import { AnnulationUpdateManyWithoutPaniersInput } from "./AnnulationUpdateManyWithoutPaniersInput";
import {
  ValidateNested,
  IsOptional,
  IsNumber,
  IsString,
  IsInt,
} from "class-validator";
import { Type } from "class-transformer";
import { CancellationUpdateManyWithoutPaniersInput } from "./CancellationUpdateManyWithoutPaniersInput";
import { IsJSONValue } from "../../validators";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";
import { RestaurantWhereUniqueInput } from "../../restaurant/base/RestaurantWhereUniqueInput";
import { SaleUpdateManyWithoutPaniersInput } from "./SaleUpdateManyWithoutPaniersInput";
import { VenteUpdateManyWithoutPaniersInput } from "./VenteUpdateManyWithoutPaniersInput";

@InputType()
class PanierUpdateInput {
  @ApiProperty({
    required: false,
    type: () => AnnulationUpdateManyWithoutPaniersInput,
  })
  @ValidateNested()
  @Type(() => AnnulationUpdateManyWithoutPaniersInput)
  @IsOptional()
  @Field(() => AnnulationUpdateManyWithoutPaniersInput, {
    nullable: true,
  })
  annulations?: AnnulationUpdateManyWithoutPaniersInput;

  @ApiProperty({
    required: false,
    type: () => CancellationUpdateManyWithoutPaniersInput,
  })
  @ValidateNested()
  @Type(() => CancellationUpdateManyWithoutPaniersInput)
  @IsOptional()
  @Field(() => CancellationUpdateManyWithoutPaniersInput, {
    nullable: true,
  })
  cancellations?: CancellationUpdateManyWithoutPaniersInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  co2Evite?: number | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description?: string | null;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  listeRepas?: InputJsonValue;

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
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  nombreRestants?: number | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  nombreVendus?: number | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  prix?: number | null;

  @ApiProperty({
    required: false,
    type: () => RestaurantWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => RestaurantWhereUniqueInput)
  @IsOptional()
  @Field(() => RestaurantWhereUniqueInput, {
    nullable: true,
  })
  restaurant?: RestaurantWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => SaleUpdateManyWithoutPaniersInput,
  })
  @ValidateNested()
  @Type(() => SaleUpdateManyWithoutPaniersInput)
  @IsOptional()
  @Field(() => SaleUpdateManyWithoutPaniersInput, {
    nullable: true,
  })
  sales?: SaleUpdateManyWithoutPaniersInput;

  @ApiProperty({
    required: false,
    type: () => VenteUpdateManyWithoutPaniersInput,
  })
  @ValidateNested()
  @Type(() => VenteUpdateManyWithoutPaniersInput)
  @IsOptional()
  @Field(() => VenteUpdateManyWithoutPaniersInput, {
    nullable: true,
  })
  ventes?: VenteUpdateManyWithoutPaniersInput;
}

export { PanierUpdateInput as PanierUpdateInput };
