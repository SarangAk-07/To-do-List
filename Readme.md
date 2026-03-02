# To-Do List Web App

A modern glassmorphism-style To-Do List built with HTML, CSS, and JavaScript.
This app allows users to add, complete, and delete tasks with persistent storage using localStorage and interactive sound feedback.

---

# Live Demo

After deployment (GitHub Pages / Netlify), the app is accessible via a public URL.

---

# Features

* Add new tasks
* Mark tasks as completed
* Delete tasks
* Auto-save using localStorage
* Sound feedback on actions
* Glassmorphism UI design
* Responsive layout

---

# Project Structure

```
todo-app/
│
├── index.html
├── style.css
├── script.js
└── assets/
    ├── Fahhhhh.mp3
    ├── welldone.mp3
    └── WALLPAPER-202505161017156.jpg
```

---

# Why <form> Was Used Instead of a Normal Input + Button

In this project, the task input field is wrapped inside a <form> element instead of using a standalone input and button. This follows best web development practices.

## 1. Built-in Submit Behavior

A <form> provides a native submit event, which is triggered when:

* The user clicks the Add button
* The user presses Enter in the input field

This improves usability because users expect Enter to submit inputs automatically. Without a form, extra keyboard handling code would be required.

---

## 2. Accessibility Benefits

Forms are semantically correct for user input submission. Screen readers and assistive technologies recognize input fields and submission actions, making the app more accessible and standards-compliant.

---

## 3. Cleaner JavaScript Logic

Using a form allows handling all task creation in one place:

```js
form.addEventListener("submit", (e) => {
  e.preventDefault();
  addTask();
});
```

Without a form, separate listeners would be needed for the button click and Enter key, creating duplicate logic. The form simplifies the architecture.

---

## 4. Real-World Application Pattern

Most production apps use forms for login inputs, search bars, add-item fields, and chat messages. Using a form here reflects real-world UI patterns and prepares the project for future backend integration.

---

# Technologies Used

* HTML5
* CSS3 (Glassmorphism)
* Vanilla JavaScript
* Web Storage API (localStorage)

---

# Data Persistence

Tasks are stored in the browser using localStorage. Each task is saved as an object:

```js
{
  id: number,
  text: string,
  completed: boolean
}
```

This ensures tasks remain after page refresh.

---

# Sound Effects

* Complete task: Fahhhhh.mp3
* Delete task: welldone.mp3

Audio feedback improves interaction and user experience.

---

# Responsiveness

The layout adapts for smaller screens:

* Buttons stack vertically
* Container width adjusts
* Text wraps properly

---

# Future Improvements

* Edit task
* Filter (All / Done / Pending)
* Task counter
* Dark mode toggle
* Animations


# License

This project is open-source and free to use for learning purposes.
