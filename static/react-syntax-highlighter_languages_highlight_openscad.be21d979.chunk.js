(()=>{(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7433],{41078:function(o){function a(e){const n={className:"keyword",begin:"\\$(f[asn]|t|vp[rtd]|children)"},t={className:"literal",begin:"false|true|PI|undef"},s={className:"number",begin:"\\b\\d+(\\.\\d+)?(e-?\\d+)?",relevance:0},r=e.inherit(e.QUOTE_STRING_MODE,{illegal:null}),i={className:"meta",keywords:{"meta-keyword":"include use"},begin:"include|use <",end:">"},c={className:"params",begin:"\\(",end:"\\)",contains:["self",s,r,n,t]},l={begin:"[*!#%]",relevance:0},d={className:"function",beginKeywords:"module function",end:/=|\{/,contains:[c,e.UNDERSCORE_TITLE_MODE]};return{name:"OpenSCAD",aliases:["scad"],keywords:{keyword:"function module include use for intersection_for if else \\%",literal:"false true PI undef",built_in:"circle square polygon text sphere cube cylinder polyhedron translate rotate scale resize mirror multmatrix color offset hull minkowski union difference intersection abs sign sin cos tan acos asin atan atan2 floor round ceil ln log pow sqrt exp rands min max concat lookup str chr search version version_num norm cross parent_module echo import import_dxf dxf_linear_extrude linear_extrude rotate_extrude surface projection render children dxf_cross dxf_dim let assign"},contains:[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,s,i,r,n,l,d]}}o.exports=a}}]);})();

//# sourceMappingURL=react-syntax-highlighter_languages_highlight_openscad.be21d979.chunk.js.map