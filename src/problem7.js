function problem7(user, friends, visitors) {
  class PersonName {
    constructor(friends, visitors) {
      this.friends = friends;
      this.visitors = visitors;
    }
    seeAllNames() {
      let temp = friends.flat();
      const allNames = [].concat(temp, visitors);
      return new Set(allNames);
    }
  }
  const relatedUsersSet = new PersonName(friends, visitors).seeAllNames();
  const relatedUsers = Array.from(relatedUsersSet);

  class AdjacencyList {
    constructor(friends, relatedUsers) {
      this.friends = friends;
      this.relatedUsers = relatedUsers;
    }
    makeAdjacencyList() {
      let graph = Array.from(new Array(relatedUsers.length), () => new Array().fill([]))
      for (let i = 0; i < friends.length; i++) {
        console.log(relatedUsers,friends[i][0],friends[i][1])
        graph[relatedUsers.indexOf(friends[i][0])].push(relatedUsers.indexOf(friends[i][1]))
        graph[relatedUsers.indexOf(friends[i][1])].push(relatedUsers.indexOf(friends[i][0]))
      }
      return graph
    }
  }
  const userGraph = new AdjacencyList(
    friends,
    relatedUsers
  ).makeAdjacencyList();
  console.log(userGraph)
  // return answer;
}

module.exports = problem7;
