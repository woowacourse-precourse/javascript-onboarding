function problem7(user, friends, visitors) {
  // 관계 설정 함수
  const createRelations = (friends) => {
    const addRelation = (friendA, friendB) => {
      if (!relations[friendA]) {
        relations[friendA] = new Set([friendB]);
      } else {
        relations[friendA].add(friendB);
      }
    };

    const relations = {};
    friends.forEach(([friendA, friendB]) => {
      addRelation(friendA, friendB);
      addRelation(friendB, friendA);
    });
    return relations;
  };
}

module.exports = problem7;
