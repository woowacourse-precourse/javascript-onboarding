function problem7(user, friends, visitors) {
  let current_friends = [];
  let recommendations = [];
  let recommendations2 = [];

  const push_current_friend = (person) => {
    current_friends.push(person);
  };

  const is_user = (person) => {
    return user == person;
  };

  const push_recommendations = (person, score) => {
    recommendations.push([person, score]);
  };

  const is_current_friend = (person) => {
    return current_friends.includes(person);
  };

  const is_not_user = (person) => {
    return user != person;
  };

  const is_not_current_friend = (person) => {
    return !current_friends.includes(person);
  };

  const push_recommendations2 = (person, score) => {
    recommendations2.push({ name: person, score: score });
  };

  const is_same_person = (person1, person2) => {
    return person1 == person2;
  };

  const remove_overlapped_score = (index, cnt) => {
    recommendations.splice(index, cnt);
  };

  const can_be_recommendation = (i, j) => {
    return (
      is_current_friend(friends[i][j]) &&
      is_not_user(friends[i][1 - j]) &&
      is_not_current_friend(friends[i][1 - j])
    );
  };

  const find_current_friends = () => {
    for (let i = 0; i < friends.length; i++) {
      for (let j = 0; j < 2; j++) {
        if (is_user(friends[i][j])) {
          push_current_friend(friends[i][1 - j]);
        }
      }
    }
  };

  const find_friends_of_friends = () => {
    for (let i = 0; i < friends.length; i++) {
      for (let j = 0; j < 2; j++) {
        if (can_be_recommendation(i, j)) {
          push_recommendations(friends[i][1 - j], 10);
        }
      }
    }
  };

  const find_visitors = () => {
    for (let i = 0; i < visitors.length; i++) {
      if (is_current_friend(visitors[i])) {
        continue;
      }
      push_recommendations(visitors[i], 1);
    }
  };

  const find_sum_of_score_in_recommendations = () => {
    for (let i = 0; i < recommendations.length; i++) {
      let score_sum = recommendations[i][1];
      for (let j = i + 1; j < recommendations.length; j++) {
        if (is_same_person(recommendations[i][0], recommendations[j][0])) {
          score_sum += recommendations[j][1];
          remove_overlapped_score(j, 1);
          j--;
        }
      }
      push_recommendations2(recommendations[i][0], score_sum);
    }
  };

  const sort_recommendations2 = () => {
    recommendations2.sort(function (a, b) {
      if (a.score < b.score) {
        return 1;
      }
      if (a.score > b.score) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    });
  };

  const find_5_recommendations = () => {
    let answer = [];
    for (let i = 0; i < recommendations2.length; i++) {
      if (i > 4) {
        break;
      }
      answer.push(recommendations2[i].name);
    }
    return answer;
  };

  const solution = () => {
    find_current_friends();
    find_friends_of_friends();
    find_visitors();
    find_sum_of_score_in_recommendations();
    sort_recommendations2();
  };

  solution();
  return find_5_recommendations();
}

problem7(
  "hello",
  [
    ["andole", "jun"],
    ["andole", "bedi"],
    ["jun", "shakevan"],
    ["jun", "kane"],
    ["jun", "sam"],
    ["bedi", "shakevan"],
    ["bedi", "anne"],
    ["bedi", "sam"],
    ["anne", "mrko"],
  ],
  ["donut", "anne", "mrko", "mrko", "sam"]
);

module.exports = problem7;
