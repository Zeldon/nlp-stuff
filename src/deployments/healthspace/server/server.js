import express from 'express';

const app = express()

app.get('/api/signup', (req, res) => {

    res.json({
        data: 'you hit the signup endpoint'
    });

});

const port = process.env.port || 8000;

// listen to port number and do something
app.listen(port, ()=> {
    
    console.log(`API is running on port ${port}`)

});