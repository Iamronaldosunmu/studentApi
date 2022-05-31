const express = require('express');
const app = express();
const port = 3000;
const studentRoutes = require('./src/student/routes');
 

app.use('/api/v1/students', studentRoutes);
app.get('/', (req, res) => {
    res.send('The server is running')
});

app.listen(port, () => console.log(`The server is now running on port ${port}`));