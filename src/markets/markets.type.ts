import { Market, MarketStatus } from './schemas/market.schema';

export const defaultMarkets: Market[] = [
  {
    name: 'Binace',
    tickerRestEndpoint:
      'https://api.binance.com/api/v3/ticker/price?symbol=${ticker}',
    image:
      'https://e7.pngegg.com/pngimages/696/485/png-clipart-binance-logo-cryptocurrency-exchange-coin-text-logo.png',
    website: 'https://www.binance.com/',
    status: MarketStatus.Active,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  // {
  //   name: 'Bittrex',
  //   tickerRestEndpoint: 'https://api.bittrex.com/v3/markets/${ticker}/ticker',
  //   image:
  //     'https://assets.weforum.org/organization/image/KPoV1fh1OSzqmvd9PJxtVAp8vmtCFcAE8FSvUWTGxDM.jpg',
  //   website: 'https://global.bittrex.com',
  //   status: MarketStatus.Active,
  //   createdAt: new Date(),
  //   updatedAt: new Date(),
  // },
  {
    name: 'Coinbase',
    tickerRestEndpoint:
      'https://api.exchange.coinbase.com/products/${ticker}/ticker',
    image:
      'https://coinjournal.net/wp-content/uploads/imagecache/2023/04/15/1684165294555-5e4a22c3-cc8a-4040-9f98-88a614f3cecf-smartcrop-720x360.png',
    website: 'https://www.coinbase.com',
    status: MarketStatus.Active,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: 'OKX',
    tickerRestEndpoint:
      'https://www.okex.com/api/v5/market/ticker?instId=${ticker}-SWAP',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfvt_U4lThKAOYZKqYf-M5J4KQPt1e-OHsC9cMEH_-lA&s',
    website: 'https://www.okx.com',
    status: MarketStatus.Active,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  // {
  //   name: 'Gate.io',
  //   tickerRestEndpoint:
  //     'https://api.gateio.ws/api/v4/flash_swap/currencies?currency=${ticker}',
  //   image:
  //     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfvt_U4lThKAOYZKqYf-M5J4KQPt1e-OHsC9cMEH_-lA&s',
  //   website: 'https://www.okx.com',
  //   status: MarketStatus.Active,
  //   createdAt: new Date(),
  //   updatedAt: new Date(),
  // },
  //   {
  //     name: 'Bybit',
  //     tickerRestEndpoint:
  //       'https://api.gateio.ws/api/v4/flash_swap/currencies?currency=${ticker}',
  //     image:
  //       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYYLdxK2n4zKKfjQnuMo6JIYZwx-LkZRUPlsE4RxbGiQ&s',
  //     website: 'https://www.bybit.com',
  //     status: MarketStatus.Active,
  //     createdAt: new Date(),
  //     updatedAt: new Date(),
  //   },
];
