//Creation 16x16 matrix

const container = document.querySelector(".container")
for (let i = 0; i < 16; i++) {
    const column = document.createElement("div");
    column.setAttribute("class", "column")
    column.setAttribute("id", `column-${i}`)
    for (let j = 0; j < 16; j++) {
        const rows = document.createElement("div");
        rows.setAttribute("class", "rows")
        rows.setAttribute("id", `rows-${i},${j}`)
        column.appendChild(rows);   
    }
    container.appendChild(column);
}

console.log(container)
