const express = require('express');
const app = express();
const routes = require('./routes')
const port = 3000;

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

// Définir le répertoire des vues
app.set('views', __dirname + '/views');

app.use(routes);


app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});