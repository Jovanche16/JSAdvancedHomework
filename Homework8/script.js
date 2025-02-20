class Person {
    constructor(firstName, lastName, age, address) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.address = address;
    }
    fullName() {
        console.log(this.firstName + " " + this.lastName);
    }
}
class Student extends Person {

    constructor(firstName, lastName, age, address, subjects, academy) {
        super(firstName, lastName, age, address);
        this.subjects = subjects;
        this.academy = academy;

    }
    studiesSubject(student, subject) {
        return student.subjects.filter(s => s === subject).length > 0;
    }
}

let student = new Student("Petre", "Petreski", 22, "Some Address", ["Math", "Science"], "Tech Academy");
let doesHeStudyMath = student.studiesSubject(student, "Math");