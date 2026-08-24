/* KoW Companion v4.6.0 LIVE — clean feature layer
   Built against the stable v4.5.0 application code. This is the only v4.6.0
   behaviour extension loaded by English Test. */
(()=>{
  'use strict';

  const byId=id=>document.getElementById(id);
  const num=(v,d=0)=>{const n=Number(String(v??'').replace(/,/g,''));return Number.isFinite(n)?n:d;};
  const val=(id,d=0)=>{const e=byId(id);return e?num(e.value,d):d;};
  const fmt=v=>Math.max(0,Math.round(Number(v)||0)).toLocaleString();

  function ensureOfficerDataStatus(){
    const updates=byId('updateStatus');
    const settings=byId('settings');
    if(!settings)return null;
    let box=byId('officerDataStatus');
    if(box)return box;
    box=document.createElement('div');
    box.id='officerDataStatus';
    box.className='notice';
    box.style.marginBottom='12px';
    box.innerHTML='<b>Global Officer Data:</b> checking published dataset…';
    const card=updates?.closest('.card')||settings.querySelector('.card')||settings;
    card.insertBefore(box,updates||card.firstChild);
    return box;
  }

  async function refreshOfficerDataStatus(){
    const box=ensureOfficerDataStatus();
    if(!box)return;
    try{
      const r=await fetch('./officer-data-version.json?t='+Date.now(),{cache:'no-store'});
      if(!r.ok)throw new Error('manifest unavailable');
      const m=await r.json();
      box.innerHTML='<b>Global Officer Data:</b> ✅ loaded<br>'+
        '<b>Data version:</b> '+String(m.dataVersion||'—')+'<br>'+
        '<b>Officers:</b> '+String(m.officerCount??'—')+'<br>'+
        '<b>Published:</b> '+(m.publishedAt?new Date(m.publishedAt).toLocaleString():'—')+
        '<br><span class="muted">English Test checks the published Officer dataset on load.</span>';
    }catch(e){
      box.innerHTML='<b>Global Officer Data:</b> ⚠️ bundled/local fallback in use<br><span class="muted">Published Officer manifest could not be read.</span>';
    }
  }

  async function syncOfficerOrderFromPublishedFile(){
    if(typeof officers==='undefined'||!Array.isArray(officers))return false;
    try{
      const r=await fetch('./officers.json?t='+Date.now(),{cache:'no-store'});
      if(!r.ok)throw new Error('officers.json unavailable');
      const data=await r.json();
      if(!Array.isArray(data)||!data.length)return false;

      const selected=(typeof currentOfficer==='function'&&currentOfficer())?.name||'';
      const currentByName=new Map(officers.map(o=>[String(o.name||'').trim().toLowerCase(),o]));
      const publishedNames=new Set();
      const ordered=[];

      data.forEach(raw=>{
        const pub=typeof normalizeOfficer==='function'?normalizeOfficer(raw):raw;
        const key=String(pub?.name||'').trim().toLowerCase();
        if(!key||publishedNames.has(key))return;
        publishedNames.add(key);
        const existing=currentByName.get(key);
        ordered.push(existing?Object.assign({},existing,pub):pub);
      });

      // Keep any browser-only/custom Officers after the authoritative published list.
      officers.forEach(o=>{
        const key=String(o?.name||'').trim().toLowerCase();
        if(key&&!publishedNames.has(key))ordered.push(o);
      });

      officers=ordered;
      window.KOW_PUBLISHED_OFFICERS=data.map(o=>typeof normalizeOfficer==='function'?normalizeOfficer(o):o);
      if(typeof saveOfficers==='function')saveOfficers();
      if(typeof renderDb==='function')renderDb();
      if(typeof renderOfficerFilters==='function')renderOfficerFilters();
      if(typeof renderOfficerOptions==='function')renderOfficerOptions(selected||ordered[0]?.name||'');
      if(typeof calculate==='function'&&ordered.length)calculate();
      if(typeof kowSyncPlannerSeasons==='function')kowSyncPlannerSeasons();
      return true;
    }catch(e){
      console.warn('v4.6.0 officer ordering sync failed',e);
      return false;
    }
  }

  function placeTargets(){
    const card=byId('v460UpgradeTargetsCard');
    const officer=byId('officer');
    if(card&&officer&&card.parentElement!==officer){
      officer.appendChild(card);
      card.style.marginTop='14px';
      card.style.marginBottom='130px';
    }
    const result=byId('v460TargetResult');
    if(result){
      result.style.fontSize='1rem';
      result.style.lineHeight='1.55';
      result.style.borderWidth='2px';
      result.style.minHeight='92px';
      result.style.scrollMarginBottom='150px';
    }
  }

  function setMaxTarget(){
    const level=byId('v460TargetLevel'),stars=byId('v460TargetStars'),training=byId('v460TargetTraining');
    if(level)level.value='70';
    if(stars)stars.value='5';
    if(training)training.value='180';
  }

  function syncTargetModeFromFields(){
    const mode=byId('v460TargetMode');
    if(!mode||mode.value!=='max')return;
    if(val('v460TargetLevel',70)!==70||val('v460TargetStars',5)!==5||val('v460TargetTraining',180)!==180){
      mode.value='custom';
    }
  }

  function targetResourceBreakdown(o,cl,cs,ct,tl,ts,tt,isMax){
    const rarity=officerRarity(o);
    const readiness=o.readinessEligible!==false&&String(o.season||'').toLowerCase()!=='original';

    const xpNeed=Math.max(0,cumulativeXp(tl)-cumulativeXp(Math.max(1,cl||1)));
    let xpHeld=0;
    XP_DENOMS.forEach(v=>xpHeld+=val('xp'+v,0)*v);
    const xpShort=Math.max(0,xpNeed-xpHeld);

    const starNeed=Math.max(0,(STAR_CUM[ts]||0)-(STAR_CUM[cs]||0));
    let starHeld=0;
    if(rarity==='Epic') starHeld=val('es1')*110+val('es2')*420+val('es3')*960;
    else if(rarity==='Elite') starHeld=val('bs1')*110+val('bs2')*420+val('bs3')*960;
    else starHeld=val('ls1')*110+val('ls2')*420+val('ls3')*960;

    if(rarity==='Legendary'&&readiness&&Number(o.srv)>0){
      starHeld+=Math.floor(val('srvHeld')/Number(o.srv))*110;
    }
    const starShort=Math.max(0,starNeed-starHeld);

    const trainingCost=trainingBadgeCost(o);
    const currentBadgeUsed=(byId('unlocked')?.checked?10:0)+skillBadgesSpent(o)+ct*trainingCost;
    let badgeNeed=isMax
      ? Math.max(0,maxBadgesForOfficer(o)-currentBadgeUsed)
      : Math.max(0,tt-ct)*trainingCost;

    let badgeAvailable=val('badgeHeld');
    if(rarity==='Legendary') badgeAvailable+=val('universalBadgeHeld');
    else if(rarity==='Epic') badgeAvailable+=val('universalEpicBadgeHeld');
    else badgeAvailable+=val('universalEliteBadgeHeld');

    if(rarity==='Legendary'){
      const chestMode=byId('legendaryBadgeChestMode')?.value||'badge';
      const badgeChests=val('legendaryBadgeChestHeld');
      if(chestMode==='badge') badgeAvailable+=badgeChests;
      if(typeof selectionChestEligibleOfficer==='function'&&selectionChestEligibleOfficer(o)){
        badgeAvailable+=val('legendarySelectionChestHeld');
      }
      let orvHeld=val('orvHeld');
      if(chestMode==='orv')orvHeld+=badgeChests*600;
      if(readiness&&Number(o.orv)>0)badgeAvailable+=Math.floor(orvHeld/Number(o.orv));
    }

    const badgeShort=Math.max(0,badgeNeed-badgeAvailable);
    let html='<br><br><strong>Resource requirement to target</strong><br>'+
      '<b>Officer XP:</b> '+fmt(xpNeed)+' required · '+fmt(xpHeld)+' held · <b>'+fmt(xpShort)+' shortfall</b><br>'+
      '<b>Officer Badges:</b> '+fmt(badgeNeed)+' required · '+fmt(badgeAvailable)+' available · <b>'+fmt(badgeShort)+' shortfall</b><br>';

    if(rarity==='Legendary'&&readiness&&Number(o.orv)>0){
      html+='<b>ORV cost per Officer Badge:</b> '+fmt(o.orv)+'<br>'+
        '<b>Additional ORV equivalent for badge shortfall:</b> '+fmt(badgeShort*Number(o.orv))+'<br>';
    }

    html+='<b>'+rarity+' Star points:</b> '+fmt(starNeed)+' required · '+fmt(starHeld)+' available · <b>'+fmt(starShort)+' shortfall</b><br>';
    if(rarity==='Legendary'&&readiness&&Number(o.srv)>0&&starShort>0){
      const exclusive=Math.ceil(starShort/110);
      html+='<b>Exclusive Stars needed:</b> '+fmt(exclusive)+' · <b>Additional SRV equivalent:</b> '+fmt(exclusive*Number(o.srv))+'<br>';
    }
    html+='<br><small>Inventory is read for comparison only; nothing is spent or changed.</small>';
    return html;
  }

  function calculateTarget(e){
    if(e){e.preventDefault();e.stopPropagation();if(e.stopImmediatePropagation)e.stopImmediatePropagation();}
    const result=byId('v460TargetResult');
    const o=currentOfficer();
    if(!result||!o)return false;

    const mode=byId('v460TargetMode');
    const isMax=mode?.value==='max';
    if(isMax)setMaxTarget();

    const cl=Math.max(0,Math.min(70,val('currentLevel',0)));
    const cs=Math.max(0,Math.min(5,val('currentStar',0)));
    const ct=Math.max(0,Math.min(180,val('trainingExact',val('training',0))));
    const tl=Math.max(cl,Math.min(70,isMax?70:val('v460TargetLevel',70)));
    const ts=Math.max(cs,Math.min(5,isMax?5:val('v460TargetStars',5)));
    const tt=Math.max(ct,Math.min(180,isMax?180:val('v460TargetTraining',180)));

    const rec=[];
    const dl=tl-cl,ds=ts-cs,dt=tt-ct;
    if(dl)rec.push(dl+' Officer level'+(dl===1?'':'s'));
    if(ds)rec.push(ds+' Star level'+(ds===1?'':'s'));
    if(dt)rec.push(dt+' Training stage'+(dt===1?'':'s'));

    result.innerHTML='<strong>'+esc(o.name)+'</strong><br><br>'+
      '<strong>Current:</strong> Level '+cl+' · '+cs+'★ · Training '+ct+'<br>'+
      '<strong>Target:</strong> Level '+tl+' · '+ts+'★ · Training '+tt+'<br><br>'+
      '<strong>Recommendation:</strong> '+(rec.length?'Develop '+rec.join(', ')+'.':'Target already achieved.')+
      targetResourceBreakdown(o,cl,cs,ct,tl,ts,tt,isMax)+
      '<br><small>No Officer progress or Inventory has been changed.</small>';
    result.style.background='rgba(213,167,47,.12)';
    result.scrollIntoView({behavior:'smooth',block:'nearest'});
    return false;
  }

  function uniqueNewOfficerName(){
    const used=new Set(officers.map(o=>String(o.name||'').trim().toLowerCase()));
    if(!used.has('new officer'))return 'New Officer';
    let i=2;
    while(used.has(('New Officer '+i).toLowerCase()))i++;
    return 'New Officer '+i;
  }

  function addOfficerNewestFirst(e){
    if(e){e.preventDefault();e.stopPropagation();if(e.stopImmediatePropagation)e.stopImmediatePropagation();}
    const name=uniqueNewOfficerName();
    officers.unshift({name,season:'S8',orv:1,srv:1,notes:'',role:'',rarity:'Legendary',readinessEligible:true});
    renderDb();
    renderOfficerFilters();
    renderOfficerOptions(name);
    calculate();
    const first=byId('dbRows')?.querySelector('tr');
    if(first)first.scrollIntoView({behavior:'smooth',block:'nearest'});
    return false;
  }

  function installTargetControls(){
    placeTargets();
    const mode=byId('v460TargetMode');
    const oldButton=byId('v460CalculateTarget');
    if(mode&&!mode.dataset.v460Clean){
      mode.dataset.v460Clean='1';
      mode.addEventListener('change',()=>{if(mode.value==='max')setMaxTarget();});
      ['v460TargetLevel','v460TargetStars','v460TargetTraining'].forEach(id=>{
        const el=byId(id);if(!el)return;
        el.addEventListener('input',syncTargetModeFromFields);
        el.addEventListener('change',syncTargetModeFromFields);
      });
      if(mode.value==='max')setMaxTarget();
    }
    if(oldButton&&!oldButton.dataset.v460Clean){
      const clean=oldButton.cloneNode(true);
      clean.dataset.v460Clean='1';
      oldButton.parentNode.replaceChild(clean,oldButton);
      clean.addEventListener('click',calculateTarget,true);
    }
  }

  function installDatabaseAdd(){
    const b=byId('dbAdd');
    if(!b)return false;
    if(b.dataset.v460CleanDb==='1')return true;
    const clean=b.cloneNode(true);
    clean.dataset.v460CleanDb='1';
    b.parentNode.replaceChild(clean,b);
    clean.addEventListener('click',addOfficerNewestFirst,true);
    return true;
  }

  function install(){
    installTargetControls();
    installDatabaseAdd();
    refreshOfficerDataStatus();
  }

  // The stable app initialises asynchronously. Re-apply once after its init has
  // completed so these clean v4.6.0 handlers are the final handlers in control.
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',install,{once:true});
  else install();
  window.addEventListener('load',()=>{
    install();
    setTimeout(install,250);
    setTimeout(install,1000);
    setTimeout(syncOfficerOrderFromPublishedFile,1200);
  },{once:true});
})();
