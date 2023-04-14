// CREATE AN ARRAY OF EMPLOYEES
let emp
let updatedEmployees


let employees = [
    [12345678,'Hamish McCauley', 4567, 'hmccauley@gmail.com', 'Quality Assurance'],
    [45678945,'Steve McCauley', 7894, 'smccauley@verimatrix.com', 'Marketing'],
    [78945612,'Sheri McCauley', 8965,'sbmccauley@gmail.com','Executive'],
    [12345879,'Max McCauley',7412,'mgmccauley@gmail.com','Sales'],
    [65498712,'Bob McCauley',4568,'bobmccauley@gmail.com','Administrative']
]
employees.sort()
//CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS
updatedEmployees = localStorage.getItem('employees')
if(updatedEmployees) {

    employees = JSON.parse(updatedEmployees)
    employees.sort()
}



        
// IF DOES, RETURN STORAGE OBJECT INTO ARRAY INSTEAD OF POPULATED ARRAY


// GET DOM ELEMENTS


// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS

employees.forEach(emp => {
    let row = document.createElement('tr')
    Object.values(emp).forEach(text => {
        let cell = document.createElement('td')
        let textNode = document.createTextNode(text)
        cell.appendChild(textNode)
        row.appendChild(cell)
    })
  
    addDeleteButtonToRow(row)   
    tableBody.appendChild(row)
 
})
employeeCount()


// ADD EMPLOYEE
addForm.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault()
    // GET THE VALUES FROM THE TEXT BOXES
   
    // ADD THE NEW EMPLOYEE TO A NEW ARRAY OBJECT
    let newEmployee = []
   
    let id = document.getElementById('id').value;
    let name = document.getElementById('name').value;
    let extension = document.getElementById('extension').value;
    let email = document.getElementById('email').value;
    let department = document.getElementById('department').value;
    newEmployee = [id, name, extension, email, department]
    
    // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY
   
    employees.push(newEmployee)
    
        
  // BUILD THE GRID       
buildGrid() 


// INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
employeeCount()
addToStorage(employees)
})  
    
   
function buildGrid() {
    
    clearTable()
    employees.sort()
    employees.forEach(addEmployee)

    // RESET THE FORM
    addForm.reset()
   
    
}


function addEmployee(emp) {
    let row = document.createElement('tr')
    Object.values(emp).forEach(text => {
        let cell = document.createElement('td')
        let textNode = document.createTextNode(text)
        cell.appendChild(textNode)
        row.appendChild(cell)
    
    })
    addDeleteButtonToRow(row)
    tableBody.appendChild(row)
    
}
function addDeleteButtonToRow(rowDelete) {
    //let rowDelete = document.createElement('tr')
    let deletecell = document.createElement('td')
    let deleteBtn = document.createElement('button')
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete'
    deleteBtn.appendChild(document.createTextNode('X'))
    deletecell.appendChild(deleteBtn)
    rowDelete.appendChild(deletecell)
}  
  
function clearTable() {
const old_tbody = document.getElementById('tableBody')
const new_tbody = document.createElement('tbody')
old_tbody.parentNode.replaceChild(new_tbody,old_tbody)
new_tbody.id = 'tableBody'
}


// DELETE EMPLOYEE
empTable.addEventListener('click', (e) => {
    // CONFIRM THE DELETE
    
        e.preventDefault() 
        if (confirm(`Are you sure you want to delete ${e.target.parentElement.parentElement.cells[1].innerText}?`)) {    // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)
            // REMOVE EMPLOYEE FROM ARRAY
            employees.splice(e.target.parentElement.parentElement.rowIndex,1)
                   
            //empTable.deleteRow(e.target.parentElement.parentElement.rowIndex)
           buildGrid()
            alert(`${e.target.parentElement.parentElement.cells[1].innerText} has been successfully deleted.`)
            employeeCount()
            addToStorage(employees)
        }
           
        // SET FOCUS BACK TO THE ID TEXT BOX
    document.getElementById('id').focus()

     // STORE THE ARRAY IN STORAGE
     
});


function employeeCount() {
    let numberOfRecords = (empTable.tBodies[0].rows.length) 
    console.log(`The total number or records is: ${numberOfRecords}.`)
    document.querySelector('#empCount').value =  `(${numberOfRecords})`
  
}

function addToStorage(employees) {
    let updatedEmployees = JSON.stringify(employees);
    localStorage.setItem('employees', updatedEmployees)
}
