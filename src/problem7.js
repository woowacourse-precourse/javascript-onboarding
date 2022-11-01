class User {
  constructor(name, score) {
      this.name = name;
      this.followers = [];
      this.score = score;
  }
}
var userMap = new Map();
var userArray = [];
var myFollow = new Set();
function sortByScoreAndName(a, b) {
  if (a.score === b.score) {
      return a.name < b.name ? -1 : 1; // 이름으로 오름차순정렬
  }
  return b.score - a.score; // 내림차순으로 정렬
}
function SignUp(name) {
  var newUser = new User(name, 0);
  userMap.set(name, newUser);
  userArray.push(newUser);
}
function problem7(user, friends, visitors) {
  var answer = [];
  // friends를 순회하면서 follower의 수를 늘려준다.
  // 만약 새로운 이름이라면 userMap과 userArray 자료구조에 새로운 User를 삽입한다.
  friends.forEach((ele) => {
      let a = ele[0];
      let b = ele[1];
      if (userMap.get(a) == null) {
          SignUp(a);
      }
      if (userMap.get(b) == null) {
          SignUp(b);
      }
      userMap.get(a).followers.push(b);
      userMap.get(b).followers.push(a);
  });
  if (userMap.get(user) == null) {
      SignUp(user);
  }
  userMap.get(user).followers.forEach((userFriendName) => {
      userMap.get(userFriendName).followers.forEach((name) => {
          userMap.get(name).score += 10;
      });
  });
  // visitors를 순회하면서 방문유저의 score를 1씩 증가해준다.
  visitors.forEach((name) => {
      if (userMap.get(name) == null) {
          SignUp(name);
      }
      userMap.get(name).score++;
  });
  userMap.get(user).followers.forEach((ele) => myFollow.add(ele));
  // Score 내림차순 정렬해주고,
  // Score가 같은 요소는 이름순으로 정렬해준다.
  userArray.sort(sortByScoreAndName);
  userArray.forEach((ele) => {
      if (ele.name === user)
          return; // 본인이라면 넘기기
      if (myFollow.has(ele.name))
          return; // 이미 친구라면 넘기기
      if (answer.length === 5)
          return false; // 5명 다 찾았다면 끝내기
      if (ele.score === 0)
          return false; // 0점이라면 끝낸다.
      answer.push(ele.name);
  });
  return answer;
}
module.exports = problem7;
