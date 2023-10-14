"use strict"

function solveEquation(a, b, c) {
	let arr = [];
	let d = Math.pow(b, 2) - 4 * a * c;
	if (d = 0) {
		arr = (-b / (2 * a));
		console.log("Дискриминант равен 0, уравнение имеет один корень", arr)
	} else if (d < 0) {
		arr = [(-b + Math.sqrt(d)) / (2 * a), (-b - Math.sqrt(d)) / (2 * a)]
		console.log("Дискриминант больше 0, уравнение имеет два корня", arr)
	} else {
		arr = [];
		console.log("Дискриминант меньше 0, уравнение не имеет решения", arr)
	}

	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let p = (percent * 0.01) / 12;
	let bodyCredit = amount - contribution;
	let paymentMonth = bodyCredit * (p + (p / ((Math.pow((1 + p), countMonths)) - 1)));
	let payment = (Math.round(paymentMonth * countMonths * 100) * 0.01);

	return payment;

}