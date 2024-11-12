//=== GET ===
const URL="http://localhost:3000/fruits";
let options={
  "method":"GET"
}
fetch(URL,options).then(response => response.json())
.then(data => console.log(data));

//=== POST===
let enterData={
    "id" : prompt("Enter id: "),
    "name" : prompt("Enter name: "),
    "color" : prompt("Enter color: ")
  
  };
  let option = {
    "method" : "POST",
    "header" : {
      "Content-Type" : "application/json"
    },
    "body" : JSON.stringify(enterData)
  }
  // const URL = 'http://localhost:3000/fruits'
  
  fetch(URL,option)
  .then(res => {
    if(res.ok){
      return res.json();
    }
    else{
      console.log("Error");
    }
  }).then(data => console.log("success",data))