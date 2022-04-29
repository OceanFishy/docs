"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8911],{3905:function(t,e,a){a.d(e,{Zo:function(){return m},kt:function(){return u}});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var p=r.createContext({}),d=function(t){var e=r.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=d(t.components);return r.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,p=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),k=d(a),u=n,N=k["".concat(p,".").concat(u)]||k[u]||s[u]||l;return a?r.createElement(N,i(i({ref:e},m),{},{components:a})):r.createElement(N,i({ref:e},m))}));function u(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,i=new Array(l);i[0]=k;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:n,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},6661:function(t,e,a){a.r(e),a.d(e,{assets:function(){return m},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return s}});var r=a(7462),n=a(3366),l=(a(7294),a(3905)),i=["components"],o={},p="FeiDAO",d={unversionedId:"protocol/smart-contract-api/dao/governor/FeiDAO",id:"protocol/smart-contract-api/dao/governor/FeiDAO",title:"FeiDAO",description:"Functions",source:"@site/docs/protocol/smart-contract-api/dao/governor/FeiDAO.md",sourceDirName:"protocol/smart-contract-api/dao/governor",slug:"/protocol/smart-contract-api/dao/governor/FeiDAO",permalink:"/docs/docs/protocol/smart-contract-api/dao/governor/FeiDAO",editUrl:"https://github.com/fei-protocol/docs/tree/gh-pages/docs/protocol/smart-contract-api/dao/governor/FeiDAO.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"TribeRoles",permalink:"/docs/docs/protocol/smart-contract-api/core/TribeRoles"},next:{title:"GovernorAlpha",permalink:"/docs/docs/protocol/smart-contract-api/dao/governor/GovernorAlpha"}},m={},s=[{value:"Functions",id:"functions",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"votingDelay",id:"votingdelay",level:3},{value:"votingPeriod",id:"votingperiod",level:3},{value:"quorum",id:"quorum",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"proposalThreshold",id:"proposalthreshold",level:3},{value:"setVotingDelay",id:"setvotingdelay",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"setVotingPeriod",id:"setvotingperiod",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"setQuorum",id:"setquorum",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"setProposalThreshold",id:"setproposalthreshold",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"__rollback",id:"__rollback",level:3},{value:"Parameters",id:"parameters-6",level:4},{value:"__executeRollback",id:"__executerollback",level:3},{value:"getVotes",id:"getvotes",level:3},{value:"Parameters",id:"parameters-7",level:4},{value:"state",id:"state",level:3},{value:"Parameters",id:"parameters-8",level:4},{value:"propose",id:"propose",level:3},{value:"Parameters",id:"parameters-9",level:4},{value:"_execute",id:"_execute",level:3},{value:"Parameters",id:"parameters-10",level:4},{value:"_cancel",id:"_cancel",level:3},{value:"Parameters",id:"parameters-11",level:4},{value:"_executor",id:"_executor",level:3},{value:"supportsInterface",id:"supportsinterface",level:3},{value:"Parameters",id:"parameters-12",level:4},{value:"Events",id:"events",level:2},{value:"QuorumUpdated",id:"quorumupdated",level:3},{value:"Parameters",id:"parameters-13",level:4},{value:"VotingDelayUpdated",id:"votingdelayupdated",level:3},{value:"Parameters",id:"parameters-14",level:4},{value:"VotingPeriodUpdated",id:"votingperiodupdated",level:3},{value:"Parameters",id:"parameters-15",level:4},{value:"ProposalThresholdUpdated",id:"proposalthresholdupdated",level:3},{value:"Parameters",id:"parameters-16",level:4},{value:"RollbackQueued",id:"rollbackqueued",level:3},{value:"Parameters",id:"parameters-17",level:4},{value:"Rollback",id:"rollback",level:3}],k={toc:s};function u(t){var e=t.components,a=(0,n.Z)(t,i);return(0,l.kt)("wrapper",(0,r.Z)({},k,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"feidao"},"FeiDAO"),(0,l.kt)("h2",{id:"functions"},"Functions"),(0,l.kt)("h3",{id:"constructor"},"constructor"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function constructor(\n    contract ERC20VotesComp tribe,\n    contract ICompoundTimelock timelock,\n    address guardian\n) public\n")),(0,l.kt)("h4",{id:"parameters"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"tribe")),(0,l.kt)("td",{parentName:"tr",align:"left"},"contract ERC20VotesComp"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"timelock")),(0,l.kt)("td",{parentName:"tr",align:"left"},"contract ICompoundTimelock"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"guardian")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("h3",{id:"votingdelay"},"votingDelay"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function votingDelay() public returns (uint256)\n")),(0,l.kt)("p",null,"module:user-config"),(0,l.kt)("p",null,"Delay, in number of block, between the proposal is created and the vote starts. This can be increassed to\nleave time for users to buy voting power, of delegate it, before the voting of a proposal starts."),(0,l.kt)("h3",{id:"votingperiod"},"votingPeriod"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function votingPeriod() public returns (uint256)\n")),(0,l.kt)("p",null,"module:user-config"),(0,l.kt)("p",null,"Delay, in number of blocks, between the vote start and vote ends."),(0,l.kt)("p",null,"NOTE: The {votingDelay} can delay the start of the vote. This must be considered when setting the voting\nduration compared to the voting delay."),(0,l.kt)("h3",{id:"quorum"},"quorum"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function quorum(\n    uint256 \n) public returns (uint256)\n")),(0,l.kt)("h4",{id:"parameters-1"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"``"),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("h3",{id:"proposalthreshold"},"proposalThreshold"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function proposalThreshold() public returns (uint256)\n")),(0,l.kt)("p",null,"Part of the Governor Bravo's interface: ",(0,l.kt)("em",{parentName:"p"},'"The number of votes required in order for a voter to become a proposer"'),"."),(0,l.kt)("h3",{id:"setvotingdelay"},"setVotingDelay"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function setVotingDelay(\n    uint256 newVotingDelay\n) public\n")),(0,l.kt)("h4",{id:"parameters-2"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"newVotingDelay")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("h3",{id:"setvotingperiod"},"setVotingPeriod"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function setVotingPeriod(\n    uint256 newVotingPeriod\n) public\n")),(0,l.kt)("h4",{id:"parameters-3"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"newVotingPeriod")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("h3",{id:"setquorum"},"setQuorum"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function setQuorum(\n    uint256 newQuorum\n) public\n")),(0,l.kt)("h4",{id:"parameters-4"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"newQuorum")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("h3",{id:"setproposalthreshold"},"setProposalThreshold"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function setProposalThreshold(\n    uint256 newProposalThreshold\n) public\n")),(0,l.kt)("h4",{id:"parameters-5"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"newProposalThreshold")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("h3",{id:"__rollback"},"__rollback"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function __rollback(\n    uint256 eta\n) external\n")),(0,l.kt)("p",null,"one-time option to roll back the DAO to old GovernorAlpha"),(0,l.kt)("p",null,"guardian-only, and expires after the deadline. This function is here as a fallback in case something goes wrong."),(0,l.kt)("h4",{id:"parameters-6"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"eta")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("h3",{id:"__executerollback"},"__executeRollback"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function __executeRollback() external\n")),(0,l.kt)("p",null,"complete the rollback"),(0,l.kt)("h3",{id:"getvotes"},"getVotes"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function getVotes(\n    address account,\n    uint256 blockNumber\n) public returns (uint256)\n")),(0,l.kt)("h4",{id:"parameters-7"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"account")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"blockNumber")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("h3",{id:"state"},"state"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function state(\n    uint256 proposalId\n) public returns (enum IGovernor.ProposalState)\n")),(0,l.kt)("h4",{id:"parameters-8"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"proposalId")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("h3",{id:"propose"},"propose"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function propose(\n    address[] targets,\n    uint256[] values,\n    bytes[] calldatas,\n    string description\n) public returns (uint256)\n")),(0,l.kt)("h4",{id:"parameters-9"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"targets")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address[]"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"values")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256[]"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"calldatas")),(0,l.kt)("td",{parentName:"tr",align:"left"},"bytes[]"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"description")),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("h3",{id:"_execute"},"_execute"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function _execute(\n    uint256 proposalId,\n    address[] targets,\n    uint256[] values,\n    bytes[] calldatas,\n    bytes32 descriptionHash\n) internal\n")),(0,l.kt)("h4",{id:"parameters-10"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"proposalId")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"targets")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address[]"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"values")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256[]"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"calldatas")),(0,l.kt)("td",{parentName:"tr",align:"left"},"bytes[]"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"descriptionHash")),(0,l.kt)("td",{parentName:"tr",align:"left"},"bytes32"),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("h3",{id:"_cancel"},"_cancel"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function _cancel(\n    address[] targets,\n    uint256[] values,\n    bytes[] calldatas,\n    bytes32 descriptionHash\n) internal returns (uint256)\n")),(0,l.kt)("h4",{id:"parameters-11"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"targets")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address[]"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"values")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256[]"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"calldatas")),(0,l.kt)("td",{parentName:"tr",align:"left"},"bytes[]"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"descriptionHash")),(0,l.kt)("td",{parentName:"tr",align:"left"},"bytes32"),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("h3",{id:"_executor"},"_executor"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function _executor() internal returns (address)\n")),(0,l.kt)("h3",{id:"supportsinterface"},"supportsInterface"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function supportsInterface(\n    bytes4 interfaceId\n) public returns (bool)\n")),(0,l.kt)("h4",{id:"parameters-12"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"interfaceId")),(0,l.kt)("td",{parentName:"tr",align:"left"},"bytes4"),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("h2",{id:"events"},"Events"),(0,l.kt)("h3",{id:"quorumupdated"},"QuorumUpdated"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"event QuorumUpdated(\n    uint256 oldQuorum,\n    uint256 newQuorum\n)\n")),(0,l.kt)("h4",{id:"parameters-13"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"oldQuorum")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"newQuorum")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("h3",{id:"votingdelayupdated"},"VotingDelayUpdated"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"event VotingDelayUpdated(\n    uint256 oldVotingDelay,\n    uint256 newVotingDelay\n)\n")),(0,l.kt)("h4",{id:"parameters-14"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"oldVotingDelay")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"newVotingDelay")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("h3",{id:"votingperiodupdated"},"VotingPeriodUpdated"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"event VotingPeriodUpdated(\n    uint256 oldVotingPeriod,\n    uint256 newVotingPeriod\n)\n")),(0,l.kt)("h4",{id:"parameters-15"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"oldVotingPeriod")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"newVotingPeriod")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("h3",{id:"proposalthresholdupdated"},"ProposalThresholdUpdated"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"event ProposalThresholdUpdated(\n    uint256 oldProposalThreshold,\n    uint256 newProposalThreshold\n)\n")),(0,l.kt)("h4",{id:"parameters-16"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"oldProposalThreshold")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"newProposalThreshold")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("h3",{id:"rollbackqueued"},"RollbackQueued"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"event RollbackQueued(\n    uint256 eta\n)\n")),(0,l.kt)("h4",{id:"parameters-17"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"eta")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("h3",{id:"rollback"},"Rollback"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"event Rollback(\n)\n")))}u.isMDXComponent=!0}}]);