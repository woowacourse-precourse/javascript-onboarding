function problem2(cryptogram) {
  let strArr = [...cryptogram];
  let duplicatedStrPosition = [];
  let hasDuplicatedStr = true;

  while(hasDuplicatedStr) {
    strArr.forEach((_, i, init) => {
      if (init[i] === init[i+1]) duplicatedStrPosition = [i, ...duplicatedStrPosition];
    })

    hasDuplicatedStr = !duplicatedStrPosition.length ? false : true;

    duplicatedStrPosition = duplicatedStrPosition.filter(elem => {
      strArr = [...strArr.slice(0, elem), ...strArr.slice(elem + 2)];
      return false;
    })
  }

  return strArr.join('');
}

module.exports = problem2;
