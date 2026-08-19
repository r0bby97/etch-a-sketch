# Etch-a-Sketch

This project is a browser-based drawing grid created as part of
[The Odin Project Foundations course](https://www.theodinproject.com/lessons/foundations-etch-a-sketch).

It practices DOM manipulation, event handling, loops, input validation, and
Flexbox layouts with JavaScript, HTML, and CSS.

## Assignment

Build an Etch-a-Sketch-style application that allows the user to draw by
moving the pointer across a grid.

1. Create a webpage containing a grid of `16 × 16` square elements.
2. Generate the grid entirely with JavaScript instead of writing every square directly in the HTML.
3. Use Flexbox to arrange the grid while keeping it inside a fixed amount of page space.
4. Add a hover effect that changes a square's color when the pointer passes over it.
5. Add a button that asks the user for a new number of squares per side.
6. Remove the existing grid and generate a new one using the requested size.
7. Limit the custom grid size to a maximum of `100 × 100` squares.

### Extra Credit

- Randomize the RGB color of each square on its first interaction.
- Increase the opacity of a square by 10% with each interaction.
- Reach full opacity after ten interactions.

## Features

- A `16 × 16` grid is created when the page loads
- Grid squares are generated with JavaScript
- Each square receives a random RGB color on its first interaction
- Repeated hover interactions increase the square's opacity by 10%
- Squares reach full opacity after ten interactions
- A button allows the user to choose a custom grid size
- Input is limited to whole numbers between `1` and `100`
- The previous grid is removed before a new grid is generated
- Flexbox keeps all squares inside the available grid area

## How to Use

1. Open `index.html` in a browser.
2. Move the pointer across the grid to draw.
3. Move across the same square repeatedly to increase its opacity.
4. Click **Change the Grid** to choose a new grid size.
5. Enter a whole number between `1` and `100`.
6. Continue drawing on the newly generated grid.

## Built With

- HTML5
- CSS3
- JavaScript
- DOM manipulation
- Flexbox

## Project Status

The main assignment and both optional extra-credit features are complete.

The grid now uses random RGB colors and progressively increases the opacity
of each square with repeated interactions.