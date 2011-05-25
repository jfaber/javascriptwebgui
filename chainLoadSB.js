var objectInEdit;
var codeNeeded;
var URLSplit=top.location.href;
URLSplit=URLSplit.split('?');
var IE = document.all?true:false;// Is the browser IE??

function selectObjectE(sendIt)
{
if(inEdit)
	selectObject(sendIt);
}

function loadjscssfile(filename, filetype){
 if (filetype=="js"){ //if filename is a external JavaScript file
  var fileref=document.createElement('script')
  fileref.setAttribute("type","text/javascript")
  fileref.setAttribute("src", filename)
 }
 else if (filetype=="css"){ //if filename is an external CSS file
  var fileref=document.createElement("link")
  fileref.setAttribute("rel", "stylesheet")
  fileref.setAttribute("type", "text/css")
  fileref.setAttribute("href", filename)
 }
 if (typeof fileref!="undefined")
  document.getElementsByTagName("head")[0].appendChild(fileref)
}

function checkIfInEdit()
{
	if(URLSplit[1]=='edit')
	{
	inEdit=true;
	loadjscssfile('contextMenu.js','js');	
	loadjscssfile('windowSys.js','js');
	loadjscssfile('menuSys.js','js');
	loadjscssfile('richText.js','js');
	loadjscssfile('editor.js','js');
	loadjscssfile('windowBuild.js','js');

		setTimeout("setUpMenu()",100);
	if(!IE)
		setTimeout('document.body.setAttribute("onmousemove","if(inEdit){getClickID(event)}")',500);
	else
		setTimeout('document.onmousemove=function(){if(inEdit){getClickID(event)}}',500);
	}
	//setTimeout('setUpPage()',1000);

}