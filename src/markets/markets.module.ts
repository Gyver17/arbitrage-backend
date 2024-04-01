import { Module } from '@nestjs/common';
import { MarketsService } from './markets.service';
import { MarketsController } from './markets.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Market, MarketSchema } from './schemas/market.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Market.name,
        schema: MarketSchema,
      },
    ]),
  ],
  controllers: [MarketsController],
  providers: [MarketsService],
})
export class MarketsModule {}
