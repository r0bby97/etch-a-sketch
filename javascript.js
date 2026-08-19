const container = document.querySelector(".container");
const button = document.querySelector("button");
drawGrid(16);




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
      rowElement.classList.add("opacity0");

      rowElement.addEventListener("mouseenter", (event) => {
        if (rowElement.classList.contains("opacity0") === true){
          const rgb = randomRGB();
          event.target.style.backgroundColor = rgb;
          event.target.style.opacity = "0.1";
          rowElement.classList.add("opacity1");
          rowElement.classList.remove("opacity0");
        } else if (rowElement.classList.contains("opacity1") === true) {
          event.target.style.opacity = "0.2";
          rowElement.classList.add("opacity2");
          rowElement.classList.remove("opacity1");
        } else if (rowElement.classList.contains("opacity2") === true) {
          event.target.style.opacity = "0.3";
          rowElement.classList.add("opacity3");
          rowElement.classList.remove("opacity2");
        } else if (rowElement.classList.contains("opacity3") === true) {
          event.target.style.opacity = "0.4";
          rowElement.classList.add("opacity4");
          rowElement.classList.remove("opacity3");
        } else if (rowElement.classList.contains("opacity4") === true) {
          event.target.style.opacity = "0.5";
          rowElement.classList.add("opacity5");
          rowElement.classList.remove("opacity4");
        } else if (rowElement.classList.contains("opacity5") === true) {
          event.target.style.opacity = "0.6";
          rowElement.classList.add("opacity6");
          rowElement.classList.remove("opacity5");
        } else if (rowElement.classList.contains("opacity6") === true) {
          event.target.style.opacity = "0.7";
          rowElement.classList.add("opacity7");
          rowElement.classList.remove("opacity6");
        } else if (rowElement.classList.contains("opacity7") === true) {
          event.target.style.opacity = "0.8";
          rowElement.classList.add("opacity8");
          rowElement.classList.remove("opacity7");
        } else if (rowElement.classList.contains("opacity8") === true) {
          event.target.style.opacity = "0.9";
          rowElement.classList.add("opacity9");
          rowElement.classList.remove("opacity8");
        } else if (rowElement.classList.contains("opacity9") === true) {
          event.target.style.opacity = "1";
          rowElement.classList.add("opacity10");
          rowElement.classList.remove("opacity9S");
        }
      });

    //   rowElement.addEventListener("mouseleave", (event) => {
    //     event.target.style.backgroundColor = "white";
    //   });

      columnDiv.appendChild(rowElement);
    }
  }
}

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

function randomRGB() {
  const r = randomNumber();
  const g = randomNumber();
  const b = randomNumber();
  return `rgb(${r},${g},${b})`;
}

function randomNumber() {
  const min = 0;
  const max = 255;
  const random = (Math.floor(Math.pow(10,14)*Math.random()*Math.random())%(max-min+1))+min;
  return random;
}