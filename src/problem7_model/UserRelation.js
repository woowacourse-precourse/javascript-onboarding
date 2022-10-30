class UserRelation {
	constructor() {
		this._relatinos = [];
  }
	isRelative(otherUser, Relation) {

		this._friends.includes(otherUser);
	}
	addRelation(otherUser, Relation) {

	}
}
/**
 * @abstract
 */
class VisitRelation {
	constructor() {
		this._score = 10;
	}
	
}

module.exports = UserRelation;