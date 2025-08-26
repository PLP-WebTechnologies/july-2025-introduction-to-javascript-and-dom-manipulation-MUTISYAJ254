'use strict';

/* =========================================================
   PART 1: VARIABLES & CONDITIONALS
   - Declare variables and use a conditional to set a message.
========================================================= */
const personName = 'Alex';
let age = 20;

const isAdult = age >= 18;
console.log(`${personName} is ${isAdult ? 'an adult' : 'a minor'}.`);

const introEl = document.getElementById('intro');
introEl.textContent = `${personName} is ${isAdult ? 'an adult' : 'a minor'} (set by JS).`;


/* =========================================================
   PART 2: CUSTOM FUNCTIONS (at least 2)
   - greet(user): returns a greeting
   - sumArray(nums): returns the sum of an array of numbers
========================================================= */
function greet(user = 'friend') {
  return `Hello, ${user}!`;
}

function sumArray(nums) {
  let total = 0;
  for (const n of nums) total += n;
  return total;
}

// Example usage in console:
console.log(greet(personName));
console.log('Sum of [1,2,3] =', sumArray([1, 2, 3]));


/* =========================================================
   PART 3: LOOPS (at least 2 examples)
   - A classic for loop
   - A while loop
========================================================= */
const fruits = ['Apple', 'Banana', 'Mango', 'Orange'];

// For loop: log each fruit
for (let i = 0; i < fruits.length; i++) {
  console.log(`Fruit ${i}: ${fruits[i]}`);
}

// While loop: simple counting
let count = 0;
while (count < 3) {
  console.log('While count:', count);
  count++;
}


/* =========================================================
   PART 4: DOM INTERACTIONS (at least 3)
   1) Update text on page (already did for #intro above)
   2) Add event listeners for buttons (alert, theme toggle, increment)
   3) Render a list into the DOM
   4) Read input and print a greeting
========================================================= */

// 2a) Alert button
document.getElementById('btnAlert').addEventListener('click', () => {
  alert('Button clicked! 🎉');
});

// 2b) Theme toggle button
document.getElementById('btnTheme').addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

// 2c) Increment counter
let clicks = 0;
const counterEl = document.getElementById('counter');
document.getElementById('btnInc').addEventListener('click', () => {
  clicks++;
  counterEl.textContent = String(clicks);
});

// 3) Render fruits list into <ul id="list">
function renderList(items) {
  const listEl = document.getElementById('list');
  listEl.innerHTML = ''; // clear old
  for (const item of items) {
    const li = document.createElement('li');
    li.textContent = item;
    listEl.appendChild(li);
  }
}
renderList(fruits);

// 4) Read input value and show greeting
const greetOutput = document.getElementById('greetOutput');
document.getElementById('btnGreet').addEventListener('click', () => {
  const name = document.getElementById('nameInput').value.trim();
  greetOutput.textContent = greet(name || personName);
});
