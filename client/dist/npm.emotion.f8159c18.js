"use strict";(self.webpackChunkclone_chatgpt_client=self.webpackChunkclone_chatgpt_client||[]).push([[931],{867:function(e,t,r){r.d(t,{Z:function(){return W}});var n=r(294),a=r.t(n,2),i=r(462),o=function(e){var t=Object.create(null);return function(r){return void 0===t[r]&&(t[r]=e(r)),t[r]}},s=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,l=o((function(e){return s.test(e)||111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)<91})),c=function(){function e(e){var t=this;this._insertTag=function(e){var r;r=0===t.tags.length?t.insertionPoint?t.insertionPoint.nextSibling:t.prepend?t.container.firstChild:t.before:t.tags[t.tags.length-1].nextSibling,t.container.insertBefore(e,r),t.tags.push(e)},this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(e){e.forEach(this._insertTag)},t.insert=function(e){this.ctr%(this.isSpeedy?65e3:1)==0&&this._insertTag(function(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),void 0!==e.nonce&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}(this));var t=this.tags[this.tags.length-1];if(this.isSpeedy){var r=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}(t);try{r.insertRule(e,r.cssRules.length)}catch(e){}}else t.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach((function(e){return e.parentNode&&e.parentNode.removeChild(e)})),this.tags=[],this.ctr=0},e}(),u=r(411),d=r(686),p=r(563),f=r(211),h=r(160),g=r(190),m=function(e,t,r){for(var n=0,a=0;n=a,a=(0,u.fj)(),38===n&&12===a&&(t[r]=1),!(0,u.r)(a);)(0,u.lp)();return(0,u.tP)(e,u.FK)},y=new WeakMap,v=function(e){if("rule"===e.type&&e.parent&&!(e.length<1)){for(var t=e.value,r=e.parent,n=e.column===r.column&&e.line===r.line;"rule"!==r.type;)if(!(r=r.parent))return;if((1!==e.props.length||58===t.charCodeAt(0)||y.get(r))&&!n){y.set(e,!0);for(var a=[],i=function(e,t){return(0,u.cE)(function(e,t){var r=-1,n=44;do{switch((0,u.r)(n)){case 0:38===n&&12===(0,u.fj)()&&(t[r]=1),e[r]+=m(u.FK-1,t,r);break;case 2:e[r]+=(0,u.iF)(n);break;case 4:if(44===n){e[++r]=58===(0,u.fj)()?"&\f":"",t[r]=e[r].length;break}default:e[r]+=(0,d.Dp)(n)}}while(n=(0,u.lp)());return e}((0,u.un)(e),t))}(t,a),o=r.props,s=0,l=0;s<i.length;s++)for(var c=0;c<o.length;c++,l++)e.props[l]=a[s]?i[s].replace(/&\f/g,o[c]):o[c]+" "+i[s]}}},x=function(e){if("decl"===e.type){var t=e.value;108===t.charCodeAt(0)&&98===t.charCodeAt(2)&&(e.return="",e.value="")}};function b(e,t){switch((0,d.vp)(e,t)){case 5103:return p.G$+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return p.G$+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return p.G$+e+p.uj+e+p.MS+e+e;case 6828:case 4268:return p.G$+e+p.MS+e+e;case 6165:return p.G$+e+p.MS+"flex-"+e+e;case 5187:return p.G$+e+(0,d.gx)(e,/(\w+).+(:[^]+)/,p.G$+"box-$1$2"+p.MS+"flex-$1$2")+e;case 5443:return p.G$+e+p.MS+"flex-item-"+(0,d.gx)(e,/flex-|-self/,"")+e;case 4675:return p.G$+e+p.MS+"flex-line-pack"+(0,d.gx)(e,/align-content|flex-|-self/,"")+e;case 5548:return p.G$+e+p.MS+(0,d.gx)(e,"shrink","negative")+e;case 5292:return p.G$+e+p.MS+(0,d.gx)(e,"basis","preferred-size")+e;case 6060:return p.G$+"box-"+(0,d.gx)(e,"-grow","")+p.G$+e+p.MS+(0,d.gx)(e,"grow","positive")+e;case 4554:return p.G$+(0,d.gx)(e,/([^-])(transform)/g,"$1"+p.G$+"$2")+e;case 6187:return(0,d.gx)((0,d.gx)((0,d.gx)(e,/(zoom-|grab)/,p.G$+"$1"),/(image-set)/,p.G$+"$1"),e,"")+e;case 5495:case 3959:return(0,d.gx)(e,/(image-set\([^]*)/,p.G$+"$1$`$1");case 4968:return(0,d.gx)((0,d.gx)(e,/(.+:)(flex-)?(.*)/,p.G$+"box-pack:$3"+p.MS+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+p.G$+e+e;case 4095:case 3583:case 4068:case 2532:return(0,d.gx)(e,/(.+)-inline(.+)/,p.G$+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if((0,d.to)(e)-1-t>6)switch((0,d.uO)(e,t+1)){case 109:if(45!==(0,d.uO)(e,t+4))break;case 102:return(0,d.gx)(e,/(.+:)(.+)-([^]+)/,"$1"+p.G$+"$2-$3$1"+p.uj+(108==(0,d.uO)(e,t+3)?"$3":"$2-$3"))+e;case 115:return~(0,d.Cw)(e,"stretch")?b((0,d.gx)(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(115!==(0,d.uO)(e,t+1))break;case 6444:switch((0,d.uO)(e,(0,d.to)(e)-3-(~(0,d.Cw)(e,"!important")&&10))){case 107:return(0,d.gx)(e,":",":"+p.G$)+e;case 101:return(0,d.gx)(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+p.G$+(45===(0,d.uO)(e,14)?"inline-":"")+"box$3$1"+p.G$+"$2$3$1"+p.MS+"$2box$3")+e}break;case 5936:switch((0,d.uO)(e,t+11)){case 114:return p.G$+e+p.MS+(0,d.gx)(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return p.G$+e+p.MS+(0,d.gx)(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return p.G$+e+p.MS+(0,d.gx)(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return p.G$+e+p.MS+e+e}return e}var k=[function(e,t,r,n){if(e.length>-1&&!e.return)switch(e.type){case p.h5:e.return=b(e.value,e.length);break;case p.lK:return(0,f.q)([(0,u.JG)(e,{value:(0,d.gx)(e.value,"@","@"+p.G$)})],n);case p.Fr:if(e.length)return(0,d.$e)(e.props,(function(t){switch((0,d.EQ)(t,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return(0,f.q)([(0,u.JG)(e,{props:[(0,d.gx)(t,/:(read-\w+)/,":"+p.uj+"$1")]})],n);case"::placeholder":return(0,f.q)([(0,u.JG)(e,{props:[(0,d.gx)(t,/:(plac\w+)/,":"+p.G$+"input-$1")]}),(0,u.JG)(e,{props:[(0,d.gx)(t,/:(plac\w+)/,":"+p.uj+"$1")]}),(0,u.JG)(e,{props:[(0,d.gx)(t,/:(plac\w+)/,p.MS+"input-$1")]})],n)}return""}))}}],w=function(e){var t=e.key;if("css"===t){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,(function(e){-1!==e.getAttribute("data-emotion").indexOf(" ")&&(document.head.appendChild(e),e.setAttribute("data-s",""))}))}var n,a,i=e.stylisPlugins||k,o={},s=[];n=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+t+' "]'),(function(e){for(var t=e.getAttribute("data-emotion").split(" "),r=1;r<t.length;r++)o[t[r]]=!0;s.push(e)}));var l,u=[v,x],d=[f.P,(0,h.cD)((function(e){l.insert(e)}))],p=(0,h.qR)(u.concat(i,d));a=function(e,t,r,n){var a;l=r,a=e?e+"{"+t.styles+"}":t.styles,(0,f.q)((0,g.MY)(a),p),n&&(m.inserted[t.name]=!0)};var m={key:t,sheet:new c({key:t,container:n,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:o,registered:{},insert:a};return m.sheet.hydrate(s),m},$=function(e){for(var t,r=0,n=0,a=e.length;a>=4;++n,a-=4)t=1540483477*(65535&(t=255&e.charCodeAt(n)|(255&e.charCodeAt(++n))<<8|(255&e.charCodeAt(++n))<<16|(255&e.charCodeAt(++n))<<24))+(59797*(t>>>16)<<16),r=1540483477*(65535&(t^=t>>>24))+(59797*(t>>>16)<<16)^1540483477*(65535&r)+(59797*(r>>>16)<<16);switch(a){case 3:r^=(255&e.charCodeAt(n+2))<<16;case 2:r^=(255&e.charCodeAt(n+1))<<8;case 1:r=1540483477*(65535&(r^=255&e.charCodeAt(n)))+(59797*(r>>>16)<<16)}return(((r=1540483477*(65535&(r^=r>>>13))+(59797*(r>>>16)<<16))^r>>>15)>>>0).toString(36)},S={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},C=/[A-Z]|^ms/g,A=/_EMO_([^_]+?)_([^]*?)_EMO_/g,_=function(e){return 45===e.charCodeAt(1)},G=function(e){return null!=e&&"boolean"!=typeof e},P=o((function(e){return _(e)?e:e.replace(C,"-$&").toLowerCase()})),M=function(e,t){switch(e){case"animation":case"animationName":if("string"==typeof t)return t.replace(A,(function(e,t,r){return T={name:t,styles:r,next:T},t}))}return 1===S[e]||_(e)||"number"!=typeof t||0===t?t:t+"px"};function O(e,t,r){if(null==r)return"";if(void 0!==r.__emotion_styles)return r;switch(typeof r){case"boolean":return"";case"object":if(1===r.anim)return T={name:r.name,styles:r.styles,next:T},r.name;if(void 0!==r.styles){var n=r.next;if(void 0!==n)for(;void 0!==n;)T={name:n.name,styles:n.styles,next:T},n=n.next;return r.styles+";"}return function(e,t,r){var n="";if(Array.isArray(r))for(var a=0;a<r.length;a++)n+=O(e,t,r[a])+";";else for(var i in r){var o=r[i];if("object"!=typeof o)null!=t&&void 0!==t[o]?n+=i+"{"+t[o]+"}":G(o)&&(n+=P(i)+":"+M(i,o)+";");else if(!Array.isArray(o)||"string"!=typeof o[0]||null!=t&&void 0!==t[o[0]]){var s=O(e,t,o);switch(i){case"animation":case"animationName":n+=P(i)+":"+s+";";break;default:n+=i+"{"+s+"}"}}else for(var l=0;l<o.length;l++)G(o[l])&&(n+=P(i)+":"+M(i,o[l])+";")}return n}(e,t,r);case"function":if(void 0!==e){var a=T,i=r(e);return T=a,O(e,t,i)}}if(null==t)return r;var o=t[r];return void 0!==o?o:r}var T,E=/label:\s*([^\s;\n{]+)\s*(;|$)/g,R=!!a.useInsertionEffect&&a.useInsertionEffect,I=R||function(e){return e()},L=(R||n.useLayoutEffect,(0,n.createContext)("undefined"!=typeof HTMLElement?w({key:"css"}):null));L.Provider;var N=(0,n.createContext)({}),j=function(e,t,r){var n=e.key+"-"+t.name;!1===r&&void 0===e.registered[n]&&(e.registered[n]=t.styles)},z=l,q=function(e){return"theme"!==e},F=function(e){return"string"==typeof e&&e.charCodeAt(0)>96?z:q},H=function(e,t,r){var n;if(t){var a=t.shouldForwardProp;n=e.__emotion_forwardProp&&a?function(t){return e.__emotion_forwardProp(t)&&a(t)}:a}return"function"!=typeof n&&r&&(n=e.__emotion_forwardProp),n},D=function(e){var t=e.cache,r=e.serialized,n=e.isStringTag;return j(t,r,n),I((function(){return function(e,t,r){j(e,t,r);var n=e.key+"-"+t.name;if(void 0===e.inserted[t.name]){var a=t;do{e.insert(t===a?"."+n:"",a,e.sheet,!0),a=a.next}while(void 0!==a)}}(t,r,n)})),null},U=function e(t,r){var a,o,s=t.__emotion_real===t,l=s&&t.__emotion_base||t;void 0!==r&&(a=r.label,o=r.target);var c=H(t,r,s),u=c||F(l),d=!u("as");return function(){var p=arguments,f=s&&void 0!==t.__emotion_styles?t.__emotion_styles.slice(0):[];if(void 0!==a&&f.push("label:"+a+";"),null==p[0]||void 0===p[0].raw)f.push.apply(f,p);else{f.push(p[0][0]);for(var h=p.length,g=1;g<h;g++)f.push(p[g],p[0][g])}var m,y=(m=function(e,t,r){var a,i,s,p,h=d&&e.as||l,g="",m=[],y=e;if(null==e.theme){for(var v in y={},e)y[v]=e[v];y.theme=(0,n.useContext)(N)}"string"==typeof e.className?(a=t.registered,i=m,s=e.className,p="",s.split(" ").forEach((function(e){void 0!==a[e]?i.push(a[e]+";"):p+=e+" "})),g=p):null!=e.className&&(g=e.className+" ");var x=function(e,t,r){if(1===e.length&&"object"==typeof e[0]&&null!==e[0]&&void 0!==e[0].styles)return e[0];var n=!0,a="";T=void 0;var i=e[0];null==i||void 0===i.raw?(n=!1,a+=O(r,t,i)):a+=i[0];for(var o=1;o<e.length;o++)a+=O(r,t,e[o]),n&&(a+=i[o]);E.lastIndex=0;for(var s,l="";null!==(s=E.exec(a));)l+="-"+s[1];return{name:$(a)+l,styles:a,next:T}}(f.concat(m),t.registered,y);g+=t.key+"-"+x.name,void 0!==o&&(g+=" "+o);var b=d&&void 0===c?F(h):u,k={};for(var w in e)d&&"as"===w||b(w)&&(k[w]=e[w]);return k.className=g,k.ref=r,(0,n.createElement)(n.Fragment,null,(0,n.createElement)(D,{cache:t,serialized:x,isStringTag:"string"==typeof h}),(0,n.createElement)(h,k))},(0,n.forwardRef)((function(e,t){var r=(0,n.useContext)(L);return m(e,r,t)})));return y.displayName=void 0!==a?a:"Styled("+("string"==typeof l?l:l.displayName||l.name||"Component")+")",y.defaultProps=t.defaultProps,y.__emotion_real=y,y.__emotion_base=l,y.__emotion_styles=f,y.__emotion_forwardProp=c,Object.defineProperty(y,"toString",{value:function(){return"."+o}}),y.withComponent=function(t,n){return e(t,(0,i.Z)({},r,n,{shouldForwardProp:H(y,n,!0)})).apply(void 0,f)},y}}.bind();["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"].forEach((function(e){U[e]=U(e)}));var W=U}}]);