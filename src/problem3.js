function problem3(number) {
  let answer = 0;
  console.log('this is problem 3')
  for ( let i = 1 ; i < number+1 ; i ++ ) {
    // 3, 6, 9의 개수만큼 손뼉을 쳐야 한다.
    for ( let j = 0 ; j < String(i).length ; j ++ ) {
      if ( String(i)[j].includes('3') || String(i)[j].includes('6') || String(i)[j].includes('9') ) {
        answer += 1
      }
    }
  }
  console.log(answer) 
  return answer;
}

module.exports = problem3;
