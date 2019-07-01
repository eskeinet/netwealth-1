import { Injectable } from '@angular/core';

export interface IOptimalTradeRecord {
  tradeDays: number[];
  profit: number;
}

@Injectable()
export class TradingService {

  constructor() { }

  public static getMaximumProfit(
    prices: number[],
    tradeNumber: number): IOptimalTradeRecord {

    // initialize empty result
    const tradeResult = {
      tradeDays: [],
      profit: 0,
    };
    // ignore last trade if the numberOfTrades is odd
    tradeNumber = tradeNumber - tradeNumber % 2;

    if (tradeNumber !== 0 && prices.length !== 0) {
      // fill the array with number of 0 corresponding to number of trades
      for (let i = 0; i < tradeNumber; i++) {
        tradeResult.tradeDays[i] = 0;
      }

      let min = 0;
      let start = 0;
      let maxProfit = 0;

      for (let tradePairs = 0; tradePairs < tradeNumber / 2; tradePairs++) {
        const buyIndex = tradePairs * 2;
        const sellIndex = tradePairs * 2 + 1;
        // if the profit in the last iteration was 0, use remaining buy/sale transactions on the sale day of that iteration
        if (maxProfit === 0 && start > 0) {
          tradeResult.tradeDays[buyIndex] = start;
          tradeResult.tradeDays[sellIndex] = start;
        } else {
          maxProfit = 0;
          for (let j = start; j < prices.length; j++) {
            // find minimum
            if (prices[j] < prices[min]) {
              min = j;
            }

            const diff = prices[j] - prices[min];

            if (diff > maxProfit) {
              tradeResult.tradeDays[buyIndex] = min;
              tradeResult.tradeDays[sellIndex] = j;
              maxProfit = diff;
            }
          }

          if (maxProfit === 0 && start > 0) {
            // profit was 0, use last sale day as buy/sale day
            tradeResult.tradeDays[buyIndex] = start;
            tradeResult.tradeDays[sellIndex] = start;
          } else {
            // profit was geater than 0, record buy/sale day
            tradeResult.profit += maxProfit;
            min = tradeResult.tradeDays[sellIndex];
            start = tradeResult.tradeDays[sellIndex];
          }
        }
      }
    }
    return tradeResult;
  }
}
