function problem2(cryptogram) {
  let leftPointer = 0;
  let rightPoiner = 1;
  const cryptogramList = [...cryptogram];

  while (leftPointer >= 0 && rightPoiner < cryptogramList.length){
    if (cryptogramList[leftPointer] === cryptogramList[rightPoiner]){
      cryptogramList.splice(leftPointer, 2);
      leftPointer -= 1;
      rightPoiner -= 1;
      continue;
    }
    if (cryptogramList[leftPointer] !== cryptogramList[rightPoiner]){
      leftPointer += 1;
      rightPoiner += 1;
    }
  }
  return cryptogramList.join("");
}
module.exports = problem2;
