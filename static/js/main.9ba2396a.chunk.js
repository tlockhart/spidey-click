(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e){e.exports=[{id:1,name:"Miles Morales",alias:"Kid-Arachnid",image:"assets/images/kid-arachnid.png",occupation:"Student",location:"Brooklyn, New York",universe:"Earth-1610"},{id:2,name:"Peter Porker",alias:"Spider-Ham",image:"assets/images/peter-porker.png",occupation:"Photographer",location:"Basemont, Porker",universe:"Earth-8311"},{id:3,name:"Peter Parker",alias:"Spider-Man Noir",image:"assets/images/spider-man-noir.png",occupation:"Reporter",location:"unknown",universe:"Earth-TRN703"},{id:4,name:"Peter B Parker",alias:"Spider-Man",image:"assets/images/spider-man.png",occupation:"Photographer",location:"New York City",universe:"Earth-616"},{id:5,name:"Gwen Stacy",alias:"Spider-Gwen",image:"assets/images/spider-gwen.png",occupation:"Student",location:"New York City",universe:"Earth-65"},{id:6,name:"Peni Parker",alias:"SP//dr",image:"assets/images/peni-parker.png",occupation:"Student",location:"New York City",universe:"Earth-14512"},{id:7,name:"Amadeus Cho",alias:"Iron-Spider",image:"assets/images/iron-spider.png",occupation:"Photographer",location:"New York City",universe:"Earth-616"},{id:8,name:"Anya Corazon",alias:"Spider-Girl",image:"assets/images/spider-girl.png",occupation:"Student",location:"Brooklyn",universe:"Earth-616"},{id:9,name:"Miguel O'Hara",alias:"Spider-Man 2099",image:"assets/images/spider-man-2099.png",occupation:"Geneticist",location:"New York of 2099",universe:"Earth-928"},{id:10,name:"Eugene Flash Thompson",alias:"Agent Anti-Venom",image:"assets/images/agent-anti-venum.png",occupation:"Assistant Coach",location:"New York City",universe:"Earth-616"},{id:11,name:"Jessica Drew",alias:"Spider-Woman",image:"assets/images/spider-woman.png",occupation:"Private Investigator",location:"Manhattan",universe:"Earth-616"},{id:12,name:"Ben Reilly",alias:"Scarlet-Spider",image:"assets/images/scarlet-spider.png",occupation:"Vigilante",location:"New York City",universe:"Earth-616"}]},function(e,a,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},,,,function(e,a,t){e.exports=t(29)},,,,,,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(2),s=t.n(i),o=(t(17),t(10)),c=t(3),l=t(4),m=t(8),d=t(5),u=t(9),p=(t(19),function(e){return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"img-container text-center ".concat(e.name.replace(/ +/g,""))},r.a.createElement("img",{className:e.isGameLost?"img-shake m-2 img-fluid":"none m-3 img-fluid",alt:e.name,src:e.image,onClick:function(){e.handleClicked(e.id,e.name.replace(/ +/g,""))},onMouseEnter:function(){e.handleMouseEnter(e.name.replace(/ +/g,""))},onMouseLeave:function(){e.handleMouseLeave(e.name.replace(/ +/g,""))}})))});t(21);var g=function(e){return r.a.createElement("div",{className:"wrapper"},e.children)},h=t(6);t(23);var f=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{className:"navbar navbar-expand-md navbar-dark fixed-top text-center"},r.a.createElement("ul",{className:"navbar-nav mx-auto"},r.a.createElement("li",{className:"brand nav-item"},r.a.createElement("a",{href:"/spidey-click/"},r.a.createElement("h3",{className:"icon"},"@"))),r.a.createElement("li",{className:"nav-item"},r.a.createElement("p",{className:"instructions",id:"msg"},"Click an image to begin!")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("h3",{className:"score"},"Score: ",e.score," | Top Score: ",e.topScore)," "))),r.a.createElement("header",{className:"header"}))},v=(t(25),t(7)),E=t.n(v);var S=function(e){return r.a.createElement("footer",{className:"footer fixed-bottom text-center"},r.a.createElement("div",{className:"footer-container mx-auto"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("img",{alt:"react",className:"logo",src:E.a}),r.a.createElement("p",{className:"score"},"Spidey Click")),r.a.createElement("li",null,r.a.createElement("span",null,"\xa9",r.a.createElement("p",{className:"instructions"}," 2019 Tony Lockhart"))))))},k=(t(27),function(e){function a(){var e;return Object(c.a)(this,a),(e=Object(m.a)(this,Object(d.a)(a).call(this))).state={friends:h,score:0,topScore:0,isGameLost:!1},e.setFriends=function(e){return e.map(function(e){return Object(o.a)({},e,{clicked:!1})})},e.resetFriends=function(e){return e.map(function(e){return e.clicked=!1})},e.updateFriendClick=function(a,t,n){var r=!1,i=a.map(function(a){return a.id!==t||a.clicked?a.id===t&&a.clicked?(r=!1,a.clicked="false",e.resetScore(),a):a:(r=!0,a.clicked="true",e.incrementScore(),a)});return r?(e.setState({isGameLost:!1}),e.shuffleFriends(i,n,e.handleMouseLeave)):r||(e.setState({isGameLost:!0}),e.setState({friends:e.resetFriends(i)}),e.handleMouseLeave(n)),i},e.handleClicked=function(a,t){var n=e.updateFriendClick(e.state.friends,a,t);e.setState({friends:n})},e.incrementScore=function(){var a=e.state.score+1;a===e.state.friends.length?(document.getElementById("msg").innerHTML="You Won!",e.setState({score:a}),e.setState({topScore:e.state.score+1}),e.setState({score:0}),e.setState({friends:e.resetFriends(e.state.friends)})):(e.setState({score:a}),document.getElementById("msg").innerHTML="Correct Guess!")},e.resetScore=function(){e.highScoreArr.push(e.state.score),e.highScoreArr.sort();var a=e.highScoreArr.length,t=e.highScoreArr[a-1];e.setState({topScore:t}),e.setState({score:0}),document.getElementById("msg").innerHTML="You Lose!",e.setState({friends:e.resetFriends(e.state.friends)})},e.shuffleFriends=function(e,a,t){for(var n=e.length-1;n>0;n--){var r=Math.floor(Math.random()*(n+1)),i=[e[r],e[n]];e[n]=i[0],e[r]=i[1],n===e.length-1&&t(a)}},e.handleMouseEnter=function(e){var a=document.getElementsByClassName(e)[0];a.style.transform="scale(1.2)",a.style.border="1px solid black"},e.handleMouseLeave=function(e){var a=document.getElementsByClassName(e)[0];a.style.transform="scale(1)",a.style.border="none"},e.highScoreArr=[],e}return Object(u.a)(a,e),Object(l.a)(a,[{key:"componentDidMount",value:function(){this.setState({friends:this.setFriends(this.state.friends)})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement(g,null,r.a.createElement("div",{className:"flex-container main-container"},r.a.createElement("div",{className:"row mx-0"},r.a.createElement("div",{className:"col-12 px-0"},r.a.createElement(f,{score:this.state.score,topScore:this.state.topScore})),r.a.createElement("div",{className:"col-9 mx-auto"},r.a.createElement("div",{className:"row justify-content-center align-items-center "},this.state.friends.map(function(a){return r.a.createElement(p,{className:"col-1",incrementScore:e.incrementScore,resetScore:e.resetScore,handleClicked:e.handleClicked,handleMouseEnter:e.handleMouseEnter,handleMouseLeave:e.handleMouseLeave,id:a.id,key:a.id,name:a.name,image:a.image,occupation:a.occupation,location:a.location,clicked:a.clicked,isGameLost:e.state.isGameLost})}))))),r.a.createElement(S,null)))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[11,2,1]]]);
//# sourceMappingURL=main.9ba2396a.chunk.js.map