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

  const initPointer = () => {
    leftPointer = 0;
    rightPoiner = 1;
  }
  const isEachPointerSameLetter = () => cryptogramList[leftPointer] === cryptogramList[rightPoiner]
  const moveRightPointerForward = () => rightPoiner ++;
  
  let isRemoved = true;

  while (isRemoved){
    initPointer();
    isRemoved = false
  while (isValidRange()){
    
    if (!isEachPointerSameLetter()){
      moveAllPointerForward();
      continue;
    }
    while (isEachPointerSameLetter()){
      moveRightPointerForward();
    }

    cryptogramList.splice(leftPointer, rightPoiner - leftPointer);
    isRemoved = true;
    rightPoiner = leftPointer + 1;
  }
    }
    return cryptogramList.join("");
  }

module.exports = problem2;
