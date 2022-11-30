const express = require('express');
const path = require('path');


const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));

const routerapi = require('./routes/apiRoutes')(app);
const routerhtml = require('./routes/htmlRoutes')(app);

app.listen(PORT, () =>
console.log(`Listening at http://localhost:${PORT}`));


