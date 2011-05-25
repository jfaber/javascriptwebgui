/*
					By:				    Jeffrey E. Faber
					Purpose: 			Just returns arrays that are needed to write into
					Date Started: 		May 11th, 2010
					Date Completed:		*
					Version:			1.0
					Required libs:		windowSys.js, menuSys.js, richText.js
*/
function getRichEdit()
{
var theEditor="";
theEditor+='<table bgcolor="#C0C0C0" id="toolbar1">\n';
theEditor+='<tr id="JFEdit.ignore">\n';
theEditor+='<td>\n';
theEditor+='<div class="imagebutton" id="cut"><img class="image" src="cut.gif" alt="Cut" title="Cut"></div>\n';
theEditor+='</td>\n';
theEditor+='<td>\n';
theEditor+='<div class="imagebutton" id="copy"><img class="image" src="copy.gif" alt="Copy" title="Copy"></div>\n';
theEditor+='</td>\n';
theEditor+='<td>\n';
theEditor+='<div class="imagebutton" id="paste"><img class="image" src="paste.gif" alt="Paste" title="Paste"></div>\n';
theEditor+='<td>\n';
theEditor+='</td>\n';
theEditor+='<td>\n';
theEditor+='</td>\n';
theEditor+='<td>\n';
theEditor+='<div class="imagebutton" id="undo"><img class="image" src="undo.gif" alt="Undo" title="Undo"></div>\n';

theEditor+='</td>\n';
theEditor+='<td>\n';
theEditor+='<div class="imagebutton" id="redo"><img class="image" src="redo.gif" alt="Redo" title="Redo"></div>\n';
theEditor+='</td>\n';
theEditor+='<td>\n';
theEditor+='</td>\n';
theEditor+='<td>\n';
theEditor+='<div style="left: 10px;" class="imagebutton" id="createlink"><img class="image" src="link.gif" alt="Insert Link" title="Insert Link"></div>\n';
theEditor+='</td>\n';
theEditor+='<td>\n';
theEditor+='<div style="left: 10px;" class="imagebutton" id="createimage"><img class="image" src="image.gif" alt="Insert Image" title="Insert Image"></div>\n';
theEditor+='</td>\n';
theEditor+='<td>\n';
theEditor+='</td>\n';
theEditor+='<td>\n';
theEditor+='<div style="left: 10px;" class="imagebutton" id="createtable"><img class="image" src="table.gif" alt="Insert Table" title="Insert Table"></div>\n';
theEditor+='</td>\n';

theEditor+='</tr>\n';
theEditor+='</table>\n';
theEditor+='<br>\n';
theEditor+='<table bgcolor="#C0C0C0" id="toolbar2">\n';
theEditor+='<tr id="JFEdit.ignore">\n';
theEditor+='<td>\n';
theEditor+='<select id="formatblock" onchange="Select(this.id);">\n';
theEditor+='  <option value="<p>">Normal</option>\n';
theEditor+='  <option value="<p>">Paragraph</option>\n';
theEditor+='  <option value="<h1>">Heading 1 <H1></option>\n';
theEditor+='  <option value="<h2>">Heading 2 <H2></option>\n';
theEditor+='  <option value="<h3>">Heading 3 <H3></option>\n';
theEditor+='  <option value="<h4>">Heading 4 <H4></option>\n';
theEditor+='  <option value="<h5>">Heading 5 <H5></option>\n';
theEditor+='  <option value="<h6>">Heading 6 <H6></option>\n';
theEditor+='  <option value="<address>">Address <ADDR></option>\n';
theEditor+='  <option value="<pre>">Formatted <PRE></option>\n';

theEditor+='</select>\n';
theEditor+='</td>\n';
theEditor+='<td>\n';
theEditor+='<select id="fontname" onchange="Select(this.id);">\n';
  theEditor+='<option value="Font">Font</option>\n';
  theEditor+='<option value="Arial">Arial</option>\n';
  theEditor+='<option value="Courier">Courier</option>\n';
  theEditor+='<option value="Times New Roman">Times New Roman</option>\n';
theEditor+='</select>\n';

theEditor+='</td>\n';
theEditor+='<td>\n';
theEditor+='<select unselectable="on" id="fontsize" onchange="Select(this.id);">\n';
  theEditor+='<option value="Size">Size</option>\n';
  theEditor+='<option value="1">1</option>\n';
  theEditor+='<option value="2">2</option>\n';
  theEditor+='<option value="3">3</option>\n';
  theEditor+='<option value="4">4</option>\n';

theEditor+='  <option value="5">5</option>\n';
theEditor+='  <option value="6">6</option>\n';
  theEditor+='<option value="7">7</option>  \n';
theEditor+='</select>\n';
theEditor+='</td>\n';
theEditor+='<td>\n';
theEditor+='<div class="imagebutton" id="bold"><img class="image" src="bold.gif" alt="Bold" title="Bold"></div>\n';
theEditor+='</td>\n';
theEditor+='<td>\n';
theEditor+='<div class="imagebutton" id="italic"><img class="image" src="italic.gif" alt="Italic" title="Italic"></div>\n';
theEditor+='</td>\n';

theEditor+='<td>\n';
theEditor+='<div class="imagebutton" id="underline"><img class="image" src="underline.gif" alt="Underline" title="Underline"></div>\n';
theEditor+='</td>\n';
theEditor+='<td>\n';
theEditor+='</td>\n';
theEditor+='<td>\n';
theEditor+='<div style="left: 10px;" class="imagebutton" id="forecolor"><img class="image" src="forecolor.gif" alt="Text Color" title="Text Color"></div>\n';
theEditor+='</td>\n';
theEditor+='<td>\n';
theEditor+='<div style="left: 40px;" class="imagebutton" id="hilitecolor"><img class="image" src="backcolor.gif" alt="Background Color" title="Background Color"></div>\n';
theEditor+='</td>\n';
theEditor+='<td>\n';
theEditor+='</td>\n';
theEditor+='<td>\n';
theEditor+='<div style="left: 10px;" class="imagebutton" id="justifyleft"><img class="image" src="justifyleft.gif" alt="Align Left" title="Align Left"></div>\n';
theEditor+='</td>\n';
theEditor+='<td>\n';

theEditor+='<div style="left: 40px;" class="imagebutton" id="justifycenter"><img class="image" src="justifycenter.gif" alt="Center" title="Center"></div>\n';
theEditor+='</td>\n';
theEditor+='<td>\n';
theEditor+='<div style="left: 70px;" class="imagebutton" id="justifyright"><img class="image" src="justifyright.gif" alt="Align Right" title="Align Right"></div>\n';
theEditor+='</td>\n';
theEditor+='<td>\n';
theEditor+='</td>\n';
theEditor+='<td>\n';
theEditor+='<div style="left: 10px;" class="imagebutton" id="insertorderedlist"><img class="image" src="orderedlist.gif" alt="Ordered List" title="Ordered List"></div>\n';
theEditor+='</td>\n';
theEditor+='<td>\n';
theEditor+='<div style="left: 40px;" class="imagebutton" id="insertunorderedlist"><img class="image" src="unorderedlist.gif" alt="Unordered List" title="Unordered List"></div>\n';
theEditor+='</td>\n';
theEditor+='<td>\n';
theEditor+='</td>\n';
theEditor+='<td>\n';
theEditor+='<div style="left: 10px;" class="imagebutton" id="outdent"><img class="image" src="outdent.gif" alt="Outdent" title="Outdent"></div>\n';

theEditor+='</td>\n';
theEditor+='<td>\n';
theEditor+='<div style="left: 40px;" class="imagebutton" id="indent"><img class="image" src="indent.gif" alt="Indent" title="Indent"></div>\n';
theEditor+='</td>\n';
theEditor+='</tr>\n';
theEditor+='</table>\n';
theEditor+='<br>\n';
//theEditor+='<iframe id="edit" width="100%" height="200px"></iframe>\n';
theEditor+='<iframe width="250px" height="170px" id="colorpalette" src="colors.html" style="visibility:hidden; position: absolute;"></iframe>\n';

//theEditor+='<input type="checkbox" onclick="viewsource(this.checked)">\n';
//theEditor+='View HTML Source</input>\n';

theEditor+='<span style="display:none"><input checked  type="checkbox" disabled onclick="usecss(this.checked)">\n';
theEditor+='Use CSS:</input></span>\n';
//theEditor+='<input type="checkbox" onclick="readonly(this.checked)">\n';
//theEditor+='Read only</input>\n';
theEditor+=' Selected ID:<input type="text" disabled=true id="JFEdit.whatIsSelected" value="" \>\n';
theEditor+='<br /><span style="cursor:help" onclick="alert(\'Checking the following box allows you to edit any section of the page.\')" ><strong>Make Editable?:</strong></span><input type="checkbox" id="JFEdit.canEditYN" onclick="makeEditable(this.checked)" \><span style="cursor:help" onclick="alert(\'To move an object: press and hold the ctrl key and click and hold the left click button, while holding both, drag the object to desired location.\')" >Hold Ctrl to move objects</span\n';
 
theEditor+='&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="http://validator.w3.org/check?uri=referer"><img id="JFEdit.W3" style="border:0px" src="http://www.w3.org/Icons/valid-html401" alt="Valid HTML 4.01 Transitional" height="18" width="50"></a>';


return theEditor;
}

function getPageProps()
{
var buildWindow=""

buildWindow+= '<table style="border:0" id="JFEdit.PPTable">\n ';
	buildWindow+='<div id="JFEdit.PPDiv" >';
	buildWindow+=' <tr id="JFEdit.ignore">\n ';
		buildWindow+=' <td id="JFEdit.ignore" style="cursor:help" onclick="alert(\'This is the pages title. It appears at the top and on the tab.\')">\n ';
		buildWindow+='Page Title:\n ';
		buildWindow+=' </td>\n ';
		buildWindow+=' <td id="JFEdit.ignore">\n ';
		buildWindow+=' <input type="text" id="JFEdit.PPtitle" value="0" style="width:300px" onchange="changePageProps(this.id)"/>\n ';
		buildWindow+=' </td>\n ';
	buildWindow+=' </tr>\n ';
	
	buildWindow+=' <tr id="JFEdit.ignore">\n ';
		buildWindow+=' <td id="JFEdit.ignore" style="cursor:help" onclick="alert(\'This is the pages background color.\')">\n ';
		buildWindow+='Background Color:\n ';
		buildWindow+=' </td>\n ';
		buildWindow+=' <td id="JFEdit.ignore">\n ';
		buildWindow+=' <input type="text" id="JFEdit.PPbgColor" value="0" style="width:300px" onchange="changePageProps(this.id)"/>\n ';
		buildWindow+=' </td>\n ';
	buildWindow+=' </tr>\n ';	
	
	buildWindow+=' <tr id="JFEdit.ignore">\n ';
		buildWindow+=' <td id="JFEdit.ignore" style="cursor:help" onclick="alert(\'This is the pages background image.\')">\n ';
		buildWindow+='Background Image:\n ';
		buildWindow+=' </td>\n ';
		buildWindow+=' <td id="JFEdit.ignore">\n ';
		buildWindow+=' <input type="text" id="JFEdit.PPbgImage" value="0" style="width:300px" onchange="changePageProps(this.id)"/>\n ';
		buildWindow+=' </td>\n ';
	buildWindow+=' </tr>\n ';	

	buildWindow+=' <tr id="JFEdit.ignore">\n ';
		buildWindow+=' <td id="JFEdit.ignore" style="cursor:help" onclick="alert(\'The pages background Image will NOT repeat\')">\n ';
		buildWindow+='BGImage No Repeat:\n ';
		buildWindow+=' </td>\n ';
		buildWindow+=' <td id="JFEdit.ignore">\n ';
		buildWindow+=' <input type="radio" name="bgRepeat" value="No Repeat" id="JFEdit.PPnoRepeat" onchange="changePageProps(this.id)"/>\n ';
		buildWindow+=' </td>\n ';
	buildWindow+=' </tr>\n ';		
	
	buildWindow+=' <tr id="JFEdit.ignore">\n ';
		buildWindow+=' <td id="JFEdit.ignore" style="cursor:help" onclick="alert(\'The pages background Image will repeat both horizontaly and verticly.\')">\n ';
		buildWindow+='BGImage All Repeat:\n ';
		buildWindow+=' </td>\n ';
		buildWindow+=' <td id="JFEdit.ignore">\n ';
		buildWindow+=' <input type="radio" name="bgRepeat" value="Repeat" id="JFEdit.PPallRepeat" onchange="changePageProps(this.id)"/>\n ';
		buildWindow+=' </td>\n ';
	buildWindow+=' </tr>\n ';		

	buildWindow+=' <tr id="JFEdit.ignore">\n ';
		buildWindow+=' <td id="JFEdit.ignore" style="cursor:help" onclick="alert(\'The pages background Image will repeat both horizontaly.\')">\n ';

		buildWindow+='BGImage X Repeat:\n ';
		buildWindow+=' </td>\n ';
		buildWindow+=' <td id="JFEdit.ignore">\n ';
		buildWindow+=' <input type="radio" name="bgRepeat" value="xRepeat" id="JFEdit.PPxRepeat" onchange="changePageProps(this.id)"/>\n ';
		buildWindow+=' </td>\n ';
	buildWindow+=' </tr>\n ';		

	buildWindow+=' <tr id="JFEdit.ignore">\n ';
		buildWindow+=' <td id="JFEdit.ignore" style="cursor:help" onclick="alert(\'The pages background Image will repeat verticly.\')">\n ';

		buildWindow+='BGImage Y Repeat:\n ';
		buildWindow+=' </td>\n ';
		buildWindow+=' <td id="JFEdit.ignore">\n ';
		buildWindow+=' <input type="radio" name="bgRepeat" value="yRepeat" id="JFEdit.PPyRepeat" onchange="changePageProps(this.id)"/>\n ';
		buildWindow+=' </td>\n ';
	buildWindow+=' </tr>\n ';		

	buildWindow+=' <tr id="JFEdit.ignore">\n ';
		buildWindow+=' <td id="JFEdit.ignore" style="cursor:help" onclick="alert(\'When the page scrolls if this is checked, the background will stay fixed behind the page.\')">\n ';

		buildWindow+='BGImage Fixed:\n ';
		buildWindow+=' </td>\n ';
		buildWindow+=' <td id="JFEdit.ignore">\n ';
		buildWindow+=' <input type="checkbox" name="bgFixed" value="yRepeat" id="JFEdit.PPfixed" onchange="changePageProps(this.id)"/>\n ';
		buildWindow+=' </td>\n ';
	buildWindow+=' </tr>\n ';		
	
	buildWindow+=' <tr id="JFEdit.ignore">\n ';
		buildWindow+=' <td style="text-align:center">\n ';
		if(IE)
			buildWindow+=' <input id="JFEdit.ignore" type="button" value="Apply Changes" onclick=""/>\n ';

		buildWindow+=' </td>\n ';
	buildWindow+=' </tr>\n ';
	
buildWindow+=' </table>\n ';
	buildWindow+='</div>';


return buildWindow;
}
function getPropsWin()
{
var buildWindow=""

buildWindow+= '<table style="border:0" id="JFEdit.propTable">\n ';

	buildWindow+=' <tr id="JFEdit.ignore">\n ';
		buildWindow+=' <td id="JFEdit.ignore" style="cursor:help" onclick="alert(\'If Checked, all updates will be in Percent.\')">\n ';
		buildWindow+='Percent?:\n ';
		buildWindow+=' </td>\n ';
		buildWindow+=' <td id="JFEdit.ignore">\n ';
		buildWindow+=' <input type="checkbox" id="JFEdit.propIsPercent" onchange="changeProp(this.id)"/>\n ';
		buildWindow+=' </td>\n ';
	buildWindow+=' </tr>\n ';


	buildWindow+=' <tr id="JFEdit.ignore">\n ';
		buildWindow+=' <td id="JFEdit.ignore" style="cursor:help" onclick="alert(\'This is the distance that object is from the top of the page.\')">\n ';
		buildWindow+='Distance from Top:\n ';
		buildWindow+=' </td>\n ';
		buildWindow+=' <td id="JFEdit.ignore">\n ';
		buildWindow+=' <input type="text" id="JFEdit.propTop" value="0" style="width:50px" onchange="changeProp(this.id)"/>\n ';
		buildWindow+=' </td>\n ';
	buildWindow+=' </tr>\n ';
	
	buildWindow+=' <tr id="JFEdit.ignore">\n ';
		buildWindow+=' <td id="JFEdit.ignore" style="cursor:help" onclick="alert(\'This is the distance that object is from the left of the page.\')">\n ';
		buildWindow+='		Distance from Left:\n ';
		buildWindow+=' </td>\n ';
		buildWindow+=' <td id="JFEdit.ignore">\n ';
		buildWindow+=' <input type="text" id="JFEdit.propLeft" value="0" style="width:50px" onchange="changeProp(this.id)" />\n ';
		buildWindow+=' </td>\n ';
	buildWindow+=' </tr>\n ';
	
	buildWindow+=' <tr id="JFEdit.ignore">\n ';
		buildWindow+=' <td id="JFEdit.ignore" style="cursor:help" onclick="alert(\'This is the height of the object.\')">\n ';
		buildWindow+='Height:\n ';
		buildWindow+=' </td>\n ';
		buildWindow+=' <td id="JFEdit.ignore">\n ';
		buildWindow+=' <input type="text" id="JFEdit.propHeight" value="0" style="width:50px" onchange="changeProp(this.id)" />\n ';
		buildWindow+=' </td>\n ';
	buildWindow+=' </tr>\n ';
	
	buildWindow+=' <tr id="JFEdit.ignore">\n ';
		buildWindow+=' <td id="JFEdit.ignore" style="cursor:help" onclick="alert(\'This is the width of the object.\')">\n ';
		buildWindow+='Width:\n ';
		buildWindow+=' </td>\n ';
		buildWindow+=' <td id="JFEdit.ignore">\n ';
		buildWindow+=' <input type="text" id="JFEdit.propWidth" value="0" style="width:50px" onchange="changeProp(this.id)" />\n ';
		buildWindow+=' </td>\n ';
	buildWindow+=' </tr>\n ';

	buildWindow+=' <tr id="JFEdit.ignore">\n ';
		buildWindow+=' <td id="JFEdit.ignore" style="cursor:help" onclick="alert(\'This is the size border of the object.\')">\n ';
		buildWindow+='Border:\n ';
		buildWindow+=' </td>\n ';
		buildWindow+=' <td id="JFEdit.ignore">\n ';
		buildWindow+=' <input type="text" id="JFEdit.propBorder" value="0" style="width:50px" onchange="changeProp(this.id)"/>\n ';
		buildWindow+=' </td>\n ';
	buildWindow+=' </tr>\n ';	
	
	buildWindow+=' <tr id="JFEdit.ignore">\n ';
		buildWindow+=' <td id="JFEdit.ignore" style="cursor:help" onclick="alert(\'This is the source or path of the image.\')">\n ';
		buildWindow+='Source(Image Only):\n ';
		buildWindow+=' </td>\n ';
		buildWindow+=' <td id="JFEdit.ignore">\n ';
		buildWindow+=' <input type="text" id="JFEdit.propSrc" value="" style="width:50px" onchange="changeProp(this.id)" />\n ';
		buildWindow+=' </td>\n ';
	buildWindow+=' </tr>\n ';
	
		buildWindow+=' <tr id="JFEdit.ignore">\n ';
		buildWindow+=' <td id="JFEdit.ignore" style="cursor:help" onclick="alert(\'This is the text displayed if the image did not load.\')">\n ';
		buildWindow+='Alt text(image Only)\n ';
		buildWindow+=' </td>\n ';
		buildWindow+=' <td id="JFEdit.ignore">\n ';
		buildWindow+=' <input type="text" id="JFEdit.propAlt" value="" style="width:50px" onchange="changeProp(this.id)" />\n ';
		buildWindow+=' </td>\n ';
	buildWindow+=' </tr>\n ';	
	
	buildWindow+=' <tr id="JFEdit.ignore">\n ';
		buildWindow+=' <td id="JFEdit.ignore" style="cursor:help" onclick="alert(\'This is how clear an object is.\')">\n ';
		buildWindow+='Transparancy/Opacity%\n ';
		buildWindow+=' </td>\n ';
		buildWindow+=' <td id="JFEdit.ignore">\n ';
		buildWindow+=' <input type="text" id="JFEdit.propOpacity" value="100" style="width:50px" onchange="changeProp(this.id)" />\n ';
		buildWindow+=' </td>\n ';
	buildWindow+=' </tr>\n ';	
	
		buildWindow+=' <tr id="JFEdit.ignore">\n ';
		buildWindow+=' <td id="JFEdit.ignore"style="cursor:help" onclick="alert(\'This decides if the object is fixed or can move, when you check the box it will be removed from the flow of the document, unchecking puts it back to its orginal position.\')">\n ';
		buildWindow+='Absolute?(can be moved):\n ';
		buildWindow+=' </td>\n ';
		buildWindow+=' <td id="JFEdit.ignore">\n ';
		buildWindow+=' <input type="checkbox" id="JFEdit.propPosition" style="width:50px" onchange="changeProp(this.id)" />\n ';
		buildWindow+=' </td>\n ';
	buildWindow+=' </tr>\n ';	
	
	/*
	buildWindow+=' <tr id="JFEdit.ignore">\n ';
		buildWindow+=' <td id="JFEdit.ignore">\n ';
			buildWindow='Absolute?(can be moved):<input type="text" id="JFEdit.propPosition" /> \n';
 		buildWindow+=' </td>\n ';
	buildWindow+=' </tr>\n ';	 */
	
	buildWindow+=' <tr id="JFEdit.ignore">\n ';
		buildWindow+=' <td id="JFEdit.ignore style="cursor:help" onclick="alert(\'What object you have selected.\')">\n ';
		buildWindow+='Selected Object\n ';
		buildWindow+=' </td>\n ';
		buildWindow+=' <td id="JFEdit.ignore">\n ';
		buildWindow+=' <input type="text" disabled id="JFEdit.propSelectedObject" style="width:50px" />\n ';
		buildWindow+=' </td>\n ';
	buildWindow+=' </tr>\n ';	
	
	buildWindow+=' <tr id="JFEdit.ignore">\n ';
		buildWindow+=' <td style="text-align:center">\n ';
		buildWindow+=' <input type="button" value="Update Info" onclick="updateProps()"/>\n ';
		if(IE)
			buildWindow+=' <input id="JFEdit.ignore" type="button" value="Apply Changes" onclick=""/>\n ';
		buildWindow+=' </td>\n ';
	buildWindow+=' </tr>\n ';
buildWindow+=' </table>\n ';

return buildWindow;

}
function getJSWin()
{
theWindowCode="";
theWindowCode+='<div id="JFEdit.JSDiv">';
theWindowCode+='<input type="button" style="background-color:red" id="JFEdit.JStheClick" onclick="addScript(\'click\')" value="Action After Clicking" /><br />';
theWindowCode+='<input type="button" style="background-color:red" id="JFEdit.JStheOver" onclick="addScript(\'mouseover\')" value="Action After Moving the Mouse Over" /><br />';
theWindowCode+='<input type="button" style="background-color:red" id="JFEdit.JStheOut" onclick="addScript(\'mouseout\')" value="Action After Moving the Mouse Off" /><br />';
theWindowCode+='</div>';
return theWindowCode;
}
function getJSActionWin(theAction)
{
theWindowCode="";
theWindowCode+='<div id="JFEdit.JSActionDiv">';
theWindowCode+='Select one below and then pressed finished.<br />';
theWindowCode+='<input type="button" id="JFEdit.JSDisplayMessage" onclick="theJSAction=\'alert\'" value="Display A Message" /><br />';
theWindowCode+='<input type="button" id="JFEdit.JSDisplayMessage" onclick="theJSAction=\'link\'" value="Link to a Page" /><br />';
theWindowCode+='<input type="button" id="JFEdit.JSDisplayMessage" onclick="theJSAction=\'resize\'" value="Resize the object" /><br />';
theWindowCode+='<input type="button" id="JFEdit.JSDisplayMessage" onclick="theJSAction=\'changeSource\'" value="Change the image" /><br />';
theWindowCode+='<input type="button" id="JFEdit.JSDisplayMessage" onclick="theJSAction=\'changeBG\'" value="Change BG color" /><br />';
theWindowCode+='<input type="button" id="JFEdit.JSDisplayMessage" onclick="theJSAction=\'fontSize\'" value="Change font size" /><br />';
theWindowCode+='<input type="button" id="JFEdit.JSDisplayMessage" onclick="theJSAction=\'fontColor\'" value="Change font color" /><br />';
if(typeof addCustomAction=="function")//This allows addons to add another Custom JS action. The function addCustomAction needs to return a string with buttons in it.
	theWindowCode+=addCustomAction();
theWindowCode+='<input type="button" id="JFEdit.JSDisplayMessage" onclick="theJSAction=\'custom\'" value="Custom(Advanced)" /><br />';
theWindowCode+='<input type="button" id="JFEdit.JSDisplayMessage" onclick="theJSAction=\'clear\'" value="Clear All Actions)" /><br />';

theWindowCode+='<br /><input type="button" id="JFEdit.JSDisplayMessage" onClick="completeAction(\''+theAction+'\');removeBlockingWindow();closeWindow(\'JFEdit.JSAction\')" value="Finished" /><br />';

theWindowCode+='</div>';
return theWindowCode;
}