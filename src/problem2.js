function findDuplicated(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] == str[i + 1]) return true;
  }
  return false;
}

function deleteDuplicated(str) {
  let tmpStr = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] == str[i + 1]) {
      let cnt = 0;
      while (str[i] == str[i + cnt]) cnt++;
      i += cnt - 1;
    } else tmpStr += str[i];
  }
  return tmpStr;
}

function problem2(cryptogram) {
  let answer = cryptogram;
  let duplicated = findDuplicated(answer);
  while (duplicated) {
    answer = deleteDuplicated(answer);
    duplicated = findDuplicated(answer);
  }
  return answer;
}
module.exports = problem2;
