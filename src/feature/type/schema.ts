import { Field, ObjectType, PartialType } from "@nestjs/graphql";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';
import { DEFAULT_FIELD_OPTIONS, DEFAULT_PROP_OPTIONS, DEFAULT_SCHEMA, DEFAULT_SCHEMA_OPTIONS } from "../../shared/const";

export type TypeDocument = Type & Document;

@Schema(DEFAULT_SCHEMA_OPTIONS)
@ObjectType()
export class Type extends PartialType(DEFAULT_SCHEMA) {
  @Field(DEFAULT_FIELD_OPTIONS)
  @Prop(DEFAULT_PROP_OPTIONS)
  name: string;
}

export const TypeSchema = SchemaFactory.createForClass(Type);
