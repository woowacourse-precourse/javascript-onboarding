function problem7(user, friends, visitors) {
  var answer = [];
  let list = [];
  let tens = [];
  let ones = [];
  let result = [];
  let dummy = [];

  for (let i = 0; i < friends.length; i++) {
    if (user === friends[i][0]) {
      list.push(friends[i][1]);
    } else if (user === friends[i][1]) {
      list.push(friends[i][0]);
    }
  }

  for (let i = 0; i < list.length; i++) {
    for (let j = 0; j < friends.length; j++) {
      if (list[i] === friends[j][0] && friends[j][1] !== user) {
        tens.push(friends[j][1]);
      } else if (list[i] === friends[j][1] && friends[j][0] !== user) {
        tens.push(friends[j][0]);
      }
    }
  }

  //10점 계산
  for (let i = 0; i < tens.length; i++) {
    if (tens.indexOf(tens[i]) === i) {
      result.push({ name: tens[i], score: 10 });
    } else if (tens.indexOf(tens[i]) !== i) {
      result[tens.indexOf(tens[i])].score += 10;
    }
  }

  //let temp = result.length;
  for (let i = 0; i < result.length; i++) {
    dummy.push(result[i].name);
  }

  //1점 계산 : 친구 제외
  for (let i = 0; i < visitors.length; i++) {
    //visitors=[b,b,d,b,s]
    //list:[d,s]
    //result=[name,score][3]

    if (!list.includes(visitors[i])) {
      if (dummy.includes(visitors[i])) {
        //result에 있는 visitor인 경우 result.score에 +1
      //  result의 특정 i의 score에 +1
        // result[visitors.indexOf(visitors[i])].score += 1;
        result[dummy.indexOf(visitors[i])].score += 1;
      } else if (visitors.indexOf(visitors[i]) === i) {
        result.push({ name: visitors[i], score: 1 });
        dummy.push(visitors[i]);
      } else if (visitors.indexOf(visitors[i]) !== i) {
        result[dummy.indexOf(visitors[i])].score += 1;
      }
    }
  }

  return result;

  //우선 user와 친구면 로직에서 제외
  //기능요구: 점수 높은순 + 이름순 정렬 (최대 5명) + 추천 점수가 0인 경우 추천 x
  //제한사항:
  // 대상user는 길이 1~30의 문자열
  // friends는 길이 1~10000의 배열,
  // friends의 원소는 [아이디A, 아이디B] 꼴의 길이2배열, 아이디는 문자열, 길이 1~30
  // visitors는 길이 0~10000의 배열
  // 모든 id는 문자열, 알파벳소문자
  // 동일 친구관계 중복 ㄴ, 추천친구 없는 경우 return ;
}

module.exports = problem7;