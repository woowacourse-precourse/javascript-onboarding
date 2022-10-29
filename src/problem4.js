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

module.exports = problem4;
