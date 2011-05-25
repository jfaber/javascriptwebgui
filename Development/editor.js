var idInc=0;
var selectedObject;
function openRichEdit(theID)
{
objectInEdit=theID;
if(!document.getElementById("editorWindow"))
createDetailedWindow(200, 200, 650, 130, "Text Editor", "#000000", "#4444FF", true, true, false, true, "#3333FF", "#000000", "#C0C0C0", "#000000", theEditor, "editorWindow");

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
addSub(1,"Div","createObject('div','object'+idInc);idInc++;", true);
addSub(1,"Span","createObject('span','object'+idInc);idInc++;", true);

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


}

function makeEditable(isEdit)
{
if(isEdit)
	document.getElementById(document.getElementById("whatIsSelected").value).contentEditable=true;
else
	document.getElementById(document.getElementById("whatIsSelected").value).contentEditable=false;

}
function createObject(objectType,objectID)
{
//---------Containers----------
if(document.getElementById(objectID))
	alert("Error: That objectID is in use already.");
	
else if(objectType=="div"||objectType=="span")
	{
	
	var newObject = document.createElement(objectType);
	
	newObject.id=objectID;
	newObject.style.position="absolute";
	newObject.style.left=150;
	newObject.style.top=150;
	newObject.innerHTML=objectID;
	newObject.contenteditable=true;
	document.body.appendChild(newObject);
	
	document.getElementById(objectID).setAttribute("onclick","selectObject(this.id);");

	}


}