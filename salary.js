// Get the user's input for their basic salary and benefits
let basicSalary = parseFloat(prompt("Enter your basic salary:"));
let benefits = parseFloat(prompt("Enter the value of any benefits you receive:"));

// Calculate the gross salary by adding the basic salary and benefits together
let grossSalary = basicSalary + benefits;

// Calculate the payee tax
let payeeTax = 0;
if (grossSalary > 24000) {
  payeeTax = (grossSalary - 24000) * 0.3 + 3600;
} else if (grossSalary > 16000) {
  payeeTax = (grossSalary - 16000) * 0.25 + 2100;
} else if (grossSalary > 8000) {
  payeeTax = (grossSalary - 8000) * 0.2 + 600;
}

// Calculate the NHIF deductions
let nhifDeductions = 0;
if (grossSalary > 6000) {
  if (grossSalary <= 8000) {
    nhifDeductions = 150;
  } else if (grossSalary <= 12000) {
    nhifDeductions = 300;
  } else if (grossSalary <= 15000) {
    nhifDeductions = 400;
  } else if (grossSalary <= 20000) {
    nhifDeductions = 500;
  } else {
    nhifDeductions = 600;
  }
}

// Calculate the NSSF deductions
let nssfDeductions = Math.min(basicSalary * 0.06, 2160);

// Calculate the net salary by subtracting the deductions from the gross salary
let netSalary = grossSalary - payeeTax - nhifDeductions - nssfDeductions;

// Output the results to the user
console.log("Gross salary: " + grossSalary.toFixed(2));
console.log("Payee tax: " + payeeTax.toFixed(2));
console.log("NHIF deductions: " + nhifDeductions.toFixed(2));
console.log("NSSF deductions: " + nssfDeductions.toFixed(2));
console.log("Net salary: " + netSalary.toFixed(2));
/*We use the parseFloat function to convert the user's input from a string to a number.
The payee tax is calculated using progressive tax rates based on the gross salary. The if statements check which tax bracket the gross salary falls into and calculate the tax accordingly.
The NHIF deductions are also based on a progressive scale, and are calculated similarly to the payee tax.
The NSSF deductions are calculated as 6% of the basic salary, up to a maximum of Ksh 2160.
We use the toFixed method to round the output values to 2 decimal places before displaying them to the user.




*/