/*
					By:				    Mozilla(modified by Jeff Faber)
					Purpose: 			Is a rich text editor
					Date Started: 		May 11th, 2010
					Date Completed:		*
					Version:			*
*/
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

  this.firstChild.style.left = 2+"px";
  this.firstChild.style.top = 2+"px";
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
  this.firstChild.style.left = 1+"px";
  this.firstChild.style.top = 1+"px";
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

      }
	  else 
	  {


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
    document.getElementById("colorpalette").style.left = 0+"px";
    document.getElementById("colorpalette").style.top = 0+"px";
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
  //document.getElementById(objectInEdit).contentWindow.focus();
}

function dismisscolorpalette()
{
 if(document.getElementById("colorpalette"))
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