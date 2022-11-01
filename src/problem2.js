function problem2(cryptogram) {
  let leftPointer = 0;
  let rightPoiner = 1;
  const cryptogramList = [...cryptogram];

  const moveAllPointerForward = () => {
    leftPointer += 1;
    rightPoiner += 1;
    
  }
  /**
   * 유효한 범위를 한정해 주는 함수.
   * @returns {boolean}
   */
  const isValidRange = () => {
    return leftPointer >= 0 && rightPoiner < cryptogramList.length;
  }

  /**
   * 두 포인터를 가장 앞 위치로 설정하는 함수
   */
  const initPointer = () => {
    leftPointer = 0;
    rightPoiner = 1;
  }

  /**
   * 두 포인터가 가리키는 값이 같은지 확인해주는 함수
   * @returns {boolean}
   */
  const isEachPointerSameLetter = () => cryptogramList[leftPointer] === cryptogramList[rightPoiner];
  const moveRightPointerForward = () => rightPoiner ++;
  
  let isRemoved = true;

  while (isRemoved){ // 지운 이력이 없을 때 까지 반복
    initPointer();
    isRemoved = false; // 지운 이력 false로 set
    while (isValidRange()){
    
      if (!isEachPointerSameLetter()){
        moveAllPointerForward();
        continue;
      }
      while (isEachPointerSameLetter()){
        moveRightPointerForward();
      }

      cryptogramList.splice(leftPointer, rightPoiner - leftPointer);
      isRemoved = true; // 지운 이력 true로 set
      rightPoiner = leftPointer + 1; // 오른쪽 포인터 다시 왼쪽 포인터 다음으로 set
    }
  }
    return cryptogramList.join("");
}
module.exports = problem2;
