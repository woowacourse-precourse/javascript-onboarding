function problem7(user, friends, visitors) {
    const findMyFriends = (friends) =>
    friends.filter(
      (item, index) => friends[index][1] === user
    );

}

module.exports = problem7;
