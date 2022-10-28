function problem1(pobi, crong) {
  //console.log("기본값",pobi, crong)
  const N = 2;

  //실패 조건 검사
  if(
    (pobi[0] > 400 || pobi[1] > 400 || crong[0] > 400 || crong[1] > 400)//책은 총 400쪽 넘으면 True
    || (1 == pobi[0]|| pobi[1]== 400 || 1 == crong[0] || crong[1] == 400)//시작/마지막면 이면 True
    || (pobi[0]%2 != 1 || crong[0]%2 != 1)//왼쪽이 홀수 아니면 True 
    || (pobi[0] + 1 != pobi[1] || crong[0] + 1 != crong[1])//오른쪽은 왼쪽 + 1 아니면 True
  ){
    return -1
  }

  let pobinums = []  //포비에 받은 숫자 하나씩 분해
  let crongnums = []  //크롱에 받은 숫자 하나씩 분해
  for (i = 0 ; i < N ; i++) {
    let _pobinums = [];
    
    do {
      _pobinums.push(pobi[i] % 10);  
      pobi[i] = Math.floor(pobi[i] / 10);  
    } while (pobi[i] > 0);
    
    //console.log("포비분해",_pobinums)
    pobinums.push(_pobinums)

    let _crongnums = [];
    
    do {
      _crongnums.push(crong[i] % 10);  
      crong[i] = Math.floor(crong[i] / 10);  
    } while (crong[i] > 0);

    //console.log("크롱분해",_crongnums)
    crongnums.push(_crongnums)
  }
  //포비/크롱 분해 완료
  //console.log("포비확인",pobinums)
  //console.log("크로확인",crongnums)


  let pobi_plus = [0, 0];

  for ( i = 0 ; i < pobinums.length ; i ++) {
    for (j = 0; j < pobinums[i].length; j++) {
      //i 입력 받은 두 숫자 중 몇번째 숫자를 선택할지
      //j 선택한 숫자 중 몇번째 자리 숫자를 선택할지
      pobi_plus[i] += pobinums[i][j];
    }
  }

  //console.log("포비 더하기_1",pobi_plus[0])
  //console.log("포비 더하기_2",pobi_plus[1])

  let crong_plus = [0,0]

  for ( i = 0 ; i < crongnums.length ; i++) {
    for ( j = 0 ; j < crongnums[i].length ; j++) {
      crong_plus[i] += crongnums[i][j];
    }
  }
  //console.log("크롱 더하기_1",crong_plus[0])
  //console.log("크롱 더하기_2",crong_plus[1])

  let pobi_multiply = [1,1]

  for ( i = 0 ; i < pobinums.length ; i++) {
    for ( j = 0 ; j < pobinums[i].length ; j++) {
      pobi_multiply[i] *= pobinums[i][j];
    }
  }
  //console.log("포비 곱하기_1",pobi_multiply[0])
  //console.log("포비 곱하기_2",pobi_multiply[1])
  
  let crong_multiply = [1,1]

  for ( i = 0 ; i < crongnums.length ; i++) {
    for ( j = 0 ; j < crongnums[i].length ; j++) {
      crong_multiply[i] *= crongnums[i][j];
    }
  }
  //console.log("크롱 곱하기_1",crong_multiply[0])
  //console.log("크롱 곱하기_2",crong_multiply[1])

  let pobi_max = Math.max(Math.max(...pobi_plus), Math.max(...pobi_multiply))
  let crong_max = Math.max(Math.max(...crong_plus), Math.max(...crong_multiply))

  //console.log(pobi_max, crong_max)

  let res
  if ( pobi_max < crong_max) {
    res = 2
  }else if ( pobi_max > crong_max) {
    res = 1
  } else if ( pobi_max == crong_max) {
    res = 0
  }
  
  return res

}






module.exports = problem1;
