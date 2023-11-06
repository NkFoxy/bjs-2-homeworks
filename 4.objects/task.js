function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
}

let student1 = new Student("Василиса", "женский", 19);
let student2 = new Student("Артём", "мужской", 25);

Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
    if (this.hasOwnProperty("marks")) {
        this.marks = [...this.marks, ...marks]
    }
}

Student.prototype.getAverage = function () {
    if (!this.hasOwnProperty('marks')) return 0;

    let average = this.marks.reduce((acc, item, index, marks) => {
        acc += item;
        if (index === marks.length - 1) {
            return acc / marks.length
        }
        return acc;
    }, 0);
    return average;
}

Student.prototype.exclude = function (reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
}

