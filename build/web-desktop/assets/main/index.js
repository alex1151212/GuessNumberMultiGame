System.register("chunks:///_virtual/Application.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Application.type.ts","./Parameter.ts","./Client.ts","./Event.type.ts"],(function(e){"use strict";var t,n,a,r,i,s,o,c,u,l,f,p,d,m,g,v,y;return{setters:[function(e){t=e.applyDecoratedDescriptor,n=e.inheritsLoose,a=e.initializerDefineProperty,r=e.assertThisInitialized,i=e.createClass,s=e.asyncToGenerator,o=e.regeneratorRuntime},function(e){c=e.cclegacy,u=e._decorator,l=e.Component,f=e.director,p=e.game},function(e){d=e.default},function(e){m=e.default},function(e){g=e.default},function(e){v=e.GameEventType,y=e.ClientEventType}],execute:function(){var h,G,b,E,k;c._RF.push({},"9bf931ZtlpL/JHKE+QjJ3w5","Application",void 0);var w=u.ccclass,C=u.property;e("default",(h=C(d),w(((k=function(e){function t(){for(var t,n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return t=e.call.apply(e,[this].concat(i))||this,a(t,"config",E,r(t)),t}n(t,e);var c=t.prototype;return c.onLoad=function(){var e=s(o().mark((function e(){var n=this;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.instance){e.next=4;break}return this.destroy(),console.warn("Multiple "+t.name+" is not allowed."),e.abrupt("return");case 4:return t.instance=this,f.addPersistRootNode(this.node),p.frameRate=61,this.overrideDefaultConfig(),e.next=10,g.Instance.init();case 10:GameEvent.on(y.OnMessage,(function(e){n._messageHandler(e)}));case 11:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}(),c._messageHandler=function(e){if(e)switch(e.type){case v.GetGames:GameEvent.emit(v.GetGames,e.data);break;case v.GetPlayers:break;case v.Playing:GameEvent.emit(v.Playing,e.data);break;case v.GameStart:GameEvent.emit(v.GameStart);break;case v.NormalEnd:GameEvent.emit(v.NormalEnd,e.data)}},c.overrideDefaultConfig=function(){var e=this.config;e.serverAddress=m.get("gameDomain",e.serverAddress)},i(t,null,[{key:"Instance",get:function(){return this.instance}},{key:"config",get:function(){return this.instance.config}},{key:"mutableConfig",get:function(){return this.instance.config}}]),t}(l)).instance=null,E=t((b=k).prototype,"config",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),G=b))||G));c._RF.pop()}}}));

System.register("chunks:///_virtual/Application.type.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){"use strict";var i,t,r,o,n;return{setters:[function(e){i=e.applyDecoratedDescriptor,t=e.initializerDefineProperty},function(e){r=e.cclegacy,o=e._decorator,n=e.CCString}],execute:function(){var s,a,c,p,l,u,f,h;e("ApplicationMode",void 0),r._RF.push({},"2777euAbhVKjotpg6MkG+0r","Application.type",void 0),function(e){e[e.Release=0]="Release",e[e.Debug=1]="Debug"}(h||(h=e("ApplicationMode",{})));var d=o.ccclass,b=o.property;e("default",(s=d("ApplicationConfig"),a=b(n),c=b(n),s((u=i((l=function(){t(this,"name",u,this),t(this,"version",f,this),this.homeURL="",this.showHome=!0,this.serverAddress="",this.mode=h.Release}).prototype,"name",[a],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),f=i(l.prototype,"version",[c],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),p=l))||p));r._RF.pop()}}}));

System.register("chunks:///_virtual/ButtonManager.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Event.type.ts","./GameRoomView.ts"],(function(e){"use strict";var t,o,n,i,a,r,c,u,l,s;return{setters:[function(e){t=e.applyDecoratedDescriptor,o=e.inheritsLoose,n=e.initializerDefineProperty,i=e.assertThisInitialized},function(e){a=e.cclegacy,r=e.Node,c=e._decorator,u=e.Component},function(e){l=e.ButtonEventType},function(e){s=e.GameRoomView}],execute:function(){var m,p,b,g,f,y,h,v,w;a._RF.push({},"03c7cFWAchA97VmrpQV2PM4","ButtonManager",void 0);var d=c,B=d.ccclass,R=d.property;e("ButtonManager",(m=B("ButtonManager"),p=R(s),b=R(r),g=R(r),m((h=t((y=function(e){function t(){for(var t,o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return t=e.call.apply(e,[this].concat(a))||this,n(t,"gameRoomView",h,i(t)),n(t,"game",v,i(t)),n(t,"lobby",w,i(t)),t}o(t,e);var a=t.prototype;return a.onLoad=function(){var e=this;GameEvent.on(l.OnJoinGameBtnClick,this._goToGame,this),GameEvent.on(l.OnBackLobbyBtnClick,(function(){e._goToLobby()}),this)},a._goToLobby=function(){this.lobby.active=!0,this.gameRoomView.node.active=!0,this.game.active=!1},a._goToGame=function(){this.lobby.active=!1,this.gameRoomView.node.active=!1,this.game.active=!0},t}(u)).prototype,"gameRoomView",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),v=t(y.prototype,"game",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),w=t(y.prototype,"lobby",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),f=y))||f));a._RF.pop()}}}));

System.register("chunks:///_virtual/Client.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Connection.ts","./Application.ts","./Event.type.ts"],(function(n){"use strict";var e,t,i,a,r,s,c,o,u;return{setters:[function(n){e=n.inheritsLoose,t=n.createClass,i=n.asyncToGenerator,a=n.regeneratorRuntime},function(n){r=n.cclegacy,s=n.EventTarget},function(n){c=n.default},function(n){o=n.default},function(n){u=n.GameEventType}],execute:function(){r._RF.push({},"1794bPXTpNPFL4TUfpv1G4y","Client",void 0),n("default",function(n){function r(){var e;return(e=n.call(this)||this).playerId=null,e._connection=null,e}e(r,n);var s=r.prototype;return s._send=function(n){var e=JSON.stringify(n);this._connection.websocket.send(e)},s.init=function(){var n=i(a().mark((function n(){var e,t=this;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return this._connection=new c(o.config.serverAddress,o.config.name),e=function(n){t.playerId=n},n.next=4,this._connection.createConnection(e.bind(this));case 4:return n.next=6,new Promise((function(n){setInterval((function(){null!=t.playerId&&n(t.playerId)}),500)}));case 6:return this.getGames(),n.abrupt("return",this.playerId);case 8:case"end":return n.stop()}}),n,this)})));return function(){return n.apply(this,arguments)}}(),s.getGames=function(){var n={type:u.GetGames};this._send(n)},s.joinGame=function(n,e){var t={gameId:n,gameAnswer:e},i={type:u.JoinGame,data:t};this._send(i)},s.playGame=function(n){var e={value:n},t={type:u.Playing,data:e};this._send(t)},s.createGame=function(n){var e={gameId:n},t={type:u.CreateGame,data:e};this._send(t)},s.leaveGame=function(){var n={type:u.LeaveGame};this._send(n)},t(r,null,[{key:"Instance",get:function(){return this.instance||(this.instance=new r),this.instance}}]),r}(s)).instance=null,r._RF.pop()}}}));

System.register("chunks:///_virtual/Client.type.ts",["cc"],(function(){"use strict";var e;return{setters:[function(t){e=t.cclegacy}],execute:function(){e._RF.push({},"cd4aesvaOpDHbW1aJJWkEke","Client.type",void 0),e._RF.pop()}}}));

System.register("chunks:///_virtual/Connection.ts",["./rollupPluginModLoBabelHelpers.js","cc","./NetworkWebsocket.ts"],(function(t){"use strict";var e,n,o,r;return{setters:[function(t){e=t.asyncToGenerator,n=t.regeneratorRuntime},function(t){o=t.cclegacy},function(t){r=t.default}],execute:function(){var i;t("PathName",void 0),o._RF.push({},"829758xHZJE94z50Z44kM/u","Connection",void 0),i||(i=t("PathName",{}));t("default",function(){function t(t,e){this.websocket=void 0,this.gameDomain="",this.gameDomain=t}return t.prototype.createConnection=function(){var t=e(n().mark((function t(e){return n().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.websocket=new r(this.gameDomain,e);case 1:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}(),t}());o._RF.pop()}}}));

System.register("chunks:///_virtual/CreateGame.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Event.type.ts","./Client.ts"],(function(e){"use strict";var t,n,r,a,i,o,u,c,s,l,p,m;return{setters:[function(e){t=e.applyDecoratedDescriptor,n=e.inheritsLoose,r=e.initializerDefineProperty,a=e.assertThisInitialized,i=e.createClass},function(e){o=e.cclegacy,u=e.EditBox,c=e.Button,s=e._decorator,l=e.Component},function(e){p=e.ButtonEventType},function(e){m=e.default}],execute:function(){var f,d,g,I,h,y,v;o._RF.push({},"7314fF9u3ZKFbJTSLSNy9vV","CreateGame",void 0);var C=s,G=C.ccclass,E=C.property;e("CreateGame",(f=G("CreateGame"),d=E(u),g=E(c),f((y=t((h=function(e){function t(){for(var t,n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return t=e.call.apply(e,[this].concat(i))||this,r(t,"gameIdInput",y,a(t)),r(t,"enterButton",v,a(t)),t._gameId=null,t}n(t,e);var o=t.prototype;return o.onLoad=function(){var e=this;this.gameIdInput.node.on(u.EventType.TEXT_CHANGED,(function(){e.gameId=e.gameIdInput.string}),this),this.enterButton.node.on(c.EventType.CLICK,this._createGameEnter,this),GameEvent.on(p.OnCreateGameBtnClick,(function(e){m.Instance.createGame(e)}))},o._createGameEnter=function(){GameEvent.emit(p.OnCreateGameBtnClick,this.gameId)},i(t,[{key:"gameId",get:function(){return this._gameId},set:function(e){this._gameId=e}}]),t}(l)).prototype,"gameIdInput",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),v=t(h.prototype,"enterButton",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),I=h))||I));o._RF.pop()}}}));

System.register("chunks:///_virtual/Event.type.ts",["cc"],(function(e){"use strict";var n,t;return{setters:[function(e){n=e.cclegacy,t=e.EventTarget}],execute:function(){var a,i,o;e({ButtonEventType:void 0,ClientEventType:void 0,GameEventType:void 0}),n._RF.push({},"fb01dnM6dhHtI0eNDR0qnXM","Event.type",void 0),function(e){e.OnMessage="OnMessage"}(a||(a=e("ClientEventType",{}))),function(e){e.GetGames="GetGames",e.CreateGame="CreateGame",e.GetPlayers="GetPlayers",e.JoinGame="JoinGame",e.Playing="Playing",e.GameStart="GameStart",e.NormalEnd="NormalEnd",e.SendValue="SendValue",e.LeaveGame="LeaveGame",e.BackToLobby="BackToLobby"}(i||(i=e("GameEventType",{}))),function(e){e.OnCreateGameBtnClick="OnCreateGameBtnClick",e.OnJoinGameBtnClick="OnJoinGameBtnClick",e.OnBackLobbyBtnClick="OnBackLobbyBtnClick",e.OnOpenInputGameAnswerPopupClick="OnOpenInputGameAnswerPopupClick",e.OnCloseInputGameAnswerPopupClick="OnCloseInputGameAnswerPopupClick"}(o||(o=e("ButtonEventType",{}))),window.GameEvent=new t,n._RF.pop()}}}));

System.register("chunks:///_virtual/Game.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Event.type.ts","./Client.ts"],(function(t){"use strict";var e,n,i,a,o,u,r,l,c,s,p,v;return{setters:[function(t){e=t.applyDecoratedDescriptor,n=t.inheritsLoose,i=t.initializerDefineProperty,a=t.assertThisInitialized},function(t){o=t.cclegacy,u=t._decorator,r=t.Button,l=t.EditBox,c=t.Component},function(t){s=t.GameEventType,p=t.ButtonEventType},function(t){v=t.default}],execute:function(){var b,m,f,h,y,d,B,G,E;o._RF.push({},"055dbYyScVCvowmp3sMbOl4","Game",void 0);var k=u.ccclass,L=u.property;t("Game",(b=k("Game"),m=L(r),f=L(r),h=L(l),b((B=e((d=function(t){function e(){for(var e,n=arguments.length,o=new Array(n),u=0;u<n;u++)o[u]=arguments[u];return e=t.call.apply(t,[this].concat(o))||this,i(e,"enterButton",B,a(e)),i(e,"backButton",G,a(e)),i(e,"valueInputBox",E,a(e)),e._value=null,e}n(e,t);var o=e.prototype;return o.onLoad=function(){var t=this;this.backButton.node.on(r.EventType.CLICK,this._backToLobby,this),this.enterButton.node.on(r.EventType.CLICK,this._sendValue,this),GameEvent.on(s.NormalEnd,(function(){t.backButton.enabled=!0}),this),GameEvent.on(s.LeaveGame,(function(){v.Instance.leaveGame()}),this),GameEvent.on(s.GameStart,this.init,this),GameEvent.on(s.SendValue,(function(t){v.Instance.playGame(t)}),this)},o.init=function(){this.backButton.enabled=!0,this.valueInputBox.string=""},o._sendValue=function(){GameEvent.emit(s.SendValue,this.valueInputBox.string)},o._backToLobby=function(){GameEvent.emit(s.LeaveGame),GameEvent.emit(p.OnBackLobbyBtnClick)},e}(c)).prototype,"enterButton",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),G=e(d.prototype,"backButton",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),E=e(d.prototype,"valueInputBox",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),y=d))||y));o._RF.pop()}}}));

System.register("chunks:///_virtual/GameEffect.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Event.type.ts","./Client.ts"],(function(e){"use strict";var t,n,a,r,i,o,c,l,s,f,u,m;return{setters:[function(e){t=e.applyDecoratedDescriptor,n=e.inheritsLoose,a=e.initializerDefineProperty,r=e.assertThisInitialized},function(e){i=e.cclegacy,o=e._decorator,c=e.Label,l=e.tween,s=e.Vec3,f=e.Component},function(e){u=e.GameEventType},function(e){m=e.default}],execute:function(){var g,p,d,E,b,h,y;i._RF.push({},"ca0d1Fe1+NCSoiFZ5fMPmDw","GameEffect",void 0);var L=o.ccclass,v=o.property;e("GameEffect",(g=L("Game"),p=v(c),d=v(c),g((h=t((b=function(e){function t(){for(var t,n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return t=e.call.apply(e,[this].concat(i))||this,a(t,"gameStartLabel",h,r(t)),a(t,"gameEndLabel",y,r(t)),t}n(t,e);var i=t.prototype;return i.onLoad=function(){GameEvent.on(u.GameStart,this._gameStartEffect,this),GameEvent.on(u.NormalEnd,this._gameEndEffect,this)},i._gameStartEffect=function(){console.log("Start"),l(this.gameStartLabel.node).set({scale:new s(1,1,1)}).to(1.5,{scale:new s(0,0,0)},{easing:"fade"}).start()},i._gameEndEffect=function(e){console.log("Game End"),e.winner==m.Instance.playerId?this.gameEndLabel.string="Victory":this.gameEndLabel.string="Defeat",l(this.gameEndLabel.node).set({scale:new s(0,0,0)}).to(1.5,{scale:new s(1,1,1)},{easing:"fade"}).start()},t}(f)).prototype,"gameStartLabel",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),y=t(b.prototype,"gameEndLabel",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),E=b))||E));i._RF.pop()}}}));

System.register("chunks:///_virtual/GameRoomItem.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Event.type.ts"],(function(e){"use strict";var t,n,a,o,i,r,l,u,m,s,c;return{setters:[function(e){t=e.applyDecoratedDescriptor,n=e.inheritsLoose,a=e.initializerDefineProperty,o=e.assertThisInitialized,i=e.createClass},function(e){r=e.cclegacy,l=e._decorator,u=e.Label,m=e.Button,s=e.Component},function(e){c=e.ButtonEventType}],execute:function(){var p,y,b,f,g,h,v,L,_;r._RF.push({},"3ba7a/uPvdB8oZzBJbjWvk1","GameRoomItem",void 0);var d=l.ccclass,A=l.property;e("GameRoomItem",(p=d("GameRoomItem"),y=A(u),b=A(u),f=A(m),p((v=t((h=function(e){function t(){for(var t,n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return t=e.call.apply(e,[this].concat(i))||this,a(t,"gameNameLabel",v,o(t)),a(t,"playerAmountLabel",L,o(t)),a(t,"button",_,o(t)),t._gameName=null,t._playerAmount=null,t}n(t,e);var r=t.prototype;return r.onLoad=function(){this.button.node.on(m.EventType.CLICK,(function(){GameEvent.emit(c.OnOpenInputGameAnswerPopupClick)}))},r.setData=function(e,t){this._gameName=e.toString(),this._playerAmount=t.toString(),this.setDisplay()},r.setDisplay=function(){this.gameNameLabel.string=this._gameName,this.playerAmountLabel.string=this._playerAmount},i(t,[{key:"gameName",get:function(){return this._gameName}}]),t}(s)).prototype,"gameNameLabel",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),L=t(h.prototype,"playerAmountLabel",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),_=t(h.prototype,"button",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),g=h))||g));r._RF.pop()}}}));

System.register("chunks:///_virtual/GameRoomView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Event.type.ts","./GameRoomItem.ts","./Client.ts"],(function(e){"use strict";var t,o,n,a,r,i,m,l,c,s,u,f,p,g,h,y,R;return{setters:[function(e){t=e.applyDecoratedDescriptor,o=e.inheritsLoose,n=e.initializerDefineProperty,a=e.assertThisInitialized,r=e.createClass},function(e){i=e.cclegacy,m=e._decorator,l=e.UITransform,c=e.Prefab,s=e.Vec2,u=e.NodePool,f=e.instantiate,p=e.Button,g=e.Component},function(e){h=e.GameEventType},function(e){y=e.GameRoomItem},function(e){R=e.default}],execute:function(){var G,_,d,v,C,b,P,w,I;i._RF.push({},"a827fw4y7VPV6jAltPQQVW/","GameRoomView",void 0);var N=m.ccclass,V=m.property;e("GameRoomView",(G=N("GameRoomView"),_=V(l),d=V(c),v=V(s),G((P=t((b=function(e){function t(){for(var t,o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];return t=e.call.apply(e,[this].concat(r))||this,n(t,"scrollContent",P,a(t)),n(t,"gameRoomItemPrefab",w,a(t)),n(t,"horizontalSpacing",I,a(t)),t._root=null,t._gameName=null,t._gameRoomPool=new u,t}o(t,e);var i=t.prototype;return i.onLoad=function(){var e=this;this._root=this.scrollContent.node,GameEvent.on(h.JoinGame,(function(t){R.Instance.joinGame(e.gameName,t)}),this),GameEvent.on(h.GetGames,this._displayGameRoom,this)},i._displayGameRoom=function(e){this.currentGameRooms.length>0&&this._reset();var t=e;for(var o in t){var n=this._getGameRoom();n.node.parent=this.scrollContent.node,n.setData(t[o].id,t[o].playerAmount)}},i._getGameRoom=function(){var e,t,o=this;return(null!=(e=this._gameRoomPool.get())?e:((t=f(o.gameRoomItemPrefab)).on("recycle",(function(){o._recycleGameRoom(t.getComponent(y))})),t.getComponent(p).node.on(p.EventType.CLICK,(function(){o._gameName=t.getComponent(y).gameName})),t)).getComponent(y)},i._reset=function(){var e=this;this.currentGameRooms.forEach((function(t){t.node.parent=null,e._recycleGameRoom(t)}))},i._recycleGameRoom=function(e){this._gameRoomPool.put(e.node)},r(t,[{key:"currentGameRooms",get:function(){return this._root.getComponentsInChildren(y)}},{key:"gameName",get:function(){return this._gameName},set:function(e){this._gameName=e}}]),t}(g)).prototype,"scrollContent",[_],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),w=t(b.prototype,"gameRoomItemPrefab",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),I=t(b.prototype,"horizontalSpacing",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),C=b))||C));i._RF.pop()}}}));

System.register("chunks:///_virtual/InputGameAnswer.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Event.type.ts"],(function(e){"use strict";var n,t,r,i,a,o,s,u,c,p,m,l;return{setters:[function(e){n=e.applyDecoratedDescriptor,t=e.inheritsLoose,r=e.initializerDefineProperty,i=e.assertThisInitialized,a=e.createClass},function(e){o=e.cclegacy,s=e.EditBox,u=e.Button,c=e._decorator,p=e.Component},function(e){m=e.ButtonEventType,l=e.GameEventType}],execute:function(){var g,w,f,A,v,h,y;o._RF.push({},"1ce3cb2gTJI7JZhbXYDvfN3","InputGameAnswer",void 0);var G=c,E=G.ccclass,I=G.property;e("InputGameAnswer",(g=E("InputGameAnswer"),w=I(s),f=I(u),g((h=n((v=function(e){function n(){for(var n,t=arguments.length,a=new Array(t),o=0;o<t;o++)a[o]=arguments[o];return n=e.call.apply(e,[this].concat(a))||this,r(n,"gameAnswerInput",h,i(n)),r(n,"enterButton",y,i(n)),n._gameAnswer=null,n}t(n,e);var o=n.prototype;return o.onLoad=function(){var e=this;this.gameAnswerInput.node.on(s.EventType.TEXT_CHANGED,(function(){e.gameAnswer=e.gameAnswerInput.string}),this),this.enterButton.node.on(u.EventType.CLICK,this._gameAnswerGameEnter,this),GameEvent.on(m.OnJoinGameBtnClick,(function(){GameEvent.emit(l.JoinGame,e.gameAnswer)}))},o._gameAnswerGameEnter=function(){GameEvent.emit(m.OnJoinGameBtnClick,this.gameAnswer),GameEvent.emit(m.OnCloseInputGameAnswerPopupClick)},a(n,[{key:"gameAnswer",get:function(){return this._gameAnswer},set:function(e){this._gameAnswer=e}}]),n}(p)).prototype,"gameAnswerInput",[w],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),y=n(v.prototype,"enterButton",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),A=v))||A));o._RF.pop()}}}));

System.register("chunks:///_virtual/Lobby.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Event.type.ts"],(function(t){"use strict";var e,n,o,i,c;return{setters:[function(t){e=t.inheritsLoose},function(t){n=t.cclegacy,o=t._decorator,i=t.Component},function(t){c=t.GameEventType}],execute:function(){var r;n._RF.push({},"c836eoPOZBH14dS5pQaM8/B","Lobby",void 0);var s=o.ccclass;o.property,t("Lobby",s("Lobby")(r=function(t){function n(){return t.apply(this,arguments)||this}e(n,t);var o=n.prototype;return o.onLoad=function(){this._init(),GameEvent.on(c.BackToLobby,(function(){GameEvent.emit(c.GetGames)}))},o._init=function(){GameEvent.emit(c.GetGames)},n}(i))||r);n._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./ButtonManager.ts","./GameEffect.ts","./Game.ts","./Lobby.ts","./GameRoomItem.ts","./GameRoomView.ts","./MessageLogView.ts","./Application.type.ts","./Application.ts","./Client.ts","./Client.type.ts","./Connection.ts","./NetworkWebsocket.ts","./Event.type.ts","./CreateGame.ts","./InputGameAnswer.ts","./Popup.ts","./PopupB.ts","./Message.type.ts","./Parameter.ts"],(function(){"use strict";return{setters:[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){}}}));

System.register("chunks:///_virtual/Message.type.ts",["cc"],(function(){"use strict";var e;return{setters:[function(t){e=t.cclegacy}],execute:function(){e._RF.push({},"3044f1zPRpOTIAYJQ220Aop","Message.type",void 0),e._RF.pop()}}}));

System.register("chunks:///_virtual/MessageLogView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Event.type.ts","./Client.ts"],(function(e){"use strict";var t,n,o,r,i,a,s,l,c,u,g,p,f,h,y,L;return{setters:[function(e){t=e.applyDecoratedDescriptor,n=e.inheritsLoose,o=e.initializerDefineProperty,r=e.assertThisInitialized,i=e.createClass},function(e){a=e.cclegacy,s=e._decorator,l=e.UITransform,c=e.Prefab,u=e.Vec2,g=e.NodePool,p=e.instantiate,f=e.Label,h=e.Component},function(e){y=e.GameEventType},function(e){L=e.default}],execute:function(){var d,_,m,b,v,w,P,C,I;a._RF.push({},"edf4dqKLndND4EEO9j8j4in","MessageLogView",void 0);var E=s.ccclass,z=s.property;e("MessageLogView",(d=E("MessageLogView"),_=z(l),m=z(c),b=z(u),d((P=t((w=function(e){function t(){for(var t,n=arguments.length,i=new Array(n),a=0;a<n;a++)i[a]=arguments[a];return t=e.call.apply(e,[this].concat(i))||this,o(t,"scrollContent",P,r(t)),o(t,"messageLogItemPrefab",C,r(t)),o(t,"verticalSpacing",I,r(t)),t._root=null,t._logPool=new g,t}n(t,e);var a=t.prototype;return a.onLoad=function(){var e=this;this._root=this.scrollContent.node,GameEvent.on(y.Playing,this._displayLog.bind(this)),GameEvent.on(y.GameStart,(function(){e.currentLogs&&e._reset}))},a._displayLog=function(e){var t;t=e.round===L.Instance.playerId?"這回合提示: "+e.resp.a+"A"+e.resp.b+"B":"對手這回合得到的提示: "+e.resp.a+"A"+e.resp.b+"B";var n=this._getNewLog();n.string=t,n.node.parent=this._root},a._getNewLog=function(){var e,t,n=this;return(null!=(e=this._logPool.get())?e:((t=p(n.messageLogItemPrefab)).on("recycle",(function(){n._recycleLog(t.getComponent(f))})),t)).getComponent(f)},a._recycleLog=function(e){this._logPool.put(e.node)},a._reset=function(){var e=this;this.currentLogs.forEach((function(t){t.node.parent=null,e._recycleLog(t)}))},i(t,[{key:"currentLogs",get:function(){return this._root.getComponentsInChildren(f)}}]),t}(h)).prototype,"scrollContent",[_],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),C=t(w.prototype,"messageLogItemPrefab",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),I=t(w.prototype,"verticalSpacing",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),v=w))||v));a._RF.pop()}}}));

System.register("chunks:///_virtual/NetworkWebsocket.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Event.type.ts"],(function(e){"use strict";var t,n,o,s;return{setters:[function(e){t=e.createClass},function(e){n=e.cclegacy,o=e.error},function(e){s=e.ClientEventType}],execute:function(){n._RF.push({},"079459BBhtPLL+5hp2+FD2g","NetworkWebsocket",void 0),e("default",function(){function e(e,t){this.websocket=null,this.connectionPromise=null,this.onReconnected=null,this.serverHost=e,this.startHandler=t,this.connect()}var n=e.prototype;return n.send=function(e){this.websocket.send(e)},n.disconnect=function(){this.websocket.close()},n.connect=function(){var e=this;this.websocket=new WebSocket(this.serverHost),this.websocket.onopen=function(){console.log("Open")},this.websocket.onmessage=function(t){var n=JSON.parse(t.data),o=n instanceof Object?n:JSON.parse(n);if(null!=o&&o.Id)return e.startHandler(null==o?void 0:o.Id);GameEvent.emit(s.OnMessage,o)},this.websocket.onerror=function(e){o(e)},this.websocket.onclose=function(){console.log("Close")}},t(e,[{key:"readyState",get:function(){return this.websocket.readyState}}]),e}()).TIMEOUT_SYMBOL=Symbol("TIMEOUT"),n._RF.pop()}}}));

System.register("chunks:///_virtual/Parameter.ts",["cc"],(function(e){"use strict";var t;return{setters:[function(e){t=e.cclegacy}],execute:function(){var r;t._RF.push({},"9ea48DSv9FPkIga5l//LOcZ","Parameter",void 0),(r||(r={})).get=function(e,t){var r,a;return void 0===t&&(t=null),null!=(a=e,r=new URL(document.location.href).searchParams.get(a))?r:t};e("default",r);t._RF.pop()}}}));

System.register("chunks:///_virtual/Popup.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var e,n,o,i,r,l,u,s,c,a;return{setters:[function(t){e=t.applyDecoratedDescriptor,n=t.inheritsLoose,o=t.initializerDefineProperty,i=t.assertThisInitialized,r=t.createClass},function(t){l=t.cclegacy,u=t.Node,s=t.Button,c=t._decorator,a=t.Component}],execute:function(){var p,f,h,y,b,d,v,w,m,B,g,k,C;l._RF.push({},"42740hmf/xBi60/Sq5mn32T","Popup",void 0);var _=c,z=_.ccclass,L=_.property;t("Popup",(p=z("Popup"),f=L({type:u,tooltip:"遮罩節點"}),h=L({type:u,tooltip:"彈窗節點"}),y=L({type:s,tooltip:"開啟按鈕"}),b=L({type:s,tooltip:"關閉按鈕"}),d=L({type:[s],tooltip:"更多的關閉按鈕"}),p((m=e((w=function(t){function e(){for(var e,n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return e=t.call.apply(t,[this].concat(r))||this,o(e,"mask",m,i(e)),o(e,"window",B,i(e)),o(e,"openButton",g,i(e)),o(e,"closeButton",k,i(e)),o(e,"closeButtons",C,i(e)),e}n(e,t);var l=e.prototype;return l.onLoad=function(){var t,e,n=this;null==(t=this.openButton)||t.node.on(s.EventType.CLICK,this.open.bind(this)),null==(e=this.closeButton)||e.node.on(s.EventType.CLICK,this.close.bind(this)),this.closeButtons.forEach((function(t){t.node.on(s.EventType.CLICK,n.close.bind(n))}))},l._openMask=function(){this.mask.active=!0},l._closeMask=function(){this.mask.active=!1},l.open=function(){this._openMask(),this.window.active=!0},l.close=function(){this._closeMask(),this.window.active=!1},r(e,[{key:"isVisible",get:function(){return this.window.active}}]),e}(a)).prototype,"mask",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),B=e(w.prototype,"window",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),g=e(w.prototype,"openButton",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),k=e(w.prototype,"closeButton",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),C=e(w.prototype,"closeButtons",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),v=w))||v));l._RF.pop()}}}));

System.register("chunks:///_virtual/PopupB.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Popup.ts"],(function(t){"use strict";var e,o,n,i,p,r,u,s;return{setters:[function(t){e=t.applyDecoratedDescriptor,o=t.inheritsLoose,n=t.initializerDefineProperty,i=t.assertThisInitialized},function(t){p=t.cclegacy,r=t.CCString,u=t._decorator},function(t){s=t.Popup}],execute:function(){var a,c,l,f,h,v,b;p._RF.push({},"806aaG4kvJJ0L1Tg8SzW/4Z","PopupB",void 0);var y=u,g=y.ccclass,E=y.property;t("PopupB",(a=g("PopupB"),c=E({type:r,tooltip:"開啟事件"}),l=E({type:r,tooltip:"關閉事件"}),a((v=e((h=function(t){function e(){for(var e,o=arguments.length,p=new Array(o),r=0;r<o;r++)p[r]=arguments[r];return e=t.call.apply(t,[this].concat(p))||this,n(e,"buttonOpenEvent",v,i(e)),n(e,"buttonCloseEvent",b,i(e)),e}o(e,t);var p=e.prototype;return p.onLoad=function(){t.prototype.onLoad.call(this),GameEvent.on(this.buttonOpenEvent,this._popupOpen,this),GameEvent.on(this.buttonCloseEvent,this._popupClose,this)},p._popupOpen=function(){this.open()},p._popupClose=function(){this.close()},e}(s)).prototype,"buttonOpenEvent",[c],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),b=e(h.prototype,"buttonCloseEvent",[l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),f=h))||f));p._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});