// const employeeData = {
//     Vishnu: 400,
//     Alok: 200,
//     Gajanand: 300
// };

// let methods = Object.assign(employeeData, "pandit");
// // console.log(methods);

// class Util {
//     data;
//     constructor(employeeData) {
//         this.data = employeeData
//     };

//     sumSalaries() {
//         let salaryArr = Object.values(this.data);
//         let sum = 0;
//         for (let i = 0; i < salaryArr.length; i++) {
//             sum += salaryArr[i];
//         }
//         return sum;
//     }

//     averageSalaries() {
//         let total = this.sumSalaries();
//         let numberOfEmployee = Object.keys(this.data).length;

//         return total / numberOfEmployee;
//     }

//     findSalaryRange() {
//         let sryArr = Object.values(this.data).sort((a, b) => b - a);
//         let maxSalaries = sryArr[0];
//         let minSalaries = sryArr[sryArr.length - 1];

//         return maxSalaries-minSalaries;
//     }
// }

// // Creating a Instance of Object-Class
// let instanceOfUtil = new Util(employeeData);

// // console.log(instanceOfUtil);
// // console.log(instanceOfUtil.findSalaryRange());

// ************* Inheritance(extends) *************

// Parent Class
// class Student {
//     // Parent class contructor with parameter
//     constructor(name) {
//         this.fullName = name;
//     }

//     // Parent class member method
//     markAttendance() {
//         console.log(this.fullName, " is Present today.");
//     }
// };

// let parent = new Student("Alok");
// console.log(parent);

// // Derived or Child Class
// class SportsCaptain extends Student {
//     // Child Class member method
//     playFootball() {
//         // fullName is derived from parent class's fullName data member
//         console.log(this.fullName, " is playing football.");
//     }
// }

// let child = new SportsCaptain();
// console.log(child.playFootball());

// ---------------Schema/Class---------------

class Person {
    name;
    standard;
    // subject;

    constructor(nm, std, subject) {
        this.name = nm;
        this.standard = std;
        this.sub = subject;
    };

    canWalk() {
        return `${this.name} can walk`;
    };

    subjects() {
        return `${this.sub} this is your subject name`;
    };
};

const utkarshObj = new Person("utkarsh kumar", "9th", "Math");
console.log(utkarshObj);
// console.log(utkarshObj.canWalk());
// console.log(utkarshObj.subjects());

// ---------------Constructor-Function---------------

function Student(studentName, studentStandard, favourateSubject) {
    this.name = studentName;
    this.standard = studentStandard;
    this.favourateSub = favourateSubject;

    this.intro = function() {
        return `Good evening one and all my name is ${this.name}`;
    };

    this.favSub = function() {
        return `My favourate subject is ${this.favourateSub}`;
    };
};

const alokObj = new Student("Alok kumar", "10th", "Algebra");
Student.prototype.medium = "Hindi";
console.log(alokObj);
console.log(Student.prototype.medium);
console.log(alokObj.intro());
console.log(alokObj.favSub());