
// VARIABLE DECLARATION STARTS HERE ...........
var a = document.getElementById("can1");
var context1 = a.getContext('2d');
var vn = 0;
var X_increament = 250;
var drawSpotX_increament = 172;
var drawSpotY_increament = 457;
var x=195;
var y=447;
var x12=165;
var y12=457;
var x2=195;
var y2=447;
var sel = new Array();
var Y_increament = 116;
var Y_increament1 = 380;
var Y_increament2 = 380;

var xxxForAfter = 0;
var yyyForAfter = 0;

var xxx1ForAfter = 0;
var yyy1ForAfter = 0;

var InputCounter1 = -1;
var InputCounter2 = -1;

var inputArrayXForFirst = new Array();
var inputArrayYForFirst = new Array();
var inputArrayXForSecond = new Array();
var inputArrayYForSecond = new Array();

var arr1=new Array();

var arr2=new Array();


var inputselected =0;

var beamSprayed = 0;

// VARIABLE DECLARATION ENDS HERE ..........

$(document).ready(function() {
				$("#select1").chosen();
				$("#select2").chosen();
				$("#start").attr("disabled",true);
				$("#plot").attr("disabled",true);
				$("#cube").append("<div style='  left: 561px;position: absolute; top: 74px;width: 45px;'><img src='lens.png'></div>");
				$("#laser").append("<div style='position:absolute; left: 551px; top:139px; width:45px; heigth:45px;'><img src='led.jpg'></div>");
				drawRect();
				//$("#plot").hide();
				$("#op").hide();
				$("#op2").hide();
				$('button[title]').qtip({
		content: {
			attr: 'title' // Use the ALT attribute of the area map for the content
		},
		style: {
			classes: 'ui-tooltip-tipsy ui-tooltip-shadow'
		}
	});
	
				
				
		
});
// ANIMATION BEGINS BY THIS METHOD FROM LASER BEAM ....
function startAnimation(){
drawLineInXdirection(395,116,380,116);
}
drawLineInXdirection =function ( startx, starty, endx, endy) {
	X_increament-= 6;
	
	if(X_increament > 200){
		context1.beginPath();
		context1.strokeStyle = 'green';
		context1.lineWidth   = 4;
		context1.moveTo(startx, starty);
		context1.lineTo(endx, endy);
		context1.closePath();
		context1.stroke();
		t = setTimeout("drawLineInXdirection(390,116, X_increament-2, 116)", 200);
	}else{
		clearTimeout(t);
		X_increament+=8;
		drawLineInYdirection(X_increament,116,X_increament,116);
	}		
}
drawLineInYdirection = function (startx, starty, endx, endy) {
	Y_increament += 4;
if(Y_increament <= 173){
  context1.beginPath();
  context1.strokeStyle = 'green';
  context1.lineWidth   = 4;
  context1.moveTo(startx, starty);
  context1.lineTo(endx, endy);
  context1.closePath();
  context1.stroke();
  t = setTimeout("drawLineInYdirection(X_increament,116,X_increament,Y_increament)", 200);
  }else{
		clearTimeout(t);
		//drawSpotsOnX(165,457);
		xxxForAfter = startx;
		yyyForAfter = 353;
		drawLineInYdirection1(startx,353,startx,364);
		
	}		
}
drawLineInYdirection1 = function (startx, starty, endx, endy) {
	Y_increament1 += 4;
if(Y_increament1 <= 406){
  context1.beginPath();
  context1.strokeStyle = 'green';
  context1.lineWidth   = 4;
  context1.moveTo(startx, starty);
  context1.lineTo(endx, endy);
  context1.closePath();
  context1.stroke();
  t = setTimeout("drawLineInYdirection1(xxxForAfter,yyyForAfter,xxxForAfter,Y_increament1)", 200);
  }else{
		clearTimeout(t);
		xxx1ForAfter = startx;
		yyy1ForAfter = 400;
		//drawSpotsOnX(165,457);
		drawLineInYdirection2(startx,400,startx,404);
	}		
}
drawLineInYdirection2 = function (startx, starty, endx, endy) {
	Y_increament1 += 4;	
if(Y_increament1 <= 450){
  context1.beginPath();
  context1.strokeStyle = 'green';
  context1.lineWidth   = 2;
  context1.moveTo(startx, starty);
  context1.lineTo(endx, endy);
  context1.closePath();
  context1.stroke();
  t = setTimeout("drawLineInYdirection2(xxx1ForAfter,yyy1ForAfter,xxx1ForAfter,Y_increament1)", 200);
  }else{
		clearTimeout(t);
		drawSpotsOnX(197,447);
		//drawSpotsOnX(165,457);	
	}		
}
function drawSpotsOnX(x1,y1){
x+=4;
y-=2;
if(x <= 220){
	context1.beginPath();
	context1.fillStyle = 'yellow';
	context1.strokeStyle='yellow';
	context1.lineWidth=1;
	context1.fillRect(x1,y1,1,1);   
    context1.clearRect(45,45,60,60);   
    context1.strokeRect(x1,y1,1,1);  
	y-=0.5;
	t = setTimeout("drawSpotsOnX(x,y)", 500);
  }else{
	clearTimeout(t);
	drawSpotsOnX1(197,447);
	//drawSpotsOnY(165,457);
	}		
}
function drawSpotsOnX1(x3,y3){
x2+=4;
y2-=2;

if(x2 <= 220){
	context1.beginPath();
	context1.fillStyle = 'blue';
	context1.strokeStyle='blue';
	context1.lineWidth=1;
	context1.fillRect(x3,y3,1,1);   
    context1.clearRect(45,45,60,60);   
    context1.strokeRect(x3,y3,1,1);  
	y2-=0.5;
	t = setTimeout("drawSpotsOnX1(x2,y2)", 500);
  }else{
	clearTimeout(t);
	//drawSpotsOnY(165,457);
	}		
}
//DRAWING MIRROR WHICHIS IN TRIANGLE SHAPE ....
function drawTriangle1(){
	var a = document.getElementById('can1');
	var context1 = a.getContext('2d');
	context1.beginPath();
	context1.fillStyle = 'white';
	context1.strokeStyle='black';
	context1.lineWidth=2;
	context1.moveTo(100,100);
	context1.lineTo(200,100);
	context1.lineTo(150,200);
	context1.lineTo(100,100);
	context1.stroke();
	context1.fill();
}
function drawSpotsOnY(x1,y1){
	x12+=7;
	if(x12 <= 220){
	context1.beginPath();
	context1.strokeStyle = 'green';
	context1.fillStyle = 'black';
	context1.arc(x1, 457, 1, 0, Math.PI*2, true); 
	context1.fill();
	context1.closePath();
	t = setTimeout("drawSpotsOnY(x12,y)", 200);
  }else{
	clearTimeout(t);
	}		
}
function enableSelectBox1(){
	vn=0;
	$("#op1").hide();
	$("#op").show();
	$("#plot").show();
	refreshScreen();
	$("#select1").attr("disabled",false);
	$("#select2").attr("disabled",true);
	$("#start").attr("disabled",false);
	inputselected = 1;	
//window.location.reload();	
}
var refresh = function() {
window.location.reload();
}
function enableSelectBox2(){
	vn=0;
	$("#plot").attr("disabled","true");
	//alert("vn :"+vn);
	$("#op1").hide();
	$("#op").hide();
	$("#op2").show();
	$("#plot").show();
	refreshScreen();

	$("#select1").attr("disabled",true);
	$("#select2").attr("disabled",false);
	$("#start").attr("disabled",false);
	inputselected = 2;	
}
function drawRect(){
// left stand .....................................................
	context1.beginPath();
	context1.fillStyle = 'white';
	context1.strokeStyle='black';
	context1.lineWidth=2;
	context1.fillRect(100,170,10,50);   
    context1.clearRect(45,45,60,60);   
    context1.strokeRect(100,170,10,50);  
	
	context1.beginPath();
	context1.fillStyle = 'grey';
	context1.strokeStyle='black';
	context1.lineWidth=2;
	context1.fillRect(80,220,50,80);   
    context1.clearRect(45,45,60,60);   
    context1.strokeRect(80,220,50,80); 

	context1.beginPath();
	context1.fillStyle = 'white';
	context1.strokeStyle='black';
	context1.lineWidth=2;
	context1.fillRect(100,300,10,200);   
    context1.clearRect(45,45,60,60);   
    context1.strokeRect(100,300,10,200); 
	
// Base rect .....................................................

	context1.beginPath();
	context1.fillStyle = 'white';
	context1.strokeStyle='black';
	context1.lineWidth=2;
	context1.fillRect(80,500,250,50);   
    context1.clearRect(45,45,60,60);   
    context1.strokeRect(80,500,250,50);
	
// right stand .....................................................
	
	context1.beginPath();
	context1.fillStyle = 'white';
	context1.strokeStyle='black';
	context1.lineWidth=2;
	context1.fillRect(300,170,10,50);   
    context1.clearRect(45,45,60,60);   
    context1.strokeRect(300,170,10,50);  
	
	context1.beginPath();
	context1.fillStyle = 'grey';
	context1.strokeStyle='black';
	context1.lineWidth=2;
	context1.fillRect(280,220,50,80);   
    context1.clearRect(45,45,60,60);   
    context1.strokeRect(280,220,50,80); 

	context1.beginPath();
	context1.fillStyle = 'white';
	context1.strokeStyle='black';
	context1.lineWidth=2;
	context1.fillRect(300,300,10,200);   
    context1.clearRect(45,45,60,60);   
    context1.strokeRect(300,300,10,200); 
	
// upper base rect ...........................................

	context1.beginPath();
	context1.fillStyle = 'grey';
	context1.strokeStyle='black';
	context1.lineWidth=2;
	context1.fillRect(120,450,170,50);   
    context1.clearRect(45,45,60,60);   
    context1.strokeRect(120,450,170,50);
	
// actual plates ..............................................	

	context1.beginPath();
	context1.fillStyle   = 'silver';
	context1.strokeStyle = 'black';
	context1.lineWidth   = 2;
	context1.moveTo(130, 450); // give the (x,y) coordinates
	context1.lineTo(205, 450);
	context1.lineTo(225, 435);
	context1.lineTo(150, 435);
	context1.lineTo(130, 450);
	context1.stroke();
	context1.fill();
	
	context1.beginPath();
	context1.fillStyle   = 'silver';
	context1.strokeStyle = 'black';
	context1.lineWidth   = 2;
	context1.moveTo(192, 448); // give the (x,y) coordinates
	context1.lineTo(267, 450);
	context1.lineTo(287, 433);
	context1.lineTo(212, 433);
	context1.lineTo(192, 448);
	context1.stroke();
	context1.fill();

// middle rect ..............................................	
	
	context1.beginPath();
	context1.fillStyle = 'grey';
	context1.strokeStyle='black';
	context1.lineWidth=2;
	context1.fillRect(180,200,50,120);   
    context1.clearRect(45,45,60,60);   
    context1.strokeRect(180,200,50,120);
	
	context1.beginPath();
	context1.fillStyle = 'white';
	context1.strokeStyle='black';
	context1.lineWidth=2;
	context1.fillRect(170,215,10,90);   
    context1.clearRect(45,45,60,60);   
    context1.strokeRect(170,215,10,90);
	
	context1.beginPath();
	context1.fillStyle = 'white';
	context1.strokeStyle='black';
	context1.lineWidth=2;
	context1.fillRect(230,215,10,90);   
    context1.clearRect(45,45,60,60);   
    context1.strokeRect(230,215,10,90);
	
	context1.beginPath();
	context1.fillStyle = 'white';
	context1.strokeStyle='black';
	context1.lineWidth=2;
	context1.fillRect(230,215,10,90);   
    context1.clearRect(45,45,60,60);   
    context1.strokeRect(230,215,10,90);
	
	context1.beginPath();
	context1.fillStyle = 'white';
	context1.strokeStyle='black';
	context1.lineWidth=2;
	context1.fillRect(130,250,40,30);   
    context1.clearRect(45,45,60,60);   
    context1.strokeRect(130,250,40,30);
	
	context1.beginPath();
	context1.fillStyle = 'white';
	context1.strokeStyle='black';
	context1.lineWidth=2;
	context1.fillRect(240,250,40,30);   
    context1.clearRect(45,45,60,60);   
    context1.strokeRect(240,250,40,30);
	
	context1.beginPath();
	context1.fillStyle = 'white';
	context1.strokeStyle='black';
	context1.lineWidth=2;
	context1.fillRect(200,170,10,30);   
    context1.clearRect(45,45,60,60);   
    context1.strokeRect(200,170,10,30);
	
	context1.beginPath();
	context1.fillStyle = 'white';
	context1.strokeStyle='black';
	context1.lineWidth=2;
	context1.fillRect(200,320,10,30);   
    context1.clearRect(45,45,60,60);   
    context1.strokeRect(200,320,10,30);
	
// triangle mirror ...........................................

	context1.beginPath();
	context1.fillStyle   = 'white';
	context1.strokeStyle = 'black';
	context1.lineWidth   = 2;
	context1.moveTo(185, 90); // give the (x,y) coordinates
	context1.lineTo(225, 90);
	context1.lineTo(185, 135);
	context1.lineTo(185, 90);
	context1.stroke();
	context1.fill();
	
// cube image 
}
function insertInputs2(){
	InputCounter2++;
	if(document.getElementById("select2").options[document.getElementById("select2").selectedIndex].value != "Select BeamPower"){
	
if(InputCounter2 >= -1){
	inputArrayXForSecond[InputCounter2] = document.getElementById("select2").options[document.getElementById("select2").selectedIndex].value;
	if(inputArrayXForSecond[InputCounter2]== 0.68 ){
		inputArrayYForSecond[InputCounter2] = 375.6;
		arr2.push([0.68,375.6]);
		if(beamSprayed==0){
			beamSprayed = 1;
			startAnimation();
		}
		$(".output > ul").fadeTo('slow', 0.5);
		$(".output").prepend("<ul><li class = 'odd' ><font>Beam Spot Size:" +0.68 + " mm</font></li><li class='even'><font face ='Times'>WeldStrength:" +375.6+ " N</font></li></ul>");
		
	}else if(inputArrayXForSecond[InputCounter2]== 0.73 ){
		if(beamSprayed==0){
			beamSprayed = 1;
			startAnimation();
		}
		inputArrayYForSecond[InputCounter2] = 535.3;
		$(".output > ul").fadeTo('slow', 0.5);
		$(".output").prepend("<ul><li class = 'odd' ><font>Beam Spot Size:     " +0.73 + " mm</font></li><li class='even'><font size='2' face >WeldStrength:" +535.3+ " N</font></li></ul>");
		
		arr2.push([0.73,535.3]);
	}else if(inputArrayXForSecond[InputCounter2]== 0.77){
		if(beamSprayed==0){
			beamSprayed = 1;
			startAnimation();
		}
		inputArrayYForSecond[InputCounter2] = 515.1;
		arr2.push([0.77,515.1]);
		$(".output > ul").fadeTo('slow', 0.5);
		$(".output").prepend("<ul><li class = 'odd' ><font>Beam Spot Size:     " +0.77+ " mm</font></li><li class='even'><font face>WeldStrength:" +515.1+ " N</font></li></ul>");
		
	}else if(inputArrayXForSecond[InputCounter2]== 0.83){
		if(beamSprayed==0){
			beamSprayed = 1;
			startAnimation();
		}
		inputArrayYForSecond[InputCounter2] = 489.3;
		arr2.push([0.83,489.3]);
		$(".output > ul").fadeTo('slow', 0.5);
		$(".output").prepend("<ul><li class = 'odd' ><font >Beam Spot Size:     " +0.83+ " mm</font></li><li class='even'><font>WeldStrength:" +489.3+ " N</font></li></ul>");
		
	}else if(inputArrayXForSecond[InputCounter2]== 0.93){
		if(beamSprayed==0){
			beamSprayed = 1;
			startAnimation();
		}
		inputArrayYForSecond[InputCounter2] = 435.2;
		arr2.push([0.93,435.2]);
		$(".output > ul").fadeTo('slow', 0.5);
		$(".output").prepend("<ul><li class = 'odd' ><font >Beam Spot Size:     " +0.93+ " mm</font></li><li class='even'><font>WeldStrength:" +435.2+ " N</font></li></ul>");
		
	}
	$("#plot").attr("disabled",false);
}else{
	inputArrayXForSecond[InputCounter2] = document.getElementById("select2").options[document.getElementById("select2").selectedIndex].value;
	if(inputArrayXForSecond[InputCounter2]== 0.68){
		if(beamSprayed==0){
			beamSprayed = 1;
			startAnimation();
		}
		inputArrayYForSecond[InputCounter2] = 375.6;
		arr2.push([0.68,375.6]);
		$(".output > ul").fadeTo('slow', 0.5);
		$(".output").prepend("<ul><li class = 'odd' ><font>Beam Spot Size:     " +0.68+ " mm</font></li><li class='even'><font >WeldStrength:" +375.6+ " N</font></li></ul>");
		
	}else if(inputArrayXForSecond[InputCounter2]== 0.73){
		if(beamSprayed==0){
			beamSprayed = 1;
			startAnimation();
		}
		inputArrayYForSecond[InputCounter2] = 535.3;
		$(".output > ul").fadeTo('slow', 0.5);
		$(".output").prepend("<ul><li class = 'odd' ><font>Beam Spot Size:     " +0.73+ " mm</font></li><li class='even'><font>WeldStrength:" +535.3+ " N</font></li></ul>");
		arr2.push([0.73,535.3]);
		
	}else if(inputArrayXForSecond[InputCounter2]== 0.77){
		if(beamSprayed==0){
			beamSprayed = 1;
			startAnimation();
		}
		inputArrayYForSecond[InputCounter2] = 515.1;
		arr2.push([0.77,515.1]);
		$(".output > ul").fadeTo('slow', 0.5);
		$(".output").prepend("<ul><li class = 'odd' ><font>Beam Spot Size:     " +0.77+ " mm</font></li><li class='even'><font>WeldStrength:" +515.1+ " N</font></li></ul>");
		
	}else if(inputArrayXForSecond[InputCounter2]== 0.83){
		if(beamSprayed==0){
			beamSprayed = 1;
			startAnimation();
		}
		inputArrayYForSecond[InputCounter2] = 489.3;
		arr2.push([0.83,489.3]);
		$(".output > ul").fadeTo('slow', 0.5);
		$(".output").prepend("<ul><li class = 'odd' ><font>Beam Spot Size:     " +0.83+ " mm</font></li><li class='even'><font >WeldStrength:" +489.3+ " N</font></li></ul>");
		
	}else if(inputArrayXForSecond[InputCounter2]== 0.93){
		if(beamSprayed==0){
			beamSprayed = 1;
			startAnimation();
		}
		inputArrayYForSecond[InputCounter2] = 435.2;
		arr2.push([0.93,435.2]);
		$(".output > ul").fadeTo('slow', 0.5);
		$(".output").prepend("<ul><li class = 'odd' ><font>Beam Spot Size:     " +0.93+ " mm</font></li><li class='even'><font >WeldStrength:" +435.2+ " N</font></li></ul>");
	
	}
	
}
}
}
function count(){

	vn++;
	//alert(vn);
	$("#plot").show();
	$("#plot").attr("disabled","true");
	
	if(vn==3){
		$("#plot").removeAttr("disabled");
		
	}

	
}
function insertInputs1(){
	
	InputCounter1++;
	if(document.getElementById("select1").options[document.getElementById("select1").selectedIndex].value != "Select BeamPower"){
	
if(InputCounter1 >= -1){
	inputArrayXForFirst[InputCounter1] = document.getElementById("select1").options[document.getElementById("select1").selectedIndex].value;
	if(inputArrayXForFirst[InputCounter1]==486){
		if(beamSprayed==0){
			beamSprayed = 1;
			startAnimation();
		}
		inputArrayYForFirst[InputCounter1] = 372.6;
		arr1.push([486,372.6]);
		$(".output > ul").fadeTo('slow', 0.5);
		$(".output").prepend("<ul><li class = 'odd' ><font  face ='Times'>Beam Spot Size:     " +486+ " mm</font></li><li class='even'><font  face ='Times'>WeldStrength:" +372.6+ " N</font></li></ul>");
		
	}else if(inputArrayXForFirst[InputCounter1]==533){
		if(beamSprayed==0){
			beamSprayed = 1;
			startAnimation();
		}
		inputArrayYForFirst[InputCounter1] = 473.6;
		arr1.push([533,473.6]);
		$(".output > ul").fadeTo('slow', 0.5);
		$(".output").prepend("<ul><li class = 'odd' ><fontface ='Times'>Beam Spot Size:     " +533+ " mm</font></li><li class='even'><font face ='Times'>WeldStrength:" +473.6+ " N</font></li></ul>");
		
	}else if(inputArrayXForFirst[InputCounter1]==553){
		if(beamSprayed==0){
			beamSprayed = 1;
			startAnimation();
		}
		inputArrayYForFirst[InputCounter1] = 452.2;
		arr1.push([553,452.2]);
		$(".output > ul").fadeTo('slow', 0.5);
		$(".output").prepend("<ul><li class = 'odd' ><font  face ='Times'>Beam Spot Size:     " +553+ " mm</font></li><li class='even'><font  face ='Times'>WeldStrength:" +452.2+ " N</font></li></ul>");
		
	}else if(inputArrayXForFirst[InputCounter1]==571){
		if(beamSprayed==0){
			beamSprayed = 1;
			startAnimation();
		}
		inputArrayYForFirst[InputCounter1] = 494.2;
		arr1.push([571,494.2]);
		$(".output > ul").fadeTo('slow', 0.5);
		$(".output").prepend("<ul><li class = 'odd' ><font  face ='Times'>Beam Spot Size:     " +571+ " mm</font></li><li class='even'><font  face ='Times'>WeldStrength:" +494.2+ " N</font></li></ul>");
	
	}else if(inputArrayXForFirst[InputCounter1]==607){
		if(beamSprayed==0){
			beamSprayed = 1;
			startAnimation();
		}
		inputArrayYForFirst[InputCounter1] = 512.9;
		arr1.push([607,512.9]);
		$(".output > ul").fadeTo('slow', 0.5);
		$(".output").prepend("<ul><li class = 'odd' ><font face ='Times'>Beam Spot Size:     " +607+ " mm</font></li><li class='even'><font  face ='Times'>WeldStrength:" +512.9+ " N</font></li></ul>");
		
	}else if(inputArrayXForFirst[InputCounter1]==626){
		if(beamSprayed==0){
			beamSprayed = 1;
			startAnimation();
		}
		inputArrayYForFirst[InputCounter1] = 478.0;
		arr1.push([626,478.0]);
		$(".output > ul").fadeTo('slow', 0.5);
		$(".output").prepend("<ul><li class = 'odd' ><font  face ='Times'>Beam Spot Size:     " +626+ " mm</font></li><li class='even'><font  face ='Times'>WeldStrength:" +478.0+ " N</font></li></ul>");
		
	}
	//$("#plot").attr("disabled",false);
	
}else{
	inputArrayXForFirst[InputCounter1] = document.getElementById("select1").options[document.getElementById("select1").selectedIndex].value;
	if(inputArrayXForFirst[InputCounter1]==486){
		if(beamSprayed==0){
			beamSprayed = 1;
			startAnimation();
		}
		inputArrayYForFirst[InputCounter1] = 372.6;
		arr1.push([486,372.6]);
		$(".output > ul").fadeTo('slow', 0.5);
		$(".output").prepend("<ul><li class = 'odd' ><font  face ='Times'>Beam Spot Size:     " +486+ " mm</font></li><li class='even'><font  face ='Times'>WeldStrength:" +372.6+ " N</font></li></ul>");
		
	}else if(inputArrayXForFirst[InputCounter1]==533){
		if(beamSprayed==0){
			beamSprayed = 1;
			startAnimation();
		}
		inputArrayYForFirst[InputCounter1] = 473.6;
		arr1.push([533,473.6]);
		$(".output > ul").fadeTo('slow', 0.5);
		$(".output").prepend("<ul><li class = 'odd' ><font  face ='Times'>Beam Spot Size:     " +533+ " mm</font></li><li class='even'><font  face ='Times'>WeldStrength:" +473.6+ " N</font></li></ul>");
		
	}else if(inputArrayXForFirst[InputCounter1]==553){
		if(beamSprayed==0){
			beamSprayed = 1;
			startAnimation();
		}
		inputArrayYForFirst[InputCounter1] = 452.2;
		arr1.push([553,452.2]);
		$(".output > ul").fadeTo('slow', 0.5);
		$(".output").prepend("<ul><li class = 'odd' ><font  face ='Times'>Beam Spot Size:     " +553+ " mm</font></li><li class='even'><font face ='Times'>WeldStrength:" +452.2+ " N</font></li></ul>");
		
	}else if(inputArrayXForFirst[InputCounter1]==571){
		if(beamSprayed==0){
			beamSprayed = 1;
			startAnimation();
		}
		inputArrayYForFirst[InputCounter1] = 494.2;
		arr1.push([571,494.2]);
		$(".output > ul").fadeTo('slow', 0.5);
		$(".output").prepend("<ul><li class = 'odd' ><font face ='Times'>Beam Spot Size:     " +571+ " mm</font></li><li class='even'><font face ='Times'>WeldStrength:" +494.2+ " N</font></li></ul>");
		
	}else if(inputArrayXForFirst[InputCounter1]==607){
	if(beamSprayed==0){
			beamSprayed = 1;
			startAnimation();
		}
		inputArrayYForFirst[InputCounter1] = 512.9;
		arr1.push([607,512.9]);
		$(".output > ul").fadeTo('slow', 0.5);
		$(".output").prepend("<ul><li class = 'odd' ><font  face ='Times'>Beam Spot Size:     " +607+ " mm</font></li><li class='even'><font face ='Times'>WeldStrength:" +512.9+ " N</font></li></ul>");
		
	}else if(inputArrayXForFirst[InputCounter1]==626){
	if(beamSprayed==0){
			beamSprayed = 1;
			startAnimation();
		}
		inputArrayYForFirst[InputCounter1] = 478.0;
		arr1.push([626,478.0]);
		$(".output > ul").fadeTo('slow', 0.5);
		$(".output").prepend("<ul><li class = 'odd' ><font face ='Times'>Beam Spot Size:     " +626+ " mm</font></li><li class='even'><font  face ='Times'>WeldStrength:" +478.0+ " N</font></li></ul>");
		
	}
}
}
}
function refreshScreen(){
	vn=0;
    arr1=new Array();
	arr2=new Array();
	//$("#plot").attr("disabled",true);
	$("#start").attr("disabled",true);
	$('.output').html("");
	X_increament = 250;
	drawSpotX_increament = 172;
	drawSpotY_increament = 457;
	x=195;
	y=447;
	x12=165;
	y12=457;
	x2=195;
	y2=447;
	Y_increament = 116;
	Y_increament1 = 380;
	Y_increament2 = 380;
	xxxForAfter = 0;
	yyyForAfter = 0;
	xxx1ForAfter = 0;
	yyy1ForAfter = 0;
	InputCounter1 = -1;
	InputCounter2 = -1;
	inputArrayXForFirst = new Array();
	inputArrayYForFirst = new Array();
	inputArrayXForSecond = new Array();
	inputArrayYForSecond = new Array();
	arr1=new Array();
	arr2=new Array();
	inputselected =0;
	$("#select1").attr("disabled",true);
	$("#select2").attr("disabled",true);
	$('#digram').html("");
}
function drawcharts(){

if(inputselected == 1){
	if(vn < 3){
				alert("You Must select atleast 3 readings to Plot the Graph");
			}else{
	
var d = graphCalculation(inputArrayXForFirst,inputArrayYForFirst);
var chart1; // globally available

      chart1 = new Highcharts.Chart({
         chart: {
            renderTo: 'graph',
         },
          plotOptions: {
			        series: {
			            marker: {
			                enabled: false
			            }
			        }
			    },
         title: {
            text: 'Laser spot welding analysis '
         },
         xAxis: {
			title: {
               text: 'Beam Spot Size'
            },
         },
         yAxis: {
            title: {
               text: 'Weld Strength [N]'
            }
         },
         tooltip: {
			 	 formatter: function(){
			 	 	 return '<b>'+ this.series.name +': X = '+
               this.x +' , Y =  '+ this.y.toFixed(4) ;
			 	 }
			 
			 },
         series:[	
					{
						type: 'line',
						name: 'Experimental Curve ',
						data: arr1
					}
					,
					{
						type: 'line',
						data: d,
						name: 'Theoretical Curve'
					}
				
					
				]
      });
     
	}  

 }
 
else{
if(vn < 3){
	alert("You Must select atleast 3 readings to Plot the Graph");
}else{
	var chart1; // globally available
	var d = graphCalculation2(inputArrayXForSecond,inputArrayYForSecond);
	chart1 = new Highcharts.Chart({
         chart: {
            renderTo: 'graph',
         },
         title: {
            text: 'Variation of weld strength at constant beam power 607 Watts'
         },
          plotOptions: {
			        series: {
			            marker: {
			                enabled: false
			            }
			        }
			    },
         xAxis: {
			title: {
               text: 'Beam Spot Size'
            },
			
         },
         yAxis: {
            title: {
               text: 'Weld Strength  [N]'
            },
			
         },
	tooltip: {
			 	 formatter: function(){
			 	 	 return '<b>'+ this.series.name +': X = '+
               this.x.toFixed(4) +' , Y =  '+ this.y.toFixed(4) ;
			 	 }
			 
			 },
         series:[
				{
						type: 'line',
						name: 'Experimental Curve',
						data: arr2
				}
					,
				
				{
					type: 'line',
					name: 'Theoretical Curve',
					data: d
				}
				
				
		]
		
      });
     }
   }
  
}

var graphCalculation = function(energyArray,volumeArray) {
		var volumaArraypart = new Array();
		var e = new Array();
		var r = new Array();
		var mainCurve = [];
		volumaArraypart = volumeArray;
		volumaArraypart.sort();
		e = energyArray;
		e.sort();
		var sy = 0, sx = 0, ssx = 0, sxy = 0, sxxx = 0, sxxy = 0, sxxx = 0, sxx = 0, sxxxx = 0, n = e.length;
		for(var i = 0; i < e.length; i++) {
			sy = sy + volumaArraypart[i];
			sxx = sxx + e[i] * e[i];
			sx = parseInt(sx) + parseInt(e[i]);
			sxy = sxy + e[i] * volumaArraypart[i];
			sxxx = sxxx + e[i] * e[i] * e[i];
			sxxy = sxxy + e[i] * e[i] * volumaArraypart[i];
			sxxxx = sxxxx + e[i] * e[i] * e[i] * e[i];
			//alert("sy: "+sy+" sxx: "+sxx+" sx:"+sx+" sxxx:"+sxxx+" sxxy:"+sxxy+" sxxxx:"+sxxxx);
		}
		var d = (sxx * (sxx * sxx - sx * sxxx )) - (sx * (sxxx * sxx - sx * sxxxx )) + (n * (sxxx * sxxx - sxx * sxxxx));
		var d1 = sy * (sxx * sxx - sx * sxxx) - sx * (sxy * sxx - sx * sxxy) + n * (sxy * sxxx - sxx * sxxy);
		var d2 = sxx * (sxy * sxx - sx * sxxy) - sy * (sxxx * sxx - sx * sxxxx) + n * (sxxx * sxxy - sxy * sxxxx);
		var d3 = sxx * (sxx * sxxy - sxy * sxxx) - sx * (sxxx * sxxy - sxy * sxxxx) + sy * (sxxx * sxxx - sxx * sxxxx);

		var a = d1 / d;
		var b = d2 / d;
		var c = d3 / d;
		var m1 = getMaximum(energyArray);
		var m2 = getMinimum(energyArray);
		var m3 = getMaximum(volumeArray);
		var m4 = getMinimum(volumeArray);
		
		for(var i = 486 ; i < m1; i++) {
			var output = (a * i * i) + (b * i) + c;
			mainCurve.push([i, output]);
		}
		return mainCurve;
}

var graphCalculation2 = function(energyArray,volumeArray) {
//alert("energyArray "+energyArray+" volumeArray "+volumeArray);
		var volumaArraypart = new Array();
		var e = new Array();
		var r = new Array();
		var mainCurve = [];
		volumaArraypart = volumeArray;
		volumaArraypart.sort();
		e = energyArray;
		e.sort();
		var sy = 0, sx = 0, ssx = 0, sxy = 0, sxxx = 0, sxxy = 0, sxxx = 0, sxx = 0, sxxxx = 0, n = e.length;
		//alert("volumaArraypart[i]: "+volumaArraypart[0]+" e "+e[0]);
		for(var i = 0; i < e.length; i++) {
			sy = sy + volumaArraypart[i];
			sxx = sxx + e[i] * e[i];
			sx = parseFloat(sx) + parseFloat(e[i]);
			sxy = sxy + e[i] * volumaArraypart[i];
			sxxx = sxxx + e[i] * e[i] * e[i];
			sxxy = sxxy + e[i] * e[i] * volumaArraypart[i];
			sxxxx = sxxxx + e[i] * e[i] * e[i] * e[i];
			//alert("sy: "+sy+".. sxx : "+sxx+" sx: "+sx+".. sxy : "+sxy+" sxxx: "+sxxx+" sxxy:"+sxxy+" sxxxx: "+sxxxx);
		} 
		var d = (sxx * (sxx * sxx - sx * sxxx )) - (sx * (sxxx * sxx - sx * sxxxx )) + (n * (sxxx * sxxx - sxx * sxxxx));
		var d1 = sy * (sxx * sxx - sx * sxxx) - sx * (sxy * sxx - sx * sxxy) + n * (sxy * sxxx - sxx * sxxy);
		var d2 = sxx * (sxy * sxx - sx * sxxy) - sy * (sxxx * sxx - sx * sxxxx) + n * (sxxx * sxxy - sxy * sxxxx);
		var d3 = sxx * (sxx * sxxy - sxy * sxxx) - sx * (sxxx * sxxy - sxy * sxxxx) + sy * (sxxx * sxxx - sxx * sxxxx);
        	
		var a = d1 / d;
		var b = d2 / d;
		var c = d3 / d;
		var m1 = getMaximum(energyArray);
		var m2 = getMinimum(energyArray);
		//alert("max : "+m1+".. min : "+m2);
		for(var i = 0.68 ; i < m1;) {
			i = i + 0.001;
			var output = (a * i * i) + (b * i) + c;
			mainCurve.push([i, output]);
			//alert(i+".."+output);
		}
		return mainCurve;
}

var getMaximum = function(energyArray){
	var max = 0;
	for(var j = 0;j<energyArray.length;j++){
		if(energyArray[j] > max){
		//alert("val "+energyArray[j]);
			max = energyArray[j];
		}
	}
	return max;
}

var getMinimum = function(energyArray){
	var min = 1000;
	for(var j = 0;j<energyArray.length;j++){
		if(energyArray[j]<min){
			min = energyArray[j];
		}
	}
	return min;
}
var image = function() {
	//alert(1);
	swfobject.embedSWF("exp4.swf", "graph", "700", "500", "9.0.0");
}