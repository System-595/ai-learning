const JavaScriptContent = `
<h2>1. Introduction to JavaScript</h2>
<p>JavaScript is a versatile language used to add interactivity and dynamic behavior to web pages. It works alongside HTML and CSS to create modern web applications.</p>

<h2>2. Variables and Data Types</h2>
<p>Variables store data. JavaScript supports dynamic typing, meaning variables can hold any data type.</p>
<pre><code>let name = "Alice"; // String
const age = 25;     // Number
let isStudent = true; // Boolean
let skills = ["HTML", "CSS", "JavaScript"]; // Array
let person = { name: "Alice", age: 25 }; // Object</code></pre>

<h2>3. Control Flow</h2>
<p>Control flow statements allow us to make decisions and repeat actions.</p>

<h3>3.1 If-Else</h3>
<pre><code>if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Not an Adult");
}</code></pre>

<h3>3.2 Loops</h3>
<p>JavaScript supports <code>for</code>, <code>while</code>, and <code>do...while</code> loops.</p>
<pre><code>for (let i = 1; i <= 5; i++) {
  console.log("Count:", i);
}</code></pre>

<h2>4. Functions</h2>
<p>Functions are reusable blocks of code that perform specific tasks.</p>
<pre><code>// Function Declaration
function greet(name) {
  return "Hello, " + name + "!";
}
console.log(greet("Alice"));

// Arrow Function
const square = (num) => num * num;
console.log("Square of 4:", square(4));</code></pre>

<h2>5. Objects and Arrays</h2>
<p>JavaScript uses objects and arrays to organize data efficiently.</p>

<h3>5.1 Objects</h3>
<p>Objects store data in key-value pairs.</p>
<pre><code>let car = {
  brand: "Toyota",
  year: 2021,
  start: function () {
    console.log("Car is starting...");
  },
};

console.log(car.brand); // Access property
car.start(); // Call method</code></pre>

<h3>5.2 Arrays</h3>
<p>Arrays store lists of items.</p>
<pre><code>let fruits = ["Apple", "Banana", "Cherry"];
fruits.push("Mango"); // Add item

fruits.forEach((fruit) => console.log(fruit));</code></pre>

<h2>6. DOM Manipulation</h2>
<p>The Document Object Model (DOM) allows us to interact with HTML elements dynamically.</p>

<h3>6.1 Changing Content</h3>
<pre><code>// Change content of an element
document.getElementById("title").innerText = "New Title";</code></pre>

<h3>6.2 Adding Events</h3>
<p>We can respond to user actions using event listeners.</p>
<pre><code>document.getElementById("btn").addEventListener("click", function () {
  alert("Button Clicked!");
});</code></pre>

<h2>7. Error Handling</h2>
<p>JavaScript uses <code>try...catch</code> to handle errors gracefully.</p>
<pre><code>try {
  let result = 10 / 0;
  console.log(result);
} catch (error) {
  console.log("An error occurred:", error.message);
}</code></pre>

<h2>8. ES6 Features</h2>
<p>Modern JavaScript (ES6+) introduces powerful features for cleaner and more efficient code.</p>

<h3>8.1 Template Literals</h3>
<p>Template literals simplify string concatenation using backticks <code>\`</code>.</p>
<pre><code>let name = "Alice";
console.log(\`Hello, \${name}!\`);</code></pre>

<h3>8.2 Destructuring</h3>
<p>Destructuring simplifies extracting values from arrays and objects.</p>
<pre><code>let person = { name: "Alice", age: 25 };
let { name, age } = person;

console.log(name, age);</code></pre>

<h3>8.3 Classes</h3>
<p>Classes provide a cleaner syntax for object-oriented programming.</p>
<pre><code>class Car {
  constructor(brand) {
    this.brand = brand;
  }
  start() {
    console.log(\`\${this.brand} car is starting...\`);
  }
}

let myCar = new Car("Toyota");
myCar.start();</code></pre>

<h2>Conclusion</h2>
<p>JavaScript is a powerful and flexible programming language for building interactive and dynamic web applications. By mastering variables, control flow, functions, and modern ES6+ features, you will have a strong foundation to create web applications and explore advanced JavaScript concepts.</p>
`;

export default JavaScriptContent;
