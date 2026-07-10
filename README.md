🏐 Vertical & Lean: Workout Tracker App

This is a personalized, mobile-first React web application designed to track a highly specific 6-day workout protocol. The app guides the user through daily routines, stores historical workout data to inform progressive overload, and integrates video tutorials directly into the interface.

🚀 Features

Continuous Loop System: The app automatically knows which day of the 6-day protocol you are on. Once you finish a workout, it locks for the day and automatically queues up the next day's routine for your next visit.

Smart Placeholders (Progressive Overload): When you open an exercise, the input fields display light gray placeholder numbers. These represent the exact weight and reps you achieved the last time you performed that specific exercise, removing the need to guess or remember previous loads.

Instant Form Tutorials: Each exercise includes an integrated YouTube player. Clicking "Watch Form Tutorial" instantly loads a curated 15-second YouTube Short demonstrating perfect technique without leaving the app.

Zero-Setup Database (Local Storage Abstraction): The app uses an asynchronous Database Abstraction Layer currently pointing to the browser's localStorage. This provides instant persistence without needing a backend, but is structurally ready to be hot-swapped with a real database (like Supabase or Firebase) by simply updating the db object functions.

Mobile-First Design: Styled with Tailwind CSS, the interface uses large touch targets, collapsible cards, and sticky bottom buttons optimized specifically for use on a smartphone during a gym session.

🧠 How It Works (Architecture)

The application is built in a single file (App.jsx) and is divided into three distinct logical layers:

1. The Static Data Source (workoutPlan)

This is a standard JavaScript array acting as the source of truth for the entire program. It dictates the 6 days, the titles, the focus, the cardio requirement, and the array of exercises. Each exercise object contains the exact sets, reps, coaching notes, and a 11-character videoId for the YouTube embed.

2. The Database Abstraction Layer (db)

This object simulates an asynchronous backend server.

getUserProgress(): Checks localStorage to see what day the user is on and if they have already completed a workout today.

getPreviousLogs(exerciseName): Scans the saved workout history to find the most recent matching exercise and returns the set data to be used as UI placeholders.

saveWorkoutComplete(dayIndex, sessionLogs): Takes the user's current inputs, generates unique IDs, appends them to the historical log array, and advances the user's day index forward.

3. The React Components

<ExerciseCard />: A stateful, collapsible accordion component. It handles the toggle logic for its own visibility and the video iframe. It also dynamically maps over the required number of sets to generate the correct amount of input fields, feeding changes back up to the parent state.

<App />: The main controller. It handles the initial data fetching (useEffect), manages the temporary state of the current workout session (currentSessionLogs), and conditionally renders either a "Loading" screen, a "Workout Complete" screen, or the actual daily protocol based on the data retrieved from the DB layer.

🛠️ Tech Stack

Framework: React 18

Build Tool: Vite

Styling: Tailwind CSS v3/v4 (Utility classes)

Storage: Browser Local Storage (JSON structured)

Icons: Native Emojis

🏃‍♂️ Getting Started Locally

To run this application on your local machine:

Clone or initialize a Vite + React project:

npm create vite@latest workout-tracker -- --template react


Navigate into the directory and install dependencies:

cd workout-tracker
npm install


Ensure Tailwind CSS is configured (as per standard Vite + Tailwind setup).

Replace the contents of src/App.jsx with the main application code.

Start the development server:

npm run dev
