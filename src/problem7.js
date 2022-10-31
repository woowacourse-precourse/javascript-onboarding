function problem7(user, friends, visitors) {
  const friendOfUser = friends.map((i) => i[0]);
  const friendScore = searchByFriends(user, friends, friendOfUser);
  const visitorScore = searchByVisitor(visitors, friendOfUser);
  const answer = recommandByScore(friendScore, visitorScore);

  return answer;
}

module.exports = problem7;

const recommandByScore = (friendScore, visitorScore) => {
  const totalScore = {};

  Object.entries(visitorScore).map(([name, score]) => {
    if (totalScore[name]) {
      totalScore[name] += score;
    } else {
      totalScore[name] = score;
    }
  });

  if (!friendScore) return totalScore;

  Object.entries(friendScore).map(([name, score]) => {
    if (totalScore[name]) {
      totalScore[name] += score;
    } else {
      totalScore[name] = score;
    }
  });

  const totalScoreArray = convertArray(totalScore);
  const totalScoreSortedArray = sortByScore(totalScoreArray);
  const resultValue = totalScoreSortedArray.map((i) => i.name).slice(0.5);

  return resultValue;
};

const sortByScore = (totalScoreArray) => {
  const resultValue = totalScoreArray.sort((x, y) => {
    if (x.score < y.score) {
      return 1;
    } else if (x.score > y.score) {
      return -1;
    } else if (x.name < y.name) {
      return -1;
    } else if (x.name > y.name) {
      return 1;
    } else {
      return 0;
    }
  });

  return resultValue;
};

const convertArray = (totalScore) => {
  const resultValue = Object.entries(totalScore).map(([name, score]) => {
    return { name: name, score: score };
  });

  return resultValue;
};

const searchByVisitor = (visitors, friendOfUser) => {
  const visitScore = visitors.reduce((acc, cur, i) => {
    if (friendOfUser.includes(cur)) return acc;

    if (acc[cur]) {
      acc[cur] += 1;
    } else {
      acc[cur] = 1;
    }

    return acc;
  }, {});

  return visitScore;
};

const isCurrentFriend = (name, friendOfUser) => {
  let resultValue;
  if (friendOfUser.includes(name)) {
    resultValue = true;
  }
  resultValue = false;

  return resultValue;
};

/* 
  1) friends의 두 번째 요소들과 visitor를 concat으로 합치기
  2) 중복을 제거
  3) object 생성.
*/

const searchByFriends = (user, friends, friendOfUser) => {
  if (!friends) return;

  const newFriendsFilter = friends.filter((i) => {
    let resultValue;
    const currentFriend = isCurrentFriend(i[1], friendOfUser);
    if (i[1] !== user && !currentFriend) {
      resultValue = true;
    } else {
      resultValue = false;
    }

    return resultValue;
  });

  const newFriends = newFriendsFilter.map((i) => i[1]);
  const friendScore = newFriends.reduce((acc, cur, i) => {
    if (acc[cur]) {
      acc[cur] += 10;
    } else {
      acc[cur] = 10;
    }

    return acc;
  }, {});

  return friendScore;
};

/*
 친구 추천 알고리즘
 사용자와 함께 아는 친구의 수 = 10점
 사용자의 타임라인에 방문한 횟수 = 1점

 user : 유저 이름
 friends : 친구 관계가 담긴 2차원 배열.
 visitors : 타임라인 방문 기록

 ## result 정렬.
 점수가 높은 순으로 최대 5명 정렬.
 점수 같은 경우엔 이름순으로 정렬.

 ## 구현할 것
 1. 현재 친구 : friends.map((i)=>i[0]);
   - 추천 친구에서 제외해야함.
 2. 친구의 친구 : friends.map((i)=>i[1]);
   1) 본인, 현재 친구 제외
   2) 점수 부여
   3) sort후 return
     - 동일 점수시 이름 순으로 정렬.
 */
