"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9852],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return d}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),u=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=u(a),d=n,w=h["".concat(i,".").concat(d)]||h[d]||c[d]||o;return a?r.createElement(w,l(l({ref:t},p),{},{components:a})):r.createElement(w,l({ref:t},p))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=h;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,l[1]=s;for(var u=2;u<o;u++)l[u]=a[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},799:function(e,t,a){a.r(t),a.d(t,{assets:function(){return k},contentTitle:function(){return b},default:function(){return S},frontMatter:function(){return f},metadata:function(){return y},toc:function(){return v}});var r=a(3117),n=a(7294),o=a(3905),l=a(4334),s=a(2389),i=a(7392),u=a(7094),p=a(2466),c="tabList__CuJ",h="tabItem_LNqP";function d(e){var t;const{lazy:a,block:o,defaultValue:s,values:d,groupId:w,className:g}=e,m=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=d??m.map((e=>{let{props:{value:t,label:a,attributes:r}}=e;return{value:t,label:a,attributes:r}})),b=(0,i.l)(f,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===s?s:s??(null==(t=m.find((e=>e.props.default)))?void 0:t.props.value)??m[0].props.value;if(null!==y&&!f.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:v}=(0,u.U)(),[H,S]=(0,n.useState)(y),T=[],{blockElementScrollPositionUntilNextRender:C}=(0,p.o5)();if(null!=w){const e=k[w];null!=e&&e!==H&&f.some((t=>t.value===e))&&S(e)}const N=e=>{const t=e.currentTarget,a=T.indexOf(t),r=f[a].value;r!==H&&(C(t),S(r),null!=w&&v(w,String(r)))},O=e=>{var t;let a=null;switch(e.key){case"Enter":N(e);break;case"ArrowRight":{const t=T.indexOf(e.currentTarget)+1;a=T[t]??T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;a=T[t]??T[T.length-1];break}}null==(t=a)||t.focus()};return n.createElement("div",{className:(0,l.Z)("tabs-container",c)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":o},g)},f.map((e=>{let{value:t,label:a,attributes:o}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:H===t?0:-1,"aria-selected":H===t,key:t,ref:e=>T.push(e),onKeyDown:O,onClick:N},o,{className:(0,l.Z)("tabs__item",h,null==o?void 0:o.className,{"tabs__item--active":H===t})}),a??t)}))),a?(0,n.cloneElement)(m.filter((e=>e.props.value===H))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},m.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==H})))))}function w(e){const t=(0,s.Z)();return n.createElement(d,(0,r.Z)({key:String(t)},e))}var g="tabItem_Ymn6";function m(e){let{children:t,hidden:a,className:r}=e;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(g,r),hidden:a},t)}const f={title:"\u25b6 Get Started"},b=void 0,y={unversionedId:"get-started",id:"get-started",title:"\u25b6 Get Started",description:"Getting started might seem a bit frustrating initially, but fret not\ud83d\ude0e. This series of documentation will walk you through all the steps and ensure you have a seamless and smooth trading experience with HashgreenSwap.",source:"@site/docs/get-started.md",sourceDirName:".",slug:"/get-started",permalink:"/zh-Hant/get-started",draft:!1,tags:[],version:"current",frontMatter:{title:"\u25b6 Get Started"},sidebar:"sidebar",previous:{title:"Products",permalink:"/zh-Hant/category/products"},next:{title:"\ud83c\udfeb How to Trade on HashgreenSwap",permalink:"/zh-Hant/how-to-trade-on-hashgreenswap"}},k={},v=[{value:"Before You Start",id:"before-you-start",level:2},{value:"Create A Wallet",id:"create-a-wallet",level:3},{value:"Get XCH or CATs",id:"get-xch-or-cats",level:3},{value:"Connect Your Wallet to HashgreenSwap",id:"connect-your-wallet-to-hashgreenswap",level:3},{value:"Start Using HashgreenSwap",id:"start-using-hashgreenswap",level:2}],H={toc:v};function S(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},H,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("img",{src:"/img/pyke-whitepaper-getstarted-banner.jpg"}),(0,o.kt)("h1",{id:"get-started-with-hashgreenswap"},"Get Started with HashgreenSwap"),(0,o.kt)("p",null,"Getting started might seem a bit frustrating initially, but fret not\ud83d\ude0e. This series of documentation will walk you through all the steps and ensure you have a seamless and smooth trading experience with ",(0,o.kt)("a",{parentName:"p",href:"https://hash.green"},"HashgreenSwap"),"."),(0,o.kt)("h2",{id:"before-you-start"},"Before You Start"),(0,o.kt)("p",null,"Before you start trading in HashgreenSwap, make sure to follow the instructions listed below: ",(0,o.kt)("a",{parentName:"p",href:"#create-a-wallet"},"create a wallet"),", ",(0,o.kt)("a",{parentName:"p",href:"#get-xch-or-cats"},"get some XCH or CATs")," in your wallet, and ",(0,o.kt)("a",{parentName:"p",href:"#connect-your-wallet-to-hashgreenswap"},"connect your wallet to HashgreenSwap"),"."),(0,o.kt)("h3",{id:"create-a-wallet"},"Create A Wallet"),(0,o.kt)("p",null,"The first thing you need to do before using HashgreenSwap is to install and set up a wallet that supports HashgreenSwap on the Chia blockchain. HashgreenSwap currently supports these wallets: ",(0,o.kt)("a",{parentName:"p",href:"https://hoogii.app/"},"Hoogii"),", ",(0,o.kt)("a",{parentName:"p",href:"https://www.goby.app/"},"Goby"),", and ",(0,o.kt)("a",{parentName:"p",href:"https://www.chia.net/downloads/"},"Chia Wallet"),". Click the tabs below and find the one that suits your needs and is compatible with your devices."),(0,o.kt)("admonition",{title:"When you are creating a wallet, keep in mind:",type:"caution"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"Only download the wallet via the official source."),(0,o.kt)("li",{parentName:"ul"},"Always use the latest version of the wallet."),(0,o.kt)("li",{parentName:"ul"},"Store your mnemonics in a secure place and save it properly."))),(0,o.kt)(w,{mdxType:"Tabs"},(0,o.kt)(m,{value:"hoogii",label:"Hoogii",default:!0,mdxType:"TabItem"},(0,o.kt)("img",{src:"/img/hoogii-wallet.png"}),"Hoogii is a fully open-source crypto wallet extension built on the Chia blockchain. Available for download in Google Chrome Web Store. It has been integrated with HashgreenSwap since Q1, 2023.",(0,o.kt)("br",null),(0,o.kt)("a",{href:"https://hoogii.app"},(0,o.kt)("b",null,"Download Hoogii Wallet")),(0,o.kt)("br",null),(0,o.kt)("a",{href:"https://hoogii.app/docs/faq/#how-do-i-install-hoogii"},(0,o.kt)("b",null,"How to set up Hoogii Wallet"))),(0,o.kt)(m,{value:"goby",label:"Goby",mdxType:"TabItem"},(0,o.kt)("img",{src:"/img/Goby-logo.png"}),"Goby is an open-source browser plugin wallet for Chia Network. Goby currently supports Google Chrome and Brave Browser.",(0,o.kt)("br",null),(0,o.kt)("a",{href:"https://www.goby.app"},(0,o.kt)("b",null,"Download Goby Wallet")),(0,o.kt)("br",null),(0,o.kt)("a",{href:"https://chrome.google.com/webstore/detail/goby/jnkelfanjkeadonecabehalmbgpfodjm"},(0,o.kt)("b",null,"How to set up Goby Wallet")))),(0,o.kt)("h3",{id:"get-xch-or-cats"},"Get XCH or CATs"),(0,o.kt)("p",null,"XCH refers to the Chia Network coin. CATs (Chia Asset Tokens) are tokens issued on the Chia blockchain. To be able to trade on HashgreenSwap, you will need to acquire some XCH or CATs. You can view the token pairs available to trade in HashgreenSwap in the Overview ",(0,o.kt)("a",{parentName:"p",href:"https:/swap.hash.green/overview"},"here"),"."),(0,o.kt)("h3",{id:"connect-your-wallet-to-hashgreenswap"},"Connect Your Wallet to HashgreenSwap"),(0,o.kt)("p",null,"Now that you've created a wallet and acquired some XCH or CATs in your wallet, connecting your wallet to HashgreenSwap is the last step for you to go. Simply launch ",(0,o.kt)("a",{parentName:"p",href:"https://hash.green"},"HashgreenSwap")," and find the ",(0,o.kt)("strong",{parentName:"p"},"Connect Wallet")," button. Hit the button and a popup screen will show up asking you to choose a wallet to connect. Proceed with the wallet you wish to connect and follow the steps to complete the connection to HashgreenSwap."),(0,o.kt)("h2",{id:"start-using-hashgreenswap"},"Start Using HashgreenSwap"),(0,o.kt)("p",null,"Once you have successfully connected your wallet to HashgreenSwap, you can finally start your journey with ",(0,o.kt)("a",{parentName:"p",href:"https:/hash.green"},"HashgreenSwap"),"! Feel free to check out ",(0,o.kt)("a",{parentName:"p",href:"https://docs.hash.green/how-to-trade-on-hashgreenswap"},"How to Trade on HashgreenSwap")," and let the article guide you through various features of HashgreenSwap as well as the how-tos to seamlessly trade on HashgreenSwap."),(0,o.kt)("p",null,"For the instructions on how to test HashgreenSwap on Testnet, please check the document ",(0,o.kt)("a",{parentName:"p",href:"https://docs.hash.green/how-to-test-hashgreenswap-on-testnet"},"here"),"."))}S.isMDXComponent=!0}}]);