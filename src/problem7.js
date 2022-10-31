// < 기능 목록 >
// 1. 친구 추천 점수 매기기
//    - 사용자와 함께 아는 친구의 수 카운트
//        + 사용자의 친구 목록
//    - 사용자의 타임 라인에 방문한 횟수 카운트
//    [예외처리] 이미 친구인 경우
// 2. 추천 점수가 높은 순으로 정렬하여 5명만 뽑는다
//    [예외처리] 점수가 같은 사용자가 있을 경우는 이름순으로 정렬
//    [예외처리] 추천 점수가 0점 이상인 사용자가 4명 이하인 경우

function problem7(user, friends, visitors) {
  var answer = [];  // [ name, score ]
  var user_friends = []; // user의 친구 목록
  
  // user_firends 설정 (사용자의 친구 목록)
  for(f of friends) {
    if(f[0] == user) user_friends.push(f[1]);
    else if(f[1] == user) user_friends.push(f[0]);
  }

  // answer 초기화 (추천 친구 후보들)
  for(f of friends) {
    answer.push([f[0], 0]);
    answer.push([f[1], 0]);
  }
  for(v of visitors) {
    answer.push([v, 0]);
  }


  answer = answer.sort().filter(function(item, idx, array) {
      if(item[0] == user) return false; // user 제외
      // user 친구들 제외
      for(f of user_friends) {
        if(f == item[0]) return false;
      }
      return !idx || item[0] != array[idx - 1][0]; // 중복값 제외
    });

  // 사용자와 함께 아는 친구의 수 카운트
  for(f of friends) {
    for(uf of user_friends) {
      if(uf == f[0] && user != f[1]) {
        for(var i = 0; i < answer.length; i++) {
          if(f[1] == answer[i][0]) answer[i][1] += 10;
        }
      }
      if(uf == f[1] && user != f[0]) {
        for(var i = 0; i < answer.length; i++) {
          if(f[0] == answer[i][0]) answer[i][1] += 10;
        }
      } 
    }
  }

  // 사용자의 타임 라인에 방문한 횟수 카운트
  for(v of visitors) {
    for(var i = 0; i < answer.length; i++) {
      if(v == answer[i][0]) answer[i][1]++;
    }
  }

  // 추천 점수가 높은 순으로 정렬, 같을 경우 이름 순
  answer.sort(function(a, b) {
    if(a[1] < b[1]) return 1;
    else if(a[1] > b[1]) return -1;
    else return a[0].localeCompare(b[0]);
  });

  return answer;
}

module.exports = problem7;
