var idInc=0;
var selectedObject;
var objectCanMove=false;
document.onkeydown = getKey;   
document.onkeyup = keyDone;   
document.onmouseup=cleanMoving;
function getKey(key)
{
//16 is shift, 17 is crtl, 18 is alt.
var pressedKey = (window.event) ? event.keyCode : key.keyCode;

 if(pressedKey==16)
  objectCanMove=true;
}
function keyDone(key)
{
var pressedKey = (window.event) ? event.keyCode : key.keyCode;

 if(pressedKey==16)
  objectCanMove=false;
}
function openRichEdit(theID)
{
objectInEdit=theID;
if(!document.getElementById("editorWindow"))
createDetailedWindow(200, 200, 650, 143, "Text Editor", "#000000", "#4444FF", true, true, false, true, "#3333FF", "#000000", "#C0C0C0", "#000000", theEditor, "editorWindow");
//createDetailedWindow(startingLeft, startingTop, startingWidth, startingHeight, topTitle, titleColor, titleBGColor, canClose, canMin, canResize, canMove, titleButtonBGColor, titleButtonTextColor, textBGColor, textColor, innerCode, windowID)
}

function setUpMenu()
{
addMenu("File",true);
addMenu("Insert",true);


codeNeeded="<span onclick=\"setMenu();closeWindow('menuClosed') \">Click here to re-open the menu.</span>";

//---------------------File----------------------
addSub(0,"Close Menu", "killMenu();createDetailedWindow(100, 100, 100, 100, 'Click to Open Menu', '000000', '#4444FF', false, false, false, true, '#3333FF', '#000000', '#FFFFFF', '#000000',codeNeeded , 'menuClosed')", true);
addSub(0,"Blank", "", true);
addSub(0,"Blank", "", true);

//---------------------Insert--------------------
addSub(1,"Div","createObject('div','object'+idInc);", true);
addSub(1,"Span","createObject('span','object'+idInc);", true);
addSub(1,"Image","createObject('img','object'+idInc);", true);

setMenu();
}

function selectObject(theID)
{
var selectedObject=theID;
var objType=document.getElementById(theID).nodeName;
if(objType=="DIV"||objType=="SPAN")
	{
	openRichEdit(theID);
	Start();
	document.getElementById("whatIsSelected").value=theID;
	document.getElementById(document.getElementById("whatIsSelected").value).contentEditable=document.getElementById("canEditYN").checked;

	}
if(objType=="IMG")
	{
	openRichEdit(theID);
	Start();
	document.getElementById("whatIsSelected").value=theID;
	}

if(objectCanMove&&document.getElementById("canEditYN").checked)
	moveObject(theID);
}

function makeEditable(isEdit)
{
if(isEdit)
	document.getElementById(document.getElementById("whatIsSelected").value).designMode="on";
else
	document.getElementById(document.getElementById("whatIsSelected").value).designMode="off";
}
function createObject(objectType,objectID)
{
//---------Containers----------
if(document.getElementById(objectID))
	alert("Error: That objectID is in use already.");
else
	{	
	var newObject = document.createElement(objectType);
	
	newObject.id=objectID;
	newObject.style.position="absolute";
	newObject.style.left=150;
	newObject.style.top=150;
	
	if(objectType=="div"||objectType=="span")
		{
		newObject.innerHTML=objectID;
		newObject.contenteditable=true;
		}
	else if(objectType="img")
		{
		newObject.src=prompt('Please enter a path for the image.','http://');		
		}

	document.body.appendChild(newObject);	

	if(!IE)
		document.getElementById(objectID).setAttribute("onmousedown","selectObjectE(this.id);");
	else
		document.getElementById(objectID).onmousedown=function(){selectObjectE(objectID)};

		idInc++;
	}
}

function moveObject(theID)
//Sets the initial values for moving the object relative the location of the mouse.
{
movingID=theID;
windowMoving=true;
judgex=document.getElementById(movingID).style.left.replace("px","")*1-posx;
judgey=document.getElementById(movingID).style.top.replace("px","")*1-posy;
}
