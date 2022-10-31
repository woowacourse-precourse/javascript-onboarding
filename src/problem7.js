function problem7(user, friends, visitors) {
  const network = new UserNetwork(user,friends,visitors);
  let answer = network.recommendFriends;
  return answer;
}

class UserNetwork{
  constructor(Name,friends,visitors){
    this.Name=Name;
    this.visitor=visitors;
    this.recommendFriends = [];
    this.friendsNetwork = {};
    this.addNetwork(friends);
    this.connectFriends();
  }

  addFriends(user) {
    if (!this.friendsNetwork[user]) 
      this.friendsNetwork[user] = [];
  }

  addNetwork(friends){
    friends.forEach(([user1, user2]) => {
      this.addFriends(user1);
      this.addFriends(user2);
      this.friendsNetwork[user1].push(user2);
      this.friendsNetwork[user2].push(user1);
    });
  }

  getFriends(userName){
    return this.friendsNetwork[userName];
  }
  
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
  
  getFriendNear(){
    let friendsNear = {};
    this.getFriends(this.Name).forEach((i) => {
      this.getFriends(i).forEach(j =>{
        if(j!==this.Name) friendsNear[j]={weight:10};
      })
    });
    return friendsNear;
  }

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