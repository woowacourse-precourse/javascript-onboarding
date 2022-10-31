function problem7(user, friends, visitors) {
  var answer;
  var answer = [];
  let relation_obj = {}; // {이름 : [친구들 이름] , ...}의 객체 만들기
  for (let relationship of friends) {
    let person0 = relationship[0];
    let person1 = relationship[1];
    let relation_of_person0 = relation_obj[person0];
    let relation_of_person1 = relation_obj[person1];

    relation_obj[person0] = relation_of_person0
      ? [...relation_obj[person0], person1]
      : [person1];
    relation_obj[person1] = relation_of_person1
      ? [...relation_obj[person1], person0]
      : [person0];
  }
  let user_friends = relation_obj[user]; // user의 친구들 list
  let score = new Map(); // {이름 : 점수, ...}로 구성될 map 객체

  for (user_friend of user_friends) {
    // (친구의 친구들 - 나의 친구들)에게 10점씩
    for (friends_friend of relation_obj[user_friend]) {
      if (friends_friend !== user && !user_friends.includes(friends_friend)) {
        //본인이거나 친구인 경우 제외
        if (score.has(friends_friend)) {
          score.set(friends_friend, score.get(friends_friend) + 10);
        } else {
          score.set(friends_friend, 10);
        }
      }
    }
  }
  // visitors들에게 1점씩
  for (visitor of visitors) {
    if (!user_friends.includes(visitor)) {
      //친구 제외
      if (score.has(visitor)) {
        score.set(visitor, score.get(visitor) + 1);
      } else {
        score.set(visitor, 1);
      }
    }
  }
  console.log(score);
  return answer;
}

module.exports = problem7;

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
  ["bedi", "bedi", "donut", "bedi", "shakevan"]
);
