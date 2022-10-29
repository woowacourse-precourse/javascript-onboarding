function problem1(pobi, crong) {
  // 예외사항 return -1
  if (pobi[1] != pobi[0] + 1 || crong[1] != crong[0] + 1){return -1}
  // pobi와 crong의 각 자리수 합, 곱에 대한 리스트 선언 
  let pobi_max_ls = []
  let crong_max_ls = []
  // 합, 곱 초기화
  let pobi_sum = 0
  let crong_sum = 0
  let pobi_mul = 1
  let crong_mul = 1

  let pobi_num = pobi[1].toString()
  let crong_num = crong[1].toString()
  for(let i=0; i < pobi_num.length;i++){
    pobi_sum += parseInt(pobi_num[i])
    pobi_mul *= parseInt(pobi_num[i])
  }
  pobi_max_ls.push(pobi_sum, pobi_mul)

  for(let i=0; i < crong_num.length;i++){
    crong_sum += parseInt(crong_num[i])
    crong_mul *= parseInt(crong_num[i])
  }
  crong_max_ls.push(crong_sum, crong_mul)

  const pobi_max = Math.max.apply(null, pobi_max_ls)
  const crong_max = Math.max.apply(null, crong_max_ls)

  if (pobi_max > crong_max){
    return 1
  }else if(pobi_max < crong_max){
    return 2
  }else{
    return 0
  }
}

module.exports = problem1;
