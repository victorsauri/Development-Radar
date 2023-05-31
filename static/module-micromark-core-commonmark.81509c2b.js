"use strict";(()=>{(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1417],{42227:function(W,b,E){E.d(b,{v:function(){return C}});var M=E(21905),k=E(62987),S=E(63233);const C={name:"attention",tokenize:s,resolveAll:m};function m(_,a){let l=-1,r,x,o,p,c,u,i,O;for(;++l<_.length;)if(_[l][0]==="enter"&&_[l][1].type==="attentionSequence"&&_[l][1]._close){for(r=l;r--;)if(_[r][0]==="exit"&&_[r][1].type==="attentionSequence"&&_[r][1]._open&&a.sliceSerialize(_[r][1]).charCodeAt(0)===a.sliceSerialize(_[l][1]).charCodeAt(0)){if((_[r][1]._close||_[l][1]._open)&&(_[l][1].end.offset-_[l][1].start.offset)%3&&!((_[r][1].end.offset-_[r][1].start.offset+_[l][1].end.offset-_[l][1].start.offset)%3))continue;u=_[r][1].end.offset-_[r][1].start.offset>1&&_[l][1].end.offset-_[l][1].start.offset>1?2:1;const h=Object.assign({},_[r][1].end),f=Object.assign({},_[l][1].start);e(h,-u),e(f,u),p={type:u>1?"strongSequence":"emphasisSequence",start:h,end:Object.assign({},_[r][1].end)},c={type:u>1?"strongSequence":"emphasisSequence",start:Object.assign({},_[l][1].start),end:f},o={type:u>1?"strongText":"emphasisText",start:Object.assign({},_[r][1].end),end:Object.assign({},_[l][1].start)},x={type:u>1?"strong":"emphasis",start:Object.assign({},p.start),end:Object.assign({},c.end)},_[r][1].end=Object.assign({},p.start),_[l][1].start=Object.assign({},c.end),i=[],_[r][1].end.offset-_[r][1].start.offset&&(i=(0,M.V)(i,[["enter",_[r][1],a],["exit",_[r][1],a]])),i=(0,M.V)(i,[["enter",x,a],["enter",p,a],["exit",p,a],["enter",o,a]]),i=(0,M.V)(i,(0,S.C)(a.parser.constructs.insideSpan.null,_.slice(r+1,l),a)),i=(0,M.V)(i,[["exit",o,a],["enter",c,a],["exit",c,a],["exit",x,a]]),_[l][1].end.offset-_[l][1].start.offset?(O=2,i=(0,M.V)(i,[["enter",_[l][1],a],["exit",_[l][1],a]])):O=0,(0,M.d)(_,r-1,l-r+3,i),l=r+i.length-O-2;break}}for(l=-1;++l<_.length;)_[l][1].type==="attentionSequence"&&(_[l][1].type="data");return _}function s(_,a){const l=this.parser.constructs.attentionMarkers.null,r=this.previous,x=(0,k.r)(r);let o;return p;function p(u){return o=u,_.enter("attentionSequence"),c(u)}function c(u){if(u===o)return _.consume(u),c;const i=_.exit("attentionSequence"),O=(0,k.r)(u),h=!O||O===2&&x||l.includes(u),f=!x||x===2&&O||l.includes(r);return i._open=Boolean(o===42?h:h&&(x||!f)),i._close=Boolean(o===42?f:f&&(O||!h)),a(u)}}function e(_,a){_.column+=a,_.offset+=a,_._bufferIndex+=a}},53936:function(W,b,E){E.d(b,{j:function(){return k}});var M=E(32473);const k={name:"autolink",tokenize:S};function S(C,m,s){let e=0;return _;function _(i){return C.enter("autolink"),C.enter("autolinkMarker"),C.consume(i),C.exit("autolinkMarker"),C.enter("autolinkProtocol"),a}function a(i){return(0,M.jv)(i)?(C.consume(i),l):o(i)}function l(i){return i===43||i===45||i===46||(0,M.H$)(i)?(e=1,r(i)):o(i)}function r(i){return i===58?(C.consume(i),e=0,x):(i===43||i===45||i===46||(0,M.H$)(i))&&e++<32?(C.consume(i),r):(e=0,o(i))}function x(i){return i===62?(C.exit("autolinkProtocol"),C.enter("autolinkMarker"),C.consume(i),C.exit("autolinkMarker"),C.exit("autolink"),m):i===null||i===32||i===60||(0,M.Av)(i)?s(i):(C.consume(i),x)}function o(i){return i===64?(C.consume(i),p):(0,M.n9)(i)?(C.consume(i),o):s(i)}function p(i){return(0,M.H$)(i)?c(i):s(i)}function c(i){return i===46?(C.consume(i),e=0,p):i===62?(C.exit("autolinkProtocol").type="autolinkEmail",C.enter("autolinkMarker"),C.consume(i),C.exit("autolinkMarker"),C.exit("autolink"),m):u(i)}function u(i){if((i===45||(0,M.H$)(i))&&e++<63){const O=i===45?u:c;return C.consume(i),O}return s(i)}}},23402:function(W,b,E){E.d(b,{w:function(){return S}});var M=E(42761),k=E(32473);const S={tokenize:C,partial:!0};function C(m,s,e){return _;function _(l){return(0,k.xz)(l)?(0,M.f)(m,a,"linePrefix")(l):a(l)}function a(l){return l===null||(0,k.Ch)(l)?s(l):e(l)}}},64421:function(W,b,E){E.d(b,{m:function(){return S}});var M=E(42761),k=E(32473);const S={name:"blockQuote",tokenize:C,continuation:{tokenize:m},exit:s};function C(e,_,a){const l=this;return r;function r(o){if(o===62){const p=l.containerState;return p.open||(e.enter("blockQuote",{_container:!0}),p.open=!0),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(o),e.exit("blockQuoteMarker"),x}return a(o)}function x(o){return(0,k.xz)(o)?(e.enter("blockQuotePrefixWhitespace"),e.consume(o),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),_):(e.exit("blockQuotePrefix"),_(o))}}function m(e,_,a){const l=this;return r;function r(o){return(0,k.xz)(o)?(0,M.f)(e,x,"linePrefix",l.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(o):x(o)}function x(o){return e.attempt(S,_,a)(o)}}function s(e){e.exit("blockQuote")}},52721:function(W,b,E){E.d(b,{L:function(){return k}});var M=E(32473);const k={name:"characterEscape",tokenize:S};function S(C,m,s){return e;function e(a){return C.enter("characterEscape"),C.enter("escapeMarker"),C.consume(a),C.exit("escapeMarker"),_}function _(a){return(0,M.sR)(a)?(C.enter("characterEscapeValue"),C.consume(a),C.exit("characterEscapeValue"),C.exit("characterEscape"),m):s(a)}}},70289:function(W,b,E){E.d(b,{u:function(){return S}});var M=E(44301),k=E(32473);const S={name:"characterReference",tokenize:C};function C(m,s,e){const _=this;let a=0,l,r;return x;function x(u){return m.enter("characterReference"),m.enter("characterReferenceMarker"),m.consume(u),m.exit("characterReferenceMarker"),o}function o(u){return u===35?(m.enter("characterReferenceMarkerNumeric"),m.consume(u),m.exit("characterReferenceMarkerNumeric"),p):(m.enter("characterReferenceValue"),l=31,r=k.H$,c(u))}function p(u){return u===88||u===120?(m.enter("characterReferenceMarkerHexadecimal"),m.consume(u),m.exit("characterReferenceMarkerHexadecimal"),m.enter("characterReferenceValue"),l=6,r=k.AF,c):(m.enter("characterReferenceValue"),l=7,r=k.pY,c(u))}function c(u){if(u===59&&a){const i=m.exit("characterReferenceValue");return r===k.H$&&!(0,M.T)(_.sliceSerialize(i))?e(u):(m.enter("characterReferenceMarker"),m.consume(u),m.exit("characterReferenceMarker"),m.exit("characterReference"),s)}return r(u)&&a++<l?(m.consume(u),c):e(u)}}},61549:function(W,b,E){E.d(b,{_:function(){return C}});var M=E(42761),k=E(32473);const S={tokenize:s,partial:!0},C={name:"codeFenced",tokenize:m,concrete:!0};function m(e,_,a){const l=this,r={tokenize:F,partial:!0};let x=0,o=0,p;return c;function c(g){return u(g)}function u(g){const D=l.events[l.events.length-1];return x=D&&D[1].type==="linePrefix"?D[2].sliceSerialize(D[1],!0).length:0,p=g,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),i(g)}function i(g){return g===p?(o++,e.consume(g),i):o<3?a(g):(e.exit("codeFencedFenceSequence"),(0,k.xz)(g)?(0,M.f)(e,O,"whitespace")(g):O(g))}function O(g){return g===null||(0,k.Ch)(g)?(e.exit("codeFencedFence"),l.interrupt?_(g):e.check(S,A,R)(g)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),h(g))}function h(g){return g===null||(0,k.Ch)(g)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),O(g)):(0,k.xz)(g)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),(0,M.f)(e,f,"whitespace")(g)):g===96&&g===p?a(g):(e.consume(g),h)}function f(g){return g===null||(0,k.Ch)(g)?O(g):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),T(g))}function T(g){return g===null||(0,k.Ch)(g)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),O(g)):g===96&&g===p?a(g):(e.consume(g),T)}function A(g){return e.attempt(r,R,I)(g)}function I(g){return e.enter("lineEnding"),e.consume(g),e.exit("lineEnding"),L}function L(g){return x>0&&(0,k.xz)(g)?(0,M.f)(e,z,"linePrefix",x+1)(g):z(g)}function z(g){return g===null||(0,k.Ch)(g)?e.check(S,A,R)(g):(e.enter("codeFlowValue"),P(g))}function P(g){return g===null||(0,k.Ch)(g)?(e.exit("codeFlowValue"),z(g)):(e.consume(g),P)}function R(g){return e.exit("codeFenced"),_(g)}function F(g,D,y){let K=0;return j;function j(B){return g.enter("lineEnding"),g.consume(B),g.exit("lineEnding"),H}function H(B){return g.enter("codeFencedFence"),(0,k.xz)(B)?(0,M.f)(g,V,"linePrefix",l.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(B):V(B)}function V(B){return B===p?(g.enter("codeFencedFenceSequence"),N(B)):y(B)}function N(B){return B===p?(K++,g.consume(B),N):K>=o?(g.exit("codeFencedFenceSequence"),(0,k.xz)(B)?(0,M.f)(g,w,"whitespace")(B):w(B)):y(B)}function w(B){return B===null||(0,k.Ch)(B)?(g.exit("codeFencedFence"),D(B)):y(B)}}}function s(e,_,a){const l=this;return r;function r(o){return o===null?a(o):(e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),x)}function x(o){return l.parser.lazy[l.now().line]?a(o):_(o)}}},69927:function(W,b,E){E.d(b,{S:function(){return S}});var M=E(42761),k=E(32473);const S={name:"codeIndented",tokenize:m},C={tokenize:s,partial:!0};function m(e,_,a){const l=this;return r;function r(u){return e.enter("codeIndented"),(0,M.f)(e,x,"linePrefix",4+1)(u)}function x(u){const i=l.events[l.events.length-1];return i&&i[1].type==="linePrefix"&&i[2].sliceSerialize(i[1],!0).length>=4?o(u):a(u)}function o(u){return u===null?c(u):(0,k.Ch)(u)?e.attempt(C,o,c)(u):(e.enter("codeFlowValue"),p(u))}function p(u){return u===null||(0,k.Ch)(u)?(e.exit("codeFlowValue"),o(u)):(e.consume(u),p)}function c(u){return e.exit("codeIndented"),_(u)}}function s(e,_,a){const l=this;return r;function r(o){return l.parser.lazy[l.now().line]?a(o):(0,k.Ch)(o)?(e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),r):(0,M.f)(e,x,"linePrefix",4+1)(o)}function x(o){const p=l.events[l.events.length-1];return p&&p[1].type==="linePrefix"&&p[2].sliceSerialize(p[1],!0).length>=4?_(o):(0,k.Ch)(o)?r(o):a(o)}}},46767:function(W,b,E){E.d(b,{h:function(){return k}});var M=E(32473);const k={name:"codeText",tokenize:m,resolve:S,previous:C};function S(s){let e=s.length-4,_=3,a,l;if((s[_][1].type==="lineEnding"||s[_][1].type==="space")&&(s[e][1].type==="lineEnding"||s[e][1].type==="space")){for(a=_;++a<e;)if(s[a][1].type==="codeTextData"){s[_][1].type="codeTextPadding",s[e][1].type="codeTextPadding",_+=2,e-=2;break}}for(a=_-1,e++;++a<=e;)l===void 0?a!==e&&s[a][1].type!=="lineEnding"&&(l=a):(a===e||s[a][1].type==="lineEnding")&&(s[l][1].type="codeTextData",a!==l+2&&(s[l][1].end=s[a-1][1].end,s.splice(l+2,a-l-2),e-=a-l-2,a=l+2),l=void 0);return s}function C(s){return s!==96||this.events[this.events.length-1][1].type==="characterEscape"}function m(s,e,_){const a=this;let l=0,r,x;return o;function o(O){return s.enter("codeText"),s.enter("codeTextSequence"),p(O)}function p(O){return O===96?(s.consume(O),l++,p):(s.exit("codeTextSequence"),c(O))}function c(O){return O===null?_(O):O===32?(s.enter("space"),s.consume(O),s.exit("space"),c):O===96?(x=s.enter("codeTextSequence"),r=0,i(O)):(0,M.Ch)(O)?(s.enter("lineEnding"),s.consume(O),s.exit("lineEnding"),c):(s.enter("codeTextData"),u(O))}function u(O){return O===null||O===32||O===96||(0,M.Ch)(O)?(s.exit("codeTextData"),c(O)):(s.consume(O),u)}function i(O){return O===96?(s.consume(O),r++,i):r===l?(s.exit("codeTextSequence"),s.exit("codeText"),e(O)):(x.type="codeTextData",u(O))}}},55665:function(W,b,E){E.d(b,{k:function(){return C}});var M=E(42761),k=E(32473),S=E(89571);const C={tokenize:e,resolve:s},m={tokenize:_,partial:!0};function s(a){return(0,S._)(a),a}function e(a,l){let r;return x;function x(u){return a.enter("content"),r=a.enter("chunkContent",{contentType:"content"}),o(u)}function o(u){return u===null?p(u):(0,k.Ch)(u)?a.check(m,c,p)(u):(a.consume(u),o)}function p(u){return a.exit("chunkContent"),a.exit("content"),l(u)}function c(u){return a.consume(u),a.exit("chunkContent"),r.next=a.enter("chunkContent",{contentType:"content",previous:r}),r=r.next,o}}function _(a,l,r){const x=this;return o;function o(c){return a.exit("chunkContent"),a.enter("lineEnding"),a.consume(c),a.exit("lineEnding"),(0,M.f)(a,p,"linePrefix")}function p(c){if(c===null||(0,k.Ch)(c))return r(c);const u=x.events[x.events.length-1];return!x.parser.constructs.disable.null.includes("codeIndented")&&u&&u[1].type==="linePrefix"&&u[2].sliceSerialize(u[1],!0).length>=4?l(c):a.interrupt(x.parser.constructs.flow,r,l)(c)}}},96278:function(W,b,E){E.d(b,{D:function(){return _}});var M=E(57404),k=E(36892),S=E(42761),C=E(40651),m=E(16226),s=E(32473),e=E(11098);const _={name:"definition",tokenize:l},a={tokenize:r,partial:!0};function l(x,o,p){const c=this;let u;return i;function i(z){return x.enter("definition"),O(z)}function O(z){return k.f.call(c,x,h,p,"definitionLabel","definitionLabelMarker","definitionLabelString")(z)}function h(z){return u=(0,e.d)(c.sliceSerialize(c.events[c.events.length-1][1]).slice(1,-1)),z===58?(x.enter("definitionMarker"),x.consume(z),x.exit("definitionMarker"),f):p(z)}function f(z){return(0,s.z3)(z)?(0,m.S)(x,T)(z):T(z)}function T(z){return(0,M.Z)(x,A,p,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(z)}function A(z){return x.attempt(a,I,I)(z)}function I(z){return(0,s.xz)(z)?(0,S.f)(x,L,"whitespace")(z):L(z)}function L(z){return z===null||(0,s.Ch)(z)?(x.exit("definition"),c.parser.defined.push(u),o(z)):p(z)}}function r(x,o,p){return c;function c(h){return(0,s.z3)(h)?(0,m.S)(x,u)(h):p(h)}function u(h){return(0,C.X)(x,i,p,"definitionTitle","definitionTitleMarker","definitionTitleString")(h)}function i(h){return(0,s.xz)(h)?(0,S.f)(x,O,"whitespace")(h):O(h)}function O(h){return h===null||(0,s.Ch)(h)?o(h):p(h)}}},62453:function(W,b,E){E.d(b,{R:function(){return k}});var M=E(32473);const k={name:"hardBreakEscape",tokenize:S};function S(C,m,s){return e;function e(a){return C.enter("hardBreakEscape"),C.consume(a),_}function _(a){return(0,M.Ch)(a)?(C.exit("hardBreakEscape"),m(a)):s(a)}}},12138:function(W,b,E){E.d(b,{Z:function(){return C}});var M=E(42761),k=E(32473),S=E(21905);const C={name:"headingAtx",tokenize:s,resolve:m};function m(e,_){let a=e.length-2,l=3,r,x;return e[l][1].type==="whitespace"&&(l+=2),a-2>l&&e[a][1].type==="whitespace"&&(a-=2),e[a][1].type==="atxHeadingSequence"&&(l===a-1||a-4>l&&e[a-2][1].type==="whitespace")&&(a-=l+1===a?2:4),a>l&&(r={type:"atxHeadingText",start:e[l][1].start,end:e[a][1].end},x={type:"chunkText",start:e[l][1].start,end:e[a][1].end,contentType:"text"},(0,S.d)(e,l,a-l+1,[["enter",r,_],["enter",x,_],["exit",x,_],["exit",r,_]])),e}function s(e,_,a){let l=0;return r;function r(i){return e.enter("atxHeading"),x(i)}function x(i){return e.enter("atxHeadingSequence"),o(i)}function o(i){return i===35&&l++<6?(e.consume(i),o):i===null||(0,k.z3)(i)?(e.exit("atxHeadingSequence"),p(i)):a(i)}function p(i){return i===35?(e.enter("atxHeadingSequence"),c(i)):i===null||(0,k.Ch)(i)?(e.exit("atxHeading"),_(i)):(0,k.xz)(i)?(0,M.f)(e,p,"whitespace")(i):(e.enter("atxHeadingText"),u(i))}function c(i){return i===35?(e.consume(i),c):(e.exit("atxHeadingSequence"),p(i))}function u(i){return i===null||i===35||(0,k.z3)(i)?(e.exit("atxHeadingText"),p(i)):(e.consume(i),u)}}},16664:function(W,b,E){E.d(b,{P:function(){return C}});var M=E(32473),k=E(60330),S=E(23402);const C={name:"htmlFlow",tokenize:_,resolveTo:e,concrete:!0},m={tokenize:l,partial:!0},s={tokenize:a,partial:!0};function e(r){let x=r.length;for(;x--&&!(r[x][0]==="enter"&&r[x][1].type==="htmlFlow"););return x>1&&r[x-2][1].type==="linePrefix"&&(r[x][1].start=r[x-2][1].start,r[x+1][1].start=r[x-2][1].start,r.splice(x-2,2)),r}function _(r,x,o){const p=this;let c,u,i,O,h;return f;function f(n){return T(n)}function T(n){return r.enter("htmlFlow"),r.enter("htmlFlowData"),r.consume(n),A}function A(n){return n===33?(r.consume(n),I):n===47?(r.consume(n),u=!0,P):n===63?(r.consume(n),c=3,p.interrupt?x:Q):(0,M.jv)(n)?(r.consume(n),i=String.fromCharCode(n),R):o(n)}function I(n){return n===45?(r.consume(n),c=2,L):n===91?(r.consume(n),c=5,O=0,z):(0,M.jv)(n)?(r.consume(n),c=4,p.interrupt?x:Q):o(n)}function L(n){return n===45?(r.consume(n),p.interrupt?x:Q):o(n)}function z(n){const v="CDATA[";return n===v.charCodeAt(O++)?(r.consume(n),O===v.length?p.interrupt?x:U:z):o(n)}function P(n){return(0,M.jv)(n)?(r.consume(n),i=String.fromCharCode(n),R):o(n)}function R(n){if(n===null||n===47||n===62||(0,M.z3)(n)){const v=n===47,nn=i.toLowerCase();return!v&&!u&&k.L.includes(nn)?(c=1,p.interrupt?x(n):U(n)):k.G.includes(i.toLowerCase())?(c=6,v?(r.consume(n),F):p.interrupt?x(n):U(n)):(c=7,p.interrupt&&!p.parser.lazy[p.now().line]?o(n):u?g(n):D(n))}return n===45||(0,M.H$)(n)?(r.consume(n),i+=String.fromCharCode(n),R):o(n)}function F(n){return n===62?(r.consume(n),p.interrupt?x:U):o(n)}function g(n){return(0,M.xz)(n)?(r.consume(n),g):w(n)}function D(n){return n===47?(r.consume(n),w):n===58||n===95||(0,M.jv)(n)?(r.consume(n),y):(0,M.xz)(n)?(r.consume(n),D):w(n)}function y(n){return n===45||n===46||n===58||n===95||(0,M.H$)(n)?(r.consume(n),y):K(n)}function K(n){return n===61?(r.consume(n),j):(0,M.xz)(n)?(r.consume(n),K):D(n)}function j(n){return n===null||n===60||n===61||n===62||n===96?o(n):n===34||n===39?(r.consume(n),h=n,H):(0,M.xz)(n)?(r.consume(n),j):V(n)}function H(n){return n===h?(r.consume(n),h=null,N):n===null||(0,M.Ch)(n)?o(n):(r.consume(n),H)}function V(n){return n===null||n===34||n===39||n===47||n===60||n===61||n===62||n===96||(0,M.z3)(n)?K(n):(r.consume(n),V)}function N(n){return n===47||n===62||(0,M.xz)(n)?D(n):o(n)}function w(n){return n===62?(r.consume(n),B):o(n)}function B(n){return n===null||(0,M.Ch)(n)?U(n):(0,M.xz)(n)?(r.consume(n),B):o(n)}function U(n){return n===45&&c===2?(r.consume(n),J):n===60&&c===1?(r.consume(n),q):n===62&&c===4?(r.consume(n),Y):n===63&&c===3?(r.consume(n),Q):n===93&&c===5?(r.consume(n),d):(0,M.Ch)(n)&&(c===6||c===7)?(r.exit("htmlFlowData"),r.check(m,X,$)(n)):n===null||(0,M.Ch)(n)?(r.exit("htmlFlowData"),$(n)):(r.consume(n),U)}function $(n){return r.check(s,t,X)(n)}function t(n){return r.enter("lineEnding"),r.consume(n),r.exit("lineEnding"),Z}function Z(n){return n===null||(0,M.Ch)(n)?$(n):(r.enter("htmlFlowData"),U(n))}function J(n){return n===45?(r.consume(n),Q):U(n)}function q(n){return n===47?(r.consume(n),i="",G):U(n)}function G(n){if(n===62){const v=i.toLowerCase();return k.L.includes(v)?(r.consume(n),Y):U(n)}return(0,M.jv)(n)&&i.length<8?(r.consume(n),i+=String.fromCharCode(n),G):U(n)}function d(n){return n===93?(r.consume(n),Q):U(n)}function Q(n){return n===62?(r.consume(n),Y):n===45&&c===2?(r.consume(n),Q):U(n)}function Y(n){return n===null||(0,M.Ch)(n)?(r.exit("htmlFlowData"),X(n)):(r.consume(n),Y)}function X(n){return r.exit("htmlFlow"),x(n)}}function a(r,x,o){const p=this;return c;function c(i){return(0,M.Ch)(i)?(r.enter("lineEnding"),r.consume(i),r.exit("lineEnding"),u):o(i)}function u(i){return p.parser.lazy[p.now().line]?o(i):x(i)}}function l(r,x,o){return p;function p(c){return r.enter("lineEnding"),r.consume(c),r.exit("lineEnding"),r.attempt(S.w,x,o)}}},23803:function(W,b,E){E.d(b,{L:function(){return S}});var M=E(42761),k=E(32473);const S={name:"htmlText",tokenize:C};function C(m,s,e){const _=this;let a,l,r;return x;function x(t){return m.enter("htmlText"),m.enter("htmlTextData"),m.consume(t),o}function o(t){return t===33?(m.consume(t),p):t===47?(m.consume(t),P):t===63?(m.consume(t),L):(0,k.jv)(t)?(m.consume(t),g):e(t)}function p(t){return t===45?(m.consume(t),c):t===91?(m.consume(t),l=0,h):(0,k.jv)(t)?(m.consume(t),I):e(t)}function c(t){return t===45?(m.consume(t),O):e(t)}function u(t){return t===null?e(t):t===45?(m.consume(t),i):(0,k.Ch)(t)?(r=u,B(t)):(m.consume(t),u)}function i(t){return t===45?(m.consume(t),O):u(t)}function O(t){return t===62?w(t):t===45?i(t):u(t)}function h(t){const Z="CDATA[";return t===Z.charCodeAt(l++)?(m.consume(t),l===Z.length?f:h):e(t)}function f(t){return t===null?e(t):t===93?(m.consume(t),T):(0,k.Ch)(t)?(r=f,B(t)):(m.consume(t),f)}function T(t){return t===93?(m.consume(t),A):f(t)}function A(t){return t===62?w(t):t===93?(m.consume(t),A):f(t)}function I(t){return t===null||t===62?w(t):(0,k.Ch)(t)?(r=I,B(t)):(m.consume(t),I)}function L(t){return t===null?e(t):t===63?(m.consume(t),z):(0,k.Ch)(t)?(r=L,B(t)):(m.consume(t),L)}function z(t){return t===62?w(t):L(t)}function P(t){return(0,k.jv)(t)?(m.consume(t),R):e(t)}function R(t){return t===45||(0,k.H$)(t)?(m.consume(t),R):F(t)}function F(t){return(0,k.Ch)(t)?(r=F,B(t)):(0,k.xz)(t)?(m.consume(t),F):w(t)}function g(t){return t===45||(0,k.H$)(t)?(m.consume(t),g):t===47||t===62||(0,k.z3)(t)?D(t):e(t)}function D(t){return t===47?(m.consume(t),w):t===58||t===95||(0,k.jv)(t)?(m.consume(t),y):(0,k.Ch)(t)?(r=D,B(t)):(0,k.xz)(t)?(m.consume(t),D):w(t)}function y(t){return t===45||t===46||t===58||t===95||(0,k.H$)(t)?(m.consume(t),y):K(t)}function K(t){return t===61?(m.consume(t),j):(0,k.Ch)(t)?(r=K,B(t)):(0,k.xz)(t)?(m.consume(t),K):D(t)}function j(t){return t===null||t===60||t===61||t===62||t===96?e(t):t===34||t===39?(m.consume(t),a=t,H):(0,k.Ch)(t)?(r=j,B(t)):(0,k.xz)(t)?(m.consume(t),j):(m.consume(t),V)}function H(t){return t===a?(m.consume(t),a=void 0,N):t===null?e(t):(0,k.Ch)(t)?(r=H,B(t)):(m.consume(t),H)}function V(t){return t===null||t===34||t===39||t===60||t===61||t===96?e(t):t===47||t===62||(0,k.z3)(t)?D(t):(m.consume(t),V)}function N(t){return t===47||t===62||(0,k.z3)(t)?D(t):e(t)}function w(t){return t===62?(m.consume(t),m.exit("htmlTextData"),m.exit("htmlText"),s):e(t)}function B(t){return m.exit("htmlTextData"),m.enter("lineEnding"),m.consume(t),m.exit("lineEnding"),U}function U(t){return(0,k.xz)(t)?(0,M.f)(m,$,"linePrefix",_.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(t):$(t)}function $(t){return m.enter("htmlTextData"),r(t)}}},82815:function(W,b,E){E.d(b,{Z:function(){return a}});var M=E(57404),k=E(36892),S=E(40651),C=E(16226),m=E(32473),s=E(21905),e=E(11098),_=E(63233);const a={name:"labelEnd",tokenize:c,resolveTo:p,resolveAll:o},l={tokenize:u},r={tokenize:i},x={tokenize:O};function o(h){let f=-1;for(;++f<h.length;){const T=h[f][1];(T.type==="labelImage"||T.type==="labelLink"||T.type==="labelEnd")&&(h.splice(f+1,T.type==="labelImage"?4:2),T.type="data",f++)}return h}function p(h,f){let T=h.length,A=0,I,L,z,P;for(;T--;)if(I=h[T][1],L){if(I.type==="link"||I.type==="labelLink"&&I._inactive)break;h[T][0]==="enter"&&I.type==="labelLink"&&(I._inactive=!0)}else if(z){if(h[T][0]==="enter"&&(I.type==="labelImage"||I.type==="labelLink")&&!I._balanced&&(L=T,I.type!=="labelLink")){A=2;break}}else I.type==="labelEnd"&&(z=T);const R={type:h[L][1].type==="labelLink"?"link":"image",start:Object.assign({},h[L][1].start),end:Object.assign({},h[h.length-1][1].end)},F={type:"label",start:Object.assign({},h[L][1].start),end:Object.assign({},h[z][1].end)},g={type:"labelText",start:Object.assign({},h[L+A+2][1].end),end:Object.assign({},h[z-2][1].start)};return P=[["enter",R,f],["enter",F,f]],P=(0,s.V)(P,h.slice(L+1,L+A+3)),P=(0,s.V)(P,[["enter",g,f]]),P=(0,s.V)(P,(0,_.C)(f.parser.constructs.insideSpan.null,h.slice(L+A+4,z-3),f)),P=(0,s.V)(P,[["exit",g,f],h[z-2],h[z-1],["exit",F,f]]),P=(0,s.V)(P,h.slice(z+1)),P=(0,s.V)(P,[["exit",R,f]]),(0,s.d)(h,L,h.length,P),h}function c(h,f,T){const A=this;let I=A.events.length,L,z;for(;I--;)if((A.events[I][1].type==="labelImage"||A.events[I][1].type==="labelLink")&&!A.events[I][1]._balanced){L=A.events[I][1];break}return P;function P(y){return L?L._inactive?D(y):(z=A.parser.defined.includes((0,e.d)(A.sliceSerialize({start:L.end,end:A.now()}))),h.enter("labelEnd"),h.enter("labelMarker"),h.consume(y),h.exit("labelMarker"),h.exit("labelEnd"),R):T(y)}function R(y){return y===40?h.attempt(l,g,z?g:D)(y):y===91?h.attempt(r,g,z?F:D)(y):z?g(y):D(y)}function F(y){return h.attempt(x,g,D)(y)}function g(y){return f(y)}function D(y){return L._balanced=!0,T(y)}}function u(h,f,T){return A;function A(D){return h.enter("resource"),h.enter("resourceMarker"),h.consume(D),h.exit("resourceMarker"),I}function I(D){return(0,m.z3)(D)?(0,C.S)(h,L)(D):L(D)}function L(D){return D===41?g(D):(0,M.Z)(h,z,P,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(D)}function z(D){return(0,m.z3)(D)?(0,C.S)(h,R)(D):g(D)}function P(D){return T(D)}function R(D){return D===34||D===39||D===40?(0,S.X)(h,F,T,"resourceTitle","resourceTitleMarker","resourceTitleString")(D):g(D)}function F(D){return(0,m.z3)(D)?(0,C.S)(h,g)(D):g(D)}function g(D){return D===41?(h.enter("resourceMarker"),h.consume(D),h.exit("resourceMarker"),h.exit("resource"),f):T(D)}}function i(h,f,T){const A=this;return I;function I(P){return k.f.call(A,h,L,z,"reference","referenceMarker","referenceString")(P)}function L(P){return A.parser.defined.includes((0,e.d)(A.sliceSerialize(A.events[A.events.length-1][1]).slice(1,-1)))?f(P):T(P)}function z(P){return T(P)}}function O(h,f,T){return A;function A(L){return h.enter("reference"),h.enter("referenceMarker"),h.consume(L),h.exit("referenceMarker"),I}function I(L){return L===93?(h.enter("referenceMarker"),h.consume(L),h.exit("referenceMarker"),h.exit("reference"),f):T(L)}}},44115:function(W,b,E){E.d(b,{C:function(){return k}});var M=E(82815);const k={name:"labelStartImage",tokenize:S,resolveAll:M.Z.resolveAll};function S(C,m,s){const e=this;return _;function _(r){return C.enter("labelImage"),C.enter("labelImageMarker"),C.consume(r),C.exit("labelImageMarker"),a}function a(r){return r===91?(C.enter("labelMarker"),C.consume(r),C.exit("labelMarker"),C.exit("labelImage"),l):s(r)}function l(r){return r===94&&"_hiddenFootnoteSupport"in e.parser.constructs?s(r):m(r)}}},5575:function(W,b,E){E.d(b,{F:function(){return k}});var M=E(82815);const k={name:"labelStartLink",tokenize:S,resolveAll:M.Z.resolveAll};function S(C,m,s){const e=this;return _;function _(l){return C.enter("labelLink"),C.enter("labelMarker"),C.consume(l),C.exit("labelMarker"),C.exit("labelLink"),a}function a(l){return l===94&&"_hiddenFootnoteSupport"in e.parser.constructs?s(l):m(l)}}},95171:function(W,b,E){E.d(b,{g:function(){return k}});var M=E(42761);const k={name:"lineEnding",tokenize:S};function S(C,m){return s;function s(e){return C.enter("lineEnding"),C.consume(e),C.exit("lineEnding"),(0,M.f)(C,m,"linePrefix")}}},74384:function(W,b,E){E.d(b,{p:function(){return m}});var M=E(42761),k=E(32473),S=E(23402),C=E(1868);const m={name:"list",tokenize:_,continuation:{tokenize:a},exit:r},s={tokenize:x,partial:!0},e={tokenize:l,partial:!0};function _(o,p,c){const u=this,i=u.events[u.events.length-1];let O=i&&i[1].type==="linePrefix"?i[2].sliceSerialize(i[1],!0).length:0,h=0;return f;function f(P){const R=u.containerState.type||(P===42||P===43||P===45?"listUnordered":"listOrdered");if(R==="listUnordered"?!u.containerState.marker||P===u.containerState.marker:(0,k.pY)(P)){if(u.containerState.type||(u.containerState.type=R,o.enter(R,{_container:!0})),R==="listUnordered")return o.enter("listItemPrefix"),P===42||P===45?o.check(C.C,c,A)(P):A(P);if(!u.interrupt||P===49)return o.enter("listItemPrefix"),o.enter("listItemValue"),T(P)}return c(P)}function T(P){return(0,k.pY)(P)&&++h<10?(o.consume(P),T):(!u.interrupt||h<2)&&(u.containerState.marker?P===u.containerState.marker:P===41||P===46)?(o.exit("listItemValue"),A(P)):c(P)}function A(P){return o.enter("listItemMarker"),o.consume(P),o.exit("listItemMarker"),u.containerState.marker=u.containerState.marker||P,o.check(S.w,u.interrupt?c:I,o.attempt(s,z,L))}function I(P){return u.containerState.initialBlankLine=!0,O++,z(P)}function L(P){return(0,k.xz)(P)?(o.enter("listItemPrefixWhitespace"),o.consume(P),o.exit("listItemPrefixWhitespace"),z):c(P)}function z(P){return u.containerState.size=O+u.sliceSerialize(o.exit("listItemPrefix"),!0).length,p(P)}}function a(o,p,c){const u=this;return u.containerState._closeFlow=void 0,o.check(S.w,i,O);function i(f){return u.containerState.furtherBlankLines=u.containerState.furtherBlankLines||u.containerState.initialBlankLine,(0,M.f)(o,p,"listItemIndent",u.containerState.size+1)(f)}function O(f){return u.containerState.furtherBlankLines||!(0,k.xz)(f)?(u.containerState.furtherBlankLines=void 0,u.containerState.initialBlankLine=void 0,h(f)):(u.containerState.furtherBlankLines=void 0,u.containerState.initialBlankLine=void 0,o.attempt(e,p,h)(f))}function h(f){return u.containerState._closeFlow=!0,u.interrupt=void 0,(0,M.f)(o,o.attempt(m,p,c),"linePrefix",u.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(f)}}function l(o,p,c){const u=this;return(0,M.f)(o,i,"listItemIndent",u.containerState.size+1);function i(O){const h=u.events[u.events.length-1];return h&&h[1].type==="listItemIndent"&&h[2].sliceSerialize(h[1],!0).length===u.containerState.size?p(O):c(O)}}function r(o){o.exit(this.containerState.type)}function x(o,p,c){const u=this;return(0,M.f)(o,i,"listItemPrefixWhitespace",u.parser.constructs.disable.null.includes("codeIndented")?void 0:4+1);function i(O){const h=u.events[u.events.length-1];return!(0,k.xz)(O)&&h&&h[1].type==="listItemPrefixWhitespace"?p(O):c(O)}}},18077:function(W,b,E){E.d(b,{C:function(){return S}});var M=E(42761),k=E(32473);const S={name:"setextUnderline",tokenize:m,resolveTo:C};function C(s,e){let _=s.length,a,l,r;for(;_--;)if(s[_][0]==="enter"){if(s[_][1].type==="content"){a=_;break}s[_][1].type==="paragraph"&&(l=_)}else s[_][1].type==="content"&&s.splice(_,1),!r&&s[_][1].type==="definition"&&(r=_);const x={type:"setextHeading",start:Object.assign({},s[l][1].start),end:Object.assign({},s[s.length-1][1].end)};return s[l][1].type="setextHeadingText",r?(s.splice(l,0,["enter",x,e]),s.splice(r+1,0,["exit",s[a][1],e]),s[a][1].end=Object.assign({},s[r][1].end)):s[a][1]=x,s.push(["exit",x,e]),s}function m(s,e,_){const a=this;let l;return r;function r(c){let u=a.events.length,i;for(;u--;)if(a.events[u][1].type!=="lineEnding"&&a.events[u][1].type!=="linePrefix"&&a.events[u][1].type!=="content"){i=a.events[u][1].type==="paragraph";break}return!a.parser.lazy[a.now().line]&&(a.interrupt||i)?(s.enter("setextHeadingLine"),l=c,x(c)):_(c)}function x(c){return s.enter("setextHeadingLineSequence"),o(c)}function o(c){return c===l?(s.consume(c),o):(s.exit("setextHeadingLineSequence"),(0,k.xz)(c)?(0,M.f)(s,p,"lineSuffix")(c):p(c))}function p(c){return c===null||(0,k.Ch)(c)?(s.exit("setextHeadingLine"),e(c)):_(c)}}},1868:function(W,b,E){E.d(b,{C:function(){return S}});var M=E(42761),k=E(32473);const S={name:"thematicBreak",tokenize:C};function C(m,s,e){let _=0,a;return l;function l(p){return m.enter("thematicBreak"),r(p)}function r(p){return a=p,x(p)}function x(p){return p===a?(m.enter("thematicBreakSequence"),o(p)):_>=3&&(p===null||(0,k.Ch)(p))?(m.exit("thematicBreak"),s(p)):e(p)}function o(p){return p===a?(m.consume(p),_++,o):(m.exit("thematicBreakSequence"),(0,k.xz)(p)?(0,M.f)(m,x,"whitespace")(p):x(p))}}}}]);})();

//# sourceMappingURL=module-micromark-core-commonmark.81509c2b.js.map