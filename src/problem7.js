function problem7(user, friends, visitors) {
  var answer;
  let user_friends = []; //user의 친구 저장 할 array
  function dementionTwoToOne(arr) {
    return (arr = arr.reduce((acc, cur) => [...acc, ...cur]));
  } //2차원 배열을 1차원 배열로 바꾸는 함수

  function elementCount(arr) {
    return arr.reduce(
      (acc, cur) => ({ ...acc, [cur]: (acc[cur] || 0) + 1 }),
      {}
    );
  } // 배열요소의 중복횟수 count 함수

  function getUserFriends(user, friends) {
    for (let i = 0; i < friends.length; i++) {
      if (friends[i].indexOf(user, 0) != -1) {
        user_friends.push(friends[i].filter((element) => element !== user));
      }
    } // friends를 순회하며 user가 들어간 배열 찾아 user_friends에 push(user제외후)
    user_friends = dementionTwoToOne(user_friends); //1차원배열로 바꾸기
    return user_friends;
  }

  function getFriendsFriend(user, friends) {
    //함께 아는 친구 수 구하기
    getUserFriends(user, friends);
    let friends_friend_arr = []; //usr의 친구의 친구가 들어있는 배열
    for (let i = 0; i < friends.length; i++) {
      for (let j = 0; j < user_friends.length; j++) {
        if (friends[i].indexOf(user_friends[j], 0) != -1) {
          friends_friend_arr.push(
            friends[i].filter(
              (element) => element !== user && element !== user_friends[j]
            )
          );
        }
      }
    } // friends배열을 순회하며 user_friends에 있는 사람들이 들어있는 배열 찾기
    // -> user,와 user_friends를 제외하고 friends_friend_arr에 집어넣기 -> 친구의 친구
    friends_friend_arr = dementionTwoToOne(friends_friend_arr); //친구의 친구 배열 1차원배열로 바꾸기
    return friends_friend_arr;
  }
  function calcFriendScore(user, friends) {
    const friends_friend_arr = getFriendsFriend(user, friends); //친구의 친구 배열
    const friend_score = elementCount(friends_friend_arr); // count하여 프로퍼티로 나타내기
    for (key in friend_score) {
      friend_score[key] *= 10;
    } // value값에 *10하여 점수 매기기
    return friend_score;
  }

  function calcVisitScore(user, friends, visitors) {
    const user_friends = getUserFriends(user, friends);
    let stranger_visitors = visitors.filter(
      (element) => !user_friends.includes(element)
    );
    const visitor_score = elementCount(stranger_visitors);
    return visitor_score;
  }

  return answer;
}
problem7(
  "mrko",
  [
    ["donut", "andole"],
    ["donut", "jun"],
    ["donut", "mrko"],
    ["shakevan", "andole"],
    ["shakevan", "jun"],
    ["shakevan", "mrko"],
  ],
  ["bedi", "bedi", "donut", "bedi", "shakevan", "jun"]
);
//친구관계에서 각각의 친구 정리하기
// mrko : "dount","shakevan"
// dount : "andole","jun","mrko"
// andole : "dount","shakevan"
// jun : "dount","shakevan"
// shakevan : "andole","jun","mrko"
// user의 친구와 친구인사람 즉 같은 항목을 가진 사람, 함께하는 친구의 수 목록 만들기
// andole : 1
// jun : 1  >*10해서 점수로 계산
// 타임라인 방문횟수 배열에서 몇번나왔는지
// bedi : 3
// dount : 1
// shakevan : 1 > 점수매기기
// 두개 합쳐서 점수가 들어있는 항목 만들기
// andole : 10
// jun : 10
// bedi : 3 > 점수가 같은 경우 이름순정렬하기
module.exports = problem7;
