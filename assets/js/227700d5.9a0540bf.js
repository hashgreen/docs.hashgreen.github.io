"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1161],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(a),m=r,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||i;return a?n.createElement(h,o(o({ref:t},d),{},{components:a})):n.createElement(h,o({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},4736:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},assets:function(){return d},toc:function(){return c},default:function(){return m}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),o=["components"],l={title:"Weekly Update #16",date:new Date("2022-07-14T00:00:00.000Z"),authors:["james"],tags:["update","hashgreen","chia","blockchain","dex","cryptocurrency","mit","startup","order book","swap"],description:"Hashgreen updates on: trading and swapping explained",image:"./assets/banner.png"},s=void 0,p={permalink:"/blog/weekly-update-16",source:"@site/blog/weekly-update-16/index.md",title:"Weekly Update #16",description:"Hashgreen updates on: trading and swapping explained",date:"2022-07-14T00:00:00.000Z",formattedDate:"July 14, 2022",tags:[{label:"update",permalink:"/blog/tags/update"},{label:"hashgreen",permalink:"/blog/tags/hashgreen"},{label:"chia",permalink:"/blog/tags/chia"},{label:"blockchain",permalink:"/blog/tags/blockchain"},{label:"dex",permalink:"/blog/tags/dex"},{label:"cryptocurrency",permalink:"/blog/tags/cryptocurrency"},{label:"mit",permalink:"/blog/tags/mit"},{label:"startup",permalink:"/blog/tags/startup"},{label:"order book",permalink:"/blog/tags/order-book"},{label:"swap",permalink:"/blog/tags/swap"}],readingTime:3.21,truncated:!1,authors:[{name:"J.",title:"Community Lead",imageURL:"https://hashgreen-assets.s3.ca-central-1.amazonaws.com/people/james.jpg",key:"james"}],prevItem:{title:"Weekly Update #17",permalink:"/blog/weekly-update-17"},nextItem:{title:"Weekly Update #15",permalink:"/blog/weekly-update-15"}},d={image:a(625).Z,authorsImageUrls:[void 0]},c=[{value:"What is an Order Book?",id:"what-is-an-order-book",children:[],level:2},{value:"Understanding Order Books",id:"understanding-order-books",children:[],level:2},{value:"What is a Swap?",id:"what-is-a-swap",children:[],level:2},{value:"Why is Swapping More Immediate?",id:"why-is-swapping-more-immediate",children:[],level:2},{value:"Trading vs. Swapping",id:"trading-vs-swapping",children:[],level:2}],u={toc:c};function m(e){var t=e.components,l=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"banner",src:a(625).Z})),(0,i.kt)("p",null,"Hello Hashgreen readers, welcome back to another week of Weekly Update! "),(0,i.kt)("p",null,"Last week, we released an update targeting mobile device users and since then we've received some genuine feedback from ",(0,i.kt)("a",{parentName:"p",href:"https://www.reddit.com/r/chia/comments/vsjeyk/hashgreen_weekly_update_15_07062022_a_more/?utm_source=share&utm_medium=web2x&context=3"},"reddit"),".\nThank you again for always willing to give us constructive advice, and we will continue working on providing a better experience to the users of ",(0,i.kt)("a",{parentName:"p",href:"https://hash.green/dex"},"Hashgreen DEX"),".\nAt the same time, we will keep developing and building more services for the community on ",(0,i.kt)("a",{parentName:"p",href:"https://www.chia.net/"},"Chia Blockchain"),". "),(0,i.kt)("p",null,"This week we would like to introduce two essential components in ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Decentralized_finance"},"DeFi"),", that is, order books and swaps, and share with you the difference and the pros and cons for each design."),(0,i.kt)("h2",{id:"what-is-an-order-book"},"What is an Order Book?"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"definition")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"An order book refers to an electronic list of buy and sell orders for an asset organized by the price. "))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"An order book is widely used in traditional trading markets such as the stock market.\nGenerally, it shows a smooth and aggregated view of a specific financial instrument.\nIt comprises two sides, bidding and asking, dedicated to buyers and sellers. ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"In cryptocurrency, trading platforms such as the centralized exchange (CEX) or the decentralized exchange (DEX) often incorporate order books to display a variety of crypto assets for users to trade.\nYou probably have heard of ",(0,i.kt)("a",{parentName:"p",href:"https://www.binance.com/"},"Binance")," or ",(0,i.kt)("a",{parentName:"p",href:"https://pro.coinbase.com/"},"Coinbase Pro"),".\nThey are the top CEXs that people visit and conduct trades. "))),(0,i.kt)("h2",{id:"understanding-order-books"},"Understanding Order Books"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Order books contain these main parts: bid and ask, price and amount, and order history. ")),(0,i.kt)("figcaption",{align:"center"},(0,i.kt)("b",null,"Figure: Order book in Hashgreen DEX. ")),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("img",{src:a(654).Z})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Bid and Ask")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"bid")," is an order in which buyers bid for a certain amount of shares at a particular price."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ask")," is an order in which sellers ask for a specific price for their shares. ")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Price and Amount")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"An order book records two sides of the orders:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"bid")," side contains information such as all the bids, the amount they wish to purchase, and the price they are willing to pay."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ask")," side resembles the bid side."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"At the top of the order book is where the highest ",(0,i.kt)("inlineCode",{parentName:"p"},"bid")," and the lowest ",(0,i.kt)("inlineCode",{parentName:"p"},"ask")," prices are shown.  "))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Order History")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Order History records all the transactions that have occurred in the past, including both the ",(0,i.kt)("inlineCode",{parentName:"li"},"bid")," and the ",(0,i.kt)("inlineCode",{parentName:"li"},"ask")," sides.")),(0,i.kt)("figcaption",{align:"center"},(0,i.kt)("b",null,"Figure: Hashgreen DEX incorporates trade history into the page. ")),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("img",{src:a(9576).Z})),(0,i.kt)("h2",{id:"what-is-a-swap"},"What is a Swap?"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},'When you are trading on DEX, you are carrying out trades in order books.\nTransactions are only fulfilled by matching ask or bid orders that other people uploaded.\n"Swap", in cryptocurrency, refers to exchanging the cryptocurrency you have for the equivalent value of another crypto. ')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Swaps offer greater flexibility in designing and constructing the transaction process and more essentially the agreement between two parties to exchange assets for a set period.\nExamples of swaps in cryptocurrency that the majority of people would most likely use are ",(0,i.kt)("a",{parentName:"p",href:"https://app.uniswap.org/#/swap"},"Uniswap")," on Ethereum and ",(0,i.kt)("a",{parentName:"p",href:"https://pancakeswap.finance/"},"PancakeSwap")," on BNB Chain."))),(0,i.kt)("h2",{id:"why-is-swapping-more-immediate"},"Why is Swapping More Immediate?"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Swapping provides an even better experience for great flexibility, high transaction efficiency, fair price, and efficient price discovery.\nWhen you are buying something that must accept DAI, but you only have ETH, then it's a good time to swap.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Conceptually, trading and swapping are similar.\nHowever, trading with order books usually requires deeper understanding of the design and functionalities of trading and order books, whereas swapping can be as simple as possible for users to execute."))),(0,i.kt)("h2",{id:"trading-vs-swapping"},"Trading vs. Swapping"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null}),(0,i.kt)("th",{parentName:"tr",align:"center"},"trading on DEX"),(0,i.kt)("th",{parentName:"tr",align:"center"},"swapping on AMM"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"average waiting time"),(0,i.kt)("td",{parentName:"tr",align:"center"},"slower"),(0,i.kt)("td",{parentName:"tr",align:"center"},"quicker")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"transaction speed"),(0,i.kt)("td",{parentName:"tr",align:"center"},"tied"),(0,i.kt)("td",{parentName:"tr",align:"center"},"tied")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"price"),(0,i.kt)("td",{parentName:"tr",align:"center"},"inferior"),(0,i.kt)("td",{parentName:"tr",align:"center"},"fair")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"price discovery"),(0,i.kt)("td",{parentName:"tr",align:"center"},"less efficient"),(0,i.kt)("td",{parentName:"tr",align:"center"},"more efficient")))))}m.isMDXComponent=!0},654:function(e,t,a){t.Z=a.p+"assets/images/order_book-fd91d9fc6b3181d152beda690f3a0a12.png"},9576:function(e,t,a){t.Z=a.p+"assets/images/trade_history-68f2f3f4d657474698ec16eb4d31dc2e.png"},625:function(e,t,a){t.Z=a.p+"assets/images/banner-f3847ab4001030e8424685c97a23efa7.png"}}]);