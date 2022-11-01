function delRepitition(cryptoArray) {
  // 반복 문자 제거
  let repeatedLetter = []; //반복문 내에서 현재 인덱스까지의 연속 반복 문자를 저장한 배열
  let decrypted = []; //연속 반복 문자를 제거한 문자 배열
  for (let i = 0; i < cryptoArray.length; i++) {
    // 문자 배열 내 전체 문자에 대해서 반복문을 수행하며
    if (repeatedLetter.length === 0) {
      // 현재까지 발견된 연속 반복 문자가 없다면
      repeatedLetter.push(cryptoArray[i]); //현재 문자를 추가한다.
    } else {
      // 연속 반복 문자의 가능성이 있고(1개 이상의 원소를 갖는 상태)
      if (cryptoArray[i] === repeatedLetter[repeatedLetter.length - 1]) {
        //마지막으로 존재한 연속 반복 문자와 현재 문자가 같다면
        repeatedLetter.push(cryptoArray[i]); // 연속 반복 문자 배열에 추가
      } else {
        // 같지 않고
        if (repeatedLetter.length === 1) {
          // 연속 반복 문자로 의심된 문자가 하나 뿐이라면 연속 반복 문자가 존재하지 않은 것이므로
          decrypted.push(repeatedLetter.pop()); // 이 문자를 decrypt에 추가한다.
        }
        repeatedLetter = []; //현재 문자는 이전과 같지 않은 문자이므로 repeatedLetter 배열을 초기화하고
        repeatedLetter.push(cryptoArray[i]); //다음 검사를 위해 현재 문자를 추가한다.
      }
    }
  }
  if (repeatedLetter.length === 1) {
    //모든 문자를 검토했음에도 의심 문자가 존재한다면, 이는 문자열에서 반복되지 않은 마지막 문자이므로
    decrypted.push(repeatedLetter.pop()); //해독문에 추가한다.
  }
  return decrypted;
}

function problem2(cryptogram) {
  var answer;
  let cryptoArray = cryptogram.split(""); //암호문을 문자 배열로 쪼갠다.
  let decrypt = []; //암호문 해독 문자열(반복 문자를 제거한 결과 배열)

  while (decrypt.join("") !== delRepitition(decrypt).join("")) {
    // 현재 가지고 있는 해독문과 이를 다시 연속 반복 문자를 제거 연산을 거친 해독문이 같을 때까지
    decrypt = delRepitition(decrypt); //해당 문자 배열에 대해 연속 반복 문자 제거를 수행한다.
  }

  return answer;
}

module.exports = problem2;
