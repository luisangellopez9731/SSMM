(this["webpackJsonpmastermind-solved-solutions"]=this["webpackJsonpmastermind-solved-solutions"]||[]).push([[0],[,,,function(e,t,n){e.exports={row:"TableRow_styles_row__TGQu8",hidden:"TableRow_styles_hidden__7ILEz",codeRow:"TableRow_styles_codeRow___G9ps",pegContainer:"TableRow_styles_pegContainer__m7qQc",feedbackContainer:"TableRow_styles_feedbackContainer__2ikxp",feedbackPegContainer:"TableRow_styles_feedbackPegContainer__3nVrj",feedbackPeg:"TableRow_styles_feedbackPeg__FIcgH",peg:"TableRow_styles_peg__3LD_Y",black:"TableRow_styles_black__Hqlb8",white:"TableRow_styles_white__1FmFN"}},function(e,t,n){e.exports={generalContainer:"MasterMind_styles_generalContainer__MNKdq",container:"MasterMind_styles_container__2hBf8",tableContainer:"MasterMind_styles_tableContainer__2Il6M",pegBoxContainer:"MasterMind_styles_pegBoxContainer__3RVER",buttonsContainer:"MasterMind_styles_buttonsContainer__2v5yX",button:"MasterMind_styles_button__2AQTN",playableContainer:"MasterMind_styles_playableContainer__3X_5z",textContainer:"MasterMind_styles_textContainer__1kmdi"}},,,,,function(e,t,n){e.exports={peg:"PegButton_styles_peg__3UYgJ",pegClicked:"PegButton_styles_pegClicked__2Beft",click:"PegButton_styles_click__rON51"}},function(e,t,n){e.exports={container:"Win_styles_container__GVPqY",appear:"Win_styles_appear__2c6o7",img:"Win_styles_img__2-jiv"}},function(e,t,n){e.exports={container:"Lose_styles_container__1Odsw",appear:"Lose_styles_appear__3mrT5",img:"Lose_styles_img__1DfSy"}},,function(e,t,n){e.exports={container:"Table_styles_container__37mNq"}},function(e,t,n){e.exports={pegBox:"PegBox_styles_pegBox__p45Oq"}},,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(12),o=n.n(s),i=(n(19),n(20),n(7)),r=n(2),l=n(4),u=n.n(l),b=n(13),_=n.n(b);function d(e,t){for(var n=[],c=0;c<e;c++)n.push(t(c));return n}var j,f=n(3),g=n.n(f),p=["ff9aa2","ffdac1","aff8db","6eb5ff","ffffd1","b28dff","ff9cee"];function h(e){return d(e,(function(t){return p[(n=e,c=0,Math.floor(Math.random()*(c-n))+n)];var n,c}))}!function(e){e[e.black=0]="black",e[e.white=1]="white"}(j||(j={}));var O=n(0),x=function(e){var t=e.codeLength,n=e.actualGuest,c=e.actualHints,a=e.previousGuest,s=e.previousHint,o=e.hide,i=g.a.row,r=g.a.codeRow,l=g.a.pegContainer,u=g.a.feedbackContainer,b=g.a.feedbackPegContainer,_=g.a.feedbackPeg,f=g.a.peg,p=g.a.black,h=g.a.white,x=g.a.hidden;return console.log(n,void 0!=n),Object(O.jsxs)("div",{className:"".concat(i).concat(o?" ".concat(x):""),children:[Object(O.jsx)("div",{className:"".concat(u),children:d(t,(function(e){var t;return t=s?s?s[e]===j.black?" ".concat(p):s[e]===j.white?" ".concat(h):"":"":c?c[e]===j.black?" ".concat(p):c[e]===j.white?" ".concat(h):"":"",Object(O.jsx)("div",{className:"".concat(b),children:Object(O.jsx)("div",{className:"".concat(_).concat(t)})},e)}))}),Object(O.jsx)("div",{className:"".concat(r),children:d(t,(function(e){return Object(O.jsx)("div",{className:"".concat(l),children:a?Object(O.jsx)("div",{className:"".concat(f),style:{backgroundColor:"#".concat(a[e])}}):void 0!=n?Object(O.jsx)("div",{className:"".concat(f),style:{backgroundColor:"#".concat(n[e])}}):""},e)}))})]})},v=function(e){var t=e.codeLength,n=e.rowsLength,a=e.actualGuest,s=e.guestNumber,o=e.actualHints,i=e.previousGuests,r=e.previousHints;console.log(a);var l=Object(c.useRef)(null);Object(c.useEffect)((function(){s>=3&&l&&l.current&&(l.current.scrollTop-=140)}),[s]),Object(c.useEffect)((function(){l&&l.current&&(l.current.scrollTop=l.current.scrollHeight)}),[]);var u=function(){var e=n-s-1;return d(n,(function(c){var s=n-c-1;return e===c?Object(O.jsx)(x,{codeLength:t,actualGuest:a,actualHints:o},c):void 0!==i[s]?Object(O.jsx)(x,{codeLength:t,previousGuest:i[s],previousHint:r[s]},c):Object(O.jsx)(x,{codeLength:t,hide:!0},c)}))}(),b=_.a.container;return Object(O.jsx)("div",{className:"".concat(b),ref:l,children:u})},m=n(9),C=n.n(m),y=function(e){var t=e.color,n=e.onClick,a=Object(c.useState)(!1),s=Object(r.a)(a,2),o=s[0],i=s[1],l=(Object(c.useContext)(F),C.a.peg),u=C.a.pegClicked;return Object(O.jsx)("div",{className:"".concat(l).concat(o?" ".concat(u):""),style:{backgroundColor:"#".concat(t),boxShadow:"0px 0px 8px 1px #".concat(t)},onClick:function(){i(!0),n(t)},onAnimationEnd:function(){return i(!1)}})},k=n(14),w=n.n(k),N=function(e){var t=e.pegButtonClicked,n=w.a.pegBox,c=function(e){t(e)};return Object(O.jsx)("div",{className:"".concat(n),children:d(7,(function(e){return Object(O.jsx)(y,{color:p[e],onClick:c},e)}))})},M=n(10),L=n.n(M),T=n.p+"static/media/win.69ba92de.jpg",B=function(){var e=L.a.container,t=L.a.img;return Object(O.jsx)("div",{className:"".concat(e),children:Object(O.jsx)("img",{className:"".concat(t),src:T})})},R=n(11),S=n.n(R),P=n.p+"static/media/lose.13fcd0a4.png",G=function(){var e=S.a.container,t=S.a.img;return Object(O.jsx)("div",{className:"".concat(e),children:Object(O.jsx)("img",{className:"".concat(t),src:P})})},H={actualCode:[],previousCodes:[]},F=a.a.createContext(H),q=function(e){var t=e.codeLength,n=e.rowsLength,a=Object(c.useState)(H),s=Object(r.a)(a,2),o=(s[0],s[1],Object(c.useState)([])),l=Object(r.a)(o,2),b=l[0],_=l[1],d=Object(c.useState)(h(t)),f=Object(r.a)(d,2),g=f[0],p=(f[1],Object(c.useState)(0)),x=Object(r.a)(p,2),m=x[0],C=x[1],y=Object(c.useState)([]),k=Object(r.a)(y,2),w=k[0],M=k[1],L=Object(c.useState)([]),T=Object(r.a)(L,2),R=T[0],S=T[1],P=Object(c.useState)([]),F=Object(r.a)(P,2),q=F[0],E=F[1],I=Object(c.useState)(!1),A=Object(r.a)(I,2),D=A[0],J=A[1],Q=Object(c.useState)(!1),V=Object(r.a)(Q,2),W=V[0],X=V[1],Y=u.a.generalContainer,z=u.a.container,K=u.a.tableContainer,U=u.a.pegBoxContainer,Z=u.a.buttonsContainer,$=u.a.button,ee=u.a.playableContainer,te=u.a.textContainer;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("div",{className:te,children:[Object(O.jsx)("h1",{children:"MasterMind"}),Object(O.jsxs)("p",{children:["If you don't know how to play, you can"," ",Object(O.jsx)("a",{target:"blank",href:"https://bit.ly/2ZtfXpg",children:"visit this site"})," ","for a little explanation about the game."]})]}),Object(O.jsxs)("div",{className:"".concat(Y),children:[Object(O.jsxs)("div",{className:"".concat(ee),children:[Object(O.jsx)("div",{className:"".concat(z," ").concat(K),children:Object(O.jsx)(v,{codeLength:t,rowsLength:n,guestNumber:m,actualGuest:b,actualHints:w,previousGuests:R,previousHints:q})}),Object(O.jsx)("div",{className:"".concat(z," ").concat(U),children:Object(O.jsx)(N,{pegButtonClicked:function(e){var n=Object(i.a)(b);n.length===t?n[t-1]=e:n.push(e),_(n)}})})]}),Object(O.jsx)("div",{className:"".concat(Z),children:Object(O.jsx)("button",{onClick:function(){var e=function(e,t){var n=[];return t.map((function(t,c){e[c]===t?n.push(j.black):e.some((function(e){return e===t}))&&n.push(j.white)})),n}(b,g);M(e),function(e,t){return e.length===t&&e.every((function(e){return e===j.black}))}(e,t)?J(!0):m===n-1?X(!0):function(e){S([].concat(Object(i.a)(R),[b])),E([].concat(Object(i.a)(q),[e])),_([]),M([]),C(m+1)}(e)},disabled:b.length!==t,className:"".concat($),children:"Guest"})})]}),D&&Object(O.jsx)(B,{}),W&&Object(O.jsx)(G,{})]})};var E=function(){return Object(O.jsx)("div",{className:"App",children:Object(O.jsx)(q,{codeLength:4,rowsLength:15})})},I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,23)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),s(e),o(e)}))};o.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(E,{})}),document.getElementById("root")),I()}],[[22,1,2]]]);
//# sourceMappingURL=main.cf508642.chunk.js.map