function problem7(user, friends, visitors) {
  var answer;
  let user_friend;
  let second_friends = friends;
  let person = [];
  // user의 친구들 찾기
  friends.map((name) => {
    if (name.includes(user)) {
      user_friend = name.filter((element) => element !== user).join();
      // user의 친구들의 친구들 찾기
      friends.map((second) => {
        if (second.includes(user_friend)) {
          person.push(
            second.filter((element) => element !== user_friend).join()
          );
        }
      });
    }
  });
  let arr = new Set(person);
  let uniARR = [...arr];
  uniARR.pop(user);
  console.log(uniARR);
  return answer;
}

module.exports = problem7;

// 기능 목록
// 인접행렬?
// 1. friends 에서 user와 묶인 친구를 찾아, 그 친구와 친구관계인 사람에게 점수를 추가한다.
// 2. visitors 에서 방문한 사람에게 점수를 준다.
