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


console.log(addToCollection("Jill Scott", "Who is Jill Scott? Words and Sound, Vol. 1", 2000));

console.log(addToCollection("Jill Scott", "Beautifully Human: Words and Sounds, Vol. 2", 2004));

console.log(addToCollection("Kanye West", "College Dropout", 2004));

console.log(addToCollection("Gil Scot-Heron", "Pieces of a Man", 1971));

console.log(addToCollection("Tom Misch", "Beyond the Groove", 2016));

console.log(addToCollection("Marvin Gaye", "What's Going On", 1971));

console.log(collection);

function showCollection(array){
    console.log(array.length);
    for (let album of array){
        console.log(`${album.title} by ${album.artist}, published in ${album.yearPublished}`);
    }
}

showCollection(collection);