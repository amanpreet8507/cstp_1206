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

// PUT API STARTS****************************************************************

app.put('/students/update/:id',(req, res) => {
    const studentID = req.params.id;
    const updateStudentData = req.body;

    studentList = studentList.map((data) => {
        if(data.id == studentID) {
            data = updateStudentData;
        }
        return data;
    })

    res.send(studentList);
})
// PUT API ENDS*******************************************************************

// GET API  FOR GETTING INDIVIDUAL STUDENT STARTS *******************************************************************
app.get('/students/:id',(req, res) => {
    const studentID = req.params.id;

    let foundStudent = studentList.find((student) => {
        if(student.id == studentID) {
            return student;
        }
    })

    //What if the student was wrong
    if(foundStudent) {
        res.send(foundStudent);
    } else {
        "The student is not found ";
    }
})

// GET API  FOR GETTING INDIVIDUAL STUDENT ENDS *******************************************************************


//LISTENING TO SERVE ON THIS PORT - 4000
app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);

})

