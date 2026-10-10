# QuickNotes

QuickNotes is a lightweight note-taking web app for capturing personal, work, and study reminders in one place. Add notes with a category, find them with a case-insensitive search, and come back to them later because they are saved in your browser's local storage.

## Features

- Add notes in the Personal, Work, or Study category.
- Validate empty notes and notes longer than 200 characters.
- View each note's category and creation date and time.
- Delete individual notes or clear all notes after confirmation.
- Search note text without regard to letter case; searches with multiple words match notes containing every word.
- Keep notes across page refreshes with browser local storage.
- Use a responsive layout on desktop and small screens.

## Run locally

1. Clone or download this repository.
2. Open `index.html` in a modern web browser.
3. Add a note, choose its category, and use the search field to find it later.

No build step or external dependencies are required. Notes are stored in the browser profile on the device where they were created.

## What I learned

- How semantic HTML and accessible labels make a small app easier to use.
- How to create and update page elements safely with the DOM, `createElement`, and `textContent`.
- How to validate form input and handle add, delete, and search interactions.
- How to save and restore structured data with JSON and `localStorage`.
- How Flexbox and a media query can adapt a layout for smaller screens.
