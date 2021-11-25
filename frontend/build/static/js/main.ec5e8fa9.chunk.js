(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{36:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(23),s=a.n(r),o=a(5),i=a(6),l=a(7),d=a(3),u=a.n(d),b=a(8),j=a(9),p=a.n(j),h="REGISTER_SUCCESS",m="REGISTER_FAIL",f="LOGIN_SUCCESS",O="LOGIN_FAIL",x="LOGOUT_SUCCESS",v="LOGOUT_FAIL",g="AUTHENTICATED_SUCCESS",y="AUTHENTICATED_FAIL",N="LOAD_USER_PROFILE_SUCCESS",_="LOAD_USER_PROFILE_FAIL",S="UPDATE_USER_PROFILE_SUCCESS",k="UPDATE_USER_PROFILE_FAIL",w="DELETE_USER_SUCCESS",C="DELETE_USER_FAIL",A="GET_FRIENDS_SUCCESS",E="GET_SEARCHED_FRIENDS_SUCCESS",F="GET_SEARCHED_FRIENDS_FAIL",R="FEEDBACK_SEND_FAIL",U="FEEDBACK_SEND_SUCCESS",T=a(12),D=a.n(T),L=function(){return function(){var e=Object(b.a)(u.a.mark((function e(t){var a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{Accept:"application/json","Content-Type":"application/json"}},e.prev=1,e.next=4,p.a.get("".concat("http://localhost:8000","/profile/user"),a);case 4:(n=e.sent).data.error?t({type:_}):t({type:N,payload:n.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t({type:_});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},I=a(17),P=a(2),B=a(10),G=a(0),J=Object(l.b)(null,{sendFeedback:function(e,t){return function(){var a=Object(b.a)(u.a.mark((function a(n){var c,r,s;return u.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return c={headers:{Accept:"application/json","Content-Type":"application/json","X-CSRFToken":D.a.get("csrftoken")}},r=JSON.stringify({feedback:e,sender:t}),a.prev=2,a.next=5,p.a.post("".concat("http://localhost:8000","/accounts/feedback"),r,c);case 5:(s=a.sent).data.error?n({type:R}):(alert(s.data.success),n({type:U}),n(L())),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(2),n({type:O});case 12:case"end":return a.stop()}}),a,null,[[2,9]])})));return function(e){return a.apply(this,arguments)}}()}})((function(e){var t=e.sendFeedback,a=Object(n.useState)({sender:"",feedback:""}),c=Object(B.a)(a,2),r=c[0],s=c[1],i=function(e){return s(Object(P.a)(Object(P.a)({},r),{},Object(I.a)({},e.target.name,e.target.value)))},l=r.sender,d=r.feedback;return Object(G.jsxs)(n.Fragment,{className:"nav-item",children:[Object(G.jsx)(o.b,{className:"nav-link ",type:"","data-bs-toggle":"offcanvas","data-bs-target":"#offcanvasRight","aria-controls":"offcanvasRight",children:"Feedback"}),Object(G.jsxs)("div",{className:"offcanvas offcanvas-end",tabindex:"-1",id:"offcanvasRight","aria-labelledby":"offcanvasRightLabel",children:[Object(G.jsxs)("div",{className:"offcanvas-header",children:[Object(G.jsx)("h5",{id:"offcanvasRightLabel",children:"Feedback"}),Object(G.jsx)("button",{type:"button",className:"btn-close text-reset","data-bs-dismiss":"offcanvas","aria-label":"Close"})]}),Object(G.jsx)("div",{class:"offcanvas-body",children:Object(G.jsxs)("form",{onSubmit:function(e){!function(e){e.preventDefault();try{console.log(l),console.log(d),t(d,l)}catch(a){}}(e)},children:[Object(G.jsx)("label",{htmlFor:"sender",children:"Name : "}),Object(G.jsx)("input",{type:"text",className:"form-control mt-3",onChange:function(e){i(e)},name:"sender"}),Object(G.jsx)("label",{htmlFor:"feedback",children:"Message : "}),Object(G.jsx)("textarea",{className:"form-control mt-3",onChange:function(e){i(e)},name:"feedback",cols:"30",rows:"10"}),Object(G.jsx)("button",{type:"submit",className:"btn btn-primary mt-4",children:"Submit"})]})})]})]})})),q=function(e){e.sendFeedback;var t=Object(n.useState)({sender:"",feedback:""}),a=Object(B.a)(t,2),c=a[0];a[1],c.sender,c.feedback;return Object(G.jsxs)(n.Fragment,{className:"nav-item",children:[Object(G.jsx)(o.b,{className:"nav-link ",type:"","data-bs-toggle":"offcanvas","data-bs-target":"#offcanvasBottom","aria-controls":"offcanvasBottom",children:"Notifications"}),Object(G.jsxs)("div",{className:"offcanvas offcanvas-end",tabindex:"-1",id:"offcanvasBottom","aria-labelledby":"offcanvasBottomLabel",children:[Object(G.jsxs)("div",{className:"offcanvas-header",children:[Object(G.jsx)("h5",{id:"offcanvasRightLabel",children:"Notifications"}),Object(G.jsx)("button",{type:"button",className:"btn-close text-reset","data-bs-dismiss":"offcanvas","aria-label":"Close"})]}),Object(G.jsxs)("div",{class:"offcanvas-body small",children:["Coming Soon..",Object(G.jsx)("br",{}),"No Notifications Yet"]})]})]})},X=Object(l.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated,username:e.profile.username}}),{logout:function(e){return function(){var t=Object(b.a)(u.a.mark((function t(a){var n,c;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={headers:{Accept:"application/json","Content-Type":"application/json","X-CSRFToken":"".concat(D.a.get("csrftoken"))}},console.log("logout wala : ",e),c=JSON.stringify({withCredentials:!0,username:e}),t.prev=3,t.next=6,p.a.post("".concat("http://localhost:8000","/accounts/logout"),c,n);case 6:t.sent.data.error?a({type:v}):a({type:x}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(3),a({type:v});case 13:case"end":return t.stop()}}),t,null,[[3,10]])})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.isAuthenticated,a=e.logout,c=e.chatState,r=e.username,s=Object(G.jsxs)(n.Fragment,{children:[Object(G.jsx)("li",{className:"nav-item",children:Object(G.jsx)(o.c,{className:"nav-link",exact:!0,to:"/login",children:"Login"})}),Object(G.jsx)("li",{className:"nav-item",children:Object(G.jsx)(o.c,{className:"nav-link",exact:!0,to:"/register",children:"Register"})})]}),i=Object(G.jsx)(n.Fragment,{children:Object(G.jsx)("li",{className:"nav-item",children:Object(G.jsx)(q,{className:"nav-link"})})}),l=Object(G.jsx)(n.Fragment,{children:Object(G.jsxs)("ul",{className:"nav nav-pills nav-fill float-end d-flex align-self-start",children:[Object(G.jsx)("li",{className:"nav-item",children:Object(G.jsx)(o.c,{className:"nav-link ",onClick:function(){console.log("Clicked")},exact:!0,to:"/friends",children:"Friends"})}),Object(G.jsxs)("li",{className:"nav-item btn-group btn-group-sm",children:[Object(G.jsx)("button",{type:"button",class:"btn btn-light",children:r}),Object(G.jsx)("button",{type:"button",class:"btn btn-light dropdown-toggle dropdown-toggle-split",id:"dropdownMenuReference","data-bs-toggle":"dropdown","aria-expanded":"false","data-bs-reference":"parent",children:Object(G.jsx)("span",{class:"visually-hidden",children:"Toggle Dropdown"})}),Object(G.jsxs)("ul",{class:"dropdown-menu dropdown-menu-end dropdown-menu-light","aria-labelledby":"dropdownMenuReference",children:[Object(G.jsx)("li",{children:Object(G.jsx)(o.c,{className:"dropdown-item",onClick:c,exact:!0,to:"/chats",children:"Profile"})}),Object(G.jsx)("li",{children:Object(G.jsx)(o.c,{className:"dropdown-item",onClick:c,exact:!0,to:"/dashboard",children:"Update Profile"})}),Object(G.jsx)("li",{children:Object(G.jsx)("a",{className:"dropdown-item",onClick:function(e){!function(e){e.preventDefault(),console.log("Onclick wala : ",r),a(r)}(e)},href:"#!",children:"Logout"})}),Object(G.jsx)("li",{children:Object(G.jsx)("hr",{className:"dropdown-divider"})}),Object(G.jsx)("li",{})]})]})]})});return Object(G.jsxs)("nav",{className:"navbar navbar-expand-sm navbar-light  bg-light",children:[Object(G.jsxs)("div",{className:"container-fluid w-25",style:{marginLeft:"3px"},children:[Object(G.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav",children:Object(G.jsx)("span",{className:"navbar-toggler-icon"})}),Object(G.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(G.jsxs)("ul",{className:"navbar-nav",children:[Object(G.jsx)(o.b,{className:"navbar-brand",exact:!0,to:"/",children:"Chatter-Box"}),Object(G.jsx)("li",{className:"nav-item",children:Object(G.jsx)(o.c,{className:"nav-link",exact:!0,to:"/",children:"Home"})}),Object(G.jsx)("div",{children:t}),t?i:s,Object(G.jsx)("li",{className:"nav-item",children:Object(G.jsx)(J,{className:"nav-link"})})]})})]}),t?l:""]})})),W=Object(l.b)(null,{checkAuthenticated:function(){return function(){var e=Object(b.a)(u.a.mark((function e(t){var a,n,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{Accept:"application/json","Content-Type":"application/json","X-CSRFToken":"".concat(D.a.get("csrftoken"))}},n=JSON.stringify({}),e.prev=2,e.next=5,p.a.get("".concat("http://localhost:8000","/accounts/authenticated"),n,a);case 5:(c=e.sent).data.error||"error"===c.data.isAuthenticated?t({type:y,payload:!1}):"success"===c.data.isAuthenticated?t({type:g,payload:!0}):t({type:y,payload:!1}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),t({type:y,payload:!1});case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}()},load_user:L})((function(e){var t=e.children,a=e.checkAuthenticated,c=e.load_user;Object(n.useEffect)((function(){a(),c()}),[]);return Object(G.jsxs)(n.Fragment,{children:[Object(G.jsx)(X,{design:{maxWidth:"20rem",boxShadow:"none"}}),t]})})),H=function(){return Object(G.jsx)("div",{className:"container",children:Object(G.jsxs)("div",{className:"mt-5 p-5 bg-light",children:[Object(G.jsx)("h1",{className:"display-4",children:"Welcome to the ChatApp"}),Object(G.jsx)("p",{className:"lead",children:"This is wonderful application to Chat.."}),Object(G.jsx)("hr",{className:"my-4"}),Object(G.jsx)("p",{children:"Click the button below to Login"}),Object(G.jsx)(o.b,{className:"btn btn-primary btn-lg",exact:!0,to:"/login",children:"Login"})]})})},M=function(){var e=Object(n.useState)(""),t=Object(B.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){var e=function(){var e=Object(b.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.get("".concat("http://localhost:8000","/accounts/csrf_cookie"));case 3:e.next=7;break;case 5:e.prev=5,e.t0=e.catch(0);case 7:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}();e(),c(function(e){var t=null;if(document.cookie&&""!==document.cookie)for(var a=document.cookie.split(";"),n=0;n<a.length;n++){var c=a[n].trim();if(c.substring(0,e.length+1)===e+"="){t=decodeURIComponent(c.substring(e.length+1));break}}return console.log("IN CSRF : "+t),t}("csrftoken"))}),[]),Object(G.jsx)("input",{type:"hidden",name:"csrfmiddlewaretoken",value:a})},K=Object(l.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{register:function(e,t,a){return function(){var n=Object(b.a)(u.a.mark((function n(c){var r,s;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log(D.a.get("csrftoken")),r={headers:{Accept:"application/json","Content-Type":"application/json","X-CSRFToken":"".concat(D.a.get("csrftoken"))}},s=JSON.stringify({username:e,password:t,re_password:a}),n.prev=3,n.next=6,p.a.post("".concat("http://localhost:8000","/accounts/register"),s,r);case 6:n.sent.data.error?c({type:m}):c({type:h}),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(3),c({type:m});case 13:case"end":return n.stop()}}),n,null,[[3,10]])})));return function(e){return n.apply(this,arguments)}}()}})((function(e){var t=e.register,a=e.isAuthenticated,c=Object(n.useState)({username:"",password:"",re_password:""}),r=Object(B.a)(c,2),s=r[0],l=r[1],d=Object(n.useState)(!1),u=Object(B.a)(d,2),b=u[0],j=u[1],p=s.username,h=s.password,m=s.re_password,f=function(e){return l(Object(P.a)(Object(P.a)({},s),{},Object(I.a)({},e.target.name,e.target.value)))};return a?Object(G.jsx)(i.a,{exact:!0,to:"/dashboard"}):b?Object(G.jsx)(i.a,{exact:!0,to:"/login"}):Object(G.jsxs)("div",{className:"container",children:[Object(G.jsx)("h1",{children:"Register for an Account"}),Object(G.jsx)("p",{children:"Enter your profile info.."}),Object(G.jsxs)("form",{onSubmit:function(e){return function(e){e.preventDefault(),h===m&&(t(p,h,m),j(!0))}(e)},children:[Object(G.jsx)(M,{}),Object(G.jsxs)("div",{className:"form-group mt-3",children:[Object(G.jsx)("label",{htmlFor:"username",className:"form-label",children:"Username:"}),Object(G.jsx)("input",{type:"text",className:"form-control",placeholder:"Username",name:"username",id:"username",value:p,onChange:function(e){return f(e)},required:!0})]}),Object(G.jsxs)("div",{className:"form-group mt-3",children:[Object(G.jsx)("label",{htmlFor:"password",className:"form-label",children:"Password:"}),Object(G.jsx)("input",{type:"password",className:"form-control",placeholder:"Password",name:"password",id:"password",value:h,onChange:function(e){return f(e)},minLength:"6",required:!0})]}),Object(G.jsxs)("div",{className:"form-group mt-3",children:[Object(G.jsx)("label",{htmlFor:"re_password",className:"form-label",children:"Confirm Password:"}),Object(G.jsx)("input",{type:"password",className:"form-control",placeholder:"Confirm Password",name:"re_password",id:"re_password",value:m,onChange:function(e){return f(e)},minLength:"6",required:!0})]}),Object(G.jsx)("button",{className:"btn btn-primary mt-3",type:"submit",children:"Register"})]}),Object(G.jsxs)("p",{className:"mt-3",children:["Already have an account? ",Object(G.jsx)(o.b,{exact:!0,to:"/login",children:"Sign In"})]})]})})),Y=Object(l.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{login:function(e,t){return function(){var a=Object(b.a)(u.a.mark((function a(n){var c,r;return u.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return c={headers:{Accept:"application/json","Content-Type":"application/json","X-CSRFToken":D.a.get("csrftoken")}},r=JSON.stringify({username:e,password:t}),a.prev=2,a.next=5,p.a.post("".concat("http://localhost:8000","/accounts/login"),r,c);case 5:a.sent.data.error?n({type:O}):(n({type:f}),n(L())),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(2),n({type:O});case 12:case"end":return a.stop()}}),a,null,[[2,9]])})));return function(e){return a.apply(this,arguments)}}()}})((function(e){var t=e.login,a=e.isAuthenticated,c=Object(n.useState)({username:"",password:""}),r=Object(B.a)(c,2),s=r[0],l=r[1],d=s.username,u=s.password,b=function(e){return l(Object(P.a)(Object(P.a)({},s),{},Object(I.a)({},e.target.name,e.target.value)))};return a?Object(G.jsx)(i.a,{exact:!0,to:"/friends"}):Object(G.jsxs)("div",{className:"container",children:[Object(G.jsx)("h1",{children:"Sign In"}),Object(G.jsx)("p",{children:"To your ChatApp"}),Object(G.jsxs)("form",{onSubmit:function(e){return function(e){e.preventDefault(),u.length>6&&t(d,u)}(e)},children:[Object(G.jsx)(M,{}),Object(G.jsxs)("div",{className:"form-group mt-3",children:[Object(G.jsx)("label",{htmlFor:"username",className:"form-label",children:"Username:"}),Object(G.jsx)("input",{type:"text",className:"form-control",placeholder:"Username",name:"username",id:"username",value:d,onChange:function(e){return b(e)},required:!0})]}),Object(G.jsxs)("div",{className:"form-group mt-3",children:[Object(G.jsx)("label",{htmlFor:"password",className:"form-label",children:"Password:"}),Object(G.jsx)("input",{type:"password",className:"form-control",placeholder:"Password",name:"password",id:"password",value:u,onChange:function(e){return b(e)},minLength:"6",required:!0})]}),Object(G.jsx)("button",{className:"btn btn-primary mt-3",type:"submit",children:"Sign In"})]}),Object(G.jsxs)("p",{className:"mt-3",children:["Don't have an account? ",Object(G.jsx)(o.b,{exact:!0,to:"/register",children:"Sign Up"})]})]})})),z=Object(l.b)((function(e){return{username:e.profile.username,first_name_global:e.profile.first_name,last_name_global:e.profile.last_name,phone_global:e.profile.phone,city_global:e.profile.city}}),{delete_account:function(){return function(){var e=Object(b.a)(u.a.mark((function e(t){var a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Arrived"),a={headers:{Accept:"application/json","Content-Type":"application/json","X-CSRFToken":"".concat(D.a.get("csrftoken"))}},console.log(D.a.get("csrftoken")),n=JSON.stringify({withCredentials:!0}),e.prev=4,e.next=7,p.a.post("".concat("http://localhost:8000","/accounts/delete"),n,a);case 7:e.sent.data.success?t({type:w}):t({type:C}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(4),t({type:C});case 14:case"end":return e.stop()}}),e,null,[[4,11]])})));return function(t){return e.apply(this,arguments)}}()},update_user_profile:function(e,t,a,n){return function(){var c=Object(b.a)(u.a.mark((function c(r){var s,o,i;return u.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return console.log("yaha aya tha.."),s={headers:{Accept:"application/json","Content-Type":"application/json","X-CSRFToken":D.a.get("csrftoken")}},o=JSON.stringify({withCredentials:!0,first_name:e,last_name:t,phone:a,city:n}),c.prev=3,c.next=6,p.a.put("".concat("http://localhost:8000","/profile/update"),o,s);case 6:(i=c.sent).data.profile&&i.data.username?r({type:S,payload:i.data}):r({type:k}),c.next=13;break;case 10:c.prev=10,c.t0=c.catch(3),r({type:k});case 13:case"end":return c.stop()}}),c,null,[[3,10]])})));return function(e){return c.apply(this,arguments)}}()}})((function(e){var t=e.delete_account,a=e.update_user_profile,c=e.first_name_global,r=e.last_name_global,s=e.phone_global,o=e.city_global,i=Object(n.useState)({first_name:"",last_name:"",phone:"",city:""}),l=Object(B.a)(i,2),d=l[0],u=l[1],b=d.first_name,j=d.last_name,p=d.phone,h=d.city;Object(n.useEffect)((function(){u({first_name:c,last_name:r,phone:s,city:o})}),[c,r,s,o]);var m=function(e){return u(Object(P.a)(Object(P.a)({},d),{},Object(I.a)({},e.target.name,e.target.value)))};return Object(G.jsxs)("div",{className:"container",children:[Object(G.jsx)("h1",{className:"mt-3",children:"Welcome to User Dashboard"}),Object(G.jsx)("p",{className:"mt-3 mb-3",children:"Update User Profiel Below.."}),Object(G.jsxs)("form",{onSubmit:function(e){return function(e){e.preventDefault(),a(b,j,p,h)}(e)},children:[Object(G.jsxs)("div",{className:"form-group mt-3",children:[Object(G.jsx)("label",{htmlFor:"first_name",children:"First Name:"}),Object(G.jsx)("input",{className:"form-control",type:"text",name:"first_name",placeholder:c,onChange:function(e){return m(e)},value:b})]}),Object(G.jsxs)("div",{className:"form-group mt-3",children:[Object(G.jsx)("label",{htmlFor:"last_name",children:"Last Name:"}),Object(G.jsx)("input",{className:"form-control",type:"text",name:"last_name",placeholder:r,onChange:function(e){return m(e)},value:j})]}),Object(G.jsxs)("div",{className:"form-group mt-3",children:[Object(G.jsx)("label",{htmlFor:"phone",children:"Phone:"}),Object(G.jsx)("input",{className:"form-control",type:"number",name:"phone",placeholder:s,onChange:function(e){return m(e)},value:p})]}),Object(G.jsxs)("div",{className:"form-group mt-3",children:[Object(G.jsx)("label",{htmlFor:"city",children:"City:"}),Object(G.jsx)("input",{className:"form-control",type:"text",name:"city",placeholder:o,onChange:function(e){return m(e)},value:h})]}),Object(G.jsx)("button",{className:"btn btn-primary mt-3",type:"submit",children:"Update"})]}),Object(G.jsx)("p",{className:"mt-5",children:"Click the button below to delete your User Account : "}),Object(G.jsx)("a",{className:"btn btn-danger",href:"#!",onClick:t,children:"Delete Account"})]})}));function Q(e){e.title,e.onDelete;return Object(G.jsx)(n.Fragment,{children:Object(G.jsxs)("div",{className:"container-fluid p-2",children:[Object(G.jsx)("nav",{class:"navbar navbar-dark bg-primary",children:Object(G.jsxs)("div",{class:"container-fluid",children:[Object(G.jsx)(o.c,{className:"btn btn-light",exact:!0,to:"/friends",children:"Back"}),Object(G.jsx)("h3",{children:"Friend/GroupName Dynamic"})]})}),Object(G.jsx)("div",{className:"overflow-auto"}),Object(G.jsx)("nav",{class:"navbar fixed-bottom navbar-light bg-light",children:Object(G.jsxs)("div",{class:"container-fluid",children:[Object(G.jsx)("input",{type:"text",className:"form-control w-50 mx-auto"}),Object(G.jsx)("a",{class:"btn btn-success mx-auto",href:"#",children:"Send"})]})})]})})}a(36);function V(e){var t=e.friend,a=e.onDelete,n=e.username;return Object(G.jsxs)("div",{className:"card d-flex border border-dark m-2",style:{minWidth:"15rem",maxWidth:"20rem"},children:[Object(G.jsx)("div",{className:"card-header border-success",children:t.username}),Object(G.jsxs)("div",{className:"card-body text-dark",children:[Object(G.jsx)("h5",{className:"card-title",children:"Task"}),Object(G.jsx)("p",{className:"card-text",children:"Busy"})]}),Object(G.jsx)("div",{className:"card-footer bg-transparent border-success",children:Object(G.jsx)("button",{className:"btn btn-sm btn-outline-danger ",onClick:function(){return a(n)},children:" Delete "})})]})}var Z=Object(l.b)((function(e){return console.log(e.profile),console.log("Auth : ",e.auth),console.log("=> ",e.friends),{friendlist_global:e.friends,groups_global:e.groups,searchedUser:e.friends.searchedUser,friendlist:e.friends.friendlist}}),{get_searched_user_list:function(e){return function(){var t=Object(b.a)(u.a.mark((function t(a){var n,c,r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("aa gaya",e),n={headers:{Accept:"application/json","Content-Type":"application/json","X-CSRFToken":D.a.get("csrftoken")}},c=JSON.stringify({username:e}),t.prev=3,t.next=6,p.a.post("".concat("http://localhost:8000","/accounts/get_searched_users"),c,n);case 6:(r=t.sent).data.error?a({type:F}):(console.log("Ori : ",r.data),a({type:E,payload:r.data})),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(3),a({type:F});case 13:case"end":return t.stop()}}),t,null,[[3,10]])})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.get_searched_user_list,a=e.searchedUser,c=e.friendlist;console.log("Searched User : ",a);var r=Object(n.useState)(""),s=Object(B.a)(r,2),o=s[0],i=s[1],l=Object(n.useState)([]),d=Object(B.a)(l,2),u=d[0],b=d[1],j=function(e){return e.username.startsWith(o)};return Object(G.jsxs)(n.Fragment,{children:[Object(G.jsx)("div",{className:"navbar navbar-expand-sm w-100",children:Object(G.jsx)("form",{action:"",children:Object(G.jsxs)("div",{class:"input-group input-group-sm m-2  float-start",children:[Object(G.jsx)("input",{type:"text",onKeyUp:function(e){return function(e){return i(e.target.value)}(e)},id:"searchbar",className:"form-control ",placeholder:"Enter username","aria-label":"Recipient's username","aria-describedby":"searchbtn"}),Object(G.jsx)("button",{class:"btn btn-outline-secondary btn-sm",onClick:function(e){return 0!=c.length&&b(c.filter(j)),0==u.length&&0!=a.length&&b(a.filter(j)),void(0==u.length&&t(o))},type:"button",id:"searchbtn",children:"Search"})]})})}),Object(G.jsx)("div",{className:"card-group",children:void 0===a?Object(G.jsx)(G.Fragment,{children:Object(G.jsxs)("div",{class:"card",children:[Object(G.jsx)("div",{class:"card-header",children:"ChatApp"}),Object(G.jsx)("div",{class:"card-body",children:Object(G.jsxs)("blockquote",{class:"blockquote mb-0",children:[Object(G.jsx)("h1",{children:"No Friends !"}),Object(G.jsxs)("footer",{class:"blockquote-footer",children:[" ",Object(G.jsx)("cite",{title:"Source Title",children:"ADD FRIENDS"})]})]})})]})}):a.map((function(e){return console.log("in card iteration"),Object(G.jsx)(V,{friend:e})}))})]})})),$=a(41),ee=["component","isAuthenticated"],te=Object(l.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{})((function(e){var t=e.component,a=e.isAuthenticated,n=Object($.a)(e,ee);return Object(G.jsx)(i.b,Object(P.a)(Object(P.a)({},n),{},{render:function(e){return a?Object(G.jsx)(t,Object(P.a)({},e)):Object(G.jsx)(i.a,{to:"/login"})}}))})),ae=a(19),ne=a(39),ce=a(40),re={isAuthenticated:null},se={username:"",first_name:"",last_name:"",phone:"",city:""},oe={friendlist:[],searchedUser:[]},ie=Object(ae.combineReducers)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case g:case y:return Object(P.a)(Object(P.a)({},e),{},{isAuthenticated:n});case h:return Object(P.a)(Object(P.a)({},e),{},{isAuthenticated:!1});case f:return Object(P.a)(Object(P.a)({},e),{},{isAuthenticated:!0,username:n});case x:case w:return Object(P.a)(Object(P.a)({},e),{},{isAuthenticated:!1,username:""});default:return e}},profile:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case S:case N:return Object(P.a)(Object(P.a)({},e),{},{username:n.username,first_name:n.profile.first_name,last_name:n.profile.last_name,phone:n.profile.phone,city:n.profile.city});case _:return Object(P.a)(Object(P.a)({},e),{},{username:"",first_name:"",last_name:"",phone:"",city:""});case k:return Object(P.a)({},e);default:return e}},friends:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case A:return Object(P.a)(Object(P.a)({},e),{},{friendlist:n.data.friends});case E:return console.log("Payload",n.data),Object(P.a)(Object(P.a)({},e),{},{searchedUser:n.data});default:return Object(P.a)({},e)}}}),le=[ce.a],de=Object(ae.createStore)(ie,{},Object(ne.composeWithDevTools)(ae.applyMiddleware.apply(void 0,le))),ue=(a(72),function(){return Object(G.jsx)(l.a,{store:de,children:Object(G.jsx)(o.a,{children:Object(G.jsxs)(W,{children:[Object(G.jsx)(i.b,{exact:!0,path:"/",component:H}),Object(G.jsx)(i.b,{exact:!0,path:"/register",component:K}),Object(G.jsx)(i.b,{exact:!0,path:"/login",component:Y}),Object(G.jsx)(te,{exact:!0,path:"/friends",component:Z}),Object(G.jsx)(te,{exact:!0,path:"/dashboard",component:z}),Object(G.jsx)(te,{exact:!0,path:"/chats",component:Q})]})})})});s.a.render(Object(G.jsx)(c.a.StrictMode,{children:Object(G.jsx)(ue,{})}),document.getElementById("root"))}},[[73,1,2]]]);
//# sourceMappingURL=main.ec5e8fa9.chunk.js.map