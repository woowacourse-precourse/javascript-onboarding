function problem2(cryptogram) {
  const crpyStrArray = cryptogram.split('');

  while(1){
    const DetectedIndexs = getDupIndexs(crpyStrArray)
    if(DetectedIndexs.length === 0) break;
    DetectedIndexs.map((index) => crpyStrArray.splice(index, 1))
  }
  
  return crpyStrArray.join('');
}

/**
 * @param {string[]} strArray  문자열배열
 * @returns 중복되어 문자들의 인덱스를 숫자배열에 담아 반환합니다.
 */
function getDupIndexs(strArray) {
  const dupIndexs = [];
  let isDuplicate = false;
  for(let i = 0; i < strArray.length; i++) {
    if( strArray[i] === strArray[i+1]) {
      isDuplicate = true;
      dupIndexs.unshift(i);
    } else if(isDuplicate) {
      isDuplicate = false;
      dupIndexs.unshift(i);
    }
  }
  return dupIndexs;
}

module.exports = problem2;