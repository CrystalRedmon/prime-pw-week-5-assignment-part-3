console.log('***** Music Collection *****')
let collection = [];

function addToCollection(title, artist, yearPublished, tracks){
    let newRecord={
        title: title,
        artist: artist,
        yearPublished: yearPublished,
        tracks: [tracks]
    }
    collection.push(newRecord);
    return newRecord;
}



console.log(addToCollection( "Who is Jill Scott? Words and Sound, Vol. 1", "Jill Scott", 2000, [{'He Loves Me': '4:36' }]));
console.log(addToCollection( "Beautifully Human: Words and Sounds, Vol. 2", "Jill Scott", 2004, [{'Golden': '3:54'}, {'The Fact Is': '4:38'}]));
console.log(addToCollection( "College Dropout", "Kanye West", 2004, [{'Never Let Me Down': '5:24'}, {'Spaceship':'5:24'}]));
console.log(addToCollection( "Pieces of a Man", "Gil Scot-Heron", 1971, [{'Pieces of a Man':'4:55'}, {'Home is Where the Hatred Is': '3:21'}]));
console.log(addToCollection( "Geography", "Tom Misch", 2018, [{'Movie': '5:57'}, {'Water Baby':'4:31'}]));
console.log(addToCollection( "What's Going On", "Marvin Gaye", 1971, [{"What's Going On": '3:48'}, {'Mercy, Mercy': '3:03'}]));

console.log(collection);



/*
Update the `showCollection` function to display the list of tracks for each album with its name and duration.
    TITLE by ARTIST, published in YEAR:
    1. NAME: DURATION
    2. NAME: DURATION
    3. NAME: DURATION
*/

function showCollection(array){
    console.log(array.length);
    for(let album =0; album< array.length; album++){
        console.log(array[album].title, 'by', array[album].artist, 'published in', array[album].yearPublished.toString(), ':\n')
        for(let songNum =1; songNum <= array[album].tracks[0].length; songNum++){
            let songName = Object.entries(array[album].tracks[0][songNum-1]).join()
           
            console.log(songNum + ': '+ songName.replace(',', ': ').toString());

        }
        }
}


showCollection(collection);
//console.log(showCollection(collection))




function findByArtist(artist){
    let matchingArtist = [];
    for(let album of collection){
        if(album.artist === artist){
            matchingArtist.push(album);
        }
    }return matchingArtist;
    
};

console.log("Expect album:", findByArtist("Kanye West"))
console.log("Expect albums:", findByArtist("Jill Scott"))
console.log("Expect empty array:", findByArtist("Tom Hanks"));
findByArtist("Tom Hanks")




console.log("////////Stretch Goals////////")


function search(searchBy){
    if(!searchBy || Object.keys(searchBy).length === 0){
        return collection; 
    }
    let matchedCriteria =[];
for( let i=0; i<collection.length; i++){
    if(collection[i].artist === searchBy.artist && collection[i].yearPublished === searchBy.year){
        for(let j=0; j < collection[i].tracks[0].length; j++){
            if(collection[i].tracks[0][j].hasOwnProperty(searchBy.tracks)){
            //console.log('it works')
            matchedCriteria.push(collection[i])
            }
        }
    }
}return matchedCriteria
};


console.log("Expect album:", search({ artist: 'Kanye West', year: 2004, tracks:'Never Let Me Down'}));//matching *all* of the search criteria, result array
console.log("Expect album:", search({ artist: 'Jill Scott', year: 2004, tracks:'The Fact Is'}));//matching *all* of the search criteria, result array
console.log("Expect album:", search({ artist: 'Marvin Gaye', year: 1971, tracks:"What's Going On"}));//matching *all* of the search criteria, result array
console.log("Expect empty array:", search({ artist: 'Jill Scott', year: 2005 })); //If no results are found, return an empty array.
console.log("Expect empty array", search({ artist: 'Jill Scott' }));//If no results are found, return an empty array.
console.log("Expect collection:", search({})); ///Empty search object, return collection
console.log("Expect collection:", search());//No search object, return collection



                        









