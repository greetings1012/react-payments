import{j as n}from"./jsx-runtime-DRTy3Uxn.js";import{r as i}from"./index-BBkUAzwr.js";import{I as _}from"./Input-DtQZF3FR.js";import{s as b}from"./CardInputPage.module-3tVdBXva.js";import{C as x,a as w}from"./constants-CO7ZIsjx.js";function h({cardNumbers:o,setCardNumbers:c,isCompletedSections:p,setIsCompletedSections:u,isOpenForm:d,setIsOpenForm:g}){const[r,S]=i.useState([]),[m,C]=i.useState(null),E=(e,t)=>{const s=r.findIndex(a=>a.index===e);if(s===-1)S([...r,{index:e,message:t}]);else{const a=[...r];a[s]={index:e,message:t},S(a)}},F=e=>{const t=[...r];S(t.filter(s=>s.index!==e))},A=(e,t)=>{if(isNaN(Number(e.target.value))&&e.target.value.length!==0){C({index:t,message:"숫자를 입력해주세요."});return}e.target.value.length<4?E(t,"4개의 숫자를 입력해주세요."):F(t),C(null);const s=[...o];s[t]=e.target.value,c(s),e.target.value.length===4&&e.target.nextSibling&&e.target.nextSibling.focus()};i.useEffect(()=>{const e=[...p],t=o.every(a=>a.length===4);e[0]=t,u(e);const s=[...d];t===!0&&(s[1]=!0),g(s)},[o]);const y=e=>{const t=r.some(a=>a.index===e),s=(m==null?void 0:m.index)===e;return t||s};return n.jsxs(n.Fragment,{children:[n.jsx("div",{className:b.label,children:"카드 번호"}),n.jsx("div",{className:b.horizon__gap__container,children:o.map((e,t)=>n.jsx(_,{onChange:s=>A(s,t),placeholder:x,maxLength:w,value:e,autoFocus:t==0,type:t>=o.length/2?"password":"type",isError:y(t)},t))}),n.jsx("div",{className:b.error_message,children:(m!==null||r.length!==0)&&n.jsx(n.Fragment,{children:m!==null?m.message:r[r.length-1].message})})]})}h.__docgenInfo={description:"",methods:[],displayName:"CardNumbersInputField",props:{cardNumbers:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},setCardNumbers:{required:!0,tsType:{name:"Dispatch",elements:[{name:"SetStateAction",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"}],raw:"SetStateAction<string[]>"}],raw:"Dispatch<SetStateAction<string[]>>"},description:""},isCompletedSections:{required:!0,tsType:{name:"Array",elements:[{name:"boolean"}],raw:"boolean[]"},description:""},setIsCompletedSections:{required:!0,tsType:{name:"Dispatch",elements:[{name:"SetStateAction",elements:[{name:"Array",elements:[{name:"boolean"}],raw:"boolean[]"}],raw:"SetStateAction<boolean[]>"}],raw:"Dispatch<SetStateAction<boolean[]>>"},description:""},isOpenForm:{required:!0,tsType:{name:"Array",elements:[{name:"boolean"}],raw:"boolean[]"},description:""},setIsOpenForm:{required:!0,tsType:{name:"Dispatch",elements:[{name:"SetStateAction",elements:[{name:"Array",elements:[{name:"boolean"}],raw:"boolean[]"}],raw:"SetStateAction<boolean[]>"}],raw:"Dispatch<SetStateAction<boolean[]>>"},description:""}}};const L={title:"Field/CardNumbersInputField",component:h},O=o=>{const[c,p]=i.useState(["","","",""]),[u,d]=i.useState([!1]),[g,r]=i.useState([!1]);return n.jsx(h,{...o,cardNumbers:c,setCardNumbers:p,isCompletedSections:u,setIsCompletedSections:d,isOpenForm:g,setIsOpenForm:r})},l=O.bind({});l.args={};var N,f,I;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`args => {
  const [cardNumbers, setCardNumbers] = useState<string[]>(["", "", "", ""]);
  const [isCompletedSections, setIsCompletedSections] = useState<boolean[]>([false]);
  const [isOpenForm, setIsOpenForm] = useState<boolean[]>([false]);
  return <CardNumbersInputField {...args} cardNumbers={cardNumbers} setCardNumbers={setCardNumbers} isCompletedSections={isCompletedSections} setIsCompletedSections={setIsCompletedSections} isOpenForm={isOpenForm} setIsOpenForm={setIsOpenForm} />;
}`,...(I=(f=l.parameters)==null?void 0:f.docs)==null?void 0:I.source}}};const q=["Default"];export{l as Default,q as __namedExportsOrder,L as default};
