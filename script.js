let ele=document.getElementById("set");

let arr1=0;
function result(){
	
	arr1++
	let para=document.createElement("p");
	ele.appendChild(para)
	para.innerHTML="I am Ponselvi"
}
let inter1=setInterval(()=>
{if(arr1==5)
{
	clearInterval(inter1);
}
else{
	result()
}
} 
,1000);


// let arr=setInterval(function(){console.log(`ponselvi`)
// },1000);
