(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function a(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(r){if(r.ep)return;r.ep=!0;const o=a(r);fetch(r.href,o)}})();const pt="users",W="session",Y="notes::",Ut="shared",Nt="list-board::",at=["05:45","13:45","17:45","21:45"],gt="Du har blivit utloggad. Vid skiftöverlämning [05:45 , 13:45 , 17:45 , 21:45] sker en automatisk utloggning.",Pt="mbh2026",qt={edit:new URL("data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20version='1.1'%20id='Uploaded%20to%20svgrepo.com'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='800px'%20height='800px'%20viewBox='0%200%2032%2032'%20xml:space='preserve'%3e%3cstyle%20type='text/css'%3e%20.sharpcorners_een{fill:%23111918;}%20%3c/style%3e%3cpath%20class='sharpcorners_een'%20d='M23.621,13.328L7.657,29.293L2,30l0.707-5.657L18.672,8.379L23.621,13.328z%20M24.328,12.621%20l2.293-2.293l-4.95-4.95l-2.293,2.293L24.328,12.621z%20M28.87,5.251L26.749,3.13c-0.781-0.781-2.047-0.781-2.828,0l-1.542,1.542%20l4.95,4.95L28.87,8.08C29.651,7.299,29.651,6.032,28.87,5.251z'/%3e%3c/svg%3e",import.meta.url).href,up:new URL("data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'%20standalone='no'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2032%2032'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20xmlns:sketch='http://www.bohemiancoding.com/sketch/ns'%3e%3ctitle%3earrow-up-square%3c/title%3e%3cdesc%3eCreated%20with%20Sketch%20Beta.%3c/desc%3e%3cdefs%3e%3c/defs%3e%3cg%20id='Page-1'%20stroke='none'%20stroke-width='1'%20fill='none'%20fill-rule='evenodd'%20sketch:type='MSPage'%3e%3cg%20id='Icon-Set-Filled'%20sketch:type='MSLayerGroup'%20transform='translate(-518.000000,%20-985.000000)'%20fill='%23000000'%3e%3cpath%20d='M540.535,1000.535%20C540.145,1000.926%20539.512,1000.926%20539.121,1000.535%20L535,996.414%20L535,1007%20C535,1007.55%20534.552,1008%20534,1008%20C533.447,1008%20533,1007.55%20533,1007%20L533,996.414%20L528.879,1000.535%20C528.488,1000.926%20527.854,1000.926%20527.465,1000.535%20C527.074,1000.146%20527.074,999.512%20527.465,999.121%20L533.121,993.465%20C533.361,993.225%20533.689,993.15%20534,993.205%20C534.311,993.15%20534.639,993.225%20534.879,993.465%20L540.535,999.121%20C540.926,999.512%20540.926,1000.146%20540.535,1000.535%20L540.535,1000.535%20Z%20M546,985%20L522,985%20C519.791,985%20518,986.791%20518,989%20L518,1013%20C518,1015.21%20519.791,1017%20522,1017%20L546,1017%20C548.209,1017%20550,1015.21%20550,1013%20L550,989%20C550,986.791%20548.209,985%20546,985%20L546,985%20Z'%20id='arrow-up-square'%20sketch:type='MSShapeGroup'%3e%3c/path%3e%3c/g%3e%3c/g%3e%3c/svg%3e",import.meta.url).href,down:new URL("data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'%20standalone='no'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2032%2032'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20xmlns:sketch='http://www.bohemiancoding.com/sketch/ns'%3e%3ctitle%3earrow-down-square%3c/title%3e%3cdesc%3eCreated%20with%20Sketch%20Beta.%3c/desc%3e%3cdefs%3e%3c/defs%3e%3cg%20id='Page-1'%20stroke='none'%20stroke-width='1'%20fill='none'%20fill-rule='evenodd'%20sketch:type='MSPage'%3e%3cg%20id='Icon-Set-Filled'%20sketch:type='MSLayerGroup'%20transform='translate(-570.000000,%20-985.000000)'%20fill='%23000000'%3e%3cpath%20d='M592.535,1002.88%20L586.879,1008.54%20C586.639,1008.78%20586.311,1008.85%20586,1008.79%20C585.689,1008.85%20585.361,1008.78%20585.121,1008.54%20L579.465,1002.88%20C579.074,1002.49%20579.074,1001.855%20579.465,1001.465%20C579.855,1001.074%20580.488,1001.074%20580.879,1001.465%20L585,1005.59%20L585,995%20C585,994.447%20585.448,994%20586,994%20C586.553,994%20587,994.447%20587,995%20L587,1005.59%20L591.121,1001.465%20C591.512,1001.074%20592.146,1001.074%20592.535,1001.465%20C592.926,1001.855%20592.926,1002.49%20592.535,1002.88%20L592.535,1002.88%20Z%20M598,985%20L574,985%20C571.791,985%20570,986.791%20570,989%20L570,1013%20C570,1015.21%20571.791,1017%20574,1017%20L598,1017%20C600.209,1017%20602,1015.21%20602,1013%20L602,989%20C602,986.791%20600.209,985%20598,985%20L598,985%20Z'%20id='arrow-down-square'%20sketch:type='MSShapeGroup'%3e%3c/path%3e%3c/g%3e%3c/g%3e%3c/svg%3e",import.meta.url).href,delete:new URL("data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20fill='%23000000'%20width='800px'%20height='800px'%20viewBox='0%200%2024%2024'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M5.755,20.283,4,8H20L18.245,20.283A2,2,0,0,1,16.265,22H7.735A2,2,0,0,1,5.755,20.283ZM21,4H16V3a1,1,0,0,0-1-1H9A1,1,0,0,0,8,3V4H3A1,1,0,0,0,3,6H21a1,1,0,0,0,0-2Z'/%3e%3c/svg%3e",import.meta.url).href,add:new URL("data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'%20standalone='no'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2032%2032'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20xmlns:sketch='http://www.bohemiancoding.com/sketch/ns'%3e%3ctitle%3eplus-square%3c/title%3e%3cdesc%3eCreated%20with%20Sketch%20Beta.%3c/desc%3e%3cdefs%3e%3c/defs%3e%3cg%20id='Page-1'%20stroke='none'%20stroke-width='1'%20fill='none'%20fill-rule='evenodd'%20sketch:type='MSPage'%3e%3cg%20id='Icon-Set-Filled'%20sketch:type='MSLayerGroup'%20transform='translate(-102.000000,%20-1037.000000)'%20fill='%23000000'%3e%3cpath%20d='M124,1054%20L119,1054%20L119,1059%20C119,1059.55%20118.552,1060%20118,1060%20C117.448,1060%20117,1059.55%20117,1059%20L117,1054%20L112,1054%20C111.448,1054%20111,1053.55%20111,1053%20C111,1052.45%20111.448,1052%20112,1052%20L117,1052%20L117,1047%20C117,1046.45%20117.448,1046%20118,1046%20C118.552,1046%20119,1046.45%20119,1047%20L119,1052%20L124,1052%20C124.552,1052%20125,1052.45%20125,1053%20C125,1053.55%20124.552,1054%20124,1054%20L124,1054%20Z%20M130,1037%20L106,1037%20C103.791,1037%20102,1038.79%20102,1041%20L102,1065%20C102,1067.21%20103.791,1069%20106,1069%20L130,1069%20C132.209,1069%20134,1067.21%20134,1065%20L134,1041%20C134,1038.79%20132.209,1037%20130,1037%20L130,1037%20Z'%20id='plus-square'%20sketch:type='MSShapeGroup'%3e%3c/path%3e%3c/g%3e%3c/g%3e%3c/svg%3e",import.meta.url).href,color:new URL("data:image/svg+xml,%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Transformed%20by:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2016%2016'%20xmlns='http://www.w3.org/2000/svg'%20fill='%23000000'%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'/%3e%3cg%20id='SVGRepo_tracerCarrier'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3cpath%20d='m%2012.957031%200.980469%20c%20-0.519531%200.015625%20-1.015625%200.234375%20-1.375%200.605469%20l%20-1.585937%201.585937%20l%20-1.085938%20-1.085937%20c%20-0.097656%20-0.09375%20-0.226562%20-0.148438%20-0.363281%20-0.148438%20c%20-0.128906%200.003906%20-0.253906%200.054688%20-0.34375%200.148438%20l%20-2.121094%202.121093%20c%20-0.195312%200.195313%20-0.195312%200.511719%200%200.707031%20l%200.644531%200.648438%20l%20-5.585937%205.582031%20c%20-0.09375%200.097657%20-0.144531%200.222657%20-0.144531%200.355469%20v%201.792969%20l%20-0.855469%200.851562%20c%20-0.1953125%200.195313%20-0.1953125%200.515625%200%200.710938%20l%201%201%20c%200.195313%200.191406%200.511719%200.191406%200.707031%200%20l%200.855469%20-0.855469%20h%201.792969%20c%200.132812%200%200.257812%20-0.050781%200.351562%20-0.144531%20l%205.585938%20-5.585938%20l%200.648437%200.644531%20c%200.195313%200.195313%200.511719%200.195313%200.707031%200%20l%202.121094%20-2.121093%20c%200.195313%20-0.195313%200.195313%20-0.511719%200%20-0.707031%20l%20-1.085937%20-1.085938%20l%201.585937%20-1.585938%20c%201.304688%20-1.273437%200.367188%20-3.488281%20-1.453125%20-3.433593%20z%20m%20-5.023437%205.789062%20l%201.292968%201.292969%20l%20-2.9375%202.9375%20h%20-2.585937%20z%20m%200%200'%20fill='%23000000'%20fill-rule='evenodd'/%3e%3c/g%3e%3c/svg%3e",import.meta.url).href},A=["Produktion","Disk","Övrigt"],D=[{id:"mjolk",label:"Mjölk"},{id:"vassle",label:"Vassle"},{id:"ovrigt",label:"Övrigt"}],H=["none","red","green"],Rt={Produktion:"Anteckna moment du vill komma ihåg..",Disk:"Beskriv när & hur man ska diska objektet..",Övrigt:"Skriv övrig information.."},Ft={CF_BK_KA:"Ceramic Filter","Ceramic Filter_1_KA":"Ceramic Filter"},Ot={BC:"Bactocatch",YA:"Y-agg",VA1:"V-agg 1",VA2:"V-agg 2",GA:"G-agg","FÖRSKÖLJ-TANK DC1":"FÖRSKÖLJ-TANK DC1"},E=[{id:"MBH",label:"Mjölkbehandling",file:new URL("/ARLA-Website-New/assets/MBH-CUNm0Wee.svg",import.meta.url).href},{id:"VBH",label:"Vasslebehandling",file:new URL("/ARLA-Website-New/assets/VBH-CYBALgia.svg",import.meta.url).href},{id:"DI",label:"Disk Info",file:new URL("/ARLA-Website-New/assets/DI-B3iSkTB_.svg",import.meta.url).href},{id:"LIST",label:"Flödeslistor",file:null},{id:"KA",label:"Karta Apparatsal",file:new URL("/ARLA-Website-New/assets/KA-DIiU5gxD.svg",import.meta.url).href}],Gt={MBH:`Klicka på ett objekt för att öppna dess popup.
Där inne kan du redigera dina anteckningar.
Samma objekt har samma popup på olika sidor.`,VBH:`Klicka på ett objekt för att öppna dess popup.
Där inne kan du redigera dina anteckningar.
Samma objekt har samma popup på olika sidor.`,DI:`På denna sida kan du ersätta beskrivningar för diskar till dina egna genom att skriva egna anteckningar i ett objekts popup-flik "Disk".
Sedan kan du växla mellan originalbeskrivningar & dina egna beskrivningar genom att trycka på knappen åt höger.`,KA:`Klicka på ett objekt för att öppna dess popup.
Där inne kan du redigera dina anteckningar.
Samma objekt har samma popup på olika sidor.`,LIST:`Här kan du skapa egna punkter för flödet i kategorierna Mjölk, Vassle och Övrigt.
Varje punkt kan redigeras, tas bort, flyttas upp eller ner och visa statusfärg.`},jt=[{id:"all",label:"Alla",componentIds:[]},{id:"mjolk",label:"Mjölk",componentIds:["Ystmjölksledning_1_DI","T110_13110_DI","T106_13106_DI","T107_13107_DI","Helmjölksledning_1_DI","Mottagningslinje 1-4_1_DI","MOTTAGNINGSLINJE 5_1_DI","T101_13101_DI","T102_13102_DI","T103_13103_DI","T111_13111_DI","T117_13117_DI","T118_13118_DI","T108_13108_DI"]},{id:"vassle",label:"Vassle",componentIds:["Utlastningsledning Vassle 2_1_DI","Ledn. under OPD-Vassle_1_DI","Fylln. Ledn. Vasslesilos_1_DI","T601_52601_DI","T602_52602_DI","T606_52606_DI","T607_52607_DI","T662_51662_DI","T664_51664_DI","T109_131009_DI","T601_51601_DI","T602_51602_DI","T636_51636_DI","T650_51650_DI","T501_14501_DI","T704_31704_DI","T613_51613_DI","T629_51629_DI"]},{id:"gradde",label:"Grädde",componentIds:["Utlastningsledning Grädde_1_DI","Ledn. till Gräddlager_1_DI","Gräddledning_1_DI","T215_31215_DI","T216_31216_DI","T220_31220_DI","T221_31221_DI","T206_14206_DI","T207_14207_DI","T613_51613_DI","T629_51629_DI"]},{id:"ledningar",label:"Ledningar",componentIds:["Utlastningsledning Grädde_1_DI","Utlastningsledning Vassle 2_1_DI","Ledn. till Gräddlager_1_DI","Ledn. under OPD-Vassle_1_DI","Ystmjölksledning_1_DI","Gräddledning_1_DI","Fylln. Ledn. Vasslesilos_1_DI","Utlastningsledning 1_1_DI","Helmjölksledning_1_DI","Mottagningslinje 1-4_1_DI","MOTTAGNINGSLINJE 5_1_DI"]},{id:"tankar",label:"Tankar",componentIds:["T444_14444_DI","T215_31215_DI","T216_31216_DI","T220_31220_DI","T221_31221_DI","T601_52601_DI","T602_52602_DI","T606_52606_DI","T607_52607_DI","T662_51662_DI","T664_51664_DI","T109_131009_DI","T110_13110_DI","T106_13106_DI","T107_13107_DI","T601_51601_DI","T602_51602_DI","T636_51636_DI","T650_51650_DI","T501_14501_DI","T704_31704_DI","T206_14206_DI","T207_14207_DI","T613_51613_DI","T629_51629_DI","T101_13101_DI","T102_13102_DI","T103_13103_DI","T111_13111_DI","T117_13117_DI","T118_13118_DI","T108_13108_DI"]},{id:"ovrigt",label:"Övrigt",componentIds:["Sur Gräns_1_DI","FÖRSKÖLJ-TANK DC1_1_DI"]}],Kt=["A","B","D","E"],zt=[["all"],["mjolk","vassle","gradde"],["ledningar","tankar"],["letter-A","letter-B","letter-D","letter-E"],["ovrigt"]],p=document.querySelector("#svg-root"),l=document.querySelector("#popup-root"),_=document.querySelector("#diagram-tabs"),m=document.querySelector("#diagram-filters"),N=document.querySelector("#help-button"),f=document.querySelector("#account-actions"),mt=Ae();mt&&V();const e={isUnlocked:!1,currentUser:null,sessionLoginAt:null,activeDiagramId:E[0].id,activeComponentId:null,activePopupId:null,activeDiagramFilterId:"all",diDescriptionMode:"notes",activeHelpDiagramId:null,activeTab:A[0],isEditing:!1,draftText:"",notes:{},listBoard:I(),listActionIcons:{},svgMarkupByDiagram:{},authView:null,authError:"",authForm:{username:"",password:""},unlockPassword:"",unlockError:"",isAccountMenuOpen:!1,listViewer:null,listEditor:null,logoutNotice:Ee(mt)?gt:"",autoLogoutTimerId:null};Wt();async function Wt(){ne(),ae(),window.addEventListener("resize",ee),await k(),c()}async function k(){if(!e.isUnlocked){P(),ft();return}if(!e.currentUser){P(),Jt();return}e.notes=_t(e.currentUser),e.listBoard=Dt(e.currentUser),Ve(),J(!0),wt(),yt(),Z(),q(),await ht()}function J(t){_.hidden=!t,N.hidden=!t,f.hidden=!t}function ft(){J(!1),document.body.classList.remove("diagram-ka"),_.innerHTML="",f.innerHTML="",m.innerHTML="",l.innerHTML="",p.innerHTML=`
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
  `;const t=p.querySelector('[data-unlock-form="true"]'),i=p.querySelector('input[name="unlock-password"]');t?.addEventListener("submit",async a=>{a.preventDefault(),await Yt()}),i?.addEventListener("input",a=>{a.target instanceof HTMLInputElement&&(e.unlockPassword=a.target.value,e.unlockError="")}),i?.focus()}async function Yt(){if(e.unlockPassword===Pt){e.isUnlocked=!0,e.unlockPassword="",e.unlockError="",await k();return}e.unlockError="Fel lösenord",ft()}function Jt(){J(!1),document.body.classList.remove("diagram-ka"),_.innerHTML="",f.innerHTML="",m.innerHTML="",p.innerHTML=`
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
  `,p.querySelectorAll("[data-auth-open]").forEach(t=>{t.addEventListener("click",()=>{const i=t.getAttribute("data-auth-open");(i==="login"||i==="create")&&kt(i)})})}function y(){p.innerHTML=`
    <section class="list-board" aria-label="Listor">
      ${D.map(t=>`
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
              ${w("add")}
            </button>
          </header>
          <div class="list-items">
            ${Zt(t.id)}
          </div>
        </section>
      `).join("")}
    </section>
  `,p.querySelectorAll("[data-list-action]").forEach(t=>{t.addEventListener("click",i=>{const a=t.getAttribute("data-list-action"),n=t.getAttribute("data-column-id"),r=t.getAttribute("data-item-id");if(n&&(i.stopPropagation(),t.getAttribute("data-disabled")!=="true")){if(a==="add"){ue(n);return}if(r){if(a==="open"){pe(n,r);return}if(a==="delete"){St(n,r);return}if(a==="status"){ge(n,r);return}if(a==="move-up"){ot(n,r,-1);return}a==="move-down"&&ot(n,r,1)}}})})}function Zt(t){const i=e.listBoard[t]??[];return i.length===0?'<p class="list-empty">Inga punkter inlagda.</p>':i.map((a,n)=>`
    <article
      class="list-item list-item--${a.status}"
      role="button"
      tabindex="0"
      data-list-action="open"
      data-column-id="${t}"
      data-item-id="${a.id}"
      aria-label="Öppna komponent"
    >
      <div class="list-item-text">${d(Xt(a.text))}</div>
      <div class="list-item-actions">
        <button
          class="icon-action-button"
          type="button"
          data-list-action="status"
          data-column-id="${t}"
          data-item-id="${a.id}"
          aria-label="Växla status"
        >
          ${w("color")}
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
          ${w("up")}
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
          ${w("down")}
        </button>
      </div>
    </article>
  `).join("")}function Xt(t){return t.split(/\r?\n/,1)[0]??""}async function Qt(){const t=Object.entries(qt).filter(([a])=>!e.listActionIcons[a]);if(t.length===0)return;const i=await Promise.all(t.map(async([a,n])=>{const o=await(await fetch(n)).text();return[a,te(o)]}));for(const[a,n]of i)e.listActionIcons[a]=n}function w(t){return e.listActionIcons[t]??""}function te(t){return t.replace(/<\?xml[\s\S]*?\?>/i,"").replace(/<!--[\s\S]*?-->/g,"").replace(/<svg\b/,'<svg class="icon-button-svg"').trim()}async function ht(){const t=E.find(({id:a})=>a===e.activeDiagramId);if(!t)return;if(document.body.classList.toggle("diagram-ka",t.id==="KA"),p.classList.toggle("svg-stage--list-board",t.id==="LIST"),t.id==="LIST"){await Qt(),y();return}if(!e.svgMarkupByDiagram[t.id]){const a=await fetch(t.file);e.svgMarkupByDiagram[t.id]=await a.text()}p.innerHTML=e.svgMarkupByDiagram[t.id];const i=p.querySelector("svg");if(!i)throw new Error("SVG could not be loaded.");i.removeAttribute("width"),i.removeAttribute("height"),i.setAttribute("preserveAspectRatio","xMidYMid meet"),t.id==="DI"&&ie(i),bt(i),vt(i),oe(i,t.id),Ct(i,t.id),It(i,t.id),M()}function ee(){if(!e.currentUser||e.activeDiagramId==="LIST")return;const t=p.querySelector("svg");if(!t)return;bt(t),vt(t);const i=l.querySelector(".tab-textarea");i instanceof HTMLTextAreaElement&&U(i)}function bt(t){const i=p.getBoundingClientRect(),a=Math.floor(i.width),n=Math.floor(i.height);if(!a||!n)return;const r=t.viewBox.baseVal,o=r?.width||Number(t.getAttribute("width"))||1,s=r?.height||Number(t.getAttribute("height"))||1,u=Math.min(a/o,n/s);t.style.width=`${o*u}px`,t.style.height=`${s*u}px`}function vt(t){if(e.activeDiagramId!=="DI"){m.style.removeProperty("--filters-top"),m.style.removeProperty("--filters-left"),m.style.removeProperty("--filters-right"),m.style.removeProperty("--filters-gap");return}const i=t.getBoundingClientRect(),a=p.getBoundingClientRect(),n=window.getComputedStyle(document.body),r=Number.parseFloat(n.paddingTop)||0,o=Math.max(0,i.top-a.top),s=Math.max(0,i.left-a.left),u=Math.max(0,a.right-i.right);m.style.setProperty("--filters-top",`${o}px`),m.style.setProperty("--filters-left",`${s}px`),m.style.setProperty("--filters-right",`${u}px`),m.style.setProperty("--filters-gap",`${Math.max(24,r*2.25)}px`)}function ie(t){const i=t.querySelector("#Buttons");if(!i)return;const a=i.getBBox();if(!a.width||!a.height)return;const n=8,r=Math.max(0,a.x-n),o=Math.max(0,a.y-n),s=a.width+n*2,u=a.height+n*2;t.setAttribute("viewBox",`${r} ${o} ${s} ${u}`)}function wt(){_.innerHTML=E.map(t=>`
    <button
      class="diagram-tab${t.id===e.activeDiagramId?" is-selected":""}"
      type="button"
      data-diagram-id="${t.id}"
    >
      ${t.label}
    </button>
  `).join(""),_.querySelectorAll("[data-diagram-id]").forEach(t=>{t.addEventListener("click",async()=>{const i=t.getAttribute("data-diagram-id");!i||i===e.activeDiagramId||(e.activeDiagramId=i,B(),wt(),yt(),q(),c(),await ht())})})}function yt(){const i=E.find(({id:a})=>a===e.activeDiagramId)?.label??"aktuell sida";N.setAttribute("aria-label",`Öppna hjälp för ${i}`),N.setAttribute("title",`Hjälp: ${i}`)}function Z(){if(!e.currentUser){f.innerHTML="";return}f.innerHTML=`
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
  `,f.querySelector('[data-account-action="toggle-menu"]')?.addEventListener("click",()=>{e.isAccountMenuOpen=!e.isAccountMenuOpen,Z()}),f.querySelector('[data-account-action="logout"]')?.addEventListener("click",()=>{_e()}),f.querySelector('[data-account-action="delete"]')?.addEventListener("click",()=>{kt("delete")})}function ae(){document.addEventListener("pointerdown",t=>{if(!e.isAccountMenuOpen)return;const i=t.target;i instanceof Node&&(f.contains(i)||(e.isAccountMenuOpen=!1,Z()))})}function ne(){N.addEventListener("click",()=>{if(e.currentUser){if(e.activeHelpDiagramId===e.activeDiagramId){z();return}e.activeHelpDiagramId=e.activeDiagramId,e.activeComponentId=null,e.activePopupId=null,e.isEditing=!1,e.draftText="",M(),c()}})}function q(){if(!e.currentUser||e.activeDiagramId!=="DI"){m.innerHTML="";return}const t=j(),i=new Map(t.map(r=>[r.id,r])),a=zt.map(r=>`<div class="diagram-filter-row">${r.map(s=>i.get(s)).filter(Boolean).map(s=>`
        <button
          class="diagram-filter${s.id===e.activeDiagramFilterId?" is-selected":""}"
          type="button"
          data-filter-id="${s.id}"
        >
          ${s.label}
        </button>
      `).join("")}</div>`).join(""),n=e.diDescriptionMode==="notes"?"Återgå till originalbeskrivningar":"Gå till dina egna beskrivningar";m.innerHTML=`
    ${a}
    <div class="diagram-filter-row diagram-filter-row--align-end">
      <button class="diagram-filter" type="button" data-action="toggle-di-descriptions">
        ${n}
      </button>
    </div>
  `,m.querySelectorAll("[data-filter-id]").forEach(r=>{r.addEventListener("click",()=>{const o=r.getAttribute("data-filter-id");if(!o||o===e.activeDiagramFilterId)return;e.activeDiagramFilterId=o,q();const s=p.querySelector("svg");s&&It(s,e.activeDiagramId)})}),m.querySelector('[data-action="toggle-di-descriptions"]')?.addEventListener("click",()=>{re()})}function re(){if(e.diDescriptionMode=e.diDescriptionMode==="notes"?"original":"notes",q(),e.activeDiagramId!=="DI")return;const t=p.querySelector("svg");t&&Ct(t,"DI")}function oe(t,i){const a=t.querySelectorAll(`#Buttons g[id$="_${i}"]`);for(const n of a)i==="KA"&&ce(n,t),n.classList.add("svg-button"),de(n),n.dataset.normalizedId=S(n.id),n.setAttribute("tabindex","0"),n.setAttribute("role","button"),n.setAttribute("aria-label",`${He(n.id)}: öppna popup`),n.addEventListener("click",()=>nt(n.id)),n.addEventListener("keydown",r=>{(r.key==="Enter"||r.key===" ")&&(r.preventDefault(),nt(n.id))})}function It(t,i){const a=t.querySelectorAll(`#Buttons g[id$="_${i}"]`);if(i!=="DI"){a.forEach(o=>{o.classList.remove("is-filtered-out"),o.setAttribute("tabindex","0"),o.setAttribute("aria-disabled","false")});return}const n=j().find(({id:o})=>o===e.activeDiagramFilterId)??j()[0],r=new Set(se(n,t).map(S));a.forEach(o=>{const s=n.id==="all"||r.has(o.dataset.normalizedId??"");o.classList.toggle("is-filtered-out",!s),o.setAttribute("tabindex",s?"0":"-1"),o.setAttribute("aria-disabled",String(!s))}),e.activeComponentId&&n.id!=="all"&&!r.has(S(e.activeComponentId))&&K()}function j(){return[...jt,...Kt.map(t=>({id:`letter-${t}`,label:t,componentIds:[],matcher:i=>le(i)===t}))]}function se(t,i){return t.matcher?Array.from(i.querySelectorAll('#Buttons g[id$="_DI"]')).filter(a=>t.matcher(a)).map(a=>S(a.id)):t.componentIds}function le(t){const i=t.querySelector('g[id^="Disk"]');if(!i)return"";const a=i.querySelector("path[id]");return a?S(a.id).charAt(0).toUpperCase():""}function ce(t,i){if(t.querySelector(":scope > .svg-hitbox"))return;const a=t.getBBox();if(!a.width||!a.height)return;const n=document.createElementNS(i.namespaceURI,"rect");n.setAttribute("class","svg-hitbox"),n.setAttribute("x",String(a.x)),n.setAttribute("y",String(a.y)),n.setAttribute("width",String(a.width)),n.setAttribute("height",String(a.height)),n.setAttribute("fill","#ffffff"),n.setAttribute("opacity","0"),t.append(n)}function de(t){const i=t.getBBox(),a=Math.max(i.width,i.height);let n=1.035;a<90?n=1.16:a<140?n=1.125:a<220?n=1.095:a<340?n=1.07:a<520&&(n=1.05),t.style.setProperty("--hover-scale",String(n))}function nt(t){if(!e.currentUser)return;const i=Vt(t),a=e.activeDiagramId==="DI"?"Disk":A[0];e.authView=null,e.authError="",e.activeHelpDiagramId=null,e.activeComponentId=t,e.activePopupId=i,e.activeTab=a,e.isEditing=!1,e.draftText=$(a),M(),c()}function K(){e.activeComponentId=null,e.activePopupId=null,e.isEditing=!1,e.draftText="",M(),c()}function z(){e.activeHelpDiagramId=null,c()}function ue(t,i=null){if(i){const n=(e.listBoard[t]??[]).find(r=>r.id===i)??null;if(!n)return;e.listViewer={columnId:t,itemId:i,text:n.text,error:"",isEditing:!0},e.listEditor=null,c();return}const a=i?(e.listBoard[t]??[]).find(n=>n.id===i)??null:null;e.listEditor={columnId:t,itemId:i,text:a?.text??"",error:""},c()}function pe(t,i){const a=(e.listBoard[t]??[]).find(n=>n.id===i)??null;a&&(e.listViewer={columnId:t,itemId:i,text:a.text,error:"",isEditing:!1},e.listEditor=null,c())}function R(){e.listViewer=null,c()}function F(){e.listEditor=null,c()}function rt(){if(!e.currentUser)return;if(e.listViewer?.isEditing){const a=e.listViewer.text.trim();if(!a){e.listViewer.error="Skriv text för komponenten.",c();return}e.listBoard[e.listViewer.columnId]=(e.listBoard[e.listViewer.columnId]??[]).map(n=>n.id===e.listViewer?.itemId?{...n,text:a}:n),x(),e.listViewer={...e.listViewer,text:a,error:"",isEditing:!1},e.activeDiagramId==="LIST"&&y(),c();return}if(!e.listEditor)return;const t=e.listEditor.text.trim();if(!t){e.listEditor.error="Skriv text för komponenten.",c();return}const i=e.listBoard[e.listEditor.columnId]??[];e.listEditor.itemId?e.listBoard[e.listEditor.columnId]=i.map(a=>a.id===e.listEditor.itemId?{...a,text:t}:a):e.listBoard[e.listEditor.columnId]=[...i,{id:crypto.randomUUID(),text:t,status:"none"}],x(),e.listEditor=null,e.listViewer=null,e.activeDiagramId==="LIST"&&y(),c()}function St(t,i){e.listBoard[t]=(e.listBoard[t]??[]).filter(a=>a.id!==i),x(),e.activeDiagramId==="LIST"&&y()}function ge(t,i){e.listBoard[t]=(e.listBoard[t]??[]).map(a=>{if(a.id!==i)return a;const n=H.indexOf(a.status),r=H[(n+1)%H.length];return{...a,status:r}}),x(),e.activeDiagramId==="LIST"&&y()}function ot(t,i,a){const n=[...e.listBoard[t]??[]],r=n.findIndex(s=>s.id===i),o=r+a;r<0||o<0||o>=n.length||([n[r],n[o]]=[n[o],n[r]],e.listBoard[t]=n,x(),e.activeDiagramId==="LIST"&&y())}function kt(t){e.authView=t,e.authError="",t!=="delete"&&(e.authForm={username:"",password:""}),c()}function O(){e.authView=null,e.authError="",e.authForm={username:"",password:""},c()}function me(t){e.activeTab=t,e.isEditing=!1,e.draftText=$(t),c()}function fe(){e.isEditing=!0,e.draftText=$(e.activeTab),c()}function he(){if(!e.activePopupId||!e.currentUser)return;const t=X(e.activePopupId);t[e.activeTab]=e.draftText,we(e.activePopupId),Bt()&&e.diDescriptionMode==="notes"&&Ne(e.activeComponentId),e.isEditing=!1,c()}function be(){e.draftText=$(e.activeTab),e.isEditing=!1,c()}function c(){if(e.listViewer){const r=D.find(({id:s})=>s===e.listViewer?.columnId)?.label??"",o=(e.listBoard[e.listViewer.columnId]??[]).find(s=>s.id===e.listViewer?.itemId)??null;if(!o){e.listViewer=null,c();return}l.innerHTML=`
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
                      ${w("edit")}
                    </button>
                    <button
                      class="icon-action-button icon-action-button--popup"
                      type="button"
                      data-action="delete-list-viewer"
                      aria-label="Ta bort komponent"
                    >
                      ${w("delete")}
                    </button>
                  `}
            </div>
          </div>
        </section>
      </div>
    `,v(R),l.querySelector('[data-action="close-list-viewer"]')?.addEventListener("click",R),l.querySelector('[data-action="edit-list-viewer"]')?.addEventListener("click",()=>{e.listViewer&&(e.listViewer={...e.listViewer,text:o.text,error:"",isEditing:!0},c())}),l.querySelector('[data-action="delete-list-viewer"]')?.addEventListener("click",()=>{if(!e.listViewer)return;const{columnId:s,itemId:u}=e.listViewer;St(s,u),R()}),l.querySelector('[data-action="cancel-list-viewer-edit"]')?.addEventListener("click",()=>{e.listViewer&&(e.listViewer={...e.listViewer,text:o.text,error:"",isEditing:!1},c())}),l.querySelector('[data-action="save-list-viewer-edit"]')?.addEventListener("click",rt),l.querySelector('[data-list-viewer-text="true"]')?.addEventListener("input",s=>{!(s.target instanceof HTMLTextAreaElement)||!e.listViewer||(e.listViewer.text=s.target.value,e.listViewer.error="")}),e.listViewer.isEditing&&l.querySelector('[data-list-viewer-text="true"]')?.focus();return}if(e.listEditor){const r=D.find(({id:o})=>o===e.listEditor.columnId)?.label??"";l.innerHTML=`
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
    `,v(F),l.querySelector('[data-action="close-list-editor"]')?.addEventListener("click",F),l.querySelector('[data-action="cancel-list-editor"]')?.addEventListener("click",F),l.querySelector('[data-action="save-list-editor"]')?.addEventListener("click",rt),l.querySelector('[data-list-editor-text="true"]')?.addEventListener("input",o=>{!(o.target instanceof HTMLTextAreaElement)||!e.listEditor||(e.listEditor.text=o.target.value,e.listEditor.error="")}),l.querySelector('[data-list-editor-text="true"]')?.focus();return}if(e.logoutNotice){l.innerHTML=`
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
    `,v(st),l.querySelector('[data-action="close-logout-notice"]')?.addEventListener("click",st);return}if(e.authView){ve();return}if(e.activeHelpDiagramId){const o=E.find(({id:u})=>u===e.activeHelpDiagramId)?.label??"Hjälp",s=Gt[e.activeHelpDiagramId]??"";l.innerHTML=`
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
    `,v(z),l.querySelector('[data-action="close-help"]')?.addEventListener("click",z);return}if(!e.activeComponentId){l.innerHTML="";return}const t=Ue(e.activePopupId),i=e.isEditing?e.draftText:$(e.activeTab),a=Rt[e.activeTab]??"";l.innerHTML=`
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
          ${A.map(r=>`
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
  `;const n=l.querySelector(".tab-textarea");v(K),l.querySelector('[data-action="close"]')?.addEventListener("click",K),l.querySelector('[data-action="edit"]')?.addEventListener("click",fe),l.querySelector('[data-action="save"]')?.addEventListener("click",he),l.querySelector('[data-action="cancel"]')?.addEventListener("click",be),l.querySelectorAll("[data-tab]").forEach(r=>{r.addEventListener("click",()=>{const o=r.getAttribute("data-tab");o&&me(o)})}),n?.addEventListener("input",r=>{if(e.isEditing&&r.target instanceof HTMLTextAreaElement){const o=e.draftText;e.draftText=r.target.value,U(r.target),r.target.scrollHeight>r.target.clientHeight+1&&(e.draftText=o,r.target.value=o,U(r.target))}}),n instanceof HTMLTextAreaElement&&U(n),e.isEditing&&(n?.focus(),n?.setSelectionRange(n.value.length,n.value.length))}function U(t){const i=t.closest(".modal"),a=t.closest(".modal-backdrop");if(!(i instanceof HTMLElement)||!(a instanceof HTMLElement))return;const n=window.getComputedStyle(a),r=Number.parseFloat(n.paddingTop)||24,o=Number.parseFloat(n.paddingBottom)||r,s=Math.max(240,window.innerHeight-r-o),u=160;t.style.height="auto",t.style.overflowY="hidden";const h=window.getComputedStyle(t),b=(Number.parseFloat(h.borderTopWidth)||0)+(Number.parseFloat(h.borderBottomWidth)||0),L=Math.max(u,t.scrollHeight+b);t.style.height=`${L}px`;const C=i.scrollHeight,g=Math.max(0,C-s),T=Math.max(u,L-g);t.style.height=`${T}px`,t.style.overflowY="hidden"}function ve(){const t=e.authView==="delete",i=t?"Ta bort konto":e.authView==="create"?"Skapa konto":"Logga in",a=t?"Ta bort konto":e.authView==="create"?"Skapa konto":"Logga in";l.innerHTML=`
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
  `,v(O),l.querySelector('[data-action="close-auth"]')?.addEventListener("click",O),l.querySelector('[data-action="cancel-auth"]')?.addEventListener("click",O),l.querySelector('[data-action="submit-auth"]')?.addEventListener("click",()=>{lt()}),l.querySelector('[data-auth-form="true"]')?.addEventListener("submit",r=>{r.preventDefault(),lt()}),l.querySelectorAll(".auth-input").forEach(r=>{r.addEventListener("input",o=>{o.target instanceof HTMLInputElement&&(e.authForm={...e.authForm,[o.target.name]:o.target.value})})}),l.querySelector(".auth-input")?.focus()}function st(){e.logoutNotice="",c()}function v(t){const i=l.querySelector(".modal-backdrop");let a=!1;i?.addEventListener("pointerdown",n=>{a=n.target instanceof HTMLElement&&n.target.dataset.closeBackdrop==="true"}),i?.addEventListener("click",n=>{a&&n.target instanceof HTMLElement&&n.target.dataset.closeBackdrop==="true"&&t(),a=!1})}async function lt(){if(e.authView==="delete"){await xe();return}const t=e.authForm.username.trim(),i=e.authForm.password;if(!t||!i){e.authError="Fyll i användarnamn och lösenord.",c();return}if(e.authView==="create"){await Te(t,i);return}await De(t,i)}function M(){if(p.querySelector(".svg-button.is-active")?.classList.remove("is-active"),!e.activeComponentId)return;p.querySelector(`#${CSS.escape(e.activeComponentId)}`)?.classList.add("is-active")}function X(t){return t?(e.notes[t]||(e.notes[t]=ct()),e.notes[t]):ct()}function ct(){return Object.fromEntries(A.map(t=>[t,""]))}function Lt(t,i){return t?X(t)[i]??"":""}function $(t){return Bt(t)?Tt(e.activeComponentId):Lt(e.activePopupId,t)}function Tt(t){return t?Lt(Vt(t),"Disk"):""}function we(t){!e.currentUser||!t||localStorage.setItem(Ie(e.currentUser,t),JSON.stringify(X(t)))}function I(){return Object.fromEntries(D.map(t=>[t.id,[]]))}function Dt(t){try{const i=localStorage.getItem(Q(t));if(!i)return I();const a=JSON.parse(i);return ye(a)}catch{return I()}}function ye(t){const i=I();for(const a of D){const n=Array.isArray(t?.[a.id])?t[a.id]:[];i[a.id]=n.filter(r=>typeof r?.text=="string").map(r=>({id:typeof r.id=="string"?r.id:crypto.randomUUID(),text:r.text,status:H.includes(r.status)?r.status:"none"}))}return i}function x(){e.currentUser&&localStorage.setItem(Q(e.currentUser),JSON.stringify(e.listBoard))}function _t(t){const i=`${Y}${t}::`,a={};for(let n=0;n<localStorage.length;n+=1){const r=localStorage.key(n);if(!r||!r.startsWith(i))continue;const o=r.split("::").pop();if(o)try{const s=JSON.parse(localStorage.getItem(r)??"null");Le(s)&&(a[o]=s)}catch{continue}}return a}function Ie(t,i){return`${Y}${t}::${Ut}::${i}`}function Q(t){return`${Nt}${t}`}function Se(t){const i=[],a=`${Y}${t}::`;for(let n=0;n<localStorage.length;n+=1){const r=localStorage.key(n);r?.startsWith(a)&&i.push(r)}i.forEach(n=>localStorage.removeItem(n))}function ke(t){localStorage.removeItem(Q(t))}function Le(t){return!!(t&&typeof t=="object"&&A.every(i=>Object.hasOwn(t,i)))}async function Te(t,i){const a=tt();if(a.some(o=>o.username===t)){e.authError="Användarnamn är upptaget.",c();return}const n=Ce(),r=await Mt(i,n);a.push({username:t,passwordHash:r,salt:n}),At(a),await xt(t)}async function De(t,i){const a=tt().find(r=>r.username===t);if(!a){e.authError="Fel användarnamn eller lösenord",c();return}if(await Mt(i,a.salt)!==a.passwordHash){e.authError="Fel användarnamn eller lösenord",c();return}await xt(t)}async function xt(t){const i=new Date().toISOString();Me(t,i),e.currentUser=t,e.sessionLoginAt=i,e.notes=_t(t),e.listBoard=Dt(t),B(),e.authView=null,e.authError="",e.logoutNotice="",e.authForm={username:"",password:""},await k(),c()}async function _e(){V(),e.currentUser=null,e.sessionLoginAt=null,e.notes={},e.listBoard=I(),B(),e.authView=null,e.isAccountMenuOpen=!1,await k(),c()}async function xe(){if(!e.currentUser)return;const t=e.currentUser,i=tt().filter(a=>a.username!==t);At(i),Se(t),ke(t),V(),e.currentUser=null,e.sessionLoginAt=null,e.notes={},e.listBoard=I(),B(),e.authView=null,e.isAccountMenuOpen=!1,await k(),c()}function tt(){try{const t=localStorage.getItem(pt);if(!t)return[];const i=JSON.parse(t);return Array.isArray(i)?i:[]}catch{return[]}}function At(t){localStorage.setItem(pt,JSON.stringify(t))}function Ae(){try{const t=localStorage.getItem(W);if(!t)return null;const i=JSON.parse(t);return i&&typeof i=="object"?i:null}catch{return null}}function Ee(t){return!t||typeof t.username!="string"||!$e(t)?!1:(V(),!0)}function Me(t,i){localStorage.setItem(W,JSON.stringify({username:t,loginAt:i}))}function V(){localStorage.removeItem(W)}function $e(t,i=new Date){if(typeof t?.loginAt!="string")return!0;const a=new Date(t.loginAt);return Number.isNaN(a.getTime())?!0:Et(a)<=i}function Ve(){if(P(),!e.currentUser)return;const t=Et(new Date),i=Math.max(0,t.getTime()-Date.now());e.autoLogoutTimerId=window.setTimeout(()=>{Be()},i)}function P(){e.autoLogoutTimerId!==null&&(window.clearTimeout(e.autoLogoutTimerId),e.autoLogoutTimerId=null)}async function Be(){e.currentUser&&(V(),P(),e.currentUser=null,e.sessionLoginAt=null,e.notes={},e.authView=null,e.logoutNotice=gt,B(),await k(),c())}function Et(t){const i=at.map(n=>dt(t,n)).filter(n=>n>t).sort((n,r)=>n.getTime()-r.getTime());if(i.length>0)return i[0];const a=new Date(t);return a.setDate(a.getDate()+1),dt(a,at[0])}function dt(t,i){const[a,n]=i.split(":").map(Number),r=new Date(t);return r.setHours(a,n,0,0),r}function Ce(){const t=new Uint8Array(16);return crypto.getRandomValues(t),$t(t)}async function Mt(t,i){const a=new TextEncoder().encode(`${i}:${t}`),n=await crypto.subtle.digest("SHA-256",a);return $t(new Uint8Array(n))}function $t(t){return Array.from(t,i=>i.toString(16).padStart(2,"0")).join("")}function B(){e.activeComponentId=null,e.activePopupId=null,e.activeHelpDiagramId=null,e.isEditing=!1,e.draftText="",e.listViewer=null,e.listEditor=null,M()}function He(t){const i=et(t);return it(i).replace(/_[^_]+_(?:MBH|VBH|DI|KA)$/,"").replace(/_(?:MBH|VBH|DI|KA)$/,"").replaceAll("_"," ").replace(/\s+/g," ").trim()}function Ue(t){const i=et(t),a=it(i),n=Ot[a];return n||a.replaceAll("_"," ").replace(/\s+/g," ").trim()}function Vt(t){const i=S(t);return Ft[i]??i.split("_")[0]??i}function Bt(t=e.activeTab){return e.activeDiagramId==="DI"&&t==="Disk"}function S(t){return it(et(t)).replace(/\s+/g," ").trim()}function Ct(t,i){if(i!=="DI")return;t.querySelectorAll(`#Buttons g[id$="_${i}"]`).forEach(n=>Ht(n.id))}function Ne(t){p.querySelector(`#${CSS.escape(t)}`)&&Ht(t)}function Ht(t){const i=p.querySelector(`#${CSS.escape(t)}`);if(!i)return;const a=i.querySelector('g[id^="Beskrivning"]');if(!a)return;const n=a.querySelector("rect");if(!n)return;const r=a.querySelectorAll('path[id^="Text"]'),o=Tt(t),s=a.querySelector(".editable-description-text");if(e.diDescriptionMode==="original"||!o){r.forEach(T=>T.removeAttribute("display")),s?.remove();return}r.forEach(T=>T.setAttribute("display","none"));const u=Number(n.getAttribute("x")??0),h=Number(n.getAttribute("y")??0),b=Number(n.getAttribute("width")??0),L=Number(n.getAttribute("height")??0),C=a.ownerSVGElement?.namespaceURI;if(!C||!b||!L)return;const g=s??document.createElementNS(C,"text");g.setAttribute("class","editable-description-text"),g.setAttribute("x",String(u+b/2)),g.setAttribute("y",String(h+L/2)),g.setAttribute("text-anchor","middle"),g.setAttribute("dominant-baseline","middle"),g.setAttribute("fill","black"),g.setAttribute("font-size","22"),g.setAttribute("font-family","Helvetica Neue, Helvetica, Arial, sans-serif"),g.removeAttribute("lengthAdjust"),g.removeAttribute("textLength"),s||a.append(g),g.textContent=Pe(g,o,b)}function Pe(t,i,a){const n=Math.max(0,a-16),r=" .. ";if(!i||n<=0)return"";if(t.textContent=i,G(t)<=n)return i;let o=0,s=i.length,u="";for(;o<=s;){const h=Math.floor((o+s)/2),b=`${i.slice(0,h).trimEnd()}${r}`;t.textContent=b,G(t)<=n?(u=b,o=h+1):s=h-1}return u||(t.textContent=r,G(t)<=n?r:"")}function G(t){try{return t.getComputedTextLength()}catch{return Number.POSITIVE_INFINITY}}function et(t){const i=document.createElement("textarea");return i.innerHTML=t,i.value}function it(t){const i=ut(t);if(!/[ÃÂâ]/.test(i))return i;try{const a=Uint8Array.from([...i].map(n=>n.charCodeAt(0)&255));return ut(new TextDecoder("utf-8").decode(a))}catch{return i}}function ut(t){return t.replaceAll("Ã¶","ö").replaceAll("Ã","Ö").replaceAll("Ã–","Ö").replaceAll("Ã¤","ä").replaceAll("Ã","Ä").replaceAll("Ã„","Ä").replaceAll("Ã¥","å").replaceAll("Ã","Å").replaceAll("Ã…","Å")}function d(t){return t.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}
