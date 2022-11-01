const checkFriends = require("./modules/problem7/checkFriends.js");
const checkTogetherKnowingFriends = require("./modules/problem7/checkTogetherKnowingFriends.js");
const checkVisitors = require("./modules/problem7/checkVisitors.js");
const recommendFriends = require("./modules/problem7/recommendFriends.js");

function problem7(user, friends, visitors) {
  const usersList = new Map();
  const friendsMap = new Map();
  checkFriends(friends, usersList, friendsMap);
  checkTogetherKnowingFriends(user, usersList, friendsMap);
  checkVisitors(usersList, visitors);
  return recommendFriends(user, usersList, friendsMap.get(user));
}

module.exports = problem7;
