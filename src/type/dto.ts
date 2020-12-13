import { InputType, OmitType, PartialType, PickType } from "@nestjs/graphql";
import { Type } from "./schema";

@InputType()
export class AddTypeDTO extends PartialType(
  PickType(Type, ['name'] as const), InputType
) { }

@InputType()
export class UpdateTypeDTO extends PartialType(
  OmitType(Type, ['updated'] as const), InputType
) { }

@InputType()
export class DeleteTypeDTO extends PartialType(
  PickType(Type, ['id'] as const), InputType
) { }
