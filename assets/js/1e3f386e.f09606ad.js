"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1881],{3905:function(t,e,a){a.d(e,{Zo:function(){return m},kt:function(){return u}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),d=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=d(t.components);return n.createElement(p.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),s=d(a),u=r,g=s["".concat(p,".").concat(u)]||s[u]||k[u]||l;return a?n.createElement(g,i(i({ref:e},m),{},{components:a})):n.createElement(g,i({ref:e},m))}));function u(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=s;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},6106:function(t,e,a){a.r(e),a.d(e,{assets:function(){return m},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return k}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),i=["components"],o={},p="IPoolManager",d={unversionedId:"protocol/smart-contract-api/pcv/angle/AngleUniswapPCVDeposit",id:"protocol/smart-contract-api/pcv/angle/AngleUniswapPCVDeposit",title:"IPoolManager",description:"Functions",source:"@site/docs/protocol/smart-contract-api/pcv/angle/AngleUniswapPCVDeposit.md",sourceDirName:"protocol/smart-contract-api/pcv/angle",slug:"/protocol/smart-contract-api/pcv/angle/AngleUniswapPCVDeposit",permalink:"/docs/docs/protocol/smart-contract-api/pcv/angle/AngleUniswapPCVDeposit",editUrl:"https://github.com/fei-protocol/docs/tree/gh-pages/docs/protocol/smart-contract-api/pcv/angle/AngleUniswapPCVDeposit.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"LendingPool",permalink:"/docs/docs/protocol/smart-contract-api/pcv/aave/AavePCVDeposit"},next:{title:"GaugeLens",permalink:"/docs/docs/protocol/smart-contract-api/pcv/angle/GaugeLens"}},m={},k=[{value:"Functions",id:"functions",level:2},{value:"token",id:"token",level:3},{value:"Functions",id:"functions-1",level:2},{value:"agToken",id:"agtoken",level:3},{value:"mint",id:"mint",level:3},{value:"Parameters",id:"parameters",level:4},{value:"burn",id:"burn",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"unpause",id:"unpause",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Functions",id:"functions-2",level:2},{value:"stakingToken",id:"stakingtoken",level:3},{value:"balanceOf",id:"balanceof",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"stake",id:"stake",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"withdraw",id:"withdraw",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"getReward",id:"getreward",level:3},{value:"Functions",id:"functions-3",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters-6",level:4},{value:"claimRewards",id:"claimrewards",level:3},{value:"mintAgToken",id:"mintagtoken",level:3},{value:"Parameters",id:"parameters-7",level:4},{value:"burnAgToken",id:"burnagtoken",level:3},{value:"Parameters",id:"parameters-8",level:4},{value:"burnAgTokenAll",id:"burnagtokenall",level:3},{value:"setPair",id:"setpair",level:3},{value:"Parameters",id:"parameters-9",level:4},{value:"setStakingRewards",id:"setstakingrewards",level:3},{value:"Parameters",id:"parameters-10",level:4},{value:"setPoolManager",id:"setpoolmanager",level:3},{value:"Parameters",id:"parameters-11",level:4},{value:"liquidityOwned",id:"liquidityowned",level:3},{value:"Return Values",id:"return-values",level:4},{value:"_removeLiquidity",id:"_removeliquidity",level:3},{value:"Parameters",id:"parameters-12",level:4},{value:"_addLiquidity",id:"_addliquidity",level:3},{value:"Parameters",id:"parameters-13",level:4}],s={toc:k};function u(t){var e=t.components,a=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"ipoolmanager"},"IPoolManager"),(0,l.kt)("h2",{id:"functions"},"Functions"),(0,l.kt)("h3",{id:"token"},"token"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function token() external returns (address)\n")),(0,l.kt)("h1",{id:"istablemaster"},"IStableMaster"),(0,l.kt)("h2",{id:"functions-1"},"Functions"),(0,l.kt)("h3",{id:"agtoken"},"agToken"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function agToken() external returns (address)\n")),(0,l.kt)("h3",{id:"mint"},"mint"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function mint(\n    uint256 amount,\n    address user,\n    contract IPoolManager poolManager,\n    uint256 minStableAmount\n) external\n")),(0,l.kt)("h4",{id:"parameters"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"amount")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"user")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"poolManager")),(0,l.kt)("td",{parentName:"tr",align:"left"},"contract IPoolManager"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"minStableAmount")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("h3",{id:"burn"},"burn"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function burn(\n    uint256 amount,\n    address burner,\n    address dest,\n    contract IPoolManager poolManager,\n    uint256 minCollatAmount\n) external\n")),(0,l.kt)("h4",{id:"parameters-1"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"amount")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"burner")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"dest")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"poolManager")),(0,l.kt)("td",{parentName:"tr",align:"left"},"contract IPoolManager"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"minCollatAmount")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("h3",{id:"unpause"},"unpause"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function unpause(\n    bytes32 agent,\n    contract IPoolManager poolManager\n) external\n")),(0,l.kt)("h4",{id:"parameters-2"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"agent")),(0,l.kt)("td",{parentName:"tr",align:"left"},"bytes32"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"poolManager")),(0,l.kt)("td",{parentName:"tr",align:"left"},"contract IPoolManager"),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("h1",{id:"istakingrewards"},"IStakingRewards"),(0,l.kt)("h2",{id:"functions-2"},"Functions"),(0,l.kt)("h3",{id:"stakingtoken"},"stakingToken"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function stakingToken() external returns (address)\n")),(0,l.kt)("h3",{id:"balanceof"},"balanceOf"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function balanceOf(\n    address account\n) external returns (uint256)\n")),(0,l.kt)("h4",{id:"parameters-3"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"account")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("h3",{id:"stake"},"stake"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function stake(\n    uint256 amount\n) external\n")),(0,l.kt)("h4",{id:"parameters-4"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"amount")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("h3",{id:"withdraw"},"withdraw"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function withdraw(\n    uint256 amount\n) external\n")),(0,l.kt)("h4",{id:"parameters-5"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"amount")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("h3",{id:"getreward"},"getReward"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function getReward() external\n")),(0,l.kt)("h1",{id:"angleuniswappcvdeposit"},"AngleUniswapPCVDeposit"),(0,l.kt)("h2",{id:"functions-3"},"Functions"),(0,l.kt)("h3",{id:"constructor"},"constructor"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function constructor(\n    address _core,\n    address _pair,\n    address _router,\n    address _oracle,\n    address _backupOracle,\n    uint256 _maxBasisPointsFromPegLP,\n    contract IStableMaster _stableMaster,\n    contract IPoolManager _poolManager,\n    contract IStakingRewards _stakingRewards\n) public\n")),(0,l.kt)("p",null,"Uniswap PCV Deposit constructor"),(0,l.kt)("h4",{id:"parameters-6"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"_core")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Fei Core for reference")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"_pair")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Uniswap Pair to deposit to")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"_router")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Uniswap Router")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"_oracle")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"},"oracle for reference")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"_backupOracle")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"},"the backup oracle to reference")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"_maxBasisPointsFromPegLP")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"},"the max basis points of slippage from peg allowed on LP deposit")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"_stableMaster")),(0,l.kt)("td",{parentName:"tr",align:"left"},"contract IStableMaster"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"_poolManager")),(0,l.kt)("td",{parentName:"tr",align:"left"},"contract IPoolManager"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"_stakingRewards")),(0,l.kt)("td",{parentName:"tr",align:"left"},"contract IStakingRewards"),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("h3",{id:"claimrewards"},"claimRewards"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function claimRewards() external\n")),(0,l.kt)("p",null,"claim staking rewards"),(0,l.kt)("h3",{id:"mintagtoken"},"mintAgToken"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function mintAgToken(\n    uint256 amountFei\n) public\n")),(0,l.kt)("p",null,"mint agToken from FEI"),(0,l.kt)("p",null,"the call will revert if slippage is too high compared to oracle."),(0,l.kt)("h4",{id:"parameters-7"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"amountFei")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("h3",{id:"burnagtoken"},"burnAgToken"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function burnAgToken(\n    uint256 amountAgToken\n) public\n")),(0,l.kt)("p",null,"burn agToken for FEI"),(0,l.kt)("p",null,"the call will revert if slippage is too high compared to oracle"),(0,l.kt)("h4",{id:"parameters-8"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"amountAgToken")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("h3",{id:"burnagtokenall"},"burnAgTokenAll"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function burnAgTokenAll() external\n")),(0,l.kt)("p",null,"burn ALL agToken held for FEI"),(0,l.kt)("p",null,"see burnAgToken(uint256 amount)."),(0,l.kt)("h3",{id:"setpair"},"setPair"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function setPair(\n    address _pair\n) public\n")),(0,l.kt)("p",null,"set the new pair contract"),(0,l.kt)("p",null,"also approves the router for the new pair token and underlying token"),(0,l.kt)("h4",{id:"parameters-9"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"_pair")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"},"the new pair")))),(0,l.kt)("h3",{id:"setstakingrewards"},"setStakingRewards"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function setStakingRewards(\n    contract IStakingRewards _stakingRewards\n) public\n")),(0,l.kt)("p",null,"set a new stakingRewards address"),(0,l.kt)("h4",{id:"parameters-10"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"_stakingRewards")),(0,l.kt)("td",{parentName:"tr",align:"left"},"contract IStakingRewards"),(0,l.kt)("td",{parentName:"tr",align:"left"},"the new stakingRewards")))),(0,l.kt)("h3",{id:"setpoolmanager"},"setPoolManager"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function setPoolManager(\n    contract IPoolManager _poolManager\n) public\n")),(0,l.kt)("p",null,"set a new poolManager address"),(0,l.kt)("h4",{id:"parameters-11"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"_poolManager")),(0,l.kt)("td",{parentName:"tr",align:"left"},"contract IPoolManager"),(0,l.kt)("td",{parentName:"tr",align:"left"},"the new poolManager")))),(0,l.kt)("h3",{id:"liquidityowned"},"liquidityOwned"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function liquidityOwned() public returns (uint256)\n")),(0,l.kt)("p",null,"amount of pair liquidity owned by this contract"),(0,l.kt)("h4",{id:"return-values"},"Return Values"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"[0]")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"},"amount of LP tokens")))),(0,l.kt)("h3",{id:"_removeliquidity"},"_removeLiquidity"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function _removeLiquidity(\n    uint256 liquidity\n) internal returns (uint256)\n")),(0,l.kt)("h4",{id:"parameters-12"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"liquidity")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("h3",{id:"_addliquidity"},"_addLiquidity"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function _addLiquidity(\n    uint256 tokenAmount,\n    uint256 feiAmount\n) internal\n")),(0,l.kt)("h4",{id:"parameters-13"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"tokenAmount")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"feiAmount")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"})))))}u.isMDXComponent=!0}}]);