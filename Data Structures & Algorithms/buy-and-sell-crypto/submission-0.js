class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let minPrice = prices[0];
        let maxProfit = 0;
        for(let i = 0; i < prices.length; i++) {
            const currentPrice = prices[i];
            if(currentPrice < minPrice) {
                minPrice = currentPrice
            } else {
                const profit = currentPrice - minPrice
                if(profit > maxProfit) {
                    maxProfit = profit;
                }
            }
        }
        return maxProfit;
    }
}
