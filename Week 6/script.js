
const APIKEY = "qjLzWeRKirFrj3Ect7eT5RLwMz8F7yqOBt4E_UG2zPA";

// Path Parameters
// http://facebook.com/prabh/profile/user

// Query Parameters (Where you pass data in key-value pair)
// http://facebook.com?user=prabh&type=profile&value=user


// When you are using AXIOS , you don;t have to convert the promise result to JSON,
// because its already done for you by Axios

// Just like Fetch, Axios is also a HTTP CLient to communicate with the server

//const let imagesData;
const fetchesImages = async () => {
    try {
        return await axios.get(`https://api.unsplash.com/photos/?client_id=${APIKEY}`);
    } catch(error) {
        console.log(error);
        alert("There was an error", error);
    }
}

const generateUI = (arrayOgImages) => {
    arrayOgImages.forEach((imageObject) => {
        let photoSection = document.getElementById('photo-section');
        let imageContainer = document.createElementById('div');
        
        imageContainer.innerHTML = `<img src = ${imageObject.url}>
        <time>${modifyDate().Date}
        <p>${imageObject.description}<>`


        photoSection.appendChild(imageContainer);
    })
}

// function modifyData(date){
//     let d= new Date(date);
//     //let readableDate = `${d.getDate()}, ${d.getMonth()}, ${d.getFullYear()}`
//     let d.toLocalDate 
// }

async function getData() {
    const { data } = await fetchesImages();

    imagesData = data.map((imageObject) => {
        return{
            url: imageObject.urls.full,
            createdAt: imageObject.created_at,
            likes: imageObject.likes,
            description: imageObject.description || "Description not found"
        }
    });
    //console.log(data, "We get from API");
    generateUI(imagesData);
}

getData();