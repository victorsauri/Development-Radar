(()=>{(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7632],{29702:function(t){function d(e){const n={className:"string",variants:[e.inherit(e.QUOTE_STRING_MODE,{begin:'((u8?|U)|L)?"'}),{begin:'(u8?|U)?R"',end:'"',contains:[e.BACKSLASH_ESCAPE]},{begin:"'\\\\?.",end:"'",illegal:"."}]},a={className:"number",variants:[{begin:"\\b(\\d+(\\.\\d*)?|\\.\\d+)(u|U|l|L|ul|UL|f|F)"},{begin:e.C_NUMBER_RE}],relevance:0},r={className:"meta",begin:"#",end:"$",keywords:{"meta-keyword":"if else elif endif define undef ifdef ifndef"},contains:[{begin:/\\\n/,relevance:0},{beginKeywords:"include",end:"$",keywords:{"meta-keyword":"include"},contains:[e.inherit(n,{className:"meta-string"}),{className:"meta-string",begin:"<",end:">",illegal:"\\n"}]},n,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE]},s={className:"variable",begin:/&[a-z\d_]*\b/},i={className:"meta-keyword",begin:"/[a-z][a-z\\d-]*/"},c={className:"symbol",begin:"^\\s*[a-zA-Z_][a-zA-Z\\d_]*:"},_={className:"params",begin:"<",end:">",contains:[a,s]},E={className:"class",begin:/[a-zA-Z_][a-zA-Z\d_@]*\s\{/,end:/[{;=]/,returnBegin:!0,excludeEnd:!0};return{name:"Device Tree",keywords:"",contains:[{className:"class",begin:"/\\s*\\{",end:/\};/,relevance:10,contains:[s,i,c,E,_,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,a,n]},s,i,c,E,_,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,a,n,r,{begin:e.IDENT_RE+"::",keywords:""}]}}t.exports=d}}]);})();

//# sourceMappingURL=react-syntax-highlighter_languages_highlight_dts.cd1afbb7.chunk.js.map