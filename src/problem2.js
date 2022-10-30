function findDup(str){
  const strArray = [...str];
  const resultArray = [];
  strArray.map(now => {
    if (now === resultArray.at(-1)){
      resultArray.pop();
    }
    else{
      resultArray.push(now);
    }
  })
  return resultArray.join('');
}

function error(str){
  if (str.toLowerCase() != str){
    return false;
  }
  if (str.length < 1 || str.length > 1000){
    return false;
  }
  return true;
}

function problem2(cryptogram) {
  if(error(cryptogram) === false){
    return "암호문의 제한사항을 확인해주세요";
  }
  else{
    const answer = findDup(cryptogram);
    return answer;
  }
}

module.exports = problem2;
