"use strict"

function solveEquation(a, b, c) {
	let arr = [];
	let discriminant;
	discriminant = (Math.pow(b, 2) - (4 * a * c));

	if (discriminant > 0) {
		arr = [(-b + Math.sqrt(discriminant)) / (2 * a),
		(-b - Math.sqrt(discriminant)) / (2 * a)];
	}
	else if (discriminant == 0) {
		arr = [(-b) / (2 * a)];
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