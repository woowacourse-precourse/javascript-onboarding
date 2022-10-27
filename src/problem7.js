function problem7(user, friends, visitors) {
  

  //visit 했다면 1점 추가

  let answer = [];
  let result = [];
  let map = new Map();

  //friens 로 필터
  for (let friend of friends) {
    if (!friend.includes(user)) {
      for (let a of friend) {
      //건너건너 아는 치구라면 10점
        map.set(a, 10);
      }
    } else {
      for (let a of friend) {
        //직접 아는 친구라면 0점
        map.set(a, 0);
      }
    }
  }
  // console.log(map);
  

  //visitors 로 필터
  //-> 다만! 현재까지의 map 에서 0점이 있다면 추천하지 않는다
  //-> 즉 추가 하지 않고 여전히 0점 지속
  for (let visitor of visitors) {
    //신규 친구 = map 에 존재하지 않다면 새로 1점 set
    if (!map.has(visitor)) {
      map.set(visitor, 1);
    } else if (map.get(visitor) !== 0) {
      //0점이 아니고 점수가 있다면 1점 추가
      map.set(visitor, map.get(visitor) + 1);
    }
  }
  
  //result 배열에 담고 점수를 기준으로 내림차순
  result = [...map].sort((r1, r2) => r2[1] - r1[1]);

  //0점이 아닌 것만 추출
  for (let i = 0; i < result.length; i++){
    if (result[i][1] === 0) {
      continue;
    } else {
      answer.push(result[i][0]);
    }
  }
  // console.log(result);
  // console.log(map);
  return answer;
}

module.exports = problem7;
