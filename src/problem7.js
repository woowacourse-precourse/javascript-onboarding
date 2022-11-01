function problem7(user, friends, visitors) {
	function Friend(friendName, isFriend) {
		this.friendName = friendName;
		this.score = 0;
		this.visitCnt = 0;
		this.knowingCnt = 0;
		this.isFriend = isFriend;
		this.calScore = calScore;
	}
	function calScore() {
		this.score = this.visitCnt + this.knowingCnt * 10;
	}
	let answer = [];
	let friendList = [];

	addFriends();
	calKnowingFriends();
	calVisitFriends();
	calFriendsScore();
	recommendFriend();

	function addFriends() {
		friends.map((ref) => {
			let isFriend = false;
			if (ref[0] == user || ref[1] == user) {
				// user와 친구
				isFriend = true;
			}
			addFriend(ref[0], isFriend);
			addFriend(ref[1], isFriend);
		});
		visitors.map((ref) => addFriend(ref, false));
	}

	function addFriend(friendName, isFriend) {
		let count = 0;
		let where = 0;
		friendList.forEach((friend, index) => {
			if (friend.friendName == friendName) {
				count++;
				where = index;
			}
		});
		if (count == 0) {
			friendList.push(new Friend(friendName, isFriend));
		} else if (isFriend == true) {
			friendList[where].isFriend = true;
		}
	}

	function calKnowingFriends() {
		friendList.forEach((friend) => {
			if (friend.friendName != user && friend.isFriend)
				//user와 친구
				calKnowingCnt(friend.friendName);
		});
	}

	function calKnowingCnt(friendName) {
		friends.map((ref) => {
			if (ref[0] == friendName) {
				friendList[friendList.findIndex((e) => e.friendName == ref[1])]
					.knowingCnt++;
			} else if (ref[1] == friendName) {
				friendList[friendList.findIndex((e) => e.friendName == ref[0])]
					.knowingCnt++;
			}
		});
	}

	function calVisitFriends() {
		visitors.map((ref) => {
			friendList[friendList.findIndex((e) => e.friendName == ref)].visitCnt++;
		});
	}

	function calFriendsScore() {
		friendList.forEach((friends) => friends.calScore());
	}

	function recommendFriend() {
		friendList
			.sort(function (a, b) {
				return a.friendName - b.friendName;
			})
			.sort(function (a, b) {
				return b.score - a.score;
			});
		friendList.map((friend) => {
			if (!friend.isFriend && friend.score != 0 && answer.length < 5)
				answer.push(friend.friendName);
		});
	}

	return answer;
}

module.exports = problem7;
