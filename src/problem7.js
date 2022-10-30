function problem7(user, friends, visitors) {
  let answer = [];

  //친구 관계에서 친구 목록 가져오기
  let list1 = [];
  for (let i = 0; i < friends.length; i++) {
    let splitFriends = friends[i].slice();
    splitFriends.forEach((element) => {
      list1.push(element);
    });
  }

  //방문 기록에서 친구 목록 가져오기
  const list2 = list1.concat(visitors);

  //하나의 친구 목록으로 만들기(중복 제거 / 사용자, 사용자 친구 제외하기)
  let friendsList = new Set(list2);
  friendsList.delete(user);
  friends.map((name) => {
    if (name.includes(user)) {
      friendsList.delete(name.filter((name) => name !== user).join());
    }
  });
  //다시 배열로 전환
  friendsList = [...friendsList];

  //추천 점수를 매길 친구 배열 생성
  let friendsScore = new Array(friendsList.length);
  for (let i = 0; i < friendsScore.length; i++) {
    friendsScore[i] = [friendsList[i], 0];
  }

  //사용자와 함께 아는 친구일 때
  let userFriend = "";
  let friendFriends = "";

  friends.map((first) => {
    if (first.includes(user)) {
      userFriend = first.filter((el) => el !== user).join();

      friends.map((second) => {
        if (second.includes(userFriend)) {
          friendFriends = second.filter((el) => el != userFriend).join();

          for (let i = 0; i < friendsScore.length; i++) {
            if (friendsScore[i][0] === friendFriends) {
              friendsScore[i][1] += 10;
            }
          }
        }
      });
    }
  });

  //사용자의 타임 라인에 방문했을 때
  for (let i = 0; i < visitors.length; i++) {
    for (let j = 0; j < friendsScore.length; j++) {
      if (friendsScore[j][0] === visitors[i]) {
        friendsScore[j][1] += 1;
      }
    }
  }

  friendsScore.sort((a, b) => b[1] - a[1]);
  for(let i=0; i<friendsScore.length; i++) {
    answer.push(friendsScore[i][0]);
  }

  return answer;
}

module.exports = problem7;
