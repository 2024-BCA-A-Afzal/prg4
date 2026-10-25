
const students = [
    { name: "Afzal", age: 21, grade: "A" },
    { name: "Arun", age: 20, grade: "B" },
    { name: "Priya", age: 19, grade: "A+" }
];

const output = document.getElementById("output");

students.forEach(({ name, age, grade }) => {
    const student = document.createElement("p");

    student.textContent =
        `Name: ${name}, Age: ${age}, Grade: ${grade}`;

    output.appendChild(student);

    console.log(`Name: ${name}, Age: ${age}, Grade: ${grade}`);
});
