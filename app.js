const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');

const mainRoute = require('./routers/main');

app.listen(port, () => {
    console.log(`servidor corriendo en ${port}`);
})

app.use(express.static(path.join(__dirname , 'public')));

app.use('/', mainRoute);