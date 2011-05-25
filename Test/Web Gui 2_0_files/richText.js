var theEditor="";
theEditor+='<table bgcolor="#C0C0C0" id="toolbar1">\n';
theEditor+='<tr>\n';
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
theEditor+='<div style="left: 10;" class="imagebutton" id="createlink"><img class="image" src="link.gif" alt="Insert Link" title="Insert Link"></div>\n';
theEditor+='</td>\n';
theEditor+='<td>\n';
theEditor+='<div style="left: 10;" class="imagebutton" id="createimage"><img class="image" src="image.gif" alt="Insert Image" title="Insert Image"></div>\n';
theEditor+='</td>\n';
theEditor+='<td>\n';
theEditor+='</td>\n';
theEditor+='<td>\n';
theEditor+='<div style="left: 10;" class="imagebutton" id="createtable"><img class="image" src="table.gif" alt="Insert Table" title="Insert Table"></div>\n';
theEditor+='</td>\n';

theEditor+='</tr>\n';
theEditor+='</table>\n';
theEditor+='<br>\n';
theEditor+='<table bgcolor="#C0C0C0" id="toolbar2">\n';
theEditor+='<tr>\n';
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
theEditor+='<div style="left: 10;" class="imagebutton" id="forecolor"><img class="image" src="forecolor.gif" alt="Text Color" title="Text Color"></div>\n';
theEditor+='</td>\n';
theEditor+='<td>\n';
theEditor+='<div style="left: 40;" class="imagebutton" id="hilitecolor"><img class="image" src="backcolor.gif" alt="Background Color" title="Background Color"></div>\n';
theEditor+='</td>\n';
theEditor+='<td>\n';
theEditor+='</td>\n';
theEditor+='<td>\n';
theEditor+='<div style="left: 10;" class="imagebutton" id="justifyleft"><img class="image" src="justifyleft.gif" alt="Align Left" title="Align Left"></div>\n';
theEditor+='</td>\n';
theEditor+='<td>\n';

theEditor+='<div style="left: 40;" class="imagebutton" id="justifycenter"><img class="image" src="justifycenter.gif" alt="Center" title="Center"></div>\n';
theEditor+='</td>\n';
theEditor+='<td>\n';
theEditor+='<div style="left: 70;" class="imagebutton" id="justifyright"><img class="image" src="justifyright.gif" alt="Align Right" title="Align Right"></div>\n';
theEditor+='</td>\n';
theEditor+='<td>\n';
theEditor+='</td>\n';
theEditor+='<td>\n';
theEditor+='<div style="left: 10;" class="imagebutton" id="insertorderedlist"><img class="image" src="orderedlist.gif" alt="Ordered List" title="Ordered List"></div>\n';
theEditor+='</td>\n';
theEditor+='<td>\n';
theEditor+='<div style="left: 40;" class="imagebutton" id="insertunorderedlist"><img class="image" src="unorderedlist.gif" alt="Unordered List" title="Unordered List"></div>\n';
theEditor+='</td>\n';
theEditor+='<td>\n';
theEditor+='</td>\n';
theEditor+='<td>\n';
theEditor+='<div style="left: 10;" class="imagebutton" id="outdent"><img class="image" src="outdent.gif" alt="Outdent" title="Outdent"></div>\n';

theEditor+='</td>\n';
theEditor+='<td>\n';
theEditor+='<div style="left: 40;" class="imagebutton" id="indent"><img class="image" src="indent.gif" alt="Indent" title="Indent"></div>\n';
theEditor+='</td>\n';
theEditor+='</tr>\n';
theEditor+='</table>\n';
theEditor+='<br>\n';
//theEditor+='<iframe id="edit" width="100%" height="200px"></iframe>\n';
theEditor+='<iframe width="250" height="170" id="colorpalette" src="colors.html" style="visibility:hidden; position: absolute;"></iframe>\n';


//theEditor+='<input type="checkbox" onclick="viewsource(this.checked)">\n';
//theEditor+='View HTML Source</input>\n';

theEditor+='<input checked type="checkbox" onclick="usecss(this.checked)">\n';
theEditor+='Use CSS:</input>\n';
//theEditor+='<input type="checkbox" onclick="readonly(this.checked)">\n';
//theEditor+='Read only</input>\n';
theEditor+=' Selected ID:<input type="text" disabled=true id="whatIsSelected" value="" \>\n';
theEditor+='Make Editable?:<input type="checkbox" id="canEditYN" onclick="makeEditable(this.checked)" \>Hold Shift while in edit mode to move objects\n';
theEditor+='';


var command = "";

function InitToolbarButtons() {
  var kids = document.getElementsByTagName('DIV');

  for (var i=0; i < kids.length; i++) {
    if (kids[i].className == "imagebutton") {
      kids[i].onmouseover = tbmouseover;
      kids[i].onmouseout = tbmouseout;
      kids[i].onmousedown = tbmousedown;
      kids[i].onmouseup = tbmouseup;
      kids[i].onclick = tbclick;
    }
  }
}

function tbmousedown(e)
{
  var evt = e ? e : window.event; 

  this.firstChild.style.left = 2;
  this.firstChild.style.top = 2;
  this.style.border="inset 2px";
  if (evt.returnValue) {
    evt.returnValue = false;
  } else if (evt.preventDefault) {
    evt.preventDefault( );
  } else {
    return false;
  }
}

function tbmouseup()
{
  this.firstChild.style.left = 1;
  this.firstChild.style.top = 1;
  this.style.border="outset 2px";
}

function tbmouseout()
{
  this.style.border="solid 2px #C0C0C0";
}

function tbmouseover()
{
  this.style.border="outset 2px";
}

  function insertNodeAtSelection(win, insertNode)
  {
      // get current selection
      var sel = win.getSelection();

      // get the first range of the selection
      // (there's almost always only one range)
      var range = sel.getRangeAt(0);

      // deselect everything
      sel.removeAllRanges();

      // remove content of current selection from document
      range.deleteContents();

      // get location of current selection
      var container = range.startContainer;
      var pos = range.startOffset;

      // make a new range for the new selection
      range=document.createRange();

      if (container.nodeType==3 && insertNode.nodeType==3) {

        // if we insert text in a textnode, do optimized insertion
        container.insertData(pos, insertNode.nodeValue);

        // put cursor after inserted text
        range.setEnd(container, pos+insertNode.length);
        range.setStart(container, pos+insertNode.length);

      } else {


        var afterNode;
        if (container.nodeType==3) {

          // when inserting into a textnode
          // we create 2 new textnodes
          // and put the insertNode in between

          var textNode = container;
          container = textNode.parentNode;
          var text = textNode.nodeValue;

          // text before the split
          var textBefore = text.substr(0,pos);
          // text after the split
          var textAfter = text.substr(pos);

          var beforeNode = document.createTextNode(textBefore);
          afterNode = document.createTextNode(textAfter);

          // insert the 3 new nodes before the old one
          container.insertBefore(afterNode, textNode);
          container.insertBefore(insertNode, afterNode);
          container.insertBefore(beforeNode, insertNode);

          // remove the old node
          container.removeChild(textNode);

        } else {

          // else simply insert the node
          afterNode = container.childNodes[pos];
          container.insertBefore(insertNode, afterNode);
        }

        range.setEnd(afterNode, 0);
        range.setStart(afterNode, 0);
      }

      sel.addRange(range);
  };

function getOffsetTop(elm) {

  var mOffsetTop = elm.offsetTop;
  var mOffsetParent = elm.offsetParent;

  while(mOffsetParent){
    mOffsetTop += mOffsetParent.offsetTop;
    mOffsetParent = mOffsetParent.offsetParent;
  }
 
  return mOffsetTop;
}

function getOffsetLeft(elm) {

  var mOffsetLeft = elm.offsetLeft;
  var mOffsetParent = elm.offsetParent;

  while(mOffsetParent){
    mOffsetLeft += mOffsetParent.offsetLeft;
    mOffsetParent = mOffsetParent.offsetParent;
  }
 
  return mOffsetLeft;
}

function tbclick()
{
  if ((this.id == "forecolor") || (this.id == "hilitecolor")) {
    parent.command = this.id;
    buttonElement = document.getElementById(this.id);
    document.getElementById("colorpalette").style.left = 30;
    document.getElementById("colorpalette").style.top = 100;
    document.getElementById("colorpalette").style.visibility="visible";
  } else if (this.id == "createlink") {
    var szURL = prompt("Enter a URL:", "http://");
    if ((szURL != null) && (szURL != "")) {
      document.execCommand("CreateLink",false,szURL);
    }
  } else if (this.id == "createimage") {
    imagePath = prompt('Enter Image URL:', 'http://');
    if ((imagePath != null) && (imagePath != "")) {
      document.execCommand('InsertImage', false, imagePath);
    }
  } else if (this.id == "createtable") {
    e = document.getElementById(objectInEdit);
    rowstext = prompt("enter rows");
    colstext = prompt("enter cols");
    rows = parseInt(rowstext);
    cols = parseInt(colstext);
    if ((rows > 0) && (cols > 0)) {
      table = e.innerHTML.createElement("table");
      table.setAttribute("border", "1");
      table.setAttribute("cellpadding", "2");
      table.setAttribute("cellspacing", "2");
      tbody = e.innerHTML.createElement("tbody");
      for (var i=0; i < rows; i++) {
        tr =e.innerHTML.createElement("tr");
        for (var j=0; j < cols; j++) {
          td =e.innerHTML.createElement("td");
          br =e.innerHTML.createElement("br");
          td.appendChild(br);
          tr.appendChild(td);
        }
        tbody.appendChild(tr);
      }
      table.appendChild(tbody);      
      insertNodeAtSelection(e.contentWindow, table);
    }
  } else {
    document.execCommand(this.id, false, null);
  }
}

function Select(selectname)
{
  var cursel = document.getElementById(selectname).selectedIndex;
  /* First one is always a label */
  if (cursel != 0) {
    var selected = document.getElementById(selectname).options[cursel].value;
    document.execCommand(selectname, false, selected);
    document.getElementById(selectname).selectedIndex = 0;
  }
  document.getElementById(objectInEdit).contentWindow.focus();
}

function dismisscolorpalette()
{
  document.getElementById("colorpalette").style.visibility="hidden";
}

function Start() {
 // document.getElementById(objectInEdit).designMode = "on";
 // try {
  //  document.execCommand("undo", false, null);
 // }  catch (e) {
  //  alert("This demo is not supported on your level of Mozilla.");
 // }

  InitToolbarButtons();
  if (document.addEventListener) {
    document.addEventListener("mousedown", dismisscolorpalette, true);
    document.addEventListener("mousedown", dismisscolorpalette, true);
    document.addEventListener("keypress", dismisscolorpalette, true);
    document.addEventListener("keypress", dismisscolorpalette, true);
  } else if (document.attachEvent) {
    document.attachEvent("mousedown", dismisscolorpalette, true);
    document.attachEvent("mousedown", dismisscolorpalette, true);
    document.attachEvent("keypress", dismisscolorpalette, true);
    document.attachEvent("keypress", dismisscolorpalette, true);
  }
}
function viewsource(source)
{
  var html;
  if (source) {
   // html = document.createTextNode(document.body.innerHTML);
   // document.body.innerHTML = "";
    //html = document.importNode(html,false);
	//document.body.appendChild(html);
//	var theHtmlDisplay=document.getElementById(objectInEdit).innerHTML;
//	theHtmlDisplay.replace("</", "&lt;");
//	theHtmlDisplay.replace(">", "&gt;");
	createSimpleWindow("Code",theHtmlDisplay,"htmlCode");
  //  document.getElementById("toolbar1").style.visibility="hidden";
    //document.getElementById("toolbar2").style.visibility="hidden";  
  } else {
    //html = document.body.ownerDocument.createRange();
    //html.selectNodeContents(document.body);
    //document.body.innerHTML = html.toString();
	//closeWindow("htmlCode");
   // document.getElementById("toolbar1").style.visibility="visible";
   // document.getElementById("toolbar2").style.visibility="visible";  
  }
}

function usecss(source)
{
  document.execCommand("useCSS", false, !(source));  
}

function readonly(source)
{
    document.execCommand("readonly", false, !(source));  
}
function selectColor(color)
{
document.execCommand(command, false, color);
document.getElementById("colorpalette").style.visibility="hidden";
//document.getElementById(objectInEdit).focus();
}