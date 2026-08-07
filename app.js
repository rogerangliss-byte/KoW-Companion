const DEFAULT_OFFICERS=[{"name": "S7 Roisin", "season": "S7", "orv": 600, "srv": 300, "notes": ""}, {"name": "S7 Barbara", "season": "S7", "orv": 600, "srv": 300, "notes": ""}, {"name": "S7 Romana", "season": "S7", "orv": 500, "srv": 250, "notes": ""}, {"name": "S7 Liora", "season": "S7", "orv": 500, "srv": 250, "notes": ""}, {"name": "S7 Stella", "season": "S7", "orv": 416, "srv": 208, "notes": ""}, {"name": "S7 Klara", "season": "S7", "orv": 416, "srv": 208, "notes": ""}, {"name": "S7 Code", "season": "S7", "orv": 346, "srv": 173, "notes": ""}, {"name": "S7 Kamila", "season": "S7", "orv": 346, "srv": 173, "notes": ""}, {"name": "S6 Regina", "season": "S6", "orv": 289, "srv": 144, "notes": ""}, {"name": "S6 Veronica", "season": "S6", "orv": 289, "srv": 144, "notes": ""}, {"name": "S6 Silverhand", "season": "S6", "orv": 240, "srv": 120, "notes": ""}, {"name": "S6 Red Queen", "season": "S6", "orv": 240, "srv": 120, "notes": ""}, {"name": "S6 Samantha", "season": "S6", "orv": 200, "srv": 100, "notes": ""}, {"name": "S6 Saoirse", "season": "S6", "orv": 200, "srv": 100, "notes": ""}, {"name": "S6 Emily", "season": "S6", "orv": 167, "srv": 84, "notes": ""}, {"name": "S6 Zoya", "season": "S6", "orv": 167, "srv": 84, "notes": ""}];
const STAR_CUM=[0,500,1500,8000,33000,98000];
const SKILL_COSTS=[10,10,15,15,30,30,40,40,45,45,50,50,75,75,80,80];
const XP_DENOMS=[50,100,500,1000,5000,10000,20000,50000];
const MAX_STAR=98000,MAX_BADGES=1600,MAX_XP=199646700;
let officers=[],skills=Array(16).fill(false);
const $=id=>document.getElementById(id);
function applyResponsivePageBackground(){
 const portrait=localStorage.getItem('kow_bg_portrait_v401');
 const landscape=localStorage.getItem('kow_bg_landscape_v401');
 const isLandscape=window.matchMedia('(orientation: landscape)').matches;
 const chosen=isLandscape?landscape:portrait;
 const fallback=isLandscape?'assets/background-landscape.jpg?v=412':'assets/background-portrait.jpg?v=412';
 document.documentElement.style.setProperty('--page-bg',`url("${chosen||fallback}")`);
}
const fmt=n=>Math.max(0,Math.round(Number(n)||0)).toLocaleString();
const pct=(v,m)=>Math.min(100,Math.max(0,m?100*v/m:0));
const clone=v=>JSON.parse(JSON.stringify(v));

function normalizeOfficer(o){return {name:String(o?.name||'').trim(),season:String(o?.season||String(o?.name||'').match(/^S\d+/)?.[0]||'').trim(),orv:Number(o?.orv)||0,srv:Number(o?.srv)||0,notes:String(o?.notes||'')}}
function loadOfficers(){try{const d=JSON.parse(localStorage.getItem('kow_officers_v4')||'null');officers=(Array.isArray(d)&&d.length?d:clone(DEFAULT_OFFICERS)).map(normalizeOfficer).filter(o=>o.name)}catch{officers=clone(DEFAULT_OFFICERS).map(normalizeOfficer)}}
function saveOfficers(){localStorage.setItem('kow_officers_v4',JSON.stringify(officers))}
function currentOfficer(){return officers[+$('officerSelect').value]||officers[0]||{name:'Officer',orv:0,srv:0}}
function renderOfficerOptions(name){const s=$('officerSelect');const prev=name||s.options[s.selectedIndex]?.textContent||'S7 Liora';s.innerHTML=officers.map((o,i)=>`<option value="${i}">${esc(o.name)}</option>`).join('');const i=officers.findIndex(o=>o.name===prev);s.value=i>=0?i:0}
function esc(v){return String(v??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]))}

function cumulativeXp(level){
 level=Math.max(1,Math.min(70,Number(level)||1));
 if(level<=1)return 0;
 if(level<=40)return 5806700*((level-1)/39);
 if(level<=50)return 5806700+16960000*((level-40)/10);
 if(level<=60)return 22766700+53430000*((level-50)/10);
 return 76196700+123450000*((level-60)/10);
}

function calculate(){
 const o=currentOfficer();
 $('orvCost').value=o.orv;$('srvCost').value=o.srv;$('dashOfficer').textContent=o.name;

 let cs=+$('currentStar').value,ts=+$('targetStar').value;if(ts<cs){ts=cs;$('targetStar').value=ts}
 const starsUsed=STAR_CUM[cs];
 const legendaryHeld=+$('ls1').value*110 + +$('ls2').value*420 + +$('ls3').value*960;
 const srvHeld=+$('srvHeld').value;
 const exclusiveFromSrv=o.srv>0?Math.floor(srvHeld/o.srv):0;
 const srvRemainder=o.srv>0?srvHeld-exclusiveFromSrv*o.srv:srvHeld;
 const starsFromSrv=exclusiveFromSrv*110;
 const starsHeld=legendaryHeld+starsFromSrv;
 const starsTotal=starsUsed+starsHeld;
 const starsRequired=Math.max(0,STAR_CUM[ts]-starsTotal);
 $('exclusiveFromSrv').textContent=fmt(exclusiveFromSrv);$('officerStarsFromSrv').textContent=fmt(starsFromSrv);$('srvRemainder').textContent=fmt(srvRemainder);
 $('starsUsed').textContent=fmt(starsUsed);$('starsHeld').textContent=fmt(starsHeld);$('starsRequired').textContent=fmt(starsRequired);$('starBar').style.width=pct(starsTotal,STAR_CUM[ts]||1)+'%';

 const badgesHeld=+$('badgeHeld').value,orvHeld=+$('orvHeld').value;
 const badgesUsed=($('unlocked').checked?10:0)+skills.reduce((s,on,i)=>s+(on?SKILL_COSTS[i]:0),0)+ +$('training').value*5;
 const badgesFromOrv=o.orv>0?Math.floor(orvHeld/o.orv):0;
 const orvRemainder=o.orv>0?orvHeld-badgesFromOrv*o.orv:orvHeld;
 const badgeTotal=badgesUsed+badgesHeld+badgesFromOrv;
 const badgesRequired=Math.max(0,MAX_BADGES-badgeTotal);
 const orvRequired=badgesRequired*o.orv;
 $('trainingLabel').textContent=$('training').value;$('badgesUsed').textContent=fmt(badgesUsed);$('badgesFromOrv').textContent=fmt(badgesFromOrv);$('orvRemainder').textContent=fmt(orvRemainder);$('badgesRequired').textContent=fmt(badgesRequired);$('orvRequired').textContent=fmt(orvRequired);$('badgeBar').style.width=pct(badgeTotal,MAX_BADGES)+'%';

 let xpHeld=0;XP_DENOMS.forEach(v=>xpHeld+=(+($('xp'+v)?.value||0))*v);
 const cl=Math.max(1,Math.min(70,Number($('currentLevel').value)||1));const tl=Math.max(cl,Math.min(70,Number($('targetLevel').value)||70));
 const xpRequired=Math.max(0,cumulativeXp(tl)-cumulativeXp(cl));const xpShortfall=Math.max(0,xpRequired-xpHeld);
 $('xpHeld').textContent=fmt(xpHeld);$('xpRequired').textContent=fmt(xpRequired);$('xpShortfall').textContent=fmt(xpShortfall);$('xpBar').style.width=pct(xpHeld,xpRequired||1)+'%';

 const overall=(pct(starsTotal,MAX_STAR)+pct(badgeTotal,MAX_BADGES)+pct(xpHeld,MAX_XP))/3;
 $('overallPct').textContent=overall.toFixed(1)+'%';$('overallBar').style.width=overall+'%';
 $('dashStarsHeld').textContent=fmt(starsHeld);$('dashStarsRequired').textContent=fmt(Math.max(0,MAX_STAR-starsTotal));
 $('dashBadgesFromOrv').textContent=fmt(badgesFromOrv);$('dashBadgesRequired').textContent=fmt(badgesRequired);
 $('dashXpHeld').textContent=fmt(xpHeld);$('dashXpRequired').textContent=fmt(Math.max(0,MAX_XP-xpHeld));

 renderPlanner(o,cs,starsUsed,legendaryHeld,srvHeld,badgesUsed,badgesHeld,orvHeld,xpHeld,xpRequired);
}

function renderPlanner(o,cs,starsUsed,legendaryHeld,srvHeld,badgesUsed,badgesHeld,orvHeld,xpHeld,xpRequiredSelected){
 const g=$('goalSelect').value;let starTarget=0,badgeTarget=0,xpTarget=0;
 if(g==='nextStar')starTarget=STAR_CUM[Math.min(5,cs+1)];else if(g==='fiveStar'||g==='max')starTarget=MAX_STAR;
 if(g==='maxSkills')badgeTarget=700;else if(g==='maxTraining'||g==='max')badgeTarget=MAX_BADGES;
 if(g==='max')xpTarget=xpRequiredSelected;
 const exclusiveFromSrv=o.srv?Math.floor(srvHeld/o.srv):0;
 const starHeld=legendaryHeld+exclusiveFromSrv*110;
 const badgesFromOrv=o.orv?Math.floor(orvHeld/o.orv):0;
 const rows=[
 ['Legendary Stars',Math.max(0,starTarget-starsUsed),starHeld],
 ['Officer Badges',Math.max(0,badgeTarget-badgesUsed),badgesHeld+badgesFromOrv],
 ['Officer Readiness Vouchers',Math.max(0,badgeTarget-badgesUsed-badgesHeld)*o.orv,orvHeld],
 ['Exclusive Stars',Math.ceil(Math.max(0,starTarget-starsUsed-legendaryHeld)/110),exclusiveFromSrv],
 ['Star Readiness Vouchers',Math.ceil(Math.max(0,starTarget-starsUsed-legendaryHeld)/110)*o.srv,srvHeld],
 ['Officer XP',Math.max(0,xpTarget),xpHeld]
 ];
 $('plannerRows').innerHTML=rows.map(r=>`<tr><td>${r[0]}</td><td>${fmt(r[1])}</td><td>${fmt(r[2])}</td><td>${fmt(Math.max(0,r[1]-r[2]))}</td></tr>`).join('');
}

function validateDb(list=officers){const e=[],seen=new Set();list.forEach((o,i)=>{const k=(o.name||'').trim().toLowerCase();if(!k)e.push(`Row ${i+1}: name required`);if(k&&seen.has(k))e.push(`Row ${i+1}: duplicate name`);if(k)seen.add(k);if(!Number.isInteger(+o.orv)||+o.orv<=0)e.push(`Row ${i+1}: invalid ORV`);if(!Number.isInteger(+o.srv)||+o.srv<=0)e.push(`Row ${i+1}: invalid SRV`)});return e}
function renderDb(){
 const search=$('dbSearch');const filter=$('dbSeason');const tbody=$('dbRows');if(!search||!filter||!tbody)return;
 const q=String(search.value||'').trim().toLowerCase();
 const seasons=[...new Set(officers.map(o=>String(o.season||'').trim()).filter(Boolean))].sort();
 const requested=filter.value||'';
 filter.innerHTML='<option value="">All seasons</option>'+seasons.map(s=>`<option value="${esc(s)}">${esc(s)}</option>`).join('');
 filter.value=seasons.includes(requested)?requested:'';
 const season=filter.value;
 const rows=officers.map((o,i)=>({...normalizeOfficer(o),_i:i})).filter(o=>(!q||o.name.toLowerCase().includes(q))&&(!season||o.season===season));
 tbody.innerHTML=rows.map(o=>`<tr data-i="${o._i}"><td><input data-f="name" value="${esc(o.name)}"></td><td><input data-f="season" value="${esc(o.season)}"></td><td><input data-f="orv" type="number" min="1" step="1" value="${o.orv}"></td><td><input data-f="srv" type="number" min="1" step="1" value="${o.srv}"></td><td><input data-f="notes" value="${esc(o.notes)}"></td><td class="actions"><button data-copy>Copy</button><button data-del>Delete</button></td></tr>`).join('');
 tbody.querySelectorAll('input').forEach(x=>x.oninput=e=>{const tr=e.target.closest('tr'),i=+tr.dataset.i,f=e.target.dataset.f;officers[i][f]=(f==='orv'||f==='srv')?Number(e.target.value):e.target.value;$('dbValidation').textContent=validateDb().join(' · ')||`${rows.length} officers shown · Database validation passed.`});
 tbody.querySelectorAll('[data-copy]').forEach(b=>b.onclick=e=>{const i=+e.target.closest('tr').dataset.i;officers.splice(i+1,0,{...officers[i],name:officers[i].name+' Copy'});renderDb();renderOfficerOptions();calculate()});
 tbody.querySelectorAll('[data-del]').forEach(b=>b.onclick=e=>{const i=+e.target.closest('tr').dataset.i;if(officers.length>1)officers.splice(i,1);renderDb();renderOfficerOptions();calculate()});
 $('dbValidation').textContent=validateDb().join(' · ')||`${rows.length} officers shown · Database validation passed.`;
}

function exportCsv(){const escCsv=v=>`"${String(v??'').replaceAll('"','""')}"`;const rows=[['Officer Name','Season','ORV per Badge','SRV per Exclusive Star','Notes'],...officers.map(o=>[o.name,o.season,o.orv,o.srv,o.notes])];const blob=new Blob([rows.map(r=>r.map(escCsv).join(',')).join('\n')],{type:'text/csv'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='officers.csv';a.click();URL.revokeObjectURL(a.href)}
function parseCsv(text){const lines=text.trim().split(/\r?\n/).slice(1);return lines.map(line=>{const p=line.match(/("([^"]|"")*"|[^,]*)(,|$)/g)?.map(x=>x.replace(/,$/,'').replace(/^"|"$/g,'').replaceAll('""','"'))||[];return{name:p[0]||'',season:p[1]||'',orv:Number(p[2]),srv:Number(p[3]),notes:p[4]||''}})}

function saveProgress(){const d={officer:$('officerSelect').value,currentStar:$('currentStar').value,targetStar:$('targetStar').value,ls1:$('ls1').value,ls2:$('ls2').value,ls3:$('ls3').value,srvHeld:$('srvHeld').value,unlocked:$('unlocked').checked,skills,training:$('training').value,badgeHeld:$('badgeHeld').value,orvHeld:$('orvHeld').value,currentLevel:$('currentLevel').value,targetLevel:$('targetLevel').value,goal:$('goalSelect').value,xp:{}};XP_DENOMS.forEach(v=>d.xp[v]=$('xp'+v).value);localStorage.setItem('kow_progress_v4',JSON.stringify(d));alert('Progress saved.')}
function loadProgress(){try{const d=JSON.parse(localStorage.getItem('kow_progress_v4')||'null');if(!d)return;$('officerSelect').value=d.officer??0;$('currentStar').value=d.currentStar??0;$('targetStar').value=d.targetStar??5;$('ls1').value=d.ls1??0;$('ls2').value=d.ls2??0;$('ls3').value=d.ls3??0;$('srvHeld').value=d.srvHeld??0;$('unlocked').checked=!!d.unlocked;skills=Array.isArray(d.skills)?d.skills:skills;$('training').value=d.training??0;$('badgeHeld').value=d.badgeHeld??0;$('orvHeld').value=d.orvHeld??0;$('currentLevel').value=d.currentLevel??1;$('targetLevel').value=d.targetLevel??70;$('goalSelect').value=d.goal??'max';XP_DENOMS.forEach(v=>$('xp'+v).value=d.xp?.[v]??0)}catch{}}

function init(){
 loadOfficers();renderOfficerOptions();
 [0,1,2,3,4,5].forEach(v=>{$('currentStar').add(new Option(v+'★',v));$('targetStar').add(new Option(v+'★',v))});$('targetStar').value=5;
 SKILL_COSTS.forEach((c,i)=>{const b=document.createElement('button');b.className='skill';b.textContent=`${i+1} · ${c}`;b.onclick=()=>{skills[i]=!skills[i];b.classList.toggle('active',skills[i]);calculate()};$('skillGrid').appendChild(b)});
 XP_DENOMS.forEach(v=>{const d=document.createElement('div');d.className='xp-item';d.innerHTML=`<label>${v.toLocaleString()} XP</label><input id="xp${v}" type="number" min="0" step="1" inputmode="numeric" value="0">`;$('xpBooks').appendChild(d)});
 document.querySelectorAll('input,select').forEach(e=>e.addEventListener('input',calculate));
 document.querySelectorAll('.bottom-nav button').forEach(b=>b.onclick=()=>{document.querySelectorAll('.bottom-nav button').forEach(x=>x.classList.remove('active'));document.querySelectorAll('.view').forEach(x=>x.classList.remove('active'));b.classList.add('active');$(b.dataset.view).classList.add('active');if(b.dataset.view==='database')renderDb()});

 $('saveProgress').onclick=saveProgress;
 $('dbSearch').oninput=renderDb;$('dbSeason').onchange=renderDb;$('dbAdd').onclick=()=>{officers.push({name:'New Officer',season:'S8',orv:1,srv:1,notes:''});renderDb();renderOfficerOptions('New Officer');calculate()};
 $('dbSave').onclick=()=>{const e=validateDb();if(e.length){alert('Fix validation issues first.');return}saveOfficers();renderOfficerOptions();alert('Officer database saved.')};
 $('dbExport').onclick=exportCsv;
 $('dbImport').onchange=e=>{const f=e.target.files[0];if(!f)return;const r=new FileReader();r.onload=()=>{const parsed=parseCsv(r.result);if(validateDb(parsed).length){alert('CSV validation failed.');return}officers=parsed;saveOfficers();renderDb();renderOfficerOptions();calculate();alert('CSV imported.')};r.readAsText(f);e.target.value=''};
 $('dbRestore').onclick=()=>{if(confirm('Restore default officer database?')){officers=clone(DEFAULT_OFFICERS);saveOfficers();renderDb();renderOfficerOptions('S7 Liora');calculate()}};

 const savedName=localStorage.getItem('kow_app_name_v4');if(savedName){$('appName').value=savedName;$('appTitle').textContent=savedName;document.title=savedName}
 const savedPortrait=localStorage.getItem('kow_bg_portrait_v401');
 const savedLandscape=localStorage.getItem('kow_bg_landscape_v401');
 if(savedPortrait){$('portraitBgStatus').textContent='Custom portrait'}
 if(savedLandscape){$('landscapeBgStatus').textContent='Custom landscape'}
 applyResponsivePageBackground();
 $('appName').oninput=e=>{const n=e.target.value||'GODS OF WAR 371';localStorage.setItem('kow_app_name_v4',n);$('appTitle').textContent=n;document.title=n};
 const setBackground=(inputId,key,statusId,label)=>{$(inputId).onchange=e=>{const f=e.target.files[0];if(!f)return;const r=new FileReader();r.onload=()=>{try{localStorage.setItem(key,r.result);$(statusId).textContent=label+' · '+f.name;applyResponsivePageBackground()}catch(err){alert('This image is too large for browser storage. Try a smaller JPG or PNG.')}};r.readAsDataURL(f)}};
 setBackground('portraitBackgroundPicker','kow_bg_portrait_v401','portraitBgStatus','Custom portrait');
 setBackground('landscapeBackgroundPicker','kow_bg_landscape_v401','landscapeBgStatus','Custom landscape');
 $('resetAppearance').onclick=()=>{
  ['kow_app_name_v4','kow_bg_v4','kow_bg_portrait_v401','kow_bg_landscape_v401'].forEach(k=>localStorage.removeItem(k));
  $('appName').value='GODS OF WAR 371';$('appTitle').textContent='GODS OF WAR 371';document.title='KoW Companion v4.1.2';
  $('portraitBgStatus').textContent='Built-in default portrait';$('landscapeBgStatus').textContent='Built-in default landscape';
  $('portraitBackgroundPicker').value='';$('landscapeBackgroundPicker').value='';
   applyResponsivePageBackground();
  alert('Appearance and backgrounds restored to defaults.');
 };

 loadProgress();document.querySelectorAll('.skill').forEach((b,i)=>b.classList.toggle('active',!!skills[i]));renderDb();calculate();
 window.addEventListener('resize',applyResponsivePageBackground);
 if('serviceWorker' in navigator)window.addEventListener('load',()=>navigator.serviceWorker.register('./service-worker.js'));
}
init();
