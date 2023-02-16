//const APIKEY = "https://www.themoviedb.org/1b977ff48db9f4e31e40912f11c4ea6b";
//https://api.themoviedb.org/3/movie/550?api_key=1b977ff48db9f4e31e40912f11c4ea6b

async function getMovieInfo() {
    let data = await fetch('https://www.themoviedb.org');
    let dataWithJSON = await data.json();
    let finalOutputArray = dataWithJSON.data; //.data check it in consloe 
}

let container = document.querySelector('#maincontainer'); // cotainer is like the whole page containing all the movie infor

for(let i = 0; i < finalOutputArray.length; i++){
    let movieElement = document.createElement("div");
    movieElement.classList.add("movieInfo");  // movieElement is div for each seprate movie conatinning info and movieInfo is the class for that

//IMAGE APPENDING
    let img = document.createElement("img"); // another img tag created
    //img.src = finalOutputArray[i].POSTER;    //whatever name in the console array
    img.classList.add("moviePoster");    // made a class for img tag to use in css
    
    movieElement.appendChild(img);  // appended the img to the movieElement div so now each div is going to have the movie image


//TITLE AND RELEASED YEAR APPENDING  
    let titleAndReleasedYear = document.createElement("p");
    //titleAndReleasedYear.textContent = `${finalOutputArray[i].title_of_the_movie} ${finalOutputArray[i].released_year}`;
    titleAndReleasedYear.classList.add("titleAndYear");

    movieElement.appendChild(movieTitleAndReleasedYear);
    

// DESCRIPTION APPENDING
    let description = document.createElement("p");
    //description.textContent = finalOutputArray[i].description;
    description.classList.add("des");

    movieElement.appendChild(description);



//GENRE APPENDING
    let genre = document.createElement("p");
    //description.textContent = finalOutputArray[i].genre;
    genre.classList.add("gen");

    movieElement.appendChild(genre);


//EACH MOVIE ELEMENT IN CONTAINER
    container.appendChild(movieElement); // appended the each movieElement to the cotainer(whole page)
    console.log(finalOutputArray[i]); // just to see the content from api

}

getMovieInfo();
