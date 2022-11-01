function problem7(user, friends, visitors) {
  var answer;

  var friendset = new Set(); //user와 친구의 배열
  var overlapFriendSet = new Set(); //user와 함께 아는 친구의 배열

  var friendlist = new Set();
  var friendScoreArr = []; //추천점수 포함

  const findFriend = (target) => {
    //target으로 들어오는 매개변수의 친구를 찾아서 배열에 저장
    for (var i = 0; i < friends.length; i++) {
      for (var j = 0; j < 2; j++) {
        if (friends[i][j] === target) {
          target === user
            ? friendset.add(friends[i][j === 0 ? 1 : 0])
            : overlapFriendSet.add(friends[i][j === 0 ? 1 : 0]);
        }
      }
    }
  };

  const friendsScore = (overlapFriendSet) => {
    //함께 아는 친구 정리 및 점수 매기기
    overlapFriendSet.delete(user); //함께 아는 친구의 배열에서 user 제거
    Array.from(friendset).forEach((element) =>
      overlapFriendSet.delete(element)
    );
    friendlist = overlapFriendSet;

    var setToArr = Array.from(overlapFriendSet);
    setToArr.forEach((element) => friendScoreArr.push([element, 10]));
  };

  const visitorsScore = (visitors) => {
    //타임라인에 방문한 친구 검색 후 점수계산
    var visitorsSet = new Set();

    visitors.forEach((element) => visitorsSet.add(element)); //visitors 배열의 중복 제거를 위해 set으로 변환
    friendset.forEach((element) => {
      //이미 친구인 경우 삭제
      visitorsSet.delete(element);
    });

    visitorsSet.forEach((item) => {
      var index = visitors.indexOf(item); //visitors 배열 안에 방문한 아이디의 인덱스
      var indexArr = []; //index의 배열

      while (index != -1) {
        indexArr.push(index);
        index = visitors.indexOf(item, index + 1);
      }

      var overlap = "";

      friendScoreArr.forEach((element) => {
        if (element.indexOf(item) !== -1) {
          element[1] = element[1] + indexArr.length;
          overlap = item;
        }
      });
      if (overlap !== item) {
        friendScoreArr.push([item, indexArr.length]);
      }
      friendlist.add(item);
    });
  };

  const sort = (friendScoreArr) => {
    //점수가 가장 높은 순으로 정렬. 점수가 동일한 경우 이름순으로 정렬

    friendScoreArr.sort((a, b) => {
      if (b[1] - a[1] === 0) {
        return a[0] < b[0] ? -1 : a[0] > b[0] ? 1 : 0;
      } else {
        return b[1] - a[1];
      }
    });

    if (friendScoreArr.length > 5) {
      //최대 5명 제한
      friendScoreArr.slice(0, 4);
    }

    var result = [];
    friendScoreArr.forEach((element) => result.push(element[0]));
    answer = result;
  };

  findFriend(user); //user의 친구 찾기
  friendset.forEach((element) => findFriend(element)); //user와 함계 아는 친구 찾기
  friendsScore(overlapFriendSet); //사용자와 함께 아는 친구의 수 관련 추천점수 계산

  visitorsScore(visitors); //사용자의 타임 라인에 방문한 횟수 관련 추천점수 계산

  sort(friendScoreArr);

  return answer;
}

module.exports = problem7;
