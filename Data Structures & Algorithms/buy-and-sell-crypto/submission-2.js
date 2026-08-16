class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let minimumPrice = prices[0];
        let maxProfit = 0;

        for (let i = 1; i < prices.length; i++) {
            const currentPrice = prices[i];

            if (currentPrice < minimumPrice) {
                minimumPrice = currentPrice;
            }

            const currentProfit = currentPrice - minimumPrice;

            if (currentProfit > maxProfit) {
                maxProfit = currentProfit;
            }
        }

        return maxProfit;
    }
}
