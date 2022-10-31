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
    constructor(userFriend,userGraph,relatedUsers){
      this.userFriend = userFriend
      this.userGraph = userGraph
      this.relatedUsers = relatedUsers
    }
    recommend(){
      let values = Object.values(userFriend)
      let weightValues = {}
      values.forEach((cur) => {
        const nxts = userGraph[cur]
        nxts.forEach((nxt) => {
          const key = relatedUsers[nxt]
          if(key in weightValues){
            weightValues[key] += 10
          }
          else{
            weightValues[key] = 10
          }
        })
      })
      return weightValues
    }
  }
  const recommendedUser = new RecommendFriend(userFriend,userGraph,relatedUsers).recommend()
  
  class Visit{
    constructor(visitors,recommendedUser){
      this.visitors = visitors
      this.recommendedUser = recommendedUser
    }
    countVisit(){
      visitors.forEach((key) =>{
        if(key in recommendedUser){
          recommendedUser[key] += 1
        }
        else {
          recommendedUser[key] = 1
        }
      })
      return recommendedUser
    }
  }
  const answers = new Visit(visitors,recommendedUser).countVisit()
  console.log(answers)

}

module.exports = problem7;
