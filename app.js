
let add = document.getElementById("add");
let tbody = document.getElementById("tbody");
let del = document.getElementById("delete");
let get = document.getElementsByClassName("record");

add.addEventListener('click',(extract)=>{

 extract.preventDefault();


 const task = document.getElementById("task-input").value;
 const time = document.getElementById("time").value;
 const date = document.getElementById("date").value;
 const day = document.getElementById("day").value;
 const newRow = document.createElement("tr");

 newRow.innerHTML = `
 
   <td><input type="checkbox" id="select" 
    style="
    width:20px;
    height:20px;
    margin-left:20px;
   
    font-weight:bold;
    color:black;"
   ></td>
   <td style="margin-left:30px;">${task}</td>
   <td style="margin-left:30px;">${time}</td>
   <td style="margin-left:30px;">${date}</td>
   <td style="margin-left:30px;">${day}</td>

   <td><button  onclick="editRow(this)"

   style="
    background-color:blue;
    width:90px;
    color:white;
    border:none;
    cursor:pointer;
    padding:5px;
    border-radius:8px;
    margin-left:60px;
    font-size:15px;
   align-items:center ;
   
    "
     >Edit</button></td>

   
 
 `;

 tbody.appendChild(newRow);


});

del.addEventListener('click', ()=>{
  
    let checkboxes = tbody.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach((checkbox)=>{
            if(checkbox.checked){
                let row = checkbox.closest('tr');
                    row.remove();
            }
        });
});



function editRow(button) {
    // button jis row me hai usko nikala 
    let row = button.closest("tr");
    let cells = row.querySelectorAll("td");

    if (button.innerText === "Edit") {
        // 0th td checkbox hai, 5th td button hai
        for (let i = 1; i < cells.length - 1; i++) {
            let oldValue = cells[i].innerText;
            cells[i].innerHTML = `<input type="text" value="${oldValue}" style="width:100%; padding:5px;">`;
        }
        button.innerText = "Save";
        button.style.backgroundColor = "green";
    } else {
        // Save dabane par input ke value ko text bana diya
        for (let i = 1; i < cells.length - 1; i++) {
            let newValue = cells[i].querySelector("input").value;
            cells[i].innerText = newValue;
        }
        button.innerText = "Edit";
        button.style.backgroundColor = "blue";
    }
}


