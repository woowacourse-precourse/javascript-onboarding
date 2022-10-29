function problem7(user, friends, visitors) {
  //data structure
  class SNS {
    constructor(usersFriendRelation) {
      this.usersFriendRelation = usersFriendRelation;
      this.userList = new Set(usersFriendRelation.flat());
    }

    getUserMap() {
      const userMap = new Map();
      this.usersFriendRelation.forEach((relation) => {
        const userId1 = relation[0];
        const userId2 = relation[1];
        userMap;
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
      return userMap;
    }
  }
  class User {
    constructor(userId) {
      this.id = userId;
      this.friends = new Set();
    }
    addFriend(friend) {
      this.friends.add(friend);
    }
  }

  //error handle

  //data handle
  const sns = new SNS(friends);
  snsUserMap = sns.getUserMap();

  //recommandation system handle
}

problem7(
  'marko',
  [
    ['donut', 'andole'],
    ['donut', 'jun'],
    ['donut', 'mrko'],
    ['shakevan', 'andole'],
    ['shakevan', 'jun'],
    ['shakevan', 'mrko'],
  ],
  ['bedi', 'bedi', 'donut', 'bedi', 'shakevan']
);

module.exports = problem7;
