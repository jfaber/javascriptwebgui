/*
					By:				    Jeffrey E. Faber
					Purpose: 			Displays and Manipulates Div Windows, also contains mouse catching.
					Date Started: 		May 6th, 2010
					Date Completed:		*
					Version:			1.0

*/



var windowMoving=false;
var windowResizing=false;
var movingID;
var judgex;
var judgey;
var IE = document.all?true:false;// Is the browser IE??
document.onmouseup=cleanMoving;


//------------------------Create Window------------------------------
// This function creates a simple window(low customizations) it takes the Title, Content and requires a Unique ID and creates, piece by piece, 
// the div. 
function createSimpleWindow(topTitle,innerCode,windowID)
{
if(!document.getElementById(windowID))
	{
	var windowContent;
	var newWindow = document.createElement("div"); // sets the newWindow to make a new div.
	//set Attributes.
		 newWindow.id = windowID;
		 newWindow.style.position="absolute";
		 newWindow.style.left="150px";
		 newWindow.style.top="150px";
		 newWindow.style.width="302px";
		 windowContent  = "<div style='background-color:#4444FF;border:1px solid black;height:18' id='"+windowID+"Title'  onMouseDown='moveWindow(\""+windowID+"\")'> <span style='text-align:right;'> <input style='width:18;height:18;background-color:#3333FF;color:#FFFFFF; position:relative; left:260; font-weight:bold' type='button' value='-' onClick='minWindow(\""+windowID+"\")' id='"+windowID+"-'  /><input style='width:18;height:18;background-color:#3333FF;color:#FFFFFF; position:relative; left:261;font-weight:bold;' type='button' value='X' onClick='closeWindow(\""+windowID+"\")'  id='"+windowID+"x' /></span><span style='text-align:left'>"+ topTitle +"</span></div>";
		 windowContent += "<div style='background-color:#FFFFFF;border:1px solid black; height:200px;overflow:auto' id='"+windowID+"Body'>"+innerCode +"</div>";
		 windowContent += "<span style='position:relative;top:-18px;left:297px;cursor:nw-resize' id='"+windowID+"Resize' onMouseDown='resizeWindow(\""+windowID+"\")'>/</span>";
		 newWindow.innerHTML = windowContent;
	//Place Window
		document.body.appendChild(newWindow);
	}
else
	alert("That window is already open.");
}
function createDetailedWindow(startingLeft, startingTop, startingWidth, startingHeight, topTitle, titleColor, titleBGColor, canClose, canMin, canResize, canMove, titleButtonBGColor, titleButtonTextColor, textBGColor, textColor, innerCode, windowID)
{
if(!document.getElementById(windowID))
	{
	var windowContent;
	var newWindow = document.createElement("div"); // sets the newWindow to make a new div.
	//set Attributes.
		 newWindow.id = windowID;
		 newWindow.style.position="absolute";
		 newWindow.style.left=startingLeft;
		 newWindow.style.top=startingTop;
		 newWindow.style.width=startingWidth;
		 windowContent  = "<div style='background-color:"+titleBGColor+";color:"+titleColor+";border:1px solid black;height:18' id='"+windowID+"Title'";
		 if(canMove)
			windowContent += "onMouseDown='moveWindow(\""+windowID+"\")'";
		 if(canMin)
			windowContent += " /><input style='width:18;height:18;background-color:"+titleButtonBGColor+";color:"+titleButtonTextColor+"; position:relative; left:"+(startingWidth*1-40)+"; font-weight:bold' type='button' value='-' onClick='minWindow(\""+windowID+"\")' id='"+windowID+"-'  />";
		 if(canClose)
			windowContent += "<input style='width:18;height:18;background-color:"+titleButtonBGColor+";color:"+titleButtonTextColor+"; position:relative; left:"+(startingWidth*1-40)+";font-weight:bold;' type='button' value='X' onClick='closeWindow(\""+windowID+"\")'  id='"+windowID+"x' />";
		 windowContent +=  topTitle +"</div>";
		 windowContent += "<div style='background-color:"+textBGColor+";color:"+textColor+";border:1px solid black; height:"+startingHeight+"px;overflow:auto' id='"+windowID+"Body'>"+innerCode +"</div>";
		if(canResize)
			windowContent += "<span style='position:relative;top:-18px;left:"+(startingWidth*1-6)+"px;color:"+textColor+";cursor:nw-resize' id='"+windowID+"Resize' onMouseDown='resizeWindow(\""+windowID+"\")'>/</span>";
		 newWindow.innerHTML = windowContent;
	//Place Window
		document.body.appendChild(newWindow);
	}
else
	alert("That window is already open.");	
}
//-----------------------------------Clean Moving----------------------------------
// This function simply turns of the moving and resizing ability onmouseup, see Globals for event capture.
function cleanMoving()
{
windowMoving=false;
windowResizing=false;
}

function closeWindow(theID)
//Simply removes the div from the body when the X is pressed.
{
document.body.removeChild(document.getElementById(theID));
}

function moveWindow(theID)
//Sets the initial values for moving the window relative the location of the mouse.
{
movingID=theID;
windowMoving=true;
judgex=document.getElementById(movingID).style.left.replace("px","")*1-posx;
judgey=document.getElementById(movingID).style.top.replace("px","")*1-posy;
}
function movingWindow()
//Loops through while the window is moving to keep it moving while no mouseup.
{
document.getElementById(movingID).style.left=posx+judgex;
document.getElementById(movingID).style.top=posy+judgey;
}

function resizeWindow(theID)
{
movingID=theID;
windowResizing=true;
judgex=document.getElementById(movingID).style.left.replace("px","")*1;
judgey=document.getElementById(movingID).style.top.replace("px","")*1+22;
}
function windowIsResizing()
{
if(posy-judgey>18)
	document.getElementById(movingID+"Body").style.height=(posy-judgey)*1;
if(posx-judgex>100)
	{
	document.getElementById(movingID).style.width=posx-judgex;
	document.getElementById(movingID+"Title").style.width=posx-judgex;
	document.getElementById(movingID+"Body").style.width=posx-judgex;

	document.getElementById(movingID+"-").style.left=posx-judgex-40;
	document.getElementById(movingID+"x").style.left=posx-judgex-40;
	document.getElementById(movingID+"Body").style.left=posx-judgex;
	document.getElementById(movingID+"Resize").style.left=posx-judgex-3;
	}
}
function minWindow(theID)
{
if(document.getElementById(theID+"Body").style.display!="none")
	{
	document.getElementById(movingID).style.width=120;
	document.getElementById(movingID+"Body").style.display="none";
	document.getElementById(movingID+"-").value="^";
	document.getElementById(movingID+"-").style.left=80;
	document.getElementById(movingID+"x").style.left=81;
	document.getElementById(movingID+"Resize").style.display="none";
	}
else
	{
	document.getElementById(movingID).style.width=302;
	document.getElementById(movingID+"Body").style.display="block";
	document.getElementById(movingID+"-").value="-";
	document.getElementById(movingID+"-").style.left=260;
	document.getElementById(movingID+"x").style.left=261;
	document.getElementById(movingID+"Resize").style.display="block";
	}
}
//----------------------------------------------------------------------------------------------------------
//**********************************************************************************************************
//-----------------------------------MOUSE GRAB FUNCTION STUFF IS HERE--------------------------------------
// Detect if the browser is IE or not.
// If it is not IE, we assume that the browser is NS.
var IE = document.all?true:false

// If NS -- that is, !IE -- then set up for mouse capture
//if (!IE) document.captureEvents(Event.MOUSEMOVE)
//if (!IE) document.addEventListener(MouseEvent.MOVE, getMouseXY);
// Set-up to use getMouseXY function onMouseMove
document.onmousemove = getMouseXY;

// Temporary variables to hold mouse x-y pos.s
var posx = 0
var posy = 0// Main function to retrieve mouse x-y pos.s


function getMouseXY(e) {

  if (IE) { // grab the x-y pos.s if browser is IE
    posx = event.clientX + document.body.scrollLeft
    posy = event.clientY + document.body.scrollTop
  } else {  // grab the x-y pos.s if browser is NS
    posx = e.pageX
    posy = e.pageY
  }  if (posx < 0){posx = 0}
  if (posy < 0){posy = 0}  
  
	//When mouse moved check to see if the window is moving or being resized
	if(windowMoving)
		movingWindow();
	else if(windowResizing)
		windowIsResizing();
  return true
}
