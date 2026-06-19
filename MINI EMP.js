
// MINI EMPLOYEE PORTAL 
const employee = {
    name: "Krishna",
    id: "EMP666",
    department: "Software Development",
    salary: 75000,
    experience: 3,
    attendance: 95
};


const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "NodeJS"
];


const username = "admin";
const password = "1234";

if (username === "admin" && password === "1234") {

    console.log("✅ Login Successful\n");

    
    console.log("==================================");
    console.log(" EMPLOYEE PORTAL");
    console.log("==================================");

    console.log(`
Employee Name : ${employee.name}
Employee ID : ${employee.id}
Department : ${employee.department}
Salary : ₹${employee.salary}
Experience : ${employee.experience} Years
Attendance : ${employee.attendance}%
`);

    
    console.log("Skills:");
    skills.forEach((skill, index) => {
        console.log(`${index + 1}. ${skill}`);
    });

    
    let hra = employee.salary * 0.20;
    let da = employee.salary * 0.10;
    let grossSalary = employee.salary + hra + da;

    console.log("\nSalary Details");
    console.log("Basic Salary :", employee.salary);
    console.log("HRA :", hra);
    console.log("DA :", da);
    console.log("Gross Salary :", grossSalary);

    
    if (employee.attendance >= 90) {
        console.log("\nAttendance : Excellent");
    } else if (employee.attendance >= 75) {
        console.log("\nAttendance : Good");
    } else {
        console.log("\nAttendance : Poor");
    }

    
    if (employee.experience >= 5) {
        console.log("Employee Level : Senior");
    } else {
        console.log("Employee Level : Junior");
    }

    
    let bonus =
        employee.experience >= 5
            ? employee.salary * 0.20
            : employee.salary * 0.10;

    console.log("Bonus :", bonus);

    
    let promotionEligible =
        employee.experience >= 3 &&
        employee.attendance >= 85;

    console.log(
        "Promotion Eligible :",
        promotionEligible
    );

    
    let status = promotionEligible
        ? "Eligible"
        : "Not Eligible";

    console.log("Promotion Status :", status);

    
    console.warn("\nWarning: Complete profile update.");
    console.error("Sample Error Message.");

    console.table(employee);

} else {
    console.log("❌ Login Failed");
}
