// const URL="http://localhost:3000/fruits";
// let options={
//   "method":"GET"
// }
// fetch(URL,options).then(response => response.json())
// .then(data => console.log(data));

// const URL="http://localhost:3000/fruits";
// let options={
//   "method":"POST",
//   "headers":{
//     "content-Type":"application/json"
//   },
//   "body":{
//     "id" : 1,
//       "fruit" : "apple",
//       "color" : "red"
//   }
// }
// fetch(URL,options).then(response => {
//   if(response.ok){
//     console.log("Data Inserted",response.status,response.statusText);
//   }
//   else{
//     console.log("Error");
//   }
// }).then(data => console.log(data));


// ===class===
// .then(response => {
// if(response.ok){
//     return response.json();
//   //  console.log("Data Inserted",response.status,response.statusText);
// }
// else{
//     console.log("Error");
// }
// }).then(data => console.log(data))