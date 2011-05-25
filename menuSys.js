/*
					By:				    Jeffrey E. Faber
					Purpose: 			Creates and maintaints menus for windows.
					Date Started: 		May 9th, 2010
					Date Completed:		*
					Version:			1.0

*/

var menuArray = new Array();
var subArray = new Array();
var subIndex=0;
document.onmousedown=closeSub;

function addMenu(menuName, silent)
{
// Adds an Item to the menuArray Array and makes an array out of the associated sub array of subArray
if(!silent)
	alert(menuName+" has been added to "+ menuArray.length);

subArray[menuArray.length*2] = new Array();
subArray[(menuArray.length*2)+1] = new Array();
menuArray[menuArray.length]=menuName;

}

function addSub(menuToAdd,subName,subAction, silent)
{
// Adds an item to the display and action part of the subArray display is 2*menuArray index and action is display+1
if(!silent)
	alert(subName +" has been added to "+ subArray[menuToAdd*2].length + " and action:" + subAction + " has been added to " + subArray[menuToAdd*2+1].length);
 
subArray[menuToAdd*2][subArray[menuToAdd*2].length]=subName;
subArray[(menuToAdd*2)+1][subArray[(menuToAdd*2)+1].length]=subAction;

}

function setMenu()
{
// Places the menu up top
var menuConent = "&nbsp"

var newMenu = document.createElement("div"); 
newMenu.id = "JFEdit.theMenu";
newMenu.style.position="absolute";
newMenu.style.left=0+"px";
newMenu.style.top=0+"px";
newMenu.style.zIndex="10";
newMenu.style.backgroundColor="#BBBBFF";
newMenu.style.width="100%";
newMenu.style.border="1px solid #AAAAAA";
if(!IE)
    newMenu.setAttribute("class", "dropShadow");

if(!IE)
	newMenu.style.opacity=.7;
else 
	newMenu.style.filter="alpha(opacity=70)";
	
for(i=0,over=0;i<menuArray.length;i++,over+=30)
	{
	menuConent+="<span id='JFEdit.subMenu2' onClick=openSub(" + i + ") style='cursor:pointer; position:relative;left:"+over+"px'> "+ menuArray[i] +" </span> &nbsp;&nbsp";	
	}
	
newMenu.innerHTML=menuConent;

document.body.appendChild(newMenu);

}


function openSub(whichMenu)
{
//Opens a sub menu by creating the said object.
closeSub();
var newSub = document.createElement("div");
var subContent = "";
newSub.id="JFEdit.subMenu";
newSub.style.position="absolute";
newSub.style.left=(whichMenu*70+3)+"px";
newSub.style.top=15+"px";
newSub.style.zIndex=11;
newSub.style.backgroundColor="#CCCCFF";
newSub.style.width=150+"px";
newSub.onmouseout="closeSub('JFEdit.subMenu')";
for(i=0;i<subArray[whichMenu].length;i++)
	{
	if(subArray[whichMenu*2][i]!=undefined&&subArray[whichMenu*2][i]!="Blank")
		subContent+="<div style=\"cursor:pointer;border:1px solid #333333;\" id=\"JFEdit.main"+i+"\" onMouseOver=\"this.style.backgroundColor='#7777FF'\" onClick=\""+subArray[whichMenu*2+1][i]+";closeSub("+whichMenu+")\" onMouseOut=\"this.style.backgroundColor='#CCCCFF'\">"+subArray[whichMenu*2][i]+" </div>";
	}

newSub.innerHTML=subContent;

document.body.appendChild(newSub);

}

function closeSub()
{
//destroys sub menu
if(document.getElementById("JFEdit.subMenu"))
	setTimeout("if(document.getElementById('JFEdit.subMenu')){document.body.removeChild(document.getElementById('JFEdit.subMenu'))}",100);
}

function killMenu()
{
//destroys the whole menu bar
if(document.getElementById("JFEdit.theMenu"))
	{
	document.body.removeChild(document.getElementById('JFEdit.theMenu'));
	}
}

