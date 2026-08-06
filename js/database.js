
const DEFAULTS = [{"name": "S7 Roisin", "season": "S7", "orv": 600, "srv": 300, "notes": ""}, {"name": "S7 Barbara", "season": "S7", "orv": 600, "srv": 300, "notes": ""}, {"name": "S7 Romana", "season": "S7", "orv": 500, "srv": 250, "notes": ""}, {"name": "S7 Liora", "season": "S7", "orv": 500, "srv": 250, "notes": ""}, {"name": "S7 Stella", "season": "S7", "orv": 416, "srv": 208, "notes": ""}, {"name": "S7 Klara", "season": "S7", "orv": 416, "srv": 208, "notes": ""}, {"name": "S7 Code", "season": "S7", "orv": 346, "srv": 173, "notes": ""}, {"name": "S7 Kamila", "season": "S7", "orv": 346, "srv": 173, "notes": ""}, {"name": "S6 Regina", "season": "S6", "orv": 289, "srv": 144, "notes": ""}, {"name": "S6 Veronica", "season": "S6", "orv": 289, "srv": 144, "notes": ""}, {"name": "S6 Silverhand", "season": "S6", "orv": 240, "srv": 120, "notes": ""}, {"name": "S6 Red Queen", "season": "S6", "orv": 240, "srv": 120, "notes": ""}, {"name": "S6 Samantha", "season": "S6", "orv": 200, "srv": 100, "notes": ""}, {"name": "S6 Saoirse", "season": "S6", "orv": 200, "srv": 100, "notes": ""}, {"name": "S6 Emily", "season": "S6", "orv": 167, "srv": 84, "notes": ""}, {"name": "S6 Zoya", "season": "S6", "orv": 167, "srv": 84, "notes": ""}];

function clone(v){return JSON.parse(JSON.stringify(v))}
export function loadOfficers(){
  try{
    const saved=JSON.parse(localStorage.getItem('kow_officers_v31')||'null');
    return Array.isArray(saved)&&saved.length?saved:clone(DEFAULTS);
  }catch{return clone(DEFAULTS)}
}
export function saveOfficers(list){
  localStorage.setItem('kow_officers_v31',JSON.stringify(list));
}
export function restoreDefaults(){
  const list=clone(DEFAULTS);saveOfficers(list);return list;
}
export function validate(list){
  const errors=[];const seen=new Set();
  list.forEach((o,i)=>{
    const row=i+1,key=(o.name||'').trim().toLowerCase();
    if(!key)errors.push(`Row ${row}: Officer name is required.`);
    if(seen.has(key))errors.push(`Row ${row}: Duplicate officer name "${o.name}".`);
    seen.add(key);
    if(!Number.isInteger(+o.orv)||+o.orv<=0)errors.push(`Row ${row}: ORV must be a whole number above zero.`);
    if(!Number.isInteger(+o.srv)||+o.srv<=0)errors.push(`Row ${row}: SRV must be a whole number above zero.`);
  });
  return errors;
}
export function exportCsv(list){
  const esc=v=>`"${String(v??'').replaceAll('"','""')}"`;
  const rows=[['Officer Name','Season','ORV per Badge','SRV per Exclusive Star','Notes'],...list.map(o=>[o.name,o.season,o.orv,o.srv,o.notes])];
  return rows.map(r=>r.map(esc).join(',')).join('\n');
}
export function parseCsv(text){
  const rows=[];let row=[],cell='',q=false;
  for(let i=0;i<text.length;i++){
    const c=text[i],n=text[i+1];
    if(c==='"'&&q&&n==='"'){cell+='"';i++}
    else if(c==='"'){q=!q}
    else if(c===','&&!q){row.push(cell);cell=''}
    else if((c==='\n'||c==='\r')&&!q){if(c==='\r'&&n==='\n')i++;row.push(cell);if(row.some(x=>x.trim()!==''))rows.push(row);row=[];cell=''}
    else cell+=c;
  }
  row.push(cell);if(row.some(x=>x.trim()!==''))rows.push(row);
  return rows.slice(1).map(r=>({name:(r[0]||'').trim(),season:(r[1]||'').trim(),orv:Number(r[2]),srv:Number(r[3]),notes:(r[4]||'').trim()}));
}
