!function(){"use strict";var e,f,a,d,c,b={},t={};function n(e){var f=t[e];if(void 0!==f)return f.exports;var a=t[e]={exports:{}};return b[e].call(a.exports,a,a.exports,n),a.exports}n.m=b,e=[],n.O=function(f,a,d,c){if(!a){var b=1/0;for(u=0;u<e.length;u++){a=e[u][0],d=e[u][1],c=e[u][2];for(var t=!0,r=0;r<a.length;r++)(!1&c||b>=c)&&Object.keys(n.O).every((function(e){return n.O[e](a[r])}))?a.splice(r--,1):(t=!1,c<b&&(b=c));if(t){e.splice(u--,1);var o=d();void 0!==o&&(f=o)}}return f}c=c||0;for(var u=e.length;u>0&&e[u-1][2]>c;u--)e[u]=e[u-1];e[u]=[a,d,c]},n.n=function(e){var f=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(f,{a:f}),f},a=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},n.t=function(e,d){if(1&d&&(e=this(e)),8&d)return e;if("object"==typeof e&&e){if(4&d&&e.__esModule)return e;if(16&d&&"function"==typeof e.then)return e}var c=Object.create(null);n.r(c);var b={};f=f||[null,a({}),a([]),a(a)];for(var t=2&d&&e;"object"==typeof t&&!~f.indexOf(t);t=a(t))Object.getOwnPropertyNames(t).forEach((function(f){b[f]=function(){return e[f]}}));return b.default=function(){return e},n.d(c,b),c},n.d=function(e,f){for(var a in f)n.o(f,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:f[a]})},n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(f,a){return n.f[a](e,f),f}),[]))},n.u=function(e){return"assets/js/"+({16:"216e8404",53:"935f2afb",257:"b86de55e",269:"4ae51151",287:"d088d7de",349:"e7691700",368:"d645ac09",526:"bd4931e8",616:"67e62bc6",624:"6e0c34d8",692:"eab87c75",706:"ca9ef5b2",831:"c66d4388",989:"4902d660",999:"c3de632c",1010:"f3dff8a3",1147:"f29fb35a",1161:"227700d5",1282:"c833f18f",1345:"af9525ac",1392:"b1781427",1409:"654ddb62",1417:"eb9b576d",1451:"665f67d7",1517:"5c158c69",1619:"eeeee275",1661:"6f296a1f",1701:"f4897484",1814:"074712ff",1935:"0c0c7342",2016:"082e606f",2020:"6b976c3c",2092:"938b1267",2186:"ce331ff0",2271:"e5b4f20a",2495:"b5ac0ea1",2535:"814f3328",2563:"50b59e5a",2612:"d9d8cbcd",2687:"386427c2",2793:"9faeeea4",2897:"87b3fb16",3089:"a6aa9e1f",3176:"b691041a",3210:"f6bdb2ca",3221:"5a11a0da",3280:"1b5e2f2b",3305:"4e1ee12c",3418:"4befef19",3422:"21f6ee5f",3439:"a5a08ce1",3451:"e4cbda74",3563:"2131f4ed",3571:"16bf390c",3597:"cf7783af",3608:"9e4087bc",3646:"51ad53bd",3786:"c96abed4",3841:"aed1f96b",3870:"7dfdb0e6",3904:"0b190194",4013:"01a85c17",4031:"96a275b2",4033:"aa899379",4046:"283467cd",4073:"a8b4b62c",4075:"d299d9fa",4086:"9812d59b",4150:"b5463f3e",4273:"1128d874",4343:"f4498100",4382:"1d9551bb",4431:"dd649711",4536:"8df36641",4564:"f6117be5",4620:"356db401",4774:"e604ffb8",4795:"ee248d19",4880:"88bd4275",4996:"0a14fa6d",5013:"d9663629",5155:"3a113e3d",5180:"a6399f40",5329:"0b1a118b",5386:"c2948f62",5388:"dc96021a",5465:"6f7d398e",5899:"31880cd3",6017:"05d9e248",6018:"0b940b3c",6049:"14911cd9",6103:"ccc49370",6150:"c7ab6336",6153:"e3876e11",6172:"f305d9b7",6188:"c73b3cb4",6295:"179e8498",6349:"c3d91d7f",6391:"2dc2ba06",6515:"7702def5",6633:"1c3f0b5c",6657:"ed7612ae",6689:"028cdffb",6699:"c1fbf885",6779:"a1ee6ab2",6828:"a79a5077",6884:"00b3925a",7073:"58858129",7212:"1820a3e6",7219:"5a6f2885",7353:"e064cf58",7381:"607d35dd",7419:"edd3d196",7549:"98ccba1f",7556:"d6a5fd4a",7600:"22f3bd52",7650:"742cb702",7663:"3772899b",7666:"fd91c211",7730:"62ff46ff",7838:"1ed7eaf5",7843:"c73a2454",7862:"dff4fa13",7871:"64ec9f82",7879:"ad486d89",7918:"17896441",7923:"6e0b5c3f",7963:"f04693a3",7983:"ec2965f2",8e3:"343b811f",8108:"269bd08d",8140:"0196a3d5",8239:"6236d800",8264:"557a4225",8400:"205ba928",8430:"c5af11ce",8575:"e01f8684",8610:"6875c492",8625:"65216077",8746:"44c4698c",8829:"1d045e57",8903:"15a357e9",9051:"2171d9f0",9065:"290a92a2",9197:"d2779d68",9215:"2da7b18e",9300:"7e50ef22",9403:"cc1c1a94",9451:"a5f5587d",9471:"3b94cef3",9514:"1be78505",9530:"7a84216a",9599:"3bc9dd6d",9669:"d29ec3fe",9765:"92081427",9772:"1fe6d708",9817:"14eb3368",9901:"bf725104",9929:"32cf5928",9963:"e044e4bd"}[e]||e)+"."+{16:"08f8ba70",53:"1d16ac1a",257:"af18be6c",269:"00a6159c",287:"1ba37d2a",349:"ea19dbca",368:"0053b1ae",526:"cbc38e35",616:"2c4b60bf",624:"ce2fa786",692:"69d9aab5",706:"5921d1f8",831:"c98fc926",989:"f4a3afdd",999:"48933f1d",1010:"9d358bfc",1147:"c610e0a6",1161:"a185dda9",1282:"dacd6042",1345:"3e73aa97",1392:"cb532fbf",1409:"46fd3f3b",1417:"2f221a58",1451:"96ab5d02",1517:"6a5a310e",1619:"f783288e",1661:"52bde46f",1701:"43770a88",1814:"2e6f9f6a",1935:"44414d99",2016:"89ae196b",2020:"664250d5",2092:"621afe69",2186:"61b83d70",2271:"e8d36569",2495:"c776dbcc",2535:"05cbbe12",2563:"b4fe1a5e",2612:"b5c2fef6",2687:"16c88754",2793:"407f6ac3",2897:"84100682",3089:"c099eb7f",3176:"7158f745",3210:"faa2edac",3221:"57a1db49",3280:"9848a6f1",3305:"d3afd2ba",3418:"06e72d7e",3422:"4e42a6ae",3439:"09e76225",3451:"7931e490",3563:"de132506",3571:"844055c0",3597:"15c2cfdb",3608:"3c2fa27c",3646:"1531a087",3786:"7cff40a3",3841:"4d34c40a",3870:"f2d63edb",3904:"ebe6850b",4013:"c0cc76ac",4031:"0c531e72",4033:"d26a036a",4046:"152df31b",4073:"621c732c",4075:"9951fc88",4086:"e8e3738d",4150:"652b343b",4273:"53830dc0",4343:"488cc7c6",4382:"6cfffa74",4431:"684bcde9",4536:"68d21d06",4564:"9add27ab",4620:"f58781bb",4774:"607b15bc",4795:"10228877",4880:"0f4a7c80",4972:"d3bd0996",4996:"adf0c78a",5013:"7e15382c",5155:"920bb50c",5180:"9b413680",5329:"938039ea",5386:"2bc0cd9a",5388:"57912bff",5465:"0e0431b8",5899:"184bd5a1",6017:"11bdfe06",6018:"efab2208",6048:"3247d34a",6049:"b205efc8",6103:"c33ec7bd",6150:"08c862f7",6153:"3ff95ce7",6172:"19ad9de2",6188:"e733def8",6295:"2346f5b8",6349:"79bcd0fe",6391:"3101625c",6515:"6f50e44d",6633:"f4a88d56",6657:"d96800be",6689:"06b542cb",6699:"33dbe5c9",6779:"4988ba15",6828:"c983ff80",6884:"c572a0d2",7073:"4d6e6f7a",7212:"4a026323",7219:"b59f6f90",7353:"b756e0dd",7378:"050236f6",7381:"02ebef0d",7419:"8ccdd126",7549:"65a2b9e8",7556:"a2d17772",7600:"02631308",7650:"49d6360d",7663:"797ece13",7666:"bb371ba9",7730:"2d1cd999",7838:"18dbcba2",7843:"6f43de1f",7862:"aaa8c004",7871:"e8f50b62",7879:"3b2bfbb9",7918:"9f8c05a5",7923:"621b0f91",7963:"96273907",7983:"f6fdc576",8e3:"61c8c84d",8108:"d9b9a835",8140:"3e9dfcae",8239:"1149cd9f",8264:"36d53cec",8400:"13e5dc18",8430:"2ca12979",8575:"344350cd",8610:"7bd7d492",8625:"3fca0017",8746:"f69322dd",8829:"43b565ec",8903:"7fcb3f50",9051:"5c3addd4",9065:"8892f8c3",9197:"b780c5a3",9215:"b02d97e8",9265:"12582f45",9300:"8fd28a73",9403:"4e6bf8f7",9451:"01c5cafd",9471:"d1454143",9514:"9822e377",9530:"cd4bfdcd",9599:"5c7df1d2",9669:"e254de1e",9765:"9902bff1",9772:"63a89333",9817:"716b3197",9901:"79e56476",9929:"e77b3488",9963:"ba78b1e3"}[e]+".js"},n.miniCssF=function(e){},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=function(e,f){return Object.prototype.hasOwnProperty.call(e,f)},d={},c="website:",n.l=function(e,f,a,b){if(d[e])d[e].push(f);else{var t,r;if(void 0!==a)for(var o=document.getElementsByTagName("script"),u=0;u<o.length;u++){var i=o[u];if(i.getAttribute("src")==e||i.getAttribute("data-webpack")==c+a){t=i;break}}t||(r=!0,(t=document.createElement("script")).charset="utf-8",t.timeout=120,n.nc&&t.setAttribute("nonce",n.nc),t.setAttribute("data-webpack",c+a),t.src=e),d[e]=[f];var l=function(f,a){t.onerror=t.onload=null,clearTimeout(s);var c=d[e];if(delete d[e],t.parentNode&&t.parentNode.removeChild(t),c&&c.forEach((function(e){return e(a)})),f)return f(a)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:t}),12e4);t.onerror=l.bind(null,t.onerror),t.onload=l.bind(null,t.onload),r&&document.head.appendChild(t)}},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="/zh-Hant/",n.gca=function(e){return e={17896441:"7918",58858129:"7073",65216077:"8625",92081427:"9765","216e8404":"16","935f2afb":"53",b86de55e:"257","4ae51151":"269",d088d7de:"287",e7691700:"349",d645ac09:"368",bd4931e8:"526","67e62bc6":"616","6e0c34d8":"624",eab87c75:"692",ca9ef5b2:"706",c66d4388:"831","4902d660":"989",c3de632c:"999",f3dff8a3:"1010",f29fb35a:"1147","227700d5":"1161",c833f18f:"1282",af9525ac:"1345",b1781427:"1392","654ddb62":"1409",eb9b576d:"1417","665f67d7":"1451","5c158c69":"1517",eeeee275:"1619","6f296a1f":"1661",f4897484:"1701","074712ff":"1814","0c0c7342":"1935","082e606f":"2016","6b976c3c":"2020","938b1267":"2092",ce331ff0:"2186",e5b4f20a:"2271",b5ac0ea1:"2495","814f3328":"2535","50b59e5a":"2563",d9d8cbcd:"2612","386427c2":"2687","9faeeea4":"2793","87b3fb16":"2897",a6aa9e1f:"3089",b691041a:"3176",f6bdb2ca:"3210","5a11a0da":"3221","1b5e2f2b":"3280","4e1ee12c":"3305","4befef19":"3418","21f6ee5f":"3422",a5a08ce1:"3439",e4cbda74:"3451","2131f4ed":"3563","16bf390c":"3571",cf7783af:"3597","9e4087bc":"3608","51ad53bd":"3646",c96abed4:"3786",aed1f96b:"3841","7dfdb0e6":"3870","0b190194":"3904","01a85c17":"4013","96a275b2":"4031",aa899379:"4033","283467cd":"4046",a8b4b62c:"4073",d299d9fa:"4075","9812d59b":"4086",b5463f3e:"4150","1128d874":"4273",f4498100:"4343","1d9551bb":"4382",dd649711:"4431","8df36641":"4536",f6117be5:"4564","356db401":"4620",e604ffb8:"4774",ee248d19:"4795","88bd4275":"4880","0a14fa6d":"4996",d9663629:"5013","3a113e3d":"5155",a6399f40:"5180","0b1a118b":"5329",c2948f62:"5386",dc96021a:"5388","6f7d398e":"5465","31880cd3":"5899","05d9e248":"6017","0b940b3c":"6018","14911cd9":"6049",ccc49370:"6103",c7ab6336:"6150",e3876e11:"6153",f305d9b7:"6172",c73b3cb4:"6188","179e8498":"6295",c3d91d7f:"6349","2dc2ba06":"6391","7702def5":"6515","1c3f0b5c":"6633",ed7612ae:"6657","028cdffb":"6689",c1fbf885:"6699",a1ee6ab2:"6779",a79a5077:"6828","00b3925a":"6884","1820a3e6":"7212","5a6f2885":"7219",e064cf58:"7353","607d35dd":"7381",edd3d196:"7419","98ccba1f":"7549",d6a5fd4a:"7556","22f3bd52":"7600","742cb702":"7650","3772899b":"7663",fd91c211:"7666","62ff46ff":"7730","1ed7eaf5":"7838",c73a2454:"7843",dff4fa13:"7862","64ec9f82":"7871",ad486d89:"7879","6e0b5c3f":"7923",f04693a3:"7963",ec2965f2:"7983","343b811f":"8000","269bd08d":"8108","0196a3d5":"8140","6236d800":"8239","557a4225":"8264","205ba928":"8400",c5af11ce:"8430",e01f8684:"8575","6875c492":"8610","44c4698c":"8746","1d045e57":"8829","15a357e9":"8903","2171d9f0":"9051","290a92a2":"9065",d2779d68:"9197","2da7b18e":"9215","7e50ef22":"9300",cc1c1a94:"9403",a5f5587d:"9451","3b94cef3":"9471","1be78505":"9514","7a84216a":"9530","3bc9dd6d":"9599",d29ec3fe:"9669","1fe6d708":"9772","14eb3368":"9817",bf725104:"9901","32cf5928":"9929",e044e4bd:"9963"}[e]||e,n.p+n.u(e)},function(){var e={1303:0,532:0};n.f.j=function(f,a){var d=n.o(e,f)?e[f]:void 0;if(0!==d)if(d)a.push(d[2]);else if(/^(1303|532)$/.test(f))e[f]=0;else{var c=new Promise((function(a,c){d=e[f]=[a,c]}));a.push(d[2]=c);var b=n.p+n.u(f),t=new Error;n.l(b,(function(a){if(n.o(e,f)&&(0!==(d=e[f])&&(e[f]=void 0),d)){var c=a&&("load"===a.type?"missing":a.type),b=a&&a.target&&a.target.src;t.message="Loading chunk "+f+" failed.\n("+c+": "+b+")",t.name="ChunkLoadError",t.type=c,t.request=b,d[1](t)}}),"chunk-"+f,f)}},n.O.j=function(f){return 0===e[f]};var f=function(f,a){var d,c,b=a[0],t=a[1],r=a[2],o=0;if(b.some((function(f){return 0!==e[f]}))){for(d in t)n.o(t,d)&&(n.m[d]=t[d]);if(r)var u=r(n)}for(f&&f(a);o<b.length;o++)c=b[o],n.o(e,c)&&e[c]&&e[c][0](),e[c]=0;return n.O(u)},a=self.webpackChunkwebsite=self.webpackChunkwebsite||[];a.forEach(f.bind(null,0)),a.push=f.bind(null,a.push.bind(a))}()}();