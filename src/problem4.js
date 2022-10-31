function problem4(word) {
  //예외사항1
  if (word.length < 1 || word.length > 1000) return 'ERROR';

  const alphabetString = 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz';
  const reverseAlphabetString =
    'ZzYyXxWwVvUuTtSsRrQqPpOoNnMmLlKkJjIiHhGgFfEeDdCcBbAa';

  const getReverseElement = (element) => {
    const index = alphabetString.indexOf(element);
    if (index < 0) return element;
    else return reverseAlphabetString[index];
  };

  const results = [];

  for (let i = 0; i < word.length; i++) {
    const element = word[i];
    const reversedElement = getReverseElement(element);

    results.push(reversedElement);
  }

  return results.join('');
}

module.exports = problem4;
