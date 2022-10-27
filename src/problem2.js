function findDup(str){
  const strArray = [...str];
  const resultArray = [];
  for (let i = 0; i < strArray.length; i++){
    if (strArray[i] === resultArray[resultArray.length -1]){
      resultArray.pop();
    }
    else{
      resultArray.push(strArray[i]);
    }
  }
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
  var answer;
  return answer;
}

module.exports = problem2;
