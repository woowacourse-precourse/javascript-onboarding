function problem2(cryptogram) {
  const uniqueList = [];
  const characterList = cryptogram.split('');

  characterList.forEach((character) => {
    character === uniqueList[uniqueList.length - 1] ? uniqueList.pop() : uniqueList.push(character);
  });

  return uniqueList.join('');
}

module.exports = problem2;
