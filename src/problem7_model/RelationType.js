class RelationType {
	constructor(user1, user2) {
		this._user1 = user1;
		this._user2 = user2;
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