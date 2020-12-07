import { Optional } from "@nestjs/common";
import { Field, FieldOptions, ID, ObjectType } from "@nestjs/graphql";
import { Prop, PropOptions, Schema, SchemaFactory } from "@nestjs/mongoose";
import { IsMongoId } from 'class-validator';
import { ObjectID } from "mongodb";
import { Document } from 'mongoose';

const propOptions: PropOptions = {
  required: true,
  trim: true,
};

const fieldOptions: FieldOptions = {
  nullable: false
};

export type CookieDocument = Cookie & Document;

@Schema({ timestamps: {
  updatedAt: 'updated',
  createdAt: false
}})
@ObjectType()
export class Cookie {
  @Field(() => ID, fieldOptions)
  @Optional()
  @IsMongoId()
  id: ObjectID;

  @Field(fieldOptions)
  @Prop(propOptions)
  environment: string;

  @Field(fieldOptions)
  @Prop(propOptions)
  type: string;

  @Field(fieldOptions)
  @Prop(propOptions)
  snippet: string;

  @Field(fieldOptions)
  updated: Date;
}

export const CookieSchema = SchemaFactory.createForClass(Cookie);
