!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:o})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=26)}({26:function(t,e,n){t.exports=n("zFrg")},zFrg:function(t,e,n){var o,r,i;!function(n){"use strict";var s=n.setTimeout,a=n.clearTimeout,c=n.XMLHttpRequest,d=n.XDomainRequest,u=n.EventSource,p=n.document,h=n.Promise,f=n.fetch,v=n.Response,l=n.TextDecoder,y=n.TextEncoder,g=n.AbortController;if(void 0==Object.create&&(Object.create=function(t){function e(){}return e.prototype=t,new e}),void 0!=h&&void 0==h.prototype.finally&&(h.prototype.finally=function(t){return this.then(function(e){return h.resolve(t()).then(function(){return e})},function(e){return h.resolve(t()).then(function(){throw e})})}),void 0!=f){var T=f;f=function(t,e){return h.resolve(T(t,e))}}function w(){this.bitsNeeded=0,this.codePoint=0}void 0==g&&(g=function(){this.signal=null,this.abort=function(){}}),w.prototype.decode=function(t){function e(t,e,n){if(1===n)return t>=128>>e&&t<<e<=2047;if(2===n)return t>=2048>>e&&t<<e<=55295||t>=57344>>e&&t<<e<=65535;if(3===n)return t>=65536>>e&&t<<e<=1114111;throw new Error}function n(t,e){if(6===t)return e>>6>15?3:e>31?2:1;if(12===t)return e>15?3:2;if(18===t)return 3;throw new Error}for(var o="",r=this.bitsNeeded,i=this.codePoint,s=0;s<t.length;s+=1){var a=t[s];0!==r&&(a<128||a>191||!e(i<<6|63&a,r-6,n(r,i)))&&(r=0,i=65533,o+=String.fromCharCode(i)),0===r?(a>=0&&a<=127?(r=0,i=a):a>=192&&a<=223?(r=6,i=31&a):a>=224&&a<=239?(r=12,i=15&a):a>=240&&a<=247?(r=18,i=7&a):(r=0,i=65533),0===r||e(i,r,n(r,i))||(r=0,i=65533)):(r-=6,i=i<<6|63&a),0===r&&(i<=65535?o+=String.fromCharCode(i):(o+=String.fromCharCode(55296+(i-65535-1>>10)),o+=String.fromCharCode(56320+(i-65535-1&1023))))}return this.bitsNeeded=r,this.codePoint=i,o};void 0!=l&&void 0!=y&&function(){try{return"test"===(new l).decode((new y).encode("test"),{stream:!0})}catch(t){console.log(t)}return!1}()||(l=w);var C=function(){};function m(t){this.withCredentials=!1,this.responseType="",this.readyState=0,this.status=0,this.statusText="",this.responseText="",this.onprogress=C,this.onreadystatechange=C,this._contentType="",this._xhr=t,this._sendTimeout=0,this._abort=C}function b(t){return t.replace(/[A-Z]/g,function(t){return String.fromCharCode(t.charCodeAt(0)+32)})}function S(t){for(var e=Object.create(null),n=t.split("\r\n"),o=0;o<n.length;o+=1){var r=n[o].split(": "),i=r.shift(),s=r.join(": ");e[b(i)]=s}this._map=e}function x(){}function _(t){this._headers=t}function E(){}function O(){this._listeners=Object.create(null)}function A(t){s(function(){throw t},0)}function R(t){this.type=t,this.target=void 0}function N(t,e){R.call(this,t),this.data=e.data,this.lastEventId=e.lastEventId}function j(t,e){R.call(this,t),this.status=e.status,this.statusText=e.statusText,this.headers=e.headers}m.prototype.open=function(t,e){this._abort(!0);var n=this,o=this._xhr,r=1,i=0;this._abort=function(t){0!==n._sendTimeout&&(a(n._sendTimeout),n._sendTimeout=0),1!==r&&2!==r&&3!==r||(r=4,o.onload=C,o.onerror=C,o.onabort=C,o.onprogress=C,o.onreadystatechange=C,o.abort(),0!==i&&(a(i),i=0),t||(n.readyState=4,n.onreadystatechange())),r=0};var d=function(){if(1===r){var t=0,e="",i=void 0;if("contentType"in o)t=200,e="OK",i=o.contentType;else try{t=o.status,e=o.statusText,i=o.getResponseHeader("Content-Type")}catch(n){t=0,e="",i=void 0}0!==t&&(r=2,n.readyState=2,n.status=t,n.statusText=e,n._contentType=i,n.onreadystatechange())}},u=function(){if(d(),2===r||3===r){r=3;var t="";try{t=o.responseText}catch(t){}n.readyState=3,n.responseText=t,n.onprogress()}},p=function(){u(),1!==r&&2!==r&&3!==r||(r=4,0!==i&&(a(i),i=0),n.readyState=4,n.onreadystatechange())},h=function(){i=s(function(){h()},500),3===o.readyState&&u()};o.onload=p,o.onerror=p,o.onabort=p,"sendAsBinary"in c.prototype||"mozAnon"in c.prototype||(o.onprogress=u),o.onreadystatechange=function(){void 0!=o&&(4===o.readyState?p():3===o.readyState?u():2===o.readyState&&d())},"contentType"in o&&(e+=(-1===e.indexOf("?")?"?":"&")+"padding=true"),o.open(t,e,!0),"readyState"in o&&(i=s(function(){h()},0))},m.prototype.abort=function(){this._abort(!1)},m.prototype.getResponseHeader=function(t){return this._contentType},m.prototype.setRequestHeader=function(t,e){var n=this._xhr;"setRequestHeader"in n&&n.setRequestHeader(t,e)},m.prototype.getAllResponseHeaders=function(){return void 0!=this._xhr.getAllResponseHeaders?this._xhr.getAllResponseHeaders():""},m.prototype.send=function(){if("ontimeout"in c.prototype||void 0==p||void 0==p.readyState||"complete"===p.readyState){var t=this._xhr;t.withCredentials=this.withCredentials,t.responseType=this.responseType;try{t.send(void 0)}catch(t){throw t}}else{var e=this;e._sendTimeout=s(function(){e._sendTimeout=0,e.send()},4)}},S.prototype.get=function(t){return this._map[b(t)]},x.prototype.open=function(t,e,n,o,r,i,s){t.open("GET",r);var a=0;for(var c in t.onprogress=function(){var e=t.responseText.slice(a);a+=e.length,n(e)},t.onreadystatechange=function(){if(2===t.readyState){var n=t.status,r=t.statusText,i=t.getResponseHeader("Content-Type"),s=t.getAllResponseHeaders();e(n,r,i,new S(s),function(){t.abort()})}else 4===t.readyState&&o()},t.withCredentials=i,t.responseType="text",s)Object.prototype.hasOwnProperty.call(s,c)&&t.setRequestHeader(c,s[c]);t.send()},_.prototype.get=function(t){return this._headers.get(t)},E.prototype.open=function(t,e,n,o,r,i,s){var a=new g,c=a.signal,d=new l;f(r,{headers:s,credentials:i?"include":"same-origin",signal:c,cache:"no-store"}).then(function(t){var o=t.body.getReader();return e(t.status,t.statusText,t.headers.get("Content-Type"),new _(t.headers),function(){a.abort(),o.cancel()}),new h(function(t,e){var r=function(){o.read().then(function(e){if(e.done)t(void 0);else{var o=d.decode(e.value,{stream:!0});n(o),r()}}).catch(function(t){e(t)})};r()})}).finally(function(){o()})},O.prototype.dispatchEvent=function(t){t.target=this;var e=this._listeners[t.type];if(void 0!=e)for(var n=e.length,o=0;o<n;o+=1){var r=e[o];try{"function"==typeof r.handleEvent?r.handleEvent(t):r.call(this,t)}catch(t){A(t)}}},O.prototype.addEventListener=function(t,e){t=String(t);var n=this._listeners,o=n[t];void 0==o&&(o=[],n[t]=o);for(var r=!1,i=0;i<o.length;i+=1)o[i]===e&&(r=!0);r||o.push(e)},O.prototype.removeEventListener=function(t,e){t=String(t);var n=this._listeners,o=n[t];if(void 0!=o){for(var r=[],i=0;i<o.length;i+=1)o[i]!==e&&r.push(o[i]);0===r.length?delete n[t]:n[t]=r}},N.prototype=Object.create(R.prototype),j.prototype=Object.create(R.prototype);var H=-1,P=0,I=1,q=2,L=-1,M=0,D=1,z=2,G=3,B=/^text\/event\-stream;?(\s*charset\=utf\-8)?$/i,F=function(t,e){var n=parseInt(t,10);return n!=n&&(n=e),J(n)},J=function(t){return Math.min(Math.max(t,1e3),18e6)},X=function(t,e,n){try{"function"==typeof e&&e.call(t,n)}catch(t){A(t)}};function K(t,e){O.call(this),this.onopen=void 0,this.onmessage=void 0,this.onerror=void 0,this.url=void 0,this.readyState=void 0,this.withCredentials=void 0,this._close=void 0,function(t,e,n){e=String(e);var o=void 0!=n&&Boolean(n.withCredentials),r=J(1e3),i=void 0!=n&&void 0!=n.heartbeatTimeout?F(n.heartbeatTimeout,45e3):J(45e3),u="",p=r,h=!1,f=void 0!=n&&void 0!=n.headers?JSON.parse(JSON.stringify(n.headers)):void 0,v=void 0!=n&&void 0!=n.Transport?n.Transport:void 0!=c&&"withCredentials"in c.prototype||void 0==d?c:d,l=!U||void 0!=n&&void 0!=n.Transport?new m(new v):void 0,y=void 0==l?new E:new x,g=void 0,T=0,w=H,C="",b="",S="",_="",O=M,K=0,Z=0,$=function(e,n,o,i,s){if(w===P)if(g=s,200===e&&void 0!=o&&B.test(o)){w=I,h=!0,p=r,t.readyState=I;var a=new j("open",{status:e,statusText:n,headers:i});t.dispatchEvent(a),X(t,t.onopen,a)}else{var c="";200!==e?(n&&(n=n.replace(/\s+/g," ")),c="EventSource's response has a status "+e+" "+n+" that is not 200. Aborting the connection."):c="EventSource's response has a Content-Type specifying an unsupported type: "+(void 0==o?"-":o.replace(/\s+/g," "))+". Aborting the connection.",A(new Error(c)),V();var a=new j("error",{status:e,statusText:n,headers:i});t.dispatchEvent(a),X(t,t.onerror,a)}},k=function(e){if(w===I){for(var n=-1,o=0;o<e.length;o+=1){var c=e.charCodeAt(o);c!=="\n".charCodeAt(0)&&c!=="\r".charCodeAt(0)||(n=o)}var d=(-1!==n?_:"")+e.slice(0,n+1);_=(-1===n?_:"")+e.slice(n+1),""!==d&&(h=!0);for(var f=0;f<d.length;f+=1){var c=d.charCodeAt(f);if(O===L&&c==="\n".charCodeAt(0))O=M;else if(O===L&&(O=M),c==="\r".charCodeAt(0)||c==="\n".charCodeAt(0)){if(O!==M){O===D&&(Z=f+1);var v=d.slice(K,Z-1),l=d.slice(Z+(Z<f&&d.charCodeAt(Z)===" ".charCodeAt(0)?1:0),f);"data"===v?(C+="\n",C+=l):"id"===v?b=l:"event"===v?S=l:"retry"===v?(r=F(l,r),p=r):"heartbeatTimeout"===v&&(i=F(l,i),0!==T&&(a(T),T=s(function(){W()},i)))}if(O===M){if(""!==C){u=b,""===S&&(S="message");var y=new N(S,{data:C.slice(1),lastEventId:b});if(t.dispatchEvent(y),"message"===S&&X(t,t.onmessage,y),w===q)return}C="",S=""}O=c==="\r".charCodeAt(0)?L:M}else O===M&&(K=f,O=D),O===D?c===":".charCodeAt(0)&&(Z=f+1,O=z):O===z&&(O=G)}}},Q=function(){if(w===I||w===P){w=H,0!==T&&(a(T),T=0),T=s(function(){W()},p),p=J(Math.min(16*r,2*p)),t.readyState=P;var e=new R("error");t.dispatchEvent(e),X(t,t.onerror,e)}},V=function(){w=q,void 0!=g&&(g(),g=void 0),0!==T&&(a(T),T=0),t.readyState=q},W=function(){if(T=0,w===H){h=!1,T=s(function(){W()},i),w=P,C="",S="",b=u,_="",K=0,Z=0,O=M;var t=e;"data:"!==e.slice(0,5)&&"blob:"!==e.slice(0,5)&&""!==u&&(t+=(-1===e.indexOf("?")?"?":"&")+"lastEventId="+encodeURIComponent(u));var n={Accept:"text/event-stream"};if(void 0!=f)for(var r in f)Object.prototype.hasOwnProperty.call(f,r)&&(n[r]=f[r]);try{y.open(l,$,k,Q,t,o,n)}catch(t){throw V(),t}}else h||void 0==g?(h=!1,T=s(function(){W()},i)):(A(new Error("No activity within "+i+" milliseconds. Reconnecting.")),g(),g=void 0)};t.url=e,t.readyState=P,t.withCredentials=o,t._close=V,W()}(this,t,e)}var U=void 0!=f&&void 0!=v&&"body"in v.prototype;K.prototype=Object.create(O.prototype),K.prototype.CONNECTING=P,K.prototype.OPEN=I,K.prototype.CLOSED=q,K.prototype.close=function(){this._close()},K.CONNECTING=P,K.OPEN=I,K.CLOSED=q,K.prototype.withCredentials=void 0,function(n){if("object"==typeof t&&"object"==typeof t.exports){var s=n(e);void 0!==s&&(t.exports=s)}else r=[e],void 0===(i="function"==typeof(o=n)?o.apply(e,r):o)||(t.exports=i)}(function(t){t.EventSourcePolyfill=K,t.NativeEventSource=u,void 0==c||void 0!=u&&"withCredentials"in u.prototype||(t.EventSource=K)})}("undefined"!=typeof window?window:this)}});