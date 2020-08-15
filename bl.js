up=document.querySelector("button");
upp=document.querySelector(".upp");


up.addEventListener("click",function(){

	up.classList.toggle("collapsed");
	upp.classList.toggle("show");
	if(up[' aria-expanded']==true)
	up[' aria-expanded']=false;
else
	up[' aria-expanded']=true;
});


