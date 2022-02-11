(this["webpackJsonpreact-firebase-database-crud"]=this["webpackJsonpreact-firebase-database-crud"]||[]).push([[0],{28:function(e,t,a){e.exports=a(43)},33:function(e,t,a){},35:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(24),r=a.n(c),u=a(8),i=(a(33),a(11)),o=a(12),s=a(27),m=a(26),d=a(1),b=(a(34),a(35),a(5)),f=a(15),p=a.n(f),E=(a(36),Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0})),v={apiKey:E.API_KEY,authDomain:E.AUTH_DOMAIN,projectId:E.PROJECT_ID,storageBucket:E.STORAGE_BUCKET,messagingSenderId:E.MESSAGING_SENDER_ID,appId:E.APP_ID,databaseURL:"https://react-firebase-a4357-default-rtdb.europe-west1.firebasedatabase.app/"};p.a.initializeApp(v);var h=p.a.database().ref("/tutorials"),g=new(function(){function e(){Object(i.a)(this,e)}return Object(o.a)(e,[{key:"getAll",value:function(){return h}},{key:"create",value:function(e){return h.push(e)}},{key:"update",value:function(e,t){return h.child(e).update(t)}},{key:"delete",value:function(e){return h.child(e).remove()}},{key:"deleteAll",value:function(){return h.remove()}}]),e}()),O=function(){var e=Object(n.useState)(!1),t=Object(b.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),u=Object(b.a)(r,2),i=u[0],o=u[1],s=Object(n.useState)(""),m=Object(b.a)(s,2),d=m[0],f=m[1];return l.a.createElement("div",{className:"submit-form"},a?l.a.createElement("div",null,l.a.createElement("h4",null,"You submitted successfully!"),l.a.createElement("button",{className:"btn btn-success",onClick:function(){o(""),f(""),c(!1)}},"Add")):l.a.createElement("div",null,l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"title"},"Title"),l.a.createElement("input",{type:"text",className:"form-control",id:"title",required:!0,value:i,onChange:function(e){return o(e.target.value)},name:"title"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"description"},"Description"),l.a.createElement("input",{type:"text",className:"form-control",id:"description",required:!0,value:d,onChange:function(e){return f(e.target.value)},name:"description"})),l.a.createElement("button",{onClick:function(){var e={title:i,description:d,published:!1};g.create(e).then((function(){return c(!0)})).catch((function(e){return console.log(e)}))},className:"btn btn-success"},"Submit")))},N=function(e){var t=e.tutorial,a=e.refreshList,c=Object(n.useState)(t.title),r=Object(b.a)(c,2),u=r[0],i=r[1],o=Object(n.useState)(t.description),s=Object(b.a)(o,2),m=s[0],d=s[1],f=Object(n.useState)(t.published),p=Object(b.a)(f,2),E=p[0],v=p[1],h=Object(n.useState)(""),O=Object(b.a)(h,2),N=O[0],j=O[1];return Object(n.useEffect)((function(){i(t.title),v(t.published),d(t.description)}),[t]),l.a.createElement("div",null,l.a.createElement("h4",null,"Tutorial"),t?l.a.createElement("div",{className:"edit-form"},l.a.createElement("form",null,l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"title"},"Title"),l.a.createElement("input",{type:"text",className:"form-control",id:"title",value:u,onChange:function(e){return i(e.target.value)}})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"description"},"Description"),l.a.createElement("input",{type:"text",className:"form-control",id:"description",value:m,onChange:function(e){return d(e.target.value)}})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,l.a.createElement("strong",null,"Status: ")),E?"Published":"Pending")),l.a.createElement("button",{className:"badge badge-primary mr-2 btn",onClick:function(){return e=!E,void g.update(t.key,{published:e}).then((function(){v(e),j("The status was updated successfully!")})).catch((function(e){return console.log(e)}));var e}},E?"UnPublish":"Publish"),l.a.createElement("button",{className:"badge badge-danger mr-2 btn",onClick:function(){g.delete(t.key).then((function(){return a()})).catch((function(e){return console.log(e)}))}},"Delete"),l.a.createElement("button",{type:"submit",className:"badge badge-success btn",onClick:function(){var e={title:u,description:m};g.update(t.key,e).then((function(){return j("The tutorial was updated successfully!")})).catch((function(e){return console.log(e)}))}},"Update"),l.a.createElement("p",null,N)):l.a.createElement("div",null,l.a.createElement("br",null),l.a.createElement("p",null,"Please click on a Tutorial...")))},j=function(){var e=Object(n.useState)([]),t=Object(b.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(null),u=Object(b.a)(r,2),i=u[0],o=u[1],s=Object(n.useState)(-1),m=Object(b.a)(s,2),d=m[0],f=m[1],p=function(e){var t=[];e.forEach((function(e){var a=e.key,n=e.val();t.push({key:a,title:n.title,description:n.description,published:n.published})})),c(t)},E=function(){o(null),f(-1)};return Object(n.useEffect)((function(){return g.getAll().on("value",p),function(){g.getAll().off("value",p)}}),[]),l.a.createElement("div",{className:"list row"},l.a.createElement("div",{className:"col-md-6"},l.a.createElement("h4",null,"Tutorials List"),l.a.createElement("ul",{className:"list-group"},a&&a.map((function(e,t){return l.a.createElement("li",{className:"list-group-item "+(t===d?"active":""),onClick:function(){return function(e,t){o(e),f(t)}(e,t)},key:t},e.title)}))),l.a.createElement("button",{className:"m-3 btn btn-sm btn-danger",onClick:function(){g.deleteAll().then((function(){return E()})).catch((function(e){return console.log(e)}))}},"Remove All")),l.a.createElement("div",{className:"col-md-6"},i?l.a.createElement(N,{tutorial:i,refreshList:E}):l.a.createElement("div",null,l.a.createElement("br",null),l.a.createElement("p",null,"Please click on a Tutorial..."))))},k=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("nav",{className:"navbar navbar-expand navbar-dark bg-dark"},l.a.createElement(u.b,{to:"/tutorials",className:"navbar-brand"},"olAcademy"),l.a.createElement("div",{className:"navbar-nav mr-auto"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(u.b,{to:"/tutorials",className:"nav-link"},"Tutorials")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(u.b,{to:"/add",className:"nav-link"},"Add")))),l.a.createElement("div",{className:"container mt-3"},l.a.createElement("h2",null,"React Firebase Database CRUD"),l.a.createElement(d.c,null,l.a.createElement(d.a,{exact:!0,path:["/","/tutorials"],component:j}),l.a.createElement(d.a,{exact:!0,path:"/add",component:O}))))}}]),a}(n.Component);r.a.render(l.a.createElement(u.a,null,l.a.createElement(k,null)),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.c9fca7b6.chunk.js.map