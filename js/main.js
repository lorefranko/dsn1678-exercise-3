var rightSalesdetails = $('.right__salesdetails');
var rightsSales = $('.right__sales');
/*
	Functions are reusable pieces of code
	They're basically code stored inside variables
*/
var salesClickHandler = function () {
	var isActive = rightSales.attr('data-state');

	if (isActive == 'active') {
		rightSalesdetails.attr('data-state', 'inactive');
	} else {
		rightSalesdetails.attr('data-state', 'active');
	}
};

rightSales.on('click', salesClickHandler);



var leftSalesdetails = $('.left__salesdetails');
var leftSales = $('.left__sales');
/*
	Functions are reusable pieces of code
	They're basically code stored inside variables
*/
var salesClickHandler = function () {
	var isActive = leftSales.attr('data-state');

	if (isActive == 'active') {
		leftSalesdetails.attr('data-state', 'inactive');
	} else {
		leftSalesdetails.attr('data-state', 'active');
	}
};

leftSales.on('click', salesClickHandler);
