(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,a){e.exports=a(48)},25:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(8),s=a.n(o),l=(a(25),a(1)),c=a(2),i=a(4),u=a(3),m=a(5),h=(a(26),a(7)),d=a(6),p="https://murder-with-friends.herokuapp.com/users/create/",g=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",alias:"",password_digest:"",id:1},a.onChange=function(e){a.setState(Object(d.a)({},e.target.name,e.target.value))},a.onSubmit=function(e){var t=Object(h.a)({},a.state);e.preventDefault(),""!==t.name&&""!==t.alias&&""!==t.password_digest?fetch(p,{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(e){return console.log("Success:",e)}):console.log("refused to submit due to user failure")},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state,t=e.name,a=e.alias,n=(e.game,e.password_digest);return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("div",{className:"form-row"},r.a.createElement("div",{className:"form-group col-md-6"},r.a.createElement("label",{htmlFor:"name"},"Name"),r.a.createElement("input",{type:"text",className:"form-control",name:"name",placeholder:"Enter name",value:t,onChange:this.onChange})),r.a.createElement("div",{className:"form-group col-md-6"},r.a.createElement("label",{htmlFor:"name"},"Alias"),r.a.createElement("input",{type:"text",className:"form-control",name:"alias",placeholder:"Enter name",value:a,onChange:this.onChange})),r.a.createElement("div",{className:"form-group col-md-6"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",className:"form-control",name:"password_digest",placeholder:"password",value:n,onChange:this.onChange})),r.a.createElement("input",{type:"submit",value:"Sign Up",className:"btn btn-dark btn-block"})))}}]),t}(n.Component),f="https://murder-with-friends.herokuapp.com/games/start/",b=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).onSubmit=function(e){e.preventDefault(),fetch(f,{method:"POST",body:JSON.stringify({id:1}),headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(e){return console.log("Success:",JSON.stringify(e))})},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("div",{className:"form-row"},r.a.createElement("input",{type:"submit",value:"Start Game",className:"btn btn-dark btn-block"})))}}]),t}(n.Component),v="https://murder-with-friends.herokuapp.com/users/login/",y=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={alias:"",password_digest:""},a.onChange=function(e){a.setState(Object(d.a)({},e.target.name,e.target.value))},a.onSubmit=function(e){e.preventDefault();var t=Object(h.a)({},a.state);if(""!==t.alias&&""!==t.password_digest)try{fetch(v,{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(e){a.props.loginUser(e),a.setState({alias:"",password_digest:""})})}catch(n){console.log("invalid password")}else console.log("either username or password blew it")},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state,t=e.alias,a=e.password_digest;return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("div",{className:"form-row"},r.a.createElement("div",{className:"form-group col-md-6"},r.a.createElement("label",{htmlFor:"name"},"Alias"),r.a.createElement("input",{type:"text",className:"form-control",name:"alias",placeholder:"Enter name",value:t,onChange:this.onChange})),r.a.createElement("div",{className:"form-group col-md-6"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",className:"form-control",name:"password_digest",placeholder:"Password",value:a,onChange:this.onChange})),r.a.createElement("input",{type:"submit",value:"Login",className:"btn btn-dark btn-block"})))}}]),t}(n.Component),w=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).geo_success=function(e){console.log(e),a.props.getLocationData(e)},a.geo_error=function(){console.log("not seeing anything")},a.geo_options={enableHighAccuracy:!0,maximumAge:3e4,timeout:27e3},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){navigator.geolocation.watchPosition(this.geo_success,this.geo_error,this.geo_options)}},{key:"render",value:function(){return null}}]),t}(n.Component),E=a(18),j=a.n(E),O=function(e){var t=e.text;return r.a.createElement("div",null,t)},S=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={center:{lat:0,lng:0},zoom:20},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.setState({center:{lat:this.props.lat,lng:this.props.long}})}},{key:"render",value:function(){return console.log("google maps props",this.props),r.a.createElement("div",{style:{height:"100vh",width:"100%"}},r.a.createElement(j.a,{bootstrapURLKeys:{key:"AIzaSyDKFuNQt2_3uU5gvoGs-CdH1D3r_g51CLk"},defaultCenter:this.state.center,defaultZoom:this.state.zoom},r.a.createElement(O,{lat:this.props.lat,lng:this.props.long,text:"X"})))}}]),t}(n.Component),k=function(e){return r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},e.target.name),r.a.createElement(S,{long:e.target.longitude,lat:e.target.latitude}))},C=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={target:null},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.currentuser.target;this.setState({target:e}),console.log("mounting target in dashboard",e)}},{key:"render",value:function(){var e=this.state.target;return r.a.createElement("div",{className:"card mb-3"},e?r.a.createElement(k,{target:e}):null)}}]),t}(n.Component),N=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={latitude:null,longitude:null,timestamp:null,currentuser:null},a.getLocationData=function(e){e.coords&&a.setState({latitude:e.coords.latitude,longitude:e.coords.longitude,timestamp:e.timestamp})},a.loginUser=function(e){console.log("user in login user",e),a.setState({currentuser:e})},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return Math.abs(t.latitude-this.state.latitude)+Math.abs(t.longitude-this.state.longitude)>1e-8||this.state.currentuser!==t.currentuser}},{key:"componentDidUpdate",value:function(){var e=this.state,t=e.longitude,a=e.latitude,n=e.currentuser,r=e.timestamp;t&&n&&(console.log("currentuser",n),fetch("https://murder-with-friends.herokuapp.com/users"+"/".concat(n.id,"/locate"),{method:"PATCH",body:JSON.stringify({latitude:a,longitude:t,timestamp:r}),headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(e){return console.log("post-fetch data",e)}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(w,{getLocationData:this.getLocationData}),r.a.createElement("br",null),r.a.createElement(g,null),r.a.createElement("br",null),r.a.createElement(y,{loginUser:this.loginUser}),r.a.createElement("br",null),r.a.createElement(b,null),r.a.createElement("br",null),this.state.currentuser?r.a.createElement(C,{currentuser:this.state.currentuser}):null)}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[19,1,2]]]);
//# sourceMappingURL=main.8900bd3f.chunk.js.map