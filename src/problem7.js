function problem7(user, friends, visitors) {
  var answer;
  const usersFriends = [];
  // 1) 유저의 친구목록을 만듭니다
  usersFriends.push(...findUsersFriend(friends, user));

  // 2) 유저의 친구의 친구목록을 만듭니다
  let relation = [];
  for (const usersFriend of usersFriends) {
    relation.push(...findUsersFriend(friends, usersFriend));
  }
  // 문제발생) 유저도 결국 그들의 친구여서 중복되는 현상 발생
  // 문제해결 1) 다음단계로 가기 전에 _지금단계에서_ 유저를 배열에서 지우는거 [o]
  relation = relation.filter((nickname) => nickname !== user);

  // 3) 친구추천리스트를 객체롤 만듭니다. 점수를 저장하기 위해서
  // 닉네임 : 점수
  const recommendList = {};

  // 4) 친구의 친구에겐 10점을 더해줍니다.
  for (const may_know of relation) {
    if (recommendList[may_know] === undefined) {
      recommendList[may_know] = 10;
    } else if (recommendList[may_know]) {
      recommendList[may_know] += 10;
    }
  }

  // 4) 방문자에겐 1점을 더해줍니다.
  for (const visitor of visitors) {
    if (usersFriends.includes(visitor)) {
      continue;
    } else if (recommendList[visitor] === undefined) {
      recommendList[visitor] = 1;
    } else if (recommendList[visitor]) {
      recommendList[visitor] += 1;
    }
  }

  answer = Object.entries(recommendList);
  // 점수를 기준으로 내림차순 정렬이 기본입니다
  // 동점이라면 닉네임순으로 정렬합니다.
  answer = answer
    .sort((a, b) => {
      if (b[1] - a[1] === 0) {
        return a[0] > b[0] ? 1 : -1;
      }
      return b[1] - a[1];
    })
    .map((el) => el[0]);

  return answer;
}

// 친구관계를 담은 2차원배열과, 유저닉네임을 넘기면 유저의 친구목록을 배열로 반환
function findUsersFriend(friends, user) {
  const result = [];
  friends.forEach((relation) => {
    const IDX_USER = relation.indexOf(user);
    if (IDX_USER !== -1) {
      result.push(relation[1 - IDX_USER]);
    }
  });
  return result;
}

module.exports = problem7;
