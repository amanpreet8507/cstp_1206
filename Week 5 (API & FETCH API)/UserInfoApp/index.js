
async function fetchMeUserInfo(){
     let data = await fetch('https://reqres.in/api/users');
     let dataWithJSON = await  data.json();
     let finalOutputArray = dataWithJSON.data;


     function createUI(finalOutputArray){
     
     let container = document.querySelector('#mainconatianer');
     

     for(let i = 0; i < finalOutputArray.length; i++){

        //Main parent tag
        let cardElement = document.createElement("div");
        cardElement.classList.add("card");

        let img = document.createElement("img");
        img.src = finalOutputArray[i].avatar;
        img.classes.add("avatar");


        cardElement.appendChild(img);
        //Create a div element for  Name and email (PARENT)
        let contentInfo = documet.createElement('div');

        let fullName = document.createElement('p');
        fullName.textContent = `${finalOutputArray[i].first_name} ${finalOutputArray[i].first_name}`


        contentInfo.appendChild(fullName)



        let email = document.createElement('p');
        email.textContent = finalOutputArray[i].email;


        contentInfo.appendChild(email);

        cardElement.appendChild(contentInfo);

        container.appendChild(cardElement);
        console.log(finalOutputArray[i].id);
     }
}

fetchMeUserInfo();
}
