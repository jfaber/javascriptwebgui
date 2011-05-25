function getStyle(theStyle)
{
	var theReturn="";
 if(theStyle.background) 
	 theReturn+="background:" + theStyle.background + "; ";
 if(theStyle.backgroundAttachment) 
	 theReturn+="background-attachment:" + theStyle.backgroundAttachment + "; ";
 if(theStyle.backgroundColor) 
	 theReturn+="background-color:" + theStyle.backgroundColor + "; ";
 if(theStyle.backgroundImage) 
	 theReturn+="background-image:" + theStyle.backgroundImage + "; ";
 if(theStyle.backgroundPostion) 
	 theReturn+="background-position:" + theStyle.backgroundPostion + "; ";
 if(theStyle.backgroundRepeat) 
	 theReturn+="background-repeat:" + theStyle.backgroundRepeat + "; ";
 if(theStyle.border) 
	 theReturn+="border:" + theStyle.border + "; ";
 if(theStyle.borderBottom) 
	 theReturn+="border-bottom:" + theStyle.borderBottom + "; ";
 if(theStyle.borderBottomColor) 
	 theReturn+="border-bottom-color:" + theStyle.borderBottomColor + "; ";
 if(theStyle.borderBottomStyle) 
	 theReturn+="border-bottom-style:" + theStyle.borderBottomStyle + "; ";
 if(theStyle.borderBottomWidth) 
	 theReturn+="border-bottom-width:" + theStyle.borderBottomWidth + "; ";
 if(theStyle.borderColor) 
	 theReturn+="border-color:" + theStyle.borderColor + "; ";
 if(theStyle.borderLeft) 
	 theReturn+="border-left:" + theStyle.borderLeft + "; ";
 if(theStyle.borderLeftColor) 
	 theReturn+="border-left-color:" + theStyle.borderLeftColor + "; ";
 if(theStyle.borderLeftStyle) 
	 theReturn+="border-left-style:" + theStyle.borderLeftStyle + "; ";
 if(theStyle.borderLeftWidth) 
	 theReturn+="border-left-width:" + theStyle.borderLeftWidth + "; ";
 if(theStyle.borderRight) 
	 theReturn+="border-right:" + theStyle.borderRight + "; ";
 if(theStyle.borderRightColor) 
	 theReturn+="border-right-color:" + theStyle.borderRightColor + "; ";
 if(theStyle.borderRightStyle) 
	 theReturn+="border-right-style:" + theStyle.borderRightStyle + "; ";
 if(theStyle.borderRightWidth) 
	 theReturn+="border-right-width:" + theStyle.borderRightWidth + "; ";
 if(theStyle.borderStyle) 
	 theReturn+="border-style:" + theStyle.borderStyle + "; ";
 if(theStyle.borderTop) 
	 theReturn+="border-top:" + theStyle.borderTop + "; ";
 if(theStyle.borderTopColor) 
	 theReturn+="border-top-color:" + theStyle.borderTopColor + "; ";
 if(theStyle.borderTopStyle) 
	 theReturn+="border-top-style:" + theStyle.borderTopStyle + "; ";
 if(theStyle.borderTopWidth) 
	 theReturn+="border-top-width:" + theStyle.borderTopWidth + "; ";
 if(theStyle.borderWidth) 
	 theReturn+="border-width:" + theStyle.borderWidth + "; ";
 if(theStyle.clear) 
	 theReturn+="clear:" + theStyle.clear + "; ";
 if(theStyle.clip) 
	 theReturn+="clip:" + theStyle.clip + "; ";
 if(theStyle.color) 
	 theReturn+="color:" + theStyle.color + "; ";
 if(theStyle.cursor) 
	 theReturn+="cursor:" + theStyle.cursor + "; ";
 if(theStyle.opacity) 
	 theReturn+="opacity:" + theStyle.opacity + "; ";	 
 if(theStyle.display) 
	 theReturn+="display:" + theStyle.display + "; ";
 if(theStyle.filter) 
	 theReturn+="filter:" + theStyle.filter + "; ";
 if(theStyle.font) 
	 theReturn+="font:" + theStyle.font + "; ";
 if(theStyle.fontFamily) 
	 theReturn+="font-family:" + theStyle.fontFamily + "; ";
 if(theStyle.fontSize) 
	 theReturn+="font-size:" + theStyle.fontSize + "; ";
 if(theStyle.fontStyle) 
	 theReturn+="font-style:" + theStyle.fontStyle + "; ";
 if(theStyle.fontVariant) 
	 theReturn+="font-variant:" + theStyle.fontVariant + "; ";
 if(theStyle.fontWeight) 
	 theReturn+="font-weight:" + theStyle.fontWeight + "; ";
 if(theStyle.height) 
	 theReturn+="height:" + theStyle.height + "; ";
 if(theStyle.left) 
	 theReturn+="left:" + theStyle.left + "; ";
 if(theStyle.letterSpacing) 
	 theReturn+="letter-spacing:" + theStyle.letterSpacing + "; ";
 if(theStyle.lineHeight) 
	 theReturn+="line-height:" + theStyle.lineHeight + "; ";
 if(theStyle.listStyle) 
	 theReturn+="list-style:" + theStyle.listStyle + "; ";
 if(theStyle.listStyleImage) 
	 theReturn+="list-style-image:" + theStyle.listStyleImage + "; ";
 if(theStyle.listStylePosition) 
	 theReturn+="list-style-position:" + theStyle.listStylePosition + "; ";
 if(theStyle.listStyleType) 
	 theReturn+="list-style-type:" + theStyle.listStyleType + "; ";
 if(theStyle.margin) 
	 theReturn+="margin:" + theStyle.margin + "; ";
 if(theStyle.marginBottom) 
	 theReturn+="margin-bottom:" + theStyle.marginBottom + "; ";
 if(theStyle.marginLeft) 
	 theReturn+="margin-left:" + theStyle.marginLeft + "; ";
 if(theStyle.marginRight) 
	 theReturn+="margin-right:" + theStyle.marginRight + "; ";
 if(theStyle.marginTop) 
	 theReturn+="margin-top:" + theStyle.marginTop + "; ";
 if(theStyle.overflow) 
	 theReturn+="overflow:" + theStyle.overflow + "; ";
 if(theStyle.paddingBottom) 
	 theReturn+="padding-bottom:" + theStyle.paddingBottom + "; ";
 if(theStyle.paddingLeft) 
	 theReturn+="padding-left:" + theStyle.paddingLeft + "; ";
 if(theStyle.paddingRight) 
	 theReturn+="padding-right:" + theStyle.paddingRight + "; ";
 if(theStyle.paddingTop) 
	 theReturn+="padding-top:" + theStyle.paddingTop + "; ";
 if(theStyle.pageBreakAfter) 
	 theReturn+="page-break-after:" + theStyle.pageBreakAfter + "; ";
 if(theStyle.pageBreakBefore) 
	 theReturn+="page-break-before:" + theStyle.pageBreakBefore + "; ";
 if(theStyle.position) 
	 theReturn+="position:" + theStyle.position + "; ";
 if(theStyle.styleFloat) 
	 theReturn+="float:" + theStyle.styleFloat + "; ";
 if(theStyle.textAlign) 
	 theReturn+="text-align:" + theStyle.textAlign + "; ";
 if(theStyle.textDecoration) 
	 theReturn+="text-decoration:" + theStyle.textDecoration + "; ";
 if(theStyle.textDecorationBlink) 
	 theReturn+="text-decoration:" + theStyle.textDecorationBlink + "; ";
 if(theStyle.textDecorationLineThrough) 
	 theReturn+="text-decoration:" + theStyle.textDecorationLineThrough + "; ";
 if(theStyle.textDecorationNone) 
	 theReturn+="text-decoration:" + theStyle.textDecorationNone + "; ";
 if(theStyle.textDecorationOverline) 
	 theReturn+="text-decoration:" + theStyle.textDecorationOverline + "; ";
 if(theStyle.textDecorationUnderline) 
	 theReturn+="text-decoration:" + theStyle.textDecorationUnderline + "; ";
 if(theStyle.textIndent) 
	 theReturn+="text-indent:" + theStyle.textIndent + "; ";
 if(theStyle.textTransform) 
	 theReturn+="text-transform:" + theStyle.textTransform + "; ";
 if(theStyle.top) 
	 theReturn+="top:" + theStyle.top + "; ";
 if(theStyle.verticalAlign) 
	 theReturn+="vertical-align:" + theStyle.verticalAlign + "; ";
 if(theStyle.visibility) 
	 theReturn+="visibility:" + theStyle.visibility + "; ";
 if(theStyle.width) 
	 theReturn+="width:" + theStyle.width + "; ";
 if(theStyle.zIndex) 
	 theReturn+="z-index:" + theStyle.zIndex + "; ";
	 
	 return theReturn;
}