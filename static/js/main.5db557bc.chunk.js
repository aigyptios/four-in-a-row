(this["webpackJsonpfour-in-a-row"]=this["webpackJsonpfour-in-a-row"]||[]).push([[0],{14:function(e,n,t){e.exports=t(28)},19:function(e,n,t){},26:function(e,n,t){},27:function(e,n,t){},28:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(2),c=t.n(o),i=(t(19),t(1)),u=t(11),l=t(3),s=function(e){for(var n=[],t=0;t<7;t++){for(var r=[],a=0;a<6;a++)e?r.push(e[t][a]):r.push("EMPTY");n.push(r)}return n},d=function(e,n,t){var r=s(t),a=r[e].indexOf("EMPTY");return a>-1&&(r[e][a]=n),r},m=function(e){return"PLAYER_1"===e?"PLAYER_2":"PLAYER_2"===e?"PLAYER_1":"EMPTY"},p=function(){return{grid:s(),currentPlayer:"PLAYER_1"}},E=Object(l.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p(),n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"[GAME] Play Move":var t=n.payload.column,r=e.currentPlayer,a=d(t,r,e.grid),o=m(e.currentPlayer);return Object(u.a)({},e,{currentPlayer:o,grid:a});case"[GAME] Reset Game":return p();default:return Object(u.a)({},e)}}),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),f=t(4),y=t(5),_=t(7),h=t(6),v=(t(26),function(e){Object(_.a)(t,e);var n=Object(h.a)(t);function t(){return Object(f.a)(this,t),n.apply(this,arguments)}return Object(y.a)(t,[{key:"render",value:function(){return a.a.createElement("main",null,a.a.createElement("h1",null,"Four in a Row!"),a.a.createElement(g,null),a.a.createElement("button",{className:"btn--reset",onClick:this.props.resetGame},"New Game"))}}]),t}(a.a.Component)),P=Object(i.b)(null,(function(e){return{resetGame:function(){return e({type:"[GAME] Reset Game"})}}}))(v),b=(t(27),function(e){Object(_.a)(t,e);var n=Object(h.a)(t);function t(){return Object(f.a)(this,t),n.apply(this,arguments)}return Object(y.a)(t,[{key:"handleColumnClick",value:function(e){this.props.grid[e].indexOf("EMPTY")>-1&&this.props.playMove(e)}},{key:"render",value:function(){var e=this,n=this.props,t=n.grid,r=n.currentPlayer;return a.a.createElement("div",{className:"PLAYER_1"===r?"grid--player-1":"PLAYER_2"===r?"grid--player-2":"grid"},t.map((function(n,t){return a.a.createElement("div",{className:"grid__column",key:t,onClick:e.handleColumnClick.bind(e,t)},n.map((function(e,n){return a.a.createElement("div",{key:n,className:"PLAYER_1"===e?"grid__slot--player-1":"PLAYER_2"===e?"grid__slot--player-2":"grid__slot"})})))})))}}]),t}(a.a.Component)),g=Object(i.b)((function(e){return{grid:e.grid,currentPlayer:e.currentPlayer}}),(function(e){return{playMove:function(n){return e({type:"[GAME] Play Move",payload:{column:n}})}}}))(b);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(i.a,{store:E},a.a.createElement(P,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[14,1,2]]]);
//# sourceMappingURL=main.5db557bc.chunk.js.map