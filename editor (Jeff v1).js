/*
					By:				    Jeffrey E. Faber
					Purpose: 			Creates and manipulates objects on an HTML page.
					Date Started: 		May 11th, 2010
					Date Completed:		*
					Version:			1.2
					Major Ups from 1.0: Now allows this script to be used from ANY page by adding a few lines to the <head> 
										got rid of the annoying onClick to select in each dang element and now doesn't add 
										too much crap to the page.
					Major Ups from 1.1: Context menu functionality added.
					
					Required libs:		windowSys.js, menuSys.js, richText.js, contextMenu.js
					
					ToDo:
							Breaker:
									_Fix JS Generation on reedit of page and preexisting JS pages.
							High: 
									_Generate Clean code
							Medium:
									_Custom Script Read Me
							Low:
									_Add iFrame Selection tool.
									_Set up class setup and changing.
							Completed:
									Major: XContext Menu, XFull Cross Compatablity, XCtrl-Drag, XJavacript Maker, XPlugin Manager
									Minor: XObject Code Editor, XPage Code Editor, 
*/

 // This value makes sure each object has a unique ID
var selectedObject=""; // Global selected object
var objectCanMove=false; //Checks to see if Shift is pressed, if so allow movement.
document.onmousedown= selectObject;
document.onkeydown = getKey; //Gets key codes on key Down
document.onkeyup = keyDone;  // Gets key codes on key Up
var theMouseOver;
var theJSAction;
var inlineJSAdd="";
if(!customInternal)
	var customInternal=false;
alert('Editor Mode engaged. For instructions you may click on any text you need more info on. Please note, that for prebuilt pages(ones not entirely built with this editor) you will need to go under the object\'s properties and check absolute to allow it to free move with Ctrl-Drag.');

 // sets moveHandler for getting mouseOver



//------------------------------Key Press Capture----------------------------------
function getKey(key)
{
//16 is shift, 17 is crtl, 18 is alt.
var pressedKey = (window.event) ? event.keyCode : key.keyCode;

 if(pressedKey==17)
  objectCanMove=true;
}
function keyDone(key)
{
var pressedKey = (window.event) ? event.keyCode : key.keyCode;

 if(pressedKey==17)
  objectCanMove=false;
}

//--------------------------------Sets up the Window for the Rich text Editor--------------------------------
function openRichEdit(theID)
{
objectInEdit=theID;
if(!document.getElementById("JFEdit|editorWindow"))
createDetailedWindow(200, 200, 659, 148, "Text Editor", "#000000", "#4444FF", true, true, false, true, "#3333FF", "#000000", "#C0C0C0", "#000000", getRichEdit(), "JFEdit|editorWindow",0);
//createDetailedWindow(startingLeft, startingTop, startingWidth, startingHeight, topTitle, titleColor, titleBGColor, canClose, canMin, canResize, canMove, titleButtonBGColor, titleButtonTextColor, textBGColor, textColor, innerCode, windowID, critical)
}

//--------------------------------Initiates the Menu--------------------------------------

/*
Syntax:
addMenu(menuName, silent);   Adds new main menu
function addSub(menuToAdd,subName,subAction, silent);   Adds new sub menu, the menuToAdd is 0 at the left most and increments by one.
*/

function setUpMenu()
{
addMenu("File",true);
addMenu("Insert",true);
addMenu("Edit",true);
addMenu("Help",true);

addMenu('<input type="text" value="no selection" disabled style="width:150px" id="JFEdit|theSelected" />',true);
codeNeeded="<span onclick=\"setMenu();closeWindow('JFEdit|menuClosed') \">Click here to re-open the menu.</span>";

//---------------------File (0)----------------------
addSub(0,"Hide Menu", "killMenu();createDetailedWindow(100, 100, 100, 100, 'Click to Open Menu', '000000', '#4444FF', false, false, false, true, '#3333FF', '#000000', '#FFFFFF', '#000000',codeNeeded , 'JFEdit|menuClosed',0)", true);
addSub(0,"Finish&Save", "completePage()", true);
addSub(0,"Blank", "", true);
addSub(0,"Blank", "", true);
addSub(0,"Blank", "", true);
addSub(0,"Blank", "", true);


//---------------------Insert (1)--------------------
addSub(1,"Div","createObject('div','object|'+idInc);", true);
addSub(1,"Span","createObject('span','object|'+idInc);", true);
addSub(1,"Image","createObject('img','object|'+idInc);", true);
addSub(1,"Iframe","createObject('iframe', 'object|'+idInc);",true);
addSub(1,"Addon", "addInScript()", true);
addSub(1,"Blank", "", true);


//----------------------Edit (2)----------------------
addSub(2, "Page Title", "document.title=prompt('Enter a New Page Title',document.title);", true);
addSub(2, "Properties", "openProperties();", true);
addSub(2, "Object Code", "displayHTML();",true);
addSub(2, "Object Actions", "openJasvascript();", true);
addSub(2, "Page Code", "displayPageHTML();",true);



//----------------------Help (3)----------------------

addSub(3, "About", "alert('This program was designed, created and implemented by Jeff Faber foward any questions to c1a9r8d5@gmail.com. Thanks!')",true);
addSub(3, "ReadMe", "window.open('readMe.htm')",true );
addSub(3,"Blank", "", true);
addSub(3,"Blank", "", true);
addSub(3,"Blank", "", true);
setMenu(); // just places menu
}

//-------------------------------------Set Up Context----------------------------
function setUpContext()
{
/*
Syntax:
addItemContect(Display, Action, silent);
*/
addItemContext("<i>Where is the <br /><u>normal Right-Click?</u></i>","alert('To bring up the normal Right-Click Context Menu press Ctrl+Right-Click')",true);
addItemContext("Object Code", "displayHTML();",true);
addItemContext("Object Actions", "openJasvascript();", true);
addItemContext("Delete", "if(confirm('Delete This Object?')){deleteObject(selectedObject)}", true);

addItemContext("Properties", "openProperties()", true);

}
//--------------------------------Select Object---------------------------------------

/*
This is fowarded from selctObjectE() to prevent errors when edit mode is disabled.
*/
function selectObject(e)
{
closeSub(); // just makes sure the submenus are closed
closeContext();

//--------------------Check for editor element------------
/* This section checks if it is an element of the editor so it's not edited accidently
The way it works is by checking the element that is clicked on's parent's parent's parent's parent's parent to see if it is 
a editor item (with JFEdit| at the start)
*/
var fiveDeep="";
var fourDeep="";
var threeDeep="";
var twoDeep="";
var oneDeep="";

	if(theMouseOver.parentNode)
		{
		if(theMouseOver.parentNode.id!=undefined)
			oneDeep=theMouseOver.parentNode.id;
		if(theMouseOver.parentNode.parentNode)
			{
			if(theMouseOver.parentNode.parentNode.id!=undefined)
				twoDeep=theMouseOver.parentNode.parentNode.id;
			if(theMouseOver.parentNode.parentNode.parentNode)
				{
				if(theMouseOver.parentNode.parentNode.parentNode.id!=undefined)
					threeDeep=theMouseOver.parentNode.parentNode.parentNode.id;			
				if(theMouseOver.parentNode.parentNode.parentNode.parentNode)
					{
						if(theMouseOver.parentNode.parentNode.parentNode.parentNode.id!=undefined)
							fourDeep=theMouseOver.parentNode.parentNode.parentNode.parentNode.id;
						if(theMouseOver.parentNode.parentNode.parentNode.parentNode.parentNode)
						{
							if(theMouseOver.parentNode.parentNode.parentNode.parentNode.parentNode.id!=undefined)
								fiveDeep=theMouseOver.parentNode.parentNode.parentNode.parentNode.parentNode.id;

						}
					}
				}
			}	
		}

// Make sure the click
if(theMouseOver.nodeName!="HTML"&&theMouseOver.id.split("|")[0]!="JFEdit"&&fiveDeep.split("|")[0]!="JFEdit"&&fourDeep.split("|")[0]!="JFEdit"&&threeDeep.split("|")[0]!="JFEdit"&&twoDeep.split("|")[0]!="JFEdit"&&oneDeep.split("|")[0]!="JFEdit")
	{
	if(theMouseOver.id=="")
	{
	theMouseOver.id="object|"+idInc;
	idInc++;
	}
	if(theMouseOver.style.position!="absolute")
	{
	/*	theMouseOver.style.position="absolute";
		theMouseOver.style.left=posx+"px";
		theMouseOver.style.top=posy+"px";
	*/
	//alert('This object is not absolute, to move it you will need to open the properties and check the absolute box.');
	}
		
	selectedObject=theMouseOver.id; //Select the clicked object.
	if(document.getElementById("JFEdit|theSelected"))
		document.getElementById("JFEdit|theSelected").value=theMouseOver.id;
	var objType=theMouseOver.nodeName; //See what said object is and take appropriate actions below

	
	// if ctrl is pressed(objectCanMove) and our edit box is checked then allow movement.

	if(objectCanMove)
		moveObject(theMouseOver.id);
	

if(IE)
	{
	if(event.button==1&&!objectCanMove)
		openRichEdit(theMouseOver.id);

	}
else 
	{
	if(e.button==0&&!objectCanMove)
		openRichEdit(theMouseOver.id);	
	}
	if(document.getElementById("JFEdit|whatIsSelected"))
		document.getElementById("JFEdit|whatIsSelected").value=theMouseOver.id;	
	Start();
}

	if(objType=="DIV"||objType=="SPAN") //if it's an object with editable content
		{
		if(document.getElementById("JFEdit|whatIsSelected"))
			document.getElementById(document.getElementById("JFEdit|whatIsSelected").value).contentEditable=document.getElementById("JFEdit|canEditYN").checked;
		}
	if(objType=="IMG") // if it's an image
		{
		}


}

//-------------------------------------------- makeEditable --------------------------
/*
This little guy just changes if the object can be edited.
*/

function makeEditable(isEdit)
{
if(isEdit&&document.getElementById(document.getElementById("JFEdit|whatIsSelected").value))
	document.getElementById(document.getElementById("JFEdit|whatIsSelected").value).designMode="on";
else
	document.getElementById(document.getElementById("JFEdit|whatIsSelected").value).designMode="off";
}


//--------------------------------------Create Object--------------------------------
/*
Creates an object and, based on type, assignes attributes.
*/
function createObject(objectType,objectID)
{
//Check to see if the objectID is in use already, if it is halt.
if(document.getElementById(objectID))
	alert("Error: That objectID is in use already.");
else
	{	
	//create new object and set paramaters
	var newObject = document.createElement(objectType);
	
	newObject.id=objectID;
	newObject.style.position="absolute";
	newObject.style.left=150+"px";
	newObject.style.top=150+"px";
	//set type specific paramaters
	if(objectType=="div"||objectType=="span")
		{
		newObject.innerHTML=objectID;
		newObject.contenteditable=true;
		}
	else if(objectType=="img")
		{
		newObject.src=prompt('Please enter a path for the image.','http://');	
		newObject.alt=objectID;
		}
	if(objectType=="iframe")
		{
		newObject.src=prompt('Please enter a path for the iframe.','http://');	
		alert('You can not move an Iframe unless you grab it by the border! To change the border size you must select it and go to properties!');
		newObject.style.border="5px solid black";
		}
	
	//drop object into the body
	document.body.appendChild(newObject);	

	//and increment the ID index
	idInc++;
	}
}

//----------------------------------Move Object----------------------------------
function moveObject(theID)
//Sets the initial values for moving the object relative the location of the mouse.
{
if(document.getElementById(theID).style.position!="absolute")
	{
	alert("This Object is not able to move because it is not set to absolute positioning. If you wish to move this object, you can make this object absolute by going to Edit->Properties and checking the absolute box. See the Read Me for more details. Also Note: if you format any text it becomes it's own object within the object, try moving it with the blank part of the box.");
	objectCanMove=false;
	}
else
	{	
	movingID=theID;
	windowMoving=true;
	judgex=document.getElementById(movingID).style.left.replace("px","")*1-posx;
	judgey=document.getElementById(movingID).style.top.replace("px","")*1-posy;
	}
}

//----------------------------Object Properties----------------------------------

function openProperties()
{
/*
This function displays and allows changing the object's properties depending on the type.
*/

if(selectedObject!=""&&selectedObject!="undefined"&& !document.getElementById("JFEdit|objectProps"))
	{
	createDetailedWindow(700, 20, 250, 10, selectedObject+" Properties", '#000000', '#4444FF', true, true, true, true, '#3333FF', '#000000', '#FFFFFF', '#000000', getPropsWin() , 'JFEdit|objectProps',0);
	document.getElementById("JFEdit|propSelectedObject").value=selectedObject;
	setTimeout('updateProps();',500);
	document.getElementById("JFEdit|objectPropsBody").style.height=(document.getElementById("JFEdit|propTable").offsetHeight+10)+"px";

	
	}
}

function changeProp()
{
//changes all properties for object on change
//get=(get.replace("JFEdit|prop","")).toLowerCase();
if(document.getElementById("JFEdit|propTop").value!="")
	document.getElementById(selectedObject).style.top=document.getElementById("JFEdit|propTop").value+"px";
if(document.getElementById("JFEdit|propLeft").value!="")
	document.getElementById(selectedObject).style.left=document.getElementById("JFEdit|propLeft").value+"px";
if(document.getElementById("JFEdit|propWidth").value!="")
	document.getElementById(selectedObject).style.width=document.getElementById("JFEdit|propWidth").value+"px";
if(document.getElementById("JFEdit|propHeight").value!="")
	document.getElementById(selectedObject).style.height=document.getElementById("JFEdit|propHeight").value+"px";
if(document.getElementById("JFEdit|propBorder").value!="")
	document.getElementById(selectedObject).style.border=document.getElementById("JFEdit|propBorder").value+"px solid black";

document.getElementById("JFEdit|propBorder").value=document.getElementById(selectedObject).style.border.replace("px solid black","");

if(document.getElementById(selectedObject).nodeName=="IMG")
	{
	document.getElementById(selectedObject).src=document.getElementById("JFEdit|propSrc").value;
	document.getElementById(selectedObject).alt=document.getElementById("JFEdit|propAlt").value;
	}
	document.getElementById(selectedObject).style.opacity=document.getElementById("JFEdit|propOpacity").value/100;

	document.getElementById(selectedObject).style.filter="alpha(opacity="+document.getElementById("JFEdit|propOpacity").value+")";
	
if(document.getElementById("JFEdit|propPosition").checked)
	{
	document.getElementById(selectedObject).style.position="absolute";
	if(!document.getElementById(selectedObject).style.left||!document.getElementById(selectedObject).style.top)
		{
		document.getElementById(selectedObject).style.left=400+"px";
		document.getElementById(selectedObject).style.top=400+"px";
		}
	}
else
	document.getElementById(selectedObject).style.position="static";
	
updateProps();	
}

function updateProps()
{
//updates props on prop win from object
document.getElementById("JFEdit|propSelectedObject").value=selectedObject;
document.getElementById("JFEdit|propTop").value=document.getElementById(selectedObject).style.top.replace("px","");
document.getElementById("JFEdit|propLeft").value=document.getElementById(selectedObject).style.left.replace("px","");
document.getElementById("JFEdit|propWidth").value=document.getElementById(selectedObject).style.width.replace("px","");
document.getElementById("JFEdit|propHeight").value=document.getElementById(selectedObject).style.height.replace("px","");
document.getElementById("JFEdit|propBorder").value=document.getElementById(selectedObject).style.border.replace("px solid black","");

if(document.getElementById(selectedObject).nodeName=="IMG")
	{
	document.getElementById("JFEdit|propSrc").value=document.getElementById(selectedObject).src;
	document.getElementById("JFEdit|propAlt").value=document.getElementById(selectedObject).alt;
	}
	
if(!IE)
	{
		if(!document.getElementById(selectedObject).style.opacity||document.getElementById(selectedObject).style.opacity==0)
		{
			document.getElementById(selectedObject).style.opacity=1;
			
		}
		document.getElementById("JFEdit|propOpacity").value=document.getElementById(selectedObject).style.opacity*100;
	}
else 
	document.getElementById("JFEdit|propOpacity").value=document.getElementById(selectedObject).style.filter.replace("alpha(opacity=","").replace(")","");

if(document.getElementById(selectedObject).style.position=="absolute")
	document.getElementById("JFEdit|propPosition").checked=true;
else
	document.getElementById("JFEdit|propPosition").checked=false;

}
//-----------------------------------Open JS props---------------------------------
function openJasvascript()
{

	createDetailedWindow(500, 90, 250, 10, selectedObject+" Actions", '#000000', '#4444FF', true, true, true, true, '#3333FF', '#000000', '#FFFFFF', '#000000', getJSWin() , 'JFEdit|JSProps',0);
	setTimeout('updateJavscript();',500);
	document.getElementById("JFEdit|JSPropsBody").style.height=(document.getElementById("JFEdit|JSDiv").offsetHeight+10)+"px";
}


//---------------------------------Javascript Props--------------------------------
function updateJavscript()
{
if(document.getElementById(selectedObject).onclick)
	document.getElementById("JFEdit|JStheClick").style.backgroundColor="green";
else
	document.getElementById("JFEdit|JStheClick").style.backgroundColor="red";
	
if(document.getElementById(selectedObject).onmouseover)
	document.getElementById("JFEdit|JStheOver").style.backgroundColor="green";
else
	document.getElementById("JFEdit|JStheOver").style.backgroundColor="red";
	
if(document.getElementById(selectedObject).onmouseout)
	document.getElementById("JFEdit|JStheOut").style.backgroundColor="green";
else
	document.getElementById("JFEdit|JStheOut").style.backgroundColor="red";
}
//-------------------------------AddJS-----------------------------------------
function addScript(action)
{
if(action=="click")
	{
	createDetailedWindow(400,300, 400, 300, "Select an action", '#000000', '#4444FF', true, true, true, true, '#3333FF', '#000000', '#FFFFFF', '#000000', getJSActionWin("onclick") , 'JFEdit|JSAction',1);
	//eval('document.getElementById(selectedObject).onclick=function(){'+prompt("What Script?","")+'}');
	}
if(action=="mouseover")
	{
	createDetailedWindow(400,300, 400, 300, "Select an action", '#000000', '#4444FF', true, true, true, true, '#3333FF', '#000000', '#FFFFFF', '#000000', getJSActionWin("onmouseover") , 'JFEdit|JSAction',1);
	//	eval('document.getElementById(selectedObject).onmouseover=function(){'+prompt("What Script?","")+'}');
	}	
if(action=="mouseout")
	{
	createDetailedWindow(400,300, 400, 300, "Select an action", '#000000', '#4444FF', true, true, true, true, '#3333FF', '#000000', '#FFFFFF', '#000000', getJSActionWin("onmouseout") , 'JFEdit|JSAction',1);

//	eval('document.getElementById(selectedObject).onmouseout=function(){'+prompt("What Script?","")+'}');
	}	
	
	document.getElementById("JFEdit|JSActionBody").style.height=(document.getElementById("JFEdit|JSActionDiv").offsetHeight+10)+"px";

updateJavscript();
}

//----------------------------------Complete JS-----------------------------------
function completeAction(theAction)
{

if(theJSAction=='alert')
	eval("document.getElementById(selectedObject)."+theAction+"=function(){alert('"+prompt("What should the message say?","")+"')}");
else if(theJSAction=='link')
	{
	alert("Warning, This will make an ACTIVE link, if you preform the action to set this link off, it WILL redirect you and all work may be lost! If you accidently do activate this link and are using Firefox, pressing back may save your work!");
	eval('document.getElementById(selectedObject).'+theAction+'=function(){window.location=\''+prompt('Where should this action link to?','http://')+'\'}');
	}
else if(theJSAction=='resize')
	{
	eval('document.getElementById(selectedObject).'+theAction+'=function(){this.style.width="'+prompt('What should the width change to?','100')+'px"; this.style.height=\"'+prompt('What should the height change to?','100')+'px\"}');
	}
else if(theJSAction=='changeSource')
	{
	eval('document.getElementById(selectedObject).'+theAction+'=function(){this.src="'+prompt('What should the image source change to?','http://')+'";}');
	}
else if(theJSAction=='changeBG')
	{
	eval('document.getElementById(selectedObject).'+theAction+'=function(){this.style.backgroundColor="'+prompt('What should the background color change to?','white')+'";}');
	}
else if(theJSAction=='fontSize')
	{
	eval('document.getElementById(selectedObject).'+theAction+'=function(){this.style.fontSize="'+prompt('What should the font size change to?','12')+'pt";}');
	}
else if(theJSAction=='fontColor')
	{
	eval('document.getElementById(selectedObject).'+theAction+'=function(){this.style.color="'+prompt('What should the font color change to?','black')+'";}');
	}
else if(theJSAction=='custom')
	{
	eval('document.getElementById(selectedObject).'+theAction+'=function(){'+prompt("What Script?","")+'}');
	}
else if(theJSAction=='clear')
	{
	eval('document.getElementById(selectedObject).'+theAction+'=""');
	}	
else
	{
	/*This is for custom Addons (see windowBuild.js for adding a button to the actions). 
	Syntax as Follows
	function checkCustomAction(theAction)
	{
	
	if(theJSAction=='your custom string here')
		{
		eval('document.getElementById(selectedObject).'+theAction+'=function(){    Your custom Function here after action     }');
		}
	
	Repeat for all added Actions...
	
	}
	*/
	if(typeof checkCustomAction=="function")
		checkCustomAction(theAction);
	}
updateJavscript();
}

//---------------------------------Finalize and Save-------------------------------

function completePage()
{
/*
Cuts the Crap and outputs the code,

*/

var saveString="";
killMenu();
if(document.getElementById('JFEdit|subMenu')){document.body.removeChild(document.getElementById('JFEdit|subMenu'))}
closeWindow("JFEdit|editorWindow");
closeWindow("JFEdit|objectProps");
closeWindow("JFEdit|menuClosed");
closeWindow("JFEdit|JSAction");

saveString+='<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">';
saveString+='<html><head><meta http-equiv="Content-Type" content="text/html;charset=utf-8" >';
saveString+="<title>"+document.title+"</title>";
saveString+='<script type="text/javascript" src="chainLoad.js">';
saveString+='</script>';
if(typeof customScriptSnap=="function")
	saveScring+=customScriptSnap();
if(customInternal)
{
saveString+=customInternal;
//saveString+="customInternal='"+customInternal+"';";
}
saveString+='<script type="text/javascript">';
saveString+='var inEdit=false;';
saveString+='if(typeof checkIfInEdit=="function")'
saveString+='checkIfInEdit();';
saveString+='</script></head><body>';
saveString+=document.body.innerHTML;
saveString+="\n</body></html>"
saveString=saveString.replace(/contenteditable=\"true\"/g,"");
//saveString=saveString.replace(/>/g,">\n");
//saveString=saveString.replace(/</g,"\n<");
var currentIndex=0;
var scriptArray = new Array();
var tmpS;
while(saveString.indexOf("id=",currentIndex)!=-1)
	{

	currentIndex=(saveString.indexOf("id=",currentIndex)+4)*1;

	
//Man this was annoying. When displaying innerHTML it does not show event listeners. I had to manually check for listenters and force them in!
if(document.getElementById(saveString.substring(currentIndex,currentIndex+12)))
	{
		if(document.getElementById(saveString.substring(currentIndex,currentIndex+12)).onclick)
			{
			scriptArray[0]=saveString.substring(0,currentIndex+13);
			tmpS=(document.getElementById(saveString.substring(currentIndex,currentIndex+12)).onclick).toString();
			scriptArray[1]=' onclick="' + tmpS.replace(/\"/g,"'") + '"';
			scriptArray[2]=saveString.substring(currentIndex+14)
			saveString=scriptArray[0]+scriptArray[1].replace(/\n/g,"").replace(/function/g,"").replace(/}/g,"").replace(/{/g,"").replace(/\(\)/g,"")+scriptArray[2]+inlineJSAdd;
			}
		if(document.getElementById(saveString.substring(currentIndex,currentIndex+12)).onmouseover)
			{
			scriptArray[0]=saveString.substring(0,currentIndex+13);
			tmpS=(document.getElementById(saveString.substring(currentIndex,currentIndex+12)).onmouseover).toString();
			scriptArray[1]=' onmouseover="' + tmpS.replace(/\"/g,"'") + '"';
			scriptArray[2]=saveString.substring(currentIndex+14)
			saveString=scriptArray[0]+scriptArray[1].replace(/\n/g,"").replace(/function/g,"").replace(/}/g,"").replace(/{/g,"").replace(/\(\)/g,"")+scriptArray[2]+inlineJSAdd;
			}
		if(document.getElementById(saveString.substring(currentIndex,currentIndex+12)).onmouseout)
			{
			scriptArray[0]=saveString.substring(0,currentIndex+13);
			tmpS=(document.getElementById(saveString.substring(currentIndex,currentIndex+12)).onmouseout).toString();
			scriptArray[1]=' onmouseout="' + tmpS.replace(/\"/g,"'") + '"';
			scriptArray[2]=saveString.substring(currentIndex+14)
			saveString=scriptArray[0]+scriptArray[1].replace(/\n/g,"").replace(/function/g,"").replace(/}/g,"").replace(/{/g,"").replace(/\(\)/g,"")+scriptArray[2]+inlineJSAdd;
			}
		}
	}
//createSimpleWindow('Copy This','<input type=text value="'+saveString+'"/>','theHTMLWin');

	createSimpleWindow('Copy This','Copy the code below into notepad and save as (File Name Here).htm<br /><textarea rows="9"  cols="34">'+saveString+'</textarea>','JFEdit|theHTMLWin');

setMenu();
}

function displayHTML()
{
var saveString="";
saveString=document.getElementById(selectedObject).innerHTML;
createSimpleWindow('Objects Inner Code','<textarea rows="9" id="theInnerHTML" cols="34">'+saveString+'</textarea><br /><input type="button" value="Change Content" onclick="changeHTML(\''+selectedObject+'\')"/>','JFEdit|innerHTMLWin');

}

function changeHTML(theID)
{
alert("Please note: This page is in loose mode. This means code must be standard or it will not work.");
document.getElementById(theID).innerHTML=document.getElementById("theInnerHTML").value;

}
function displayPageHTML()
{
alert('Warning, Advanced Feature. Everything MUST be enclosed in a tag for the editing to function.');
var saveString="";
saveString=document.body.innerHTML;
createSimpleWindow('Objects Inner Code','<textarea rows="9" id="theInnerHTML" cols="34">'+saveString+'</textarea><br /><input type="button" value="Change Content" onclick="changeBodyHTML()"/>','JFEdit|innerHTMLWin');

}
function changeBodyHTML(theID)
{
document.body.innerHTML=document.getElementById("theInnerHTML").value;
setMenu();
}

//--------------------------------Delete Object------------------------------
function deleteObject(theID)
{
if(document.getElementById(theID))
	document.body.removeChild(document.getElementById(theID));
}

//-----------------------------Addon Script----------------------------------
function addInScript()
{
loadjscssfile('addons/'+prompt('Please enter your script name (must be located in the scripts folder)','timers.js'),'js');
setTimeout("waitForLoad()",1500);
}
function waitForLoad()
{
if(typeof runTrigger=='function')
	runTrigger();
else
	alert("ADDON ERROR 01: The selected file could not be loaded. The trigger function was not found!");
}
