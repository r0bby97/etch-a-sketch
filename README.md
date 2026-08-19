# Etch-a-Sketch

This project is a browser-based drawing grid created as part of
[The Odin Project Foundations course](https://www.theodinproject.com/lessons/foundations-etch-a-sketch).
It practices DOM manipulation, event handling, loops, input validation, and
Flexbox layouts with JavaScript, HTML, and CSS.

## Assignment

Build an Etch-a-Sketch-style application that allows the user to draw by
moving the pointer across a grid.

1. Create a webpage containing a grid of `16 × 16` square elements.
2. Generate the grid entirely with JavaScript instead of writing every square
   directly in the HTML.
3. Use Flexbox to arrange the grid while keeping it inside a fixed amount of
   page space.
4. Add a hover effect that changes a square's color when the pointer passes
   over it, creating a drawing trail.
5. Add a button that asks the user for a new number of squares per side.
6. Remove the existing grid and generate a new one using the requested size.
7. Limit the custom grid size to a maximum of `100 × 100` squares.

## Features

- A `16 × 16` grid is created when the page loads
- Grid squares are generated and appended with JavaScript
- Hovered squares change their background color to orange
- A button opens a prompt for a custom grid size
- Input is checked to ensure it is a whole number from `1` to `100`
- The previous grid is cleared before the new grid is drawn
- Flexbox automatically resizes the squares to fit the available grid area

## How to Use

1. Open `index.html` in a browser.
2. Move the pointer across the grid to draw.
3. Select **Change the Grid** to enter a new grid size.
4. Enter a whole number between `1` and `100`.
5. Continue drawing on the newly generated grid.

## Built With

- HTML5
- CSS3
- JavaScript
- DOM manipulation
- Flexbox

## Project Status

The main assignment is complete. The optional extra-credit features have not
yet been implemented:

- Use a random RGB color for each interaction
- Add a progressive darkening effect to each square