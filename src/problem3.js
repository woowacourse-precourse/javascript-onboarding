function problem3(number) {

  // 0부터 number까지의 배열을 만들고 join 메소드를 통해 문자열로 만들어줍니다. 
  const allNumbers = Array.from({length: number}, (_,i) => i+1).join('')

  // 모든 문자열에서 3, 6, 9 문자는 모두 배열에 담아져서 반환이 됩니다. 
  const answer = allNumbers.match(/[3|6|9]/g);

  // 해당 배열이 곧 3, 6, 9의 갯수이므로 length로 반환을 합니다.
  return answer.length;
}

module.exports = problem3;