// Prompt the user to enter the car speed and store the value in the 'speed' variable
const speed = Number(prompt("Enter car speed (km/h)"));

// Check if the 'speed' variable is greater than the speed limit of 70 km/h
if (speed > 70) {
  // Calculate the number of demerit points by subtracting 70 from the speed, dividing the result by 5, and rounding down to the nearest integer using the 'Math.floor()' function. Store the result in the 'points' variable.
  const points = Math.floor((speed - 70) / 5);

  // Check if the number of demerit points is greater than or equal to 12
  if (points >= 12) {
    // Output "License suspended" if the driver has accumulated 12 or more demerit points
    console.log("License suspended");
  } else {
    // Output the number of demerit points followed by the string "Points:" if the driver has less than 12 demerit points
    console.log(`Points: ${points}`);
  }
} else {
  // Output "Ok" if the car is not exceeding the speed limit of 70 km/h
  console.log("Ok");
}
