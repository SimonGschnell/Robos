(this.webpackJsonprobos=this.webpackJsonprobos||[]).push([[0],{15:function(e,a,n){e.exports=n(26)},26:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),l=n(13),i=n.n(l),o=(n(20),n(6)),c=n(7),m=n(9),s=n(8),u=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}],h=n(31),d=n(32),b=function(e){var a=e.id,n=e.name,l=e.email;return r.a.createElement(t.Fragment,null,r.a.createElement(h.a,{style:{width:"18rem"}},r.a.createElement(h.a.Img,{variant:"top",src:"http://placekitten.com/800/450"}),r.a.createElement(h.a.Body,null,r.a.createElement(h.a.Title,null,l),r.a.createElement(h.a.Text,null,n),r.a.createElement(d.a,{variant:"primary"},a))))},E=n(27),f=n(28),g=n(29),p=function(e){var a=e.robots,n=a.map((function(e,n){return r.a.createElement(E.a,{key:a[n].id,xs:"auto"},r.a.createElement(b,{id:a[n].id,name:a[n].name,email:a[n].email}))}));return r.a.createElement(t.Fragment,null,r.a.createElement(f.a,null,r.a.createElement(g.a,{className:"justify-content-md-center"},n)))},v=n(30),y=n(33),w=function(e){var a=e.searchFieldChange;return r.a.createElement(t.Fragment,null,r.a.createElement(f.a,null,r.a.createElement(g.a,null,r.a.createElement(E.a,null,r.a.createElement(v.a,{className:"my-3"},r.a.createElement(y.a,{placeholder:"RobotName","aria-label":"RobotName","aria-describedby":"basic-addon1",onChange:a}))))))},k=function(e){return r.a.createElement("div",{style:{overflow:"scroll",border:"5px solid black",height:"500px"}},e.children)},C=function(e){Object(m.a)(n,e);var a=Object(s.a)(n);function n(e){var t;return Object(o.a)(this,n),(t=a.call(this,e)).state={error:!1},t}return Object(c.a)(n,[{key:"componentDidCatch",value:function(e,a){this.setState({error:!0}),console.log("hi?")}},{key:"render",value:function(){return this.state.error?r.a.createElement("p",null,"Something went wrong"):this.props.children}}]),n}(t.Component),S=function(e){Object(m.a)(n,e);var a=Object(s.a)(n);function n(){var e;return Object(o.a)(this,n),(e=a.call(this)).changeSearchField=function(a){console.log(a.target.value),e.setState({searchfield:a.target.value})},e.state={robots:u,searchfield:""},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state,a=e.robots,n=e.searchfield,l=a.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return r.a.createElement(t.Fragment,null,r.a.createElement(w,{searchFieldChange:this.changeSearchField}),r.a.createElement(k,null,r.a.createElement(C,null,r.a.createElement(p,{robots:l}))))}}]),n}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[15,1,2]]]);
//# sourceMappingURL=main.91f9f29b.chunk.js.map