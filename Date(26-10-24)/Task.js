const url = 'https://jokes-always.p.rapidapi.com/common';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '2262535e86msh7fb0d10daa674bcp1eca53jsnb03ed5705bc7',
		'x-rapidapi-host': 'jokes-always.p.rapidapi.com'
	}
};
let div = document.createElement("div");
async function jokefun(url,options){
  try {
    const response = await fetch(url, options);
    const result = await response.json();
      for(let key in result){
        let res = result[key];
        for(let i=0;i<res.length;i++){
          if("?"==res[i]){
            let p1 = document.createElement("p");
            let p2 = document.createElement("p");
            p1.innerText = res.slice(0,i+1);
            p2.innerText = res.slice(i+1,res.length-1);
            div.append(p1,p2);
          }
        }
      }addData();
  } catch (error) {
    console.error(error);
  }
}
jokefun(url,options)

function addData(){
  document.body.append(div);
}