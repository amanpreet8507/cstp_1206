const baseUrl = 'http://localhost:2400/api/v1';
const hotelTable = document.querySelector('#hotelTableBody');
const employeeList = document.querySelector("#employeeList");

let employees = [];
let newHotel = {};

const submitForm = (event) => {
    event.preventDefault();

    const name = document.getElementById('name');
    const address = document.getElementById('address');
    newHotel.name = name.value;
    newBook.address = address.value;

    fetch(`${baseUrl}/hotel`, {
        method: "POST",
        body: JSON.stringify(newHotel),
        headers: {
            'Content-Type': "application/json"
        }
    }).then((response) => {
        return response.json();
    }).then((data) => {
        alert(data.message);
        getAllBooks();
    }).catch((error) => {
        console.log(error);
    })
}

const getAllEmployees = () => {
    fetch(`${baseUrl}/employee`).then((response) => {
        return response.json();
    }).then((res) => {
        authors = res.data;
        updateEmployeeUI(res.data);
        getAllHotels();
    }).catch((error) => {
        console.log(error);
    })
}

const updateHotelUI = (data) => {
    hotelTable.innerHTML = "";
    console.log(data, "INCOMING VALUE");

    for (let i = 0; i < data.length; i++) {
        let employeeName = addEmployeeName(data[i].employee, employees);
        let id = data[i]._id;
        bookTable.innerHTML += `
            <tr>
                <td>${data[i]._id}</td>
                <td>${data[i].name}</td>
                <td>${data[i].address}</td>
                <td>${employeeName}</td>
                <td><button class="btn btn-danger" onclick="deleteHotel('${id}')">Delete</button></td>
            </tr>
        `
    }
}


const deleteHotel = (hotelId) => {
    fetch(`${baseUrl}/hotel/${hotelId}`, {
        method: "DELETE"
    }).then((response) => {
        return response.json();
    }).then((res) => {
        getAllHotels();
        alert(res.message);
    }).catch((error) => {
        console.log(error);
    })
}


const addEmployeeName = (employeeId, employeeList) => {
    
}

const getAllHotels = () => {
    fetch(`${baseUrl}/hotel`).then((response) => {
        return response.json();
    }).then((res) => {
        updateHotelUI(res.data);
    }).catch((error) => {
        console.log(error);
    })
}


const updateEmployeeUI = (data) => {
    for (let i = 0; i < data.length; i++) {
        employeeList.innerHTML += `<option value=${data[i]._id}>${data[i].name}</option>`;
    }
}


getAllEmployees();