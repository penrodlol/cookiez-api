import { Field, ObjectType, PartialType } from "@nestjs/graphql";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';
import { DEFAULT_FIELD_OPTIONS, DEFAULT_PROP_OPTIONS, DEFAULT_SCHEMA, DEFAULT_SCHEMA_OPTIONS } from "../const";

export type CookieDocument = Cookie & Document;

@Schema(DEFAULT_SCHEMA_OPTIONS)
@ObjectType()
export class Cookie extends PartialType(DEFAULT_SCHEMA) {
  @Field(DEFAULT_FIELD_OPTIONS)
  @Prop(DEFAULT_PROP_OPTIONS)
  environment: string;

  @Field(DEFAULT_FIELD_OPTIONS)
  @Prop(DEFAULT_PROP_OPTIONS)
  type: string;

  @Field(DEFAULT_FIELD_OPTIONS)
  @Prop(DEFAULT_PROP_OPTIONS)
  snippet: string;
}

export const CookieSchema = SchemaFactory.createForClass(Cookie);
