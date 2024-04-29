import{j as t}from"./jsx-runtime-DRTy3Uxn.js";import{r as i}from"./index-BBkUAzwr.js";import{I as w}from"./Input-DtQZF3FR.js";import{s as l}from"./CardInputPage.module-3tVdBXva.js";function m({cardPassword:s,setCardPassword:d,isCompletedSections:o,setIsCompletedSections:c}){const[r,n]=i.useState(""),g=e=>{if(isNaN(Number(e.target.value))){n("숫자만 입력해주세요.");return}n(""),d(e.target.value)},C=e=>{if(e.target.value.length<2){n("비밀번호 앞 두 자리를 정확히 입력해주세요.");return}n("")};return i.useEffect(()=>{const e=[...o];e[5]=s.length==2,c(e),console.log(o)},[s]),t.jsxs(t.Fragment,{children:[t.jsx("div",{className:l.label,children:"비밀번호 앞 두자리"}),t.jsx("div",{className:l.horizon__gap__container,children:t.jsx(w,{onChange:g,isError:r.length!==0,maxLength:2,autoFocus:!0,value:s,onBlur:C,type:"password"})}),t.jsx("div",{className:l.error_message,children:r!==""&&r})]})}m.__docgenInfo={description:"",methods:[],displayName:"CardPasswordInput",props:{cardPassword:{required:!0,tsType:{name:"string"},description:""},setCardPassword:{required:!0,tsType:{name:"Dispatch",elements:[{name:"SetStateAction",elements:[{name:"string"}],raw:"SetStateAction<string>"}],raw:"Dispatch<SetStateAction<string>>"},description:""},isCompletedSections:{required:!0,tsType:{name:"Array",elements:[{name:"boolean"}],raw:"boolean[]"},description:""},setIsCompletedSections:{required:!0,tsType:{name:"Dispatch",elements:[{name:"SetStateAction",elements:[{name:"Array",elements:[{name:"boolean"}],raw:"boolean[]"}],raw:"SetStateAction<boolean[]>"}],raw:"Dispatch<SetStateAction<boolean[]>>"},description:""}}};const b={title:"Field/CardPasswordInput",component:m},h=s=>{const[d,o]=i.useState(""),[c,r]=i.useState([!1]);return t.jsx(m,{...s,cardPassword:d,setCardPassword:o,isCompletedSections:c,setIsCompletedSections:r})},a=h.bind({});a.args={};var p,u,S;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`args => {
  const [cardPassword, setCardPassword] = useState<string>("");
  const [isCompletedSections, setIsCompletedSections] = useState<boolean[]>([false]);
  return <CardPasswordInput {...args} cardPassword={cardPassword} setCardPassword={setCardPassword} isCompletedSections={isCompletedSections} setIsCompletedSections={setIsCompletedSections} />;
}`,...(S=(u=a.parameters)==null?void 0:u.docs)==null?void 0:S.source}}};const _=["Default"];export{a as Default,_ as __namedExportsOrder,b as default};