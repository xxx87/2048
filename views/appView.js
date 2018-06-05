function AppView() {
	var matrixView = new MatrixView();
	var summaryView = new SummaryView();
	
	this.render = function (selector) {
		var element = document.getElementById(selector);
		summaryView.show(element);
		matrixView.show(element);
		// summaryView.show(element);
		// element.innerHTML += summaryView.render();
		// element.innerHTML += matrixView.render();

	}
}

var appView = new AppView();
appView.render('root');