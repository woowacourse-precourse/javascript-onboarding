function findDup(str){
  const strArray = [...str];
  const resultArray = [];
  let check = '1'; //연속 3개 나오는 경우
  strArray.map(now => {
    if (now === resultArray.at(-1)){
      check = resultArray.pop();
    }
    else{
      if (now != check){
        resultArray.push(now);
        check = '1';
      }
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
