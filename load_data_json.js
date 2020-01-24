// this is json file that contains data of users
let columns=['FIRST NAME','MIDDLE NAME','LAST NAME','EMAIL','PHONE NO','ROLE','ADDRESS',"FUNCTIONS"," "];
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
        firstName: "Harsh",
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


document.getElementById("loadbutton").addEventListener("click",event)


function event(){                            

    //ALL DIV ELEMENT IN BODY ARE REMOVED SO TO DISPLAY NEXT PAGE
    document.body.innerHTML=""
    let div=document.createElement("div")
    div.align="center"
    div.style.marginTop= "10px"
    div.style.marginBottom= "10px"
    div.innerHTML='<button id="refresh" onclick="refreshFun()">Refresh Data</button>';
    body.appendChild(div)
    
    //CREATING NEW TABLE ELEMENT
    createTable();

    //FILL TABLE WITH USERS DATA
    fillTable();

    //Creating ADD BUTTON
    div=document.createElement("div")
    div.align="center"
    div.style.marginTop= "10px"
    div.style.marginBottom= "10px"
    div.innerHTML='<button id="add" onclick="addData()">Add Data</button>';
    body.appendChild(div)
}

function addData(){

}


function createTable(){
    let div=document.createElement("div")
    div.id="div"
    div.className="w3-container"
    document.getElementsByTagName("body")[0].appendChild(div);
    let myTable=document.createElement("table");
    myTable.id="mytable"
    myTable.className="w3-table-all w3-centered"
    document.getElementById("div").appendChild(myTable);
    let tr=myTable.insertRow();
    for(let i=0;i<columns.length;i++){
        let th=document.createElement("th");
        tr.appendChild(th);
        th.appendChild(document.createTextNode(columns[i]));
    }
}


function fillTable(){
    let mytable=document.getElementsByTagName("table")[0];

    for(let i=0;i<usersData.length;i++){
        let tr=mytable.insertRow()
        tr.id="tr"+i;
        for(let j in usersData[i]){
            let td=tr.insertCell()
            td.appendChild(document.createTextNode(usersData[i][j]));
        }
        let td=tr.insertCell()
        let button1=document.createElement("button");
        button1.className="w3-button w3-cyan";
        button1.appendChild(document.createTextNode("Edit"))
        td.appendChild(button1);
        button1.onclick=edit
        // let button2=document.createElement("button");
        // button2.className="w3-button w3-teal";
        // button2.appendChild(document.createTextNode("Delete"))
        // button2.onclick="del()"
        // td.appendChild(button1);
        td.appendChild(button1);
        td= tr.insertCell();
        td.innerHTML='<button class="w3-button w3-teal" onclick="del(this)">Delete</button>'
        
    }
    
}

function edit(){
    let row=this.parentNode.parentNode
    let rowData=[]
    let currcolumn=row.firstChild
    let traverse=7;
    while(traverse--){
        rowData.push(currcolumn.textContent)
        currcolumn=currcolumn.nextSibling
    }
    // console.log(rowData)
    traverse=7
    currcolumn=row.firstChild
    while(traverse--){
        currcolumn.contentEditable=true
        currcolumn=currcolumn.nextSibling
    }
    let parent=this.parentNode.nextSibling
    this.textContent="Save"
    this.onclick=function(){
        // console.log(this)
        traverse=7
        currcolumn=row.firstChild
        while(traverse--){
        currcolumn.contentEditable=false
        currcolumn=currcolumn.nextSibling
        }
        this.textContent="Edit"
        this.onclick=edit
        
        parent.innerHTML='<button class="w3-button w3-teal" onclick="del(this)">Delete</button>'
        return;
    }
    let secondButton=parent.firstChild
    secondButton.textContent="Cancel"
    secondButton.onclick=function(){
        currcolumn=row.firstChild
        for(traverse=0;traverse<7;traverse++){
        currcolumn.textContent=rowData[traverse]
        currcolumn=currcolumn.nextSibling
        }
        this.textContent="Edit"
        this.onclick=edit
        parent.innerHTML='<button class="w3-button w3-teal" onclick="del(this)">Delete</button>'
        return;

    }


}


//event listener that gets triggered on clickcing on load data button on front page

function editRow(obj){
    console.log("we are here")
    let parent=obj.parentNode
    parent.innerHTML='<<button class="w3-button w3-teal" onclick="save(this)">Save</button>'
    parent=parent.parentNode
    
    parent.lastChild.innerHTML='<<button class="w3-button w3-teal" onclick="cancel(this)">Cancel</button>'
    console.log("ok1")
}

function del(obj){
    let parent=obj.parentNode
    parent=parent.parentNode
    // let parent=t.parent()
    // parent=parent.parent()
    // console.log(parent.id)
    console.log(parent)
    parent.parentNode.removeChild(parent)
}


function refreshFun(){
    event()
};