function find_friend(user, friend, friends) {
  let known = [];
  for (i = 0; i < friends.length; i++) {
    if ((friend === friends[i][0]) && (user !== friends[i][1])) {
      known.push(friends[i][1]);
    } else if ((friend === friends[i][1]) && (user !== friends[i][0])) {
      known.push(friends[i][0]);
    }
  }
  return known;
}

function problem7(user, friends, visitors) {
  var answer = [];
  let known = find_friend(user, user, friends);
  let unknown = [];
  let result = new Map();
  for (let i = 0; i < known.length; i++) {
    unknown.push(...find_friend(user, known[i], friends));
  }
  for (let i = 0; i < unknown.length; i++) {
    if (known.includes(unknown[i]) === false) {
      if (result.has(unknown[i])) {
        result.set(unknown[i], (result.get(unknown[i]) + 10));
      } else {
        result.set(unknown[i], 10);
      }
    }
  }
  for (let i = 0; i < visitors.length; i++) {
    if (known.includes(visitors[i]) === false) {
      if (result.has(visitors[i])) {
        result.set(visitors[i], (result.get(visitors[i]) + 1));
      } else {
        result.set(visitors[i], 1);
      }
    }
  }
  let result_sorted = new Map([...result].sort((a, b) => {
    if (a[1] === b[1]) {
      if (a[0] > b[0]) return -1;
      else if (a[0] < b[0]) return 1;
      return 0;
    }
    return (a[1] - b[1]);
  }).reverse());
  let result_sorted_array = Array.from(result_sorted.keys());
  let count = 0;
  while ((answer.length !== 5) && (count !== result_sorted.size)) {
    answer.push(result_sorted_array[count]);
    count++;
  }
  return answer;
}

module.exports = problem7;
