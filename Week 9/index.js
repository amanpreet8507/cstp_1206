const express = require('express'); // This is importing the download express package
const app =  express(); // This is the function i am sending inside a variable called as app
const PORT = 4000;


//Middlewares
app.use(express.json()); //This middle

express.json();

let studentList = [
    {
        id: 1,
        name:"amanpreet",
        age:23,
        college: "VCC"
    },
    {
        id: 2,
        name:"jas",
        age:22,
        college: "VCC"
    },
    {
        id: 3,
        name:"micheal",
        age:19,
        college: "VCC"
    },
    {
        id: 4,
        name:"dan",
        age:16,
        college: "VCC"
    }
];


// APP GET ****************************************************************
app.get('/', (req, res)=>{
    res.send('Welcome to home page!!!');
})
app.get('/students', (req, res) => {
    res.send(studentList);
})
app.get('/students/above18', (req, res) => {
    const studensabove18 = studentList.filter((student)=> student.age > 18 ? true : false);
    res.send(studensabove18);
})

app.get('/api', (req, res) => {
    res.send('Welcome to API page');
})


app.get('/success',(req,res) => {
    res.send('You got it!...');
})

// APP GET  ENDS****************************************************************


// APP POST ********************************************************************
app.post('/students/create', (req, res) => {
    const newStudent = req.body; //So this is the place where some client will send data to be created on the web

    studentList.push(newStudent);
    res.send(studentList);
})

// APP POST ENDS****************************************************************


// APP DELETE ****************************************************************
app.delete('/students/delete/:id', (req, res) => {
    const studentID = req.params.id;

    studentList = studentList.filter((student) => student.id != studentID ? true : false);

    res.send(studentList);
})
// APP DELETE ENDS****************************************************************

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);

})

