function problem2(cryptogram) {
  if (cryptogram !== cryptogram.toLowerCase()) throw new TypeError('매개변수는 소문자만 입력할 수 있습니다.');
  if (!cryptogram.length || cryptogram.length > 1000) throw new RangeError('매개변수는 1자 이상 1000자 이하만 입력할 수 있습니다.');

  let strArr = [...cryptogram];
  let hasDuplicatedStr = true;

  while(hasDuplicatedStr) {
    let duplicatedStrPosition = [];

    strArr.forEach((_, i, init) => {
      if (init[i] === init[i+1]) duplicatedStrPosition = [i, ...duplicatedStrPosition];
    })

    hasDuplicatedStr = !!duplicatedStrPosition.length;

    duplicatedStrPosition.forEach(position => {
      strArr = [...strArr.slice(0, position), ...strArr.slice(position + 2)];
    })
  }

  return strArr.join('');
}

module.exports = problem2;
