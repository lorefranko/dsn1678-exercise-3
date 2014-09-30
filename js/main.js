var rightSalesdetails = $('.right__salesdetails');
var rightSales = $('.right__sales');
/*
	Functions are reusable pieces of code
	They're basically code stored inside variables
*/
var rightSalesClickHandler = function () {
	var isActive = rightSalesdetails.attr('data-state');

	if (isActive == 'active') {
		rightSalesdetails.attr('data-state', 'inactive');
	} else {
		rightSalesdetails.attr('data-state', 'active');
	}
};

rightSales.on('click', rightSalesClickHandler);



var leftSalesdetails = $('.left__salesdetails');
var leftSales = $('.left__sales');
/*
	Functions are reusable pieces of code
	They're basically code stored inside variables
*/
var leftSalesClickHandler = function () {
	var isActive = leftSalesdetails.attr('data-state');

	if (isActive == 'active') {
		leftSalesdetails.attr('data-state', 'inactive');
	} else {
		leftSalesdetails.attr('data-state', 'active');
	}
};

leftSales.on('click', leftSalesClickHandler);
