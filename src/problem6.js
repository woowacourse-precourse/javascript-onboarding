function problem6(forms) {
  var answer;

  function getDictionary(forms) {
    var dictionaryMap = new Map();
    forms.forEach((crew) => {
      for (i = 0; i < crew[1].length - 1; i++) {
        var word = crew[1].slice(i, i + 2);
        if (!dictionaryMap.has(word)) dictionaryMap.set(word, 0);
        else dictionaryMap.set(word, dictionaryMap.get(word) + 1);
      }
    });
    return dictionaryMap;
  }

  function filtering(dictionaryMap, forms) {
    var filteredArray = [];
    dictionaryMap.forEach((reuse, word) => {
      reuse > 0 &&
        forms.forEach((crew) => {
          if (crew[1].includes(word)) filteredArray.push(crew[0]);
        });
    });
    return filteredArray;
  }

  function sorting(filteredArray) {
    var resultArray;
    resultArray = filteredArray.sort();
    return resultArray;
  }

  var dictionary = getDictionary(forms);
  answer = sorting(filtering(dictionary, forms));
  return answer;
}

module.exports = problem6;
