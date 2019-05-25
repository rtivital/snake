!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/snake/",n(n.s=11)}([function(e,t,n){"use strict";t.__esModule=!0,t.TILE_SIZE=10,t.PLAYGROUND_SIZE=40,t.INITIAL_SNAKE_SIZE=3,t.GAME_SPEED=50,t.COLOR_WHITE="#ffffff",t.COLOR_DARK_GRAY="#343a40",t.COLOR_RED="#fa5252",t.COLOR_LIME="#94d82d",t.COLOR_GREEN="#51cf66",t.COLOR_LIGHT_INDIGO="#edf2ff",t.COLOR_INDIGO="#4c6ef5"},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};t.__esModule=!0;var i=n(7),o=n(17),u=r(n(4)),a=r(n(8)),f=r(n(3));t.default=i.createStore(i.combineReducers({snake:u.default,bait:a.default,game:f.default}),void 0,o.devToolsEnhancer({}))},function(e,t,n){"use strict";t.__esModule=!0;var r=n(0);t.default=function(e){var t=e.width,n=e.height,i=r.TILE_SIZE*r.PLAYGROUND_SIZE;return{playgroundSize:i,playbroundBeginX:(t-i)/2,playbroundBeginY:(n-i)/2}}},function(e,t,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};t.__esModule=!0;var o=i(n(18));t.INITIALIZE_GAME="game/INITIALIZE_GAME",t.GAME_OVER="game/GAME_OVER",t.RESET="game/RESET",t.SET_DIRECTION="game/SET_DIRECTION",t.INCREMENT_SCORE="game/INCREMENT_SCORE",t.initialState={gameOver:!1,direction:"up",score:0,initialized:!1},t.setDirection=function(e){return{type:t.SET_DIRECTION,payload:e}},t.initializeGame=function(){return{type:t.INITIALIZE_GAME}},t.reset=function(){return{type:t.RESET}},t.gameOver=function(){return{type:t.GAME_OVER}},t.incrementScore=function(){return{type:t.INCREMENT_SCORE}},t.default=function(e,n){switch(void 0===e&&(e=t.initialState),n.type){case t.INITIALIZE_GAME:return r({},e,{initialized:!0});case t.RESET:return r({},t.initialState,{initialized:!0});case t.GAME_OVER:return r({},e,{gameOver:!0});case t.SET_DIRECTION:return o.default(e.direction,n.payload)?e:r({},e,{direction:n.payload});case t.INCREMENT_SCORE:return r({},e,{score:e.score+1});default:return e}}},function(e,t,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};t.__esModule=!0;var i=n(0),o=n(3);t.MOVE="snake/MOVE",t.GROW="snake/GROW",t.moveSnake=function(e){return{type:t.MOVE,payload:e}},t.growSnake=function(){return{type:t.GROW}},t.initialState=Array(i.INITIAL_SNAKE_SIZE).fill(0).map(function(e,t){return{x:Math.round(i.PLAYGROUND_SIZE/2),y:Math.round(i.PLAYGROUND_SIZE/2)+t,head:0===t}}),t.default=function(e,n){switch(void 0===e&&(e=t.initialState),n.type){case o.RESET:return t.initialState;case t.MOVE:var i=e[0],u=e.map(function(e){return r({},e,{head:!1})});return u.pop(),u.unshift({x:"left"===n.payload?i.x-1:"right"===n.payload?i.x+1:i.x,y:"up"===n.payload?i.y-1:"down"===n.payload?i.y+1:i.y,head:!0}),u;case t.GROW:return e.concat([r({},e[e.length-1])]);default:return e}}},function(e,t,n){"use strict";(function(e,r){var i,o=n(10);i="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==e?e:r;var u=Object(o.a)(i);t.a=u}).call(this,n(6),n(16)(e))},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";n.r(t),n.d(t,"createStore",function(){return a}),n.d(t,"combineReducers",function(){return c}),n.d(t,"bindActionCreators",function(){return s}),n.d(t,"applyMiddleware",function(){return h}),n.d(t,"compose",function(){return p}),n.d(t,"__DO_NOT_USE__ActionTypes",function(){return o});var r=n(5),i=function(){return Math.random().toString(36).substring(7).split("").join(".")},o={INIT:"@@redux/INIT"+i(),REPLACE:"@@redux/REPLACE"+i(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+i()}};function u(e){if("object"!=typeof e||null===e)return!1;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function a(e,t,n){var i;if("function"==typeof t&&"function"==typeof n||"function"==typeof n&&"function"==typeof arguments[3])throw new Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function");if("function"==typeof t&&void 0===n&&(n=t,t=void 0),void 0!==n){if("function"!=typeof n)throw new Error("Expected the enhancer to be a function.");return n(a)(e,t)}if("function"!=typeof e)throw new Error("Expected the reducer to be a function.");var f=e,c=t,l=[],s=l,d=!1;function p(){s===l&&(s=l.slice())}function h(){if(d)throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");return c}function _(e){if("function"!=typeof e)throw new Error("Expected the listener to be a function.");if(d)throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");var t=!0;return p(),s.push(e),function(){if(t){if(d)throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");t=!1,p();var n=s.indexOf(e);s.splice(n,1)}}}function y(e){if(!u(e))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if(void 0===e.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(d)throw new Error("Reducers may not dispatch actions.");try{d=!0,c=f(c,e)}finally{d=!1}for(var t=l=s,n=0;n<t.length;n++){(0,t[n])()}return e}return y({type:o.INIT}),(i={dispatch:y,subscribe:_,getState:h,replaceReducer:function(e){if("function"!=typeof e)throw new Error("Expected the nextReducer to be a function.");f=e,y({type:o.REPLACE})}})[r.a]=function(){var e,t=_;return(e={subscribe:function(e){if("object"!=typeof e||null===e)throw new TypeError("Expected the observer to be an object.");function n(){e.next&&e.next(h())}return n(),{unsubscribe:t(n)}}})[r.a]=function(){return this},e},i}function f(e,t){var n=t&&t.type;return"Given "+(n&&'action "'+String(n)+'"'||"an action")+', reducer "'+e+'" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'}function c(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++){var i=t[r];0,"function"==typeof e[i]&&(n[i]=e[i])}var u,a=Object.keys(n);try{!function(e){Object.keys(e).forEach(function(t){var n=e[t];if(void 0===n(void 0,{type:o.INIT}))throw new Error('Reducer "'+t+"\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");if(void 0===n(void 0,{type:o.PROBE_UNKNOWN_ACTION()}))throw new Error('Reducer "'+t+"\" returned undefined when probed with a random type. Don't try to handle "+o.INIT+' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.')})}(n)}catch(e){u=e}return function(e,t){if(void 0===e&&(e={}),u)throw u;for(var r=!1,i={},o=0;o<a.length;o++){var c=a[o],l=n[c],s=e[c],d=l(s,t);if(void 0===d){var p=f(c,t);throw new Error(p)}i[c]=d,r=r||d!==s}return r?i:e}}function l(e,t){return function(){return t(e.apply(this,arguments))}}function s(e,t){if("function"==typeof e)return l(e,t);if("object"!=typeof e||null===e)throw new Error("bindActionCreators expected an object or a function, instead received "+(null===e?"null":typeof e)+'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');for(var n=Object.keys(e),r={},i=0;i<n.length;i++){var o=n[i],u=e[o];"function"==typeof u&&(r[o]=l(u,t))}return r}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return 0===t.length?function(e){return e}:1===t.length?t[0]:t.reduce(function(e,t){return function(){return e(t.apply(void 0,arguments))}})}function h(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return function(){var n=e.apply(void 0,arguments),r=function(){throw new Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.")},i={getState:n.getState,dispatch:function(){return r.apply(void 0,arguments)}},o=t.map(function(e){return e(i)});return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){d(e,t,n[t])})}return e}({},n,{dispatch:r=p.apply(void 0,o)(n.dispatch)})}}}},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};t.__esModule=!0;var i=n(4),o=n(3),u=r(n(19));t.GENERATE_BAIT="bait/GENERATE_BAIT",t.generateBait=function(e){return{type:t.GENERATE_BAIT,payload:e}},t.default=function(e,n){switch(void 0===e&&(e=u.default(i.initialState)),n.type){case o.RESET:return u.default(i.initialState);case t.GENERATE_BAIT:return u.default(n.payload);default:return e}}},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};t.__esModule=!0;var i=r(n(2)),o=n(0);t.default=function(e){var t=e.background,n=e.mainMessage,r=e.secondaryMessage;return function(e){var u=e.ctx,a=i.default(e),f=a.playgroundSize,c=a.playbroundBeginX,l=a.playbroundBeginY;u.fillStyle=t,u.globalAlpha=.8,u.fillRect(c-o.TILE_SIZE,l-o.TILE_SIZE,f+2*o.TILE_SIZE,f+2*o.TILE_SIZE),u.fillStyle=o.COLOR_WHITE,u.textAlign="center",u.globalAlpha=1,u.font="40px 'Roboto', sans-serif",u.fillText(n,c-o.TILE_SIZE+f/2,l+f/2),u.font="20px 'Roboto', sans-serif",u.fillText(r,c-o.TILE_SIZE+f/2,l+f-30)}}},function(e,t,n){"use strict";function r(e){var t,n=e.Symbol;return"function"==typeof n?n.observable?t=n.observable:(t=n("observable"),n.observable=t):t="@@observable",t}n.d(t,"a",function(){return r})},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};t.__esModule=!0;var i=r(n(12)),o=r(n(14)),u=r(n(15)),a=r(n(21)),f=r(n(22)),c=r(n(23)),l=r(n(24)),s=r(n(25)),d=r(n(1)),p=r(n(26)),h=new i.default({selector:"#app",renderers:[o.default,u.default,a.default,c.default,f.default,l.default,s.default]});d.default.subscribe(h.render),h.render(),(new p.default).init()},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};t.__esModule=!0;var i=r(n(13)),o=function(){return function(e){var t=this,n=e.selector,r=e.renderers;this.render=function(){return t.renderers.forEach(function(e){return e(t)}),t},this.fitToWindow=function(e){var n=e.render;t.element.width=window.innerWidth,t.element.height=window.innerHeight;var r=t.element.getBoundingClientRect();return t.width=r.width,t.height=r.height,t.element.width=r.width*t.dpr,t.element.height=r.height*t.dpr,t.ctx.scale(t.dpr,t.dpr),n&&t.render(),t},this.element=document.querySelector(n),this.ctx=this.element.getContext("2d"),this.renderers=r,this.dpr=window.devicePixelRatio||1,this.fitToWindow({render:!1});var o=this.element.getBoundingClientRect();this.width=o.width,this.height=o.height,window.addEventListener("resize",i.default(function(){return t.fitToWindow({render:!0})},200))}}();t.default=o},function(e,t,n){(function(t){var n="Expected a function",r=NaN,i="[object Symbol]",o=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,f=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof t&&t&&t.Object===Object&&t,s="object"==typeof self&&self&&self.Object===Object&&self,d=l||s||Function("return this")(),p=Object.prototype.toString,h=Math.max,_=Math.min,y=function(){return d.Date.now()};function E(e,t,r){var i,o,u,a,f,c,l=0,s=!1,d=!1,p=!0;if("function"!=typeof e)throw new TypeError(n);function E(t){var n=i,r=o;return i=o=void 0,l=t,a=e.apply(r,n)}function g(e){var n=e-c;return void 0===c||n>=t||n<0||d&&e-l>=u}function O(){var e=y();if(g(e))return I(e);f=setTimeout(O,function(e){var n=t-(e-c);return d?_(n,u-(e-l)):n}(e))}function I(e){return f=void 0,p&&i?E(e):(i=o=void 0,a)}function w(){var e=y(),n=g(e);if(i=arguments,o=this,c=e,n){if(void 0===f)return function(e){return l=e,f=setTimeout(O,t),s?E(e):a}(c);if(d)return f=setTimeout(O,t),E(c)}return void 0===f&&(f=setTimeout(O,t)),a}return t=b(t)||0,v(r)&&(s=!!r.leading,u=(d="maxWait"in r)?h(b(r.maxWait)||0,t):u,p="trailing"in r?!!r.trailing:p),w.cancel=function(){void 0!==f&&clearTimeout(f),l=0,i=c=o=f=void 0},w.flush=function(){return void 0===f?a:I(y())},w}function v(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&p.call(e)==i}(e))return r;if(v(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=v(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=a.test(e);return n||f.test(e)?c(e.slice(2),n?2:8):u.test(e)?r:+e}e.exports=function(e,t,r){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError(n);return v(r)&&(i="leading"in r?!!r.leading:i,o="trailing"in r?!!r.trailing:o),E(e,t,{leading:i,maxWait:t,trailing:o})}}).call(this,n(6))},function(e,t,n){"use strict";t.__esModule=!0;var r=n(0);t.default=function(e){var t=e.ctx,n=e.width,i=e.height;t.fillStyle=r.COLOR_DARK_GRAY,t.fillRect(0,0,n,i)}},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};t.__esModule=!0;var i=r(n(1)),o=r(n(2)),u=n(0);t.default=function(e){var t=e.ctx,n=o.default(e),r=n.playbroundBeginX,a=n.playbroundBeginY;t.textAlign="left",t.font="20px 'Roboto', sans-serif",t.fillStyle=u.COLOR_WHITE,t.fillText("Score: "+i.default.getState().game.score,r-u.TILE_SIZE,a-25)}},function(e,t){e.exports=function(e){if(!e.webpackPolyfill){var t=Object.create(e);t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(t,"exports",{enumerable:!0}),t.webpackPolyfill=1}return t}},function(e,t,n){"use strict";var r=n(7).compose;t.__esModule=!0,t.composeWithDevTools="undefined"!=typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(0!==arguments.length)return"object"==typeof arguments[0]?r:r.apply(null,arguments)},t.devToolsEnhancer="undefined"!=typeof window&&window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__:function(){return function(e){return e}}},function(e,t,n){"use strict";t.__esModule=!0;var r={up:"down",down:"up",left:"right",right:"left"};t.default=function(e,t){return r[e]===t}},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};t.__esModule=!0;var i=r(n(20)),o=n(0);t.default=function e(t){for(var n=i.default(0,o.PLAYGROUND_SIZE-1),r=i.default(0,o.PLAYGROUND_SIZE-1),u=0;u<t.length;u+=1)if(n===t[u].x&&r===t[u].y)return e(t);return{x:n,y:r}}},function(e,t){var n=1/0,r=9007199254740991,i=1.7976931348623157e308,o=NaN,u="[object Function]",a="[object GeneratorFunction]",f="[object Symbol]",c=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,d=/^0o[0-7]+$/i,p=/^(?:0|[1-9]\d*)$/,h=parseFloat,_=parseInt,y=Object.prototype.toString,E=Math.floor,v=Math.min,b=Math.random;function g(e,t,n){if(!O(n))return!1;var i=typeof t;return!!("number"==i?function(e){return null!=e&&function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=r}(e.length)&&!function(e){var t=O(e)?y.call(e):"";return t==u||t==a}(e)}(n)&&function(e,t){return!!(t=null==t?r:t)&&("number"==typeof e||p.test(e))&&e>-1&&e%1==0&&e<t}(t,n.length):"string"==i&&t in n)&&function(e,t){return e===t||e!=e&&t!=t}(n[t],e)}function O(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function I(e){return e?(e=function(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&y.call(e)==f}(e))return o;if(O(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=O(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(c,"");var n=s.test(e);return n||d.test(e)?_(e.slice(2),n?2:8):l.test(e)?o:+e}(e))===n||e===-n?(e<0?-1:1)*i:e==e?e:0:0===e?e:0}e.exports=function(e,t,n){if(n&&"boolean"!=typeof n&&g(e,t,n)&&(t=n=void 0),void 0===n&&("boolean"==typeof t?(n=t,t=void 0):"boolean"==typeof e&&(n=e,e=void 0)),void 0===e&&void 0===t?(e=0,t=1):(e=I(e),void 0===t?(t=e,e=0):t=I(t)),e>t){var r=e;e=t,t=r}if(n||e%1||t%1){var i=b();return v(e+i*(t-e+h("1e-"+((i+"").length-1))),t)}return function(e,t){return e+E(b()*(t-e+1))}(e,t)}},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};t.__esModule=!0;var i=r(n(2)),o=n(0);t.default=function(e){var t=e.ctx,n=i.default(e),r=n.playgroundSize,u=n.playbroundBeginX,a=n.playbroundBeginY;t.fillStyle=o.COLOR_WHITE,t.strokeStyle=o.COLOR_LIME,t.lineWidth=o.TILE_SIZE,t.fillRect(u,a,r,r),t.strokeRect(u-o.TILE_SIZE/2,a-o.TILE_SIZE/2,r+o.TILE_SIZE,r+o.TILE_SIZE),t.fillStyle=o.COLOR_LIGHT_INDIGO;for(var f=o.TILE_SIZE/5,c=0;c<o.PLAYGROUND_SIZE;c+=1)for(var l=0;l<o.PLAYGROUND_SIZE;l+=1)t.fillRect(u+o.TILE_SIZE*c+(o.TILE_SIZE-f)/2,a+o.TILE_SIZE*l+(o.TILE_SIZE-f)/2,f,f)}},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};t.__esModule=!0;var i=r(n(2)),o=n(0),u=r(n(1));t.default=function(e){var t=u.default.getState().snake,n=e.ctx,r=i.default(e),a=r.playbroundBeginX,f=r.playbroundBeginY;t.forEach(function(e,t){n.fillStyle=0===t?o.COLOR_INDIGO:o.COLOR_GREEN,n.fillRect(a+o.TILE_SIZE*e.x,f+o.TILE_SIZE*e.y,o.TILE_SIZE,o.TILE_SIZE)})}},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};t.__esModule=!0;var i=r(n(1)),o=n(0),u=r(n(2));t.default=function(e){var t=i.default.getState().bait,n=e.ctx,r=u.default(e),a=r.playbroundBeginX,f=r.playbroundBeginY;n.fillStyle=o.COLOR_RED,n.fillRect(a+o.TILE_SIZE*t.x,f+o.TILE_SIZE*t.y,o.TILE_SIZE,o.TILE_SIZE)}},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};t.__esModule=!0;var i=n(0),o=r(n(9)),u=r(n(1)),a=o.default({background:i.COLOR_RED,mainMessage:"Game over",secondaryMessage:"Press space to restart"});t.default=function(e){u.default.getState().game.gameOver&&a(e)}},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};t.__esModule=!0;var i=n(0),o=r(n(9)),u=r(n(1)),a=o.default({background:i.COLOR_GREEN,mainMessage:"Snake",secondaryMessage:"Press space to start"});t.default=function(e){u.default.getState().game.initialized||a(e)}},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};t.__esModule=!0;var i=n(0),o=r(n(1)),u=n(3),a=n(4),f=n(8),c=r(n(27)),l=r(n(28)),s=function(){return function(){var e=this;this.interval=0,this.handleKeyDown=function(t){var n=t.which,r=o.default.getState().game;!r.gameOver&&r.initialized?((87===n||38===n)&&o.default.dispatch(u.setDirection("up")),(83===n||40===n)&&o.default.dispatch(u.setDirection("down")),(68===n||39===n)&&o.default.dispatch(u.setDirection("right")),(65===n||37===n)&&o.default.dispatch(u.setDirection("left"))):32===n&&(r.initialized?e.restart():e.start())},this.init=function(){window.addEventListener("keydown",e.handleKeyDown)},this.run=function(){var t=o.default.getState(),n=t.game,r=t.snake,i=t.bait;if(c.default(r))o.default.dispatch(u.gameOver()),window.clearInterval(e.interval),l.default.gameOver.play();else{var s=r[0];s.x===i.x&&s.y===i.y&&(o.default.dispatch(a.growSnake()),o.default.dispatch(f.generateBait(r)),o.default.dispatch(u.incrementScore()),l.default.bait.play()),o.default.dispatch(a.moveSnake(n.direction))}},this.start=function(){o.default.dispatch(u.initializeGame()),e.interval=window.setInterval(e.run,i.GAME_SPEED)},this.restart=function(){o.default.dispatch(u.reset()),e.start()}}}();t.default=s},function(e,t,n){"use strict";t.__esModule=!0;var r=n(0);t.default=function(e){var t=e[0];if(t.x<0||t.x>r.PLAYGROUND_SIZE-1||t.y<0||t.y>r.PLAYGROUND_SIZE-1)return!0;for(var n=e.length-1;n>0;n-=1)if(t.x===e[n].x&&t.y===e[n].y)return!0;return!1}},function(e,t,n){"use strict";t.__esModule=!0;var r=n(29),i=n(30);t.default={bait:new Audio(r),gameOver:new Audio(i)}},function(e,t,n){e.exports=n.p+"afde18125ee4a218d7c712ee5ac84d43.ogg"},function(e,t,n){e.exports=n.p+"8de895a368e3dd86d72120fad9778043.ogg"}]);