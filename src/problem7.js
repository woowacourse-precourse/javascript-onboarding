function problem7(user, friends, visitors) {
  //data structure
  class SNS {
    constructor(usersFriendRelation, visiotrs) {
      this.usersFriendRelation = usersFriendRelation;
      this.userList = usersFriendRelation.flat().concat(visitors);
      this.visitors = visitors;
    }

    getUserMap() {
      const userMap = new Map();
      this.usersFriendRelation.forEach((relation) => {
        const userId1 = relation[0];
        const userId2 = relation[1];
        if (userMap.get(userId1) === undefined) {
          const userObject = new User(userId1);
          userMap.set(userId1, userObject);
        }
        if (userMap.get(userId2) === undefined) {
          const userObject = new User(userId2);
          userMap.set(userId2, userObject);
        }
        const userObject1 = userMap.get(userId1);
        const userObject2 = userMap.get(userId2);
        userObject1.addFriend(userId2);
        userObject2.addFriend(userId1);
        userMap.set(userId1, userObject1);
        userMap.set(userId2, userObject2);
      });

      visitors.forEach((visitor) => {
        if (userMap.get(visitor) === undefined) {
          const visitorObject = new User(visitor);
          userMap.set(visitor, visitorObject);
        }
      });
      return userMap;
    }
  }
  class User {
    constructor(userId) {
      this.id = userId;
      this.friends = [];
    }
    addFriend(friend) {
      this.friends.push(friend);
    }
  }
  class UserRecommandationSystem {
    constructor(userId, userMap) {
      this.user = userMap.get(userId);
      this.userMap = userMap;
      this.recommandationScoreBoard = new Map();
    }
    initBoard() {
      const scoreBoard = new Map();
      const userFriends = this.user.friends;
      const userList = [...this.userMap.keys()];
      const userNotFriends = userList.filter(
        (user) => !userFriends.includes(user) && user !== 'mrko'
      );
      userNotFriends.forEach((candidate) => {
        scoreBoard.set(candidate, 0);
      });

      this.recommandationScoreBoard = scoreBoard;
      return this;
    }

    analyzeIndrectRelation() {
      //FIXME: userFriendsList 등 기본자료 initBoard()와 중복
      const scoreBoard = this.recommandationScoreBoard;
      const candidates = [...scoreBoard.keys()].filter((candidate) => {
        return this.userMap.get(candidate).friends.length !== 0;
      });
      candidates.forEach((candidate) => {
        const candidatesFriendList = this.userMap.get(candidate).friends;
        const userFriendList = this.user.friends;
        const intersection = candidatesFriendList.filter((user) =>
          userFriendList.includes(user)
        );
        scoreBoard.set(
          candidate,
          scoreBoard.get(candidate) + 10 * intersection.length
        );
      });
      this.recommandationScoreBoard = scoreBoard;
      return this;
    }

    analyzeVistors(visitors) {
      const scoreBoard = this.recommandationScoreBoard;

      visitors.forEach((visitor) => {
        if (scoreBoard.get(visitor) !== undefined) {
          scoreBoard.set(visitor, scoreBoard.get(visitor) + 1);
        }
      });

      this.recommandationScoreBoard = scoreBoard;
      return this;
    }

    representRecommandation() {
      const board = this.recommandationScoreBoard;
      const recommandationLsit = [...board.keys()]
        .sort()
        .sort((a, b) => board.get(b) - board.get(a))
        .slice(0, 5);
      return recommandationLsit;
    }
  }
  //data handle
  const sns = new SNS(friends);
  snsUserMap = sns.getUserMap();

  //recommandation system handle
  const markRecommandationSystem = new UserRecommandationSystem(
    'mrko',
    snsUserMap
  );
  const result = markRecommandationSystem
    .initBoard()
    .analyzeIndrectRelation()
    .analyzeVistors(visitors)
    .representRecommandation();
  return result;
}

module.exports = problem7;
