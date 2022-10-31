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
  console.log(relation_obj);
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
