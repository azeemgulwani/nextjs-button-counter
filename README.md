Next.js Button Counter

A simple interactive React + Next.js web app that displays a reusable counter component.
The app demonstrates state management with useState, event handling, props, and accessibility best practices.

How to Run Locally

1. Install dependencies:

npm install


2. Start the development server:

npm run dev


Then visit http://localhost:3000
 in your browser.

How to Build

To create and run a production build:

npm run build
npm start

Features Implemented

Displays current count

Increment (+) and Decrement (–) buttons

Reset button (resets to initial count)

Step input (<input type="number">) to change increment/decrement amount

Uses useState for state management

Props:

initialCount (default 0)

initialStep (default 1)

Decrement button disabled when count − step < 0

Accessible UI:

aria-live="polite" for count updates

Proper labels and real <button> elements

Two counter instances:

Default counter

Counter with custom props (initialCount={5}, initialStep={2})

 Known Issues / Limitations

Styling uses simple inline CSS for clarity (no advanced design).

No persistent storage — count resets on refresh.

Input validation ensures step value ≥ 1 only.

 Author: Azeem Gulwani
 Project: Next.js Button Counter — ISM 3232 Coding Project
