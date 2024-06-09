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
import { AnnulationWhereInput } from "./AnnulationWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { AnnulationOrderByInput } from "./AnnulationOrderByInput";

@ArgsType()
class AnnulationFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => AnnulationWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => AnnulationWhereInput, { nullable: true })
  @Type(() => AnnulationWhereInput)
  where?: AnnulationWhereInput;

  @ApiProperty({
    required: false,
    type: [AnnulationOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [AnnulationOrderByInput], { nullable: true })
  @Type(() => AnnulationOrderByInput)
  orderBy?: Array<AnnulationOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { AnnulationFindManyArgs as AnnulationFindManyArgs };
