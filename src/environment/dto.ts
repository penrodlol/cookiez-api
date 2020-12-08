import { InputType, OmitType, PartialType, PickType } from "@nestjs/graphql";
import { Environment } from "./schema";

@InputType()
export class AddEnvironmentDTO extends PartialType(
  OmitType(Environment, ['id', 'updated'] as const), InputType
) { }

@InputType()
export class UpdateEnvironmentDTO extends PartialType(
  OmitType(Environment, ['updated'] as const), InputType
) { }

@InputType()
export class DeleteEnvironmentDTO extends PartialType(
  PickType(Environment, ['id'] as const), InputType
) { }
