//Creation 16x16 matrix

const container = document.querySelector(".container")
for (let i = 0; i < 16; i++) {
    const row = document.createElement("div");
    row.setAttribute("class", "row")
    row.setAttribute("id", `row-${i}`)
    for (let j = 0; j < 16; j++) {
        const cell = document.createElement("div");
        cell.setAttribute("class", "cell")
        cell.setAttribute("id", `cell-${i},${j}`)
        row.appendChild(cell);   
    }
    container.appendChild(row);
}

console.log(container)


// function hover(e){
//     console.log("the mouse leave a div")
// }


const cells = document.querySelectorAll(".cell");

cells.forEach((cell) => {
    cell.addEventListener("mouseenter", (e) => {
        cell.classList.add("enter");
    });

    cell.addEventListener("mouseleave", (e) => {
        cell.classList.add("leave");
    });
});

const btn = document.querySelector(".btn")