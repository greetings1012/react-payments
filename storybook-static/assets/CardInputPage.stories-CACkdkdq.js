import{j as n}from"./jsx-runtime-DRTy3Uxn.js";import{r as c}from"./index-BBkUAzwr.js";import{s as N,C as me}from"./CardFrontPreview-DWSlI-8O.js";import{I as x}from"./Input-DtQZF3FR.js";const pe="_background_1i6yd_5",he="_layout_1i6yd_14",ge="_horizon__gap__container_1i6yd_23",fe="_error_message_1i6yd_29",Se="_label_1i6yd_38",y={background:pe,layout:he,horizon__gap__container:ge,error_message:fe,label:Se},_e="_card__info__form_c58as_1",ye={card__info__form:_e};function B({children:e}){return n.jsx("form",{className:ye.card__info__form,children:e})}B.__docgenInfo={description:"",methods:[],displayName:"Form",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}}};/**
 * @remix-run/router v1.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function I(){return I=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},I.apply(this,arguments)}var L;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(L||(L={}));function b(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function U(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));let o=e.indexOf("?");o>=0&&(t.search=e.substr(o),e=e.substr(0,o)),e&&(t.pathname=e)}return t}var F;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(F||(F={}));function Ce(e,t){t===void 0&&(t="/");let{pathname:r,search:o="",hash:i=""}=typeof e=="string"?U(e):e;return{pathname:r?r.startsWith("/")?r:be(r,t):t,search:Ne(o),hash:Ee(i)}}function be(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?r.length>1&&r.pop():i!=="."&&r.push(i)}),r.length>1?r.join("/"):"/"}function E(e,t,r,o){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(o)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function ve(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function we(e,t){let r=ve(e);return t?r.map((o,i)=>i===e.length-1?o.pathname:o.pathnameBase):r.map(o=>o.pathnameBase)}function xe(e,t,r,o){o===void 0&&(o=!1);let i;typeof e=="string"?i=U(e):(i=I({},e),b(!i.pathname||!i.pathname.includes("?"),E("?","pathname","search",i)),b(!i.pathname||!i.pathname.includes("#"),E("#","pathname","hash",i)),b(!i.search||!i.search.includes("#"),E("#","search","hash",i)));let p=e===""||i.pathname==="",s=p?"/":i.pathname,m;if(s==null)m=r;else{let f=t.length-1;if(!o&&s.startsWith("..")){let a=s.split("/");for(;a[0]==="..";)a.shift(),f-=1;i.pathname=a.join("/")}m=f>=0?t[f]:"/"}let d=Ce(i,m),_=s&&s!=="/"&&s.endsWith("/"),h=(p||s===".")&&r.endsWith("/");return!d.pathname.endsWith("/")&&(_||h)&&(d.pathname+="/"),d}const Ae=e=>e.join("/").replace(/\/\/+/g,"/"),Ne=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Ee=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e,V=["post","put","patch","delete"];new Set(V);const Ie=["get",...V];new Set(Ie);/**
 * React Router v6.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function j(){return j=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},j.apply(this,arguments)}const z=c.createContext(null),H=c.createContext(null),Y=c.createContext(null),T=c.createContext({outlet:null,matches:[],isDataRoute:!1});function $(){return c.useContext(Y)!=null}function je(){return $()||b(!1),c.useContext(Y).location}function W(e){c.useContext(H).static||c.useLayoutEffect(e)}function De(){let{isDataRoute:e}=c.useContext(T);return e?Fe():Te()}function Te(){$()||b(!1);let e=c.useContext(z),{basename:t,future:r,navigator:o}=c.useContext(H),{matches:i}=c.useContext(T),{pathname:p}=je(),s=JSON.stringify(we(i,r.v7_relativeSplatPath)),m=c.useRef(!1);return W(()=>{m.current=!0}),c.useCallback(function(_,h){if(h===void 0&&(h={}),!m.current)return;if(typeof _=="number"){o.go(_);return}let f=xe(_,JSON.parse(s),p,h.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:Ae([t,f.pathname])),(h.replace?o.replace:o.push)(f,h.state,h)},[t,o,s,p,e])}var J=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(J||{}),G=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(G||{});function qe(e){let t=c.useContext(z);return t||b(!1),t}function Oe(e){let t=c.useContext(T);return t||b(!1),t}function Le(e){let t=Oe(),r=t.matches[t.matches.length-1];return r.route.id||b(!1),r.route.id}function Fe(){let{router:e}=qe(J.UseNavigateStable),t=Le(G.UseNavigateStable),r=c.useRef(!1);return W(()=>{r.current=!0}),c.useCallback(function(i,p){p===void 0&&(p={}),r.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,j({fromRouteId:t},p)))},[e,t])}new Promise(()=>{});const Re="_container_c04hp_1",Pe="_none_description_c04hp_8",Me="_title_c04hp_12",ke="_description_c04hp_19",A={container:Re,none_description:Pe,title:Me,description:ke};function K({title:e,description:t}){return n.jsxs("div",{className:`${A.container} ${!t&&A.none_description}`,children:[n.jsx("h1",{className:A.title,children:e}),n.jsx("h3",{className:A.description,children:t})]})}K.__docgenInfo={description:"",methods:[],displayName:"ShelfHeader",props:{title:{required:!0,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""}}};const Be="_shelf__section_iyz7k_1",Ue={shelf__section:Be},v=({title:e,description:t,children:r})=>n.jsxs("div",{className:Ue.shelf__section,children:[n.jsx(K,{title:e,description:t}),r]});v.__docgenInfo={description:"",methods:[],displayName:"ShelfSection",props:{title:{required:!0,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const Q=({cardCVC:e})=>n.jsx("div",{className:N.card_back,children:n.jsx("div",{className:N.cvc_line,children:n.jsx("div",{className:N.cvc_number,children:e})})});Q.__docgenInfo={description:"",methods:[],displayName:"CardBackPreview",props:{cardCVC:{required:!0,tsType:{name:"string"},description:""}}};const X=4,Ve="1234",R={MONTH:"MM",YEAR:"YY"};function q({children:e,classNames:t=[],onClick:r}){const i=(Array.isArray(t)?t:[t]).join(" ");return n.jsx("button",{onClick:r,className:i,children:e})}q.__docgenInfo={description:"",methods:[],displayName:"Button",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},classNames:{required:!1,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:"",defaultValue:{value:"[]",computed:!1}},onClick:{required:!1,tsType:{name:"MouseEventHandler",elements:[{name:"HTMLButtonElement"}],raw:"MouseEventHandler<HTMLButtonElement>"},description:""}}};const ze="_primary_rhtq8_1",He="_submit_rhtq8_10",Ye="_go_main_rhtq8_17",$e="_dropdown_head_rhtq8_24",D={primary:ze,submit:He,go_main:Ye,dropdown_head:$e};function Z({isCompletedSections:e,onClick:t}){return e.every(o=>o)?n.jsx(q,{onClick:t,classNames:[D.primary,D.submit],children:"확인"}):null}Z.__docgenInfo={description:"",methods:[],displayName:"SubmitButton",props:{isCompletedSections:{required:!0,tsType:{name:"Array",elements:[{name:"boolean"}],raw:"boolean[]"},description:""},onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};function ee({cardNumbers:e,setCardNumbers:t,isCompletedSections:r,setIsCompletedSections:o,isOpenForm:i,setIsOpenForm:p}){const[s,m]=c.useState([]),[d,_]=c.useState(null),h=(l,u)=>{const S=s.findIndex(C=>C.index===l);if(S===-1)m([...s,{index:l,message:u}]);else{const C=[...s];C[S]={index:l,message:u},m(C)}},f=l=>{const u=[...s];m(u.filter(S=>S.index!==l))},a=(l,u)=>{if(isNaN(Number(l.target.value))&&l.target.value.length!==0){_({index:u,message:"숫자를 입력해주세요."});return}l.target.value.length<4?h(u,"4개의 숫자를 입력해주세요."):f(u),_(null);const S=[...e];S[u]=l.target.value,t(S),l.target.value.length===4&&l.target.nextSibling&&l.target.nextSibling.focus()};c.useEffect(()=>{const l=[...r],u=e.every(C=>C.length===4);l[0]=u,o(l);const S=[...i];u===!0&&(S[1]=!0),p(S)},[e]);const g=l=>{const u=s.some(C=>C.index===l),S=(d==null?void 0:d.index)===l;return u||S};return n.jsxs(n.Fragment,{children:[n.jsx("div",{className:y.label,children:"카드 번호"}),n.jsx("div",{className:y.horizon__gap__container,children:e.map((l,u)=>n.jsx(x,{onChange:S=>a(S,u),placeholder:Ve,maxLength:X,value:l,autoFocus:u==0,type:u>=e.length/2?"password":"type",isError:g(u)},u))}),n.jsx("div",{className:y.error_message,children:(d!==null||s.length!==0)&&n.jsx(n.Fragment,{children:d!==null?d.message:s[s.length-1].message})})]})}ee.__docgenInfo={description:"",methods:[],displayName:"CardNumbersInputField",props:{cardNumbers:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},setCardNumbers:{required:!0,tsType:{name:"Dispatch",elements:[{name:"SetStateAction",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"}],raw:"SetStateAction<string[]>"}],raw:"Dispatch<SetStateAction<string[]>>"},description:""},isCompletedSections:{required:!0,tsType:{name:"Array",elements:[{name:"boolean"}],raw:"boolean[]"},description:""},setIsCompletedSections:{required:!0,tsType:{name:"Dispatch",elements:[{name:"SetStateAction",elements:[{name:"Array",elements:[{name:"boolean"}],raw:"boolean[]"}],raw:"SetStateAction<boolean[]>"}],raw:"Dispatch<SetStateAction<boolean[]>>"},description:""},isOpenForm:{required:!0,tsType:{name:"Array",elements:[{name:"boolean"}],raw:"boolean[]"},description:""},setIsOpenForm:{required:!0,tsType:{name:"Dispatch",elements:[{name:"SetStateAction",elements:[{name:"Array",elements:[{name:"boolean"}],raw:"boolean[]"}],raw:"SetStateAction<boolean[]>"}],raw:"Dispatch<SetStateAction<boolean[]>>"},description:""}}};function te({date:e,setDate:t,isCompletedSections:r,setIsCompletedSections:o,isOpenForm:i,setIsOpenForm:p}){const[s,m]=c.useState({monthError:null,yearError:null}),d=({month:a=e.month,year:g=e.year})=>{const l={monthError:null,yearError:null},u=_(a,g);g.length>0&&g.length<2&&(l.yearError="유효하지 않은 날짜입니다."),u==="INVALID_MONTH"&&(l.monthError="이미 만료된 카드입니다."),u==="INVALID_YEAR"&&(l.yearError="이미 만료된 카드입니다."),isNaN(Number(a))&&(l.monthError="숫자만 입력해주세요."),(Number(a)<=0||Number(a)>12)&&(l.monthError="유효하지 않은 날짜입니다."),isNaN(Number(g))&&(l.yearError="숫자만 입력해주세요."),m({monthError:l.monthError||null,yearError:l.yearError||null})};c.useEffect(()=>{const a=[...r],g=e.month.length==2&&e.year.length==2&&!s.monthError&&!s.yearError;a[2]=g,o(a);const l=[...i];g===!0&&(l[3]=!0),p(l)},[e]);const _=(a,g)=>{if(g.length<2||a.length<2)return!1;const l=new Date,u=l.getMonth()+1,S=l.getFullYear()-2e3;return Number(g)===S&&Number(a)<u?"INVALID_MONTH":Number(g)<S?"INVALID_YEAR":!1},h=a=>{const g=Number(a.target.value);g<=1||a.target.value.length>=2?t({...e,month:a.target.value}):g>=2&&g<=9&&t({...e,month:a.target.value.padStart(2,"0")}),d({month:a.target.value}),(a.target.value.length===2&&a.target.nextSibling||Number(a.target.value)>2)&&a.target.nextSibling.focus()},f=a=>{t({...e,year:a.target.value}),d({year:a.target.value})};return n.jsxs(n.Fragment,{children:[n.jsx("div",{className:y.label,children:"유효기간"}),n.jsxs("div",{className:y.horizon__gap__container,children:[n.jsx(x,{onChange:h,placeholder:R.MONTH,maxLength:2,value:e.month,autoFocus:!0,isError:(s==null?void 0:s.monthError)!==null}),n.jsx(x,{onChange:f,placeholder:R.YEAR,maxLength:2,value:e.year,isError:(s==null?void 0:s.yearError)!==null})]}),n.jsx("div",{className:y.error_message,children:s!==null&&((s==null?void 0:s.monthError)||(s==null?void 0:s.yearError))&&n.jsx("div",{className:y.error_message,children:(s==null?void 0:s.monthError)||(s==null?void 0:s.yearError)})})]})}te.__docgenInfo={description:"",methods:[],displayName:"CardExpirationDateInputField",props:{date:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"string"}],raw:"Record<string, string>"},description:""},setDate:{required:!0,tsType:{name:"Dispatch",elements:[{name:"SetStateAction",elements:[{name:"Record",elements:[{name:"string"},{name:"string"}],raw:"Record<string, string>"}],raw:"SetStateAction<Record<string, string>>"}],raw:"Dispatch<SetStateAction<Record<string, string>>>"},description:""},isCompletedSections:{required:!0,tsType:{name:"Array",elements:[{name:"boolean"}],raw:"boolean[]"},description:""},setIsCompletedSections:{required:!0,tsType:{name:"Dispatch",elements:[{name:"SetStateAction",elements:[{name:"Array",elements:[{name:"boolean"}],raw:"boolean[]"}],raw:"SetStateAction<boolean[]>"}],raw:"Dispatch<SetStateAction<boolean[]>>"},description:""},isOpenForm:{required:!0,tsType:{name:"Array",elements:[{name:"boolean"}],raw:"boolean[]"},description:""},setIsOpenForm:{required:!0,tsType:{name:"Dispatch",elements:[{name:"SetStateAction",elements:[{name:"Array",elements:[{name:"boolean"}],raw:"boolean[]"}],raw:"SetStateAction<boolean[]>"}],raw:"Dispatch<SetStateAction<boolean[]>>"},description:""}}};function We(e){return e.replace(/\s+/g," ").trimStart()}function Je(e){return e.split("").filter(t=>t===" "||t.charCodeAt(0)>=65&&t.charCodeAt(0)<=90).join("")}const Ge="JOHN DOE";function ne({ownerName:e,setOwnerName:t,isCompletedSections:r,setIsCompletedSections:o,isOpenForm:i,setIsOpenForm:p}){const[s,m]=c.useState(""),d=h=>{const f=Je(h.target.value.toUpperCase()),a=We(f);if(f.length>a.length&&a.length!==0){m("공백을 연속으로 입력할 수 없습니다.");return}if(f.length<h.target.value.length){m("영어만 입력 가능합니다."),t(f);return}m(""),t(a)},_=h=>{if(h.target.value.length===0){m("이름을 입력해주세요.");return}m("")};return c.useEffect(()=>{const h=e.length!==0,f=[...r];f[3]=h,o(f);const a=g=>{if(g.key==="Enter"){const l=[...i];h===!0&&(l[4]=!0),p(l)}};return window.addEventListener("keypress",a),()=>{window.removeEventListener("keypress",a)}},[e]),n.jsxs(n.Fragment,{children:[n.jsx("div",{className:y.label,children:"소유자 이름"}),n.jsx("div",{className:y.horizon__gap__container,children:n.jsx(x,{onChange:d,isError:s.length!==0,placeholder:Ge,autoFocus:!0,maxLength:26,value:e,onBlur:_})}),n.jsx("div",{className:y.error_message,children:s!==""&&s})]})}ne.__docgenInfo={description:"",methods:[],displayName:"CardOwnerNameInputField",props:{ownerName:{required:!0,tsType:{name:"string"},description:""},setOwnerName:{required:!0,tsType:{name:"Dispatch",elements:[{name:"SetStateAction",elements:[{name:"string"}],raw:"SetStateAction<string>"}],raw:"Dispatch<SetStateAction<string>>"},description:""},isCompletedSections:{required:!0,tsType:{name:"Array",elements:[{name:"boolean"}],raw:"boolean[]"},description:""},setIsCompletedSections:{required:!0,tsType:{name:"Dispatch",elements:[{name:"SetStateAction",elements:[{name:"Array",elements:[{name:"boolean"}],raw:"boolean[]"}],raw:"SetStateAction<boolean[]>"}],raw:"Dispatch<SetStateAction<boolean[]>>"},description:""},isOpenForm:{required:!0,tsType:{name:"Array",elements:[{name:"boolean"}],raw:"boolean[]"},description:""},setIsOpenForm:{required:!0,tsType:{name:"Dispatch",elements:[{name:"SetStateAction",elements:[{name:"Array",elements:[{name:"boolean"}],raw:"boolean[]"}],raw:"SetStateAction<boolean[]>"}],raw:"Dispatch<SetStateAction<boolean[]>>"},description:""}}};const Ke="_item_1j86h_1",Qe="_list_1j86h_13",re={item:Ke,list:Qe};function ae({value:e,setCardCompanyName:t,setIsOpen:r,isOpen:o}){const i=()=>{t(e),r(!o)};return n.jsx("li",{onClick:i,className:re.item,children:e})}ae.__docgenInfo={description:"",methods:[],displayName:"CardCompanyDropdownItem",props:{value:{required:!0,tsType:{name:"string"},description:""},setCardCompanyName:{required:!0,tsType:{name:"Dispatch",elements:[{name:"SetStateAction",elements:[{name:"string"}],raw:"SetStateAction<string>"}],raw:"Dispatch<SetStateAction<string>>"},description:""},setIsOpen:{required:!0,tsType:{name:"Dispatch",elements:[{name:"SetStateAction",elements:[{name:"boolean"}],raw:"SetStateAction<boolean>"}],raw:"Dispatch<SetStateAction<boolean>>"},description:""},isOpen:{required:!0,tsType:{name:"boolean"},description:""}}};function se({companyList:e,setCardCompanyName:t,setIsOpen:r,isOpen:o}){return n.jsx("ul",{className:re.list,children:e.map(i=>n.jsx(ae,{value:i,setCardCompanyName:t,setIsOpen:r,isOpen:o}))})}se.__docgenInfo={description:"",methods:[],displayName:"CardCompanyDropdownList",props:{companyList:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},setCardCompanyName:{required:!0,tsType:{name:"Dispatch",elements:[{name:"SetStateAction",elements:[{name:"string"}],raw:"SetStateAction<string>"}],raw:"Dispatch<SetStateAction<string>>"},description:""},setIsOpen:{required:!0,tsType:{name:"Dispatch",elements:[{name:"SetStateAction",elements:[{name:"boolean"}],raw:"SetStateAction<boolean>"}],raw:"Dispatch<SetStateAction<boolean>>"},description:""},isOpen:{required:!0,tsType:{name:"boolean"},description:""}}};const Xe="data:image/svg+xml,%3csvg%20width='10'%20height='6'%20viewBox='0%200%2010%206'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20%3e%3cpath%20d='M1.04016%200.729874L4.86009%204.5498L8.68002%200.729874'%20stroke='black'%20stroke-width='1.32867'%20stroke-linecap='round'%20stroke-linejoin='round'%20/%3e%3c/svg%3e",Ze="data:image/svg+xml,%3csvg%20width='10'%20height='6'%20viewBox='0%200%2010%206'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20transform='rotate(180)'%20%3e%3cpath%20d='M1.04016%200.729874L4.86009%204.5498L8.68002%200.729874'%20stroke='black'%20stroke-width='1.32867'%20stroke-linecap='round'%20stroke-linejoin='round'%20/%3e%3c/svg%3e";function oe({isOpen:e,onClick:t,children:r}){return n.jsxs(q,{onClick:t,classNames:D.dropdown_head,children:[r,n.jsx("img",{src:e?Ze:Xe})]})}oe.__docgenInfo={description:"",methods:[],displayName:"CardDropdownHeadButton",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:""},onClick:{required:!0,tsType:{name:"MouseEventHandler",elements:[{name:"HTMLButtonElement"}],raw:"MouseEventHandler<HTMLButtonElement>"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const et=(e,t)=>{const[r,o]=c.useState(t);return c.useEffect(()=>{const i=p=>{e.current&&!e.current.contains(p.target)&&o(!1)};return r&&window.addEventListener("click",i),()=>{window.removeEventListener("click",i)}},[r,e]),[r,o]},tt=["BC카드","신한카드","카카오뱅크","현대카드","우리카드","롯데카드","하나카드","국민카드"];function ie({cardCompanyName:e,setCardCompanyName:t,isCompletedSections:r,setIsCompletedSections:o,isOpenForm:i,setIsOpenForm:p}){const s=c.useRef(null),[m,d]=et(s,!1),_=tt;return c.useEffect(()=>{const h=[...r],f=e!="";h[1]=f,o(h);const a=[...i];f===!0&&(a[2]=!0),p(a)},[e]),n.jsxs("div",{ref:s,children:[n.jsx(oe,{isOpen:m,onClick:h=>{h.preventDefault(),d(!m)},children:n.jsx("span",{style:{color:e?"black":"grey"},children:e||"카드사를 선택해주세요"})}),m&&n.jsx(se,{companyList:_,setCardCompanyName:t,setIsOpen:d,isOpen:m})]})}ie.__docgenInfo={description:"",methods:[],displayName:"CardCompanySelectField",props:{cardCompanyName:{required:!0,tsType:{name:"string"},description:""},setCardCompanyName:{required:!0,tsType:{name:"Dispatch",elements:[{name:"SetStateAction",elements:[{name:"string"}],raw:"SetStateAction<string>"}],raw:"Dispatch<SetStateAction<string>>"},description:""},isCompletedSections:{required:!0,tsType:{name:"Array",elements:[{name:"boolean"}],raw:"boolean[]"},description:""},setIsCompletedSections:{required:!0,tsType:{name:"Dispatch",elements:[{name:"SetStateAction",elements:[{name:"Array",elements:[{name:"boolean"}],raw:"boolean[]"}],raw:"SetStateAction<boolean[]>"}],raw:"Dispatch<SetStateAction<boolean[]>>"},description:""},isOpenForm:{required:!0,tsType:{name:"Array",elements:[{name:"boolean"}],raw:"boolean[]"},description:""},setIsOpenForm:{required:!0,tsType:{name:"Dispatch",elements:[{name:"SetStateAction",elements:[{name:"Array",elements:[{name:"boolean"}],raw:"boolean[]"}],raw:"SetStateAction<boolean[]>"}],raw:"Dispatch<SetStateAction<boolean[]>>"},description:""}}};const nt="123";function le({cardCVC:e,setCardCVC:t,isCompletedSections:r,setIsCompletedSections:o,isOpenForm:i,setIsOpenForm:p,setIsCardPreviewFront:s}){const[m,d]=c.useState(""),_=a=>{if(isNaN(Number(a.target.value))){d("숫자만 입력해주세요.");return}d(""),t(a.target.value)},h=()=>{s(!1)},f=a=>{if(s(!0),a.target.value.length<3){d("CVC를 정확히 입력해주세요.");return}d("")};return c.useEffect(()=>{const a=[...r],g=e.length==3;a[4]=g,o(a);const l=[...i];g===!0&&(l[5]=!0),p(l)},[e]),n.jsxs(n.Fragment,{children:[n.jsx("div",{className:y.label,children:"CVC"}),n.jsx("div",{className:y.horizon__gap__container,children:n.jsx(x,{onChange:_,onFocus:h,isError:m.length!==0,placeholder:nt,maxLength:3,autoFocus:!0,value:e,onBlur:f})}),n.jsx("div",{className:y.error_message,children:m!==""&&m})]})}le.__docgenInfo={description:"",methods:[],displayName:"CardCVCInputField",props:{cardCVC:{required:!0,tsType:{name:"string"},description:""},setCardCVC:{required:!0,tsType:{name:"Dispatch",elements:[{name:"SetStateAction",elements:[{name:"string"}],raw:"SetStateAction<string>"}],raw:"Dispatch<SetStateAction<string>>"},description:""},isCompletedSections:{required:!0,tsType:{name:"Array",elements:[{name:"boolean"}],raw:"boolean[]"},description:""},setIsCompletedSections:{required:!0,tsType:{name:"Dispatch",elements:[{name:"SetStateAction",elements:[{name:"Array",elements:[{name:"boolean"}],raw:"boolean[]"}],raw:"SetStateAction<boolean[]>"}],raw:"Dispatch<SetStateAction<boolean[]>>"},description:""},isOpenForm:{required:!0,tsType:{name:"Array",elements:[{name:"boolean"}],raw:"boolean[]"},description:""},setIsOpenForm:{required:!0,tsType:{name:"Dispatch",elements:[{name:"SetStateAction",elements:[{name:"Array",elements:[{name:"boolean"}],raw:"boolean[]"}],raw:"SetStateAction<boolean[]>"}],raw:"Dispatch<SetStateAction<boolean[]>>"},description:""},setIsCardPreviewFront:{required:!0,tsType:{name:"Dispatch",elements:[{name:"SetStateAction",elements:[{name:"boolean"}],raw:"SetStateAction<boolean>"}],raw:"Dispatch<SetStateAction<boolean>>"},description:""}}};function ce({cardPassword:e,setCardPassword:t,isCompletedSections:r,setIsCompletedSections:o}){const[i,p]=c.useState(""),s=d=>{if(isNaN(Number(d.target.value))){p("숫자만 입력해주세요.");return}p(""),t(d.target.value)},m=d=>{if(d.target.value.length<2){p("비밀번호 앞 두 자리를 정확히 입력해주세요.");return}p("")};return c.useEffect(()=>{const d=[...r];d[5]=e.length==2,o(d),console.log(r)},[e]),n.jsxs(n.Fragment,{children:[n.jsx("div",{className:y.label,children:"비밀번호 앞 두자리"}),n.jsx("div",{className:y.horizon__gap__container,children:n.jsx(x,{onChange:s,isError:i.length!==0,maxLength:2,autoFocus:!0,value:e,onBlur:m,type:"password"})}),n.jsx("div",{className:y.error_message,children:i!==""&&i})]})}ce.__docgenInfo={description:"",methods:[],displayName:"CardPasswordInput",props:{cardPassword:{required:!0,tsType:{name:"string"},description:""},setCardPassword:{required:!0,tsType:{name:"Dispatch",elements:[{name:"SetStateAction",elements:[{name:"string"}],raw:"SetStateAction<string>"}],raw:"Dispatch<SetStateAction<string>>"},description:""},isCompletedSections:{required:!0,tsType:{name:"Array",elements:[{name:"boolean"}],raw:"boolean[]"},description:""},setIsCompletedSections:{required:!0,tsType:{name:"Dispatch",elements:[{name:"SetStateAction",elements:[{name:"Array",elements:[{name:"boolean"}],raw:"boolean[]"}],raw:"SetStateAction<boolean[]>"}],raw:"Dispatch<SetStateAction<boolean[]>>"},description:""}}};function O(){const[e,t]=c.useState(()=>new Array(X).fill("")),[r,o]=c.useState(""),[i,p]=c.useState({month:"",year:""}),[s,m]=c.useState(""),[d,_]=c.useState(""),[h,f]=c.useState(""),[a,g]=c.useState([!0,!1,!1,!1,!1,!1]),[l,u]=c.useState(()=>new Array(5).fill(!1)),[S,C]=c.useState(!0),de=De(),ue=()=>{de("/card-added",{state:{firstFourCardNumber:e[0],cardCompanyName:r}})};return n.jsx("main",{className:y.background,children:n.jsxs("section",{className:y.layout,children:[S?n.jsx(me,{cardNumbers:e,cardCompanyName:r,date:i,ownerName:s}):n.jsx(Q,{cardCVC:d}),n.jsxs(B,{children:[a[5]&&n.jsx(v,{title:"비밀번호를 입력해 주세요",description:"앞의 두자리를 입력해주세요.",children:n.jsx(ce,{cardPassword:h,setCardPassword:f,isCompletedSections:l,setIsCompletedSections:u})}),a[4]&&n.jsx(v,{title:"CVC 번호를 입력해 주세요",children:n.jsx(le,{cardCVC:d,setCardCVC:_,isCompletedSections:l,setIsCompletedSections:u,isOpenForm:a,setIsOpenForm:g,setIsCardPreviewFront:C})}),a[3]&&n.jsx(v,{title:"카드 소유자 이름을 입력해주세요",description:"엔터를 눌러 입력을 완료할 수 있습니다.",children:n.jsx(ne,{ownerName:s,setOwnerName:m,isCompletedSections:l,setIsCompletedSections:u,isOpenForm:a,setIsOpenForm:g})}),a[2]&&n.jsx(v,{title:"카드 유효기간을 입력해 주세요",description:"월/년도(MMYY)를 순서대로 입력해 주세요.",children:n.jsx(te,{date:i,setDate:p,isCompletedSections:l,setIsCompletedSections:u,isOpenForm:a,setIsOpenForm:g})}),a[1]&&n.jsx(v,{title:"카드사를 선택해 주세요",description:"현재 국내 카드사만 가능합니다.",children:n.jsx(ie,{cardCompanyName:r,setCardCompanyName:o,isCompletedSections:l,setIsCompletedSections:u,isOpenForm:a,setIsOpenForm:g})}),a[0]&&n.jsx(v,{title:"결제할 카드 번호를 입력해 주세요",description:"본인 명의의 카드만 결제 가능합니다.",children:n.jsx(ee,{cardNumbers:e,setCardNumbers:t,isCompletedSections:l,setIsCompletedSections:u,isOpenForm:a,setIsOpenForm:g})})]}),n.jsx(Z,{isCompletedSections:l,onClick:ue})]})})}O.__docgenInfo={description:"",methods:[],displayName:"CardInputPage"};const it={title:"CardInputPage",component:O},w=()=>n.jsx(O,{});w.args={};w.__docgenInfo={description:"",methods:[],displayName:"DefaultCardInputPage"};var P,M,k;w.parameters={...w.parameters,docs:{...(P=w.parameters)==null?void 0:P.docs,source:{originalSource:"() => <CardInputPage />",...(k=(M=w.parameters)==null?void 0:M.docs)==null?void 0:k.source}}};const lt=["DefaultCardInputPage"];export{w as DefaultCardInputPage,lt as __namedExportsOrder,it as default};
