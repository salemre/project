

function Show_content(){
	
	 var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  clearData();
  y = document.getElementById("header1");
  
  if (y.style.display === "none") {
    y.style.display = "block";
  } else {
    y.style.display = "none";
  }
	
}

function clearData(){
	
	document.getElementById("water1").value=""
    document.getElementById("time1a").value=""
	document.getElementById("time1b").value=""
	document.getElementById("time1c").value=""
	
	document.getElementById("water2").value=""
    document.getElementById("time2a").value=""
	document.getElementById("time2b").value=""
	document.getElementById("time2c").value=""
	
	
	document.getElementById("water3").value=""
    document.getElementById("time3a").value=""
	document.getElementById("time3b").value=""
	document.getElementById("time3c").value=""
	
	document.getElementById("spr1").checked= false
	document.getElementById("spr2").checked= false
	document.getElementById("spr3").checked= false
	document.getElementById("result").style.display = "none";
}

function submit(){
	
	 document.getElementById("result").style.display = "block";
 
}