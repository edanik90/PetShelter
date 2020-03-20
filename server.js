const express = require('express'),
    app = express(),
    port = 8000,
    server = app.listen(port, () => console.log(`Listening on port ${port}`));
const cors = require('cors');
app.use(cors(), express.json(), express.urlencoded({extended:true}))
require('./server/config/database.config');
require('./server/routes/pet.routes')(app);