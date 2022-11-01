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
		this.score = visitCnt + knowingCnt * 10;
	}
	let answer;
	let friendList = [];

	addFriends();
	calKnowingFriends();

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
		let friendTogether = [];
		friendList.forEach((friend) => {
			if (friend.friendName != user && friend.isFriend)
				friendTogether.push(friend.friendName);
		});
	}

	return answer;
}

module.exports = problem7;
