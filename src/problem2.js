function problem2(cryptogram) {
  const crpyStrArray = cryptogram.split('');

  while(1){
    const detectedIndexs = getDupIndexs(crpyStrArray)
    if(detectedIndexs.length === 0) break;
    detectedIndexs.map((index) => crpyStrArray.splice(index, 1))
  }
  
  return crpyStrArray.join('');
}

/**
 * @description 입력값으로 받은 문자열중 중첩문자를 감지해 인덱스를 숫자 배열로 반환합니다.
 * @param {string[]} strArray  문자열배열
 * @returns {number[]} dupIndexs 숫자배열
 */
function getDupIndexs(strArray) {
  const dupIndexs = [];
  let flag = false;
  for(let i = 0; i < strArray.length; i++) {
    if( strArray[i] === strArray[i+1]) {
      flag = true;
      dupIndexs.unshift(i);
    } else if(flag) {
      flag = false;
      dupIndexs.unshift(i);
    }
  }
  return dupIndexs;
}

module.exports = problem2;