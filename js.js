// Task 1
let age = 24;
let age2 = age + 5;
console.log(`After 5 years I will be: ${age2}`);

// task 2
let a = 10;
let b = 3;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

// task 3
let agee = +prompt("apki age kia hy?");
if (agee >= 18) {
  console.log("You can vote");
} else {
  console.log("You are underage");
}

// task 4
let studentNumber = prompt("exam me kitny marks ay?");
if (studentNumber > 90) {
  console.log("Grade A");
} else if (studentNumber > 80) {
  console.log("Grade B");
} else if (studentNumber > 70) {
  console.log("Grade C");
} else {
  console.log("Fail");
}

// task 5
for (let i = 1; i < 11; i++) {
  console.log(i);
}

// task 6
for (let i = 1; i < 11; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// task 7
function addNumbers(a, b) {
  console.log(a + b);
}
addNumbers(4, 6);

// task 8
function isEven(a) {
  if (a % 2 === 0) {
    console.log(`${a} is Even number`);
  } else {
    console.log(`${a} is odd number`);
  }
}
isEven(3);

// task 9
let naam = ["Ali", "Sara", "Ahmed"];
console.log(naam[0]);
console.log(naam[2]);
console.log(naam.length);

// task 10
let naaam = ["Ali", "Sara", "Ahmed"];
for (let i = 0; i < naaam.length; i++) {
  console.log(naaam[i]);
}

// task 11
let student = {
  name: "Raza",
  age: 24,
  course: "Math",
};
console.log(student.name);
console.log(student.course);

// task 12
let studeent = {
  name: "Raza",
  age: 24,
  course: "Math",
  marks: 55,
};
console.log(studeent.name);
console.log(studeent.course);
if (studeent.marks > 50) {
  console.log("pass");
} else {
  console.log("Fail");
}

// task 13
let number = [2, 5, 8, 3, 10];
let sum = 0;
for (let i = 0; i < number.length; i++) {
  sum = sum + number[i];
}
console.log(sum);

// task 14
let numbber = [2, 5, 8, 22, 3, 10];
let maxx = numbber[0];
for (let i = 0; i < numbber.length; i++) {
  if (maxx < numbber[i]) {
    maxx = numbber[i];
  }
}
console.log(maxm);

// task 15
let numberr = [2, 5, 8, 22, 3, 10, 12, 15, 21, 25, 26, 47, 56];
let count = 0;
for (let i = 0; i < numberr.length; i++) {
  if (numberr[i] % 2 === 0) {
    console.log(numberr[i]);
    count++;
  }
}
console.log(count);

// task16
let numberss = [2, 5, 8, 22, 3, 10];
let odd = [];
let even = [];
for (let i = 0; i < numberss.length; i++) {
  if (numberss[i] % 2 === 0) {
    even.push(numberss[i]);
  } else {
    odd.push(numberss[i]);
  }
}
console.log(odd);
console.log(even);

// task 17
let nuumbers = [2, 5, 8, 22, 3, 10];
let max = nuumbers[0];
let min = nuumbers[0];
let summ = 0;

for (let i = 0; i < nuumbers.length; i++) {
  if (max < nuumbers[i]) {
    max = nuumbers[i];
  }
  if (nuumbers[i] < min) {
    min = nuumbers[i];
  }
  summ = summ + nuumbers[i];
}
let average = summ / nuumbers.length;
console.log(`${max}  max number in this arry`);
console.log(`${min}  min number in this arry`);
console.log(`${summ}  sum of  numbers in this arry`);
console.log(`${average} this is average number of    numbers in this arry`);

// task 18
let numbers = [2, 5, 8, 5, 3, 10, 2, 8];
let unique = [];
for (let i = 0; i < numbers.length; i++) {
  if (!unique.includes(numbers[i])) {
    unique.push(numbers[i]);
  }
}
console.log(unique);
