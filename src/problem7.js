//user의 친구 목록
function findUserFriend(user, friends) {
  let userFriendsList = [];
  for (let i = 0; i < friends.length; i++) {
    for (let j = 0; j < friends[i].length; j++) {
      if (friends[i][j].includes(user)) {
        if (j == 0) userFriendsList.push(friends[i][1]);
        else userFriendsList.push(friends[i][0]);
      }
    }
  }

  return userFriendsList;
}

//사용자와 함께 아는 친구 찾기 - 10점 부여
function knowWithFriend(userFriends, scores, friends, user) {

  userFriends.forEach((uFriend) => {
    friends.forEach((friend) => {
      if (friend.includes(uFriend) && !friend.includes(user)) {
        let withFriend = friend[0] == uFriend ? friend[1] : friend[0];
        scores[withFriend] = scores[withFriend] + 10 || 10;
      }
    });
  });

  return scores;
}

//방문자들 점수 - 1점 부여
function visitorsScore(visitors, scores, userFriends) {
  visitors.forEach((visitor) => {

    //사용자 친구는 제외
    let noFriend = true;
    for (let i = 0; i < userFriends.length; i++) {
      if (userFriends[i].includes(visitor)) {
        noFriend = false;
      }
    }
    if (noFriend) {
      scores[visitor] = scores[visitor] + 1 || 1;
    }
  })

  return scores;
}

//친구 추천 - 정렬
function recommandFriends(scores) {

  //점수가 높은 순으로 정렬
  const sortable = Object.fromEntries(Object.entries(scores).sort((a, b) => {
    if (a[1] !== b[1]) return b[1] - a[1];
    //점수가 같으면 이름 순서로 정렬
    else {
      if (a[0] < b[0]) return -1;
      else if (a[0] > b[0]) return 1;
      else return 0;
    }
  }));

  //key만 배열로 가져오기
  let sortedArr = Object.keys(sortable);
  let resultFriends = [];

  //최대 5개만 출력
  if (sortedArr.length > 5) {
    for (let i = 0; i < 5; i++) {
      resultFriends[i] = sortedArr[i];
    }
  }
  else {
    resultFriends = sortedArr;
  }

  return sortedArr;
}

//user ID 검사
function isNormalID(user) {
  //길이
  let length = user.length;
  //전부 소문자인지 검사
  if (length >= 1 && length <= 30) {
    if (user == user.toLowerCase()){
      return true;
    }
  }
  return false;
}

//friends 배열 검사
function isFriendsLenghtOk(friends) {
  //배열의 길이
  let length = friends.length;
  //원소의 길이
  let friend;

  if (length >= 1 && length <= 10000) {
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < friends[i].length; j++) {
        friend = friends[i][j];

        if (friend.length >= 1 && friend.length <= 30) continue;
        else return false;
      }

    }
    return true;
  }
  else return false;

}

function isVisitorsLengthOk(visitors) {
  let length = visitors.length;

  if (length >= 0 && length <= 10000) return true;
  else return false;
}

function problem7(user, friends, visitors) {
  var answer;

  if (isNormalID(user)) {

    if (isFriendsLenghtOk(friends)) {

      if (isVisitorsLengthOk(visitors)) {
        //점수표
        let scores = {};

        //friends에서 사용자의 친구 찾기
        let userFriends = findUserFriend(user, friends);

        //사용자와 함께 아는 친구 점수 10점씩 주기
        scores = knowWithFriend(userFriends, scores, friends, user);

        //방문자들 점수 1점씩 부여
        scores = visitorsScore(visitors, scores, userFriends);

        //추천 친구 출력
        let result = recommandFriends(scores);

        answer = result;
        return answer;
      }
      else {
        console.log("잘못된 visitors배열 길이 입니다.");
        return;
      }
    }
    else {
      console.log("잘못된 Friends배열 길이 입니다.");
      return;
    }
  }
  else {
    console.log("잘못된 user이름 입니다.");
    return;
  }

}

module.exports = problem7;

