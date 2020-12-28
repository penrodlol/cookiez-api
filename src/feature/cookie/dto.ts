import { InputType, OmitType, PartialType, PickType } from "@nestjs/graphql";
import { Cookie } from "./schema";

@InputType()
export class AddCookieDTO extends PartialType(
  OmitType(Cookie, ['id', 'updated'] as const), InputType
) { }

@InputType()
export class UpdateCookieDTO extends PartialType(
  OmitType(Cookie, ['updated'] as const), InputType
) { }

@InputType()
export class DeleteCookieDTO extends PartialType(
  PickType(Cookie, ['id'] as const), InputType
) { }
