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
      let graph = Array.from(new Array(relatedUsers.length), () =>
        new Array().fill([])
      );
      for (let i = 0; i < friends.length; i++) {
        graph[relatedUsers.indexOf(friends[i][0])].push(
          relatedUsers.indexOf(friends[i][1])
        );
        graph[relatedUsers.indexOf(friends[i][1])].push(
          relatedUsers.indexOf(friends[i][0])
        );
      }
      return graph;
    }
  }

  const userGraph = new AdjacencyList(
    friends,
    relatedUsers
  ).makeAdjacencyList();

  class FindFrined {
    constructor(user, relatedUsers, userGraph) {
      this.user = user;
      this.relatedUsers = relatedUsers;
      this.userGraph = userGraph;
    }
    finduserFrined() {
      const alreadyFriends = userGraph[relatedUsers.indexOf(user)];
      let alreadyFriendsDict = {};
      for (let i = 0; i < alreadyFriends.length; i++) {
        const key = relatedUsers[alreadyFriends[i]]
        alreadyFriendsDict[key] = 0;
      }
      return alreadyFriendsDict;
    }
  }
  const userFined = new FindFrined(
    user,
    relatedUsers,
    userGraph
  ).finduserFrined();

}

module.exports = problem7;
