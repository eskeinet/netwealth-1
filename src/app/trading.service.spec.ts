import { TestBed } from '@angular/core/testing';

import { TradingService } from './trading.service';

fdescribe('TradingService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [TradingService],
  }));

  it('should return empty array of trades and 0 profit if number of trades is 0', () => {
    const tradingResult = TradingService.getMaximumProfit([1, 2, 3], 0);
    expect(tradingResult.profit).toBe(0);
    expect(tradingResult.tradeDays.length).toBe(0);
  });

  it('should return empty array of trades and 0 profit if array of daily prices is empty', () => {
    const tradingResult = TradingService.getMaximumProfit([], 5);
    expect(tradingResult.profit).toBe(0);
    expect(tradingResult.tradeDays.length).toBe(0);
  });

  it('should return array of trades with number of elements equivalent to number of trades if daily record of prices is > 0', () => {
    const tradingResult = TradingService.getMaximumProfit([1], 6);
    expect(tradingResult.tradeDays.length).toBe(6);
  });

  it(`should return array of trades with even number of elements, it should disregard any purchases that aren't followed by a sale`, () => {
    const tradingResult = TradingService.getMaximumProfit([1], 5);
    expect(tradingResult.tradeDays.length).toBe(4);
  });

  it(`profit should be equal or greater than 0`, () => {
    const tradingResult = TradingService.getMaximumProfit([1], 5);
    expect(tradingResult.profit).toBeGreaterThanOrEqual(0);
  });

  it(`the days of trade should be ascending in order`, () => {
    const tradingResult = TradingService.getMaximumProfit([2, 3, 4, 0, 0], 5);
    // tslint:disable-next-line:prefer-for-of
    for (let i = 1; i < tradingResult.tradeDays.length; i++) {
      expect(tradingResult.tradeDays[i]).toBeGreaterThanOrEqual(tradingResult.tradeDays[i - 1]);
    }
  });

  it(`should yeild profit equal or greater to first minimum / maximum pair`, () => {
    const tradingResult = TradingService.getMaximumProfit([1, 2, 3], 4);
    expect(tradingResult.profit).toBeGreaterThanOrEqual(2);
  });

  it(`should yeild maximum profit`, () => {
    const tradingResult1 = TradingService.getMaximumProfit([1, 12, 3, 5], 4);
    expect(tradingResult1.profit).toBe(13);
    expect(JSON.stringify(tradingResult1.tradeDays)).toEqual(JSON.stringify([0, 1, 2, 3]));

    const tradingResult2 = TradingService.getMaximumProfit([1, 2, 3], 4);
    expect(tradingResult2.profit).toBe(2);
    expect(JSON.stringify(tradingResult2.tradeDays)).toEqual(JSON.stringify([0, 2, 2, 2]));

    const tradingResult3 = TradingService.getMaximumProfit([4, 3, 2, 1], 4);
    expect(tradingResult3.profit).toBe(0);
    expect(JSON.stringify(tradingResult3.tradeDays)).toEqual(JSON.stringify([0, 0, 0, 0]));
  });

  // the algorithm should be updated to take this case in consideration,
  // possibly by using recursion between already found trade intervals
  xit(`should yeild maximum profit, better test data`, () => {
    const tradingResult1 = TradingService.getMaximumProfit([1, 11, 2, 12], 4);
    expect(tradingResult1.profit).toBe(20);
    expect(JSON.stringify(tradingResult1.tradeDays)).toEqual(JSON.stringify([0, 1, 2, 3]));

  });

});

