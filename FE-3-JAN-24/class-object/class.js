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
class Student {
    // Parent class contructor with parameter
    constructor(name) {
        this.fullName = name;
    }

    // Parent class member method
    markAttendance() {
        console.log(this.fullName, " is Present today.");
    }
};

let parent = new Student("Alok");
console.log(parent);

// Derived or Child Class
class SportsCaptain extends Student {
    // Child Class member method
    playFootball() {
        // fullName is derived from parent class's fullName data member
        console.log(this.fullName, " is playing football.");
    }
}

let child = new SportsCaptain();
console.log(child.playFootball());