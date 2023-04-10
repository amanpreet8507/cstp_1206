const baseUrl = 'http://localhost:2400/api/v1';
const authorTable = document.querySelector('#employeeTableBody');


let employees = [];
let newEmployee = {};

const submitAuthorForm = (event) => {
    event.preventDefault();

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const contact = document.getElementById('contact');

    newAuthor.name = name.value;
    newAuthor.email = email.value;
    newAuthor.contact = contact.value;

    fetch(`${baseUrl}/employee`, {
        method: "POST",
        body: JSON.stringify(newEmployee),
        headers: {
            'Content-Type': "application/json"
        }
    }).then((response) => {
        return response.json();
    }).then((data) => {
        alert(data.message);
        getAllEmployees();
    }).catch((error) => {
        console.log(error);
    })
}

const getAllEmployees = () => {
    fetch(`${baseUrl}/employee`).then((response) => {
        return response.json();
    }).then((res) => {
        employees = res.data;
        updateEmployeeUI(res.data);
    }).catch((error) => {
        console.log(error);
    })
}

const updateEmployeeUI = (data) => {
    console.log(data, "inside update Employee UI");
    employeeTable.innerHTML = "";

    for (let i = 0; i < data.length; i++) {
        employeeTable.innerHTML += `
            <tr>
                <td>${data[i]._id}</td>
                <td>${data[i].name}</td>
                <td>${data[i].email}</td>
                <td>${data[i].contact}</td>
            </tr>
        `
    }
}


getAllEmployees();