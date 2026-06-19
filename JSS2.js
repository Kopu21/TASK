
// TASK 1 : Employee Registration


let employeeName = "KRISHNA";
let employeeId = "EMP666";
let department = "Software Development";
let salary = 75000;
const permanentEmployee = true;

console.log(`
Employee Details
----------------
Name : ${employeeName}
ID : ${employeeId}
Department : ${department}
Salary : ${salary}
Permanent : ${permanentEmployee}
`);



// TASK 2 : Employee Skills


let skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Git",
    "Node.js",
    "Python",
    "Java",
    "mySQL"

];

console.log("First Skill :", skills[0]);
console.log("Third Skill :", skills[2]);
console.log("Last Skill :", skills[skills.length - 1]);
console.log("Total Skills :", skills.length);


// TASK 3 : Company Object

let employees = 2500;
let location = "Hyderabad";

const company = {
    companyName: "AMAZON",
    location: location,
    employees: employees,
    technologies: [
        "Python",
        "JavaScript",
        "React",
        "Node.js",
        "AWS",
        "Angular",
        "AZURE",
        "AIML",
        "DevOps",
        "Java"
    ]
};

console.log("Company Name :", company.companyName);
console.log("Location :", company.location);
console.log("Second Technology :", company.technologies[1]);
console.log("Total Technologies :", company.technologies.length);




// TASK 4 : Salary Calculator

let basicSalary = 750000;
let bonus = 5000;

let totalSalary = basicSalary + bonus;
let tax = totalSalary * 0.10;
let finalSalary = totalSalary - tax;

console.log("\nSalary Details");
console.log("Basic Salary :", basicSalary);
console.log("Bonus :", bonus);
console.log("Total Salary :", totalSalary);
console.log("Tax (10%) :", tax);
console.log("Final Salary :", finalSalary);



// TASK 5 : Attendance Checker

let attendance = 250;

let exam_status = attendance >= 175 ? "Eligible for Exam" : "Not Eligible";

console.log("Attendance :", attendance);
console.log("Exam Status :", exam_status);


// TASK 6 : Login Verification

let username = "Kalcyin";
let password = "13579";

let loginStatus = username === "Kalcyin" && password === "13579" ? "Login Successful" : "Invalid Credentials";

console.log("Login Status :", loginStatus);


// TASK 7 : Product Billing

let productName = "APPLE IPHONE 14 PRO MAX";
let productPrice = 175000;
let quantity = 2;

let totalBill = productPrice * quantity;

console.log(
    `Product : ${productName}\n` +
    `Price : ${productPrice}\n` +
    `Quantity : ${quantity}\n` +
    `Total : ${totalBill}`
);

// TASK 8 : Increment & Decrement

let visitors = 250;

console.log("Pre Increment :", visitors + 1);
visitors += 1;

console.log("Post Increment :", visitors);
visitors += 1;

visitors -= 1;
console.log("Pre Decrement :", visitors);

console.log("Post Decrement :", visitors);
visitors -= 1;

console.log("Final Visitors :", visitors);


// TASK 9 : Comparison Checker
console.log(10 == "10");        // true in JavaScript (loose equality)
console.log(10 === Number("10"));
console.log(20 != "20");        // false in JavaScript (loose inequality)
console.log(20 !== Number("20"));
console.log(5 < 10);
console.log(15 >= 20);
console.log(100 <= 100);


// TASK 10 : User Interaction (console-based)
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter Employee Name: ', function(empName) {
    rl.question('Enter Employee Age: ', function(empAge) {
        rl.question('Do you want to join our company? (y/n): ', function(resp) {
            resp = (resp || '').trim().toLowerCase();
            if (resp === 'y' || resp === 'yes') {
                console.log(`Welcome ${empName}`);
            } else {
                console.log('Thank You');
            }
            rl.close();
        });
    });
});
