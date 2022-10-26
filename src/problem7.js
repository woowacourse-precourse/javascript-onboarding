function problem7(user, friends, visitors) {
  let answer = [];
  // 유저와 그에 대한 객체를 쌍으로 가지는 map 구조
  const users = new Map();
  users.set(user, new User(user, true, user)); // 기준 user 자신

  // friends 저장
  for (let relation of friends) {
    // map에 없다면 저장
    if (!users.has(relation[0])) users.set(relation[0], new User(relation[0], false, user));
    if (!users.has(relation[1])) users.set(relation[1], new User(relation[1], false, user));
    users.get(relation[0]).addFriend(relation[1]);
    users.get(relation[1]).addFriend(relation[0]);
  }

  // 저장된 각 유저들에 대해, 함께 아는 친구 확인
  for (let friend of users.get(user).friends) {
    for (let usr of users.values()) {
      usr.checkFriend(friend);
    }
  }

  // visitor에 대해 점수 확인
  for (let name of visitors) {
    // map에 없으면 추가해준다
    if (!users.has(name)) users.set(name, new User(name, false, user));
    users.get(name).visit();
  }

  // 정렬하기
  const usersCopy = [...users.values()];
  usersCopy.sort((usr1, usr2) => {
    // 점수가 같은 경우, 이름 사전순 정렬
    if (usr1.score === usr2.score) {
      if (usr1.name < usr2.name) return -1;
      if (usr1.name > usr2.name) return 1;
      return 0;
    }
    return usr2.score - usr1.score;
  })

  // 추천 친구 걸러내기
  for (let i = 0; i < 5 && i < usersCopy.length; i++) {
    // 0점이 아니면 넣어준다
    if (usersCopy[i].score > 0) answer.push(usersCopy[i].name);
  }

  return answer;
}

module.exports = problem7;

// 각 사용자들에 대한 클래스
class User {
  constructor(name, isFriend, standard) {
    this.name = name;
    this.isFriend = isFriend; // 주어진 user과 친구인지
    this.standard = standard; // 기준 user의 이름
    this.friends = []; // 친구 사이인 유저들
    this.score = 0; // 친구 추천 점수
  }

  // 특정 이름의 친구를 추가하는 함수
  addFriend(name) {
    this.friends.push(name);
    if (this.standard === name) this.isFriend = true;
  }

  // standard의 친구 이름이 주어질 때, 이 유저도 그 유저와 친구인지 확인하는 함수
  checkFriend(name) {
    // 기준 user와 친구가 아닌 사람에게만 해당
    if (this.isFriend) return;

    if (this.friends.includes(name)) {
      this.score += 10;
    }
  }

  // visit했을 때 점수를 올리는 함수
  visit() {
    // 기준 user와 친구가 아닌 사람에게만 해당
    if (this.isFriend) return;

    this.score++;
  }
}