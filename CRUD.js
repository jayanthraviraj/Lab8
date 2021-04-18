var  firebaseConfig =  {   apiKey : "AIzaSyBaaPJTDCEnYvgKv6CymKhCn5Xq1zPsp9g",
    authDomain: "project-493cb.firebaseapp.com",
    databaseURL: "https://project-493cb-default-rtdb.firebaseio.com",
    projectId: "project-493cb",
    storageBucket: "project-493cb.appspot.com",
    messagingSenderId: "413906361370",
    appId: "1:413906361370:web:6dbb83bf269cf2911685a3",
    measurementId: "G-1Q47RRMET9"
  };
  
  firebase.initializeApp(firebaseConfig);
 
  var refer = firebase.database().ref().child("user")

   function CreateUser()  {
       console.log("create user");
       let uname=document.getElementById('uname').value;
       let email=document.getElementById('email').value;
        refer.child(uname).set({
            username:uname,
            email:email
        });
        console.log("User created");
   }
   function Delete()  {
    console.log("create user");
    let uname=prompt("enter the username to delete");
    alert(uname);
     refer.child(uname).remove();
     console.log("User created");
}
// function Update(){

    function Update(){
        console.log("Update User");
        let uname=document.getElementById('uname').value;
        let email=document.getElementById('email').value;
        alert(uname);
        refer.child(uname).update({username:uname,email:email});
        console.log("Details updated Successfully");
       }
function read(){
    console.log("Reading users");
    table=document.createElement("TABLE");
    btn=document.createElement("button");
    table.border="1"
    row=table.insertRow(-1)
    h1=row.insertCell(-1)
        h2=row.insertCell(-1)
        h1.innerHTML="Username"
        h2.innerHTML="EMail"
    refer.on('child_added',(snap)=>{
        
        row1=table.insertRow(-1)
        
        cell1=row1.insertCell(-1)
        cell1.innerHTML=snap.val().username
        cell2=row1.insertCell(-1)
        cell2.innerHTML=snap.val().email
        
        btn.innerHTML='HEllo';
        userlist=document.getElementById("userList")
        userList.appendChild(table)
})
   
}