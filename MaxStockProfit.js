function maxStockProfit(pricesArr) {
	// takes in array of prices as parameter.
	// returns the max possible profit of the day.
	var max = pricesArr.reduce(function(a, b) {
		return Math.max(a, b);
	});
	var min = pricesArr.reduce(function(a, b) {
		return Math.min(a, b);
	});
	if (max - min === 0) {
		return -1;
	}
	return max - min;
}

// should result in 22
// bought at 26 and sold at 48;
var prices = [32, 46, 26, 38, 40, 48, 42];
var test =[1,2,3,4];
maxStockProfit2(prices);

function maxStockProfit2(pricesArr) {
	var buyPrice = 0,
		sellPrice = 0,
		maxProfit = -1;
	changeBuyPrice = true;
	for (i = 0; i < pricesArr.length; i++) {
		if (changeBuyPrice) {
			buyPrice = pricesArr[i];
		}
		sellPrice = pricesArr[i + 1];
		if (sellPrice < buyPrice) {
			changeBuyPrice = true;
		} else {
			var tempProfit = sellPrice - buyPrice;
			if (tempProfit > maxProfit) {
				maxProfit = tempProfit;
			}
			changeBuyPrice = false;
		}
	}
	return maxProfit;
}

var num = 0;

function maxNum(arr, num, max) {
	var index = arr[num],
		lastMax = max;
	if (num === arr.length) {
		if (lastMax > newMax) {
			return lastMax;
		} else {
			return newMax;
		}
	} else {
		for (i = 0; i < arr.length; i++) {
			if (index > arr[i]) {
				var newMax = index;
			}
		}
		return maxNum(arr, num + 1, newMax);
	}
}
