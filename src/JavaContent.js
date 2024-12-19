const JavaContent = `
<h2>1. Introduction to Java</h2>
<p>Java is a powerful, object-oriented programming language developed by Sun Microsystems in 1995. Known for its platform independence, Java allows you to write code once and run it anywhere using the Java Virtual Machine (JVM).</p>

<h2>2. Setting Up Java</h2>
<p>To write and run Java programs:</p>
<ul>
  <li>Install the <strong>Java Development Kit (JDK)</strong> from <a href="https://www.oracle.com/java/technologies/javase-downloads.html" target="_blank">Oracle's website</a>.</li>
  <li>Use an Integrated Development Environment (IDE) like IntelliJ IDEA, Eclipse, or VS Code.</li>
</ul>

<h2>3. Basic Syntax</h2>
<p>A Java program starts execution from the <code>main</code> method. Code is organized into classes and methods.</p>
<pre><code>public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}</code></pre>
<p><strong>Explanation:</strong></p>
<ul>
  <li><code>public class HelloWorld</code>: Declares a class named HelloWorld.</li>
  <li><code>public static void main</code>: Entry point for program execution.</li>
  <li><code>System.out.println()</code>: Prints text to the console.</li>
</ul>

<h2>4. Variables and Data Types</h2>
<p>Java is a statically-typed language, so variables must be declared with a type.</p>

<h3>4.1 Primitive Data Types</h3>
<p>Java has 8 primitive data types:</p>
<ul>
  <li><code>int</code>: Whole numbers (e.g., 1, 100)</li>
  <li><code>double</code>: Decimal numbers (e.g., 3.14)</li>
  <li><code>char</code>: Single character (e.g., 'A')</li>
  <li><code>boolean</code>: True/false values</li>
</ul>

<pre><code>int age = 25;
double pi = 3.14;
char grade = 'A';
boolean isJavaFun = true;

System.out.println(age);
System.out.println(pi);
System.out.println(grade);
System.out.println(isJavaFun);</code></pre>

<h3>4.2 Non-Primitive Data Types</h3>
<p>Strings and objects are non-primitive types.</p>
<pre><code>String name = "Alice";
System.out.println("Name: " + name);</code></pre>

<h2>5. Control Flow</h2>
<p>Control flow statements are used for decision-making and looping.</p>

<h3>5.1 If-Else Statement</h3>
<pre><code>int score = 85;

if (score >= 90) {
    System.out.println("Grade: A");
} else if (score >= 70) {
    System.out.println("Grade: B");
} else {
    System.out.println("Grade: C");
}</code></pre>

<h3>5.2 For Loop</h3>
<p>The <code>for</code> loop iterates a block of code.</p>
<pre><code>for (int i = 1; i <= 5; i++) {
    System.out.println("Count: " + i);
}</code></pre>

<h3>5.3 While Loop</h3>
<p>The <code>while</code> loop executes code as long as a condition is true.</p>
<pre><code>int i = 1;
while (i <= 5) {
    System.out.println("Number: " + i);
    i++;
}</code></pre>

<h2>6. Methods in Java</h2>
<p>Methods are blocks of code that perform specific tasks.</p>

<pre><code>public class Example {
    // Method Definition
    public static int add(int a, int b) {
        return a + b;
    }

    public static void main(String[] args) {
        int result = add(5, 10);
        System.out.println("Sum: " + result);
    }
}</code></pre>

<h2>7. Object-Oriented Programming (OOP)</h2>
<p>Java follows the principles of Object-Oriented Programming:</p>
<ul>
  <li><strong>Class</strong>: Blueprint for objects.</li>
  <li><strong>Object</strong>: Instance of a class.</li>
  <li><strong>Inheritance</strong>: Reusing code in derived classes.</li>
  <li><strong>Polymorphism</strong>: Using a single method in multiple ways.</li>
</ul>

<h3>7.1 Classes and Objects</h3>
<pre><code>class Car {
    String brand;
    int year;

    Car(String brand, int year) {
        this.brand = brand;
        this.year = year;
    }

    void displayInfo() {
        System.out.println("Brand: " + brand + ", Year: " + year);
    }
}

public class Main {
    public static void main(String[] args) {
        Car car1 = new Car("Toyota", 2021);
        car1.displayInfo();
    }
}</code></pre>

<h2>8. Exception Handling</h2>
<p>Exceptions are errors that can be handled gracefully using <code>try...catch</code>.</p>

<pre><code>try {
    int result = 10 / 0; // Error: Division by zero
} catch (ArithmeticException e) {
    System.out.println("Error: Cannot divide by zero!");
}</code></pre>

<h2>9. Arrays</h2>
<p>Arrays store multiple values of the same type.</p>

<pre><code>int[] numbers = {1, 2, 3, 4, 5};

for (int i = 0; i < numbers.length; i++) {
    System.out.println("Number: " + numbers[i]);
}</code></pre>

<h2>10. Conclusion</h2>
<p>Java is a versatile and powerful programming language for building scalable applications. By mastering its basic syntax, control flow, and OOP concepts, you can start creating programs for a wide range of applications, including web, mobile, and enterprise solutions.</p>
`;

export default JavaContent;
