var objectInEdit;
var codeNeeded;
var idInc=10000;	
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
	while(document.getElementById("object."+idInc))
		idInc++;
	inEdit=true;
	loadjscssfile('jq.js','js'); // Jquary!
	loadjscssfile('windowSys.css','css'); // Provides Styles in Plain Text.
	loadjscssfile('contextMenu.js','js');//Provides Context Menu Support
	loadjscssfile('windowSys.js','js'); //Provides Window Support and Movement
	loadjscssfile('menuSys.js','js'); //Provides TopBar Menu Support
	loadjscssfile('richText.js','js'); //Provides Rich Text Editing
	loadjscssfile('editor.js','js'); //Provides Complete Edititing Capability
	loadjscssfile('windowBuild.js','js'); // Provides code for dynamic window creation
	loadjscssfile('styleInsert.js','js'); // Provides Styles in Plain Text.

//----------------------Add Custom Scripts Here-----------------------------
	//See addonReadMe.js for details
	

//--------------------------------------------------------------------------	
		setTimeout("setUpMenu()",500); //inititates menu
		setTimeout("setUpContext()",500);//initiates context
		
//----------------------Add Custom Triggers Here----------------------------


//--------------------------------------------------------------------------		
	if(!IE)
		setTimeout('document.body.setAttribute("onmousemove","if(inEdit){getClickID(event)}")',500);
	else
		setTimeout('document.onmousemove=function(){if(inEdit){getClickID(event)}}',500);
	}
	//setTimeout('setUpPage()',1000);

}
