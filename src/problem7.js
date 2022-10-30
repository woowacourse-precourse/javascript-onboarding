const point = {
  knowFriend: 10,
  timeline: 1,
};

function problem7(user, friends, visitors) {
  const friendList = new Map();
  const pointList = new Map();
  const answer = [];

  // 유저별 친구목록을 파싱한다.
  friends.map((friend) => {
    if (friendList.has(friend[0])) {
      const friendArray = friendList.get(friend[0]);
      if (!friendArray.includes(friend[1])) {
        friendList.set(friend[0], [...friendArray, friend[1]]);
      }
    } else {
      friendList.set(friend[0], [friend[1]]);
    }

    if (friendList.has(friend[1])) {
      const friendArray = friendList.get(friend[1]);
      if (!friendArray.includes(friend[1])) {
        friendList.set(friend[1], [...friendArray, friend[0]]);
      }
    } else {
      friendList.set(friend[1], [friend[0]]);
    }
  });
  console.debug(friendList);

  // 추천알고리즘을 위해 추천 점수를 매기기 위한 Map을 만들어 준다.
  for (let name of friendList.keys()) {
    pointList.set(name, 0);
  }

  const userFriends = friendList.get(user);

  // 사용자와 함께 아는 친구의 수 만큼 10점을 더해준다.
  for (let [key, value] of friendList) {
    if (key !== user) {
      userFriends.map((userFriend) => {
        if (value.includes(userFriend)) {
          pointList.set(key, pointList.get(key) + point.knowFriend);
        }
      });
    }
  }
  // 타임임라인에 방문한 사람에게 1점을 더해준다.
  visitors.map((visitor) => {
    if (!userFriends.includes(visitor)) {
      pointList.has(visitor)
        ? pointList.set(visitor, pointList.get(visitor) + point.timeline)
        : pointList.set(visitor, point.timeline);
    }
  });

  // 점수별로 정렬, 만약 점수가 같다면 이름순으로 정렬한다.
  const sortedPointList = [...pointList].sort((a, b) => {
    if (b[1] === a[1]) {
      if (a[0] > b[0]) return 1;
      if (a[0] < b[0]) return -1;
      if (a[0] === b[0]) return 0;
    } else return b[1] - a[1];
  });

  sortedPointList.map((point) => {
    if (point[1] !== 0) answer.push(point[0]);
  });

  return answer;
}

module.exports = problem7;

// 사용자와 함께 아는 친구의 수 10
// 사용자의 타임 라인에 방문한 횟수 1
// 친구관계 friends, 타임라인 방문기록 visitors
// 점수가 가장 높은 순으로 정렬, 최대 5명을 리턴,
// 점수가 0일경우 리턴 x, 만약 점수가 같은 경우 이름 순으로.

// 도넛 안돌 준 마르코
// 안돌 도넛 사케반
// 마르코 도넛 사케반
// 사케반 안돌 준 마르코
// 준 도넛 사케반
