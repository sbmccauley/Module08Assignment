// CREATE AN ARRAY OF EMPLOYEES
let emp
let list



let employees = [
    [12345678,'Hamish McCauley', 4567, 'hmccauley@gmail.com', 'Quality Assurance'],
    [45678945,'Steve McCauley', 7894, 'smccauley@verimatrix.com', 'Marketing'],
    [78945612,'Sheri McCauley', 8965,'sbmccauley@gmail.com','Executive'],
    [12345879,'Max McCauley',7412,'mgmccauley@gmail.com','Sales'],
    [65498712,'Bob McCauley',4568,'bobmccauley@gmail.com','Administrative']
]

// CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS


function checkForStorage(){
    // if (employees.length === 0) {
    //     updatedEmployees = localStorage.getItem('employees') || ''
    //     if (updatedEmployees.length > 0) {
    //         const list = JSON.parse(updatedEmployees)
    //         console.log(list)
    //         console.log(updateEmployees)
    //         list = employees
    //     }
    // }

   
    // if (employees.length > 0) {
    //     employees.sort()
    //     list = employees.join('\n')

    //     $('empTable').value = list
    // }
}
checkForStorage()

        
// IF DOES, RETURN STORAGE OBJECT INTO ARRAY INSTEAD OF POPULATED ARRAY


// GET DOM ELEMENTS
const $ = (id) => {
    return document.getElementById(id)
}

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
    newEmployee['id'] = document.getElementById('id').value;
    newEmployee['name'] = document.getElementById('name').value;
    newEmployee['extension'] = document.getElementById('extension').value;
    newEmployee['email'] = document.getElementById('email').value;
    newEmployee['department'] = document.getElementById('department').value;
    
    
    // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY
   
    employees.push(newEmployee)
        
  // BUILD THE GRID       
buildGrid() 
console.log(employees)
console.log(newEmployee)

// INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
employeeCount()
addToStorage(employees)
})  
    
   
function buildGrid() {
 
    clearTable()
    employees.forEach(addEmployee) ;
    
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
            employees.splice(e.target.parentElement.parentElement.rowIndex)          
            empTable.deleteRow(e.target.parentElement.parentElement.rowIndex)
           
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
    const updatedEmployees = JSON.stringify(employees);
    localStorage.setItem('employees', updatedEmployees)
}
