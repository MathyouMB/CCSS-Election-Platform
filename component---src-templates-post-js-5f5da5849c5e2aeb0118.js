(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"6qSS":function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),o=n("Wbzz"),l=n("/zyf"),m=n("OtEr"),i=n("tKV0"),u=n("/R/0"),c=n("S8eP");n("Jmu9");var s=n("0qiq"),f=n("JTHd");t.default=function(e){var t=Object(f.a)(),n=e.data.markdownRemark,a={actions:[m.DeleteAction],fields:[{label:"Title",name:"rawFrontmatter.title",component:"text"},{label:"Authors",name:"rawFrontmatter.authors",component:"authors",authors:t},{name:"rawFrontmatter.draft",component:"toggle",label:"Draft"},{label:"Date",name:"rawFrontmatter.date",component:"date"},{label:"Hero Image",name:"rawFrontmatter.hero.image",component:"image",parse:function(e){return e?"../images/"+e.filename:""},uploadDir:function(){return"/content/images/"},previewSrc:function(e,t,n){return n.frontmatter.hero&&n.frontmatter.hero.image?n.frontmatter.hero.image.childImageSharp.fluid.src:""}}]},d=Object(m.useRemarkForm)(n,a),p=d[0],b=d[1];return Object(l.usePlugin)(b),r.a.createElement(i.InlineForm,{form:b},r.a.createElement(s.a,{page:p},r.a.createElement(c.j,null,r.a.createElement(c.g,null,r.a.createElement(c.h,null,r.a.createElement(o.Link,{to:"/blog"},"← Back"))),r.a.createElement("h1",null,r.a.createElement(i.InlineTextField,{name:"rawFrontmatter.title"})),r.a.createElement("hr",null),r.a.createElement(u.InlineWysiwyg,{name:"rawMarkdownBody",format:"markdown"},r.a.createElement("div",{dangerouslySetInnerHTML:{__html:p.html}})),p.frontmatter.draft&&r.a.createElement(c.b,null,"Draft"),!1)))}},JTHd:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n("Wbzz"),r=function(){return Object(a.useStaticQuery)("2928712368").settingsJson.authors}},Jmu9:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));n("JTHd");var a={label:"Authors",fields:[{label:"Authors",name:"rawJson.authors",component:"group-list",itemProps:function(e){return{key:e.id,label:e.name}},defaultItem:function(){return{name:"New Author",id:Math.random().toString(36).substr(2,9),email:"",link:""}},fields:[{label:"Name",name:"name",component:"text",parse:function(e){return e||""}},{label:"Email",name:"email",component:"text",parse:function(e){return e||""}},{label:"Link",name:"link",component:"text",parse:function(e){return e||""}}]}]}}}]);
//# sourceMappingURL=component---src-templates-post-js-5f5da5849c5e2aeb0118.js.map