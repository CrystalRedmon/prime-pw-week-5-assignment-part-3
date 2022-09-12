console.log('***** Music Collection *****')
let collection = [];

function addToCollection(title, artist, yearPublished){
    let newRecord={
        title: title,
        artist: artist,
        yearPublished: yearPublished,
    }
    collection.push(newRecord);
    return newRecord;
}

addToCollection("Blah", "Gwen", "2012");
console.log(collection);
