function MatrixModel() {
	PubSub.call(this);
	this.randomGridIterationCell = Math.floor(Math.random() * 4);
	// this.randomGridIterationValue = Math.floor(Math.random() * 4);
	this.randomNumber = String(Math.random() < 0.6 ? 2 : 4);
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

	this.arr = ['2', '4', '2', '2'];

	var instance = this;
	MatrixModel = function() {
	    return instance;
	};
	this.fillMatrixCell();
}

MatrixModel.prototype = Object.create(PubSub.prototype);
MatrixModel.prototype.constructor = MatrixModel;

MatrixModel.prototype.fillMatrixCell = function() {
	var gridArr = Math.floor(Math.random() * 4),
			gridCell = Math.floor(Math.random() * 4);
	this.attributes.grid[gridArr][gridCell] = this.randomNumber;
	this.checkAvailableCellAndRandom();
};

MatrixModel.prototype.checkAvailableCellAndRandom = function() {
	var i, j, size = this.attributes.grid.length, randomNum = Math.random() < 0.6 ? 2 : 4;

	for(i = this.randomGridIterationCell; i < size; i += 1){
		for(j = 0; j < size; j += 1) {
			if(this.attributes.grid[i][j] === '' && j !== i) {
				this.attributes.grid[i][j] = String(randomNum);
				return;
			}
		}
	}
};

MatrixModel.prototype.displayActionResult = function(key) {
	this.publish('changeData');
	if(key === 'left') {
		this.moveActionResultLeft();
	}
	if(key === 'right') {
		this.moveActionResultRight();
	}
	if(key === 'up') {

	}
};

MatrixModel.prototype.moveActionResultLeft = function() {
	for (var i = 0; i < this.attributes.grid.length; i += 1) {
		for(var a = 0; a < this.attributes.grid[i].length; a += 1){
			var index = this.attributes.grid[a].indexOf('');
			if (index !== -1) {
				this.attributes.grid[a].splice(index, 1);
				this.attributes.grid[a].push('');
				this.displayActionResult();
			}
		}
	}
};

MatrixModel.prototype.moveActionResultRight = function() {
	for (var i = 0; i < this.attributes.grid.length; i += 1) {
		for(var z = 0; z < this.attributes.grid[i].length; z += 1){
			var index = this.attributes.grid[z].lastIndexOf('');
			if (index !== -1) {
				this.attributes.grid[z].splice(index, 1);
				this.attributes.grid[z].unshift('');
				this.displayActionResult();
			}
		}
	}
};

MatrixModel.prototype.calculateActionResult = function() {
	for (var j = 0; j < this.arr.length; j += 1) {
		if (this.arr[j] !== '' && this.arr[j] === this.arr[j + 1]) {
			this.arr[j] = String(Number(this.arr[j]) + Number(this.arr[j + 1]));
			this.arr[j + 1] = '';
		}
	}
};