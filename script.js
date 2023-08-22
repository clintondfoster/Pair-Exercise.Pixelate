// Your code here
// HTML elements
const rowButton = document.getElementById("add-row");
const table = document.getElementById("table");
const select = document.getElementById("select");


//Add Row Functionality 
function makeARow() {
    const tr=document.createElement("tr");
    for (let i=0; i < 20; i++) {
        const td=document.createElement("td");
        tr.appendChild(td);
    }
    table.appendChild(tr);
}
// console.log(makeARow())

rowButton.addEventListener("click",() => {
    makeARow();
});


//Click functionality event listener
function colorize (e) {
    const tdCell = e.target;
    if (tdCell.className.length) {
        target.className = '';
    } else {
        tdCell.className = chosenColor;
    }
    console.log('clicked')
}

table.addEventListener("click", colorize)

//Color change event
let chosenColor = 'pink';

select.addEventListener("change", (e) => {
    chosenColor = e.target.value;
})





