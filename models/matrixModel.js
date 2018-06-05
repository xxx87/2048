function MatrixModel() {
	// this.pubSub = new PubSub();
	PubSub.call(this);
	this.attributes = {
		size: {
			width: 4,
			height: 4
		},
		grid: [
			['', '', '', ''],
			['', '', '', ''],
			['', '', '', ''],
			['', '', '', ''],
		]
	};

	var instance = this;
	MatrixModel = function() {
	    return instance;
	}
}

MatrixModel.prototype = Object.create(PubSub.prototype);
MatrixModel.prototype.constructor = MatrixModel;


MatrixModel.prototype.displayActionResult = function(key) {
	this.publish('changeData');
	this.attributes.grid[0][0] = 1;
}