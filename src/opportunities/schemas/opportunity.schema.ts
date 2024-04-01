import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import {
  OpportunityTransaction,
  OpportunityTransactionSchema,
} from './opportunity-transaction.schema';

export enum OpportunityStatus {
  Active = 'Active',
  Expired = 'Expired',
}

export enum OpportunityType {
  Normal = 'Normal',
  Triangle = 'Triangle',
  P2P = 'P2P',
}

@Schema({ timestamps: true })
export class Opportunity {
  @Prop({ type: [OpportunityTransactionSchema] })
  transactions: OpportunityTransaction[];

  @Prop({ required: true })
  profitPerUnit: number;

  @Prop({ required: true })
  profitPercentage: number;

  @Prop({ type: Date, default: Date.now })
  createdAt: Date;

  @Prop({ type: Date, default: Date.now })
  updatedAt: Date;
}

export type OpportunityDocument = HydratedDocument<Opportunity>;

const schema = SchemaFactory.createForClass(Opportunity);

schema.methods.toJSON = function () {
  const obj = this.toObject();
  delete obj.__v;
  return {
    ...obj,
    _id: undefined,
    id: obj._id,
  };
};

export const OpportunitySchema = schema;
