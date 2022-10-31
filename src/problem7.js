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
    findUserFriend() {
      const alreadyFriends = userGraph[relatedUsers.indexOf(user)];
      let alreadyFriendsDict = {};
      for (let i = 0; i < alreadyFriends.length; i++) {
        alreadyFriendsDict[relatedUsers[alreadyFriends[i]]] = alreadyFriends[i];
      }
      return alreadyFriendsDict;
    }
  }
  const userFriend = new FindFrined(
    user,
    relatedUsers,
    userGraph
  ).findUserFriend();

  class RecommendFriend {
    constructor(userFriend, userGraph, relatedUsers) {
      this.userFriend = userFriend;
      this.userGraph = userGraph;
      this.relatedUsers = relatedUsers;
    }
    recommend() {
      let values = Object.values(userFriend);
      let weightValues = {};
      values.forEach((cur) => {
        const nxts = userGraph[cur];
        nxts.forEach((nxt) => {
          const key = relatedUsers[nxt];
          if (key in weightValues) {
            weightValues[key] += 10;
          } else {
            weightValues[key] = 10;
          }
        });
      });
      return weightValues;
    }
  }
  const recommendedUser = new RecommendFriend(
    userFriend,
    userGraph,
    relatedUsers
  ).recommend();

  class Visit {
    constructor(visitors, recommendedUser) {
      this.visitors = visitors;
      this.recommendedUser = recommendedUser;
    }
    countVisit() {
      visitors.forEach((key) => {
        if (key in recommendedUser) {
          recommendedUser[key] += 1;
        } else {
          recommendedUser[key] = 1;
        }
      });
      return recommendedUser;
    }
  }
  const answers = new Visit(visitors, recommendedUser).countVisit();

  class DeleteFriends {
    constructor(user, userFriend) {
      this.user = user;
      this.userFriend = userFriend;
    }
    deleteAlreadyFriendandMe() {
      const temp = Object.keys(userFriend);
      const deleteList = temp.concat([user]);
      return deleteList;
    }
  }
  const notRecommendList = new DeleteFriends(
    user,
    userFriend
  ).deleteAlreadyFriendandMe();

  notRecommendList.forEach((name) => {
    if (name in answers) {
      answers[name] = 0;
    }
  });

  let newAnswers = [];
  for (let key in answers) {
    if (answers.hasOwnProperty(key) && answers[key] !== 0) {
      newAnswers.push([key, answers[key]]);
    }
  }

  newAnswers.sort((a, b) => {
    if (a[1] > b[1]) {
      return -1;
    } else if (a[1] === b[1]) {
      if (a[0] >= b[0]) {
        return 1;
      } else {
        return -1;
      }
    } else {
      return 1;
    }
  });
  let candidates = [];
  for (let i = 0; i < Math.min(newAnswers.length, 5); i++) {
    candidates.push(newAnswers[i][0]);
  }

  return candidates;
}

module.exports = problem7;
