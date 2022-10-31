// 기능 구현 목록
// - 서로 친구인 사용자 객체를 만드는 함수 생성
// - 친구 관계 객체 생성
// - user의 친구를 담은 Set 생성
// - 함께 아는 친구의 수 판별 & 점수부여
// - 타임라인에 방문한 횟수 count & 점수부여
// - 점수가 0을 초과하는 사용자를 담은 배열 생성 & 내림차순 정렬
// - 최대 5명의 친구 추천

function problem7(user, friends, visitors) {
  const friendsObj = {};
  var answer = [];

  function saveFriend(one, two) {
    if (one in friendsObj) {
      friendsObj[one][0].push(two);
    } else {
      friendsObj[one] = [[], 0];
      friendsObj[one][0].push(two);
    }
  }

  friends.forEach((element) => {
    saveFriend(element[0], element[1]);
    saveFriend(element[1], element[0]);
  });

  const userFriendsSet = new Set(friendsObj[user][0]);

  for (const key in friendsObj) {
    if (key === user) {
      continue;
    }
    friendsObj[key][0].forEach((element) => {
      if (userFriendsSet.has(element)) {
        friendsObj[key][1] += 10;
      }
    });
  }

  visitors.forEach((element) => {
    if (element in friendsObj) {
      friendsObj[element][1] += 1;
    } else {
      friendsObj[element] = [[], 1];
    }
  });

  const newMate = [];
  for (mate in friendsObj) {
    if (friendsObj[mate][1] > 0) {
      newMate.push([mate, friendsObj[mate][1]]);
    }
  }

  newMate.sort((a, b) => b[1] - a[1]);

  for (let i = 0; i < newMate.length; i++) {
    if (i === 5) break;
    if (userFriendsSet.has(newMate[i][0])) continue;
    answer.push(newMate[i][0]);
  }

  console.log(friendsObj);

  return answer;
}

module.exports = problem7;
