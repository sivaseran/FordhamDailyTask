import {db,collection,doc,getDoc,getDocs,setDoc,writeBatch,serverTimestamp} from './firebase.js';
import {HOT_FOOD_DEFAULTS,ensureInitialCookingBaseline} from './hot-food-store.js';

// Fordham staff (stable IDs). Names and PINs can be changed later in Manager > People & PIN.
export const FORDHAM_ROSTER=[
  {
    "id": "staff1",
    "name": "Alex",
    "staffId": "1",
    "pin": "1111",
    "role": "staff",
    "active": true
  },
  {
    "id": "staff2",
    "name": "Regi",
    "staffId": "2",
    "pin": "2222",
    "role": "staff",
    "active": true
  },
  {
    "id": "staff3",
    "name": "Jude",
    "staffId": "3",
    "pin": "3333",
    "role": "staff",
    "active": true
  },
  {
    "id": "staff4",
    "name": "Seran",
    "staffId": "4",
    "pin": "4444",
    "role": "staff",
    "active": true
  },
  {
    "id": "staff5",
    "name": "Kumar",
    "staffId": "5",
    "pin": "5555",
    "role": "staff",
    "active": true
  },
  {
    "id": "staff6",
    "name": "Rishi",
    "staffId": "6",
    "pin": "6666",
    "role": "staff",
    "active": true
  },
  {
    "id": "staff7",
    "name": "Sundhar",
    "staffId": "7",
    "pin": "7777",
    "role": "staff",
    "active": true
  }
];
export const FORDHAM_MANAGER={id:'manager1',name:'Manager',pin:'1510',role:'manager',active:true};

// Default weekly shift pattern. Deliveries (Seran Mon, Jude Thu, 4h floating) are notes only.
export const FORDHAM_AVAILABILITY={
  "staff1": {
    "mon": "05:30-14:00",
    "tue": "05:30-14:00, 17:00-22:00",
    "wed": "",
    "thu": "05:30-14:00",
    "fri": "05:30-13:00, 15:00-21:00",
    "sat": "05:30-14:00",
    "sun": "05:30-13:00"
  },
  "staff2": {
    "mon": "14:00-21:00",
    "tue": "14:00-21:00",
    "wed": "05:30-12:00",
    "thu": "",
    "fri": "08:00-15:00",
    "sat": "",
    "sun": ""
  },
  "staff3": {
    "mon": "08:00-15:00",
    "tue": "",
    "wed": "12:00-22:00",
    "thu": "17:00-22:00",
    "fri": "13:00-22:00",
    "sat": "",
    "sun": "09:00-12:00, 14:00-22:00"
  },
  "staff4": {
    "mon": "",
    "tue": "08:00-17:00",
    "wed": "",
    "thu": "08:00-17:00",
    "fri": "",
    "sat": "",
    "sun": ""
  },
  "staff5": {
    "mon": "15:00-22:00",
    "tue": "",
    "wed": "08:00-21:00",
    "thu": "14:00-21:00",
    "fri": "",
    "sat": "08:00-22:00",
    "sun": ""
  },
  "staff6": {
    "mon": "",
    "tue": "",
    "wed": "",
    "thu": "",
    "fri": "",
    "sat": "",
    "sun": "12:00-20:00"
  },
  "staff7": {
    "mon": "",
    "tue": "",
    "wed": "",
    "thu": "",
    "fri": "",
    "sat": "14:00-21:00",
    "sun": ""
  }
};

// Initial cooking at 06:00 (weekends stay manual start).
export const FORDHAM_INITIAL_COOKS={Mon:'staff1',Tue:'staff1',Wed:'staff2',Thu:'staff1',Fri:'staff1'};

// One-time Fordham bootstrap for an empty Firebase project. Each part only writes
// when missing, so later Manager edits are never overwritten.
const FORDHAM_SETUP_MARKER='fordhamSetup_v1';
export async function ensureFordhamSetup(){
  const markerRef=doc(db,'system',FORDHAM_SETUP_MARKER);
  if((await getDoc(markerRef)).exists()) return {applied:false};
  const users=await getDocs(collection(db,'users'));
  if(users.empty){
    const batch=writeBatch(db);
    for(const u of [...FORDHAM_ROSTER,FORDHAM_MANAGER]){
      const {id,...data}=u;
      batch.set(doc(db,'users',id),{...data,updatedAt:serverTimestamp()});
    }
    await batch.commit();
  }
  const availRef=doc(db,'system','staffAvailability');
  if(!(await getDoc(availRef)).exists()){
    await setDoc(availRef,{week:FORDHAM_AVAILABILITY,updatedAt:serverTimestamp(),updatedByUserId:'system',updatedByName:'Fordham setup'});
  }
  const hotRef=doc(db,'system','hotFood');
  if(!(await getDoc(hotRef)).exists()){
    await setDoc(hotRef,{...HOT_FOOD_DEFAULTS,enabled:true,initialCookingStaffByDay:FORDHAM_INITIAL_COOKS,updatedAt:serverTimestamp(),updatedByUserId:'system',updatedByName:'Fordham setup'});
  }
  try{await ensureInitialCookingBaseline({id:'system',name:'Fordham setup'});}
  catch(error){console.warn('Hot food baseline will be created when the manager opens Hot Food',error);}
  await setDoc(markerRef,{appliedAt:serverTimestamp(),version:'fd-1.0.0'});
  return {applied:true};
}

