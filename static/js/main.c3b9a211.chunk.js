(this.webpackJsonpbusinesslogger=this.webpackJsonpbusinesslogger||[]).push([[0],{191:function(e,t,c){},192:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c(83),a=c(84),r=c(91),i=c(90),l=c(3),o=c(32),j=c.n(o),b=c(5),d=c(6),u=function(e){return Object(n.jsx)("nav",{class:"navbar navbar-expand-lg navbar-dark bg-dark",children:Object(n.jsxs)("div",{class:"container-fluid",children:[Object(n.jsx)(d.b,{to:"/",className:"navbar-brand",children:"BusinessLogger"}),Object(n.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(n.jsxs)("ul",{class:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(n.jsx)("li",{class:"nav-item",children:Object(n.jsx)(d.b,{to:"/",className:"nav-link active","aria-current":"page",children:"Home"})}),Object(n.jsx)("li",{class:"nav-item",children:Object(n.jsx)(d.b,{to:"/Invoice",className:"nav-link active","aria-current":"page",children:"Invoice"})}),Object(n.jsx)("li",{class:"nav-item",children:Object(n.jsx)(d.b,{to:"/YourInvestment",className:"nav-link active","aria-current":"page",children:"Your Investment"})}),Object(n.jsx)("li",{class:"nav-item",children:Object(n.jsx)(d.b,{to:"/Stats",className:"nav-link active","aria-current":"page",children:"Stats"})}),Object(n.jsx)("li",{children:Object(n.jsx)(d.b,{to:"/",className:"nav-link active",onClick:e.logoutHandler,children:"Logout"})})]})})]})})},m=c(9),h=c(21),O=c.n(h),x=function(e){var t=Object(l.useState)(""),c=Object(b.a)(t,2),s=c[0],a=c[1],r=Object(l.useState)(""),i=Object(b.a)(r,2),o=i[0],j=i[1];Object(m.f)();return Object(n.jsxs)("div",{className:"container LoginMainBox",children:[Object(n.jsx)("h3",{className:"loginRegisterTitle",children:"Login"}),Object(n.jsx)("input",{className:"form-control  col-sm-5",type:"email",placeholder:"Email",onChange:function(e){return a(e.target.value)},value:s}),Object(n.jsx)("br",{}),Object(n.jsx)("input",{className:"form-control  col-sm-5",type:"password",placeholder:"Password",onChange:function(e){return j(e.target.value)},value:o}),Object(n.jsx)("br",{}),Object(n.jsx)("button",{className:"btn btn-sm btn-primary my-1n loginButton",onClick:function(){e.loginHandler(s,o)},children:"Submit"}),e.error?Object(n.jsx)("div",{style:{textAlign:"left",color:"red"},children:e.error}):null]})},p=c.p+"static/media/Homepage.1802e288.svg";function v(){return Object(n.jsxs)("div",{className:"row homeMainBox container",children:[Object(n.jsx)("div",{className:"col-lg-6 col-sm-12 homeTitleBox",children:Object(n.jsx)("h1",{className:"homeTitle",children:"Welcome! grow your business with us."})}),Object(n.jsx)("div",{className:"col-lg-6 col-sm-12 homeLogoBox",children:Object(n.jsx)("img",{className:"homeImage",src:p})})]})}var g=c(86),f=c.n(g),N=(c(119),function(){var e=Object(l.useState)([]),t=Object(b.a)(e,2),c=t[0],s=t[1],a=Object(l.useState)(null),r=Object(b.a)(a,2),i=r[0],o=r[1],j=Object(l.useState)(null),d=Object(b.a)(j,2),u=d[0],m=d[1],h=Object(l.useState)(null),x=Object(b.a)(h,2),p=x[0],v=x[1],g=Object(l.useState)({}),N=Object(b.a)(g,2),y=N[0],S=N[1],k=Object(l.useState)(""),C=Object(b.a)(k,2),w=C[0],I=C[1],E=Object(l.useState)({}),R=Object(b.a)(E,2),D=R[0],B=R[1],L=Object(l.useState)(""),H=Object(b.a)(L,2),T=H[0],A=H[1],Y=Object(l.useState)({}),F=Object(b.a)(Y,2),P=F[0],q=F[1],M=Object(l.useState)(""),J=Object(b.a)(M,2),Q=J[0],V=J[1];Object(l.useEffect)((function(){O.a.get("https://businesslogger.herokuapp.com/stats",{withCredentials:!0}).then((function(e){return s(e.data)}))}));return Object(n.jsxs)("div",{className:"container my-5",children:[Object(n.jsx)("div",{className:"card",style:{width:"18rem",display:"inline-block"},children:Object(n.jsxs)("div",{className:"card-body",children:[Object(n.jsx)("h3",{children:w}),Object(n.jsx)("hr",{}),Object(n.jsxs)("h4",{children:["Earning:-",y.earning]}),Object(n.jsxs)("h4",{children:["Expenditure:-",y.expenditure]}),Object(n.jsxs)("h4",{children:["Profit:-",y.profit]}),Object(n.jsx)("div",{className:"progress",style:{height:"20px"},children:Object(n.jsx)("div",{className:"progress-bar progress-bar-striped bg-success",role:"progressbar",style:{width:"".concat(y.profit,"%")},"aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100",children:y.profit})}),Object(n.jsx)(f.a,{className:"my-3 form-control",selected:i,onChange:function(e){return o(e)}}),Object(n.jsx)("button",{className:"btn-sm btn-primary my-2",onClick:function(){var e=0,t=0,n=!0;c.map((function(c,s){if(c.date==i.toLocaleDateString()){e=c.earning+e,t+=c.expenditure,n=!1;var a=(e-t)/t*100;I("Here is your Stats !"),S({earning:e,expenditure:t,profit:a.toFixed(2)+"%"})}1!=n&&void 0!==c.date||(I("No Data Available"),S({earning:"",expenditure:"",profit:""}))})),o(null)},disabled:null==i,children:"Serach By Date"})]})}),Object(n.jsx)("div",{className:"card mx-5 my-2",style:{width:"18rem",display:"inline-block"},children:Object(n.jsxs)("div",{className:"card-body",children:[Object(n.jsx)("h3",{children:T}),Object(n.jsx)("hr",{}),Object(n.jsxs)("h4",{children:["Earning:-",D.earning]}),Object(n.jsxs)("h4",{children:["Expenditure:-",D.expenditure]}),Object(n.jsxs)("h4",{children:["Profit:-",D.profit]}),Object(n.jsx)("div",{className:"progress",style:{height:"20px"},children:Object(n.jsx)("div",{className:"progress-bar progress-bar-striped bg-success",role:"progressbar",style:{width:"".concat(D.profit,"%")},"aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100",children:D.profit})}),Object(n.jsx)("form",{children:Object(n.jsx)("div",{class:"form-group",children:Object(n.jsxs)("select",{class:"form-control my-3",id:"exampleFormControlSelect1",onChange:function(e){m(e.target.value)},value:u,children:[" ",Object(n.jsx)("option",{children:"Select Month"}),Object(n.jsx)("option",{children:"1"}),Object(n.jsx)("option",{children:"2"}),Object(n.jsx)("option",{children:"3"}),Object(n.jsx)("option",{children:"4"}),Object(n.jsx)("option",{children:"5"}),Object(n.jsx)("option",{children:"6"}),Object(n.jsx)("option",{children:"7"}),Object(n.jsx)("option",{children:"8"}),Object(n.jsx)("option",{children:"9"}),Object(n.jsx)("option",{children:"10"}),Object(n.jsx)("option",{children:"11"}),Object(n.jsx)("option",{children:"12"})]})})}),Object(n.jsx)("button",{className:"btn-sm btn-primary my-2",onClick:function(){var e=0,t=0;c.map((function(c,n){var s=!0;if(new Date(c.date).getMonth()==u-1){e=c.earning+e,t+=c.expenditure,s=!1;var a=(e-t)/t*100;A("Here is your Stats !"),B({earning:e,expenditure:t,profit:a.toFixed(2)+"%"})}1==s&&(A("No Data Available"),B({earning:"",expenditure:"",profit:""}))})),m(null)},disabled:null==u,children:"Serach By Month"})]})}),Object(n.jsx)("div",{className:"card",style:{width:"18rem",display:"inline-block"},children:Object(n.jsxs)("div",{className:"card-body",children:[Object(n.jsx)("h3",{children:Q}),Object(n.jsx)("hr",{}),Object(n.jsxs)("h4",{children:["Earning:-",P.earning]}),Object(n.jsxs)("h4",{children:["Expenditure:-",P.expenditure]}),Object(n.jsxs)("h4",{children:["Profit:-",P.profit]}),Object(n.jsx)("div",{className:"progress",style:{height:"20px"},children:Object(n.jsx)("div",{className:"progress-bar progress-bar-striped bg-success",role:"progressbar",style:{width:"".concat(P.profit,"%")},"aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100",children:P.profit})}),Object(n.jsx)("form",{children:Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)("input",{type:"text",class:"form-control my-3",id:"formGroupExampleInput",placeholder:"Year",onChange:function(e){v(e.target.value)}})})}),Object(n.jsx)("button",{className:"btn-sm btn-primary my-2",onClick:function(){var e=0,t=0,n=!0;c.map((function(c,s){if(new Date(c.date).getFullYear()==p){e=c.earning+e,t+=c.expenditure,n=!1;var a=(e-t)/t*100;V("Here is your Stats !"),q({earning:e,expenditure:t,profit:a.toFixed(2)+"%"})}1==n&&(V("No Data Available"),q({earning:"",expenditure:"",profit:""}))})),v(null)},disabled:null==p,children:"Serach By Year"})]})})]})}),y=c(36),S=function(){var e=Object(l.useState)([]),t=Object(b.a)(e,2),c=t[0],s=t[1],a=Object(l.useState)(""),r=Object(b.a)(a,2),i=r[0],o=r[1],j=Object(l.useState)(""),d=Object(b.a)(j,2),u=d[0],m=d[1];Object(l.useEffect)((function(){O.a.get("https://businesslogger.herokuapp.com/investment/",{withCredentials:!0}).then((function(e){return s(e.data)}))}));return Object(n.jsxs)("div",{className:"container my-2 main-div",children:[Object(n.jsx)("button",{className:"btn-primary btn-sm",disabled:0===i.trim().length||0===u.trim().length,onClick:function(){var e={detail:"".concat(i),expenditure:"".concat(u)};c.push(e),O.a.post("https://businesslogger.herokuapp.com/investment/add",e,{withCredentials:!0}),s(Object(y.a)(c)),m(""),o("")},children:"Add Details"}),Object(n.jsx)("form",{children:Object(n.jsxs)("div",{class:"form-row",children:[Object(n.jsx)("div",{class:"col",children:Object(n.jsx)("input",{type:"text",class:"form-control",placeholder:"Items/services",onChange:function(e){o(e.target.value)},value:i})}),Object(n.jsx)("div",{class:"col",children:Object(n.jsx)("input",{type:"text",class:"form-control",placeholder:"Your Investment",onChange:function(e){m(e.target.value)},value:u})})]})}),Object(n.jsxs)("div",{className:"container details invoiceAndInvestTexts my-4",children:[Object(n.jsxs)("div",{className:"row",children:[Object(n.jsxs)("div",{className:"col-sm-4",children:[Object(n.jsx)("strong",{children:"Service/Items"}),Object(n.jsx)("hr",{style:{marginRight:"40%"}})]}),Object(n.jsxs)("div",{className:"col-sm-4",children:[Object(n.jsx)("strong",{children:"Your Investment"}),Object(n.jsx)("hr",{style:{marginRight:"40%"}})]})]}),c.map((function(e,t){return Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("div",{className:"col-sm-4 mx-1n",children:"".concat(t+1)+". "+"".concat(e.detail)}),Object(n.jsx)("div",{className:"col-sm-4",children:e.expenditure})]})}))]})]})},k=c(89);var C=function(){var e=Object(l.useState)([]),t=Object(b.a)(e,2),c=t[0],s=t[1],a=Object(l.useState)(""),r=Object(b.a)(a,2),i=r[0],o=r[1],j=Object(l.useState)(""),u=Object(b.a)(j,2),m=u[0],h=u[1],x=Object(l.useState)(""),p=Object(b.a)(x,2),v=p[0],g=p[1],f=Object(l.useState)(0),N=Object(b.a)(f,2),S=N[0],C=N[1],w=Object(l.useState)([]),I=Object(b.a)(w,2),E=I[0],R=I[1],D=Object(l.useState)(0),B=Object(b.a)(D,2),L=B[0],H=B[1],T=Object(l.useState)(""),A=Object(b.a)(T,2),Y=(A[0],A[1],Object(l.useState)(!0)),F=Object(b.a)(Y,2);return F[0],F[1],Object(l.useEffect)((function(){fetch("https://businesslogger.herokuapp.com/investment/",{credentials:"include"}).then((function(e){return e.json()})).then((function(e){return R(e)}))}),[]),Object(n.jsxs)("div",{children:[Object(n.jsxs)("form",{className:"my-3",children:[Object(n.jsxs)("div",{class:"form-row",children:[Object(n.jsx)("div",{class:"col",children:Object(n.jsx)("div",{class:"form-group",children:Object(n.jsxs)("select",{class:"form-select col form-control",onChange:function(e){o(e.target.value)},value:i,"aria-label":"Default select example",children:[Object(n.jsx)("option",{children:"select"}),E.map((function(e,t){return Object(n.jsx)("option",{value:e.detail,children:e.detail},t)}))]})})}),Object(n.jsx)("div",{class:"col",children:Object(n.jsx)("input",{type:"text",class:"form-control",placeholder:"Quantity",onChange:function(e){h(e.target.value)},value:m})}),Object(n.jsx)("div",{class:"col",children:Object(n.jsx)("input",{type:"text",class:"form-control",placeholder:"Rate",onChange:function(e){g(e.target.value)},value:v})})]}),Object(n.jsx)("button",{className:"btn btn-primary btn-sm",onClick:function(){c.push({name:"".concat(i),quantity:"".concat(m),rate:"".concat(v),price:"".concat(Number(v)*Number(m))}),s(Object(y.a)(c)),o(""),h(""),g("")},disabled:0===i.trim().length||0===m.trim().length||0===v.trim().length,children:"Add Items"}),Object(n.jsxs)(d.b,{to:"/Invoice",children:[" ",Object(n.jsx)("button",{className:"btn btn-sm btn-primary mx-2",onClick:function(){var e=0,t=0;c.map((function(c){e+=Number(c.price),C(e),E.map((function(e,n){e.detail===c.name&&(t+=Number(e.expenditure)*Number(c.quantity),H(t))}))}))},children:"SubTotal"})]}),Object(n.jsx)("button",{className:"btn btn-sm btn-primary mx-2",disabled:0===S,onClick:function(){var e={earning:S,expenditure:L,profit:(S-L)/L*100,date:(new Date).toLocaleDateString()};O.a.post("https://businesslogger.herokuapp.com/stats/add",e,{withCredentials:!0})},children:"Done"}),Object(n.jsx)(d.b,{to:"/Invoice",children:Object(n.jsx)("button",{className:"btn btn-sm btn-primary",disabled:0===S,onClick:function(){var e=new k.a,t=0;e.text(20,60,"INVOICE"),e.setDrawColor(0),e.setFillColor(0,0,0),e.rect(110,50,85,30,"F"),e.text(20,93,"Item"),e.text(95,93,"Quantity"),e.text(135,93,"Rate(INR)"),e.text(175,93,"Amount(INR)"),c.map((function(c,n){t+=c.rate*c.quantity,e.text(20,110+8*n,"".concat(c.name)),e.text(95,110+8*n,"".concat(c.quantity)),e.text(135,110+8*n,"".concat(c.rate)),e.text(175,110+8*n,"".concat(c.rate*c.quantity)),e.setLineWidth(12)})),e.text(20,257,"Subtotal:  INR "+t),e.save("invoice.pdf")},children:"create pdf"})})]}),Object(n.jsxs)("div",{className:"container my-4 invoiceTexts",children:[Object(n.jsx)("h3",{children:"INVOICE"}),Object(n.jsx)("hr",{style:{border:"solid 1px",marginRight:"40%"}}),Object(n.jsxs)("div",{className:"row ",children:[Object(n.jsx)("div",{className:"col-lg-2 col-sm-2 col-md-2",children:Object(n.jsx)("strong",{children:"Item"})}),Object(n.jsx)("div",{className:"col-lg-2 col-sm-2 col-md-2",children:Object(n.jsx)("strong",{children:"Quantity"})}),Object(n.jsx)("div",{className:"col-lg-2 col-sm-2 col-md-2",children:Object(n.jsx)("strong",{children:"Rate"})}),Object(n.jsx)("div",{className:"col-lg-2 col-sm-2 col-md-2",children:Object(n.jsx)("strong",{children:"Amount"})}),c.map((function(e,t){return Object(n.jsxs)("div",{className:"row container mb-1",children:[Object(n.jsx)("div",{className:"col-sm-2 ",children:e.name}),Object(n.jsx)("div",{className:"col-sm-2 mx-3",children:e.quantity}),Object(n.jsx)("div",{className:"col-sm-2 mx-n2",children:e.rate}),Object(n.jsx)("div",{className:"col-sm-2",children:e.price}),Object(n.jsx)("button",{onClick:function(){return function(e){c.splice(e,1),s(Object(y.a)(c))}(t)},className:"btn-sm btn-danger",children:"Delete"})]})}))]}),Object(n.jsx)("h2",{children:S})]})]})},w=function(e){var t=Object(l.useState)(""),c=Object(b.a)(t,2),s=c[0],a=c[1],r=Object(l.useState)(""),i=Object(b.a)(r,2),o=i[0],j=i[1];Object(m.f)();return Object(n.jsxs)("div",{className:"container LoginMainBox",children:[Object(n.jsx)("h3",{className:"loginRegisterTitle",children:"Register Yourself"}),Object(n.jsx)("input",{className:"my-1 form-control col-sm-5 ",placeholder:"Email",onChange:function(e){return a(e.target.value)},value:s}),Object(n.jsx)("br",{}),Object(n.jsx)("input",{className:"my-1 form-control col-sm-5 ",placeholder:"Password",onChange:function(e){return j(e.target.value)},value:o}),Object(n.jsx)("br",{}),Object(n.jsx)("button",{className:"btn btn-sm btn-primary my-1n loginButton",onClick:function(){e.registerHandler(s,o)},children:"Submit"}),e.error?Object(n.jsx)("div",{style:{textAlign:"left",color:"red"},children:e.error}):null]})},I=(c(187),c(188),c(190),function(){return Object(n.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:Object(n.jsxs)("div",{className:"container-fluid",children:[Object(n.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(n.jsx)("span",{className:"navbar-toggler-icon"})}),Object(n.jsx)(d.b,{to:"/",className:"navbar-brand",children:"BusinessLogger"}),Object(n.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(n.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)(d.b,{to:"/",className:"nav-link active","aria-current":"page",children:"Home"})}),Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)(d.b,{to:"/Login",className:"nav-link active","aria-current":"page",children:"Login"})}),Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)(d.b,{to:"/Register",className:"nav-link active","aria-current":"page",children:"Register"})})]})})]})})}),E=function(){var e=Object(l.useState)(!1),t=Object(b.a)(e,2),c=t[0],s=t[1],a=Object(l.useState)(""),r=Object(b.a)(a,2),i=r[0],o=r[1],j=Object(l.useState)(!1),h=Object(b.a)(j,2),O=(h[0],h[1]);Object(m.f)();Object(l.useEffect)((function(){fetch("https://businesslogger.herokuapp.com/user/userinfo",{credentials:"include"}).then((function(e){return e.ok?e.json():(s(!1),{success:!1})})).then((function(e){!1!==e.success&&s(!0)}))}),[]);var p=function(e,t){fetch("https://businesslogger.herokuapp.com/user/register",{method:"POST",body:JSON.stringify({email:e,password:t}),headers:{"Content-Type":"application/json"},credentials:"include"}).then((function(e){return e.ok?{success:!0}:e.json()})).then((function(e){!0===e.success?s(!0):o(e.err)}))},g=function(e,t){fetch("https://businesslogger.herokuapp.com/user/login",{method:"POST",body:JSON.stringify({email:e,password:t}),headers:{"Content-Type":"application/json"},credentials:"include"}).then((function(e){return e.ok?{success:!0}:e.json()})).then((function(e){!0===e.success?s(!0):o(e.err)}))};return!0===c?Object(n.jsx)(d.a,{children:Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)(m.a,{to:"/"}),Object(n.jsx)(u,{logoutHandler:function(){return fetch("https://businesslogger.herokuapp.com/user/logout",{credentials:"include"}).then((function(e){e.ok&&(s(!1),o(""),O(!0))}))}}),Object(n.jsx)(m.b,{path:"/",exact:!0,component:v}),Object(n.jsx)(m.b,{path:"/Invoice",exact:!0,component:C}),Object(n.jsx)(m.b,{path:"/YourInvestment",exact:!0,component:S}),Object(n.jsx)(m.b,{path:"/Stats",exact:!0,component:N})]})}):Object(n.jsx)(d.a,{children:Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)(I,{}),Object(n.jsx)(m.b,{path:"/",exact:!0,component:v}),Object(n.jsx)(m.b,{path:"/Login",render:function(e){return Object(n.jsx)(x,{loginHandler:g,loggedInStatus:c,error:i})}}),Object(n.jsx)(m.b,{path:"/Register",render:function(e){return Object(n.jsx)(w,{registerHandler:p,error:i})}})]})})};c(191),l.Component;j.a.render(Object(n.jsx)(E,{}),document.getElementById("root"))}},[[192,1,3]]]);
//# sourceMappingURL=main.c3b9a211.chunk.js.map