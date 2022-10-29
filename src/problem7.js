function problem7(user, friends, visitors) {}

// let friends = [
//   ["donut", "andole"],
//   ["donut", "jun"],
//   ["donut", "mrko"],
//   ["shakevan", "andole"],
//   ["shakevan", "jun"],
//   ["shakevan", "mrko"],
// ];

// let user = "mrko";

function makeGraph(vertex, duo) {
  for (let i = 0; i < duo.length; i++) {
    let tempSet = new Set();
    let name = duo[i];
    if (vertex.has(name)) {
      vertex.set(name, vertex.get(name).add(i ? duo[0] : duo[1]));
    } else {
      vertex.set(name, tempSet.add(i ? duo[0] : duo[1]));
    }
  }
}

let vertex = new Map();
friends.forEach((duo) => makeGraph(vertex, duo));
console.log(vertex);

module.exports = problem7;
