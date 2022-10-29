console.log(createStringArr("I love you"));

function problem4(word) {
  return treeFrogApp(word);
}

function treeFrogApp(word){
  const eachCharArr = createStringArr(word);
  for(let i = 0; i < eachCharArr.length; i++){
    eachCharArr[i] != " " && (eachCharArr[i] = getTreeFrogChar(getUTF16Code(eachCharArr[i])));
  }
  return getFromCharsToString(eachCharArr);
}

function createStringArr(word){
  return word.split("");
}

module.exports = problem4;
