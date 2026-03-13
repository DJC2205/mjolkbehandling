(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function a(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(r){if(r.ep)return;r.ep=!0;const o=a(r);fetch(r.href,o)}})();const pt="users",J="session",Y="notes::",Pt="shared",qt="list-board::",at=["05:45","13:45","17:45","21:45"],gt="Du har blivit utloggad. Vid skiftöverlämning [05:45 , 13:45 , 17:45 , 21:45] sker en automatisk utloggning.",Ot="mbh2026",Ut={edit:"/Ikoner/PEN.svg",up:"/Ikoner/UP.svg",down:"/Ikoner/DOWN.svg",delete:"/Ikoner/Delete.svg",add:"/Ikoner/PLUS.svg",color:"/Ikoner/Color.svg"},L=["Produktion","Disk","Övrigt"],w=[{id:"mjolk",label:"Mjölk"},{id:"vassle",label:"Vassle"},{id:"ovrigt",label:"Övrigt"}],N=["none","red","green"],Ft={Produktion:"Anteckna sekvenser du vill komma ihåg..",Disk:"Beskriv när & hur man ska diska objektet..",Övrigt:"Skriv övrig information.."},Ct={CF_BK_KA:"Ceramic Filter","Ceramic Filter_1_KA":"Ceramic Filter"},jt={BC:"Bactocatch",YA:"Y-agg",VA1:"V-agg 1",VA2:"V-agg 2",GA:"G-agg","FÖRSKÖLJ-TANK DC1":"FÖRSKÖLJ-TANK DC1"},x=[{id:"MBH",label:"Mjölkbehandling",file:"/MBH.svg"},{id:"VBH",label:"Vasslebehandling",file:"/VBH.svg"},{id:"DI",label:"Disk Info",file:"/DI.svg"},{id:"LIST",label:"Flödeslistor",file:null},{id:"KA",label:"Karta Apparatsal",file:"/KA.svg"}],Rt={MBH:`Klicka på ett objekt för att öppna dess popup.
Där inne kan du redigera dina anteckningar.
Samma objekt har samma popup på olika sidor.`,VBH:`Klicka på ett objekt för att öppna dess popup.
Där inne kan du redigera dina anteckningar.
Samma objekt har samma popup på olika sidor.`,DI:`På denna sida kan du ersätta beskrivningar för diskar till dina egna genom att skriva egna anteckningar i ett objekts popup-flik "Disk".
Sedan kan du växla mellan originalbeskrivningar & dina egna beskrivningar genom att trycka på knappen åt höger.`,KA:`Klicka på ett objekt för att öppna dess popup.
Där inne kan du redigera dina anteckningar.
Samma objekt har samma popup på olika sidor.`,LIST:`Här kan du skapa egna punkter för flödet i kategorierna Mjölk, Vassle och Övrigt.
Varje punkt kan redigeras, tas bort, flyttas upp eller ner och visa statusfärg.`},Gt=[{id:"all",label:"Alla",componentIds:[]},{id:"mjolk",label:"Mjölk",componentIds:["Ystmjölksledning_1_DI","T110_13110_DI","T106_13106_DI","T107_13107_DI","Helmjölksledning_1_DI","Mottagningslinje 1-4_1_DI","MOTTAGNINGSLINJE 5_1_DI","T101_13101_DI","T102_13102_DI","T103_13103_DI","T111_13111_DI","T117_13117_DI","T118_13118_DI","T108_13108_DI"]},{id:"vassle",label:"Vassle",componentIds:["Utlastningsledning Vassle 2_1_DI","Ledn. under OPD-Vassle_1_DI","Fylln. Ledn. Vasslesilos_1_DI","T601_52601_DI","T602_52602_DI","T606_52606_DI","T607_52607_DI","T662_51662_DI","T664_51664_DI","T109_131009_DI","T601_51601_DI","T602_51602_DI","T636_51636_DI","T650_51650_DI","T501_14501_DI","T704_31704_DI","T613_51613_DI","T629_51629_DI"]},{id:"gradde",label:"Grädde",componentIds:["Utlastningsledning Grädde_1_DI","Ledn. till Gräddlager_1_DI","Gräddledning_1_DI","T215_31215_DI","T216_31216_DI","T220_31220_DI","T221_31221_DI","T206_14206_DI","T207_14207_DI","T613_51613_DI","T629_51629_DI"]},{id:"ledningar",label:"Ledningar",componentIds:["Utlastningsledning Grädde_1_DI","Utlastningsledning Vassle 2_1_DI","Ledn. till Gräddlager_1_DI","Ledn. under OPD-Vassle_1_DI","Ystmjölksledning_1_DI","Gräddledning_1_DI","Fylln. Ledn. Vasslesilos_1_DI","Utlastningsledning 1_1_DI","Helmjölksledning_1_DI","Mottagningslinje 1-4_1_DI","MOTTAGNINGSLINJE 5_1_DI"]},{id:"tankar",label:"Tankar",componentIds:["T444_14444_DI","T215_31215_DI","T216_31216_DI","T220_31220_DI","T221_31221_DI","T601_52601_DI","T602_52602_DI","T606_52606_DI","T607_52607_DI","T662_51662_DI","T664_51664_DI","T109_131009_DI","T110_13110_DI","T106_13106_DI","T107_13107_DI","T601_51601_DI","T602_51602_DI","T636_51636_DI","T650_51650_DI","T501_14501_DI","T704_31704_DI","T206_14206_DI","T207_14207_DI","T613_51613_DI","T629_51629_DI","T101_13101_DI","T102_13102_DI","T103_13103_DI","T111_13111_DI","T117_13117_DI","T118_13118_DI","T108_13108_DI"]},{id:"ovrigt",label:"Övrigt",componentIds:["Sur Gräns_1_DI","FÖRSKÖLJ-TANK DC1_1_DI"]}],Kt=["A","B","D","E"],zt=[["all"],["mjolk","vassle","gradde"],["ledningar","tankar"],["letter-A","letter-B","letter-D","letter-E"],["ovrigt"]],p=document.querySelector("#svg-root"),l=document.querySelector("#popup-root"),A=document.querySelector("#diagram-tabs"),f=document.querySelector("#diagram-filters"),q=document.querySelector("#help-button"),m=document.querySelector("#account-actions"),ft=Le();ft&&H();const e={isUnlocked:!1,currentUser:null,sessionLoginAt:null,activeDiagramId:x[0].id,activeComponentId:null,activePopupId:null,activeDiagramFilterId:"all",diDescriptionMode:"notes",activeHelpDiagramId:null,activeTab:L[0],isEditing:!1,draftText:"",notes:{},listBoard:T(),listActionIcons:{},svgMarkupByDiagram:{},authView:null,authError:"",authForm:{username:"",password:""},unlockPassword:"",unlockError:"",isAccountMenuOpen:!1,listViewer:null,listEditor:null,logoutNotice:xe(ft)?gt:"",autoLogoutTimerId:null};Jt();async function Jt(){ne(),ae(),window.addEventListener("resize",ee),await D(),c()}async function D(){if(!e.isUnlocked){O(),mt();return}if(!e.currentUser){O(),Wt();return}e.notes=At(e.currentUser),e.listBoard=wt(e.currentUser),He(),W(!0),yt(),It(),X(),U(),await bt()}function W(t){A.hidden=!t,q.hidden=!t,m.hidden=!t}function mt(){W(!1),document.body.classList.remove("diagram-ka"),A.innerHTML="",m.innerHTML="",f.innerHTML="",l.innerHTML="",p.innerHTML=`
    <section class="auth-screen" aria-label="Låsskärm">
      <div>
        <h1 class="auth-title">Låst sida</h1>
        <p class="auth-copy">Skriv lösenordet för att låsa upp sidan.</p>
      </div>
      <form class="auth-form" data-unlock-form="true">
        <div class="auth-fields">
          <label class="auth-field">
            <span class="auth-label">Lösenord</span>
            <input
              class="auth-input"
              type="password"
              name="unlock-password"
              autocomplete="current-password"
              value="${d(e.unlockPassword)}"
            />
          </label>
        </div>
        ${e.unlockError?`<p class="auth-error">${d(e.unlockError)}</p>`:""}
        <div class="tab-actions">
          <button class="action-button primary" type="submit">Lås upp sidan</button>
        </div>
      </form>
    </section>
  `;const t=p.querySelector('[data-unlock-form="true"]'),i=p.querySelector('input[name="unlock-password"]');t?.addEventListener("submit",async a=>{a.preventDefault(),await Yt()}),i?.addEventListener("input",a=>{a.target instanceof HTMLInputElement&&(e.unlockPassword=a.target.value,e.unlockError="")}),i?.focus()}async function Yt(){if(e.unlockPassword===Ot){e.isUnlocked=!0,e.unlockPassword="",e.unlockError="",await D();return}e.unlockError="Fel lösenord",mt()}function Wt(){W(!1),document.body.classList.remove("diagram-ka"),A.innerHTML="",m.innerHTML="",f.innerHTML="",p.innerHTML=`
    <section class="auth-screen" aria-label="Inloggning">
      <div>
        <h1 class="auth-title">Mjölkbehandling</h1>
        <p class="auth-copy">Logga in eller skapa ett lokalt konto för att komma in i appen.</p>
      </div>
      <div class="auth-actions">
        <button class="action-button primary" type="button" data-auth-open="login">Logga in</button>
        <button class="action-button" type="button" data-auth-open="create">Skapa konto</button>
      </div>
    </section>
  `,p.querySelectorAll("[data-auth-open]").forEach(t=>{t.addEventListener("click",()=>{const i=t.getAttribute("data-auth-open");(i==="login"||i==="create")&&Dt(i)})})}function I(){p.innerHTML=`
    <section class="list-board" aria-label="Listor">
      ${w.map(t=>`
        <section class="list-column">
          <header class="list-column-header">
            <h2 class="list-column-title">${t.label}</h2>
            <button
              class="icon-action-button icon-action-button--add"
              type="button"
              data-list-action="add"
              data-column-id="${t.id}"
              aria-label="Ny komponent"
            >
              ${y("add")}
            </button>
          </header>
          <div class="list-items">
            ${Xt(t.id)}
          </div>
        </section>
      `).join("")}
    </section>
  `,p.querySelectorAll("[data-list-action]").forEach(t=>{t.addEventListener("click",i=>{const a=t.getAttribute("data-list-action"),n=t.getAttribute("data-column-id"),r=t.getAttribute("data-item-id");if(n&&(i.stopPropagation(),t.getAttribute("data-disabled")!=="true")){if(a==="add"){ue(n);return}if(r){if(a==="open"){pe(n,r);return}if(a==="delete"){kt(n,r);return}if(a==="status"){ge(n,r);return}if(a==="move-up"){ot(n,r,-1);return}a==="move-down"&&ot(n,r,1)}}})})}function Xt(t){const i=e.listBoard[t]??[];return i.length===0?'<p class="list-empty">Inga punkter inlagda.</p>':i.map((a,n)=>`
    <article
      class="list-item list-item--${a.status}"
      role="button"
      tabindex="0"
      data-list-action="open"
      data-column-id="${t}"
      data-item-id="${a.id}"
      aria-label="Öppna komponent"
    >
      <div class="list-item-text">${d(Qt(a.text))}</div>
      <div class="list-item-actions">
        <button
          class="icon-action-button"
          type="button"
          data-list-action="status"
          data-column-id="${t}"
          data-item-id="${a.id}"
          aria-label="Växla status"
        >
          ${y("color")}
        </button>
        <button
          class="icon-action-button${n===0?" is-disabled":""}"
          type="button"
          data-list-action="move-up"
          data-column-id="${t}"
          data-item-id="${a.id}"
          aria-label="Flytta upp"
          data-disabled="${n===0?"true":"false"}"
        >
          ${y("up")}
        </button>
        <button
          class="icon-action-button${n===i.length-1?" is-disabled":""}"
          type="button"
          data-list-action="move-down"
          data-column-id="${t}"
          data-item-id="${a.id}"
          aria-label="Flytta ner"
          data-disabled="${n===i.length-1?"true":"false"}"
        >
          ${y("down")}
        </button>
      </div>
    </article>
  `).join("")}function Qt(t){return t.split(/\r?\n/,1)[0]??""}async function Zt(){const t=Object.entries(Ut).filter(([a])=>!e.listActionIcons[a]);if(t.length===0)return;const i=await Promise.all(t.map(async([a,n])=>{const o=await(await fetch(n)).text();return[a,te(o)]}));for(const[a,n]of i)e.listActionIcons[a]=n}function y(t){return e.listActionIcons[t]??""}function te(t){return t.replace(/<\?xml[\s\S]*?\?>/i,"").replace(/<!--[\s\S]*?-->/g,"").replace(/<svg\b/,'<svg class="icon-button-svg"').trim()}async function bt(){const t=x.find(({id:a})=>a===e.activeDiagramId);if(!t)return;if(document.body.classList.toggle("diagram-ka",t.id==="KA"),p.classList.toggle("svg-stage--list-board",t.id==="LIST"),t.id==="LIST"){await Zt(),I();return}if(!e.svgMarkupByDiagram[t.id]){const a=await fetch(t.file);e.svgMarkupByDiagram[t.id]=await a.text()}p.innerHTML=e.svgMarkupByDiagram[t.id];const i=p.querySelector("svg");if(!i)throw new Error("SVG could not be loaded.");i.removeAttribute("width"),i.removeAttribute("height"),i.setAttribute("preserveAspectRatio","xMidYMid meet"),t.id==="DI"&&ie(i),vt(i),ht(i),oe(i,t.id),Vt(i,t.id),Tt(i,t.id),$()}function ee(){if(!e.currentUser||e.activeDiagramId==="LIST")return;const t=p.querySelector("svg");if(!t)return;vt(t),ht(t);const i=l.querySelector(".tab-textarea");i instanceof HTMLTextAreaElement&&P(i)}function vt(t){const i=p.getBoundingClientRect(),a=Math.floor(i.width),n=Math.floor(i.height);if(!a||!n)return;const r=t.viewBox.baseVal,o=r?.width||Number(t.getAttribute("width"))||1,s=r?.height||Number(t.getAttribute("height"))||1,u=Math.min(a/o,n/s);t.style.width=`${o*u}px`,t.style.height=`${s*u}px`}function ht(t){if(e.activeDiagramId!=="DI"){f.style.removeProperty("--filters-top"),f.style.removeProperty("--filters-left"),f.style.removeProperty("--filters-right"),f.style.removeProperty("--filters-gap");return}const i=t.getBoundingClientRect(),a=p.getBoundingClientRect(),n=window.getComputedStyle(document.body),r=Number.parseFloat(n.paddingTop)||0,o=Math.max(0,i.top-a.top),s=Math.max(0,i.left-a.left),u=Math.max(0,a.right-i.right);f.style.setProperty("--filters-top",`${o}px`),f.style.setProperty("--filters-left",`${s}px`),f.style.setProperty("--filters-right",`${u}px`),f.style.setProperty("--filters-gap",`${Math.max(24,r*2.25)}px`)}function ie(t){const i=t.querySelector("#Buttons");if(!i)return;const a=i.getBBox();if(!a.width||!a.height)return;const n=8,r=Math.max(0,a.x-n),o=Math.max(0,a.y-n),s=a.width+n*2,u=a.height+n*2;t.setAttribute("viewBox",`${r} ${o} ${s} ${u}`)}function yt(){A.innerHTML=x.map(t=>`
    <button
      class="diagram-tab${t.id===e.activeDiagramId?" is-selected":""}"
      type="button"
      data-diagram-id="${t.id}"
    >
      ${t.label}
    </button>
  `).join(""),A.querySelectorAll("[data-diagram-id]").forEach(t=>{t.addEventListener("click",async()=>{const i=t.getAttribute("data-diagram-id");!i||i===e.activeDiagramId||(e.activeDiagramId=i,B(),yt(),It(),U(),c(),await bt())})})}function It(){const i=x.find(({id:a})=>a===e.activeDiagramId)?.label??"aktuell sida";q.setAttribute("aria-label",`Öppna hjälp för ${i}`),q.setAttribute("title",`Hjälp: ${i}`)}function X(){if(!e.currentUser){m.innerHTML="";return}m.innerHTML=`
    <div class="account-menu">
      <button class="account-name action-button" type="button" data-account-action="toggle-menu">
        ${d(e.currentUser)}
      </button>
      ${e.isAccountMenuOpen?`
            <div class="account-menu-panel">
              <button class="action-button" type="button" data-account-action="logout">Logga ut</button>
              <button class="action-button" type="button" data-account-action="delete">Ta bort konto</button>
            </div>
          `:""}
    </div>
  `,m.querySelector('[data-account-action="toggle-menu"]')?.addEventListener("click",()=>{e.isAccountMenuOpen=!e.isAccountMenuOpen,X()}),m.querySelector('[data-account-action="logout"]')?.addEventListener("click",()=>{Ae()}),m.querySelector('[data-account-action="delete"]')?.addEventListener("click",()=>{Dt("delete")})}function ae(){document.addEventListener("pointerdown",t=>{if(!e.isAccountMenuOpen)return;const i=t.target;i instanceof Node&&(m.contains(i)||(e.isAccountMenuOpen=!1,X()))})}function ne(){q.addEventListener("click",()=>{if(e.currentUser){if(e.activeHelpDiagramId===e.activeDiagramId){z();return}e.activeHelpDiagramId=e.activeDiagramId,e.activeComponentId=null,e.activePopupId=null,e.isEditing=!1,e.draftText="",$(),c()}})}function U(){if(!e.currentUser||e.activeDiagramId!=="DI"){f.innerHTML="";return}const t=G(),i=new Map(t.map(r=>[r.id,r])),a=zt.map(r=>`<div class="diagram-filter-row">${r.map(s=>i.get(s)).filter(Boolean).map(s=>`
        <button
          class="diagram-filter${s.id===e.activeDiagramFilterId?" is-selected":""}"
          type="button"
          data-filter-id="${s.id}"
        >
          ${s.label}
        </button>
      `).join("")}</div>`).join(""),n=e.diDescriptionMode==="notes"?"Återgå till originalbeskrivningar":"Gå till dina egna beskrivningar";f.innerHTML=`
    ${a}
    <div class="diagram-filter-row diagram-filter-row--align-end">
      <button class="diagram-filter" type="button" data-action="toggle-di-descriptions">
        ${n}
      </button>
    </div>
  `,f.querySelectorAll("[data-filter-id]").forEach(r=>{r.addEventListener("click",()=>{const o=r.getAttribute("data-filter-id");if(!o||o===e.activeDiagramFilterId)return;e.activeDiagramFilterId=o,U();const s=p.querySelector("svg");s&&Tt(s,e.activeDiagramId)})}),f.querySelector('[data-action="toggle-di-descriptions"]')?.addEventListener("click",()=>{re()})}function re(){if(e.diDescriptionMode=e.diDescriptionMode==="notes"?"original":"notes",U(),e.activeDiagramId!=="DI")return;const t=p.querySelector("svg");t&&Vt(t,"DI")}function oe(t,i){const a=t.querySelectorAll(`#Buttons g[id$="_${i}"]`);for(const n of a)i==="KA"&&ce(n,t),n.classList.add("svg-button"),de(n),n.dataset.normalizedId=k(n.id),n.setAttribute("tabindex","0"),n.setAttribute("role","button"),n.setAttribute("aria-label",`${Ne(n.id)}: öppna popup`),n.addEventListener("click",()=>nt(n.id)),n.addEventListener("keydown",r=>{(r.key==="Enter"||r.key===" ")&&(r.preventDefault(),nt(n.id))})}function Tt(t,i){const a=t.querySelectorAll(`#Buttons g[id$="_${i}"]`);if(i!=="DI"){a.forEach(o=>{o.classList.remove("is-filtered-out"),o.setAttribute("tabindex","0"),o.setAttribute("aria-disabled","false")});return}const n=G().find(({id:o})=>o===e.activeDiagramFilterId)??G()[0],r=new Set(se(n,t).map(k));a.forEach(o=>{const s=n.id==="all"||r.has(o.dataset.normalizedId??"");o.classList.toggle("is-filtered-out",!s),o.setAttribute("tabindex",s?"0":"-1"),o.setAttribute("aria-disabled",String(!s))}),e.activeComponentId&&n.id!=="all"&&!r.has(k(e.activeComponentId))&&K()}function G(){return[...Gt,...Kt.map(t=>({id:`letter-${t}`,label:t,componentIds:[],matcher:i=>le(i)===t}))]}function se(t,i){return t.matcher?Array.from(i.querySelectorAll('#Buttons g[id$="_DI"]')).filter(a=>t.matcher(a)).map(a=>k(a.id)):t.componentIds}function le(t){const i=t.querySelector('g[id^="Disk"]');if(!i)return"";const a=i.querySelector("path[id]");return a?k(a.id).charAt(0).toUpperCase():""}function ce(t,i){if(t.querySelector(":scope > .svg-hitbox"))return;const a=t.getBBox();if(!a.width||!a.height)return;const n=document.createElementNS(i.namespaceURI,"rect");n.setAttribute("class","svg-hitbox"),n.setAttribute("x",String(a.x)),n.setAttribute("y",String(a.y)),n.setAttribute("width",String(a.width)),n.setAttribute("height",String(a.height)),n.setAttribute("fill","#ffffff"),n.setAttribute("opacity","0"),t.append(n)}function de(t){const i=t.getBBox(),a=Math.max(i.width,i.height);let n=1.035;a<90?n=1.16:a<140?n=1.125:a<220?n=1.095:a<340?n=1.07:a<520&&(n=1.05),t.style.setProperty("--hover-scale",String(n))}function nt(t){if(!e.currentUser)return;const i=Ht(t),a=e.activeDiagramId==="DI"?"Disk":L[0];e.authView=null,e.authError="",e.activeHelpDiagramId=null,e.activeComponentId=t,e.activePopupId=i,e.activeTab=a,e.isEditing=!1,e.draftText=M(a),$(),c()}function K(){e.activeComponentId=null,e.activePopupId=null,e.isEditing=!1,e.draftText="",$(),c()}function z(){e.activeHelpDiagramId=null,c()}function ue(t,i=null){if(i){const n=(e.listBoard[t]??[]).find(r=>r.id===i)??null;if(!n)return;e.listViewer={columnId:t,itemId:i,text:n.text,error:"",isEditing:!0},e.listEditor=null,c();return}const a=i?(e.listBoard[t]??[]).find(n=>n.id===i)??null:null;e.listEditor={columnId:t,itemId:i,text:a?.text??"",error:""},c()}function pe(t,i){const a=(e.listBoard[t]??[]).find(n=>n.id===i)??null;a&&(e.listViewer={columnId:t,itemId:i,text:a.text,error:"",isEditing:!1},e.listEditor=null,c())}function F(){e.listViewer=null,c()}function C(){e.listEditor=null,c()}function rt(){if(!e.currentUser)return;if(e.listViewer?.isEditing){const a=e.listViewer.text.trim();if(!a){e.listViewer.error="Skriv text för komponenten.",c();return}e.listBoard[e.listViewer.columnId]=(e.listBoard[e.listViewer.columnId]??[]).map(n=>n.id===e.listViewer?.itemId?{...n,text:a}:n),E(),e.listViewer={...e.listViewer,text:a,error:"",isEditing:!1},e.activeDiagramId==="LIST"&&I(),c();return}if(!e.listEditor)return;const t=e.listEditor.text.trim();if(!t){e.listEditor.error="Skriv text för komponenten.",c();return}const i=e.listBoard[e.listEditor.columnId]??[];e.listEditor.itemId?e.listBoard[e.listEditor.columnId]=i.map(a=>a.id===e.listEditor.itemId?{...a,text:t}:a):e.listBoard[e.listEditor.columnId]=[...i,{id:crypto.randomUUID(),text:t,status:"none"}],E(),e.listEditor=null,e.listViewer=null,e.activeDiagramId==="LIST"&&I(),c()}function kt(t,i){e.listBoard[t]=(e.listBoard[t]??[]).filter(a=>a.id!==i),E(),e.activeDiagramId==="LIST"&&I()}function ge(t,i){e.listBoard[t]=(e.listBoard[t]??[]).map(a=>{if(a.id!==i)return a;const n=N.indexOf(a.status),r=N[(n+1)%N.length];return{...a,status:r}}),E(),e.activeDiagramId==="LIST"&&I()}function ot(t,i,a){const n=[...e.listBoard[t]??[]],r=n.findIndex(s=>s.id===i),o=r+a;r<0||o<0||o>=n.length||([n[r],n[o]]=[n[o],n[r]],e.listBoard[t]=n,E(),e.activeDiagramId==="LIST"&&I())}function Dt(t){e.authView=t,e.authError="",t!=="delete"&&(e.authForm={username:"",password:""}),c()}function j(){e.authView=null,e.authError="",e.authForm={username:"",password:""},c()}function fe(t){e.activeTab=t,e.isEditing=!1,e.draftText=M(t),c()}function me(){e.isEditing=!0,e.draftText=M(e.activeTab),c()}function be(){if(!e.activePopupId||!e.currentUser)return;const t=Q(e.activePopupId);t[e.activeTab]=e.draftText,ye(e.activePopupId),Bt()&&e.diDescriptionMode==="notes"&&qe(e.activeComponentId),e.isEditing=!1,c()}function ve(){e.draftText=M(e.activeTab),e.isEditing=!1,c()}function c(){if(e.listViewer){const r=w.find(({id:s})=>s===e.listViewer?.columnId)?.label??"",o=(e.listBoard[e.listViewer.columnId]??[]).find(s=>s.id===e.listViewer?.itemId)??null;if(!o){e.listViewer=null,c();return}l.innerHTML=`
      <div class="modal-backdrop" data-close-backdrop="true">
        <section class="modal help-modal" role="dialog" aria-modal="true" aria-labelledby="list-viewer-title">
          <header class="modal-header">
            <div class="modal-heading">
              <p class="modal-kicker">Listor</p>
              <h2 class="modal-title" id="list-viewer-title">${e.listViewer.isEditing?"Redigera komponent":d(r)}</h2>
            </div>
            <button class="modal-close" type="button" data-action="close-list-viewer" aria-label="Stäng">×</button>
          </header>
          <div class="auth-form list-viewer-body${e.listViewer.isEditing?" list-viewer-body--editing":""}">
            ${e.listViewer.isEditing?`
                  <label class="auth-field">
                    <span class="auth-label">Text</span>
                    <textarea class="tab-textarea" data-list-viewer-text="true">${d(e.listViewer.text)}</textarea>
                  </label>
                  ${e.listViewer.error?`<p class="auth-error">${d(e.listViewer.error)}</p>`:""}
                `:`<div class="list-viewer-text">${d(o.text)}</div>`}
            <div class="tab-actions">
              ${e.listViewer.isEditing?`
                    <button class="action-button" type="button" data-action="cancel-list-viewer-edit">Avbryt</button>
                    <button class="action-button primary" type="button" data-action="save-list-viewer-edit">Spara</button>
                  `:`
                    <button
                      class="icon-action-button icon-action-button--popup icon-action-button--popup-edit"
                      type="button"
                      data-action="edit-list-viewer"
                      aria-label="Redigera komponent"
                    >
                      ${y("edit")}
                    </button>
                    <button
                      class="icon-action-button icon-action-button--popup"
                      type="button"
                      data-action="delete-list-viewer"
                      aria-label="Ta bort komponent"
                    >
                      ${y("delete")}
                    </button>
                  `}
            </div>
          </div>
        </section>
      </div>
    `,h(F),l.querySelector('[data-action="close-list-viewer"]')?.addEventListener("click",F),l.querySelector('[data-action="edit-list-viewer"]')?.addEventListener("click",()=>{e.listViewer&&(e.listViewer={...e.listViewer,text:o.text,error:"",isEditing:!0},c())}),l.querySelector('[data-action="delete-list-viewer"]')?.addEventListener("click",()=>{if(!e.listViewer)return;const{columnId:s,itemId:u}=e.listViewer;kt(s,u),F()}),l.querySelector('[data-action="cancel-list-viewer-edit"]')?.addEventListener("click",()=>{e.listViewer&&(e.listViewer={...e.listViewer,text:o.text,error:"",isEditing:!1},c())}),l.querySelector('[data-action="save-list-viewer-edit"]')?.addEventListener("click",rt),l.querySelector('[data-list-viewer-text="true"]')?.addEventListener("input",s=>{!(s.target instanceof HTMLTextAreaElement)||!e.listViewer||(e.listViewer.text=s.target.value,e.listViewer.error="")}),e.listViewer.isEditing&&l.querySelector('[data-list-viewer-text="true"]')?.focus();return}if(e.listEditor){const r=w.find(({id:o})=>o===e.listEditor.columnId)?.label??"";l.innerHTML=`
      <div class="modal-backdrop" data-close-backdrop="true">
        <section class="modal help-modal" role="dialog" aria-modal="true" aria-labelledby="list-editor-title">
          <header class="modal-header">
            <div class="modal-heading">
              <p class="modal-kicker">Listor</p>
              <h2 class="modal-title" id="list-editor-title">${e.listEditor.itemId?"Redigera komponent":`Ny komponent i ${d(r)}`}</h2>
            </div>
            <button class="modal-close" type="button" data-action="close-list-editor" aria-label="Stäng">×</button>
          </header>
          <div class="auth-form">
            <label class="auth-field">
              <span class="auth-label">Text</span>
              <textarea class="tab-textarea" data-list-editor-text="true">${d(e.listEditor.text)}</textarea>
            </label>
            ${e.listEditor.error?`<p class="auth-error">${d(e.listEditor.error)}</p>`:""}
            <div class="tab-actions">
              <button class="action-button" type="button" data-action="cancel-list-editor">Avbryt</button>
              <button class="action-button primary" type="button" data-action="save-list-editor">Spara</button>
            </div>
          </div>
        </section>
      </div>
    `,h(C),l.querySelector('[data-action="close-list-editor"]')?.addEventListener("click",C),l.querySelector('[data-action="cancel-list-editor"]')?.addEventListener("click",C),l.querySelector('[data-action="save-list-editor"]')?.addEventListener("click",rt),l.querySelector('[data-list-editor-text="true"]')?.addEventListener("input",o=>{!(o.target instanceof HTMLTextAreaElement)||!e.listEditor||(e.listEditor.text=o.target.value,e.listEditor.error="")}),l.querySelector('[data-list-editor-text="true"]')?.focus();return}if(e.logoutNotice){l.innerHTML=`
      <div class="modal-backdrop" data-close-backdrop="true">
        <section class="modal help-modal" role="dialog" aria-modal="true" aria-labelledby="logout-notice-title">
          <header class="modal-header">
            <div class="modal-heading">
              <p class="modal-kicker">Information</p>
              <h2 class="modal-title" id="logout-notice-title">Automatisk utloggning</h2>
            </div>
            <button class="modal-close" type="button" data-action="close-logout-notice" aria-label="Stäng">×</button>
          </header>
          <div class="help-content">${d(e.logoutNotice)}</div>
        </section>
      </div>
    `,h(st),l.querySelector('[data-action="close-logout-notice"]')?.addEventListener("click",st);return}if(e.authView){he();return}if(e.activeHelpDiagramId){const o=x.find(({id:u})=>u===e.activeHelpDiagramId)?.label??"Hjälp",s=Rt[e.activeHelpDiagramId]??"";l.innerHTML=`
      <div class="modal-backdrop" data-close-backdrop="true">
        <section class="modal help-modal" role="dialog" aria-modal="true" aria-labelledby="help-modal-title">
          <header class="modal-header">
            <div class="modal-heading">
              <p class="modal-kicker">Hjälp</p>
              <h2 class="modal-title" id="help-modal-title">${d(o)}</h2>
            </div>
            <button class="modal-close" type="button" data-action="close-help" aria-label="Stäng hjälp">×</button>
          </header>
          <div class="help-content">${d(s)}</div>
        </section>
      </div>
    `,h(z),l.querySelector('[data-action="close-help"]')?.addEventListener("click",z);return}if(!e.activeComponentId){l.innerHTML="";return}const t=Pe(e.activePopupId),i=e.isEditing?e.draftText:M(e.activeTab),a=Ft[e.activeTab]??"";l.innerHTML=`
    <div class="modal-backdrop modal-backdrop--popup" data-close-backdrop="true">
      <section class="modal modal--popup" role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <header class="modal-header">
          <div class="modal-heading">
            <p class="modal-kicker">Komponent</p>
            <h2 class="modal-title" id="modal-title">${d(t)}</h2>
          </div>
          <button class="modal-close" type="button" data-action="close" aria-label="Stäng popup">×</button>
        </header>
        <div class="tab-list" role="tablist" aria-label="Anteckningskategorier">
          ${L.map(r=>`
            <button
              class="tab-button${r===e.activeTab?" is-selected":""}"
              type="button"
              role="tab"
              aria-selected="${String(r===e.activeTab)}"
              data-tab="${r}"
            >
              ${r}
            </button>
          `).join("")}
        </div>
        <div class="tab-panel">
          <div class="tab-panel-head">
            ${e.isEditing?'<p class="tab-caption">Redigeringsläge</p>':""}
          </div>
          <textarea
            class="tab-textarea"
            ${e.isEditing?"":"readonly"}
            aria-label="Anteckningar för ${d(e.activeTab)}"
            placeholder="${d(a)}"
          >${d(i)}</textarea>
          <div class="tab-actions">
            ${e.isEditing?`
                  <button class="action-button" type="button" data-action="cancel">Avbryt</button>
                  <button class="action-button primary" type="button" data-action="save">Spara</button>
                `:`
                  <button class="action-button primary" type="button" data-action="edit">Redigera</button>
                `}
          </div>
        </div>
      </section>
    </div>
  `;const n=l.querySelector(".tab-textarea");h(K),l.querySelector('[data-action="close"]')?.addEventListener("click",K),l.querySelector('[data-action="edit"]')?.addEventListener("click",me),l.querySelector('[data-action="save"]')?.addEventListener("click",be),l.querySelector('[data-action="cancel"]')?.addEventListener("click",ve),l.querySelectorAll("[data-tab]").forEach(r=>{r.addEventListener("click",()=>{const o=r.getAttribute("data-tab");o&&fe(o)})}),n?.addEventListener("input",r=>{if(e.isEditing&&r.target instanceof HTMLTextAreaElement){const o=e.draftText;e.draftText=r.target.value,P(r.target),r.target.scrollHeight>r.target.clientHeight+1&&(e.draftText=o,r.target.value=o,P(r.target))}}),n instanceof HTMLTextAreaElement&&P(n),e.isEditing&&(n?.focus(),n?.setSelectionRange(n.value.length,n.value.length))}function P(t){const i=t.closest(".modal"),a=t.closest(".modal-backdrop");if(!(i instanceof HTMLElement)||!(a instanceof HTMLElement))return;const n=window.getComputedStyle(a),r=Number.parseFloat(n.paddingTop)||24,o=Number.parseFloat(n.paddingBottom)||r,s=Math.max(240,window.innerHeight-r-o),u=160;t.style.height="auto",t.style.overflowY="hidden";const b=window.getComputedStyle(t),v=(Number.parseFloat(b.borderTopWidth)||0)+(Number.parseFloat(b.borderBottomWidth)||0),S=Math.max(u,t.scrollHeight+v);t.style.height=`${S}px`;const V=i.scrollHeight,g=Math.max(0,V-s),_=Math.max(u,S-g);t.style.height=`${_}px`,t.style.overflowY="hidden"}function he(){const t=e.authView==="delete",i=t?"Ta bort konto":e.authView==="create"?"Skapa konto":"Logga in",a=t?"Ta bort konto":e.authView==="create"?"Skapa konto":"Logga in";l.innerHTML=`
    <div class="modal-backdrop" data-close-backdrop="true">
      <section class="modal help-modal" role="dialog" aria-modal="true" aria-labelledby="auth-modal-title">
        <header class="modal-header">
          <div class="modal-heading">
            <p class="modal-kicker">Konto</p>
            <h2 class="modal-title" id="auth-modal-title">${i}</h2>
          </div>
          <button class="modal-close" type="button" data-action="close-auth" aria-label="Stäng">×</button>
        </header>
        ${t?`
              <div class="auth-form">
                <p class="confirm-copy">Är du säker på att du vill ta bort kontot? Alla dina anteckningar kommer att raderas.</p>
                <div class="tab-actions">
                  <button class="action-button" type="button" data-action="cancel-auth">Avbryt</button>
                  <button class="action-button primary" type="button" data-action="submit-auth">${a}</button>
                </div>
              </div>
            `:`
              <form class="auth-form" data-auth-form="true">
                <div class="auth-fields">
                  <label class="auth-field">
                    <span class="auth-label">Användarnamn</span>
                    <input
                      class="auth-input"
                      type="text"
                      name="username"
                      autocomplete="username"
                      value="${d(e.authForm.username)}"
                    />
                  </label>
                  <label class="auth-field">
                    <span class="auth-label">Lösenord</span>
                    <input
                      class="auth-input"
                      type="password"
                      name="password"
                      autocomplete="${e.authView==="create"?"new-password":"current-password"}"
                      value="${d(e.authForm.password)}"
                    />
                  </label>
                </div>
                ${e.authError?`<p class="auth-error">${d(e.authError)}</p>`:""}
                <div class="tab-actions">
                  <button class="action-button" type="button" data-action="cancel-auth">Avbryt</button>
                  <button class="action-button primary" type="submit">${a}</button>
                </div>
              </form>
            `}
      </section>
    </div>
  `,h(j),l.querySelector('[data-action="close-auth"]')?.addEventListener("click",j),l.querySelector('[data-action="cancel-auth"]')?.addEventListener("click",j),l.querySelector('[data-action="submit-auth"]')?.addEventListener("click",()=>{lt()}),l.querySelector('[data-auth-form="true"]')?.addEventListener("submit",r=>{r.preventDefault(),lt()}),l.querySelectorAll(".auth-input").forEach(r=>{r.addEventListener("input",o=>{o.target instanceof HTMLInputElement&&(e.authForm={...e.authForm,[o.target.name]:o.target.value})})}),l.querySelector(".auth-input")?.focus()}function st(){e.logoutNotice="",c()}function h(t){const i=l.querySelector(".modal-backdrop");let a=!1;i?.addEventListener("pointerdown",n=>{a=n.target instanceof HTMLElement&&n.target.dataset.closeBackdrop==="true"}),i?.addEventListener("click",n=>{a&&n.target instanceof HTMLElement&&n.target.dataset.closeBackdrop==="true"&&t(),a=!1})}async function lt(){if(e.authView==="delete"){await Ee();return}const t=e.authForm.username.trim(),i=e.authForm.password;if(!t||!i){e.authError="Fyll i användarnamn och lösenord.",c();return}if(e.authView==="create"){await _e(t,i);return}await we(t,i)}function $(){if(p.querySelector(".svg-button.is-active")?.classList.remove("is-active"),!e.activeComponentId)return;p.querySelector(`#${CSS.escape(e.activeComponentId)}`)?.classList.add("is-active")}function Q(t){return t?(e.notes[t]||(e.notes[t]=ct()),e.notes[t]):ct()}function ct(){return Object.fromEntries(L.map(t=>[t,""]))}function St(t,i){return t?Q(t)[i]??"":""}function M(t){return Bt(t)?_t(e.activeComponentId):St(e.activePopupId,t)}function _t(t){return t?St(Ht(t),"Disk"):""}function ye(t){!e.currentUser||!t||localStorage.setItem(Te(e.currentUser,t),JSON.stringify(Q(t)))}function T(){return Object.fromEntries(w.map(t=>[t.id,[]]))}function wt(t){try{const i=localStorage.getItem(Z(t));if(!i)return T();const a=JSON.parse(i);return Ie(a)}catch{return T()}}function Ie(t){const i=T();for(const a of w){const n=Array.isArray(t?.[a.id])?t[a.id]:[];i[a.id]=n.filter(r=>typeof r?.text=="string").map(r=>({id:typeof r.id=="string"?r.id:crypto.randomUUID(),text:r.text,status:N.includes(r.status)?r.status:"none"}))}return i}function E(){e.currentUser&&localStorage.setItem(Z(e.currentUser),JSON.stringify(e.listBoard))}function At(t){const i=`${Y}${t}::`,a={};for(let n=0;n<localStorage.length;n+=1){const r=localStorage.key(n);if(!r||!r.startsWith(i))continue;const o=r.split("::").pop();if(o)try{const s=JSON.parse(localStorage.getItem(r)??"null");Se(s)&&(a[o]=s)}catch{continue}}return a}function Te(t,i){return`${Y}${t}::${Pt}::${i}`}function Z(t){return`${qt}${t}`}function ke(t){const i=[],a=`${Y}${t}::`;for(let n=0;n<localStorage.length;n+=1){const r=localStorage.key(n);r?.startsWith(a)&&i.push(r)}i.forEach(n=>localStorage.removeItem(n))}function De(t){localStorage.removeItem(Z(t))}function Se(t){return!!(t&&typeof t=="object"&&L.every(i=>Object.hasOwn(t,i)))}async function _e(t,i){const a=tt();if(a.some(o=>o.username===t)){e.authError="Användarnamn är upptaget.",c();return}const n=Ve(),r=await $t(i,n);a.push({username:t,passwordHash:r,salt:n}),Lt(a),await Et(t)}async function we(t,i){const a=tt().find(r=>r.username===t);if(!a){e.authError="Fel användarnamn eller lösenord",c();return}if(await $t(i,a.salt)!==a.passwordHash){e.authError="Fel användarnamn eller lösenord",c();return}await Et(t)}async function Et(t){const i=new Date().toISOString();$e(t,i),e.currentUser=t,e.sessionLoginAt=i,e.notes=At(t),e.listBoard=wt(t),B(),e.authView=null,e.authError="",e.logoutNotice="",e.authForm={username:"",password:""},await D(),c()}async function Ae(){H(),e.currentUser=null,e.sessionLoginAt=null,e.notes={},e.listBoard=T(),B(),e.authView=null,e.isAccountMenuOpen=!1,await D(),c()}async function Ee(){if(!e.currentUser)return;const t=e.currentUser,i=tt().filter(a=>a.username!==t);Lt(i),ke(t),De(t),H(),e.currentUser=null,e.sessionLoginAt=null,e.notes={},e.listBoard=T(),B(),e.authView=null,e.isAccountMenuOpen=!1,await D(),c()}function tt(){try{const t=localStorage.getItem(pt);if(!t)return[];const i=JSON.parse(t);return Array.isArray(i)?i:[]}catch{return[]}}function Lt(t){localStorage.setItem(pt,JSON.stringify(t))}function Le(){try{const t=localStorage.getItem(J);if(!t)return null;const i=JSON.parse(t);return i&&typeof i=="object"?i:null}catch{return null}}function xe(t){return!t||typeof t.username!="string"||!Me(t)?!1:(H(),!0)}function $e(t,i){localStorage.setItem(J,JSON.stringify({username:t,loginAt:i}))}function H(){localStorage.removeItem(J)}function Me(t,i=new Date){if(typeof t?.loginAt!="string")return!0;const a=new Date(t.loginAt);return Number.isNaN(a.getTime())?!0:xt(a)<=i}function He(){if(O(),!e.currentUser)return;const t=xt(new Date),i=Math.max(0,t.getTime()-Date.now());e.autoLogoutTimerId=window.setTimeout(()=>{Be()},i)}function O(){e.autoLogoutTimerId!==null&&(window.clearTimeout(e.autoLogoutTimerId),e.autoLogoutTimerId=null)}async function Be(){e.currentUser&&(H(),O(),e.currentUser=null,e.sessionLoginAt=null,e.notes={},e.authView=null,e.logoutNotice=gt,B(),await D(),c())}function xt(t){const i=at.map(n=>dt(t,n)).filter(n=>n>t).sort((n,r)=>n.getTime()-r.getTime());if(i.length>0)return i[0];const a=new Date(t);return a.setDate(a.getDate()+1),dt(a,at[0])}function dt(t,i){const[a,n]=i.split(":").map(Number),r=new Date(t);return r.setHours(a,n,0,0),r}function Ve(){const t=new Uint8Array(16);return crypto.getRandomValues(t),Mt(t)}async function $t(t,i){const a=new TextEncoder().encode(`${i}:${t}`),n=await crypto.subtle.digest("SHA-256",a);return Mt(new Uint8Array(n))}function Mt(t){return Array.from(t,i=>i.toString(16).padStart(2,"0")).join("")}function B(){e.activeComponentId=null,e.activePopupId=null,e.activeHelpDiagramId=null,e.isEditing=!1,e.draftText="",e.listViewer=null,e.listEditor=null,$()}function Ne(t){const i=et(t);return it(i).replace(/_[^_]+_(?:MBH|VBH|DI|KA)$/,"").replace(/_(?:MBH|VBH|DI|KA)$/,"").replaceAll("_"," ").replace(/\s+/g," ").trim()}function Pe(t){const i=et(t),a=it(i),n=jt[a];return n||a.replaceAll("_"," ").replace(/\s+/g," ").trim()}function Ht(t){const i=k(t);return Ct[i]??i.split("_")[0]??i}function Bt(t=e.activeTab){return e.activeDiagramId==="DI"&&t==="Disk"}function k(t){return it(et(t)).replace(/\s+/g," ").trim()}function Vt(t,i){if(i!=="DI")return;t.querySelectorAll(`#Buttons g[id$="_${i}"]`).forEach(n=>Nt(n.id))}function qe(t){p.querySelector(`#${CSS.escape(t)}`)&&Nt(t)}function Nt(t){const i=p.querySelector(`#${CSS.escape(t)}`);if(!i)return;const a=i.querySelector('g[id^="Beskrivning"]');if(!a)return;const n=a.querySelector("rect");if(!n)return;const r=a.querySelectorAll('path[id^="Text"]'),o=_t(t),s=a.querySelector(".editable-description-text");if(e.diDescriptionMode==="original"||!o){r.forEach(_=>_.removeAttribute("display")),s?.remove();return}r.forEach(_=>_.setAttribute("display","none"));const u=Number(n.getAttribute("x")??0),b=Number(n.getAttribute("y")??0),v=Number(n.getAttribute("width")??0),S=Number(n.getAttribute("height")??0),V=a.ownerSVGElement?.namespaceURI;if(!V||!v||!S)return;const g=s??document.createElementNS(V,"text");g.setAttribute("class","editable-description-text"),g.setAttribute("x",String(u+v/2)),g.setAttribute("y",String(b+S/2)),g.setAttribute("text-anchor","middle"),g.setAttribute("dominant-baseline","middle"),g.setAttribute("fill","black"),g.setAttribute("font-size","22"),g.setAttribute("font-family","Helvetica Neue, Helvetica, Arial, sans-serif"),g.removeAttribute("lengthAdjust"),g.removeAttribute("textLength"),s||a.append(g),g.textContent=Oe(g,o,v)}function Oe(t,i,a){const n=Math.max(0,a-16),r=" .. ";if(!i||n<=0)return"";if(t.textContent=i,R(t)<=n)return i;let o=0,s=i.length,u="";for(;o<=s;){const b=Math.floor((o+s)/2),v=`${i.slice(0,b).trimEnd()}${r}`;t.textContent=v,R(t)<=n?(u=v,o=b+1):s=b-1}return u||(t.textContent=r,R(t)<=n?r:"")}function R(t){try{return t.getComputedTextLength()}catch{return Number.POSITIVE_INFINITY}}function et(t){const i=document.createElement("textarea");return i.innerHTML=t,i.value}function it(t){const i=ut(t);if(!/[ÃÂâ]/.test(i))return i;try{const a=Uint8Array.from([...i].map(n=>n.charCodeAt(0)&255));return ut(new TextDecoder("utf-8").decode(a))}catch{return i}}function ut(t){return t.replaceAll("Ã¶","ö").replaceAll("Ã","Ö").replaceAll("Ã–","Ö").replaceAll("Ã¤","ä").replaceAll("Ã","Ä").replaceAll("Ã„","Ä").replaceAll("Ã¥","å").replaceAll("Ã","Å").replaceAll("Ã…","Å")}function d(t){return t.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}
