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

if(!silent)
	alert(menuName+" has been added to "+ menuArray.length);

subArray[menuArray.length*2] = new Array();
subArray[(menuArray.length*2)+1] = new Array();
menuArray[menuArray.length]=menuName;

}

function addSub(menuToAdd,subName,subAction, silent)
{
if(!silent)
	alert(subName +" has been added to "+ subArray[menuToAdd*2].length + " and action:" + subAction + " has been added to " + subArray[menuToAdd*2+1].length);
 
subArray[menuToAdd*2][subArray[menuToAdd*2].length]=subName;
subArray[(menuToAdd*2)+1][subArray[(menuToAdd*2)+1].length]=subAction;

}

function displayValues()
{
var menuIndex=menuArray.length;
var subIndex=0;
var holdDisplay="";

for(i=0;i<menuIndex;i++)
	{
	subIndex=subArray[i].length;
	holdDisplay+="<br />" + menuArray[i] + ": ";
	for(j=0;j<subIndex;j++)
		{
		holdDisplay += subArray[i*2][j]+", ";
		holdDisplay += subArray[(i*2)+1][j]+"; ";
		}
	
	
	}
	
document.write(holdDisplay);
}

function setMenu()
{
var menuConent = "&nbsp"

var newMenu = document.createElement("div"); 
newMenu.id = "theMenu";
newMenu.style.position="absolute";
newMenu.style.left=0;
newMenu.style.top=0;
newMenu.style.zIndex="1";
newMenu.style.backgroundColor="#CCCCCC";
newMenu.style.width="100%";

if(!IE)
	newMenu.style.opacity=.7;
else 
	newMenu.style.filter="alpha(opacity=70)";
	
for(i=0,over=0;i<menuArray.length;i++,over+=30)
	{
	menuConent+="<span onClick=openSub(" + i + ") style='position:relative;left:"+over+"'> "+ menuArray[i] +" </span> &nbsp;&nbsp";	
	}
	
newMenu.innerHTML=menuConent;

document.body.appendChild(newMenu);

}

function openSub(whichMenu)
{

closeSub();
var newSub = document.createElement("div");
var subContent = "";
newSub.id="subMenu";
newSub.style.position="absolute";
newSub.style.left=whichMenu*70+3;
newSub.style.top=15;
newSub.style.zIndex=2;
newSub.style.backgroundColor="#BBBBBB";
newSub.style.width=100;
newSub.onmouseout="closeSub('subMenu')";
for(i=0;i<subArray[whichMenu].length;i++)
	{
	subContent+="<div onMouseOver=\"this.style.backgroundColor='#7777FF'\" onClick=\""+subArray[whichMenu*2+1][i]+";closeSub("+whichMenu+")\" onMouseOut=\"this.style.backgroundColor='#BBBBBB'\">"+subArray[whichMenu*2][i]+" </div>";
	}

newSub.innerHTML=subContent;

document.body.appendChild(newSub);

}

function closeSub()
{
if(document.getElementById("subMenu"))
	setTimeout("if(document.getElementById('subMenu')){document.body.removeChild(document.getElementById('subMenu'))}",100);
}

function killMenu()
{
if(document.getElementById("theMenu"))
	setTimeout("if(document.getElementById('theMenu')){document.body.removeChild(document.getElementById('theMenu'))}",100);

}