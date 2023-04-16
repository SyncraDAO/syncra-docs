"use strict";(self.webpackChunksyncra_docs=self.webpackChunksyncra_docs||[]).push([[8517],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),i=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=i(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=i(r),m=a,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||o;return r?n.createElement(f,c(c({ref:t},l),{},{components:r})):n.createElement(f,c({ref:t},l))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[p]="string"==typeof e?e:a,c[1]=s;for(var i=2;i<o;i++)c[i]=r[i];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1805:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>i});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:1},c="Types and Data Structures",s={unversionedId:"technical/smart-contracts/structures/structures",id:"technical/smart-contracts/structures/structures",title:"Types and Data Structures",description:"ProposalId",source:"@site/docs/technical/smart-contracts/structures/structures.md",sourceDirName:"technical/smart-contracts/structures",slug:"/technical/smart-contracts/structures/",permalink:"/syncra-docs/technical/smart-contracts/structures/",draft:!1,editUrl:"https://github.com/jsk28/syncra-docs/edit/main/docs/technical/smart-contracts/structures/structures.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udcb0 Treasury",permalink:"/syncra-docs/treasury"},next:{title:"Votes",permalink:"/syncra-docs/technical/smart-contracts/traits/votes"}},u={},i=[{value:"ProposalId",id:"proposalid",level:3},{value:"ProposalCore",id:"proposalcore",level:3},{value:"OptionId",id:"optionid",level:3},{value:"Transaction",id:"transaction",level:3}],l={toc:i},p="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"types-and-data-structures"},"Types and Data Structures"),(0,a.kt)("h3",{id:"proposalid"},"ProposalId"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"pub type ProposalId = Hash;\n")),(0,a.kt)("h3",{id:"proposalcore"},"ProposalCore"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"pub struct ProposalCore {\n    pub vote_start: Timestamp,\n    pub vote_end: Timestamp,\n    pub executed: bool,\n    pub canceled: bool,\n}\n")),(0,a.kt)("h3",{id:"optionid"},"OptionId"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"pub type OptionId = u8;\n")),(0,a.kt)("h3",{id:"transaction"},"Transaction"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"pub struct Transaction {\n    /// The `AccountId` of the contract that is called in this transaction.\n    pub callee: AccountId,\n    /// The selector bytes that identifies the function of the callee that should be called.\n    pub selector: [u8; 4],\n    /// The SCALE encoded parameters that are passed to the called function.\n    pub input: Vec<u8>,\n    /// The amount of chain balance that is transferred to the callee.\n    pub transferred_value: Balance,\n    /// Gas limit for the execution of the call.\n    pub gas_limit: u64,\n}\n")))}d.isMDXComponent=!0}}]);