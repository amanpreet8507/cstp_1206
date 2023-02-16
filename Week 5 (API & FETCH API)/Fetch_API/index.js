
// FETCHING API using async function
async function getUserData(){
    let data = await fetch('https://restcountries.com/v3.1/all');
    let dataWithJSON = await data.json();  
    let finalOutputArray = dataWithJSON;
    console.log(finalOutputArray);

    createUI(finalOutputArray);

}   


function createUI(finalOutputArray){

    let container = document.querySelector('#maincontainer');

    for(let i = 0; i < finalOutputArray.length; i++) {
        let flagElement = document.createElement("div");
        flagElement.classList.add("flag");

        let img = document.createElement("img");
        img.src = finalOutputArray[i].flags.svg;
        img.classList.add("flagsimg");

        flagElement.appendChild(img);
        

        let contentInfo = document.createElement('div');



        let countryName = document.createElement('p');
        countryName.textContent = finalOutputArray[i].name.common;
        countryName.classList.add("cname");

        contentInfo.appendChild(countryName);

        let countryPopulation = document.createElement('p');
        countryPopulation.textContent = finalOutputArray[i].population;
        countryPopulation.classList.add("pop");

        contentInfo.appendChild(countryPopulation);


        
        flagElement.appendChild(contentInfo);

        container.appendChild(flagElement); 
        //console.log(finalOutputArray[i].name.common)       


    }
}

getUserData();
