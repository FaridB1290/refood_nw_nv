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
import {
  IsNumber,
  IsOptional,
  IsDate,
  IsString,
  ValidateNested,
  IsInt,
} from "class-validator";
import { Type } from "class-transformer";
import { PanierWhereUniqueInput } from "../../panier/base/PanierWhereUniqueInput";

@InputType()
class SaleCreateInput {
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
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  dateVente?: Date | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  methodePaiement?: string | null;

  @ApiProperty({
    required: false,
    type: () => PanierWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PanierWhereUniqueInput)
  @IsOptional()
  @Field(() => PanierWhereUniqueInput, {
    nullable: true,
  })
  panier?: PanierWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  quantiteVendue?: number | null;
}

export { SaleCreateInput as SaleCreateInput };
