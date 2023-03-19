const baseURL = "http://localhost:4000/api/v1";
const bookTable = document.querySelector('#bookTable');
const authorList = document.querySelector('#authorList');

const submitForm = (event) => {
    fetch(`${baseURL}/book`,{
        method: "POST",
        //body:        
}).then((response) => {
    return response.json();
}).then((data) => {
    alert(data.message);
}).catch((error) => {
    console.log(error);
})
}