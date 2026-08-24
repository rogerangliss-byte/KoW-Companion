/* KoW Companion v4.6.0 LIVE — data-driven future release forecast.
   Uses the latest confirmed Legendary seasonal Officer costs in the Officer
   database as the forecasting baseline, then projects the next release slots. */
(()=>{
  'use strict';

  const $=id=>document.getElementById(id);
  const fmt=n=>Math.max(0,Math.round(Number(n)||0)).toLocaleString();

  const SLOT={
    1:{month:'October',type:'Rally / Garrison'},
    2:{month:'January',type:'Infantry'},
    3:{month:'April',type:'Tanks'},
    4:{month:'July',type:'Tank Destroyers'}
  };

  function seasonNumber(season){
    const m=String(season||'').trim().match(/^S(\d+)$/i);
    return m?Number(m[1]):0;
  }

  function releaseSlot(o){
    const role=String(o?.role||o?.notes||'').toLowerCase();
    if(role.includes('garrison')||role.includes('rally'))return 1;
    if(role.includes('infantry'))return 2;
    if(role.includes('tank destroyer'))return 4;
    if(role.includes('tank'))return 3;
    return 0;
  }

  function latestKnownRelease(){
    if(typeof officers==='undefined'||!Array.isArray(officers))return {season:7,slot:4,orv:600,srv:300,source:'S7 Tank Destroyer'};

    const rows=officers
      .filter(o=>seasonNumber(o.season)>0)
      .filter(o=>String(o.rarity||'Legendary')==='Legendary')
      .map(o=>({o,season:seasonNumber(o.season),slot:releaseSlot(o)}))
      .filter(x=>x.slot>0&&Number(x.o.orv)>0&&Number(x.o.srv)>0);

    if(!rows.length)return {season:7,slot:4,orv:600,srv:300,source:'S7 Tank Destroyer'};

    const maxSeason=Math.max(...rows.map(x=>x.season));
    const seasonRows=rows.filter(x=>x.season===maxSeason);
    const maxSlot=Math.max(...seasonRows.map(x=>x.slot));
    const latest=seasonRows.filter(x=>x.slot===maxSlot);

    // If a release contains two Officers, use the highest confirmed cost as the
    // conservative common forecasting baseline.
    const orv=Math.max(...latest.map(x=>Number(x.o.orv)||0));
    const srv=Math.max(...latest.map(x=>Number(x.o.srv)||0));
    const slotName=SLOT[maxSlot]?.type||'Officer';
    return {season:maxSeason,slot:maxSlot,orv,srv,source:`S${maxSeason} ${slotName}`};
  }

  function advance(season,slot,steps){
    let s=season,sl=slot;
    for(let i=0;i<steps;i++){
      sl++;
      if(sl>4){sl=1;s++;}
    }
    return {season:s,slot:sl};
  }

  function rebuildReleaseOptions(base){
    const select=$('forecastRelease');
    if(!select)return;
    const previous=select.selectedIndex;
    select.innerHTML='';
    for(let delta=1;delta<=4;delta++){
      const r=advance(base.season,base.slot,delta);
      const meta=SLOT[r.slot];
      const opt=document.createElement('option');
      opt.value=String(delta);
      opt.dataset.season=String(r.season);
      opt.dataset.slot=String(r.slot);
      opt.textContent=`${meta.month} — S${r.season} ${meta.type}`;
      select.appendChild(opt);
    }
    select.selectedIndex=Math.max(0,Math.min(previous,select.options.length-1));
  }

  function updateDynamicForecast(){
    const select=$('forecastRelease');
    if(!select)return;
    const base=latestKnownRelease();

    if(select.dataset.kowBase!==`${base.season}-${base.slot}-${base.orv}-${base.srv}`){
      select.dataset.kowBase=`${base.season}-${base.slot}-${base.orv}-${base.srv}`;
      rebuildReleaseOptions(base);
    }

    const delta=Math.max(1,Number(select.value)||1);
    const growth=Math.max(0,Number($('forecastGrowth')?.value||20))/100;
    const badges=Math.max(0,Number($('forecastBadges')?.value||0));
    const starValue=Math.max(0,Number($('forecastStarValue')?.value||0));
    const orv=Math.round(base.orv*Math.pow(1+growth,delta));
    const srv=Math.round(base.srv*Math.pow(1+growth,delta));
    const exclusiveStars=Math.ceil(starValue/110);
    const totalOrv=badges*orv;
    const totalSrv=exclusiveStars*srv;

    if($('forecastOrvPerBadge'))$('forecastOrvPerBadge').textContent=fmt(orv);
    if($('forecastSrvPerStar'))$('forecastSrvPerStar').textContent=fmt(srv);
    if($('forecastTotalOrv'))$('forecastTotalOrv').textContent=fmt(totalOrv);
    if($('forecastTotalSrv'))$('forecastTotalSrv').textContent=fmt(totalSrv);

    const label=select.options[select.selectedIndex]?.textContent||'Future Officer';
    if($('forecastNote'))$('forecastNote').innerHTML=`<b>${label}</b><br>Planning estimate using ${String($('forecastGrowth')?.value||20)}% growth per Officer release from the latest confirmed database release: <b>${base.source}</b> (${fmt(base.orv)} ORV / ${fmt(base.srv)} SRV). For ${fmt(badges)} badges and ${fmt(starValue)} Star value (${fmt(exclusiveStars)} Exclusive Stars), plan for approximately <b>${fmt(totalOrv)} ORV</b> and <b>${fmt(totalSrv)} SRV</b>. Forecast only — replace with confirmed costs when released.`;

    const card=$('futureOfficerForecastCard');
    const intro=card?.querySelector('p.muted');
    if(intro)intro.innerHTML=`Forecast future Officer costs from the established Officer-release sequence. The model now uses the latest confirmed Officer Database release — <b>${base.source}</b> (${fmt(base.orv)} ORV / ${fmt(base.srv)} SRV) — and compounds the selected growth rate for each subsequent release.`;
  }

  function install(){
    const select=$('forecastRelease');
    if(!select)return false;
    ['forecastRelease','forecastGrowth','forecastBadges','forecastStarValue'].forEach(id=>{
      const el=$(id);
      if(!el||el.dataset.kowDynamicForecast==='1')return;
      el.dataset.kowDynamicForecast='1';
      el.addEventListener('input',()=>setTimeout(updateDynamicForecast,0));
      el.addEventListener('change',()=>setTimeout(updateDynamicForecast,0));
    });
    updateDynamicForecast();
    return true;
  }

  window.kowRefreshDynamicReleaseForecast=updateDynamicForecast;
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',()=>{install();setTimeout(install,500);},{once:true});
  else install();
  window.addEventListener('load',()=>{setTimeout(install,300);setTimeout(install,1400);},{once:true});
})();
