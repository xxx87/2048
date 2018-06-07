function MatrixModel() {
	// this.pubSub = new PubSub();
	PubSub.call(this);
	this.randomGridIterationCell = Math.floor(Math.random() * 4);
	this.randomGridIterationValue = Math.floor(Math.random() * 4);
	this.randomNumber = Math.random() < 0.6 ? 2 : 4;
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

	this.arr = ['4', '2', '4', '4'];

	var instance = this;
	MatrixModel = function() {
	    return instance;
	};
	this.fillMatrixCell();
}

MatrixModel.prototype = Object.create(PubSub.prototype);
MatrixModel.prototype.constructor = MatrixModel;

MatrixModel.prototype.fillMatrixCell = function() {
	this.attributes.grid[this.randomGridIterationCell][this.randomGridIterationValue] = this.randomNumber;
	this.checkAvailableCellAndRandom();
};

MatrixModel.prototype.checkAvailableCellAndRandom = function() {
	var i, j, size = this.attributes.grid.length;

	for(i = this.randomGridIterationCell; i < size; i += 1){
		for(j = 0; j < size; j += 1) {
			if(this.attributes.grid[i][j] === '' && j !== i) {
				this.attributes.grid[i][j] = this.randomNumber;
				return;
			}
		}
	}
};

MatrixModel.prototype.displayActionResult = function(key) {
	this.publish('changeData');
	if(key === 'left') {

		// for (var i = 0; i < this.arr.length; i += 1) {
		// 	var index = this.arr.indexOf('');
		// 	if (index !== -1) {
		// 		this.arr.splice(index, 1);
		// 		this.arr.push('');
		// 	}
		// }
		//
		// console.log('move', this.arr);
		//
		// for (var j = 0; j < this.arr.length; j += 1) {
		// 	if (this.arr[j] !== '' && this.arr[j] === this.arr[j + 1]) {
		// 		this.arr[j] = +this.arr[j] + +this.arr[j + 1];
		// 		this.arr[j + 1] = '';
		// 	}
		// }
		//
		// console.log('sum', this.arr);
		//
		// for (var i = 0; i < this.arr.length; i += 1) {
		// 	var index = this.arr.indexOf('');
		// 	if (index !== -1) {
		// 		this.arr.splice(index, 1);
		// 		this.arr.push('');
		// 	}
		// }
		//
		// console.log('move', this.arr);


		// for(var i = 0; i < this.arr.length; i += 1) {
		// 	if(this.arr.indexOf('') !== -1) {
		// 		this.arr.splice(this.arr.indexOf(''), 1);
		// 		this.arr.push('');
		// 	}
		// }
		//
		// for(var j = 0; j < this.arr.length; j += 1) {
		// 	if(+this.arr[j] === +this.arr[j+1]) {
		// 		this.arr[j] = +this.arr[j] + +this.arr[j+1];
		// 		this.arr.splice(this.arr[j], 1);
		// 	}
		// }
		//
		// console.log(this.arr);
	}
};

// MatrixModel.prototype.calculateActionResult = function() {
// 	for(var j = 0; j < this.arr.length; j += 1) {
// 		// if(+this.arr[j] === +this.arr[j+1]) {
// 		// 	this.arr[j] = +this.arr[j] + +this.arr[j+1];
// 		// }
// 	}
// };