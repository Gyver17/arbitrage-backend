import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export enum OpportunityTransactionType {
  Buy = 'Buy',
  Sell = 'Sell',
}

@Schema({ timestamps: true, id: false })
export class OpportunityTransaction {
  @Prop({ type: mongoose.Types.ObjectId, ref: 'Market', required: true })
  market: mongoose.Types.ObjectId;

  @Prop({ required: true })
  pair: string;

  @Prop({ required: true, enum: OpportunityTransactionType })
  type: OpportunityTransactionType;

  @Prop({ required: true })
  price: number;
}

export type OpportunityTransactionDocument =
  HydratedDocument<OpportunityTransaction>;

const schema = SchemaFactory.createForClass(OpportunityTransaction);

// schema.methods.toJSON = function () {
//   const obj = this.toObject();
//   delete obj.__v;
//   return {
//     ...obj,
//     _id: undefined,
//     id: obj._id,
//   };
// };

export const OpportunityTransactionSchema = schema;
