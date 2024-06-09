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
import { RemboursementWhereInput } from "./RemboursementWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class RemboursementListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => RemboursementWhereInput,
  })
  @ValidateNested()
  @Type(() => RemboursementWhereInput)
  @IsOptional()
  @Field(() => RemboursementWhereInput, {
    nullable: true,
  })
  every?: RemboursementWhereInput;

  @ApiProperty({
    required: false,
    type: () => RemboursementWhereInput,
  })
  @ValidateNested()
  @Type(() => RemboursementWhereInput)
  @IsOptional()
  @Field(() => RemboursementWhereInput, {
    nullable: true,
  })
  some?: RemboursementWhereInput;

  @ApiProperty({
    required: false,
    type: () => RemboursementWhereInput,
  })
  @ValidateNested()
  @Type(() => RemboursementWhereInput)
  @IsOptional()
  @Field(() => RemboursementWhereInput, {
    nullable: true,
  })
  none?: RemboursementWhereInput;
}
export { RemboursementListRelationFilter as RemboursementListRelationFilter };
