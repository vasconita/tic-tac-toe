(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],{16:function(e,t,n){e.exports={main:"NewScoreView_main__156f7",win:"NewScoreView_win__2EbAm",lose:"NewScoreView_lose__sUqLh",tie:"NewScoreView_tie__4SVIY",resultMessage:"NewScoreView_resultMessage__3BsiP",scoreMessage:"NewScoreView_scoreMessage__3iP2B",button:"NewScoreView_button__1_nT3"}},18:function(e,t,n){e.exports={main:"HomeView_main__1ijha",titleArea:"HomeView_titleArea__2Q3aV",title:"HomeView_title__3p63q",buttonsArea:"HomeView_buttonsArea__3AiDv",button:"HomeView_button__2_QRY",languageSelector:"HomeView_languageSelector__2-uOg"}},19:function(e,t,n){e.exports={main:"GameView_main__3bn2r",grid:"GameView_grid__3GPVN",gridBorder:"GameView_gridBorder__2b5eK",spinner:"GameView_spinner__txjYv",spinner_on:"GameView_spinner_on__3Ck1H",spinner_off:"GameView_spinner_off__FWi7c"}},23:function(e,t,n){e.exports={main:"BackgroundAnimationLines_main__2awhn",line:"BackgroundAnimationLines_line__1i1SU",run:"BackgroundAnimationLines_run__2xacH"}},26:function(e,t,n){e.exports={main:"LanguageSelector_main__2GS8I",button:"LanguageSelector_button__2sQML"}},38:function(e,t,n){e.exports={main:"RoundedButton_main__1m_8d",icon:"RoundedButton_icon__3enWu"}},39:function(e,t,n){e.exports={main:"RankingView_main__2g86E",message:"RankingView_message__3FXlo"}},51:function(e,t,n){e.exports={main:"HomeButton_main__3f4a5"}},53:function(e){e.exports=JSON.parse('{"home.title":"Tic Tac Toe","home.start":"Start","score.win":"You win!","score.lose":"You lost...","score.tie":"Nobody wins","score.score":"Your score is","score.playAgain":"Play again","score.menu":"Menu"}')},54:function(e){e.exports=JSON.parse('{"home.title":"Tres En Raya","home.start":"Empezar","score.win":"\xa1Has ganado!","score.lose":"Has perdido...","score.tie":"Nadie ha ganado","score.score":"Tu puntuaci\xf3n es de","score.playAgain":"Vuelve a jugar","score.menu":"Men\xfa"}')},55:function(e){e.exports=JSON.parse('{"home.title":"Morpion","home.start":"Commencer","score.win":"Vous avez gagn\xe9 !","score.lose":"Vous avez perdu...","score.tie":"Personne n\'a gagn\xe9","score.score":"Votre score est de","score.playAgain":"Jouer \xe0 nouveau","score.menu":"Menu"}')},56:function(e,t,n){e.exports={main:"RotationSpinner_main__1UeyR",spinnerAnimation:"RotationSpinner_spinnerAnimation__1Jcos"}},59:function(e,t,n){e.exports={switch:"MainStyles_switch__2LEKm"}},61:function(e,t,n){e.exports=n(86)},66:function(e,t,n){},7:function(e,t,n){e.exports={main:"GridEntry_main__3rpKB",selectable:"GridEntry_selectable__3DaU7",icon:"GridEntry_icon__38EMH",icon_selectedByUser:"GridEntry_icon_selectedByUser__3T9Du",icon_selectedByMachine:"GridEntry_icon_selectedByMachine__BpR2f",icon_forOverState:"GridEntry_icon_forOverState__15DCd",icon_disabled:"GridEntry_icon_disabled__2xD6w",icon_enabled:"GridEntry_icon_enabled__2N-Rf"}},86:function(e,t,n){"use strict";n.r(t);var a,r,c=n(0),i=n.n(c),s=n(27),o=n.n(s),l=(n(66),n(5)),u=n(21),m=n(4),d=n(49),f=n(11),_="score",g="winner",p=Array.from({length:9},(function(e,t){return t})),h=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],E=function(e){return e&&e.size>=3&&h.reduce((function(t,n){return t||n.every((function(t){return e.includes(t)}))}),!1)},y=f.default.fromJS((a={},Object(m.a)(a,_,1e4),Object(m.a)(a,"gameInCourse",!1),Object(m.a)(a,"userCanSelect",!0),Object(m.a)(a,g,null),Object(m.a)(a,"grid",{}),a)),b=function(e){return e.get(_)},v=function(e,t){return e.getIn(["grid",t])},w=function(e){var t=function(e){return Array.from({length:9},(function(e,t){return t})).filter((function(t){return!v(e,t)}))}(e);return t[Math.floor(Math.random()*t.length)]},N=function(e,t){return e.get("grid").reduce((function(e,n,a){return n===t?e.push(a):e}),f.default.List())},M=function(e,t){return"user"===t?E(N(e,"selectedByUser")):"machine"===t&&E(N(e,"selectedByMachine"))},O=function(e){return e.get(g)?e.get(g):M(e,"user")?"user":M(e,"machine")?"machine":null},j=function(e){return 9===function(e){return e.get("grid").filter((function(e){return null!=e}))}(e).size||null!=O(e)},S=f.default.List([]),B=f.default.Map(),C=n(17),x=Object(d.combineReducers)((r={},Object(m.a)(r,"currentGame",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"startGame":return y.set("gameInCourse",!0);case"endGame":return e.set("gameInCourse",!1);case"setWinner":return e.set(g,t.payload.winner).update(_,(function(e){return t.payload.winner?e+1e4:e}));case"changeCurrentScore":return e.set(_,t.payload.score);case"selectGridEntry":return e.setIn(["grid",t.payload.id],t.payload.selectedByUser?"selectedByUser":"selectedByMachine").update(_,(function(e){return e-500})).set("userCanSelect",!t.payload.selectedByUser);default:return e}})),Object(m.a)(r,"ranking",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"addNewScore":var n,a=t.payload.score,r=t.payload.name,c=e.findIndex((function(e){return e.get("name")===r}));if(-1===c)e=e.push(f.default.Map((n={},Object(m.a)(n,"score",a),Object(m.a)(n,"name",r),n)));else e=e.setIn([c,"score"],a);return e.sortBy((function(e){return e.get("score")}));default:return e}})),Object(m.a)(r,"screen",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"changeWindowSize":return e.set("windowWidth",t.payload.width).set("windowHeight",t.payload.height);default:return e}})),Object(m.a)(r,"intl",C.intlReducer),r)),V=function(e){return function(e){return e.get("userCanSelect")&&!j(e)}(e.get("currentGame"))},z=function(e){return O(e.get("currentGame"))},k=function(e){return j(e.get("currentGame"))},L=n(50),G=(0,u.c)(Object(u.a)(L.a)),A=Object(u.d)(x,G),I=n(20),H=n(18),D=n.n(H),U=n(23),T=n.n(U),R=i.a.memo((function(){return i.a.createElement("div",{className:T.a.main},i.a.createElement("div",{className:T.a.line}),i.a.createElement("div",{className:T.a.line}),i.a.createElement("div",{className:T.a.line}),i.a.createElement("div",{className:T.a.line}))})),P=n(51),F=n.n(P),W=n(2),J=n.n(W),Y=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.join(" ")},K=i.a.memo((function(e){var t=e.label,n=e.className,a=e.to,r=e.onClick;return i.a.createElement(I.b,{className:Y(F.a.main,n),to:a,onClick:r},t)}));K.propTypes={label:J.a.string,className:J.a.string,to:J.a.string,onClick:J.a.func};var Q=K,q=n(88),X=function(){return Object(q.a)("startGame")({})},Z=function(e,t){var n;return Object(q.a)("selectGridEntry")((n={},Object(m.a)(n,"id",e),Object(m.a)(n,"selectedByUser",t),n))},$=function(e){return function(t,n){if(t(Z(e,!0)),ee(t,n),!k(n())){var a=(r=n(),w(r.get("currentGame")));setTimeout((function(){t(Z(a,!1)),ee(t,n)}),2e3)}var r}},ee=function(e,t){if(k(t())){var n=z(t());setTimeout((function(){window.location.hash="/new-score",e(function(e){return Object(q.a)("setWinner")(Object(m.a)({},g,e))}(n))}),2e3)}},te=n(45),ne=n(46),ae=n(26),re=n.n(ae),ce=n(38),ie=n.n(ce),se=i.a.memo((function(e){var t=e.className,n=e.onClick,a=e.icon;return i.a.createElement("div",{className:Y(ie.a.main,t),onClick:n},i.a.createElement(a,{className:ie.a.icon}))}));se.propTypes={className:J.a.string,onClick:J.a.func,icon:J.a.elementType};var oe=se,le=i.a.memo((function(e){var t=e.className;return i.a.createElement("svg",{className:t,viewBox:"0 0 512 512"},i.a.createElement("path",{style:{fill:"#FFDA44"},d:"M0,256c0,31.314,5.633,61.31,15.923,89.043L256,367.304l240.077-22.261\r C506.367,317.31,512,287.314,512,256s-5.633-61.31-15.923-89.043L256,144.696L15.923,166.957C5.633,194.69,0,224.686,0,256z"}),i.a.createElement("g",null,i.a.createElement("path",{style:{fill:"#D80027"},d:"M496.077,166.957C459.906,69.473,366.071,0,256,0S52.094,69.473,15.923,166.957H496.077z"}),i.a.createElement("path",{style:{fill:"#D80027"},d:"M15.923,345.043C52.094,442.527,145.929,512,256,512s203.906-69.473,240.077-166.957H15.923z"})))})),ue=i.a.memo((function(e){var t=e.className;return i.a.createElement("svg",{className:t,viewBox:"0 0 512 512"},i.a.createElement("circle",{style:{fill:"#F0F0F0"},cx:"256",cy:"256",r:"256"}),i.a.createElement("path",{style:{fill:"#D80027"},d:"M512,256c0-110.071-69.472-203.906-166.957-240.077v480.155C442.528,459.906,512,366.071,512,256z"}),i.a.createElement("path",{style:{fill:"#0052B4"},d:"M0,256c0,110.071,69.473,203.906,166.957,240.077V15.923C69.473,52.094,0,145.929,0,256z"}))})),me=i.a.memo((function(e){var t=e.className;return i.a.createElement("svg",{className:t,viewBox:"0 0 512 512"},i.a.createElement("circle",{style:{fill:"#F0F0F0"},cx:"256",cy:"256",r:"256"}),i.a.createElement("g",null,i.a.createElement("path",{style:{fill:"#0052B4"},d:"M52.92,100.142c-20.109,26.163-35.272,56.318-44.101,89.077h133.178L52.92,100.142z"}),i.a.createElement("path",{style:{fill:"#0052B4"},d:"M503.181,189.219c-8.829-32.758-23.993-62.913-44.101-89.076l-89.075,89.076H503.181z"}),i.a.createElement("path",{style:{fill:"#0052B4"},d:"M8.819,322.784c8.83,32.758,23.993,62.913,44.101,89.075l89.074-89.075L8.819,322.784L8.819,322.784\r z"}),i.a.createElement("path",{style:{fill:"#0052B4"},d:"M411.858,52.921c-26.163-20.109-56.317-35.272-89.076-44.102v133.177L411.858,52.921z"}),i.a.createElement("path",{style:{fill:"#0052B4"},d:"M100.142,459.079c26.163,20.109,56.318,35.272,89.076,44.102V370.005L100.142,459.079z"}),i.a.createElement("path",{style:{fill:"#0052B4"},d:"M189.217,8.819c-32.758,8.83-62.913,23.993-89.075,44.101l89.075,89.075V8.819z"}),i.a.createElement("path",{style:{fill:"#0052B4"},d:"M322.783,503.181c32.758-8.83,62.913-23.993,89.075-44.101l-89.075-89.075V503.181z"}),i.a.createElement("path",{style:{fill:"#0052B4"},d:"M370.005,322.784l89.075,89.076c20.108-26.162,35.272-56.318,44.101-89.076H370.005z"})),i.a.createElement("g",null,i.a.createElement("path",{style:{fill:"#D80027"},d:"M509.833,222.609h-220.44h-0.001V2.167C278.461,0.744,267.317,0,256,0\r c-11.319,0-22.461,0.744-33.391,2.167v220.44v0.001H2.167C0.744,233.539,0,244.683,0,256c0,11.319,0.744,22.461,2.167,33.391\r h220.44h0.001v220.442C233.539,511.256,244.681,512,256,512c11.317,0,22.461-0.743,33.391-2.167v-220.44v-0.001h220.442\r C511.256,278.461,512,267.319,512,256C512,244.683,511.256,233.539,509.833,222.609z"}),i.a.createElement("path",{style:{fill:"#D80027"},d:"M322.783,322.784L322.783,322.784L437.019,437.02c5.254-5.252,10.266-10.743,15.048-16.435\r l-97.802-97.802h-31.482V322.784z"}),i.a.createElement("path",{style:{fill:"#D80027"},d:"M189.217,322.784h-0.002L74.98,437.019c5.252,5.254,10.743,10.266,16.435,15.048l97.802-97.804\r V322.784z"}),i.a.createElement("path",{style:{fill:"#D80027"},d:"M189.217,189.219v-0.002L74.981,74.98c-5.254,5.252-10.266,10.743-15.048,16.435l97.803,97.803\r H189.217z"}),i.a.createElement("path",{style:{fill:"#D80027"},d:"M322.783,189.219L322.783,189.219L437.02,74.981c-5.252-5.254-10.743-10.266-16.435-15.047\r l-97.802,97.803V189.219z"})))})),de=n(53),fe=n(54),_e=n(55),ge=i.a.memo((function(e){var t=e.className,n=Object(l.useDispatch)(),a=Object(c.useCallback)((function(){return n(Object(C.updateIntl)({locale:"en-UK",messages:de}))}),[n]),r=Object(c.useCallback)((function(){return n(Object(C.updateIntl)({locale:"es-ES",messages:fe}))}),[n]),s=Object(c.useCallback)((function(){return n(Object(C.updateIntl)({locale:"fr-FR",messages:_e}))}),[n]);return i.a.createElement("div",{className:Y(re.a.main,t)},i.a.createElement(oe,{className:re.a.button,icon:me,onClick:a}),i.a.createElement(oe,{className:re.a.button,icon:le,onClick:r}),i.a.createElement(oe,{className:re.a.button,icon:ue,onClick:s}))})),pe=Object(te.defineMessages)({title:{id:"home.title",defaultMessage:"Tic Tac Toe"},start:{id:"home.start",defaultMessage:"Start"}}),he=i.a.memo((function(){var e=Object(l.useDispatch)(),t=Object(ne.a)(),n=Object(c.useCallback)((function(){return e(X())}),[e]);return i.a.createElement("div",{className:D.a.main},i.a.createElement(R,null),i.a.createElement("div",{className:D.a.titleArea},i.a.createElement("span",{className:D.a.title},t.formatMessage(pe.title))),i.a.createElement("div",{className:D.a.buttonsArea},i.a.createElement(Q,{className:D.a.button,label:t.formatMessage(pe.start),to:"/game",onClick:n}),i.a.createElement(ge,{className:D.a.languageSelector})))})),Ee=n(19),ye=n.n(Ee),be=n(7),ve=n.n(be),we=i.a.memo((function(e){var t=e.className;return i.a.createElement("svg",{className:t,viewBox:"0 0 512 512"},i.a.createElement("path",{d:"M255.832,56.037c110.44,0.096,199.891,89.691,199.795,200.131s-89.691,199.891-200.131,199.795\r C145.127,455.867,55.701,366.368,55.701,256C55.877,145.568,145.399,56.117,255.832,56.037 M255.832,0\r C114.443,0.096-0.096,114.779,0,256.168S114.779,512.096,256.168,512C397.485,511.904,512,397.317,512,256\r C511.952,114.571,397.261-0.048,255.832,0z"}))})),Ne=i.a.memo((function(e){var t=e.className;return i.a.createElement("svg",{className:t,viewBox:"0 0 329.26933 329"},i.a.createElement("path",{d:"m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0"}))})),Me=i.a.memo((function(e){var t=e.id,n=e.sizeInPx,a=Object(l.useSelector)((function(e){return function(e,t){return v(e.get("currentGame"),t)}(e,t)})),r=Object(l.useSelector)((function(e){return V(e)})),c=Object(l.useDispatch)(),s=Math.floor(.05*n)||0,o=n-2*s,u={borderWidth:s,width:o,height:o},m=ve.a.main,d=r&&!a;d&&(m=Y(m,ve.a.selectable));return i.a.createElement("div",{className:m,onClick:function(){return d&&c($(t))},style:u},i.a.createElement("span",{className:"selectedByUser"===a?ve.a.selectedByUser:ve.a.selectedByMachine},"selectedByUser"===a?i.a.createElement(Ne,{className:Y(ve.a.icon,ve.a.icon_selectedByUser)}):"selectedByMachine"===a?i.a.createElement(we,{className:Y(ve.a.icon,ve.a.icon_selectedByMachine,ve.a.icon_enabled)}):!a&&r?i.a.createElement(Ne,{className:Y(ve.a.icon,ve.a.icon_selectedByUser,ve.a.icon_forOverState)}):i.a.createElement(we,{className:Y(ve.a.icon,ve.a.icon_selectedByMachine,ve.a.icon_disabled)})))})),Oe=n(56),je=n.n(Oe),Se=function(e){var t=e.className;return i.a.createElement("div",{className:Y(t,je.a.main)})},Be=i.a.memo((function(){var e=Object(l.useSelector)((function(e){return function(e){return function(e){return e.get("windowWidth")}(e.get("screen"))}(e)})),t=Object(l.useSelector)((function(e){return function(e){return function(e){return e.get("windowHeight")}(e.get("screen"))}(e)})),n=Object(l.useSelector)((function(e){return V(e)})),a=function(e,t){var n,a=Math.min(e,t);n=a>1e3?1e3:a-30;var r=Math.floor(n/3),c=Math.ceil(.05*r),i={borderWidth:c,width:"calc(100% - ".concat(2*c,"px)"),height:"calc(100% - ".concat(2*c,"px)")},s="".concat(3*r,"px");return{gridEntryInlineStyles:i,gridInlineStyles:{width:s,height:s},gridEntrySizeInPx:r}}(e,t),r=a.gridInlineStyles,c=a.gridEntryInlineStyles,s=a.gridEntrySizeInPx;return i.a.createElement("div",{className:ye.a.main},i.a.createElement("div",{className:ye.a.grid,style:r},p.map((function(e){return i.a.createElement(Me,{id:e,key:e,sizeInPx:s})})),i.a.createElement("div",{className:ye.a.gridBorder,style:c})),i.a.createElement(Se,{className:function(){var e=ye.a.spinner;return e=Y(e,n?ye.a.spinner_off:ye.a.spinner_on)}()}))})),Ce=n(16),xe=n.n(Ce),Ve=Object(te.defineMessages)({win:{id:"score.win",defaultMessage:"You win!"},lose:{id:"score.lose",defaultMessage:"You lost..."},tie:{id:"score.tie",defaultMessage:"Nobody wins"},score:{id:"score.score",defaultMessage:"Your score is"},playAgain:{id:"score.playAgain",defaultMessage:"Play again"},menu:{id:"score.menu",defaultMessage:"Menu"}}),ze=i.a.memo((function(){var e,t,n=Object(l.useSelector)((function(e){return z(e)})),a=Object(l.useSelector)((function(e){return function(e){return b(e.get("currentGame"))}(e)})),r=Object(l.useDispatch)(),s=Object(ne.a)();"user"===n?(e=s.formatMessage(Ve.win),t=xe.a.win):"machine"===n?(e=s.formatMessage(Ve.lose),t=xe.a.lose):(e=s.formatMessage(Ve.tie),t=xe.a.tie);var o=Object(c.useCallback)((function(){return r(X())}),[r]);return i.a.createElement("div",{className:Y(xe.a.main,t)},i.a.createElement(R,null),i.a.createElement("span",{className:xe.a.resultMessage},e),i.a.createElement("span",{className:xe.a.scoreMessage},"".concat(s.formatMessage(Ve.score)," ").concat(a)),i.a.createElement(Q,{className:xe.a.button,label:s.formatMessage(Ve.playAgain),to:"/game",onClick:o}),i.a.createElement(Q,{className:xe.a.button,label:s.formatMessage(Ve.menu),to:"/home"}))})),ke=n(39),Le=n.n(ke),Ge=i.a.memo((function(e){return i.a.createElement("div",{className:Le.a.main},i.a.createElement("span",{className:Le.a.message}))})),Ae=n(9),Ie=n(57),He=n(59),De=n.n(He),Ue=function(){return i.a.createElement(Ie.a,{atEnter:{opacity:0},atLeave:{opacity:0},atActive:{opacity:1},className:De.a.switch},i.a.createElement(Ae.b,{exact:!0,path:"/home",component:he}),i.a.createElement(Ae.b,{exact:!0,path:"/game",component:Be}),i.a.createElement(Ae.b,{exact:!0,path:"/new-score",component:ze}),i.a.createElement(Ae.b,{exact:!0,path:"/ranking",component:Ge}),i.a.createElement(Ae.a,{to:"/home"}))},Te=function(e){var t=e.children,n=Object(l.useDispatch)(),a=Object(c.useCallback)((function(){n(function(e,t){var n;return Object(q.a)("changeWindowSize")((n={},Object(m.a)(n,"width",e),Object(m.a)(n,"height",t),n))}(window.innerWidth,window.innerHeight))}),[n]),r=function(){window.removeEventListener("resize",a,!1),window.removeEventListener("orientationchange",a,!1)};return Object(c.useEffect)((function(){return a(),window.addEventListener("resize",a),window.addEventListener("orientationchange",a,!1),r})),t},Re=i.a.memo((function(e){var t=e.children;return i.a.createElement(C.IntlProvider,{intlSelector:function(e){return Object(f.isImmutable)(e.get("intl"))?e.get("intl").toJS():e.get("intl")}},t)})),Pe=i.a.memo((function(){return i.a.createElement(l.Provider,{store:A},i.a.createElement(Re,null,i.a.createElement(Te,null,i.a.createElement(I.a,null,i.a.createElement(Ue,null)))))}));o.a.render(i.a.createElement(Pe,null),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.07e3bfed.chunk.js.map