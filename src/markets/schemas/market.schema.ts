import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export enum MarketStatus {
  Active = 'Active',
  Inactive = 'Inactive',
}

@Schema({ timestamps: true })
export class Market {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, enum: MarketStatus })
  status: MarketStatus;

  @Prop({ required: true })
  tickerRestEndpoint: string;

  @Prop({ required: true })
  image: string;

  @Prop({ required: true })
  website: string;

  @Prop({ type: Date, default: Date.now })
  createdAt: Date;

  @Prop({ type: Date, default: Date.now })
  updatedAt: Date;
}

export type MarketDocument = HydratedDocument<Market>;

const schema = SchemaFactory.createForClass(Market);
schema.methods.toJSON = function () {
  const obj = this.toObject();
  delete obj.__v;
  return {
    ...obj,
    _id: undefined,
    id: obj._id,
  };
};

export const MarketSchema = schema;
