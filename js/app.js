
import {loadOfficers,saveOfficers,restoreDefaults,validate,exportCsv,parseCsv} from './database.js';

let officers=loadOfficers();
const $=id=>document.getElementById(id);

function renderPlanner(){
  const select=$('officerSelect');const current=select.value;
  select.innerHTML=officers.map((o,i)=>`<option value="${i}">${o.name}</option>`).join('');
  select.value=current&&officers[current]?current:0;
  updatePlanner();
}
function updatePlanner(){
  const o=officers[+$('officerSelect').value]||officers[0];
  $('plannerOrv').value=o?.orv??'';
  $('plannerSrv').value=o?.srv??'';
}
function seasons(){
  return [...new Set(officers.map(o=>o.season).filter(Boolean))].sort();
}
function renderFilters(){
  const current=$('seasonFilter').value;
  $('seasonFilter').innerHTML='<option value="">All seasons</option>'+seasons().map(s=>`<option>${s}</option>`).join('');
  $('seasonFilter').value=current;
}
function renderTable(){
  const q=$('search').value.trim().toLowerCase(),season=$('seasonFilter').value;
  const rows=officers.map((o,i)=>({...o,_i:i})).filter(o=>(!q||o.name.toLowerCase().includes(q))&&(!season||o.season===season));
  $('officerRows').innerHTML=rows.map(o=>`
    <tr data-index="${o._i}">
      <td><input data-field="name" value="${escapeHtml(o.name)}"></td>
      <td><input data-field="season" value="${escapeHtml(o.season)}"></td>
      <td><input data-field="orv" type="number" min="1" step="1" value="${o.orv}"></td>
      <td><input data-field="srv" type="number" min="1" step="1" value="${o.srv}"></td>
      <td><input data-field="notes" value="${escapeHtml(o.notes||'')}"></td>
      <td class="actions"><button data-copy>Copy</button><button data-delete>Delete</button></td>
    </tr>`).join('');
  document.querySelectorAll('#officerRows input').forEach(inp=>inp.oninput=e=>{
    const tr=e.target.closest('tr'),i=+tr.dataset.index,f=e.target.dataset.field;
    officers[i][f]=(f==='orv'||f==='srv')?Number(e.target.value):e.target.value;
  });
  document.querySelectorAll('[data-copy]').forEach(b=>b.onclick=e=>{
    const i=+e.target.closest('tr').dataset.index;
    officers.splice(i+1,0,{...officers[i],name:officers[i].name+' Copy'});
    renderAll();
  });
  document.querySelectorAll('[data-delete]').forEach(b=>b.onclick=e=>{
    const i=+e.target.closest('tr').dataset.index;
    officers.splice(i,1);renderAll();
  });
}
function escapeHtml(v){return String(v??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]))}
function renderAll(){renderPlanner();renderFilters();renderTable();showValidation()}
function showValidation(){
  const errors=validate(officers);
  $('validation').innerHTML=errors.length?'<b>Validation issues:</b><br>'+errors.join('<br>'):'Database validation passed.';
}
$('officerSelect').onchange=updatePlanner;
$('search').oninput=renderTable;
$('seasonFilter').onchange=renderTable;
$('addRow').onclick=()=>{officers.push({name:'New Officer',season:'S8',orv:1,srv:1,notes:''});renderAll()};
$('saveDb').onclick=()=>{const errors=validate(officers);if(errors.length){showValidation();alert('Fix validation issues before saving.');return}saveOfficers(officers);renderAll();alert('Officer database saved.')};
$('restoreDefaults').onclick=()=>{if(confirm('Restore the default officer database?')){officers=restoreDefaults();renderAll()}};
$('exportCsv').onclick=()=>{const blob=new Blob([exportCsv(officers)],{type:'text/csv'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='officers.csv';a.click();URL.revokeObjectURL(a.href)};
$('importCsv').onchange=e=>{const f=e.target.files[0];if(!f)return;const r=new FileReader();r.onload=()=>{const parsed=parseCsv(r.result);const errors=validate(parsed);if(errors.length){$('validation').innerHTML='<b>Import failed:</b><br>'+errors.join('<br>');return}officers=parsed;saveOfficers(officers);renderAll();alert('CSV imported.');};r.readAsText(f);e.target.value=''};
document.querySelectorAll('.tabs button').forEach(b=>b.onclick=()=>{document.querySelectorAll('.tabs button').forEach(x=>x.classList.remove('active'));document.querySelectorAll('.view').forEach(x=>x.classList.remove('active'));b.classList.add('active');$(b.dataset.view).classList.add('active')});

function loadAppearance(){const n=localStorage.getItem('kow_app_name_v31');if(n){$('appName').value=n;$('appTitle').textContent=n;document.title=n}const bg=localStorage.getItem('kow_bg_v31');if(bg)document.body.style.backgroundImage=`url('${bg}')`}
$('appName').oninput=e=>{localStorage.setItem('kow_app_name_v31',e.target.value);$('appTitle').textContent=e.target.value||'KoW Companion';document.title=e.target.value||'KoW Companion'};
$('backgroundPicker').onchange=e=>{const f=e.target.files[0];if(!f)return;const r=new FileReader();r.onload=()=>{localStorage.setItem('kow_bg_v31',r.result);document.body.style.backgroundImage=`url('${r.result}')`};r.readAsDataURL(f)};
$('resetAppearance').onclick=()=>{localStorage.removeItem('kow_app_name_v31');localStorage.removeItem('kow_bg_v31');location.reload()};

loadAppearance();renderAll();
if('serviceWorker' in navigator)window.addEventListener('load',()=>navigator.serviceWorker.register('./service-worker.js'));
