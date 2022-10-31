function problem7(user, friends, visitors) {
  // user와 친구인 사용자 아이디 배열
  const alreadyFriend = [];
  // 아이디를 키 점수를 값으로 가지고 있는 score객체
  const scoreObj = {};

  friendCheck(user, friends, alreadyFriend);

  // friends 점수 얻기
  alreadyFriend.forEach((element) => {
    friends.forEach((targetElement) => {
      // targetElement 첫번째 요소의 사용자 아이디가 user와 이미 친구인 사용자의 아이디라면
      if (targetElement[0] === element) {
        // score객체에서 키 값이 비어있고 그 키 값이 user가 아니라면 채워주고 10점을 부여한다.
        if (!scoreObj[targetElement[1]] && targetElement[1] !== user) {
          scoreObj[targetElement[1]] = 10;
          // score 객체에서 키 값이 비어있지 않고 그 키 값이 user가 아니라면 이미 있는 값에 10점을 더한다.
        } else if (targetElement[1] !== user) {
          scoreObj[targetElement[1]] += 10;
        }
      }
      // targetElement 두번째 요소의 사용자 아이디가 user와 이미 친구인 사용자의 아이디라면
      else if (targetElement[1] === element) {
        if (!scoreObj[targetElement[0]] && targetElement[0] !== user) {
          scoreObj[targetElement[0]] = 10;
        } else if (targetElement[0] !== user) {
          scoreObj[targetElement[0]] += 10;
        }
      }
    });
  });

  // visitors score 얻기
  visitors.forEach((element) => {
    if (!alreadyFriend.includes(element)) {
      if (!scoreObj[element]) {
        scoreObj[element] = 1;
      } else {
        scoreObj[element] += 1;
      }
    }
  });

  // entries()는 객체가 가지고 있는 모든 프로퍼티를 키와 값 쌍으로 배열 형태로 반환
  const scoreArr = Object.entries(scoreObj);

  scoreArr.sort(([name1, score1], [name2, score2]) => {
    if (score1 === score2) {
      return name1.localeCompare(name2);
    }
    return score2 - score1;
  });

  const result = scoreArr.slice(0, 5).map(([name, score]) => name);
  return result;
}

function friendCheck(user, friends, alreadyFriend) {
  // friends 원소 0또는 1자리에 원소가 user와 일치하면 1또는 0자리는 user와 친구인 사용자의 아이디 일 것이다.
  friends.forEach((element) => {
    if (element[0] === user) {
      alreadyFriend.push(element[1]);
    } else if (element[1] === user) {
      alreadyFriend.push(element[0]);
    }
  });

  return alreadyFriend;
}

module.exports = problem7;
