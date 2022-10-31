function problem1(pobi, crong) {

  // 포비, 크롱이 불가능한 페이지를 펼쳤을 경우
  if(pobi[1] - pobi[0] > 1 || crong[1] - crong[0] > 1){
    return -1
  }

  const pobiArray = []
  const crongArray = []

  for(let i = 0; i < 2; i++){
    // 포비 배열의 i 인덱스
    var pobiTemp1 = 0 //더하기
    var pobiTemp2 = 1 //곱하기

    for(let j = 0; j < String(pobi[i]).length; j++){
      pobiTemp1 += parseInt(String(pobi[i])[j])
      pobiTemp2 *= parseInt(String(pobi[i])[j])
    }

    // 크롱 배열의 i 인덱스
    var crongTemp1 = 0 //더하기
    var crongTemp2 = 1 //곱하기

    for(let j = 0; j < String(crong[i]).length; j++){
      crongTemp1 += parseInt(String(crong[i])[j])
      crongTemp2 *= parseInt(String(crong[i])[j])
    }

    // 포비, 크롱 배열의 i 인덱스의 더하기, 곱하기 결과 추가
    pobiArray.push(pobiTemp1)
    pobiArray.push(pobiTemp2)
    crongArray.push(crongTemp1)
    crongArray.push(crongTemp2)
  }

  const answer = []
  answer.push(Math.max.apply(null, pobiArray))
  answer.push(Math.max.apply(null, crongArray))

  if(answer[0] > answer[1]){
    return 1
  }
  else if(answer[1] > answer[0]){
    return 2
  }
  else{
    return 0
  }
}

module.exports = problem1;
