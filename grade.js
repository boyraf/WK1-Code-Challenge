// Ask the user to input the student's mark using a prompt
// number() asks for it to be anumber as the grade input
//the prompt will be written "Enter the student's marks"
let mark = Number(prompt("Enter the student's mark"));

// Define the grade ranges
//We shall use these ranges to range our grades.
const aRange = 80;
const bRange = 60;
const cRange = 50;
const dRange = 40;

// Check the grade for the student's mark
if (mark >= aRange) {
   console.log("A");
} else if (mark >= bRange) {
  console.log("B");
} else if (mark >= cRange) {
  console.log("C");
} else if (mark >= dRange) {
  console.log("D");
} else {
  console.log("E");
}
