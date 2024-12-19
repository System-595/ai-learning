const PythonContent = `
<h2>1. Introduction to Python</h2>
<p>Python is a high-level, interpreted, and versatile programming language. Created by Guido van Rossum in 1991, it is widely used for web development, data science, automation, scripting, and more.</p>

<p>Python's simple syntax emphasizes readability, making it ideal for beginners and professionals alike.</p>

<h2>2. Setting Up Python</h2>
<p>To run Python programs:</p>
<ul>
  <li>Install Python from the <a href="https://www.python.org/">official website</a>.</li>
  <li>Use any IDE such as VS Code, PyCharm, or Jupyter Notebook.</li>
</ul>

<h2>3. Variables and Data Types</h2>
<p>Python uses dynamic typing, meaning you don't need to specify variable types explicitly.</p>
<pre><code># Variable Declaration
name = "Alice"   # String
age = 25         # Integer
is_student = True # Boolean
skills = ["Python", "SQL", "ML"] # List
person = {"name": "Alice", "age": 25} # Dictionary

print(name, age, is_student)</code></pre>

<h2>4. Input and Output</h2>
<p>Python allows user input and system output using <code>input()</code> and <code>print()</code>.</p>
<pre><code># Taking Input
name = input("Enter your name: ")
print(f"Hello, {name}!")</code></pre>

<h2>5. Control Flow</h2>
<p>Python supports conditionals and loops for decision-making and repetition.</p>

<h3>5.1 If-Else</h3>
<pre><code># Example: If-Else
score = 85

if score >= 90:
    print("Grade: A")
elif score >= 70:
    print("Grade: B")
else:
    print("Grade: C")</code></pre>

<h3>5.2 For Loop</h3>
<pre><code># Example: For Loop
for i in range(1, 6):
    print(f"Count: {i}")</code></pre>

<h3>5.3 While Loop</h3>
<pre><code># Example: While Loop
i = 1
while i <= 5:
    print(f"Number: {i}")
    i += 1</code></pre>

<h2>6. Functions</h2>
<p>Functions are reusable blocks of code in Python.</p>

<pre><code># Defining and Calling Functions
def greet(name):
    return f"Hello, {name}!"

print(greet("Alice"))</code></pre>

<h2>7. Lists and Dictionaries</h2>
<p>Lists and dictionaries are used to organize and store data.</p>

<h3>7.1 Lists</h3>
<pre><code># Example: List
fruits = ["Apple", "Banana", "Cherry"]
fruits.append("Mango") # Add an item

for fruit in fruits:
    print(fruit)</code></pre>

<h3>7.2 Dictionaries</h3>
<pre><code># Example: Dictionary
person = {"name": "Alice", "age": 25, "city": "New York"}
print(person["name"])  # Access a value</code></pre>

<h2>8. Classes and Objects</h2>
<p>Python supports object-oriented programming with classes and objects.</p>
<pre><code># Example: Class and Object
class Car:
    def __init__(self, brand, year):
        self.brand = brand
        self.year = year

    def display_info(self):
        print(f"Brand: {self.brand}, Year: {self.year}")

car1 = Car("Toyota", 2021)
car1.display_info()</code></pre>

<h2>9. Error Handling</h2>
<p>Python uses <code>try...except</code> to handle exceptions gracefully.</p>
<pre><code># Example: Error Handling
try:
    result = 10 / 0
except ZeroDivisionError as e:
    print("Error:", e)</code></pre>

<h2>10. File Handling</h2>
<p>Python allows reading and writing files using the <code>open()</code> function.</p>

<h3>10.1 Reading a File</h3>
<pre><code># Example: Reading a File
with open("example.txt", "r") as file:
    content = file.read()
    print(content)</code></pre>

<h3>10.2 Writing to a File</h3>
<pre><code># Example: Writing to a File
with open("output.txt", "w") as file:
    file.write("Hello, World!")</code></pre>

<h2>11. Conclusion</h2>
<p>Python is a beginner-friendly yet powerful programming language for solving a wide range of problems. By mastering variables, control flow, functions, and object-oriented concepts, you will have a strong foundation to explore Python further.</p>

<p>Practice these examples to strengthen your skills!</p>
`;

export default PythonContent;
