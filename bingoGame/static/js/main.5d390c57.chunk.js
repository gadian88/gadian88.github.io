(this["webpackJsonpbingo-game"]=this["webpackJsonpbingo-game"]||[]).push([[0],{224:function(e,t,n){e.exports=n(388)},230:function(e,t,n){},235:function(e,t,n){},306:function(e,t,n){},307:function(e,t,n){},388:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(35),l=n.n(c),o=(n(229),n(230),n(19)),i=n(20),u=n(21),s=n(22),m=n(23),p=n(33),f="RESET_GAMES",g="SELECT_NUMBER",b="CHANGE_TURN",h="SHOW_ALERT",v="CLOSE_ALERT";function y(e){return{type:h,message:e}}var d=n(399),O=n(404),E=n(405),j=n(403),w=n(29),N=n(401),T=(n(235),n(407)),k=n(408),_=n(397),C=n(398),B=n(95),A=n(396),I=n(402);function L(e){var t=e.playerId,n=e.bingoList,r=e.gameTurn,c=e.bingoButtonClick,l=e.callNumbers;return a.a.createElement("div",{className:"BingoGameBoard ".concat(1===t?"left-player":"rigth-player"," ").concat(r===t?"is-turn":"")},a.a.createElement("p",{className:"player-name"},"player ".concat(t+1)),a.a.createElement("div",{className:"player-game"},a.a.createElement(N.a,{textAlign:"center",className:"bingo-game-board ".concat(-1===r?"":"bingo-game-board-start"),celled:!0},a.a.createElement(N.a.Body,null,T.a(25!==n.length?k.a(1,26).fill(void 0):n,A.a,_.a((function(e){var t=Object(w.a)(e,2),n=t[0];t[1];return Math.floor(parseInt(n)/5)})),A.a,I.a((function(e){var t=Object(w.a)(e,2),n=t[0],r=t[1];return a.a.createElement(N.a.Row,{key:10*n},C.a((function(e){var t=Object(w.a)(e,2),n=t[0],r=t[1];return a.a.createElement(N.a.Cell,{className:-1!==l.indexOf(r)?"selected":"",key:n,onClick:function(e){return c(r)}},r)}),r))})),B.a)))))}L.defaultProps={playerId:1,bingoList:[]};var P=function(e){function t(){var e,n;Object(o.a)(this,t);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(a)))).bingoButtonClick=function(e){var t=n.props,r=t.gameTurn,a=t.callNumbers,c=n.props.player.playerId;return void 0!==e&&-1!==r&&(c!==r?(n.props.show_alert("\ud574\ub2f9 \ucc28\ub840\uac00 \uc544\ub2d9\ub2c8\ub2e4."),!1):-1===a.indexOf(e)&&n.props.select_number(e))},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.player,t=e.playerId,n=e.bingoList,r=this.props.gameTurn;return a.a.createElement(L,{playerId:t,bingoList:n,gameTurn:r,callNumbers:this.props.callNumbers,bingoButtonClick:this.bingoButtonClick})}}]),t}(r.Component),S=P=Object(p.b)((function(e){return{callNumbers:e.commands.callNumbers}}),(function(e){return{select_number:function(t){return e(function(e){return{type:g,number:e}}(t))},show_alert:function(t){return e(y(t))}}}))(P),x=n(10),D=n.n(x);n(306);function W(e){var t=e.gameTurn,n=e.players;return a.a.createElement("div",{id:"GameLog"},-1===t?null:a.a.createElement(a.a.Fragment,null,a.a.createElement("p",null,"Turn : ",-1===t?"":"".concat(t+1)),D()(n).map((function(e,t){return a.a.createElement(a.a.Fragment,{key:t},a.a.createElement("p",null,"player ".concat(e.playerId+1)),a.a.createElement("p",null,"bingo : ",e.bingo?JSON.stringify(e.bingo):""))})).value()))}var M=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return a.a.createElement(W,{gameTurn:this.props.gameTurn,players:this.props.players})}}]),t}(r.Component),G=M=Object(p.b)((function(e){return{gameTurn:e.commands.gameTurn,players:e.commands.players}}))(M),R=(n(307),n(400));function U(e){var t=e.is_show,n=e.close_alert,r=e.message;return a.a.createElement(R.a,{size:"mini",open:t,onClose:n},a.a.createElement(R.a.Content,null,a.a.createElement("p",null,r)),a.a.createElement(R.a.Actions,null,a.a.createElement(j.a,{onClick:n,positive:!0,icon:"checkmark",labelPosition:"right",content:"\ud655\uc778"})))}var F=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return console.log(this.props),a.a.createElement(U,{is_show:this.props.is_show,message:this.props.message,close_alert:this.props.close_alert})}}]),t}(r.Component),H=F=Object(p.b)((function(e){return{is_show:e.alert.is_show,message:e.alert.message}}),(function(e){return{close_alert:function(){return e({type:v})},show_alert:function(t){return e(y(t))}}}))(F);function J(e){var t=e.gameTurn,n=e.players,r=e.resetButtonClickHandler;return a.a.createElement(d.a,null,a.a.createElement(H,null),a.a.createElement(O.a,{id:"MainPage",textAlign:"center",verticalAlign:"middle"},a.a.createElement(O.a.Column,{className:"content"},a.a.createElement(O.a,{className:"title"},a.a.createElement(O.a.Column,null,a.a.createElement(E.a,{as:"h1",color:"teal",textAlign:"center"},"Bingo Game"))),a.a.createElement(O.a,{className:"content"},a.a.createElement(S,{gameTurn:t,player:n[0]}),a.a.createElement("div",{className:"status"},a.a.createElement("div",{className:"log"},a.a.createElement(G,null)),a.a.createElement("div",{className:"buttons"},a.a.createElement(j.a,{onClick:r,size:"massive",color:"teal"},-1===t?"Game Start":"Game Reset"))),a.a.createElement(S,{gameTurn:t,player:n[1]})))))}var z=function(e){function t(){var e,n;Object(o.a)(this,t);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(a)))).checkWinnerPlayer=function(e){var t=n.props,r=t.players,a=t.callNumbers,c=t.DEFAULT_WINS;if(e.callNumbers.length===a.length){var l=D()(r).filter((function(e){return e.bingo.length>=c})).value();if(0===l.length)return!1;1===l.length?(n.props.showAlert("".concat(l[0].playerId+1,"P\uac00 \ube59\uace0\ub97c \uc644\uc131\ud588\uc2b5\ub2c8\ub2e4.")),n.props.resetButtonClick()):l.length>1&&(n.props.showAlert("\ubb34\uc2b9\ubd80 \uc785\ub2c8\ub2e4."),n.props.resetButtonClick())}},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){}},{key:"componentDidUpdate",value:function(e,t,n){this.checkWinnerPlayer(e)}},{key:"render",value:function(){return a.a.createElement(J,{gameTurn:this.props.gameTurn,players:this.props.players,resetButtonClickHandler:this.props.resetButtonClick})}}]),t}(r.Component),$=z=Object(p.b)((function(e){return{gameTurn:e.commands.gameTurn,players:e.commands.players,callNumbers:e.commands.callNumbers,DEFAULT_WINS:e.commands.DEFAULT_WINS}}),(function(e){return{resetButtonClick:function(){return e({type:f})},showAlert:function(t){return e(y(t))}}}))(z);var q=function(){return a.a.createElement($,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var K=n(58),Q=n(24);function V(e,t){if(!e||!t)return!1;var n=function(e,t){return D()(e).toPairs().groupBy((function(e){var t=Object(w.a)(e,2),n=t[0];t[1];return Math.floor(parseInt(n)/5)})).map((function(e){return D.a.flatMap(e,(function(e){var t=Object(w.a)(e,2);t[0];return t[1]}))})).filter((function(e){return 5===D()(t).filter((function(t){return-1!==e.indexOf(t)})).value().length})).value()}(e,t),r=function(e,t){return D()(e).toPairs().groupBy((function(e){var t=Object(w.a)(e,2),n=t[0];t[1];return parseInt(n)%5})).map((function(e){return D.a.flatMap(e,(function(e){var t=Object(w.a)(e,2);t[0];return t[1]}))})).filter((function(e){return 5===D()(t).filter((function(t){return-1!==e.indexOf(t)})).value().length})).value()}(e,t),a=function(e,t){var n=D()(D.a.range(25)).filter((function(e){return e%6===0})).value(),r=D()(D.a.range(25)).filter((function(e){return e%4===0})).value(),a=D()(e).filter((function(e,t){return-1!==n.indexOf(t)})).filter((function(e,n){return-1!==t.indexOf(e)})).value(),c=D()(e).filter((function(e,t){return-1!==r.indexOf(t)})).filter((function(e,n){return-1!==t.indexOf(e)})).value();return D.a.concat(5===a.length?[a]:[],5===c.length?[c]:[])}(e,t);return D.a.concat(n,r,a)}function X(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?X(n,!0).forEach((function(t){Object(Q.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):X(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Z={DEFAULT_WINS:5,players:[{playerId:0,bingoList:[],bingo:[]},{playerId:1,bingoList:[],bingo:[]}],callNumbers:[],gameTurn:-1},ee={is_show:!1,message:""},te=Object(K.b)({commands:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return Object.assign({},e,{players:D.a.chain().range(2).map((function(e){return{playerId:e,bingoList:D()(D.a.range(1,26)).shuffle().value(),bingo:[]}})).value(),gameTurn:0,callNumbers:[]});case g:var n=e.callNumbers;return n.push(t.number),Object.assign({},e,{callNumbers:n,gameTurn:(e.gameTurn+1)%2,players:D()(e.players).map((function(e){return Y({},e,{bingo:V(e.bingoList,n)})})).value()});case b:return Object.assign({},e,{gameTurn:(e.gameTurn+1)%2});default:return e}},alert:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return Object.assign({},e,{is_show:!e.is_show,message:t.message});case v:return Object.assign({},e,{is_show:!e.is_show,message:""});default:return e}}}),ne=Object(K.c)(te);l.a.render(a.a.createElement(p.a,{store:ne},a.a.createElement(q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[224,1,2]]]);
//# sourceMappingURL=main.5d390c57.chunk.js.map