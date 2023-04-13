// CREATE AN ARRAY OF EMPLOYEES
let emp
let storage
let list



let employees = [
    [12345678,'Hamish McCauley', 4567, 'hmccauley@gmail.com', 'Quality Assurance'],
    [45678945,'Steve McCauley', 7894, 'smccauley@verimatrix.com', 'Marketing'],
    [78945612,'Sheri McCauley', 8965,'sbmccauley@gmail.com','Executive'],
    [12345879,'Max McCauley',7412,'mgmccauley@gmail.com','Sales'],
    [65498712,'Bob McCauley',4568,'bobmccauley@gmail.com','Administrative']
]

// CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS
const displayEmployeeList = () => {
    if (employees.length === 0) {
        storage = localStorage.getItem('employees') || ''
        if (storage.length > 0) {
            employees = storage.split('|')
        }
    }
    if (employees.length > 0) {
        employees.sort()
        list = employees.join('\n')

        $('empTable').value = list
    }
}


        
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
        
        
  buildGrid() 
    console.log(employees)
    console.log(newEmployee)
    employeeCount()
})  
    
    // BUILD THE GRID
function buildGrid() {
    

    clearTable()

    
     employees.forEach(addEmployee) ;
        
    
    
     // RESET THE FORM
    addForm.reset()
   
    // SET FOCUS BACK TO THE ID TEXT BOX
    document.getElementById('id').focus()
    
    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
    
    // SET FOCUS BACK TO THE ID TEXT BOX}

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
        if (confirm(`Are you sure you want to delete ${e.target.parentElement.parentElement.cells[1].innerText}?`)) {
            empTable.deleteRow(e.target.parentElement.parentElement.rowIndex)
            alert(`${e.target.parentElement.parentElement.cells[1].innerText} has been successfully deleted.`)
            employeeCount()
        }
    
           
      employeeCount()
    
    
//         // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)

//         // REMOVE EMPLOYEE FROM ARRAY

//         // BUILD THE GRID

});
function employeeCount() {
    let numberOfRecords = (empTable.tBodies[0].rows.length) 
    console.log(`The total number or records is: ${numberOfRecords}.`)
    document.querySelector('#empCount').value =  `(${numberOfRecords})`
  
}
// BUILD THE EMPLOYEES GRID
// function buildGrid() {
    // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION
    
    // REBUILD THE TBODY FROM SCRATCH
   
    // LOOP THROUGH THE ARRAY OF EMPLOYEES
    // REBUILDING THE ROW STRUCTURE

    // BIND THE TBODY TO THE EMPLOYEE TABLE

    // UPDATE EMPLOYEE COUNT

    // STORE THE ARRAY IN STORAGE

// };