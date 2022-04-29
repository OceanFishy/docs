"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8236],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return s}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=r.createContext({}),c=function(e){var t=r.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,d=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(a),s=n,k=m["".concat(d,".").concat(s)]||m[s]||u[s]||l;return a?r.createElement(k,o(o({ref:t},p),{},{components:a})):r.createElement(k,o({ref:t},p))}));function s(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var c=2;c<l;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},7703:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return d},default:function(){return s},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u}});var r=a(7462),n=a(3366),l=(a(7294),a(3905)),o=["components"],i={},d="Delegatee",c={unversionedId:"protocol/smart-contract-api/timelocks/TimelockedDelegator",id:"protocol/smart-contract-api/timelocks/TimelockedDelegator",title:"Delegatee",description:"Functions",source:"@site/docs/protocol/smart-contract-api/timelocks/TimelockedDelegator.md",sourceDirName:"protocol/smart-contract-api/timelocks",slug:"/protocol/smart-contract-api/timelocks/TimelockedDelegator",permalink:"/docs/docs/protocol/smart-contract-api/timelocks/TimelockedDelegator",editUrl:"https://github.com/fei-protocol/docs/tree/gh-pages/docs/protocol/smart-contract-api/timelocks/TimelockedDelegator.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"QuadraticTokenTimelock",permalink:"/docs/docs/protocol/smart-contract-api/timelocks/QuadraticTokenTimelock"},next:{title:"TokenTimelock",permalink:"/docs/docs/protocol/smart-contract-api/timelocks/TokenTimelock"}},p={},u=[{value:"Functions",id:"functions",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"withdraw",id:"withdraw",level:3},{value:"Functions",id:"functions-1",level:2},{value:"constructor",id:"constructor-1",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"delegate",id:"delegate",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"undelegate",id:"undelegate",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Return Values",id:"return-values",level:4},{value:"totalToken",id:"totaltoken",level:3},{value:"acceptBeneficiary",id:"acceptbeneficiary",level:3},{value:"_tribeBalance",id:"_tribebalance",level:3}],m={toc:u};function s(e){var t=e.components,a=(0,n.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"delegatee"},"Delegatee"),(0,l.kt)("h2",{id:"functions"},"Functions"),(0,l.kt)("h3",{id:"constructor"},"constructor"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function constructor(\n    address _delegatee,\n    address _tribe\n) public\n")),(0,l.kt)("p",null,"Delegatee constructor"),(0,l.kt)("h4",{id:"parameters"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"_delegatee")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"},"the address to delegate TRIBE to")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"_tribe")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"},"the TRIBE token address")))),(0,l.kt)("h3",{id:"withdraw"},"withdraw"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function withdraw() public\n")),(0,l.kt)("p",null,"send TRIBE back to timelock and selfdestruct"),(0,l.kt)("h1",{id:"timelockeddelegator"},"TimelockedDelegator"),(0,l.kt)("p",null,"allows the timelocked TRIBE to be delegated by the beneficiary while locked"),(0,l.kt)("h2",{id:"functions-1"},"Functions"),(0,l.kt)("h3",{id:"constructor-1"},"constructor"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function constructor(\n    address _tribe,\n    address _beneficiary,\n    uint256 _duration\n) public\n")),(0,l.kt)("p",null,"Delegatee constructor"),(0,l.kt)("h4",{id:"parameters-1"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"_tribe")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"},"the TRIBE token address")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"_beneficiary")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"},"default delegate, admin, and timelock beneficiary")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"_duration")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"},"duration of the token timelock window")))),(0,l.kt)("h3",{id:"delegate"},"delegate"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function delegate(\n    address delegatee,\n    uint256 amount\n) public\n")),(0,l.kt)("p",null,"delegate locked TRIBE to a delegatee"),(0,l.kt)("h4",{id:"parameters-2"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"delegatee")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"},"the target address to delegate to")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"amount")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"},"the amount of TRIBE to delegate. Will increment existing delegated TRIBE")))),(0,l.kt)("h3",{id:"undelegate"},"undelegate"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function undelegate(\n    address delegatee\n) public returns (uint256)\n")),(0,l.kt)("p",null,"return delegated TRIBE to the timelock"),(0,l.kt)("h4",{id:"parameters-3"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"delegatee")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"},"the target address to undelegate from")))),(0,l.kt)("h4",{id:"return-values"},"Return Values"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"[0]")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"},"the amount of TRIBE returned")))),(0,l.kt)("h3",{id:"totaltoken"},"totalToken"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function totalToken() public returns (uint256)\n")),(0,l.kt)("p",null,"calculate total TRIBE held plus delegated"),(0,l.kt)("p",null,"used by LinearTokenTimelock to determine the released amount"),(0,l.kt)("h3",{id:"acceptbeneficiary"},"acceptBeneficiary"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function acceptBeneficiary() public\n")),(0,l.kt)("p",null,"accept beneficiary role over timelocked TRIBE. Delegates all held (non-subdelegated) tribe to beneficiary"),(0,l.kt)("h3",{id:"_tribebalance"},"_tribeBalance"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function _tribeBalance() internal returns (uint256)\n")))}s.isMDXComponent=!0}}]);