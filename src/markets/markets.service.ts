import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Market } from './schemas/market.schema';
import { Model } from 'mongoose';
import { defaultMarkets } from './markets.type';

@Injectable()
export class MarketsService implements OnModuleInit {
  private readonly logger = new Logger(MarketsService.name);
  constructor(
    @InjectModel(Market.name)
    private marketModel: Model<Market>,
  ) {}

  async createDefaultMarkets() {
    const markets = await this.marketModel.find().exec();

    if (markets.length === 0) {
      await this.marketModel.insertMany(defaultMarkets);
      this.logger.debug('Default markets created');
    }
  }

  async onModuleInit() {
    await this.createDefaultMarkets();
  }
}
