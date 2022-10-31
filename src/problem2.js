function problem2(cryptogram) {
  let leftPointer = 0;
  let rightPoiner = 1;
  const cryptogramList = [...cryptogram];

  const pointerMoveForward = () => {
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
 
  while (isValidRange()){
    if (cryptogramList[leftPointer] !== cryptogramList[rightPoiner]){
      pointerMoveForward();
      continue;
    }
    
   
    } 
    return cryptogramList.join("");
  }   
  


module.exports = problem2;
