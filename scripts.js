const container = document.querySelector(".container")
const btn = document.querySelector(".btn")

function createGrid(size) {
    container.innerHTML = ""

    for (let i = 0; i < size; i++) {
        const row = document.createElement("div");
        row.setAttribute("class", "row")
        row.setAttribute("id", `row-${i}`)
        for (let j = 0; j < size; j++) {
            const cell = document.createElement("div");
            cell.setAttribute("class", "cell")
            cell.setAttribute("id", `cell-${i},${j}`)
            row.appendChild(cell);
        }
        container.appendChild(row);
    }
    const cells = document.querySelectorAll(".cell");
    const cellSize = 960 / size
    cells.forEach((cell) => {
        cell.setAttribute("style", `width: ${cellSize}px; height: ${cellSize}px`)
        cell.addEventListener("mouseenter", (e) => {
            cell.classList.add("hover");
        });

        cell.addEventListener("mouseleave", (e) => {
            cell.classList.add("leave");
        });
    });
}

function resize() {
    const size = parseInt(prompt("Enter a number of cell per side: ",))
    if (isNaN(size)) {
        alert("Please enter a valid number.");
        resize()
    }
    if (size > 100) {
        alert("The number of cells is too high, please enter another number.")
        resize()
    }
   
    createGrid(size)
}

btn.addEventListener("click", resize)

const size = 16
createGrid(size)
