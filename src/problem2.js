console.log(problem2("browoanoommnaon"));

function problem2(cryptogram) {
  return cryptogramSolver(cryptogram);
}

function cryptogramSolver(cryptogram) {
  return removeDuplicateChar(cryptogram.split(""));
}

// B안
// function removeDuplicatesChar(cryptogramArr) {
//   let progressChar;
//   for (let i = cryptogramArr.length - 1; i >= 0; i--) {
//     if (cryptogramArr[i] == cryptogramArr[i + 1]) {
//       progressChar = cryptogramArr[i];
//       cryptogramArr[i] = "";
//       cryptogramArr[i + 1] = "";
//     } else if (progressChar == cryptogramArr[i]) {
//       progressChar = cryptogramArr[i];
//       cryptogramArr[i] = "";
//     } else {
//       progressChar = "";
//     }
//   }
//   return cryptogramArr;
// }

function removeDuplicateChar(cryptogramArr){
  const queueArr = [cryptogramArr[0]];
  const nextCryptogramArr = [];
  let isQueueDuplicate = false;
  let isDeleteStep = false;
  for (let i = 1; i <= cryptogramArr.length; i++) {
    if(!isQueueDuplicate && queueArr[0] != cryptogramArr[i]) {
      nextCryptogramArr.push(queueArr[0]);
      queueArr.shift();
    } else if(isQueueDuplicate && queueArr[0] != cryptogramArr[i]){
      while(queueArr.length>0) queueArr.shift();
      isQueueDuplicate = false;
    } else {
      isQueueDuplicate = true;
      isDeleteStep = true;
    }
    queueArr.push(cryptogramArr[i]);
  }
  if (isDeleteStep) return removeDuplicateChar(nextCryptogramArr); 
  return nextCryptogramArr.join("");
}

module.exports = problem2;
