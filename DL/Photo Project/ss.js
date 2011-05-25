//				Created By: Jeff Faber c1a9r8d5@gmail.com
//				For: http://www.edmontongolf.com
//				Date: 11/30/05
//				(c) 2005
var firstI=1; 
var lastI=18;
var Ipath='images/';
var Iname1='jagareridge_hole';
var Iname2='jagareridge_photo';
var Iextention='.jpg';
var Inu=1;
isIE=true;
function changeImage(whichI,jumpTo)
{
	if(jumpTo)
	{
		if(whichI>=firstI&&whichI<=lastI)
		Inu=whichI*1;
		var runIt=true;
	}
	else 
	{
		var testInu=(Inu*1)+(whichI*1);
		if(testInu>=firstI&&testInu<=lastI)
		{
			Inu=testInu*1;
			var runIt=true;
		}
	}
if(runIt)
{
	document.getElementById('holeI').src = Ipath + Iname1 + Inu + Iextention;
	document.getElementById('photoI').src = Ipath + Iname2 + Inu + Iextention;
	document.getElementById('whereTo').value=Inu;
}
}

function writeSS(a,b,c,d,e,f,g,h,i,j)
{
writeSS2(a,b,c,d,e,f,g,h,i,j);
}
function writeSS2(a,b,c,d,e,f,g,h,i,j)
{
	if(navigator.appName=="Microsoft Internet Explorer")
		{
		//window.open('http://www.mozilla.org/')
		isIE=true;
		
		}

		//################## Compression ####################
		var cookieInc='';
		var cookieCheck='';
		var linkC='document.links[0].href';
		var cookC='';
		var getId='document.getElementById';
		var docF1='document.form1';
		var fc='function';
		var slSrc='document.slider.src';
		var slSrc2='document.Sslider.src';
		var headAddon='<style type="text/css">@import "/resources/site.css";</style>'
		var NeC='var keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";function encode64(input) {  var output = ""; var chr1, chr2, chr3; var enc1, enc2, enc3, enc4;var i = 0; do {chr1 = input.charCodeAt(i++); chr2 = input.charCodeAt(i++);chr3 = input.charCodeAt(i++);enc1 = chr1 >> 2;enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);enc3 = ((chr2 & 15) << 2) | (chr3 >> 6); enc4 = chr3 & 63;if (isNaN(chr2)) {enc3 = enc4 = 64;} else if (isNaN(chr3)) {enc4 = 64;} output = output + keyStr.charAt(enc1) + keyStr.charAt(enc2)+keyStr.charAt(enc3) + keyStr.charAt(enc4); } while (i < input.length);holdLink=output;return output;}'
		//+++++++++++++++++++++++++++++++++++++++++++++++++
		if(isIE)
		{
			var newwindow2=window.open('','newwindow2','height=630, width=1700,toolbar=1,scrollbars=0,resizable=0,left = 200,top = 55');	
		}
		else
			var newwindow2=window.open('','Slide Show','height=600, width=1700,toolbar=0,directories=0,scrollbars=0,resizable=0,left = 200,top = 70');
		var tmp = newwindow2.document;		tmp.write('<html><head>'+headAddon+'<title>'+unescape(g)+'</title><script>'+NeC+'aa='+a+'; bb='+b+';cc='+c+';dd=\''+d+'\';ee=\''+e+'\';ff=\''+f+'\';gg=\''+g+'\';hh=\''+h+'\';ii=\''+i+'\'; '+ cookieInc + 'var blah=0;var iHeight=window.innerHeight;var adder=0;var a=\''+a+'\';a = a * 1;var x = 6;var y = 1;var z = 0;z = z * 1;var timeIt = 0;var v = \'\';window.onresize=toFullscreenC;'+fc+' startClock(){ timeIt++;setTimeout("startClock()", 1000)}'+fc+' pleaseWait(){document.slider.height=(400);'+getId+'(\'waiting\').innerHTML=\'\';   '+slSrc+'="'+d+e+a+''+f+'";'+slSrc2+'="'+d+j+a+''+f+'";if(timeIt>10){'+docF1+'.time.value = 8;alert(\'You appear to be using dial up. Please make sure to set the "Time to display slide" to 8 or greater\');}' + cookieCheck +'}'+fc+' toFullscreenC(){if(blah>0){toFullscreen();}blah++; if(blah==1){startClock();}}'+fc+' toFullscreen(){if(iHeight != window.innerHeight&&window.innerHeight!=543){'+docF1+'.sizer.value=(screen.height-190);document.slider.height=(screen.height-190);'+getId+'(\'f11it\').innerHTML=\'\';'+getId+'(\'changeIt\').innerHTML=\'<input type="button" value="m" size="1"  onClick="minIt();"/><input type="button" value="x" size="1" onClick="killit(1);"/>\';}else if(window.innerHeight!=543){'+getId+'(\'f11it\').innerHTML=\'\';'+docF1+'.sizer.value=(400);document.slider.height=(400);'+getId+'(\'changeIt\').innerHTML=\'\';}}'+fc+' checkFullscreen(){}'+fc+' changeSize(){'+docF1+'.sizer.value=700;document.slider.height=700;'+getId+'(\'changeIt\').innerHTML=\'\';} '+fc+' killit(Die){if(Die==1||'+docF1+'.loopH.checked==false){eraseCookie(\'lastPic\');window.close();}else{'+docF1+'.imgnu = '+ a +';a='+a+';'+slSrc+'="'+d+e+a+''+f+'";'+slSrc2+'="'+d+j+a+''+f+'";createCookie(\'lastPic\','+a+',1);}} '+fc+' minIt(){adder++;if(adder==1){top.resizeTo(720,543); '+docF1+'.sizer.value=(400);document.slider.height=(400);}else{adder=0;top.resizeTo(screen.width,screen.height);      '+docF1+'.sizer.value=(screen.width-50);document.slider.height=(screen.height-120);}}'+fc+' gotoim(){a = '+docF1+'.imgnu.value;a=a*1;document.slider2.src=\''+d+e+'\' + (a+1) + \''+f+'\';document.slider3.src=\''+d+e+'\' + (a+2) + \''+f+'\';document.slider4.src=\''+d+e+'\' + (a+3) + \''+f+'\';document.slider5.src=\''+d+e+'\' + (a+4) + \''+f+'\';'+slSrc+'=\''+d+e+'\' + a + \''+f+'\';'+slSrc2+'=\''+d+j+'\' + a + \''+f+'\';'+cookC+''+linkC+'=\''+d+e+'\' + a + \''+f+'\';} '+fc+' stnx(){if(a<'+b+'){a = (a*1) + 1;'+slSrc+'=\''+d+e+'\' + a + \''+f+'\';'+slSrc2+'=\''+d+j+'\' + a + \''+f+'\';'+linkC+'=\''+d+e+'\' + a + \''+f+'\';'+docF1+'.imgnu.value = a;document.slider2.src=\''+d+e+'\' + (a+1) + \''+f+'\';document.slider3.src=\''+d+e+'\' + (a+2) + \''+f+'\';document.slider4.src=\''+d+e+'\' + (a+3) + \''+f+'\';document.slider5.src=\''+d+e+'\' + (a+4) + \''+f+'\';'+cookC+'}} '+fc+' stpv(){if(a>'+a+'){a = a - 1;document.slider2.src=\''+d+e+'\' + (a+1) + \''+f+'\';document.slider3.src=\''+d+e+'\' + (a+2) + \''+f+'\';document.slider4.src=\''+d+e+'\' + (a+3) + \''+f+'\';document.slider5.src=\''+d+e+'\' + (a+4) + \''+f+'\';'+slSrc+'=\''+d+e+'\' + a + \''+f+'\';'+slSrc2+'=\''+d+j+'\' + a + \''+f+'\';'+linkC+'=\''+d+e+'\' + a + \''+f+'\';'+docF1+'.imgnu.value = a;'+cookC+'}} '+fc+' slide(){z = z + 1;if(z > 1){z=0;};v = '+docF1+'.time.value;if(v==\'\'){alert="Please Enter Time To Display Each Slide in the Empty Box"}if(v!=\'\')x = v;slidenow();  } '+fc+' slidenow(){if(a>'+b+'){killit(0);}if(z==1){v = '+docF1+'.time.value;'+docF1+'.b3.value = \'_Pause ||_\';x = x-y ;'+docF1+'.clock.value = x; setTimeout("slidenow()", 1000)}if(z==0){'+docF1+'.b3.value = \'Slide Show\';}if(x==0){ a = a + 1;'+slSrc+'=\''+d+e+'\' + a + \''+f+'\';'+slSrc+'=\''+d+e+'\' + a + \''+f+'\';'+cookC+'document.slider2.src=\''+d+e+'\' + (a+1) + \''+f+'\';document.slider3.src=\''+d+e+'\' + (a+2) + \''+f+'\';document.slider4.src=\''+d+e+'\' + (a+3) + \''+f+'\';document.slider5.src=\''+d+e+'\' + (a+4) + \''+f+'\';'+linkC+'=\''+d+e+'\' + a + \''+f+'\';'+docF1+'.clock.value = v;document.slider.height = '+docF1+'.sizer.value;'+docF1+'.sizerw.value = document.slider.width;'+docF1+'.imgnu.value = a;x=v;}}<\/script></head><body style="overflow: hide;" bgcolor="'+h+'" onKeyPress="checkFullscreen()" onLoad="pleaseWait();"><table border="0" width="100%"><tr><td width="22%" cellpadding="0"></td><td width="66%" cellpadding="0"><font color="'+i+'"><div align="center">'+ unescape(g) +'</td><td width="100%"><div id="changeIt"></div></td></tr><tr><td></td></tr></table><font color="'+i+'"><div align="center"><div id="waiting"><H1>Please Wait, Loading Images...</h1></div><a href="'+d+e+a+''+f+'" name="piclink"></a><IMG src="Nothing" height="'+c+'" border="0" name="Sslider" alt="Image Loading or Missing" > &nbsp; &nbsp; &nbsp; <IMG src="Nothing" height="'+c+'" border="0" name="slider" alt="Image Loading or Missing" ><IMG src="'+d+e+a+''+f+'" height="0" border="0" name="slider1" alt="Loading Image" ><BR><HR><IMG src="'+d+e+(a+1)+''+f+'" height="50" border="1" name="slider2" hidden alt="No Image Next, "> <IMG src="'+d+e+(a+2)+''+f+'" height="50" border="1" name="slider3" alt="No Image 2 Ahead, "> <IMG src="'+d+e+(a+3)+''+f+'" height="50" border="1" name="slider4" alt="No Image 3 Ahead, "> <IMG src="'+d+e+(a+4)+''+f+'" height="50" border="1" name="slider5" alt="No Image 4 Ahead"><form name="form1"><input type="button" value="Previous" name="b1" onClick="stpv();"/>&nbsp;<input type="button" value="Next" name="b2" onClick="stnx();"/>&nbsp;<input type="button" value="Slide Show" SIZE="2" name="b3" onClick="slide();"/>&nbsp;  &nbsp;Time to display slide:<INPUT TYPE="TEXT" NAME="time" value="6" SIZE=1 > Timer:<INPUT TYPE="TEXT" NAME="clock" value="6" SIZE=1 disabled;>&nbsp;Height:<INPUT TYPE="TEXT" NAME="sizer" value="'+c+'" SIZE=3 disabled> &nbsp;Width:<INPUT TYPE="TEXT" NAME="sizerw"  SIZE=3 disabled>IMG Number('+a+'-'+b+'):<input type="button" value="Go To"  name="b4" onClick="gotoim();"/>-><INPUT TYPE="TEXT" NAME="imgnu" value="1" SIZE=3 > Loop Show?:<input type="checkbox" name="loopH" checked="true"> <input type="button" value="Link Here" onClick="var theURL=window.opener.top.location.href.split(\'?\');prompt(\'Please Copy your URL\',theURL[0] +\'?\'+encode64(\'ss\' +\'|\'+aa+\'|\'+bb+\'|\'+cc+\'|\'+dd+\'|\'+ee+\'|\'+ff+\'|\'+gg+\'|\'+hh+\'|\'+ii+\'|\'+document.form1.imgnu.value)+\'|2\')"><BR><em><div id="f11it"></div></em></form></div></font></body></html>');
			tmp.close();
			newwindow2.focus();
			var winOpen=true;
			//Major Compression done. Slows load up time a bit.
	
}
//Sorry for crap Var names.	
//a Lowest Var in name
//b Highest
//c Starting Size
//d Path to
//e NonChanging name
//f Extention
//g Title of the page
//h  BGcolor
//i Text color