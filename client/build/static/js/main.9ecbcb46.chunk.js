(this["webpackJsonpportfolio-site"]=this["webpackJsonpportfolio-site"]||[]).push([[0],{62:function(e,t,a){},63:function(e,t,a){},89:function(e,t,a){"use strict";a.r(t);var i=a(2),n=a(0),s=a.n(n),c=a(26),l=a.n(c),r=(a(62),a(63),a.p+"static/media/BackgroundImage.ca04c533.png"),o=a(8),d=a(12),b=a(10),j=a(9),m=a(28),h=a(6),u=a(14),p=a(29),g=a(56),x=a(52),f=a(17),O=a(19);var y=function(e){return Object(i.jsx)(x.a,{className:"bg-transparent jumbotron-fluid p-0 text-center",children:Object(i.jsx)(u.a,{fluid:!0,children:Object(i.jsx)(f.a,{className:"justify-content-center pt-5 pb-4",children:Object(i.jsxs)(O.a,{md:8,sm:12,children:[e.title&&Object(i.jsx)("h1",{className:"display-2 font-weight-bolder",children:e.title}),e.subTitle&&Object(i.jsx)("h3",{className:"display-4 font-weight-light",children:e.subTitle}),e.text&&Object(i.jsx)("h3",{className:"lead font-weight-light",children:e.text})]})})})})},v=a(25),k=a(42);var N=function(e){var t=Object(k.b)({opacity:1,from:{opacity:0}});return Object(i.jsxs)(k.a.div,{className:"b-card-info",style:t,children:[Object(i.jsx)("p",{className:"b-card-title",children:e.title}),Object(i.jsx)("p",{className:"b-card-subtitle",children:e.subTitle}),Object(i.jsx)("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",children:"View"})]})};var S=function(e){return Object(i.jsxs)("div",{className:"d-inline-block b-card",onClick:function(t){return e.click(e.item)},children:[Object(i.jsx)("img",{className:"b-card-image",src:e.item.imgSrc,alt:e.item.imgSrc}),e.item.selected&&Object(i.jsx)(N,{title:e.item.title,subTitle:e.item.subTitle,link:e.item.link})]})},w=a.p+"static/media/CryptopediaLogo.1b280098.png",C=a.p+"static/media/Tesla.090e7613.png",T=a.p+"static/media/BezosBot.22c30a6b.png",I=function(e){Object(b.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleCardClick=function(e,t){var a=Object(v.a)(n.state.items);a[e].selected=!a[e].selected,a.forEach((function(t){t.id!==e&&(t.selected=!1)})),n.setState({items:a})},n.makeItems=function(e){return e.map((function(e){return Object(i.jsx)(S,{item:e,click:function(t){return n.handleCardClick(e.id,t)}},e.id)}))},n.state={items:[{id:0,title:"Cryptopedia",subTitle:"Cryptocurrency Trading Simulator",imgSrc:w,link:"https://cryptopedia.netlify.app/",selected:!1},{id:1,title:"Nikola Tesla Influencer Site",subTitle:"Track Storms using Google Maps API",imgSrc:C,link:"https://Nikola-Tesla-electric.netlify.app/",selected:!1},{id:2,title:"Bezos Takes Over the World (Again)",subTitle:"Futuristic Shooter Game",imgSrc:T,link:"https://Bezos-domination-game.netlify.app/",selected:!1}]},n}return Object(d.a)(a,[{key:"render",value:function(){return Object(i.jsx)(u.a,{fluid:!0,children:Object(i.jsx)(f.a,{className:"justify-content-around",children:this.makeItems(this.state.items)})})}}]),a}(s.a.Component);var B=function(e){return Object(i.jsxs)("div",{children:[Object(i.jsx)(y,{title:e.title,subTitle:e.subTitle,text:e.text}),Object(i.jsx)(I,{})]})};var E=function(e){return Object(i.jsx)(u.a,{fluid:!0,children:Object(i.jsx)(f.a,{className:"justify-content-center",children:Object(i.jsx)(O.a,{md:8,children:e.children})})})},M=a.p+"static/media/MyPhoto.22919e14.png";var A=function(e){return Object(i.jsxs)("div",{children:[Object(i.jsx)(y,{title:e.title}),Object(i.jsx)(u.a,{fluid:!0,children:Object(i.jsxs)(f.a,{className:"justify-content-center p-0",children:[Object(i.jsx)("img",{src:M,className:"MyPhoto pb-5",alt:"Me"}),Object(i.jsxs)(E,{children:[Object(i.jsx)("p",{children:"Hey there! I'm Bob Kane, a full-stack web developer based out of Brooklyn, NY with a background in finance and marketing. As a recent Ironhack graduate, I'm most familar with the technologies used in the MERN stack (MongoDB, Express.js, React.js, Node.js)."}),Object(i.jsx)("p",{children:"Critical thinking and problem solving are in my nature, so it's fitting that I can fully integrate those skills into my career through coding. I'm very solutions-oriented, and I instinctively try to understand why and how things work the way they do. "}),Object(i.jsx)("p",{children:" As a student of life, I'm deeply passionate about self-improvement and have an insatisable appetite for learning. In my neverending quest for knowledge, I'm always seeking to better myself and continually learn new things in all aspects of life. In terms of web development, these qualities allow me to push the limitations of my current capabilities while always striving to become a better programmer."}),Object(i.jsx)("p",{children:"When I'm not busy coding, you can usually find me enjoying some of my favorite hobbies. These include reading, meditation, yoga, weight-training, snowboarding, DJing, cooking, fishing, and traveling. Besides programming languages, I'm also currently learning how to speak Spanish. Eventually I strive to be bilingual and add that to my already dynamic skillset."})]})]})})]})},J=a(24),L=a(53),D=a.n(L),F=a(16),G=a(54),R=function(e){Object(b.a)(a,e);var t=Object(j.a)(a);function a(e){var i;return Object(o.a)(this,a),(i=t.call(this,e)).handleChange=function(e){var t=e.target,a="checkbox"===t.type?t.checked:t.value,n=t.name;i.setState(Object(J.a)({},n,a))},i.handleSubmit=function(e){e.preventDefault(),console.log(e.target),i.setState({disabled:!0}),D.a.post("api/email",i.state).then((function(e){e.data.success?i.setState({disabled:!1,emailSent:!0}):i.setState({disabled:!1,emailSent:!1})})).catch((function(e){console.log(e),i.setState({disabled:!1,emailSent:!1})}))},i.state={name:"",email:"",message:"",disabled:!1,emailSent:null},i}return Object(d.a)(a,[{key:"render",value:function(){return Object(i.jsxs)("div",{children:[Object(i.jsx)(y,{title:this.props.title}),Object(i.jsx)(E,{children:Object(i.jsxs)(F.a,{className:"py-5 my-5",onSubmit:this.handleSubmit,children:[Object(i.jsxs)(F.a.Group,{children:[Object(i.jsx)(F.a.Label,{htmlFor:"full-name",children:"Full Name"}),Object(i.jsx)(F.a.Control,{id:"full-name",name:"name",type:"text",value:this.state.name,onChange:this.handleChange})]}),Object(i.jsxs)(F.a.Group,{children:[Object(i.jsx)(F.a.Label,{htmlFor:"email",children:"Email"}),Object(i.jsx)(F.a.Control,{id:"email",name:"email",type:"email",value:this.state.email,onChange:this.handleChange})]}),Object(i.jsxs)(F.a.Group,{children:[Object(i.jsx)(F.a.Label,{htmlFor:"message",children:"Message"}),Object(i.jsx)(F.a.Control,{id:"message",name:"message",as:"textarea",rows:"3",value:this.state.message,onChange:this.handleChange})]}),Object(i.jsx)(G.a,{className:"d-inline-block border border-2 mr-3",variant:"primary",type:"submit",disabled:this.state.disabled,children:"Send"}),!0===this.state.emailSent&&Object(i.jsx)("p",{className:"d-inline success-msg",children:"Email Sent"}),!1===this.state.emailSent&&Object(i.jsx)("p",{className:"d-inline err-msg",children:"Email Not Sent"})]})})]})}}]),a}(s.a.Component),K=function(e){Object(b.a)(a,e);var t=Object(j.a)(a);function a(e){var i;return Object(o.a)(this,a),(i=t.call(this,e)).state={title:"Robert Kane, Jr.",headerLinks:[{title:"Home",path:"/"},{title:"About",path:"/about"},{title:"Contact",path:"/contact"}],home:{title:"Dare to be Different",subTitle:"Strive for Excellence",text:"Check out my work below"},about:{title:"About Me"},contact:{title:"Let's Talk"}},i}return Object(d.a)(a,[{key:"render",value:function(){var e=this;return Object(i.jsx)(m.a,{children:Object(i.jsxs)(u.a,{className:"p-0 color:white",fluid:!0,children:[Object(i.jsxs)(p.a,{className:"border-bottom",bg:"light",variant:"light",expand:"lg",sticky:"top",children:[Object(i.jsx)(p.a.Brand,{children:"Robert Kane, Jr."}),Object(i.jsx)(p.a.Toggle,{className:"border-0","aria-controls":"hamburger-menu"}),Object(i.jsx)(p.a.Collapse,{id:"hamburger-menu",children:Object(i.jsxs)(g.a,{className:"ml-auto",children:[Object(i.jsx)(m.b,{className:"nav-link",to:"/",children:"Home"}),Object(i.jsx)(m.b,{className:"nav-link",to:"/about",children:"About"}),Object(i.jsx)(m.b,{className:"nav-link",to:"/contact",children:"Contact"})]})})]}),Object(i.jsx)(h.a,{path:"/",exact:!0,render:function(){return Object(i.jsx)(B,{title:e.state.home.title,subTitle:e.state.home.subTitle,text:e.state.home.text})}}),Object(i.jsx)(h.a,{path:"/about",render:function(){return Object(i.jsx)(A,{title:e.state.about.title})}}),Object(i.jsx)(h.a,{path:"/contact",render:function(){return Object(i.jsx)(R,{title:e.state.contact.title})}})]})})}}]),a}(s.a.Component);var P=function(){return Object(i.jsx)("footer",{className:"mt-5",bg:"light",variant:"light",children:Object(i.jsx)(u.a,{fluid:!0,children:Object(i.jsxs)(f.a,{className:"border-top justify-content-between p-3",children:[Object(i.jsx)(O.a,{className:"p-0 d-flex",md:3,sm:12,children:"My Portfolio Site"}),Object(i.jsx)(O.a,{className:"p-0 d-flex justify-content-end",md:3,sm:12,children:"Created by Robert Kane, Jr."})]})})})};var z=function(){return Object(i.jsxs)("div",{style:{backgroundImage:"url(".concat(r,")"),height:"auto",width:"100%"},children:[Object(i.jsx)(K,{}),Object(i.jsx)(P,{})]})};a(88);l.a.render(Object(i.jsx)(z,{}),document.getElementById("root"))}},[[89,1,2]]]);
//# sourceMappingURL=main.9ecbcb46.chunk.js.map