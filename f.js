var firebaseConfig = {
    apiKey: "AIzaSyAsqjreo74U2_G1BaDJgo8mcjcHn_-U-W0",
    authDomain: "myapp-87545.firebaseapp.com",
    projectId: "myapp-87545",
    storageBucket: "myapp-87545.appspot.com",
    messagingSenderId: "781148574413",
    appId: "1:781148574413:web:3f281a82cbd4038992cf84"
  };
firebase.initializeApp(firebaseConfig);
var refer = firebase.database().ref().child("user")
function CreateUser()  {
    console.log("create user");
    let uname=document.getElementById('uname').value;
    let email=document.getElementById('email').value;
     refer.child(uname).set({
         uname:uname,
         email:email
     });
     console.log("User created");
}
function Delete()  {
 console.log("create user");
 let uname=prompt("enter the username to delete");
 alert(uname);
  refer.remove();
  console.log("User created");
}
function Update(){
 console.log("Update User");
 let uname=document.getElementById('uname').value;
 let email=document.getElementById('email').value;
 alert(uname);
 refer.update({username:uname,email:email});
 console.log("Details updated Successfully");
}
function read(){
    console.log("Reading users");
    table=document.createElement("TABLE");
    table.border="1"
    refer.on('child_added',(snap)=>{
        row=table.insertRow(-1)
        cell1=row.insertCell(-1)
        cell1.innerHTML=snap.val().uname
        cell2=row.insertCell(-1)
        cell2.innerHTML=snap.val().email
        userlist=document.getElementById("userList")
        userList.appendChild(table)
})
}