// db.js
import Dexie from 'dexie';

export const db = new Dexie('myDatabase');
db.version(1).stores({
  contacts: '++id, name, email, number', // Primary key and indexed props
});