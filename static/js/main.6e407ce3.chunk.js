(this["webpackJsonpwedding-app"]=this["webpackJsonpwedding-app"]||[]).push([[0],{23:function(e,t,n){e.exports=n(35)},29:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(14),r=n.n(o),l=(n(28),n(15)),s=n(16),c=n(21),d=n(17),u=n(22),h=n(18),m=n(5),w=(n(29),n(8));function v(){var e=Object(m.f)().hash;return i.a.createElement("div",null,i.a.createElement("h1",null,w[e].title,","),i.a.createElement("h1",null,"ovim putem pozivamo ",w[e].single_person?"te":"vas"," na na\u0161e vjen\u010danje."),i.a.createElement("h1",null,"Sve informacije o nama i na\u0161em vje\u010danju"," ",w[e].single_person?"mo\u017ee\u0161":"mo\u017eete"," prona\u0107i u retcima ispod."),i.a.createElement("h1",null,"Veselimo se ",w[e].single_person?"tvojem":"va\u0161em"," ","dolasku,"),i.a.createElement("h1",null,"Va\u0161i Dolores i Filip"))}var p=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(n=Object(c.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(i)))).state={width:window.innerWidth,height:window.innerHeight,is_under_500:!1,is_under_1000:!1,is_under_1500:!1,is_under_2000:!1,is_over_2000:!1,refreshed:!0},n.setupMobile=function(){},n.setupHalfScreen=function(){},n.setupFullScreen=function(){},n.handleWindowSizeChange=function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];n.refresh_states()},n}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){}},{key:"componentWillMount",value:function(){window.addEventListener("resize",this.handleWindowSizeChange("Resize")),window.addEventListener("resize",this.handleWindowSizeChange)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handleWindowSizeChange)}},{key:"refresh_states",value:function(){this.setState({width:window.innerWidth}),this.setState({height:window.innerHeight}),this.setState({is_under_500:window.innerWidth<=500}),this.setState({is_under_1000:window.innerWidth<=1e3&&window.innerWidth>500}),this.setState({is_under_1500:window.innerWidth<=1500&&window.innerWidth>1e3}),this.setState({is_under_2000:window.innerWidth<=2e3&&window.innerWidth>1500}),this.setState({is_over_2000:window.innerWidth>2e3})}},{key:"render",value:function(){return window.performance&&this.state.refreshed&&1===performance.navigation.type&&(this.handleWindowSizeChange("Refresh"),this.setState({refreshed:!1})),i.a.createElement(h.a,null,i.a.createElement("div",{class:"wrapper"},i.a.createElement("div",{class:"box text header"},i.a.createElement(m.c,null,i.a.createElement(m.a,{path:"/:hash",children:i.a.createElement(v,null)}))),i.a.createElement("div",{class:"biography"},i.a.createElement("div",{class:"box about_doli_container doli_about_photo"},i.a.createElement("div",{class:"box center text name"},"Dolores"),i.a.createElement("div",{class:"center text about "},"O Dolores")),i.a.createElement("div",{class:"box about_filip_container filip_about_photo"},i.a.createElement("div",{class:"box center text name"},"Filip"),i.a.createElement("div",{class:"center text about"},"O Filipu"))),i.a.createElement("div",{class:"countdown"},i.a.createElement("div",{class:"box days countdown_color"},i.a.createElement("div",{class:"box center text countdown_title"},"Dana"),i.a.createElement("div",{class:"center text countdown_value"},i.a.createElement("h1",null,"150"))),i.a.createElement("div",{class:"box hours countdown_color"},i.a.createElement("div",{class:"box center text countdown_title"},"Sati"),i.a.createElement("div",{class:"center text countdown_value"},i.a.createElement("h1",null,"3"))),i.a.createElement("div",{class:"box minutes countdown_color"},i.a.createElement("div",{class:"box center text countdown_title"},"Minuta"),i.a.createElement("div",{class:"center text countdown_value"},i.a.createElement("h1",null,"34"))))))}}]),t}(a.Component);r.a.render(i.a.createElement(p,null),document.getElementById("root"))},8:function(e){e.exports=JSON.parse('{"44e5ef3e99104c97972dbc0271d88f94":{"title":"Draga Jedna Osobo","single_person":true,"hash":"44e5ef3e99104c97972dbc0271d88f94","phone":"+385911850817"},"63ceeceafed748519c811ad00a8520bf":{"title":"Dragi Vi\u0161e osoba","single_person":false,"hash":"63ceeceafed748519c811ad00a8520bf","phone":"+385958507004"}}')}},[[23,1,2]]]);
//# sourceMappingURL=main.6e407ce3.chunk.js.map