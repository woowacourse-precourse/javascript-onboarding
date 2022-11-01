function problem7(user, friends, visitors) {
  let answer = ratingScore(user, friends, visitors)
  return answer
}
module.exports = problem7;

console.log(problem7("mrko", [["donut", "andole"], ["donut", "jun"], ["donut", "mrko"], ["shakevan", "andole"], ["shakevan", "jun"], ["shakevan", "mrko"]], ["bedi", "bedi", "donut", "bedi", "shakevan"]))

// 1.user의 친구를 찾는 기능
function withFriends(user, friends){
 //유저 친구를 담을 배열
 let userFriend = [];
 //friends 배열에서 사용자와 친구인 닉네임 찾기
 friends.map((item) => {
   if (item.includes(user)) {
     //friends 배열 아이템 중에 user 이름이 포함된 경우
     //그 중 첫 번째 아이템이 user이면 두 번째 아이템을 userFriend에 추가
     if (item[0] === user) userFriend.push(item[1]);
     else  userFriend.push(item[0]);
   }
 });
 return userFriend
}
//  console.log(withFriends("mrko", [ ["donut", "andole"], ["donut", "jun"], ["donut", "mrko"], ["shakevan", "andole"], ["shakevan", "jun"], ["shakevan", "mrko"] ]))

// 2.친구들과 방문자들에게 점수 부여하는 기능
function ratingScore(user, friends, visitors){
  let userFriend = withFriends(user, friends)
  //친구 점수를 담을 객체
  let allScore = {};

  //유저 친구의 친구에게 10점 부여
  friends.map((item) => {
    userFriend.map((friend) => {
      if (item.includes(friend) && !item.includes(user)) {
        if (item[0] === friend && !userFriend.includes(item[1])) {
          //이미 친구이면 점수 부여X
          if (!allScore[item[1]]) allScore[item[1]] = 10;
          else allScore[item[1]] += 10;
        } 
          else if (item[1] === friend && !userFriend.includes(item[0])) {
          if (!allScore[item[0]]) allScore[item[0]] = 10;
          else allScore[item[0]] += 10;
        }
      }
    });
  });

  visitors.map((name) => {
    if (!userFriend.includes(name)) {
      //이미 친구이면 점수 부여X
      //아직 객체에 없으면 1로 초기화
      if (!allScore[name])  allScore[name] = 1;
      //객체에 있으면 +1
      else  allScore[name] += 1;
    }
  });
  return Object.keys(allScore);
}

// console.log(ratingScore("mrko", [["donut", "andole"], ["donut", "jun"], ["donut", "mrko"], ["shakevan", "andole"], ["shakevan", "jun"], ["shakevan", "mrko"]], ["bedi", "bedi", "donut", "bedi", "shakevan"]))
