"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1700],{3905:function(t,e,r){r.d(e,{Zo:function(){return d},kt:function(){return m}});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var c=n.createContext({}),p=function(t){var e=n.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},d=function(t){var e=p(t.components);return n.createElement(c.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,c=t.parentName,d=l(t,["components","mdxType","originalType","parentName"]),u=p(r),m=a,f=u["".concat(c,".").concat(m)]||u[m]||s[m]||o;return r?n.createElement(f,i(i({ref:e},d),{},{components:r})):n.createElement(f,i({ref:e},d))}));function m(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},7247:function(t,e,r){r.r(e),r.d(e,{assets:function(){return d},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return s}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],l={},c="DelayedPCVMover",p={unversionedId:"protocol/smart-contract-api/pcv/utils/DelayedPCVMover",id:"protocol/smart-contract-api/pcv/utils/DelayedPCVMover",title:"DelayedPCVMover",description:"Functions",source:"@site/docs/protocol/smart-contract-api/pcv/utils/DelayedPCVMover.md",sourceDirName:"protocol/smart-contract-api/pcv/utils",slug:"/protocol/smart-contract-api/pcv/utils/DelayedPCVMover",permalink:"/docs/docs/protocol/smart-contract-api/pcv/utils/DelayedPCVMover",editUrl:"https://github.com/fei-protocol/docs/tree/gh-pages/docs/protocol/smart-contract-api/pcv/utils/DelayedPCVMover.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"UniswapPCVDeposit",permalink:"/docs/docs/protocol/smart-contract-api/pcv/uniswap/UniswapPCVDeposit"},next:{title:"ERC20Dripper",permalink:"/docs/docs/protocol/smart-contract-api/pcv/utils/ERC20Dripper"}},d={},s=[{value:"Functions",id:"functions",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"withdrawRatio",id:"withdrawratio",level:3}],u={toc:s};function m(t){var e=t.components,r=(0,a.Z)(t,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"delayedpcvmover"},"DelayedPCVMover"),(0,o.kt)("h2",{id:"functions"},"Functions"),(0,o.kt)("h3",{id:"constructor"},"constructor"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"function constructor(\n    address _core,\n    uint256 _deadline,\n    contract RatioPCVControllerV2 _controller,\n    contract IPCVDeposit _deposit,\n    address _target,\n    uint256 _basisPoints\n) public\n")),(0,o.kt)("p",null,"DelayedPCVMover constructor"),(0,o.kt)("h4",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"_core")),(0,o.kt)("td",{parentName:"tr",align:"left"},"address"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Fei Core for reference")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"_deadline")),(0,o.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,o.kt)("td",{parentName:"tr",align:"left"},"to wait before PCV movement")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"_controller")),(0,o.kt)("td",{parentName:"tr",align:"left"},"contract RatioPCVControllerV2"),(0,o.kt)("td",{parentName:"tr",align:"left"},"used for moving funds")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"_deposit")),(0,o.kt)("td",{parentName:"tr",align:"left"},"contract IPCVDeposit"),(0,o.kt)("td",{parentName:"tr",align:"left"},"used to withdraw funds from")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"_target")),(0,o.kt)("td",{parentName:"tr",align:"left"},"address"),(0,o.kt)("td",{parentName:"tr",align:"left"},"to send funds to")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"_basisPoints")),(0,o.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,o.kt)("td",{parentName:"tr",align:"left"},"used to know what ratio of funds to move")))),(0,o.kt)("h3",{id:"withdrawratio"},"withdrawRatio"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"function withdrawRatio() public\n")),(0,o.kt)("p",null,"PCV movement by calling withdrawRatio on the PCVController.\nThis will enforce the deadline check, and renounce to the\nPCV_CONTROLLER_ROLE role after a successful call."))}m.isMDXComponent=!0}}]);