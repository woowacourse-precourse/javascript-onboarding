/*
 * 기능 분석
 * [x] friends에 대한 친구 내용과 관계를 friendList에 저장하는 기능
 * [] user의 친구의 친구 중 user와 친구를 맺지 않은 친구들에 대한 선택 및 10점씩 추가 기능
 * [] user의 친구의 친구 중 user와 친구를 맺지 않은 친구들이 visitor에 존재하는 갯수만큼 1점씩 추가 기능
 * [] 점수가 결정된 친구에 대한 recommendList에 저장하기
 * [] user의 친구의 친구는 아니지만 visitor에 있는 인원에 대한 점수 계산 및 recommendList에 저장
 * [] recommendList에 저장될 때 점수가 높고, 같을 경우 초성이 사전순으로 빠른 5개만 가지고 있도록 유지하는 기능 
 */

// 입력 받은 친구와 그의 친구들을 저장하는 함수
function updateFriendsList([friend, otherFriend], friendsList) {
  if (friendsList[friend]) {
    friendsList[friend].push(otherFriend);
  } else {
    friendsList[friend] = [otherFriend];
  }
}

function problem7(user, friends, visitors) {
  var answer;
  const friendsList = {
    [user] : [],
  }
  
  // friends 배열을 순회하면서 updateFriendsList에 저장한다.
  friends.forEach(([friend, otherFriend]) => {
    updateFriendsList([friend, otherFriend], friendsList);
    updateFriendsList([otherFriend, friend], friendsList);
  });

  return answer;
}

module.exports = problem7;
