const addValueFunction = (el) => {
  var addValue = 0;
  el = el.toString();

  for(let i=0; i<el.length; i++){
    addValue += parseInt(el[i]);
  }

  return addValue;
}

const multiValueFunction = (el) => {
  var multiValue = 1;
  el = el.toString();

  for(let i=0; i<el.length; i++){
    multiValue *= parseInt(el[i]);
  }

  return multiValue;
}


const checkCondition = (left, right) => {
  // 책이 중간에 찢어졌을때 바로 옆 페이지가 아닐 수 있음.
  if (left + 1 < right){
    return 0;
  }
  else{
    return 1;
  }
}

function problem1(pobi, crong) {
  var answer;
  var pobiArray = [];
  var crongArray = [];

  // 예외사항 발견시 -1을 리턴하고 종료합니다.
  if (!checkCondition(pobi[0], pobi[1])){
    return -1;
  }

  if (!checkCondition(crong[0], crong[1])){
    return -1;
  }
  

  // pobi의 배열을 반복문을 통해 확인해줍니다.
  // 반복문이 끝나게 되면 pobiArray에는 왼쪽에서 가장 큰 수와 오른쪽 페이지에서의 가장 큰 값이 들어가게 됩니다.
  for (var value of pobi){
    // 조건 2와 조건 3을 비교하여 큰 수를 본인의 점수로 합니다.
    if(addValueFunction(value) > multiValueFunction(value)){
      pobiArray.push(addValueFunction(value));
    }
    else{
      pobiArray.push(multiValueFunction(value));
    }
  }

  for (var value of crong) {
    if(addValueFunction(value) > multiValueFunction(value)){
      crongArray.push(addValueFunction(value));
    }
    else{
      crongArray.push(multiValueFunction(value));
    }
  }

  // Math 객체를 사용하여 Array속 최댓값을 찾아낼 수 있습니다.
  maxPobi = Math.max(...pobiArray);
  maxCrong = Math.max(...crongArray);

  // 조건문을 사용하여 각 값들을 비교합니다.
  if (maxPobi > maxCrong) answer = 1;
  else if(maxPobi < maxCrong) answer = 2;
  else answer = 0;
  
  return answer;
}

module.exports = problem1;
