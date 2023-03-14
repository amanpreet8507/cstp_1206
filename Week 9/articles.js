const express = require('express'); // This is importing the download express package
const app =  express(); // This is the function i am sending inside a variable called as app
const PORT = 5000;


//Middlewares
app.use(express.json()); //This middle

express.json();

let articlesList = [
    {
        id: 1,
        title: 'Technology is booming',
        description: 'Technology lorem lorem lorem lorem lorem lorem ',
        author: 'Prabh'
    },
    {
        id: 2,
        title: 'Science is scary',
        description: 'Science lorem lorem lorem lorem lorem lorem ',
        author: 'Daniel'
    },
    {
        id: 3,
        title: 'Maths is boring',
        description: 'Maths lorem lorem lorem lorem lorem lorem ',
        author: 'Mike'
    },
    {
        id: 4,
        title: 'English is a must to know!',
        description: 'English lorem lorem lorem lorem lorem lorem ',
        author: 'David'
    }
];


// APP GET ****************************************************************
app.get('/', (req, res)=>{
    res.send('Welcome to home page!!!');
})
app.get('/articles', (req, res) => {
    res.send(articlesList);
})


// APP GET  ENDS****************************************************************


// APP POST ********************************************************************
app.post('/articles/create', (req, res) => {
    const newArticle = req.body; //So this is the place where some client will send data to be created on the web

    articlesList.push(newArticle);
    res.send(articlesList);
})

// APP POST ENDS****************************************************************


// APP DELETE ****************************************************************
app.delete('/articles/delete/:id', (req, res) => {
    const articleID = req.params.id;

    articlesList = articlesList.filter((article) => article.id != articleID ? true : false);

    res.send(articlesList);
})
// APP DELETE ENDS****************************************************************

// PUT API STARTS****************************************************************

app.put('/articles/update/:id',(req, res) => {
    const articleID = req.params.id;
    const updateArticleData = req.body;

    articlesList = articlesList.map((data) => {
        if(data.id == articleID) {
            data = updateArticleData;
        }
        return data;
    })

    res.send(articlesList);
})
// PUT API ENDS*******************************************************************


//LISTENING TO SERVE ON THIS PORT - 5000
app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);

})

