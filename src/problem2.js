function problem2(cryptogram) {
  let leftPointer = 0;
  let rightPoiner = 1;
  const cryptogramList = [...cryptogram];
  const pointerMoveBackward = () => {
    leftPointer -= 1;
    rightPoiner -= 1;
  }
  const pointerMoveForward = () => {
    leftPointer += 1;
    rightPoiner += 1;
  }
  const removeDuplicated = () => {
    cryptogramList.splice(leftPointer, 2);
  }
  /**
   * 유효한 범위를 한정해 주는 함수.
   * @returns {boolean}
   */
  const isValidRange = () => {
    return leftPointer >= 0 && rightPoiner < cryptogramList.length;
  }

  while (isValidRange()){
    if (cryptogramList[leftPointer] === cryptogramList[rightPoiner]){
      removeDuplicated();
      pointerMoveBackward();
      continue;
    }
    if (cryptogramList[leftPointer] !== cryptogramList[rightPoiner]){
      pointerMoveForward();
    }
  }
  return cryptogramList.join("");


  
}
module.exports = problem2;
