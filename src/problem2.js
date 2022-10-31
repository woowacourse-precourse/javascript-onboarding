console.log(problem2("zyelleyyez"));

function problem2(cryptogram) {
  return cryptogramSolver(cryptogram);
}

function cryptogramSolver(cryptogram) {
  return removeDuplicateChar(cryptogram.split(""));
}

function removeDuplicateChar(cryptogramArr){
  const nextCryptogramArr = [];
  let nowCharFromCryptogram = cryptogramArr[0];
  let isBeforeDuplicate = false;
  let isDeleteStep = false;
  for (let i = 1; i <= cryptogramArr.length; i++) {
    if(!isBeforeDuplicate && nowCharFromCryptogram != cryptogramArr[i]) {
      nextCryptogramArr.push(nowCharFromCryptogram);
    } else if(isBeforeDuplicate && nowCharFromCryptogram != cryptogramArr[i]){
      isBeforeDuplicate = false;
    } else {
      isBeforeDuplicate = true;
      isDeleteStep = true;
    }
    nowCharFromCryptogram=cryptogramArr[i];
  }
  if (isDeleteStep) return removeDuplicateChar(nextCryptogramArr); 
  return nextCryptogramArr.join("");
}

module.exports = problem2;
