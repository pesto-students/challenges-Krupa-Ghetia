const summation = function (...args) {
  var argsTotal = args.reduce(function(sum, elem) {
    return sum += elem;
  }, 0);

  return argsTotal;
}

const limitFunctionCallCount = (summation, maxCalls) => {
  let callCount = 0;

  return function() {
    return (++callCount <= maxCalls) ? summation(...Array.from(arguments)) : null;
  }
};

const limitedFunction = limitFunctionCallCount(summation, 2);

export {
  limitFunctionCallCount,
};
