function problem2(cryptogram) {

  let str = [...cryptogram];
  let duplicatedStrPosition = [];
  while(true) {
    for (let i = 0; i < str.length - 1; i++){
      if (str[i] === str[i+1]) {
        duplicatedStrPosition.unshift(i);
      }
    }
    if (!duplicatedStrPosition.length) break;
    duplicatedStrPosition.forEach(elem => {
      str.splice(elem,2)
    });
    duplicatedStrPosition = [];
  }
  return str.join('');
}

module.exports = problem2;
