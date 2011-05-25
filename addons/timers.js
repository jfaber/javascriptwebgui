

function runTrigger()
{
customInternal='<script type="text/javascript" src="windowSys.js"></script>';
customInternal+='<script type="text/javascript" src="scripts/timers.js"></script>';
inlineJSAdd="(  )";
}

function addCustomAction()
{
var sendIt='<input type="button" id="JFEdit|popATimer" onclick="theJSAction=\'popTimer\'" value="Open A Timer" /><br />';
return sendIt;

}

function checkCustomAction(theAction)
{
	
	if(theJSAction=='popTimer')
		{
		eval('document.getElementById(selectedObject).'+theAction+'=function(){openTimer()}');
		}

	
}

function openTimer()
{
var theTitle=prompt("Enter a client Name.","");
if(theTitle!=null)
	{
	var theHTMLCode='';
	theHTMLCode+='<span id="'+theTitle+'theHour">0</span> Hours <span id="'+theTitle+'theMin">0</span> Min <span id="'+theTitle+'theSec">0</span> Sec ';
	theHTMLCode+='<br /> <input type="button" id="'+theTitle+'SS" value="Start" onclick="if(this.value==\'Start\'){this.value=\'Stop\'; incrementTimer(\''+theTitle+'\')}else{this.value=\'Start\'}" /> <br /> time / hour: <span style="background-color:yellow" id="'+theTitle+'theDiv"></span>';

	createSimpleWindow(theTitle,theHTMLCode,theTitle);
	}
}

function incrementTimer(theIDs)
{
if(document.getElementById(theIDs+"SS"))
{
	if(document.getElementById(theIDs+"SS").value=="Stop")
		{
		setTimeout("incrementTimer('"+theIDs+"')",1000);
		document.getElementById(theIDs+"theSec").innerHTML++;

		var hold=document.getElementById(theIDs+"theMin").innerHTML/60+document.getElementById(theIDs+"theHour").innerHTML*1+document.getElementById(theIDs+"theSec").innerHTML/60/60;
		document.getElementById(theIDs+"theDiv").innerHTML=(Math.ceil(hold*4))/4;
		if(document.getElementById(theIDs+"theSec").innerHTML>=60)
			{
			document.getElementById(theIDs+"theSec").innerHTML-=60;
			document.getElementById(theIDs+"theMin").innerHTML++;
			}
		if(document.getElementById(theIDs+"theMin").innerHTML>=60)
			{
			document.getElementById(theIDs+"theMin").innerHTML-=60;
			document.getElementById(theIDs+"theHour").innerHTML++;
			}
		}
	}
}