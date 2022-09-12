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


console.log(addToCollection( "Who is Jill Scott? Words and Sound, Vol. 1", "Jill Scott", 2000));

console.log(addToCollection( "Beautifully Human: Words and Sounds, Vol. 2", "Jill Scott", 2004));

console.log(addToCollection( "College Dropout", "Kanye West", 2004));

console.log(addToCollection( "Pieces of a Man", "Gil Scot-Heron", 1971));

console.log(addToCollection( "Beyond the Groove", "Tom Misch", 2016));

console.log(addToCollection( "What's Going On", "Marvin Gaye", 1971));

console.log(collection);

function showCollection(array){
    console.log(array.length);
    for (let album of array){
        console.log(`${album.title} by ${album.artist}, published in ${album.yearPublished}`);
    }
}

showCollection(collection);


function findByArtist(artist){
    let matchingArtist = [];
    for(let album of collection){
        if(album.artist === artist){
            matchingArtist.push(album);
        }
    }return matchingArtist;
};

console.log(findByArtist("Kanye West"))
console.log(findByArtist("Tom Hanks"));

