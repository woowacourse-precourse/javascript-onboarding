function problem7(user, friends, visitors) {

  let suggestedFriends = [];

  // 주변인들의 친구 관계를 인간 중심으로 관계
  const friendsObjectArray = [];
  friends.forEach(element => {
    // 양방향으로 추가해줘서 모든 id들이 빠짐 없이 객체의 중심이 될 수 있도록 함
    handleFriend(friendsObjectArray, element[0], element[1]);
    handleFriend(friendsObjectArray, element[1], element[0]);
  });
  // console.log(friendsObjectArray)


  // 친구들의 친구 목록 (점수 계산용이므로 중복 허용)
  const relatedFriendsArray = checkFriendOfFriends(friendsObjectArray, user)
  // 추천 친구 포인트 계산 하기
  figurePoints(suggestedFriends, 10, relatedFriendsArray);
  // console.log(relatedFriendsArray)

  // 방문한 사람들의 목록 (본인, 친구 제외된 목록)
  const relatedVisitorsArray = checkVisitors(friendsObjectArray, user, visitors);
  // 추천 친구 포인트 계산 하기
  figurePoints(suggestedFriends, 1, relatedVisitorsArray);
  // console.log(suggestedFriends)

  // 포인트 순으로 정렬 한 다음, 아이디 순으로 정렬
  suggestedFriends.sort((a, b) => b.points - a.points || a.id.localeCompare(b.id))
  // console.log(suggestedFriends)

  // 최대 5명만 리턴
  const answer = suggestedFriends.slice(0, 5).map((el) => el.id);
  return answer;
}

/**
 * 친구들의 관계를 객체 배열로 관리하기 위한 함수.
 * @param {*} friendsObjectArray 
 * @param {string} from 배열 생성에 기준이 될 id
 * @param {string} to 친구 관계에 추가될 id
 */
const handleFriend = (friendsObjectArray, from, to) => {
  const index = friendsObjectArray.findIndex((friend) => friend.id === from)
  // 검색 결과가 없다면 새 데이터 추가
  if (index === -1) {
    friendsObjectArray.push({
      id: from,
      friends: new Set().add(to)
    });
  }
  // 검색 결과가 있다면 기존 데이터에 새로운 친구를 추가
  else {
    friendsObjectArray[index].friends.add(to);
  }
}

/**
 * 들어온 user 객체에 있는 친구들의 객체들을 찾은 후, 
 * 그 친구들의 친구 목록을 조회하여 배열에 담아 반환하는 함수
 * 단, 본인과 이미 친구인 사람들은 제외해야 한다.
 * 
 * @param {*} friendsObjectArray 
 * @param {string} user 
 * @returns 
 */
const checkFriendOfFriends = (friendsObjectArray, user) => {
  const index = friendsObjectArray.findIndex((friend) => friend.id === user);
  // 사용자의 친구 목록을 찾아냄
  const userFriends = Array.from(friendsObjectArray[index].friends);
  let array = [];
  // 사용자의 친구들이 어떤 친구들을 가지고 있는지 찾아서 array에 추가해줌.
  userFriends.map((id) => {
    const idx = friendsObjectArray.findIndex((friend) => friend.id === id);
    return Array.from(friendsObjectArray[idx].friends).map((el) => {
      // if (el !== user) {
      array.push(el)
      // }
    })
  });
  // 추천 금지 명단에 추가해줄 목적으로 본인 사용자도 친구처럼 취급
  userFriends.push(user)
  // 혹시 명단에 이미 친구인 사람이 있다면 제거해줌
  return array.filter((id) => !userFriends.includes(id));
}

/**
 * 방문자 중, 친구와 본인을 제외하여 리스트를 만들어주는 함수
 * @param {*} friendsObjectArray 
 * @param {string}} user 
 * @param {*} visitors 
 * @returns 
 */
const checkVisitors = (friendsObjectArray, user, visitors) => {
  const index = friendsObjectArray.findIndex((friend) => friend.id === user);
  // 사용자의 친구 목록을 찾아냄
  const userFriends = Array.from(friendsObjectArray[index].friends);
  userFriends.push(user);
  return visitors.filter((id) => !userFriends.includes(id));
}

/**
 * 추천 친구들의 점수를 계산해주는 함수
 * @param {*} suggestedFriends 추천 명단
 * @param {Number} point 더해줄 점수
 * @param {*} arr 더해줄 사람 목록
 */
const figurePoints = (suggestedFriends, point, arr) => {
  arr.map((id) => {
    const idx = suggestedFriends.findIndex((friend) => friend.id === id);
    if (idx === -1) {
      suggestedFriends.push({
        id: id,
        points: point
      })
    }
    else {
      suggestedFriends[idx].points += point
    }
  })
}

module.exports = problem7;
