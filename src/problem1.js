const addPageFunction = (el) => {
  var addValue = 0;
  el = el.toString();

  for(let i=0; i<el.length; i++){
    console.log(el[i]);
    addValue += parseInt(el[i]);
  }

  return addValue;
}

const multiPageFunction = (el) => {
  var multiValue = 1;
  el = el.toString();

  for(let i=0; i<el.length; i++){
    multiValue *= parseInt(el[i]);
  }

  return multiValue;
}

const checkException = (leftPage, rightPage) => {
  // 책이 중간에 찢어졌을때 바로 옆 페이지가 아닐 수 있습니다.
  if (leftPage + 1 < rightPage) return 0;
  
  return 1;
}

function problem1(pobi, crong) {
  var answer;
  var pobiArray = [];
  var crongArray = [];

  // 예외사항 발견시 -1을 리턴하고 종료합니다.
  // 발생가능한 예외사항으로는 왼쪽 페이지와 오른쪽 페이지가 서로 연속되지 않을 수 있습니다.
  if (!checkException(pobi[0], pobi[1])){
    return -1;
  }
  if (!checkException(crong[0], crong[1])){
    return -1;
  }

  // 반복문이 끝나게 되면 pobiArray에는 왼쪽에서 가장 큰 수와 오른쪽 페이지에서의 가장 큰 값이 들어가게 됩니다.
  for (var page of pobi){
    // 조건 2와 조건 3을 비교하여 큰 수를 본인의 점수로 합니다.
    if(addPageFunction(page) > multiPageFunction(page)){
      pobiArray.push(addPageFunction(page));
    }
    else{
      pobiArray.push(multiPageFunction(page));
    }
  }

  for (var page of crong) {
    if(addPageFunction(page) > multiPageFunction(page)){
      crongArray.push(addPageFunction(page));
    }
    else{
      crongArray.push(multiPageFunction(page));
    }
  }
  

  return answer;
}


module.exports = problem1;
