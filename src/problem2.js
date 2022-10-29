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
 
  while (leftPointer >= 0 && rightPoiner < cryptogramList.length){
    if (cryptogramList[leftPointer] === cryptogramList[rightPoiner]){
      cryptogramList.splice(leftPointer, 2);
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
