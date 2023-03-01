const APIKEY = "1b977ff48db9f4e31e40912f11c4ea6b";


async  function getImageDataByKeyword(){
    let data = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&query=${keyword.value}`);
    let dataWithJSON = await data.json();
    let finalOutputArray = dataWithJSON.results; //.data check it in consloe 
    //console.log(finalOutputArray);
    createUI(finalOutputArray);
}

async function getMovieInfo() { //GET
    let data = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}`);
    let dataWithJSON = await data.json();
    let finalOutputArray = dataWithJSON.results; //.data check it in consloe 
    //console.log(finalOutputArray);
    createUI(finalOutputArray);

}



async function getGenre(){
    let genre = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${APIKEY}`);
    let genWithJSON = await genre.json();
    let genres = genWithJSON.genres;
    return genres;
   
    
}

async function matchGenre(array){
    let genWithJSON = await getGenre();
    let movieGenre = [];
    
    for(let j = 0; j < array.length; j++){
        for(let i = 0; i < genWithJSON.length; i++){
            if(genWithJSON[i].id === array[j]){
                movieGenre += (`${genWithJSON[i].name} `);
            }
        }
    }
    //console.log(movieGenre);
    return movieGenre;
}


//let container = document.querySelector('#maincontainer'); // cotainer is like the whole page containing all the movie infor

async function createUI(finalArray){
    let container = document.querySelector('#movieInfo-section'); // cotainer is like the whole page containing all the movie infor    
for(let i = 0; i < finalArray.length; i++){
    let movieElement = document.createElement("div");
    movieElement.classList.add("movieInfo");  // movieElement is div for each seprate movie conatinning info and movieInfo is the class for that

//IMAGE APPENDING
    let img = document.createElement("img"); // another img tag created
    img.src = `https://image.tmdb.org/t/p/original/${finalArray[i].poster_path}`;    //whatever name in the console array
    img.classList.add("moviePoster");    // made a class for img tag to use in css
    
    movieElement.appendChild(img);  // appended the img to the movieElement div so now each div is going to have the movie image


//TITLE AND RELEASED YEAR APPENDING  
    let titleAndReleasedYear = document.createElement("p");
    titleAndReleasedYear.textContent = `${finalArray[i].title} ${finalArray[i].release_date}`;
    titleAndReleasedYear.classList.add("titleAndYear");

    movieElement.appendChild(titleAndReleasedYear);
    

// DESCRIPTION APPENDING
    let description = document.createElement("p");
    description.textContent = finalArray[i].overview;
    description.classList.add("des");

    movieElement.appendChild(description);



//GENRE APPENDING
    let genre = document.createElement("p");
    genre.textContent = await matchGenre(finalArray[i].genre_ids);
    genre.classList.add("gen");

    movieElement.appendChild(genre);


//EACH MOVIE ELEMENT IN CONTAINER
    container.appendChild(movieElement); // appended the each movieElement to the cotainer(whole page)
    //console.log(finalArray[i]); // just to see the content from api

    }
}
getMovieInfo();
