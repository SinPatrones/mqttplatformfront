(this.webpackJsonpmqttreactplatform=this.webpackJsonpmqttreactplatform||[]).push([[0],{107:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(17),l=a.n(o),i=(a(57),a(15)),r=a(8),s=(a(58),a(59),a(11)),m=a(12),u=a(13),d=a(14),h=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return c.a.createElement("nav",{className:"navbar navbar-dark bg-dark navbar-expand-lg"},c.a.createElement(i.b,{to:"/",className:"navbar-brand"},"Dashboard"),c.a.createElement("div",{className:"collpase navbar-collapse"},c.a.createElement("ul",{className:"navbar-nav mr-auto"},c.a.createElement("li",{className:"navbar-item"},c.a.createElement(i.b,{to:"/historial",className:"nav-link"},"Historial")),c.a.createElement("li",{className:"navbar-item"},c.a.createElement(i.b,{to:"/mapa",className:"nav-link"},"Mapa")))))}}]),a}(n.Component),v=a(51),b=a(6),f=a(50),p=a.n(f),k=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={dato:"",listaDeDatos:[]},n.handleclickbutton=n.handleclickbutton.bind(Object(b.a)(n)),n.handlechangeinputtext=n.handlechangeinputtext.bind(Object(b.a)(n)),n}return Object(m.a)(a,[{key:"handlechangeinputtext",value:function(e){switch(e.target.name){case"dato":this.setState({dato:e.target.value})}}},{key:"handleclickbutton",value:function(e){switch(e.target.name){case"enviar":this.socket.emit("dato",{from:"web",data:this.state.dato})}}},{key:"componentDidMount",value:function(){var e=this;this.socket=p()("http://localhost:3000"),this.socket.on("datogeneral",(function(t){e.setState({listaDeDatos:[t].concat(Object(v.a)(e.state.listaDeDatos))})}))}},{key:"render",value:function(){return c.a.createElement("div",{className:"main row mt-3"},c.a.createElement("div",{className:"col-12"},c.a.createElement("div",{className:"row justify-content-center"},c.a.createElement("div",{className:"col-4"},"Main Page With Socket",c.a.createElement("div",{className:"form-row"},c.a.createElement("label",{htmlFor:"dato",className:"col-3 col-form-label"},"DATO:"),c.a.createElement("input",{type:"text",name:"dato",id:"dato",className:"form-control col-5",onChange:this.handlechangeinputtext})),c.a.createElement("div",{className:"form-row"},c.a.createElement("button",{type:"button",name:"enviar",className:"btn btn-success",onClick:this.handleclickbutton},"ENVIAR"))),c.a.createElement("div",{className:"col-5"},c.a.createElement("ul",null,this.state.listaDeDatos.map((function(e,t){return c.a.createElement("li",{key:t},c.a.createElement("strong",null,e.from,":"),e.data)})))))))}}]),a}(n.Component),E=a(21),g=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={unidades:[],rutas:[],idRuta:"0",showingInfoWindow:!1,activeMarker:{},selectedPlace:{},timer:null},n.onMarkerClick=n.onMarkerClick.bind(Object(b.a)(n)),n.onMapClicked=n.onMapClicked.bind(Object(b.a)(n)),n.onInfoWindowClose=n.onInfoWindowClose.bind(Object(b.a)(n)),n}return Object(m.a)(a,[{key:"onMarkerClick",value:function(e,t,a){this.setState({selectedPlace:e,activeMarker:t,showingInfoWindow:!0})}},{key:"onMapClicked",value:function(e){this.state.showingInfoWindow&&this.setState({showingInfoWindow:!1,activeMarker:null})}},{key:"onInfoWindowClose",value:function(){}},{key:"render",value:function(){return c.a.createElement("div",{className:"main row justify-content-center mt-3"},c.a.createElement("div",{className:"col-10",style:{height:"600px"}},c.a.createElement(E.Map,{google:this.props.google,zoom:14,initialCenter:{lat:-16.441084,lng:-71.529211}},c.a.createElement(E.InfoWindow,{marker:this.state.activeMarker,visible:this.state.showingInfoWindow},c.a.createElement("div",null,c.a.createElement("h1",null,this.state.selectedPlace.name))))))}}]),a}(n.Component),w=Object(E.GoogleApiWrapper)({apiKey:"AIzaSyDuXDID0Yxm6vW2TNZs6IftRLsYGJ_NWiQ"})(g);var N=function(){return c.a.createElement(i.a,null,c.a.createElement("div",{className:"container"},c.a.createElement(h,null),c.a.createElement(r.a,{path:"/",exact:!0,component:k}),c.a.createElement(r.a,{path:"/mapa",exact:!0,component:w})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},52:function(e,t,a){e.exports=a(107)},57:function(e,t,a){},58:function(e,t,a){},92:function(e,t){}},[[52,1,2]]]);
//# sourceMappingURL=main.f940adae.chunk.js.map