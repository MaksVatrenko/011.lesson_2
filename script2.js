// Вам потрібно зробити конструктор сутності "Студент".
//
//     Студент має ім'я, прізвище, рік народження — це властивості. Є масив з оцінками, це також властивість. І є можливість отримати вік студента та його середній бал – це методи.
//
// Ще у всіх Студентів є по масиву однакової довжини, у ньому 25 елементів, спочатку він не заповнений, але на 25 елементів. Це масив, в якому відзначається відвідуваність, щоразу коли ми викликаємо метод .present() на чергове порожнє місце, в масив записується true, коли викликаємо .absent() - записується false. Передбачте будь-який захист від того, щоб у масиві відвідуваності не могло бути більше 25 записів. Масив – це властивість, present та absent – ​​методи.
//
//     Останній метод: .summary(), перевіряє середню оцінку і середнє відвідування(кількістьВідвідин/кількістьЗанять), і якщо середня оцінка більше 90, а середнє відвідування більше 0.9, то метод summary повертає рядок "Молодець!", якщо одне з цих значень менше , то - "Добре, але можна краще ", якщо обидва нижче - "Редиска!".
//
//     Не забудьте після того, як напишите цей конструктор, створити 2-3 екземпляри (конкретних студентів) і показати використання цих методів.

class Student {
    constructor(name, surname, birthYear, marks) {
        this.name = name;
        this.surname = surname;
        this.birthYear = birthYear;
        this.marks = marks;
        this.attendance = new Array(25);
    }

    getAge() {
        return new Date().getFullYear() - this.birthYear;
    }

    getAverageMark() {
        return this.marks.reduce((a, b) => a + b) / this.marks.length;
    }

    present() {
        const index = this.attendance.findIndex(item => item === undefined);
        if (index !== -1) {
            this.attendance[index] = true;
        } else {
            console.log("Attendance is full");
        }
    }

    absent() {
        const index = this.attendance.findIndex(item => item === undefined);
        if (index !== -1) {
            this.attendance[index] = false;
        } else {
            console.log("Attendance is full");
        }
    }

    summary() {
        if (this.getAverageMark() > 90 && this.attendance.filter(Boolean).length / this.attendance.length > 0.9) {
            return "Молодець!";
        } else if (this.getAverageMark() > 90 || this.attendance.filter(Boolean).length / this.attendance.length > 0.9) {
            return "Добре, але можна краще";
        } else {
            return "Редиска!";
        }
    }
}

let student1 = new Student('Jane', 'Doe', 1996, [100, 100, 100]);
let student2 = new Student('John', 'Doe', 1995, [75, 85, 75]);

for (let i = 0; i < 23; i++) {
    student1.present();
}
student1.absent();
student1.absent();

student1.getAge();
student2.getAge();

console.log(student1);

console.log(student1.summary())
console.log(student1.getAge());
console.log(student2.summary())
console.log(student2.getAge());

