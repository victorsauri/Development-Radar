(()=>{(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7019],{42157:function(u){function r(e){return e?typeof e=="string"?e:e.source:null}function o(e){return n("(?=",e,")")}function b(e){return n("(",e,")?")}function n(...e){return e.map(s=>r(s)).join("")}function d(...e){return"("+e.map(s=>r(s)).join("|")+")"}function _(e){const a=n(/[A-Z_]/,b(/[A-Z0-9_.-]*:/),/[A-Z0-9_.-]*/),s=/[A-Za-z0-9._:-]+/,t={className:"symbol",begin:/&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/},i={begin:/\s/,contains:[{className:"meta-keyword",begin:/#?[a-z_][a-z1-9_-]+/,illegal:/\n/}]},l=e.inherit(i,{begin:/\(/,end:/\)/}),g=e.inherit(e.APOS_STRING_MODE,{className:"meta-string"}),m=e.inherit(e.QUOTE_STRING_MODE,{className:"meta-string"}),c={endsWithParent:!0,illegal:/</,relevance:0,contains:[{className:"attr",begin:s,relevance:0},{begin:/=\s*/,relevance:0,contains:[{className:"string",endsParent:!0,variants:[{begin:/"/,end:/"/,contains:[t]},{begin:/'/,end:/'/,contains:[t]},{begin:/[^\s"'=<>`]+/}]}]}]};return{name:"HTML, XML",aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist","wsf","svg"],case_insensitive:!0,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,relevance:10,contains:[i,m,g,l,{begin:/\[/,end:/\]/,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,contains:[i,l,m,g]}]}]},e.COMMENT(/<!--/,/-->/,{relevance:10}),{begin:/<!\[CDATA\[/,end:/\]\]>/,relevance:10},t,{className:"meta",begin:/<\?xml/,end:/\?>/,relevance:10},{className:"tag",begin:/<style(?=\s|>)/,end:/>/,keywords:{name:"style"},contains:[c],starts:{end:/<\/style>/,returnEnd:!0,subLanguage:["css","xml"]}},{className:"tag",begin:/<script(?=\s|>)/,end:/>/,keywords:{name:"script"},contains:[c],starts:{end:/<\/script>/,returnEnd:!0,subLanguage:["javascript","handlebars","xml"]}},{className:"tag",begin:/<>|<\/>/},{className:"tag",begin:n(/</,o(n(a,d(/\/>/,/>/,/\s/)))),end:/\/?>/,contains:[{className:"name",begin:a,relevance:0,starts:c}]},{className:"tag",begin:n(/<\//,o(n(a,/>/))),contains:[{className:"name",begin:a,relevance:0},{begin:/>/,relevance:0,endsParent:!0}]}]}}u.exports=_}}]);})();

//# sourceMappingURL=react-syntax-highlighter_languages_highlight_xml.810208a4.chunk.js.map