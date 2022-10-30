function problem7(user, friends, visitors) {
  var score = [];
  var real_friends = [];
  var answer = [];

  // * User 친구 찾기
  const find_friends = (user) => {
    // * user 아이디는 소문자, user 길이는 1이상 30이하인 문자열
    if (user.length >= 1 && user.length <= 30 && user == user.toLowerCase()) {
      for (var i = 0; i < friends.length; i++) {
        for (var j = 0; j < 2; j++) {
          // * 친구 배열 중 user와 친구가 있다면 real_friends 배열에 push
          if (friends[i][j] == user) {
            real_friends.push(friends[i][0]);
          }
        }
      }
      return real_friends;
    }
  };
  real_friends = find_friends(user);

  // * User 친구의 친구 찾고 10점 부여
  const friends_friends_score = (real_friends) => {
    // * friends 배열 길이 1이상 10,000이하
    if (friends.length >= 1 && friends.length <= 10000) {
      for (var i = 0; i < real_friends.length; i++) {
        // * friends 각 원소의 길이 2
        if (friends[i].length == 2) {
          for (var j = 0; j < friends.length; j++) {
            // * User의 친구이고 User 친구의 친구가 User가 아니라면
            if (real_friends[i] == friends[j][0] && friends[j][1] !== user) {
              score[friends[j][1]] = 10;
              // * 이미 존재하면 +10
              if (Object.keys(score).includes(friends[j][1])) {
                score[friends[j][1]] += 10;
              }
            }
          }
        }
      }
    }
  };

  // * 방문자 중 User 친구 있으면 visitors에서 제거하기 위함
  const remove_visitor = (real_friends) => {
    for (var i = 0; i < real_friends.length; i++) {
      for (var j = 0; j < visitors.length; j++) {
        if (visitors[j] == real_friends[i]) {
          // * User 친구라 확인될 시, splice를 이용해 j번째부터 1개 제거
          visitors.splice(j, 1);
        }
      }
    }
  };

  // * visitors 배열에 있는 방문자를 score Object에 추가하고 value 값을 0으로 초기화
  const score_init = () => {
    for (var i = 0; i < visitors.length; i++) {
      score[visitors[i]] = 0;
    }
  };

  // * 방문자에게 점수
  const visitors_score = (real_friends) => {
    remove_visitor(real_friends);
    // * 방문자 배열 길이 0이상 1,000이하
    if (visitors.length >= 0 && visitors.length <= 10000) {
      for (var i = 0; i < visitors.length; i++) {
        score_init();
        // * 만약 방문자의 이름이 score의 key에 이미 존재 한다면
        if (Object.keys(score).includes(visitors[i])) {
          score[visitors[i]] += 1;
        }
      }
    }
  };

  // * score의 오브젝트 value가 0이 아니고 내림차순 정렬한 뒤, answer에 key들만 추출
  const score_sort = () => {
    friends_friends_score(real_friends);
    visitors_score(real_friends);
    // * score가 존재한다면
    if (score) {
      for (var i = 0; i < 5; i++) {
        // * score object의 value가 0이 아니면
        if (Object.values(score) !== 0) {
          Object.entries(score).sort((a, b) => b[1] - a[1]); // * score를 내림차순으로 정렬
          return Object.keys(score);
        }
      }
    }
  };

  answer = score_sort();

  return answer;
}

module.exports = problem7;
