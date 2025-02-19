# AI Learning Platform
An interactive learning platform that helps users learn JavaScript, Python, and Java through AI-powered personalized learning pathways, quizzes, and a built-in code editor.

# 🚀 Features
Interactive Code Editor: Run JavaScript, Python, and Java code directly in the browser.
Programming Courses: Beginner-friendly courses for JavaScript, Python, and Java.
Quizzes & Assessments: Test your knowledge with multiple-choice quizzes.
User Dashboard: Track your course progress and quiz performance.
Authentication: Secure user authentication with Firebase.
Responsive UI: Tailwind CSS-based styling for a modern user experience.

# 🛠 Tech Stack
Frontend: React 18, Tailwind CSS, Firebase Authentication
Backend: Node.js 20.18.0 (for API integration)
Database: Firestore (for storing user progress and quiz scores)
Hosting: Firebase & Custom Domain ai.divyaansh.in
Code Execution API: Piston API for running code in multiple languages

# 🔧 Installation & Setup
Prerequisites
Ensure you have Node.js 20.18.0 installed on your system.

Steps to Run Locally

- Clone this repository:
git clone https://github.com/your-username/ai-learning-platform.git
cd ai-learning-platform

- Install dependencies:
npm install
Configure Firebase:

- Replace the Firebase configuration in firebaseConfig.js with your own Firebase credentials.
Start the development server:
npm start

- Open the application in your browser:
http://localhost:3000

# 📌 Features in Detail
1️⃣ Code Editor
Uses Monaco Editor for a VS Code-like experience.
Executes JavaScript, Python, and Java using the Piston API.
2️⃣ Courses
JavaScript, Python, and Java courses with structured lessons.
Progress tracking stored in Firestore.
3️⃣ Quizzes
Language-based quizzes to assess programming knowledge.
Scores are saved in Firestore under quizResults.
4️⃣ Dashboard
Displays course progress and quiz scores.
Fetches data from Firestore for each authenticated user.
5️⃣ Authentication
Users can sign up, log in, and track their progress securely with Firebase Authentication.

# 🚀 Deployment
The project is hosted on Firebase and accessible at ai.divyaansh.in.

- To deploy:
npm run build
firebase deploy

# 👥 Contributors
 - Divyaansh Rai Gandhi - Team Lead
 - Parv Khandelwal - Frontend & UI/UX
 - Jaikrit Singh Khichi - Backend & Deployment
 - Atharva Anand Amle - Backend

