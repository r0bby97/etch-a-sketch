const container = document.querySelector(".container");
const button = document.querySelector("button");

button.addEventListener("click", (event) => {
  userGrid = Number(
    prompt(
      "Enter your custom grid number. It will look like (YourNumber x YourNumber).",
      16,
    ),
  );
  while (
    userGrid > 100 ||
    userGrid < 1 ||
    userGrid % 1 !== 0 ||
    userGrid === undefined ||
    userGrid === null ||
    typeof userGrid !== "number"
  ) {
    userGrid = Number(
      prompt(
        "Just enter a valid integer number smaller than 100 and bigger than 1.",
        0,
      ),
    );
  }
  while (container.firstChild) {
    container.removeChild(container.lastChild);
  }
  drawGrid(userGrid);
});

function drawGrid(gridSize) {
  for (let column = 0; column < gridSize; column++) {
    const columnDiv = document.createElement("div");
    columnDiv.classList.add(`column`);
    columnDiv.classList.add(`column${column}`);
    container.appendChild(columnDiv);

    for (let row = 0; row < gridSize; row++) {
      const columnDiv = document.querySelector(`.column${column}`);
      const rowElement = document.createElement("div");
      rowElement.setAttribute("id", `element${column}-${row}`);
      rowElement.classList.add("element");

      rowElement.addEventListener("mouseenter", (event) => {
        event.target.style.backgroundColor = "orange";
      });

    //   rowElement.addEventListener("mouseleave", (event) => {
    //     event.target.style.backgroundColor = "white";
    //   });

      columnDiv.appendChild(rowElement);
    }
  }
}

drawGrid(16);