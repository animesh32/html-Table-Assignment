// this is json file that contains data of users
let columns=['first name','middlename','last name','email','phone no','role','address','functions',"         "];
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

function createTable(){
    let div=document.createElement("div")
    div.id="div"
    div.className="w3-container"
    document.getElementsByTagName("body")[0].appendChild(div);
    let myTable=document.createElement("table");
    myTable.id="mytable"
    myTable.className="w3-table-all w3-centered"
    document.getElementById("div").appendChild(myTable);
    let tr=document.createElement("tr");
    
    myTable.appendChild(tr);
    for(let i=0;i<columns.length;i++){
        let th=document.createElement("th")
        th.appendChild(document.createTextNode(columns[i]));
        tr.appendChild(th);
    }
    fillTable();
}


function fillTable(){
    let mytable=document.getElementsByTagName("table")[0];
    for(let i=0;i<usersData.length;i++){
        let tr=document.createElement("tr");
        mytable.appendChild(tr);
        for(let j in usersData[i]){
            let td=document.createElement("td")
            tr.appendChild(td)
            td.appendChild(document.createTextNode(usersData[i][j]))

        }
    }
    
}


//event listener that gets triggered on clickcing on load data button on front page
document.getElementById("loadbutton").addEventListener("click",function(e){                            

    //ALL DIV ELEMENT IN BODY ARE REMOVED SO TO DISPLAY NEXT PAGE
    let remove=document.getElementsByTagName("div");
    remove[0].parentNode.removeChild(remove[0])
    remove[0].parentNode.removeChild(remove[0])

    //CREATING NEW TABLE ELEMENT
    createTable();
    


});
