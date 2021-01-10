const PARENTHESIS = {
  '{': '}',
  '[': ']',
  '(': ')'
}

function balancedBraces(...args) {
  let stack = [];
  let isBalanced = true;

  [...args[0]].forEach(element => {
    // console.log(element)
    if (Object.keys(PARENTHESIS).includes(element)) {
      stack.push(element)
    } else if (Object.values(PARENTHESIS).includes(element) && PARENTHESIS[stack.pop()] !== element) {
      isBalanced = false;
    }
    // console.log(`stack: ${stack}`);
  });

  if (stack.length !== 0) {
    isBalanced = false;
  }

  return isBalanced;
}

export {
  balancedBraces,
};
