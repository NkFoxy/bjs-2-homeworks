function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    let marks = [];
}

Student.prototype.setSubject = function (subjectName) {
  subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
  if (Student.prototype.addMarks < 1) {
    console.log("Студент отчислен");
  }
  else {
    this.marks = marks;
  }
}

Student.prototype.getAverage = function () {
    if (Student.prototype.addMarks < 1) {
        return 0;
    } else {
        for (let item of Object.entries(Student.marks)){
            item++;
            let average = average + marks;
        }
        getAverage =  average / item;
    }
}

Student.prototype.exclude = function (reason) {
  delete Student.subject;
  delete Student.marks;
  this.excluded = reason;
}

let student1 = new Student ("Василиса", "женский", 19);
let student2 = new Student("Артём", "мужской", 25);