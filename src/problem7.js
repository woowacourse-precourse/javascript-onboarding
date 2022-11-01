function problem7(user, friends, visitors) {
  const network = new UserNetwork(user,friends,visitors);
  let answer = network.recommendFriends;
  return answer;
}

//user friend Network Graph
class UserNetwork{
  constructor(Name,friends,visitors){
    this.Name=Name;
    this.visitor=visitors;
    this.recommendFriends = [];
    this.friendsNetwork = {};
    this.addNetwork(friends);
    this.connectFriends();
  }

  //add user to network
  addFriends(user) {
    if (!this.friendsNetwork[user]) 
      this.friendsNetwork[user] = [];
  }

  // add all user to network
  addNetwork(friends){
    friends.forEach(([user1, user2]) => {
      this.addFriends(user1);
      this.addFriends(user2);
      this.friendsNetwork[user1].push(user2);
      this.friendsNetwork[user2].push(user1);
    });
  }

  // get friends of user
  getFriends(userName){
    return this.friendsNetwork[userName];
  }
  
  // get visitor of user's not friends
  getVisitor(friendsNear){
    const userFriends = this.getFriends(this.Name);
    this.visitor.forEach(user=>{
      if(!userFriends.includes(user)){
        if(!friendsNear[user]) 
          friendsNear[user]={weight:1}
        else 
          friendsNear[user].weight++;
      }
    })
  }
  
  // get friends of user's friends
  getFriendNear(){
    let friendsNear = {};
    this.getFriends(this.Name).forEach((i) => {
      this.getFriends(i).forEach(j =>{
        if(j!==this.Name) friendsNear[j]={weight:10};
      })
    });
    return friendsNear;
  }

  // recommend friends
  connectFriends(){
    let friendsNear = this.getFriendNear() ;
    this.getVisitor(friendsNear);
    this.recommendFriends = Object.entries(friendsNear)
    .sort((prev,next)=>{
      if(prev[1].weight===next[1].weight)
        return prev[0]<next[0]?-1:1; 
      else
        return -(prev[1].weight-next[1].weight)
    })
    .reduce((acc,[key,value])=>acc.concat(key),[]);
  }

}

module.exports = problem7;