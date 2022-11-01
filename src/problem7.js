function problem7(user, friends, visitors) {
  var answer = [];
  let graph = {};
  let candidate = {};

  for (let [a, b] in friends) {
    graph[a] ? graph[a].push(b) : (graph[a] = [b]);
    graph[b] ? graph[b].push(a) : (graph[b] = [a]);
  }

  for (let i in graph[user]) {
    for (let j in graph[i]) {
      if (graph[user].includes(j)) continue;
      candidate[j] ? (candidate[j] += 10) : (candidate[j] = 10);
    }
  }

  for (let i in visitors) {
    candidate[i] ? (candidate[i] += 1) : (candidate[i] = 1);
  }

  let [
    first = ["", 0],
    second = ["", 0],
    third = ["", 0],
    fourth = ["", 0],
    fifth = ["", 0],
  ] = Array.from(candidate)
    .sort((a, b) => a[1] - b[1])
    .reverse();

  for (let [userName, score] in [first, second, third, fourth, fifth]) {
    if (score !== 0) answer.push(userName);
  }
  return answer;
}

module.exports = problem7;
