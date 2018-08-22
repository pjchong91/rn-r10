//REALM DATABSE

// WRITE ALL REALM RELATED CODE

import Realm from "realm";

const favsSchema = {
  // singlular & capitalized first letter
  name: "Fav",
  primaryKey: "id",
  properties: {
    id: "string",
    favedOn: "date"
  }
};

const realm = new Realm({ schema: [favsSchema] });
// primary key - every item can be uniquely identified
// every database table should use primary keys

//export this function so that it can be used from another file
// USE CONST INSTEAD OF LET
export const addFav = id => {
  realm.write(() => {
    const favedOn = new Date();
    realm.create("Fav", { id, favedOn });
  });
};

export const getFavs = () => {
  const favs = realm.objects("Fav");
  return favs;
};

export const removeFav = id => {
  realm.write(() => {
    const favToRemove = realm.objects("Fav").filtered("id==$0", id);
    realm.delete(favToRemove);
  });
};

export default realm;
