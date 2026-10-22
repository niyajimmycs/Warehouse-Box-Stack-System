# Warehouse Box Loading and Unloading System Using Stack

A Data Structures mini project demonstrating the Stack data structure and the Last In, First Out (LIFO) principle. This package includes a Java console implementation and a separate responsive web interface.

## Files
- `WarehouseBoxSystem.java` — Java implementation using `java.util.Stack`.
- `index.html` — Web dashboard structure.
- `style.css` — Dark dashboard styling and responsive layout.
- `script.js` — Browser-side stack operations and activity log.
- `README.md` — Project documentation.
- `OUTPUT.pdf` — Optional: add your screenshots/output report here before submission.

## Web Interface: Run
1. Keep `index.html`, `style.css`, and `script.js` in the same folder.
2. Double-click `index.html` to open it in Chrome, Edge, Firefox, or another modern browser.
3. No server or internet connection is required for local testing.

## Java Program: Run
Install JDK 8 or later, open a terminal in this folder, and run:

```bash
javac WarehouseBoxSystem.java
java WarehouseBoxSystem
```

## Features
- Push: load a box onto the stack.
- Pop: unload the most recently loaded box.
- Peek: view the top box without removing it.
- Display: show boxes from top to bottom.
- Empty/status check.
- Web dashboard includes demo boxes, quick-add buttons, and an activity log.

## Data Structure
The Java program uses `Stack<String>`. The web interface models the same LIFO behavior with a JavaScript array and its `push()` and `pop()` operations.

## Before Submission
- Add your name and class details if required by your instructor.
- Test the Java program and web interface.
- Upload all required files to your public GitHub repository.
- If your instructor requires Java only, keep the Java source as the main implementation and treat the website as an optional visualization.
- Add `OUTPUT.pdf` only if you have prepared a real output/report PDF; do not submit an empty placeholder.

## Author
Add your name and class details here.
