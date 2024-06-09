/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { RefundWhereUniqueInput } from "../../refund/base/RefundWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class RefundUpdateManyWithoutVentesInput {
  @Field(() => [RefundWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [RefundWhereUniqueInput],
  })
  connect?: Array<RefundWhereUniqueInput>;

  @Field(() => [RefundWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [RefundWhereUniqueInput],
  })
  disconnect?: Array<RefundWhereUniqueInput>;

  @Field(() => [RefundWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [RefundWhereUniqueInput],
  })
  set?: Array<RefundWhereUniqueInput>;
}

export { RefundUpdateManyWithoutVentesInput as RefundUpdateManyWithoutVentesInput };
