﻿function parseCount(value) {
    let b = Number.parseFloat(value);
    if (Number.isNaN(b)) {
        const error = new Error("Невалидное значение");
        throw error;
    }
    return b;
}

function validateCount(value) {
    try {
        let val = parseCount(value);
        return val;
    } catch (error) {
        return error;
    }
}

class Triangle {
    constructor(a, b, c) {
        this.#check(a, b, c);
        this.a = a;
        this.b = b;
        this.c = c;

    }

    #check(a, b, c) {
        if (((a + b) < c) || ((b + c) < a) || ((a + c) < b)) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
    }

    get perimeter() {
        return this.a + this.b + this.c;
    }

    get area() {
        let p = this.perimeter / 2;
        return Number((Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c))).toFixed(3));
    }
}

function getTriangle (a, b, c) {
    try {
        return new Triangle (a, b, c)
    } catch {
        return {
            get perimeter() {
                return "Ошибка! Треугольник не существует";
            },
            get area() {
                return "Ошибка! Треугольник не существует";
            }
        };
    }

}


