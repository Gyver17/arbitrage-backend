import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Currency, CurrencyDocument } from './schemas/currency.schema';
import { defaultCurrencies } from './currencies.type';

@Injectable()
export class CurrenciesService implements OnModuleInit {
  private readonly logger = new Logger(CurrenciesService.name);
  constructor(
    @InjectModel(Currency.name) private currencyModel: Model<CurrencyDocument>,
  ) {}

  async createDefaultCurrencies() {
    const currencies = await this.currencyModel.find().exec();

    if (currencies.length === 0) {
      await this.currencyModel.insertMany(defaultCurrencies);
      this.logger.debug('Default currencies created');
    }
  }

  async onModuleInit() {
    await this.createDefaultCurrencies();
  }
}
