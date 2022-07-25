"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4273],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return g}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(a),g=r,m=d["".concat(s,".").concat(g)]||d[g]||c[g]||i;return a?n.createElement(m,o(o({ref:t},u),{},{components:a})):n.createElement(m,o({ref:t},u))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},984:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},assets:function(){return u},toc:function(){return c},default:function(){return g}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),o=["components"],l={title:"Weekly Update #17",date:new Date("2022-07-25T00:00:00.000Z"),authors:["james"],tags:["update","hashgreen","chia","blockchain","cryptocurrency","mit","startup","dex","amm","tutorial","rwd"],description:"Hashgreen updates on: tutorial pop-up page, my orders pagination, adjusting landing page on the mobile, and update for amm.",image:"./assets/banner.png"},s=void 0,p={permalink:"/blog/weekly-update-17",source:"@site/blog/weekly-update-17/index.md",title:"Weekly Update #17",description:"Hashgreen updates on: tutorial pop-up page, my orders pagination, adjusting landing page on the mobile, and update for amm.",date:"2022-07-25T00:00:00.000Z",formattedDate:"July 25, 2022",tags:[{label:"update",permalink:"/blog/tags/update"},{label:"hashgreen",permalink:"/blog/tags/hashgreen"},{label:"chia",permalink:"/blog/tags/chia"},{label:"blockchain",permalink:"/blog/tags/blockchain"},{label:"cryptocurrency",permalink:"/blog/tags/cryptocurrency"},{label:"mit",permalink:"/blog/tags/mit"},{label:"startup",permalink:"/blog/tags/startup"},{label:"dex",permalink:"/blog/tags/dex"},{label:"amm",permalink:"/blog/tags/amm"},{label:"tutorial",permalink:"/blog/tags/tutorial"},{label:"rwd",permalink:"/blog/tags/rwd"}],readingTime:2.51,truncated:!1,authors:[{name:"J.",title:"Community Lead",imageURL:"https://hashgreen-assets.s3.ca-central-1.amazonaws.com/people/james.jpg",key:"james"}],nextItem:{title:"Weekly Update #16",permalink:"/blog/weekly-update-16"}},u={image:a(31).Z,authorsImageUrls:[void 0]},c=[{value:"What&#39;s Been Done",id:"whats-been-done",children:[],level:2},{value:"What&#39;s Rolling",id:"whats-rolling",children:[],level:2}],d={toc:c};function g(e){var t=e.components,l=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"banner",src:a(31).Z})),(0,i.kt)("p",null,"\ud83c\udf31 Hello Chia holders and Hashgreen readers, welcome back to another weekly update.\nIn the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.hash.green/blog/weekly-update-16"},"previous update"),", we explained two fundamental ideas in decentralized finance (DeFi), that is, ",(0,i.kt)("a",{parentName:"p",href:"https://docs.hash.green/blog/weekly-update-16#what-is-an-order-book"},"order books")," and ",(0,i.kt)("a",{parentName:"p",href:"https://docs.hash.green/blog/weekly-update-16#what-is-a-swap"},"swaps"),".\nSome of you may already know these concepts, but we believe a succinct explanation is needed to let everybody know what's going on and what product they are using."),(0,i.kt)("p",null,"This week, we have a few updates that we would like to tell you about.  "),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"tl;dr")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"tutorial page, my orders pagination, adjustment of landing page on the mobile, and the update for amm."))),(0,i.kt)("h2",{id:"whats-been-done"},"What's Been Done"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The tutorial for ",(0,i.kt)("a",{parentName:"li",href:"https://hash.green/dex"},"Hashgreen DEX")," is out now!\nConsidering the complexity and the novelty of DEX, we release a tutorial segment as a guidance for users who are new to our page or not familiar with the landscacpe of DeFi. ")),(0,i.kt)("figcaption",{align:"center"},(0,i.kt)("b",null,"Figure: Tutorial will pop out for first time users. ")),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("img",{src:a(555).Z})),(0,i.kt)("br",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"We will guide you through the main features of Hashgreen DEX, in the hope that you will quickly understand how to trade in Hashgreen DEX.\n(You can also visit our ",(0,i.kt)("a",{parentName:"li",href:"https://docs.hash.green/"},"Docs")," for more information. \ud83d\udc96)")),(0,i.kt)("figcaption",{align:"center"},(0,i.kt)("b",null,"Figure: Follow the steps to learn key features and how to trade.")),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("img",{src:a(3669).Z,width:"400 px"})),(0,i.kt)("figcaption",{align:"center"},(0,i.kt)("b",null,"Figure: You can always find the tutorial here in the navigation bar.")),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("img",{src:a(1840).Z,width:"500 px"})),(0,i.kt)("br",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"We've added pagination in ",(0,i.kt)("inlineCode",{parentName:"li"},"My Orders"),".\nA page can display up to 8 transactions, and below the panel lay the pagination buttons where you can click to see your transactions collated and presented in different pages.")),(0,i.kt)("figcaption",{align:"center"},(0,i.kt)("b",null,"Figure: Click different pages to view your orders.")),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("img",{src:a(8774).Z,width:"500 px"})),(0,i.kt)("br",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Our team has made a few adjustments to the appearance of our landing page on different mobile devices. ")),(0,i.kt)("h2",{id:"whats-rolling"},"What's Rolling"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"We at ",(0,i.kt)("a",{parentName:"p",href:"https://www.hashgreen.net/"},"Hashgreen")," have had some gradual progress along the way building the AMM.\nThe development is now in full swing.\nOur team has almost finished the smart contract's high-level design and only micro adjustments are needed for future implementation.\nWe want to secure a seamless end-to-end trading experience in which our dApp interacts smoothly with the connected wallet.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},'Concrete plans of tokenomics and functionalities will be out around early September, and the same goes for the whitepaper.\nWe will release an alpha version, "Alpha Testing", on the testnet and start testing it around early November.\nAlpha Testing is opened to community members on Testnet10.\nYou are absolutely welcomed to join our Alpha Testing and if you do so, you can accrue alpha tester status (possibly rewards!).\nOnce we make sure everything is well prepared and settled after Alpha Testing, we will formally launch the service, set to release in 2023, on Mainnet.\nBy the time "Mainnet Launch" gets going, it will be available to everyone, accompanied by the releasing of Hashgreen token. '))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"timeline",src:a(3608).Z})))}g.isMDXComponent=!0},8774:function(e,t,a){t.Z=a.p+"assets/images/my_orders_pagination-eb720b77e319d26ea9a05732abc77a8d.png"},3669:function(e,t,a){t.Z=a.p+"assets/images/tutorial-69de16b5ab95e1d071f09f4701203e71.gif"},555:function(e,t,a){t.Z=a.p+"assets/images/tutorial_at_welcome_page-78ade827d510d14b53ef93cc3e5a7b56.png"},1840:function(e,t,a){t.Z=a.p+"assets/images/tutorial_in_nav_bar-6e120602d2d0ad71244b82820ebe1738.png"},31:function(e,t,a){t.Z=a.p+"assets/images/banner-10382f9e8b3555994deea03bbdb105d2.png"},3608:function(e,t,a){t.Z=a.p+"assets/images/timeline-79054ebb4755bec12b6a81be1324b8f2.png"}}]);