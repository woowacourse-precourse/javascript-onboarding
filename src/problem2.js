/*
  구현할 기능 목록
  [O] 암호문의 중복문자를 제거하여 새로운 문자열을 생성하는 기능. 
      * 문자의 중복을 알려주는 변수, 중복된 문자가 제거된 문자열을 저장할 배열(스택) 필요
      * 암호문의 모든 문자에 대해 순서대로 아래의 case별로 처리
        - [O] 1. 배열이 비여있는 경우 => 배열의 마지막에 삽입 
        - [O] 2. 배열의 마지막 요소와 문자가 같고, 문자가 암호문의 마지막 요소일 경우 =>  배열에서 마지막 요소 제거
        - [O] 3. 배열의 마지막 요소와 문자가 같고, 문자가 중복되지 않은 상태인 경우 => 문자의 중복 상태 여부 True로 변경
        - [O] 4. 배열의 마지막 요소와 문자가 다르고, 문자의 중복 상태 여부가 True인 경우 => 배열의 마지막 요소를 제거하고, 문자의 중복 상태 여부 False로 변경 후, 문자를 배열 끝에 삽입
        - [O] 5. 배열의 마지막 요소와 문자가 다르고, 문자의 중복 상태 여부가 False인 경우 => 문자를 배열의 끝에 삽입
      [O] 반목분 break 조건 : 중복 문자 제거 후 문자열의 길이가 0이거나, 제거 전 문자열과 동일한 경우
          *break 후 배열의 문자들을 조합하여 정답 반환
      [O] 다음 반복문을 위한 재조정: 배열의 문자열을 이용하여 다음 iterate의 codedMessage로 사용하고 배열 초기화.
  [O] 배열이 비어있는지 확인하는 기능
  [O] 배열의 마지막 요소와 현재 문자가 같은 지 확인하는 기능

*/

function problem2(cryptogram) {
  let decryptedStack = [];
  let codedMessage = cryptogram.slice();

  while (true) {
    let isDuplicated = false;
    let messeageLength = codedMessage.length;

    for (let i = 0; i < messeageLength; i++) {
      if (isEmpty(decryptedStack)) {
        decryptedStack.push(codedMessage[i]);
        continue;
      }
      if (isEqualWithLastElement(decryptedStack, codedMessage[i]) && i === messeageLength - 1) {
        decryptedStack.pop();
        continue;
      }
      if (isEqualWithLastElement(decryptedStack, codedMessage[i]) && !isDuplicated) {
        isDuplicated = true;
        continue;
      }
      if (isDuplicated) {
        decryptedStack.pop();
        isDuplicated = false;
      }
      decryptedStack.push(codedMessage[i]);
    }
    if (isEmpty(decryptedStack) || decryptedStack.length === messeageLength) break;
    codedMessage = decryptedStack.join('');
    decryptedStack = [];
  }
  return decryptedStack.join('');
}

function isEmpty(stack) {
  return stack.length === 0;
}

function isEqualWithLastElement(stack, character) {
  return stack[stack.length - 1] === character;
}

module.exports = problem2;
