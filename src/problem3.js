function problem3(number) {
  let result = 0;
  const pattern = /[^369]/g

  for(let i = 1;i<=number;i++){
    result+=`${i}`.replace(pattern,"").length
  }
  return result
}
// 예시 
// number에 13 
// 1 2  +3 4 5 +6 7 8 +9 10 11 12 1  +3 
// 숫자는 숫자를 말하는 대신 3, 6, 9의 개수만큼 손뼉을 쳐야 한다.
// 3 + 6 + 9 + 3
// 3 6 9 를 더하는게 아니라 .. 박수친 횟수구나 
// 3 6 9 로 나눠서 반올림 ?

// 1부터 1씩 올리면서
// 문자열 파싱을 이용하쟛
// let str = "13261315615619"
// const pattern = /[^369]/g
// replace(pattern,"")



module.exports = problem3;
