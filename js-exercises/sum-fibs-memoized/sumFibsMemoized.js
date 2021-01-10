const getSumOfFibonacciSequence = function (fibonacciSequence) {
  return fibonacciSequence.reduce(function (sum, elem) {
    return (elem % 2 !== 0) ? (sum += elem) : sum;
  }, 0)
}

function sumFibs(num) {

  let fibonacciSum = 0;
  let fibonacciSequence = [1, 1];

  if (num === 0) {
    return fibonacciSum;
  }

  if (num === 1) {
    fibonacciSum = getSumOfFibonacciSequence(fibonacciSequence);
    return fibonacciSum;
  }

  for (let i = 2; i < num + 1; i++) {
    let nextFibonacciValue = fibonacciSequence[i-2] + fibonacciSequence[i-1];

    if (nextFibonacciValue > num) {
      break;
    }
    fibonacciSequence.push(nextFibonacciValue);
  }

  fibonacciSum = getSumOfFibonacciSequence(fibonacciSequence);

  return fibonacciSum;
}

function cacheFunction(func) {
  let cache = {};

  return function(num) {
    
    if(!cache.hasOwnProperty(num)) {
      cache[num] = func(num);
    }

    return cache[num.toString()];
  }
}

export { sumFibs, cacheFunction };
