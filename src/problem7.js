function problem7(user, friends, visitors) {
  var answer;

  const relations = new Map();
  let alreadyFriends = [];

  // 각 친구끼리 연결도 형성
  for (const people of friends) {
    for (let i = 0; i < 2; i++) {
      // 0이면 앞 이름을 기준으로 그래프 생성
      // 1이면 뒤 이름을 기준으로 그래프 생성
      // 서로 연결되어 있음을 의미
      if (i === 0) {
        addPerson(people[0], people[1], relations);
      } else {
        addPerson(people[1], people[0], relations);
      }
    }
  }

  // friends 추천 점수 부여
  relations.forEach((val, key, map) => {
    //먼저 그래프 안에 user를 찾음
    if (key === user) {
      //user의 친구들을 찾음
      alreadyFriends = val.slice(1);
      checkRecommendFriend(user, alreadyFriends, map);
    }
  });

  //visitors 추천 점수 부여
  for (const visitor of visitors) {
    if (!alreadyFriends.includes(visitor)) {
      if (!relations.has(visitor)) {
        relations.set(visitor, [1]);
      } else {
        relations.get(visitor)[0] += 1;
      }
    }
  }

  // 이름과 점수만 있는 배열 따로 생성
  const answerArr = [];
  relations.forEach((val, key) => {
    if (val[0] !== 0) answerArr.push([key, val[0]]);
  });
  //점수순 그 다음엔 이름 순으로 정렬
  answerArr.sort((a, b) => {
    if (b[1] > a[1]) return 1;
    if (b[1] < a[1]) return -1;
    if (a[0] > b[0]) return 1;
    if (a[0] < b[0]) return -1;
    return 0;
  });
  // 점수를 뺀 배열을 답으로 제출
  answer = answerArr.map((el) => el[0]).slice(0, 5);
  return answer;
}

// Map을 통해 관계 그래프 생성
function addPerson(me, friend, relations) {
  if (!relations.has(me)) {
    // value 값으로 0은 추천점수임
    relations.set(me, [0, friend]);
  } else {
    relations.get(me).push(friend);
  }
}

// 추천친구와 사용자가함께 아는 친구가 있을 시 추천 친구에게 10점씩 부여
function checkRecommendFriend(user, overlapFriends, map) {
  map.forEach((val, key) => {
    if (!overlapFriends.includes(key) && key !== user) {
      for (let i = 1; i < val.length; i++) {
        if (overlapFriends.includes(val[i])) {
          map.get(key)[0] += 10;
        }
      }
    }
  });
}

module.exports = problem7;
