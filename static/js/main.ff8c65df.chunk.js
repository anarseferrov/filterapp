(this.webpackJsonpfilterapp=this.webpackJsonpfilterapp||[]).push([[0],[,,,,,,,,,,function(e,t,n){e.exports=n(18)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(8),c=n.n(o),i=(n(15),n(1)),l=n(2),s=n(5),u=n(4),h=n(3),m=(n(16),n(17),function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={filterText:" "},e.onChangeFilterText=function(t){e.setState({filterText:t.target.value})},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=this.props.contacts.filter((function(t){return-1!==t.name.toLowerCase().indexOf(e.state.filterText.toLowerCase())}));return r.a.createElement("div",{className:"listArea"},r.a.createElement("input",{name:"filter",id:"filter",placeholder:"Filter by name or phone",value:this.state.filterText,onChange:this.onChangeFilterText}),r.a.createElement("ul",{className:"list"},t.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("span",{className:"name"},e.name),r.a.createElement("span",{className:"phone"},e.phone),r.a.createElement("span",{className:"clearfix"}))}))))}}]),n}(a.Component)),p=n(9),d=n(6),f=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).state={name:"",phone:""},e.onChange=e.onChange.bind(Object(s.a)(e)),e.onSubmit=e.onSubmit.bind(Object(s.a)(e)),e}return Object(l.a)(n,[{key:"onChange",value:function(e){this.setState(Object(d.a)({},e.target.name,e.target.value))}},{key:"onSubmit",value:function(e){e.preventDefault(),this.props.addContact(Object(p.a)({},this.state)),this.setState({name:"",phone:""})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("input",{name:"name",id:"name",placeholder:"Enter a name",onChange:this.onChange,value:this.state.name}),r.a.createElement("br",null),r.a.createElement("input",{name:"phone",id:"phone",placeholder:"Enter a phone number",onChange:this.onChange,value:this.state.phone}),r.a.createElement("button",null,"Add")))}}]),n}(a.Component),b=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(m,{contacts:this.props.contacts}),r.a.createElement(f,{addContact:this.props.addContact}))}}]),n}(a.Component),v=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={contacts:[{name:"Anar Seferov",phone:"050 227 47 37",id:1},{name:"Ayaz Memmedov",phone:"050 225 45 35",id:2},{name:"Gunel Qurbanova",phone:"055 344 32 44",id:3}]},a.addContact=a.addContact.bind(Object(s.a)(a)),a}return Object(l.a)(n,[{key:"addContact",value:function(e){var t=this.state.contacts;t.push(e),this.setState({contacts:t})}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(b,{contacts:this.state.contacts,addContact:this.addContact}))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[10,1,2]]]);
//# sourceMappingURL=main.ff8c65df.chunk.js.map