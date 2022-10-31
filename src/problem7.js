function problem7(user, friends, visitors) {
  
  class PersonName {
    constructor(friends, visitors) {
      this.friends = friends
      this.visitors = visitors
    }
    seeAllNames() {
      let temp = friends.flat()
      const allNames = [].concat(temp, visitors)
      console.log('allNames', allNames)
      return new Set(allNames)
    }
  }
  const relatedUsers = new PersonName(friends, visitors).seeAllNames()
  console.log(relatedUsers)
  // return answer;
}

module.exports = problem7;
