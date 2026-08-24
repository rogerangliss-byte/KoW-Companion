/* KoW Companion v4.6.0 LIVE — Advanced Planning season sync
   Keeps the Advanced Multi-Officer Planning season dropdown aligned with
   whatever seasons currently exist in the Officer Database. */
(()=>{
  'use strict';

  function seasonList(){
    if(typeof officers==='undefined'||!Array.isArray(officers))return [];
    const seen=new Set();
    for(const o of officers){
      const raw=String(o&&o.season||'').trim();
      if(!raw)continue;
      if(/^original$/i.test(raw))seen.add('Original');
      else if(/^s\d+$/i.test(raw))seen.add(raw.toUpperCase());
    }
    return [...seen].sort((a,b)=>{
      if(a==='Original')return -1;
      if(b==='Original')return 1;
      return Number(a.slice(1))-Number(b.slice(1));
    });
  }

  function syncAdvancedPlannerSeasons(){
    const select=document.getElementById('kowPlannerSeasonFilter');
    if(!select)return;
    const previous=select.value||'all';
    const seasons=seasonList();
    select.innerHTML='';
    select.add(new Option('All Sessions','all'));
    for(const season of seasons){
      const value=season==='Original'?'original':season;
      select.add(new Option(season,value));
    }
    select.value=[...select.options].some(o=>o.value===previous)?previous:'all';
  }

  function install(){
    syncAdvancedPlannerSeasons();

    const rows=document.getElementById('dbRows');
    if(rows&&!rows.dataset.v460SeasonObserver){
      rows.dataset.v460SeasonObserver='1';
      new MutationObserver(()=>setTimeout(syncAdvancedPlannerSeasons,0))
        .observe(rows,{childList:true,subtree:true});
      rows.addEventListener('input',()=>setTimeout(syncAdvancedPlannerSeasons,0));
      rows.addEventListener('change',()=>setTimeout(syncAdvancedPlannerSeasons,0));
    }

    document.addEventListener('click',e=>{
      if(e.target.closest('#dbAdd,#dbSave'))setTimeout(syncAdvancedPlannerSeasons,0);
    },true);
    document.addEventListener('change',e=>{
      const t=e.target;
      if(t&&t.matches('input[type="file"]'))setTimeout(syncAdvancedPlannerSeasons,100);
    },true);
  }

  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',install,{once:true});
  else install();
  window.addEventListener('load',()=>setTimeout(syncAdvancedPlannerSeasons,250),{once:true});
})();
