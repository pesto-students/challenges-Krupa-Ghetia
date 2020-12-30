function sumFibs(num) {

  if (num === 0) {
    return 0;
  }

  const sumOfOddFibs = cacheFunction(num);

  return sumOfOddFibs();
  //
}

function getFibonacciSequence(num) {

  let fibonacciSequence = [1, 1];

  if (num === 1) {
    return fibonacciSequence;
  }

  for(let i = 2; i < num + 1; i++) {
    let nextFibonacciValue = fibonacciSequence[i-2] + fibonacciSequence[i-1];

    if (nextFibonacciValue > num) {
      break;
    }

    fibonacciSequence.push(nextFibonacciValue);
  }

  return fibonacciSequence;
}

function cacheFunction(num) {
  let cache = {};

  return () => {
    if (num in cache) {
      return cache[num];
    } else {
      let fibonacciSequence = getFibonacciSequence(num);
      let oddFibonacciSequence = fibonacciSequence.filter(n => n % 2 !== 0);
      let sumOfOddFibs = oddFibonacciSequence.reduce((total, el) => total += el);
      cache[num] = sumOfOddFibs;

      return sumOfOddFibs;
    }
  }
}

export { sumFibs, cacheFunction };
