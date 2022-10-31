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
  let map_by_score = new Map(); // {점수 : [해당 점수의 아이디1, ..], ...} 의 map 객체로 변환
  for (let [k, v] of score) {
    if (map_by_score.has(v)) {
      map_by_score.set(v, [...map_by_score.get(v), k]);
    } else {
      map_by_score.set(v, [k]);
    }
  }
  let array_by_score = [...map_by_score]; // 정렬 위한 배열 변환
  array_by_score.sort((a, b) => b[0] - a[0]); //점수 기반 정렬
  //5명 추천해주기
  for (let arr of array_by_score) {
    if (answer.length >= 5) break; //루프 탈출 조건
    if (arr[1].length > 1) {
      //점수 같다면, 이름순으로 추천
      arr[1] = arr[1].sort();
      answer.push(...arr[1]);
    } else {
      answer.push(...arr[1]);
    }
  }
  answer = answer.slice(0, 5);
  return answer;
}

module.exports = problem7;
