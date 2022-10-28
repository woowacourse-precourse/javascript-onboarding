function getDeleteRange(idx, arrLength, cryptogramArr) {
  const startIdx = idx;

  while(idx+1 < arrLength && cryptogramArr[startIdx] == cryptogramArr[idx+1]) {
    idx += 1;
  }
  return idx;
}

function deleteRepeat(startIdx, endIdx, cryptogramArr) {
  const deleteLength = endIdx - startIdx + 1;

  if(startIdx === endIdx) return 0;
  cryptogramArr.splice(startIdx, deleteLength);
  return deleteLength-1;
}

function isRepeat(cryptogramArr) {
  let idx = 0;
  let arrLength = cryptogramArr.length;

  while(idx < arrLength-1) {
    const endIdx = getDeleteRange(idx, arrLength, cryptogramArr);
    const deleteLength = deleteRepeat(idx, endIdx, cryptogramArr);
    idx += 1;
    arrLength -= deleteLength;
  }
}

function strToArr(cryptogram) {
  const cryptogramArr = cryptogram.split('');
  return cryptogramArr;
}

function isNotSame(destArr, srcArr) {
  if(destArr.length === srcArr.length) return false;
  return true;
}

function getAnswer(cryptogramArr) {
  let handleWhile = true;
  while(handleWhile) {
    const  srcCryptogramArr = [...cryptogramArr];
    isRepeat(cryptogramArr);
    handleWhile = isNotSame(srcCryptogramArr, cryptogramArr);
  }
}

function problem2(cryptogram) {
  const cryptogramArr = strToArr(cryptogram);
  getAnswer(cryptogramArr);
  const answer = cryptogramArr.join('');
  return answer;
}

module.exports = problem2;