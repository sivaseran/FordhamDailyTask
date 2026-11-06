import {db,collection,getDocs,query,where} from './firebase.js';
import {ensureFordhamSetup} from './fordham-setup.js';

export async function loginWithPin(pin){
  const clean=String(pin||'').trim();
  if(!clean) throw new Error('Enter your PIN.');
  // First run on an empty Firebase project creates the Fordham staff, PINs and defaults.
  try{await ensureFordhamSetup();}catch(error){console.warn('Fordham setup check failed',error);}
  const q=query(collection(db,'users'),where('pin','==',clean),where('active','==',true));
  const s=await getDocs(q);
  if(s.empty) throw new Error('Invalid PIN.');
  const rows=s.docs.map(d=>({id:d.id,...d.data()}));
  if(rows.length>1) throw new Error('Duplicate PIN found. Ask a manager to correct it.');
  return rows[0];
}
export function saveSession(u){sessionStorage.setItem('ntUser',JSON.stringify(u));}
export function getSession(){try{return JSON.parse(sessionStorage.getItem('ntUser')||'null')}catch{return null}}
export function clearSession(){sessionStorage.removeItem('ntUser');}
