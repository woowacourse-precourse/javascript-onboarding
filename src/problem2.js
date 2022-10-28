function problem2(cryptogram) {
  var answer;
  let moreToSearch = true;
  let temp = cryptogram.split("");
  while(moreToSearch) {
    let overlapCount = 0, indexCount = -1;
    for(const char of temp) {
      indexCount++;
      if(char == temp[indexCount+1]) {
        temp.splice(indexCount, 2);
        overlapCount++;
        break;
      }
    }
    if(overlapCount == 0) moreToSearch = false;
  }
  answer = temp.join("");
  return answer;
}

module.exports = problem2;
