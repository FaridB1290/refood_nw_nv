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
import { AnnulationListRelationFilter } from "../../annulation/base/AnnulationListRelationFilter";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { CancellationListRelationFilter } from "../../cancellation/base/CancellationListRelationFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { RestaurantWhereUniqueInput } from "../../restaurant/base/RestaurantWhereUniqueInput";
import { SaleListRelationFilter } from "../../sale/base/SaleListRelationFilter";
import { VenteListRelationFilter } from "../../vente/base/VenteListRelationFilter";

@InputType()
class PanierWhereInput {
  @ApiProperty({
    required: false,
    type: () => AnnulationListRelationFilter,
  })
  @ValidateNested()
  @Type(() => AnnulationListRelationFilter)
  @IsOptional()
  @Field(() => AnnulationListRelationFilter, {
    nullable: true,
  })
  annulations?: AnnulationListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => CancellationListRelationFilter,
  })
  @ValidateNested()
  @Type(() => CancellationListRelationFilter)
  @IsOptional()
  @Field(() => CancellationListRelationFilter, {
    nullable: true,
  })
  cancellations?: CancellationListRelationFilter;

  @ApiProperty({
    required: false,
    type: FloatNullableFilter,
  })
  @Type(() => FloatNullableFilter)
  @IsOptional()
  @Field(() => FloatNullableFilter, {
    nullable: true,
  })
  co2Evite?: FloatNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  description?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: JsonFilter,
  })
  @Type(() => JsonFilter)
  @IsOptional()
  @Field(() => JsonFilter, {
    nullable: true,
  })
  listeRepas?: JsonFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  nom?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: IntNullableFilter,
  })
  @Type(() => IntNullableFilter)
  @IsOptional()
  @Field(() => IntNullableFilter, {
    nullable: true,
  })
  nombreRestants?: IntNullableFilter;

  @ApiProperty({
    required: false,
    type: IntNullableFilter,
  })
  @Type(() => IntNullableFilter)
  @IsOptional()
  @Field(() => IntNullableFilter, {
    nullable: true,
  })
  nombreVendus?: IntNullableFilter;

  @ApiProperty({
    required: false,
    type: FloatNullableFilter,
  })
  @Type(() => FloatNullableFilter)
  @IsOptional()
  @Field(() => FloatNullableFilter, {
    nullable: true,
  })
  prix?: FloatNullableFilter;

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
  restaurant?: RestaurantWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => SaleListRelationFilter,
  })
  @ValidateNested()
  @Type(() => SaleListRelationFilter)
  @IsOptional()
  @Field(() => SaleListRelationFilter, {
    nullable: true,
  })
  sales?: SaleListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => VenteListRelationFilter,
  })
  @ValidateNested()
  @Type(() => VenteListRelationFilter)
  @IsOptional()
  @Field(() => VenteListRelationFilter, {
    nullable: true,
  })
  ventes?: VenteListRelationFilter;
}

export { PanierWhereInput as PanierWhereInput };
