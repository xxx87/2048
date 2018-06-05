function SummaryView() {
	this.summaryModel = new SummaryModel();
	this.template = document.getElementById('summaryTemplate').innerHTML;
	this.className = 'table';
	BaseView.call(this);
};

SummaryView.prototype = Object.create(BaseView.prototype);
SummaryView.prototype.constructor = SummaryView;

SummaryView.prototype.beforeRender = function() {
	return;
};

SummaryView.prototype.render = function () {
	return tplString(this.template, this.summaryModel.attributes)
};

SummaryView.prototype.aftRender = function() {
	return;
};