// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,n=Object.defineProperty;function e(r){return"number"==typeof r}function t(r){var n,e="";for(n=0;n<r;n++)e+="0";return e}function i(r,n,e){var i=!1,a=n-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=e?r+t(a):t(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function u(r){var n,t,u;switch(r.specifier){case"b":n=2;break;case"o":n=8;break;case"x":case"X":n=16;break;default:n=10}if(t=r.arg,u=parseInt(t,10),!isFinite(u)){if(!e(t))throw new Error("invalid integer. Value: "+t);u=0}return u<0&&("u"===r.specifier||10!==n)&&(u=4294967295+u+1),u<0?(t=(-u).toString(n),r.precision&&(t=i(t,r.precision,r.padRight)),t="-"+t):(t=u.toString(n),u||r.precision?r.precision&&(t=i(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===n&&(r.alternate&&(t="0x"+t),t=r.specifier===o.call(r.specifier)?o.call(t):a.call(t)),8===n&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function f(r){return"string"==typeof r}var c=Math.abs,s=String.prototype.toLowerCase,l=String.prototype.toUpperCase,p=String.prototype.replace,v=/e\+(\d)$/,y=/e-(\d)$/,g=/^(\d+)$/,d=/^(\d+)e/,h=/\.0$/,w=/\.0*e/,b=/(\..*[^0])0*e/;function m(r){var n,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!e(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":c(i)<1e-4?((n=r.precision)>0&&(n-=1),t=i.toExponential(n)):t=i.toPrecision(r.precision),r.alternate||(t=p.call(t,b,"$1e"),t=p.call(t,w,"e"),t=p.call(t,h,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=p.call(t,v,"e+0$1"),t=p.call(t,y,"e-0$1"),r.alternate&&(t=p.call(t,g,"$1."),t=p.call(t,d,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===l.call(r.specifier)?l.call(t):s.call(t)}function N(r){var n,e="";for(n=0;n<r;n++)e+=" ";return e}function A(r,n,e){var t=n-r.length;return t<0?r:r=e?r+N(t):N(t)+r}var _=String.fromCharCode,E=isNaN,U=Array.isArray;function k(r){var n={};return n.specifier=r.specifier,n.precision=void 0===r.precision?1:r.precision,n.width=r.width,n.flags=r.flags||"",n.mapping=r.mapping,n}function x(r){var n,e,t,a,o,c,s,l,p;if(!U(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",s=1,l=0;l<r.length;l++)if(f(t=r[l]))c+=t;else{if(n=void 0!==t.precision,!(t=k(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+t+"`.");for(t.mapping&&(s=t.mapping),e=t.flags,p=0;p<e.length;p++)switch(a=e.charAt(p)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=e.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===t.width){if(t.width=parseInt(arguments[s],10),s+=1,E(t.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(n&&"*"===t.precision){if(t.precision=parseInt(arguments[s],10),s+=1,E(t.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,n=!1)}switch(t.arg=arguments[s],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n&&(t.padZeros=!1),t.arg=u(t);break;case"s":t.maxWidth=n?t.precision:-1;break;case"c":if(!E(t.arg)){if((o=parseInt(t.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=E(o)?String(t.arg):_(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":n||(t.precision=6),t.arg=m(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=i(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=A(t.arg,t.width,t.padRight)),c+=t.arg||"",s+=1}return c}var I=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function S(r){var n={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(n.precision="1"),n}function F(r){var n,e,t,i;for(e=[],i=0,t=I.exec(r);t;)(n=r.slice(i,I.lastIndex-t[0].length)).length&&e.push(n),e.push(S(t)),i=I.lastIndex,t=I.exec(r);return(n=r.slice(i)).length&&e.push(n),e}function j(r){return"string"==typeof r}function T(r){var n,e;if(!j(r))throw new TypeError(T("invalid argument. First argument must be a string. Value: `%s`.",r));for(n=[F(r)],e=1;e<arguments.length;e++)n.push(arguments[e]);return x.apply(null,n)}var O=Object.prototype,V=O.toString,$=O.__defineGetter__,G=O.__defineSetter__,H=O.__lookupGetter__,W=O.__lookupSetter__,C=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,n,e){var t,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===V.call(r))throw new TypeError(T("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===V.call(e))throw new TypeError(T("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((i="value"in e)&&(H.call(r,n)||W.call(r,n)?(t=r.__proto__,r.__proto__=O,delete r[n],r[n]=e.value,r.__proto__=t):r[n]=e.value),a="get"in e,o="set"in e,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&$&&$.call(r,n,e.get),o&&G&&G.call(r,n,e.set),r};function L(r,n,e){C(r,n,{configurable:!1,enumerable:!1,writable:!1,value:e})}function P(r){return r!=r}var M=Number.POSITIVE_INFINITY,R=Number.NEGATIVE_INFINITY;function Z(r){return r===M||r===R}function X(r){return Math.abs(r)}var Y,q="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),z=Object.prototype.toString,B=Object.prototype.hasOwnProperty,D="function"==typeof Symbol?Symbol:void 0,J="function"==typeof D?D.toStringTag:"",K=q&&"symbol"==typeof Symbol.toStringTag?function(r){var n,e,t,i,a;if(null==r)return z.call(r);e=r[J],a=J,n=null!=(i=r)&&B.call(i,a);try{r[J]=void 0}catch(n){return z.call(r)}return t=z.call(r),n?r[J]=e:delete r[J],t}:function(r){return z.call(r)},Q="function"==typeof Uint32Array,rr="function"==typeof Uint32Array?Uint32Array:null,nr="function"==typeof Uint32Array?Uint32Array:void 0;Y=function(){var r,n,e;if("function"!=typeof rr)return!1;try{n=new rr(n=[1,3.14,-3.14,4294967296,4294967297]),e=n,r=(Q&&e instanceof Uint32Array||"[object Uint32Array]"===K(e))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?nr:function(){throw new Error("not implemented")};var er,tr=Y,ir="function"==typeof Float64Array,ar="function"==typeof Float64Array?Float64Array:null,or="function"==typeof Float64Array?Float64Array:void 0;er=function(){var r,n,e;if("function"!=typeof ar)return!1;try{n=new ar([1,3.14,-3.14,NaN]),e=n,r=(ir&&e instanceof Float64Array||"[object Float64Array]"===K(e))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?or:function(){throw new Error("not implemented")};var ur,fr=er,cr="function"==typeof Uint8Array,sr="function"==typeof Uint8Array?Uint8Array:null,lr="function"==typeof Uint8Array?Uint8Array:void 0;ur=function(){var r,n,e;if("function"!=typeof sr)return!1;try{n=new sr(n=[1,3.14,-3.14,256,257]),e=n,r=(cr&&e instanceof Uint8Array||"[object Uint8Array]"===K(e))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?lr:function(){throw new Error("not implemented")};var pr,vr=ur,yr="function"==typeof Uint16Array,gr="function"==typeof Uint16Array?Uint16Array:null,dr="function"==typeof Uint16Array?Uint16Array:void 0;pr=function(){var r,n,e;if("function"!=typeof gr)return!1;try{n=new gr(n=[1,3.14,-3.14,65536,65537]),e=n,r=(yr&&e instanceof Uint16Array||"[object Uint16Array]"===K(e))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?dr:function(){throw new Error("not implemented")};var hr,wr={uint16:pr,uint8:vr};(hr=new wr.uint16(1))[0]=4660;var br=52===new wr.uint8(hr.buffer)[0],mr=!0===br?1:0,Nr=new fr(1),Ar=new tr(Nr.buffer);function _r(r){return Nr[0]=r,Ar[mr]}var Er=!0===br?1:0,Ur=new fr(1),kr=new tr(Ur.buffer);function xr(r,n){return Ur[0]=r,kr[Er]=n>>>0,Ur[0]}var Ir=1023,Sr=.6931471803691238,Fr=1.9082149292705877e-10,jr=1048575;function Tr(r){var n,e,t,i,a,o,u,f,c,s,l,p;return 0===r?R:P(r)||r<0?NaN:(a=0,(e=_r(r))<1048576&&(a-=54,e=_r(r*=0x40000000000000)),e>=2146435072?r+r:(a+=(e>>20)-Ir|0,a+=(f=614244+(e&=jr)&1048576|0)>>20|0,u=(r=xr(r,e|1072693248^f))-1,(jr&2+e)<3?0===u?0===a?0:a*Sr+a*Fr:(o=u*u*(.5-.3333333333333333*u),0===a?u-o:a*Sr-(o-a*Fr-u)):(f=e-398458|0,c=440401-e|0,i=(l=(p=(s=u/(2+u))*s)*p)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(l),t=p*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(l),o=t+i,(f|=c)>0?(n=.5*u*u,0===a?u-(n-s*(n+o)):a*Sr-(n-(s*(n+o)+a*Fr)-u)):0===a?u-s*(u-o):a*Sr-(s*(u-o)-a*Fr-u))))}var Or=Math.floor,Vr=Math.ceil;function $r(r){return r<0?Vr(r):Or(r)}function Gr(r,n){var e,t,i,a;return i=(a=r*r)*a,t=a*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(a),t+=i*i*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(a),(i=1-(e=.5*a))+(1-i-e+(a*t-r*n))}var Hr=-.16666666666666632;function Wr(r,n){var e,t,i;return e=.00833333333332249+(i=r*r)*(27557313707070068e-22*i-.0001984126982985795)+i*(i*i)*(1.58969099521155e-10*i-2.5050760253406863e-8),t=i*r,0===n?r+t*(Hr+i*e):r-(i*(.5*n-t*e)-n-t*Hr)}var Cr,Lr,Pr=2147483647,Mr=2146435072,Rr=1048575,Zr=!0===br?0:1,Xr=new fr(1),Yr=new tr(Xr.buffer);!0===br?(Cr=1,Lr=0):(Cr=0,Lr=1);var qr,zr,Br={HIGH:Cr,LOW:Lr},Dr=new fr(1),Jr=new tr(Dr.buffer),Kr=Br.HIGH,Qr=Br.LOW;function rn(r,n){return Jr[Kr]=r,Jr[Qr]=n,Dr[0]}!0===br?(qr=1,zr=0):(qr=0,zr=1);var nn={HIGH:qr,LOW:zr},en=new fr(1),tn=new tr(en.buffer),an=nn.HIGH,on=nn.LOW;function un(r,n,e,t){return en[0]=r,n[t]=tn[an],n[t+e]=tn[on],n}function fn(r){return un(r,[0,0],1,0)}L(fn,"assign",un);var cn=[0,0];function sn(r,n){var e,t;return fn.assign(r,cn,1,0),e=cn[0],e&=Pr,t=_r(n),rn(e|=t&=2147483648,cn[1])}function ln(r,n,e,t){return P(r)||Z(r)?(n[t]=r,n[t+e]=0,n):0!==r&&X(r)<22250738585072014e-324?(n[t]=4503599627370496*r,n[t+e]=-52,n):(n[t]=r,n[t+e]=0,n)}L((function(r){return ln(r,[0,0],1,0)}),"assign",ln);var pn=[0,0],vn=[0,0];function yn(r,n){var e,t;return 0===n||0===r||P(r)||Z(r)?r:(ln(r,pn,1,0),n+=pn[1],n+=function(r){var n=_r(r);return(n=(n&Mr)>>>20)-Ir|0}(r=pn[0]),n<-1074?sn(0,r):n>1023?r<0?R:M:(n<=-1023?(n+=52,t=2220446049250313e-31):t=1,fn.assign(r,vn,1,0),e=vn[0],e&=2148532223,t*rn(e|=n+Ir<<20,vn[1])))}function gn(r){return function(r,n){var e,t;for(e=[],t=0;t<n;t++)e.push(r);return e}(0,r)}var dn=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],hn=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],wn=16777216,bn=5.960464477539063e-8,mn=gn(20),Nn=gn(20),An=gn(20),_n=gn(20);function En(r,n,e,t,i,a,o,u,f){var c,s,l,p,v,y,g,d,h;for(p=a,h=t[e],d=e,v=0;d>0;v++)s=bn*h|0,_n[v]=h-wn*s|0,h=t[d-1]+s,d-=1;if(h=yn(h,i),h-=8*Or(.125*h),h-=g=0|h,l=0,i>0?(g+=v=_n[e-1]>>24-i,_n[e-1]-=v<<24-i,l=_n[e-1]>>23-i):0===i?l=_n[e-1]>>23:h>=.5&&(l=2),l>0){for(g+=1,c=0,v=0;v<e;v++)d=_n[v],0===c?0!==d&&(c=1,_n[v]=16777216-d):_n[v]=16777215-d;if(i>0)switch(i){case 1:_n[e-1]&=8388607;break;case 2:_n[e-1]&=4194303}2===l&&(h=1-h,0!==c&&(h-=yn(1,i)))}if(0===h){for(d=0,v=e-1;v>=a;v--)d|=_n[v];if(0===d){for(y=1;0===_n[a-y];y++);for(v=e+1;v<=e+y;v++){for(f[u+v]=dn[o+v],s=0,d=0;d<=u;d++)s+=r[d]*f[u+(v-d)];t[v]=s}return En(r,n,e+=y,t,i,a,o,u,f)}}if(0===h)for(e-=1,i-=24;0===_n[e];)e-=1,i-=24;else(h=yn(h,-i))>=wn?(s=bn*h|0,_n[e]=h-wn*s|0,i+=24,_n[e+=1]=s):_n[e]=0|h;for(s=yn(1,i),v=e;v>=0;v--)t[v]=s*_n[v],s*=bn;for(v=e;v>=0;v--){for(s=0,y=0;y<=p&&y<=e-v;y++)s+=hn[y]*t[v+y];An[e-v]=s}for(s=0,v=e;v>=0;v--)s+=An[v];for(n[0]=0===l?s:-s,s=An[0]-s,v=1;v<=e;v++)s+=An[v];return n[1]=0===l?s:-s,7&g}function Un(r,n,e,t){var i,a,o,u,f,c,s;for((a=(e-3)/24|0)<0&&(a=0),u=e-24*(a+1),c=a-(o=t-1),s=o+4,f=0;f<=s;f++)mn[f]=c<0?0:dn[c],c+=1;for(f=0;f<=4;f++){for(i=0,c=0;c<=o;c++)i+=r[c]*mn[o+(f-c)];Nn[f]=i}return En(r,n,4,Nn,u,4,a,o,mn)}var kn=Math.round;function xn(r,n,e){var t,i,a,o,u;return a=r-1.5707963267341256*(t=kn(.6366197723675814*r)),o=6077100506506192e-26*t,u=n>>20|0,e[0]=a-o,u-(_r(e[0])>>20&2047)>16&&(o=20222662487959506e-37*t-((i=a)-(a=i-(o=6077100506303966e-26*t))-o),e[0]=a-o,u-(_r(e[0])>>20&2047)>49&&(o=84784276603689e-45*t-((i=a)-(a=i-(o=20222662487111665e-37*t))-o),e[0]=a-o)),e[1]=a-e[0]-o,t}var In=1.5707963267341256,Sn=6077100506506192e-26,Fn=2*Sn,jn=3*Sn,Tn=4*Sn,On=[0,0,0],Vn=[0,0];function $n(r,n){var e,t,i,a,o,u,f;if((i=_r(r)&Pr|0)<=1072243195)return n[0]=r,n[1]=0,0;if(i<=1074752122)return 598523==(i&Rr)?xn(r,i,n):i<=1073928572?r>0?(f=r-In,n[0]=f-Sn,n[1]=f-n[0]-Sn,1):(f=r+In,n[0]=f+Sn,n[1]=f-n[0]+Sn,-1):r>0?(f=r-2*In,n[0]=f-Fn,n[1]=f-n[0]-Fn,2):(f=r+2*In,n[0]=f+Fn,n[1]=f-n[0]+Fn,-2);if(i<=1075594811)return i<=1075183036?1074977148===i?xn(r,i,n):r>0?(f=r-3*In,n[0]=f-jn,n[1]=f-n[0]-jn,3):(f=r+3*In,n[0]=f+jn,n[1]=f-n[0]+jn,-3):1075388923===i?xn(r,i,n):r>0?(f=r-4*In,n[0]=f-Tn,n[1]=f-n[0]-Tn,4):(f=r+4*In,n[0]=f+Tn,n[1]=f-n[0]+Tn,-4);if(i<1094263291)return xn(r,i,n);if(i>=Mr)return n[0]=NaN,n[1]=NaN,0;for(e=function(r){return Xr[0]=r,Yr[Zr]}(r),f=rn(i-((t=(i>>20)-1046)<<20|0),e),o=0;o<2;o++)On[o]=0|f,f=16777216*(f-On[o]);for(On[2]=f,a=3;0===On[a-1];)a-=1;return u=Un(On,Vn,t,a),r<0?(n[0]=-Vn[0],n[1]=-Vn[1],-u):(n[0]=Vn[0],n[1]=Vn[1],u)}var Gn=[0,0];function Hn(r){var n;if(n=_r(r),(n&=2147483647)<=1072243195)return n<1044381696?1:Gr(r,0);if(n>=2146435072)return NaN;switch(3&$n(r,Gn)){case 0:return Gr(Gn[0],Gn[1]);case 1:return-Wr(Gn[0],Gn[1]);case 2:return-Gr(Gn[0],Gn[1]);default:return Wr(Gn[0],Gn[1])}}var Wn=[0,0];function Cn(r){var n;if(n=_r(r),(n&=Pr)<=1072243195)return n<1045430272?r:Wr(r,0);if(n>=Mr)return NaN;switch(3&$n(r,Wn)){case 0:return Wr(Wn[0],Wn[1]);case 1:return Gr(Wn[0],Wn[1]);case 2:return-Wr(Wn[0],Wn[1]);default:return-Gr(Wn[0],Wn[1])}}var Ln=3.141592653589793,Pn=1.4616321449683622,Mn=1.4616321449683622;function Rn(r){var n,e,t,i,a,o,u,f,c,s,l,p,v;if(P(r)||Z(r))return r;if(0===r)return M;if(r<0?(n=!0,r=-r):n=!1,r<8470329472543003e-37)return-Tr(r);if(n){if(r>=4503599627370496)return M;if(c=function(r){var n,e;return P(r)||Z(r)?NaN:0===(n=X(e=r%2))||1===n?sn(0,e):n<.25?Cn(Ln*e):n<.75?sn(Hn(Ln*(n=.5-n)),e):n<1.25?(e=sn(1,e)-e,Cn(Ln*e)):n<1.75?-sn(Hn(Ln*(n-=1.5)),e):(e-=sn(2,e),Cn(Ln*e))}(r),0===c)return M;e=Tr(Ln/X(c*r))}if(1===r||2===r)return 0;if(r<2)switch(r<=.9?(v=-Tr(r),r>=Pn-1+.27?(l=1-r,t=0):r>=Pn-1-.27?(l=r-(Mn-1),t=1):(l=r,t=2)):(v=0,r>=Pn+.27?(l=2-r,t=0):r>=Pn-.27?(l=r-Mn,t=1):(l=r-1,t=2)),t){case 0:o=.07721566490153287+(p=l*l)*function(r){return 0===r?.06735230105312927:.06735230105312927+r*(.007385550860814029+r*(.0011927076318336207+r*(.00022086279071390839+25214456545125733e-21*r)))}(p),a=p*(.3224670334241136+p*function(r){return 0===r?.020580808432516733:.020580808432516733+r*(.0028905138367341563+r*(.0005100697921535113+r*(.00010801156724758394+44864094961891516e-21*r)))}(p)),v+=(u=l*o+a)-.5*l;break;case 1:o=.48383612272381005+(s=(p=l*l)*l)*function(r){return 0===r?-.032788541075985965:r*(.006100538702462913+r*(.00031563207090362595*r-.0014034646998923284))-.032788541075985965}(s),a=s*function(r){return 0===r?.01797067508118204:.01797067508118204+r*(r*(.000881081882437654+-.00031275416837512086*r)-.0036845201678113826)}(s)-.1475877229945939,i=.06462494023913339+s*function(r){return 0===r?-.010314224129834144:r*(.0022596478090061247+r*(.0003355291926355191*r-.0005385953053567405))-.010314224129834144}(s),v+=(u=p*o-(-3638676997039505e-33-s*(a+l*i)))-.12148629053584961;break;case 2:o=l*(l*function(r){return 0===r?.6328270640250934:.6328270640250934+r*(1.4549225013723477+r*(.9777175279633727+r*(.22896372806469245+.013381091853678766*r)))}(l)-.07721566490153287),a=1+l*function(r){return 0===r?2.4559779371304113:2.4559779371304113+r*(2.128489763798934+r*(.7692851504566728+r*(.10422264559336913+.003217092422824239*r)))}(l),v+=-.5*l+o/a}else if(r<8)switch(u=(l=r-(t=$r(r)))*(l*function(r){return 0===r?.21498241596060885:.21498241596060885+r*(.325778796408931+r*(.14635047265246445+r*(.02664227030336386+r*(.0018402845140733772+3194753265841009e-20*r))))}(l)-.07721566490153287),f=1+l*function(r){return 0===r?1.3920053346762105:1.3920053346762105+r*(.7219355475671381+r*(.17193386563280308+r*(.01864591917156529+r*(.0007779424963818936+7326684307446256e-21*r))))}(l),v=.5*l+u/f,p=1,t){case 7:p*=l+6;case 6:p*=l+5;case 5:p*=l+4;case 4:p*=l+3;case 3:v+=Tr(p*=l+2)}else r<0x400000000000000?(c=Tr(r),s=.4189385332046727+(p=1/r)*function(r){return 0===r?.08333333333333297:.08333333333333297+r*(r*(.0007936505586430196+r*(r*(.0008363399189962821+-.0016309293409657527*r)-.00059518755745034))-.0027777777772877554)}(l=p*p),v=(r-.5)*(c-1)+s):v=r*(Tr(r)-1);return n&&(v=e-v),v}var Zn=1.4426950408889634,Xn=1/(1<<28);function Yn(r){var n;return P(r)||r===M?r:r===R?0:r>709.782712893384?M:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<Xn?1+r:function(r,n,e){var t,i,a,o;return yn(1-(n-(t=r-n)*(a=t-(i=t*t)*(0===(o=i)?.16666666666666602:.16666666666666602+o*(o*(6613756321437934e-20+o*(4.1381367970572385e-8*o-16533902205465252e-22))-.0027777777777015593)))/(2-a)-r),e)}(r-.6931471803691238*(n=$r(r<0?Zn*r-.5:Zn*r+.5)),1.9082149292705877e-10*n,n)}function qn(r){return Or(r)===r}function zn(r){return qn(r/2)}function Bn(r){return zn(r>0?r-1:r+1)}var Dn=Math.sqrt,Jn=!0===br?0:1,Kn=new fr(1),Qn=new tr(Kn.buffer);function re(r,n){return Kn[0]=r,Qn[Jn]=n>>>0,Kn[0]}function ne(r){return 0|r}var ee=1048576,te=[1,1.5],ie=[0,.5849624872207642],ae=[0,1.350039202129749e-8],oe=1048576,ue=1083179008,fe=1e300,ce=1e-300,se=[0,0],le=[0,0];function pe(r,n){var e,t,i,a,o,u,f,c,s,l,p,v,y,g;if(P(r)||P(n))return NaN;if(fn.assign(n,se,1,0),o=se[0],0===se[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return Dn(r);if(-.5===n)return 1/Dn(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(Z(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:X(r)<1==(n===M)?0:M}(r,n)}if(fn.assign(r,se,1,0),a=se[0],0===se[1]){if(0===a)return function(r,n){return n===R?M:n===M?0:n>0?Bn(n)?r:0:Bn(n)?sn(M,r):M}(r,n);if(1===r)return 1;if(-1===r&&Bn(n))return-1;if(Z(r))return r===R?pe(-0,-n):n<0?0:M}if(r<0&&!1===qn(n))return(r-r)/(r-r);if(i=X(r),e=a&Pr|0,t=o&Pr|0,f=o>>>31|0,u=(u=a>>>31|0)&&Bn(n)?-1:1,t>1105199104){if(t>1139802112)return function(r,n){return(_r(r)&Pr)<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,n);if(e<1072693247)return 1===f?u*fe*fe:u*ce*ce;if(e>1072693248)return 0===f?u*fe*fe:u*ce*ce;p=function(r,n){var e,t,i,a,o,u;return e=(o=1.9259629911266175e-8*(i=n-1)-i*i*(0===(u=i)?.5:.5+u*(.25*u-.3333333333333333))*1.4426950408889634)-((t=re(t=(a=1.4426950216293335*i)+o,0))-a),r[0]=t,r[1]=e,r}(le,i)}else p=function(r,n,e){var t,i,a,o,u,f,c,s,l,p,v,y,g,d,h,w,b,m,N,A,_;return m=0,e<ee&&(m-=53,e=_r(n*=9007199254740992)),m+=(e>>20)-Ir|0,e=1072693248|(N=1048575&e|0),N<=235662?A=0:N<767610?A=1:(A=0,m+=1,e-=ee),o=re(i=(w=(n=xr(n,e))-(c=te[A]))*(b=1/(n+c)),0),t=524288+(e>>1|536870912),f=xr(0,t+=A<<18),h=(a=i*i)*a*(0===(_=a)?.5999999999999946:.5999999999999946+_*(.4285714285785502+_*(.33333332981837743+_*(.272728123808534+_*(.23066074577556175+.20697501780033842*_))))),f=re(f=3+(a=o*o)+(h+=(u=b*(w-o*f-o*(n-(f-c))))*(o+i)),0),g=(v=-7.028461650952758e-9*(l=re(l=(w=o*f)+(b=u*f+(h-(f-3-a))*i),0))+.9617966939259756*(b-(l-w))+ae[A])-((y=re(y=(p=.9617967009544373*l)+v+(s=ie[A])+(d=m),0))-d-s-p),r[0]=y,r[1]=g,r}(le,i,e);if(v=(l=(n-(c=re(n,0)))*p[0]+n*p[1])+(s=c*p[0]),fn.assign(v,se,1,0),y=ne(se[0]),g=ne(se[1]),y>=ue){if(0!=(y-ue|g))return u*fe*fe;if(l+8008566259537294e-32>v-s)return u*fe*fe}else if((y&Pr)>=1083231232){if(0!=(y-3230714880|g))return u*ce*ce;if(l<=v-s)return u*ce*ce}return v=function(r,n,e){var t,i,a,o,u,f,c,s,l,p;return l=((s=r&Pr|0)>>20)-Ir|0,c=0,s>1071644672&&(i=xr(0,((c=r+(oe>>l+1)>>>0)&~(Rr>>(l=((c&Pr)>>20)-Ir|0)))>>>0),c=(c&Rr|oe)>>20-l>>>0,r<0&&(c=-c),n-=i),r=ne(r=_r(f=1-((f=(a=.6931471824645996*(i=re(i=e+n,0)))+(o=.6931471805599453*(e-(i-n))+-1.904654299957768e-9*i))*(t=f-(i=f*f)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(t-2)-((u=o-(f-a))+f*u)-f))),(r+=c<<20>>>0)>>20<=0?yn(f,c):xr(f,r)}(y,s,l),u*v}function ve(r){var n,e,t;return n=1+(n=1/r)*function(r){return 0===r?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(r*(.0007873113957930937*r-.00022954996161337813)-.0026813261780578124))}(n),e=Yn(r),2.5066282746310007*(e=r>143.01608?(t=pe(r,.5*r-.25))*(t/e):pe(r,r-.5)/e)*n}function ye(r,n){return n/((1+.5772156649015329*r)*r)}function ge(r){var n,e,t,i;if(qn(r)&&r<0||r===R||P(r))return NaN;if(0===r)return function(r){return 0===r&&1/r===R}(r)?R:M;if(r>171.61447887182297)return M;if(r<-170.5674972726612)return 0;if((e=X(r))>33)return r>=0?ve(r):(n=0==(1&(t=Or(e)))?-1:1,(i=e-t)>.5&&(i=e-(t+=1)),i=e*Cn(Ln*i),n*Ln/(X(i)*ve(e)));for(i=1;r>=3;)i*=r-=1;for(;r<0;){if(r>-1e-9)return ye(r,i);i/=r,r+=1}for(;r<2;){if(r<1e-9)return ye(r,i);i/=r,r+=1}return 2===r?i:i*function(r){var n,e;return 0===r?1:((r<0?-r:r)<=1?(n=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+0*r)))))),e=1+r*(.0714304917030273+r*(r*(.035823639860549865+r*(.011813978522206043+r*(r*(.0005396055804933034+-23158187332412014e-21*r)-.004456419138517973)))-.23459179571824335))):(n=0+(r=1/r)*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+1*r)))))),e=r*(.0005396055804933034+r*(r*(.011813978522206043+r*(.035823639860549865+r*(r*(.0714304917030273+1*r)-.23459179571824335)))-.004456419138517973))-23158187332412014e-21),n/e)}(r-=2)}var de=!0===br?1:0,he=new fr(1),we=new tr(he.buffer);function be(r){return he[0]=r,we[de]}var me=!0===br?1:0,Ne=new fr(1),Ae=new tr(Ne.buffer);function _e(r,n){return Ne[0]=r,Ae[me]=n>>>0,Ne[0]}var Ee=.6931471803691238,Ue=1.9082149292705877e-10;function ke(r,n){return P(r)||P(n)?NaN:r===M||n===M?M:r===n&&0===r?function(r){return 0===r&&1/r===M}(r)?r:n:r>n?r:n}function xe(r,n){return P(r)||P(n)?NaN:r===R||n===R?R:r===n&&0===r?function(r){return 0===r&&1/r===R}(r)?r:n:r<n?r:n}var Ie=709.782712893384,Se=-708.3964185322641,Fe=10.900511;function je(r,n){var e,t,i,a,o,u,f,c,s,l;return f=(n-r-Fe+.5)/(i=r+Fe-.5),r<1?n<=Se?Yn(r*Tr(n)-n-Rn(r)):pe(n,r)*Yn(-n)/ge(r):(X(f*f*r)<=100&&r>150?(e=r*(function(r){var n,e,t,i,a,o,u,f,c,s;if(r<-1||P(r))return NaN;if(-1===r)return R;if(r===M)return r;if(0===r)return r;if(s=1,(t=r<0?-r:r)<.41421356237309503){if(t<1.862645149230957e-9)return t<5551115123125783e-32?r:r-r*r*.5;r>-.2928932188134525&&(s=0,i=r,e=1)}return 0!==s&&(t<9007199254740992?(a=(s=((e=be(c=1+r))>>20)-1023)>0?1-(c-r):r-(c-1),a/=c):(s=((e=be(c=r))>>20)-1023,a=0),(e&=1048575)<434334?c=_e(c,1072693248|e):(s+=1,c=_e(c,1071644672|e),e=1048576-e>>2),i=c-1),n=.5*i*i,0===e?0===i?s*Ee+(a+=s*Ue):s*Ee-((f=n*(1-.6666666666666666*i))-(s*Ue+a)-i):(f=(u=(o=i/(2+i))*o)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(u),0===s?i-(n-o*(n+f)):s*Ee-(n-(o*(n+f)+(s*Ue+a))-i))}(f)-f)+-10.400511*n/i,e=Yn(e)):xe(a=r*Tr(n/i),o=r-n)<=Se||ke(a,o)>=Ie?(t=o/r,xe(a,o)/2>Se&&ke(a,o)/2<Ie?e=(u=pe(n/i,r/2)*Yn(o/2))*u:xe(a,o)/4>Se&&ke(a,o)/4<Ie&&n>r?(e=(u=pe(n/i,r/4)*Yn(o/4))*u,e*=e):e=t>Se&&t<Ie?pe(n*Yn(t)/i,r):Yn(a+o)):e=pe(n/i,r)*Yn(o),e*=Dn(i/2.718281828459045)/(0===(c=r)?1/0:((c<0?-c:c)<=1?(s=709811.662581658+c*(679979.8474157227+c*(293136.7857211597+c*(74887.54032914672+c*(12555.290582413863+c*(1443.4299244417066+c*(115.24194596137347+c*(6.309239205732627+c*(.22668404630224365+c*(.004826466289237662+4624429436045379e-20*c))))))))),l=0+c*(362880+c*(1026576+c*(1172700+c*(723680+c*(269325+c*(63273+c*(9450+c*(870+c*(45+1*c)))))))))):(s=4624429436045379e-20+(c=1/c)*(.004826466289237662+c*(.22668404630224365+c*(6.309239205732627+c*(115.24194596137347+c*(1443.4299244417066+c*(12555.290582413863+c*(74887.54032914672+c*(293136.7857211597+c*(679979.8474157227+709811.662581658*c))))))))),l=1+c*(45+c*(870+c*(9450+c*(63273+c*(269325+c*(723680+c*(1172700+c*(1026576+c*(362880+0*c)))))))))),s/l)))}function Te(r,n){var e;return r<=0||n<0?NaN:0===n?r>1?0:1===r?1:M:(e=je(r,n),n<1&&17976931348623157e292*n<e?M:(0===e?e=Yn(e=r*Tr(n)-n-Rn(r)-Tr(n)):e/=n,e))}function Oe(r,n,e){return P(r)||P(n)||P(e)||n<0||e<=0?NaN:r<0||r===M?0:0===n?0===r?M:0:Te(n,r*e)*e}function Ve(r){return P(r)?(n=NaN,function(){return n}):function(n){return P(n)?NaN:n===r?M:0};var n}function $e(r,n){return P(r)||P(n)||r<0||n<=0?(e=NaN,function(){return e}):0===r?Ve(0):function(e){return P(e)?NaN:e<0||e===M?0:Te(r,e*n)*n};var e}function Ge(r,n){return Oe(r,n/2,.5)}return L((function(r,n){return P(r)||P(n)?NaN:r===n?M:0}),"factory",Ve),L(Oe,"factory",$e),L(Ge,"factory",(function(r){return $e(r/2,.5)})),Ge},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).pdf=n();
//# sourceMappingURL=index.js.map
