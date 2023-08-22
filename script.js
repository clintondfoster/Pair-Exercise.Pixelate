// Your code here
// HTML elements
const rowButton = document.getElementById("add-row");
const table = document.getElementById("table");

function makeARow() {
    const tr=document.createElement("tr");
    for (let i=0; i < 20; i++) {
        const td=document.createElement("td");
        tr.appendChild(td);
    }
    table.appendChild(tr);
    
}
console.log(makeARow())
// makeARow()
// makeARow()
// makeARow()
// makeARow()

rowButton.addEventListener("click",() => {
    makeARow();
}) 