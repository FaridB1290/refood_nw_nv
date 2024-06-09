/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { RemboursementWhereUniqueInput } from "./RemboursementWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { RemboursementUpdateInput } from "./RemboursementUpdateInput";

@ArgsType()
class UpdateRemboursementArgs {
  @ApiProperty({
    required: true,
    type: () => RemboursementWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => RemboursementWhereUniqueInput)
  @Field(() => RemboursementWhereUniqueInput, { nullable: false })
  where!: RemboursementWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => RemboursementUpdateInput,
  })
  @ValidateNested()
  @Type(() => RemboursementUpdateInput)
  @Field(() => RemboursementUpdateInput, { nullable: false })
  data!: RemboursementUpdateInput;
}

export { UpdateRemboursementArgs as UpdateRemboursementArgs };