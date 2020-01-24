// stores the headers of table
let tableHeaders=['FIRST NAME','MIDDLE NAME','LAST NAME','EMAIL','PhONE NO','ROLE','ADDRESS',"FUNCTIONS"," "];

// this is json file that contains data of users
let usersData=[     
    {
        firstName: "Aniemsh",
        middleName: "",
        lastName: "Garg",
        email: "animeshgarg67@gmail.com",
        phoneNo: "9914149508",
        role: "intern",
        address: "Mohali" 
    },
    {
        firstName: "harsh",
        middleName: "deep",
        lastName: "Dhiman",
        email: "harsh.com",
        phoneNo: "8378298282",
        role: "trainee",
        address: "Mohali" 

    },
    {
        firstName: "Aditi",
        middleName: "",
        lastName: "Singh",
        email: "aditi@gmail.com",
        phoneNo: "7827282729",
        role: "trainee",
        address: "Mohali" 

    }
];

//EVENT LISTENER THAT GETS TRIGGERED ON LOAD DATA BUTTON
document.getElementById("loadbutton").addEventListener("click",loadDataEvent)

//EVENT THAT OCCURS ON CLICKING LOAD DATA BUTTON
function loadDataEvent(){  
    //ALL  ELEMENTS IN BODY ARE REMOVED SO TO DISPLAY NEXT PAGE
    body.innerHTML=""

    //CREATING REFRESH BUTTON ON TOP
    let divElement=document.createElement("div")
    divElement.align="center"
    divElement.style.marginTop= "10px"
    divElement.style.marginBottom= "10px"
    divElement.innerHTML='<button id="refresh" onclick="refreshFun()">Refresh Data</button>';
    body.appendChild(divElement)
    
    //CREATING NEW TABLE ELEMENT
    createTable();

    //FILL TABLE WITH USERS DATA
    fillTable();

    //Creating ADD BUTTONid="add"id="add"="add"id="add"d="add"
    divElement=document.createElement("div")
    divElement.align="center"
    divElement.style.marginTop= "10px"
    divElement.style.marginBottom= "10px"
    divElement.innerHTML='<button id="add" onclick="addData()">Add Data</button>';
    body.appendChild(divElement)
}

//CREATES TABLE ELEMENT WITH HEADERS FROM tableHeaders ARRAY
function createTable(){
    let divElement=document.createElement("div")
    divElement.id="table-div"
    divElement.className="w3-container"
    document.getElementsByTagName("body")[0].appendChild(divElement);
    let myTable=document.createElement("table");
    myTable.id="mytable"
    myTable.className="w3-table-all w3-centered"
    document.getElementById("table-div").appendChild(myTable);
    let tableRow=myTable.insertRow();
    for(let i=0;i<tableHeaders.length;i++){
        let tableCell=document.createElement("th");
        tableRow.appendChild(tableCell);
        tableCell.appendChild(document.createTextNode(tableHeaders[i]));
    }
}


function fillTable(){
    let mytable=document.getElementsByTagName("table")[0];

    //INSERTING USER DATA IN TABLE
    for(let i=0;i<usersData.length;i++){
        let tableRow=mytable.insertRow()
        tableRow.id="tr"+i;
        for(let j in usersData[i]){
            let tableCell=tableRow.insertCell()
            tableCell.appendChild(document.createTextNode(usersData[i][j]));
        }
        // INSERTING EDIT AND DELETE BUTTTONS
        let tableCell=tableRow.insertCell()
        tableCell.innerHTML='<button class="w3-button w3-teal">Edit</button>'
        tableCell.firstChild.onclick=edit
        tableCell= tableRow.insertCell();
        tableCell.innerHTML='<button class="w3-button w3-teal" onclick="del(this)">Delete</button>'
        
    }
    
}
// TO EDIT A GIVEN ROW
function edit(){
    let currentTableRow=this.parentNode.parentNode
   
    let rowData=[] //TO STORE CURRENT ROW DATA IN CASE OF CANCEL
    let currentColumn=currentTableRow.firstChild
    let noOfCells=7;
    while(noOfCells--){
        rowData.push(currentColumn.textContent)
        currentColumn=currentColumn.nextSibling
    }

    noOfCells=7
    currentColumn=currentTableRow.firstChild
    while(noOfCells--){
        currentColumn.contentEditable=true
        currentColumn=currentColumn.nextSibling
    }

    //CHANGING EDIT AND DELETE BUTTONS TO SAVE AND CANCEL
    let delButtonCell=this.parentNode.nextSibling
    this.textContent="Save"
    this.onclick=function(){//ACTION ON CLICKING SAVE BUTTON
        noOfCells=7
        currentColumn=currentTableRow.firstChild
        while(noOfCells--){
        currentColumn.contentEditable=false
        currentColumn=currentColumn.nextSibling
        }
        //CANGING BUTTONS BACK TO EDIT AND DELETE
        this.textContent="Edit"
        this.onclick=edit
        delButtonCell.innerHTML='<button class="w3-button w3-teal" onclick="del(this)">Delete</button>'
        
    }
    let editButtonObj=this;
    delButtonCell.firstChild.textContent="Cancel"
    delButtonCell.firstChild.onclick=function(){
        noOfCells=7
        currentColumn=currentTableRow.firstChild
        while(noOfCells--){
        currentColumn.contentEditable=false
        currentColumn=currentColumn.nextSibling
        }
        editButtonObj.textContent="Edit"
        editButtonObj.onclick=edit
        currentColumn=currentTableRow.firstChild
        for(let i=0;i<7;i++){
            currentColumn.textContent=rowData[i];
            currentColumn=currentColumn.nextSibling

        }
        this.parentNode.innerHTML='<button class="w3-button w3-teal" onclick="del(this)">Delete</button>'
    }
    
   
}

//TO DELETE A GIVEN ROW
function del(obj){
    let currentTableRow=obj.parentNode.parentNode
    currentTableRow.parentNode.removeChild(currentTableRow)
}

//FUNCTION THAT REFRESHS DATA
function refreshFun(){
    loadDataEvent()
};

//FUNCTION TO ADD A ROW 
function addData(){
    // myTable=document.getElementById("mytable")
    // let newRow=myTable.insertRow()
    // for(let i=0;i<7;i++){
    //     let tableCell=document.createElement("th");
        
    //     newRow.appendChild(tableCell);
        
    // }
    // let tableCell=newRow.insertCell()
    // tableCell.innerHTML='<button class="w3-button w3-teal" onclick="edit()">Edit</button>'
    // tableCell= newRow.insertCell();
    // tableCell.innerhTML='<button class="w3-button w3-teal" onclick="del(this)">Delete</button>'
    // edit()
}
