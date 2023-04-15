"use strict";(self.webpackChunksyncra_docs=self.webpackChunksyncra_docs||[]).push([[741],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>y});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),g=l(r),d=a,y=g["".concat(c,".").concat(d)]||g[d]||u[d]||o;return r?n.createElement(y,s(s({ref:t},p),{},{components:r})):n.createElement(y,s({ref:t},p))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[g]="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3296:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:1},s="Voting Strategies",i={unversionedId:"strategies/voting-strategies",id:"version-0.1.0/strategies/voting-strategies",title:"Voting Strategies",description:"At the moment, Syncra offers 2 strategies to choose from when creating a DAO.",source:"@site/versioned_docs/version-0.1.0/strategies/voting-strategies.md",sourceDirName:"strategies",slug:"/strategies/voting-strategies",permalink:"/syncra-docs/0.1.0/strategies/voting-strategies",draft:!1,editUrl:"https://github.com/jsk28/syncra-docs/edit/main/versioned_docs/version-0.1.0/strategies/voting-strategies.md",tags:[],version:"0.1.0",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udcb0 Treasury",permalink:"/syncra-docs/0.1.0/treasury"},next:{title:"Extra",permalink:"/syncra-docs/0.1.0/strategies/todo"}},c={},l=[{value:"PSP22-based strategy",id:"psp22-based-strategy",level:3},{value:"Whitelist-based strategy",id:"whitelist-based-strategy",level:3}],p={toc:l},g="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(g,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"voting-strategies"},"Voting Strategies"),(0,a.kt)("p",null,"At the moment, Syncra offers 2 strategies to choose from when creating a DAO."),(0,a.kt)("h3",{id:"psp22-based-strategy"},"PSP22-based strategy"),(0,a.kt)("p",null,"In this strategy, each PSP22 token held by a wallet represents a certain amount of voting power. For example, if one PSP22 token is equivalent to one vote, a wallet holding 100 PSP22 tokens would have voting power equal to 100.\nBy using PSP22 tokens as a basis for voting power, the strategy ensures that voting power is distributed based on ownership of the underlying asset, which can incentivize token holders to act in the best interest of the organization."),(0,a.kt)("h3",{id:"whitelist-based-strategy"},"Whitelist-based strategy"),(0,a.kt)("p",null,"In this strategy, each wallet on the whitelist is granted an equal vote. By using a whitelist-based strategy, the founder of the DAO can ensure that only approved and trusted participants are allowed to vote."))}u.isMDXComponent=!0}}]);