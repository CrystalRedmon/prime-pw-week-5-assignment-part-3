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
console.log(addToCollection( "Hey Now", "Me", 1971));
console.log(collection);





function showCollection(array){
    console.log(array.length);
    for(album of array){
        console.log(`${album.title} by ${album.artist}, published in ${album.yearPublished} `)
        }
        }
    


showCollection(collection);
//console.log(showCollection(collection))



//`${album.title} by ${album.artist}, published in ${album.yearPublished} `
//(i + ".", album.title, "by", album.artist, "published in", album.yearPublished, )



function findByArtist(artist){
    let matchingArtist = [];
    for(let album of collection){
        if(album.artist === artist){
            console.log("Found", album, "in the collection")
            matchingArtist.push(album);
        }
    }return matchingArtist;
    
};

console.log("Expect album:", findByArtist("Kanye West"))
console.log("Expect albums:", findByArtist("Jill Scott"))
console.log("Expect empty array:", findByArtist("Tom Hanks"));
findByArtist("Tom Hanks")




console.log("////////Stretch Goals////////")

//How to access tracks
//collection[i].tracks[0][i]
//console.log(collection[i].tracks[0][i])
//Must go down 4 levels

function search(searchBy){
    if(!searchBy){
        return collection; 
    }
    let matchedCriteria =[]
for( let album of collection ){
    
    if(album.artist === searchBy.artist && album.yearPublished === searchBy.year){

        
    }


}return matchedCriteria;
};


console.log("Expect album:", search({ artist: 'Kanye West', year: 2004, tracks:{'Never Let Me Down': '5:24'}}));
console.log("Expect empty array:", search({ artist: 'Jill Scott', year: 2005 }));
console.log("Expect empty array", search({ artist: 'Jill Scott' }));
console.log("Expect empty array:", search({ }));
console.log("Expect collection:", search());
console.log("Expect album:", search({ artist: 'Kanye West', year: 2004 }));


                        
console.log(collection[2].tracks[0]); ///This is how to access the tracks array. Must iterate through this to find key name that matches the song criteria. 

//matchedCriteria.push(album); 
//&& album.tracks === searchBy.tracks