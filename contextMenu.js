
var optionArray = new Array();
var actionArray = new Array();
var contextIndex=0;
if(!IE)
	document.body.oncontextmenu=openContext;
else
	document.oncontextmenu = openContext;

//This function will add an item to the context menu
function addItemContext(option, action, silent)
{
if(!silent)
	alert(option+" added to context menu successfully with the action: "+action);
optionArray[contextIndex]=option;
actionArray[contextIndex]=action;
contextIndex++;
}

function openContext(e)
{

if(objectCanMove)
	{
		objectCanMove==false;
		return true;
	}
	//This function will open a context menu

closeContext();
var newSub = document.createElement("div");
var subContent = "";
newSub.id="JFEdit.context";
newSub.style.position="absolute";
newSub.style.left=posx+"px";
newSub.style.top=posy+"px";
newSub.style.zIndex=11;
newSub.style.backgroundColor="#CCCCFF";
//newSub.style.width=150+"px";
newSub.style.border="1px solid #333333";
for(i=0;i<optionArray.length;i++)
	{
	if(optionArray[i]!=undefined&&optionArray[i]!="Blank")
		subContent+="<div  id=\"JFEdit.context\" onmouseover=\"this.style.backgroundColor='#7777FF'\" onmousedown=\""+actionArray[i]+";closeContext()\" onmouseout=\"this.style.backgroundColor='#CCCCFF'\">"+optionArray[i]+" </div>";
	}

newSub.innerHTML=subContent;

document.body.appendChild(newSub);

//alert("Here I am!");
return false;
}

function closeContext()
{
//destroys Context menu
if(document.getElementById("JFEdit.context"))
	setTimeout("if(document.getElementById('JFEdit.context')){document.body.removeChild(document.getElementById('JFEdit.context'))}",100);
}
