const flipArgs = function (func) {
  return function () {
      return func(Array.from(arguments).reverse());
  }
}

const flipped = flipArgs(function (reversed) {
  return reversed;
});


export { flipArgs, flipped };