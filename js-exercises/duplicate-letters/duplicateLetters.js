function getCountOfAlphabets(countOfAlphabets, alphabet) {

  if (countOfAlphabets[alphabet] == undefined) {
    countOfAlphabets[alphabet] = 1;
  } else {
    countOfAlphabets[alphabet]++;
  }

  return countOfAlphabets
}


function duplicateLetters(alphabetString) {

  const alphabets = alphabetString.split('');

  const countOfAlphabets = alphabets.reduce(getCountOfAlphabets, {});

  const counts = Object.values(countOfAlphabets);
  const maxCount = Math.max(...counts);

  return (maxCount == 1) ? false : maxCount; 
}

export {
  duplicateLetters,
};
