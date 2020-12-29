import { Optional } from "@nestjs/common";
import { Field, FieldOptions, ID, ObjectType } from "@nestjs/graphql";
import { Prop, PropOptions, SchemaOptions } from "@nestjs/mongoose";
import { IsMongoId } from "class-validator";
import { ObjectID } from "mongodb";

export const DEFAULT_SCHEMA_OPTIONS: SchemaOptions = {
  timestamps: {
    updatedAt: 'updated',
    createdAt: false,
  },
}

export const DEFAULT_PROP_OPTIONS: PropOptions = {
  required: true,
  trim: true,
}

export const DEFAULT_FIELD_OPTIONS: FieldOptions = {
  nullable: false,
}

@ObjectType()
export class DEFAULT_SCHEMA {
  @Field(() => ID, DEFAULT_FIELD_OPTIONS)
  @Optional()
  @IsMongoId()
  id: ObjectID;

  @Field(DEFAULT_FIELD_OPTIONS)
  updated: Date;
}
