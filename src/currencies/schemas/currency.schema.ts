import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export enum CurrencyStatus {
  Active = 'Active',
  Inactive = 'Inactive',
}

export enum CurrencyType {
  Fiat = 'Fiat',
  Crypto = 'Crypto',
}

@Schema({ timestamps: true })
export class Currency {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  ticker: string;

  @Prop({ required: true, enum: CurrencyStatus })
  status: CurrencyStatus;

  @Prop({ required: true, enum: CurrencyType })
  type: CurrencyType;

  @Prop()
  isStable: boolean;

  @Prop({ required: true })
  image: string;

  @Prop({ type: Date, default: Date.now })
  createdAt: Date;

  @Prop({ type: Date, default: Date.now })
  updatedAt: Date;
}

export type CurrencyDocument = HydratedDocument<Currency>;

const schema = SchemaFactory.createForClass(Currency);

schema.methods.toJSON = function () {
  const obj = this.toObject();
  delete obj.__v;
  return {
    ...obj,
    _id: undefined,
    id: obj._id,
  };
};

export const CurrencySchema = schema;
