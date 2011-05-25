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
var posx = 0
var posy = 0



document.onmouseup=cleanMoving;

function getClickID(e)
//this function is on mouse move, it catches the object the mouse is over and also catches the mouse cordinates.
{
if (IE) 
	{ 
	posx = event.clientX + document.body.scrollLeft
	posy = event.clientY + document.body.scrollTop
	} 
else
	{  
	posx = e.pageX
	posy = e.pageY
	}  
	
if (posx < 0)
	posx = 0
if (posy < 0)
	posy = 0
  
	//When mouse moved check to see if the window is moving or being resized
if(windowMoving&&document.getElementById(movingID))
	{

	movingWindow();
	
	}
	else if(windowResizing)
	windowIsResizing();
	//Standard Meathod
if (e.target)
	{	
	theMouseOver=e.target;
	}
	// IE rig
else if (e.srcElement)
	{
	theMouseOver=e.srcElement;
	}


}

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
		 newWindow.style.resize="both";
     newWindow.class = "";
		 if(!IE)
		 newWindow.setAttribute("class", "dropShadow aWindow");
		 if(IE)
			newWindow.style.overflow="auto";
		 windowContent  = "<div style='background-color:#4444FF;border:1px solid black;height:22px;' id='"+windowID+"Title'  onMouseDown='moveWindow(\""+windowID+"\")'> <span style='text-align:right;'> <input style='width:18px;height:22px;background-color:#3333FF;color:#FFFFFF; position:relative; left:260px; font-weight:bold' type='button' value='-' onClick='minWindow(\""+windowID+"\")' id='"+windowID+"-'  /><input style='width:18px;height:22px;background-color:#3333FF;color:#FFFFFF; position:relative; left:261px;font-weight:bold;' type='button' value='X' onClick='closeWindow(\""+windowID+"\")'  id='"+windowID+"x' /></span><span style='text-align:left'>"+ topTitle +"</span></div>";
		 windowContent += "<div style='background-color:#FFFFFF;border:1px solid black; height:200px;overflow:auto' id='"+windowID+"Body'>"+innerCode +"</div>";
		 windowContent += "<span style='position:relative;top:-22px;left:297px;cursor:nw-resize' id='"+windowID+"Resize' onMouseDown='resizeWindow(\""+windowID+"\")'>/</span>";
		 newWindow.innerHTML = windowContent;
	//Place Window

		document.body.appendChild(newWindow);


	}
else
	alert("That window is already open.");
}
function createDetailedWindow(startingLeft, startingTop, startingWidth, startingHeight, topTitle, titleColor, titleBGColor, canClose, canMin, canResize, canMove, titleButtonBGColor, titleButtonTextColor, textBGColor, textColor, innerCode, windowID, critical)
{
if(!document.getElementById(windowID))
	{
	if(IE)
		{
		startingWidth+=8;
		startingHeight+=8;
		}
	var windowContent;
	var newWindow = document.createElement("div"); // sets the newWindow to make a new div.
	//set Attributes.
		 newWindow.id = windowID;
		 newWindow.style.position="absolute";
		 newWindow.style.left=startingLeft+"px";
		 newWindow.style.top=startingTop+"px";
		 newWindow.style.width=startingWidth+"px";
		 newWindow.style.opacity="1";
		 newWindow.style.resize="both";
		 if(!IE)
		 newWindow.setAttribute("class", "dropShadow");
	
		 if(IE)
			newWindow.style.overflow="hidden";
		 windowContent  = "<div style='background-color:"+titleBGColor+";color:"+titleColor+";border:1px solid black;opacity:.75;height:22px' id='"+windowID+"Title'";
		 if(canMove)
			windowContent += "onMouseDown='moveWindow(\""+windowID+"\")'";
		 if(canMin)
			windowContent += " /><input style='width:18px;height:22px;background-color:"+titleButtonBGColor+";color:"+titleButtonTextColor+"; position:relative; left:"+(startingWidth*1-40)+"px; font-weight:bold' type='button' value='-' onClick='minWindow(\""+windowID+"\")' id='"+windowID+"-'  />";
		 
		 if(canClose&&critical)
				windowContent += "<input style='width:18px;height:22px;background-color:"+titleButtonBGColor+";color:"+titleButtonTextColor+"; position:relative; left:"+(startingWidth*1-40)+"px;font-weight:bold;' type='button' value='X' onClick='removeBlockingWindow();closeWindow(\""+windowID+"\");'  id='"+windowID+"x' />";
		 else if(canClose)
				windowContent += "<input style='width:18px;height:22px;background-color:"+titleButtonBGColor+";color:"+titleButtonTextColor+"; position:relative; left:"+(startingWidth*1-40)+"px;font-weight:bold;' type='button' value='X' onClick='closeWindow(\""+windowID+"\")'  id='"+windowID+"x' />";

		windowContent +=  "<strong>" +topTitle +"</strong></div>";
		windowContent += "<div style='background-color:"+textBGColor+";color:"+textColor+";border:1px solid black; height:"+startingHeight+"px;overflow:auto' id='"+windowID+"Body'>"+innerCode +"</div>";
		if(canResize)
			windowContent += "<span style='position:relative;top:-22px;left:"+(startingWidth*1-6)+"px;color:"+textColor+";cursor:nw-resize' id='"+windowID+"Resize' onMouseDown='resizeWindow(\""+windowID+"\")'>/</span>";
		 newWindow.innerHTML = windowContent;
		 if(critical)
			{
			 newWindow.style.zIndex=2001;
			 criticalWindow();
			}
	//Place Window
	
		document.body.appendChild(newWindow);
				
	  $("#"+windowID).css({
		  'border-radius': '5px',
		  'resize' : 'both'

	  });
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
if(document.getElementById(theID))
document.body.removeChild(document.getElementById(theID));
}

function moveWindow(theID)
//Sets the initial values for moving the window relative the location of the mouse.
{

//if(document.getElementById(movingID))
	//document.getElementById(movingID).style.zIndex=0;
movingID=theID;
//document.getElementById(theID).zIndex=2;
windowMoving=true;
judgex=document.getElementById(movingID).style.left.replace("px","")*1-posx;
judgey=document.getElementById(movingID).style.top.replace("px","")*1-posy;
}

function movingWindow()
//Loops through while the window is moving to keep it moving while no mouseup.
{
//if the object can't move then let the user know

document.getElementById(movingID).style.left=(posx+judgex)+"px";
document.getElementById(movingID).style.top=(posy+judgey)+"px";
}

function resizeWindow(theID)
{
//Sets the initial values for resizing
movingID=theID;
document.getElementById(movingID).zIndex=1;
windowResizing=true;
judgex=document.getElementById(movingID).style.left.replace("px","")*1;
judgey=document.getElementById(movingID).style.top.replace("px","")*1+22;
}

function windowIsResizing()
{
//resize loop
if(posy-judgey>18)
	document.getElementById(movingID+"Body").style.height=((posy-judgey)*1)+"px";
if(posx-judgex>100)
	{
	document.getElementById(movingID).style.width=(posx-judgex)+"px";
	document.getElementById(movingID+"Title").style.width=(posx-judgex)+"px";
	document.getElementById(movingID+"Body").style.width=(posx-judgex)+"px";

	document.getElementById(movingID+"-").style.left=(posx-judgex-40)+"px";
	document.getElementById(movingID+"x").style.left=(posx-judgex-40)+"px";
	document.getElementById(movingID+"Body").style.left=(posx-judgex)+"px";
	document.getElementById(movingID+"Resize").style.left=(posx-judgex-3)+"px";
	}
}
function minWindow(theID)
{
//Allows for window minimization
if(document.getElementById(theID+"Body").style.display!="none")
	{
	//document.getElementById(movingID).style.width=120+"px";
	document.getElementById(movingID+"Body").style.display="none";

	document.getElementById(movingID+"-").value=".";
	/*	document.getElementById(movingID+"-").style.left=80+"px";
	if(document.getElementById(movingID+"x"))
		document.getElementById(movingID+"x").style.left=81+"px";
	if(document.getElementById(movingID+"Resize"))
		document.getElementById(movingID+"Resize").style.display="none";
	*/
	}
else
	{
	//document.getElementById(movingID).style.width=302+"px";

	document.getElementById(movingID+"Body").style.display="block";
	document.getElementById(movingID+"-").value="-";
	/*	document.getElementById(movingID+"-").style.left=260+"px";
	if(document.getElementById(movingID+"x"))	
		document.getElementById(movingID+"x").style.left=261+"px";
	if(document.getElementById(movingID+"Resize"))		
		document.getElementById(movingID+"Resize").style.display="block";
	*/
	}
}

function criticalWindow()
{
		 var newWindow = document.createElement("div");
		 newWindow.id = "JFEdit.blockingWindow";
		 newWindow.style.position="absolute";
		 newWindow.style.left=0+"px";
		 newWindow.style.top=0+"px";
		 newWindow.style.width="100%";
		 newWindow.style.height="100%";
		 newWindow.style.width="100%";
		 newWindow.style.zIndex="1000";
		 newWindow.style.backgroundColor="#000000";
		 
		 if(!IE)
			newWindow.style.opacity=.5;
		else 
			newWindow.style.filter="alpha(opacity=50)";

		document.body.appendChild(newWindow);	

		 
}

function removeBlockingWindow()
{
if(document.getElementById("JFEdit.blockingWindow"))
	document.body.removeChild(document.getElementById("JFEdit.blockingWindow"));
}
