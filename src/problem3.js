function problem3(number) {
  let answer = 0;
    
  for(let i = 1; i < number + 1; i++) {
      let temp = i + ""; // 문자열로 변환
      let matched_txt = temp.match(/3|6|9/g);
      
      if(matched_txt !== null) answer += matched_txt.length;
  }
  
  // 예외처리
  if(number < 1 || number > 1000) answer = "예외사항"
  return answer;
}

module.exports = problem3;
