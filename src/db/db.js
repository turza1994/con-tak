import Dexie from 'dexie';

//database Connection
export const db = new Dexie('Con-Tak');
db.version(1).stores({
  contacts: '++id, name, email, number', // Primary key and indexed props
});

//Add to Contact query
export const addContactToDB = async ({name, email, number})=>{
  try {
      const id = await db.contacts.add({
        name,
        email,
        number
      });

      console.log(`Friend ${name} successfully added. Got id ${id}`)
      return {id, name, email, number}

    } catch (error) {
      console.log(`Failed to add ${name}: ${error}`)
    }
}

//get contacts query
export const getContactsFromDB = async ()=>{
  let contacts = await db.contacts.toArray()
  contacts = contacts.sort((a, b) => a.name<b.name && -1)
  return contacts;
}