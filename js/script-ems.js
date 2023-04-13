// CREATE AN ARRAY OF EMPLOYEES
let emp
let storage
let list


let employees = [
    {'id': 12345678,'fullName': 'Hamish McCauley', 'extension':4567, 'email': 'hmccauley@gmail.com', 'department':'Quality Assurance'},
    {'id':45678945, 'fullName':'Steve McCauley','extension': 7894, 'email':'smccauley@verimatrix.com','department': 'Marketing'},
    {'id':78945612, 'fullName': 'Sheri McCauley','extension': 8965, 'email':'sbmccauley@gmail.com', 'department':'Executive'},
    {'id':12345879,'fullName': 'Max McCauley','extension': 7412,'email': 'mgmccauley@gmail.com','department': 'Sales'},
    {'id':65498712, 'fullName':'Bob McCauley', 'extension':4568, 'email':'bobmccauley@gmail.com', 'department':'Administrative'}
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
    newEmployee['delete'] = 'X'
    
    // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY
   
        employees.push(newEmployee)
        
  buildGrid() 
    console.log(employees)
    console.log(newEmployee)
})  
    
    // BUILD THE GRID
function buildGrid() {
    

    clearTable()

    
     employees.forEach(addEmployee) ;
        
    
    addDeleteButtonToRow()
     // RESET THE FORM
    addForm.reset()
   
    // SET FOCUS BACK TO THE ID TEXT BOX
    document.getElementById('id').focus()
    
    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
    // employeeCount() 

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
        
        tableBody.appendChild(row)
        
    }
    function addDeleteButtonToRow(row) {
        
        let deletecell = document.createElement('td')
        let deleteBtn = document.createElement('button')
        deleteBtn.className = 'btn btn-danger btn-sm float-right delete'
        deleteBtn.appendChild(document.createTextNode('X'))
        deletecell.appendChild(deleteBtn)
        row.appendChild(deletecell)
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

        // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)

        // REMOVE EMPLOYEE FROM ARRAY

        // BUILD THE GRID

});

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