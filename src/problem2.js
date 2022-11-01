function problem2(cryptogram) {
  var answer;
  const spellArr = [...cryptogram];
  let index = 0;

  while(index < spellArr.length) {
    if(spellArr[index] === spellArr[index + 1] && spellArr[index] === spellArr[index + 2]) {
      spellArr.splice(index, 3);
      index = 0;
    }
    else if(spellArr[index] === spellArr[index + 1]) {
      spellArr.splice(index, 2);
      index = 0;
    }
    else {
      index += 1;
    }
  }
  answer = spellArr.join("");
  return answer;
}

module.exports = problem2;
